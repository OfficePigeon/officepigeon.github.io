
/*
 Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
 Perlenspiel is Copyright Â© 2009-17 Worcester Polytechnic Institute.
 This file is part of Perlenspiel.

 Perlenspiel is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published
 by the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Perlenspiel is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU Lesser General Public License for more details.

 You may have received a copy of the GNU Lesser General Public License
 along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.
 */

/*jslint nomen: true, white: true */
/*global PS */

"use strict";

//-------------------------------------------------------------------------------------------------
//                                      Abstract Game
//                               William Hartman and Aidan Buffum
//
//                                   For IMGD 2900 at WPI
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//                                   PERLENSPIEL CALLBACKS
//-------------------------------------------------------------------------------------------------

 var db = null;
//var db = "Umbra (Formerly Lantern)";

var gridWidth = 0;
var gridHeight = 0;

var songChannel = '';

var finalize = function () {
    //Load music
    PS.audioLoad('fx_click');
	/*
    songChannel = PS.audioLoad(
        'bgMusic',
        {
            autoplay: true,
            loop: true,
            path: '',
            fileTypes: ['mp3']
        }
    );*/

    //Start the game
    GameState.setLevel(GameState.levelNum);
    GameState.update('none');
};

// Set up the Perlenspiel grid and all of our toy's internal state
PS.init = function(system, options) {
    if ( db ) {
        db = PS.dbInit( db, { login : finalize } );
        if ( db === PS.ERROR ) {
            db = null;
        }
    }
    else {
        finalize();
    }
};

PS.keyDown = function(key, shift, ctrl, options) {
    if(key === PS.KEY_ARROW_LEFT || key === 97){
        GameState.update('west');
    }
    if  (key === PS.KEY_ARROW_RIGHT || key === 100) {
        GameState.update('east');
    }
    if(key === PS.KEY_ARROW_UP || key === 119) {
        GameState.update('north');
    }
    if(key === PS.KEY_ARROW_DOWN || key === 115) {
        GameState.update('south');
    }

    if(key === PS.KEY_ESCAPE) {
        GameState.nextLevel();
    }
};

PS.shutdown = function( options ) {
    if ( db && PS.dbValid( db ) ) {
        PS.dbEvent( db, "shutdown", true );
        PS.dbSend( db, "bmoriarty", { discard : true } );
    }
};


//-------------------------------------------------------------------------------------------------
//                                         GAME STATE
//-------------------------------------------------------------------------------------------------

//Container for game state - Deals with updating the simulation, keeping track of which levels,
//keeping track of score/attemps, and keeping track of input
var GameState = {
    levelNum: 0,
    level: null,

    //Sets the next level (this is where we could hook into random levels)
    nextLevel: function() {
        if(GameState.levelNum + 1 < levelData.length) {
            GameState.setLevel(GameState.levelNum + 1);
        } else {
            //Send final data
            if ( db && PS.dbValid( db ) ) {
                PS.dbEvent( db, "gameover", true );
                PS.dbSend( db, "bmoriarty", { discard : true } );
                db = null;
            }
        }
    },


    //Set the level that will be drawn. Refreshes the grid and status line state.
    setLevel: function(levelNum) {
        //Housekeeping, level loading
        GameState.levelNum = levelNum;
        GameState.level = Level.loadLevel(levelData, GameState.levelNum);
        gridWidth = GameState.level.cells[0].length;
        gridHeight = GameState.level.cells.length;

        //Set up the PS grid
        PS.gridSize(gridWidth, gridHeight);
        PS.gridColor(PS.makeRGB(89, 89, 89));
        PS.gridShadow(true, PS.COLOR_BLACK);
        PS.statusColor(PS.COLOR_WHITE);
        PS.statusText(GameState.level.statusMessage);
        PS.statusText("Umbra");//Remove this line to make custom status lines appear

        //Put the level into regions
        Grid.initRegions(GameState.level);

        //Clear existing Characters
        Characters.clear();

        //Find the start cell and put the character there
        var i, j;
        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                if(Grid.cells[i][j].tag ==='start') {
                    Characters.addCharacter(i, j);
                }
            }
        }

        //Reset darkness, redraw
        Darkness.reset(GameState.level.initialDarknessProgress - 1);
        GameState.update('none');

        GameState.level.onLoad();
    },


    //Restart the level
    restartLevel: function() {
        GameState.setLevel(GameState.levelNum);
    },


    //Update the state of the game
    update: function(dir) {
        //Update everything
        Grid.update();
        Characters.update(dir);
        Darkness.update();
        /* This call checks whether the updated darkness has reached the
         * player without altering the player's location on the grid */
        Characters.update('SECONDUPDATE');


        //Draw everything
        Grid.copyToPSGrid();
        Characters.copyToPSGrid();
        Darkness.copyToPSGrid();
        PS.gridRefresh();

        //Check if we should move to the next level
        if(Characters.isEmpty()) {
            if (db && PS.dbValid(db)) {
                PS.dbEvent(db, "completed level", GameState.levelNum);
            }
            GameState.nextLevel();
        }
    },
};

//-------------------------------------------------------------------------------------------------
//                                    GRID STATE
//-------------------------------------------------------------------------------------------------
//                           - Level loading in level.js
//                           - Level data in leveldata.js
//-------------------------------------------------------------------------------------------------

//Container for region functions. Deals with updating and drawing regions
var Grid = {
    cells: [],

    // Initialize the regions based level data
    initRegions: function(level) {
        //Set the region data to the matrix transpose of the level data
        Grid.cells = level.cells[0].map(function(col, i) {
            return level.cells.map(function(row) {
                return row[i];
            });
        });
    },


    //Check if the given x,y position is inside the regions grid (i.e. that -1 < x < gridWidth)
    isInBounds: function(x, y) {
        return (x >= 0) && (x < gridWidth) && (y >= 0) && (y < gridHeight);
    },


    isCellOfType: function(x, y, type) {
        return Grid.cells[x][y].type === type;
    },

    update: function() {
        var i, j;

        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                Grid.cells[i][j].onUpdate();
            }
        }
    },

    //Refresh the Perlenspiel bead grid seperately from the internal representation.
    copyToPSGrid: function() {
        var i, j;

        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                PS.alpha(i, j, PS.ALPHA_OPAQUE);
                PS.bgAlpha(i, j, PS.ALPHA_OPAQUE);
                PS.borderAlpha(i, j, PS.ALPHA_OPAQUE);

                PS.color(i, j, Grid.cells[i][j].color);
                PS.border(i, j, 0);
                PS.glyphColor(i, j, Grid.cells[i][j].glyphColor);
                PS.glyph(i, j, Grid.cells[i][j].glyph);
                PS.radius(i, j, 0);
            }
        }
    },
};

//-------------------------------------------------------------------------------------------------
//                                    Darkness State
//-------------------------------------------------------------------------------------------------

//Deals with representing and updating the darkness
var Darkness = {

    numUpdates: 0,

    //Reset the number of updates that have happened
    reset: function(newVal) {
        Darkness.numUpdates = newVal;
    },

    //Update the step number that will be used to generate darkness values
    update: function() {
        Darkness.numUpdates += 1;
    },

    //Check if a cell is as dark or darker than the threshold value. (255 is black, 0 is not dark at all)
    checkIfDark: function(x, y, threshold) {
        return GameState.level.darkness(gridWidth, gridHeight, Darkness.numUpdates)[x][y] >= threshold;
    },

    //Refresh the Perlenspiel bead grid seperately from the internal representation.
    copyToPSGrid: function() {
        var darknessVals = GameState.level.darkness(gridWidth, gridHeight, Darkness.numUpdates);
        var i, j;

        PS.gridPlane(1);
        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                PS.alpha(i, j, darknessVals[i][j]);
                PS.color(i, j, PS.COLOR_BLACK);
            }
        }
        PS.gridPlane(0);
    },

    //Return a 2D array of the darkness values
    getDarknessVals: function() {
        var darknessVals = GameState.level.darkness(gridWidth,gridHeight,Darkness.numUpdates);
        return darknessVals;
    },
}

//-------------------------------------------------------------------------------------------------
//                                    Character State
//-------------------------------------------------------------------------------------------------

//Deals with representing and updating a character
var Characters = {
    characterList: [],


    //Clear Characters
    clear: function() {
        Characters.characterList = [];
    },


    //Returns if there are no characters
    isEmpty: function() {
        return Characters.characterList.length === 0;
    },


    //Add a new character
    addCharacter: function(x, y) {
        Characters.characterList.push(
            {
                x: x,
                y: y,
                markedForDelete: false
            }
        );
    },


    //Set the state of the character
    moveTo: function(c, x, y) {
        //Check that no characters are in this space
        var characterInSpace = false;
        Characters.characterList.forEach(function(c2) {
            characterInSpace = characterInSpace || (c2.x === x && c2.y === y);
        });

        if(!characterInSpace) {
            c.x = x;
            c.y = y;
        }
    },


    //Remove a character from the list
    markForRemoval: function(c) {
        c.markedForDelete = true;
    },


    //Delete all marked characters from the list
    removeAllMarked: function(c) {
        var i;
        for(i = 0; i < Characters.characterList.length; i++) {
            if(Characters.characterList[i].markedForDelete) {
                Characters.characterList.splice(i, 1);
                i--;
            }
        }
    },


    //Update the state of the character list, dealing with removal, movement, and collisions
    update: function(dir) {
        //Update allive characters
        Characters.characterList.forEach(function(c) {
            var vX, vY;
            switch(dir) {
                case 'north': vX =  0; vY = -1; break;
                case 'south': vX =  0; vY =  1; break;
                case 'east':  vX =  1; vY =  0; break;
                case 'west':  vX = -1; vY =  0; break;
                case 'SECONDUPDATE': vX = 0; vY = 0; break;

                default: return;
            }

            var predictedX = c.x + vX;
            var predictedY = c.y + vY;

            if(Grid.isInBounds(predictedX, predictedY)) {
                Grid.cells[predictedX][predictedY].onCollision(c);
            }

            //Check whether the player is in darkness
            if (Darkness.checkIfDark(c.x, c.y, 255)){
                //Send level completion data on finish
                if (db && PS.dbValid(db)) {
                    PS.dbEvent(db, "death on level", GameState.levelNum);
                }

                GameState.restartLevel();
            }
        });

        //Remove marked characters
        Characters.removeAllMarked();
    },


    //Draw character on the Perlenspiel grid
    copyToPSGrid: function() {
        Characters.characterList.forEach(function(c) {
            PS.border(c.x, c.y, 0)
            PS.radius(c.x, c.y, 50);

            PS.alpha(c.x, c.y, 255);
            PS.bgAlpha(c.x, c.y, 255);

            PS.color(c.x, c.y, PS.COLOR_BLACK);

            //Grab the darknessVals array
            var darkVals = Darkness.getDarknessVals(); //255 if black, 0 if white

            //Determine how dark the current space is
            var newColor = Grid.cells[c.x][c.y].color;
            var darkBG = darkVals[c.x][c.y];
            if (darkBG > 0) {
                var r = PS.unmakeRGB(newColor, [0, 0, 0])[0];
                var g = PS.unmakeRGB(newColor, [0, 0, 0])[1];
                var b = PS.unmakeRGB(newColor, [0, 0, 0])[2];

                var darkAmount = 255 / darkBG;
				if (!(r)) r = 0;
				if (!(g)) g = 0;
				if (!(b)) b = 0;
                newColor = PS.makeRGB(r/darkAmount, g/darkAmount, b/darkAmount);
            }
			if (newColor)
            		PS.bgColor(c.x, c.y, newColor);
			else
				PS.bgColor(c.x,c.y,(0,0,0));
        });
    },
};

//-------------------------------------------------------------------------------------------------
//                                       UNUSED CALLBACKS
//-------------------------------------------------------------------------------------------------

PS.enter = function( x, y, data, options ) {};

PS.exitGrid = function( options ) {};

PS.release = function( x, y, data, options ) {};

PS.exit = function( x, y, data, options ) {};

PS.keyUp = function( key, shift, ctrl, options ) {};

PS.input = function( sensors, options ) {};

PS.swipe = function( data, options ) {};