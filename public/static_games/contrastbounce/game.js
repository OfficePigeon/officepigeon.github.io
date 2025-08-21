// game.js for Perlenspiel 3.2.x

/*
 Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
 Perlenspiel is Copyright © 2009-17 Worcester Polytechnic Institute.
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

// The "use strict" directive in the following line is important. Don't remove it!
"use strict";

// The following comment lines are for JSLint/JSHint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

//-------------------------------------------------------------------------------------------------
//                                      Contrast Bounce
//                               William Hartman and Aidan Buffum
//
//                                   For IMGD 2900 at WPI
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//                                   PERLENSPIEL CALLBACKS
//-------------------------------------------------------------------------------------------------

var gridWidth = 0;
var gridHeight = 0;

// Set up the Perlenspiel grid and all of our toy's internal state
PS.init = function( system, options ) {
    PS.audioLoad('fx_swoosh');
    PS.audioLoad('fx_squawk');
    PS.audioLoad('fx_tick');
    PS.audioLoad('fx_pop');
    PS.audioLoad('fx_tada');


    //Start the game
    GameState.setLevel(GameState.levelNum);

    //Start updating
    var updateRate = 41.667; //Update at 24Hz
    setInterval(function() {GameState.update(updateRate); }, updateRate);
};

//Change the clicked bead and all beads surrounding it (if valid) to black or white depending on
//whether the original color of that bead was white or black respectively
PS.touch = function( x, y, data, options ) {
    GameState.paintAt(x, y);
};

PS.keyUp = function( key, shift, ctrl, options ) {
    if(key === 32) {
        GameState.toggleRunning();
    }
    if(key === 82 || key === 114) {
        GameState.setLevel(GameState.levelNum);
    }
};


//-------------------------------------------------------------------------------------------------
//                                         TOY STATE
//-------------------------------------------------------------------------------------------------

//Container for toy state - Deals with updating the simulation and keeping track of input
var GameState = {
    BALL_CREATION_FREQ: 2500, //Number of milliseconds between each new bouncer
    levelNum: 0,
    level: null,
    running: true,
    hintCounter: 0,

    setLevel: function(levelNum) {
        GameState.running = false;

        GameState.levelNum = levelNum;
        GameState.level = levels()[levelNum];
        gridWidth = GameState.level.state[0].length;
        gridHeight = GameState.level.state.length;

        PS.gridSize(gridWidth, gridHeight);
        PS.gridColor(PS.makeRGB(89, 89, 89));
        PS.gridShadow(true, PS.COLOR_BLACK);
        PS.statusColor(PS.COLOR_WHITE);

        Region.initRegions(GameState.level);
        GameState.hintCounter = 0;
        GameState.updateStatusLineText();
    },

    updateStatusLineText: function(numChanges) {

        PS.statusText("Level: " + (GameState.levelNum + 1) +
            " - Par: " + GameState.level.par +
            " - Current: " + GameState.findNumChanges());
        if (GameState.hintCounter >= GameState.level.hintAttempts && GameState.level.hintAttempts > 0){
            PS.statusText("Hint - " + GameState.level.hint);
        }
        else{
            PS.statusText("Level: " + (GameState.levelNum + 1) +
            "- Par: " + GameState.level.par +
            " - Current: " + GameState.findNumChanges());
        }

    },

    toggleRunning: function() {
        if (!GameState.running){
            GameState.hintCounter++;
        }
        GameState.setRunning(!GameState.running);
    },

    setRunning: function(isRunning) {
        if(isRunning) {
            GameState.running = true;
            GameState.shootBouncers();
        } else {
            GameState.running = false;
            Region.resetAllOfType('bwall');
            Bouncer.clear();
        }
    },

    //Paint, passing along to setRegion. Also update text
    paintAt: function(x, y) {
        if(!GameState.running) {
            Region.setRegion(x, y, GameState.level.drawSize);
            GameState.updateStatusLineText();
        }
    },

    shootBouncers: function() {
        Bouncer.clear();

        //Add in the new bouncers
        var i, j;
        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                if(Region.regions[i][j].type === 'whiteshooter' || Region.regions[i][j].type === 'blackshooter') {
                    Region.regions[i][j].shoot();
                }
            }
        }
    },

    findNumChanges: function() {
        var numChanges = 0;
        var i, j;
        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                var isChangeable =
                    Region.regions[i][j].originalType === 'white' ||
                    Region.regions[i][j].originalType === 'black' ||
                    Region.regions[i][j].originalType === 'whiteshooter' ||
                    Region.regions[i][j].originalType === 'blackshooter' ||
                    Region.regions[i][j].originalType === 'whitechainshooter' ||
                    Region.regions[i][j].originalType === 'blackchainshooter'
                if(isChangeable && (Region.regions[i][j].originalType !== Region.regions[i][j].type)) {
                    numChanges += 1;
                }
            }
        }
        return numChanges;
    },

    update: function(delta) {
        Region.copyRegionsToPSGrid();

        if(GameState.running) {
            Bouncer.updateAllBouncers(delta);
            Bouncer.copyBouncersToPSGrid();
        }
        PS.gridRefresh();
        GameState.updateStatusLineText();
    },
}


//Container for region functions. Deals with updating and drawing regions
var Region = {
    regions: [], //Our internal region representation - 0 for black, 1 for white

    // Initialize the regions based on our size global at runtime, rather than in code
    initRegions: function(level) {
        //Set the region data to the matrix transpose of the level data
        Region.regions= level.state[0].map(function(col, i) {
            return level.state.map(function(row) {
                return row[i];
            });
        });

        //Make sure level data is reset
        Region.resetAllOfType('white');
        Region.resetAllOfType('black');
        Region.resetAllOfType('swall');
        Region.resetAllOfType('kwall');
        Region.resetAllOfType('bwall');
        Region.resetAllOfType('whiteshooter');
        Region.resetAllOfType('blackshooter');
        Region.resetAllOfType('whitechainshooter');
        Region.resetAllOfType('blackchainshooter');
        Region.resetAllOfType('goal');
    },



    //Check if the given x,y position is inside the regions grid (i.e. that -1 < x < gridWidth)
    isInBounds: function(x, y) {
        return (x >= 0) && (x < gridWidth) && (y >= 0) && (y < gridHeight);
    },



    //Flip the all cells within a (2*radius + 1) square of the given x/y pair
    setRegion: function(x, y, radius) {
        var i, j;

        //Iterate through all boxes within the radius, setting the value if the box is in bounds
        for(i = x - radius; i < x + radius + 1; i++) {
            for(j = y - radius; j < y + radius + 1; j++) {
                Region.regions[i][j].onClick();
            }
        }
    },



    //Reset all instances of the passed type
    resetAllOfType: function(type) {
        var i, j;

        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                if(Region.regions[i][j].originalType === type) {
                    Region.regions[i][j].reset();
                }
            }
        }
    },



    //Refresh the Perlenspiel bead grid seperately from the internal representation.
    copyRegionsToPSGrid: function() {
        var i, j;

        for(i = 0; i < gridWidth; i++) {
            for(j = 0; j < gridHeight; j++) {
                PS.radius(i, j, 0);
                PS.color(i, j, Region.regions[i][j].color);
                PS.glyph(i, j, Region.regions[i][j].glyph);
                PS.glyphColor(i, j, Region.regions[i][j].glyphColor);

                if(Region.regions[i][j].type === 'black') {
                    PS.borderColor(i, j, 0x191919);
                } else if(Region.regions[i][j].type === 'white') {
                    PS.borderColor(i, j, 0xe2e2e2);
                } else {
                    PS.borderColor(i, j, Region.regions[i][j].color);
                }
            }
        }
    },
}



//Bouncer representation
var Bouncer = {
    bouncers: [],

    addBouncer: function(x, y, vX, vY, type, life) {
        Bouncer.bouncers.push({
            type: type,
            x: x,
            y: y,
            vX: vX,
            vY: vY,
            life: life,
        });
    },



    //Remove all bouncers
    clear: function() {
        Bouncer.bouncers = [];
    },



    //Remove a passed bouncer from the list
    removeBouncer: function(bouncer) {
        var index = Bouncer.bouncers.indexOf(bouncer);
        if(index > -1) {
            Bouncer.bouncers.splice(index, 1);
        }
    },



    //Update the state of a bouncer
    updateBouncer: function(bouncer, delta) {
        var predictedX = bouncer.x + bouncer.vX;
        var predictedY = bouncer.y + bouncer.vY;
        var mayNeedBounce =
            !Region.isInBounds(predictedX, predictedY) ||
            Region.regions[predictedX][predictedY].type !== bouncer.type ||
            !Region.isInBounds(predictedX, bouncer.y) ||
            Region.regions[predictedX][bouncer.y].type !== bouncer.type ||
            !Region.isInBounds(bouncer.x, predictedY) ||
            Region.regions[bouncer.x][predictedY].type !== bouncer.type;

        //Check if the bouncer is on the wrong color (this could happen if the region changed. Kill it if it is)
        //Also play the uh-oh sound, put in painting mode
        if(Region.regions[bouncer.x][bouncer.y].type !== bouncer.type) {
            Bouncer.removeBouncer(bouncer);
            PS.audioPlay('fx_squawk');
            GameState.toggleRunning();
            return;
        }

        //Check if the bouncer out of life. If it is, kill it
        //Also play the uh-oh sound, put in painting mode
        if(bouncer.life <= 0) {
            Bouncer.removeBouncer(bouncer);
            PS.audioPlay('fx_tick');
            return;
        }

        //Update the position. If we need a bounce, skip this and only change velocity
        if(!mayNeedBounce) {
            bouncer.x = predictedX;
            bouncer.y = predictedY;
        }
        else {
            var isNorthSouthCollision =
                (!Region.isInBounds(bouncer.x, bouncer.y - 1)) ||
                (Region.regions[bouncer.x][bouncer.y - 1].type !== bouncer.type) ||
                (!Region.isInBounds(bouncer.x, bouncer.y + 1)) ||
                (Region.regions[bouncer.x][bouncer.y + 1].type !== bouncer.type);

            var isEastWestCollision =
                (!Region.isInBounds(bouncer.x + 1, bouncer.y)) ||
                (Region.regions[bouncer.x + 1][bouncer.y].type !== bouncer.type) ||
                (!Region.isInBounds(bouncer.x - 1, bouncer.y)) ||
                (Region.regions[bouncer.x - 1][bouncer.y].type !== bouncer.type);

            var isAngledCollision =
                (!Region.isInBounds(bouncer.x - 1, bouncer.y - 1)) ||
                (!Region.isInBounds(bouncer.x + 1, bouncer.y + 1)) ||
                (Region.regions[bouncer.x - 1][bouncer.y - 1] !== bouncer.val) ||
                (Region.regions[bouncer.x + 1][bouncer.y + 1] !== bouncer.val) ||
                (!Region.isInBounds(bouncer.x + 1, bouncer.y - 1)) ||
                (!Region.isInBounds(bouncer.x - 1, bouncer.y + 1)) ||
                (Region.regions[bouncer.x + 1][bouncer.y - 1] !== bouncer.val) ||
                (Region.regions[bouncer.x - 1][bouncer.y + 1] !== bouncer.val);

            if(isNorthSouthCollision) {
                if(Region.isInBounds(bouncer.x, bouncer.y + bouncer.vY)) {
                    Region.regions[bouncer.x][bouncer.y + bouncer.vY].onCollision(bouncer);
                }
                bouncer.vY *= -1;
            }
            if(isEastWestCollision) {
                if(Region.isInBounds(bouncer.x + bouncer.vX, bouncer.y)) {
                    Region.regions[bouncer.x + bouncer.vX][bouncer.y].onCollision(bouncer);
                }
                bouncer.vX *= -1;

            }
            if(isAngledCollision && !isNorthSouthCollision && !isEastWestCollision) {
                if(Region.isInBounds(bouncer.x + bouncer.vX, bouncer.y + bouncer.vY)) {
                    Region.regions[bouncer.x + bouncer.vX][bouncer.y + bouncer.vY].onCollision(bouncer);
                }
                bouncer.vX *= -1;
                bouncer.vY *= -1;
            }
        }
    },



    //Convenience function to update all bouncers
    updateAllBouncers: function(delta) {
        Bouncer.bouncers.forEach(function(b) {
            Bouncer.updateBouncer(b, delta);
        })

        //Stop the game from running if there are no bouncers
        if(Bouncer.bouncers.length === 0) {
            GameState.setRunning(false);
        }
    },



    //Draw bouncers to the Perlenspiel grid
    copyBouncersToPSGrid: function() {
        Bouncer.bouncers.forEach(function(b) {
            PS.radius(b.x, b.y, 50);
            PS.bgAlpha(b.x,b.y,255);
            PS.color(b.x, b.y, b.type === 'black' ? PS.COLOR_WHITE : PS.COLOR_BLACK);
            PS.bgColor(b.x, b.y, b.type === 'black' ? PS.COLOR_BLACK : PS.COLOR_WHITE);
        })
    },
}

//-------------------------------------------------------------------------------------------------
//                                            LEVELS
//-------------------------------------------------------------------------------------------------

var levels = function() {
    //------------------------------------------------------------
    //     Short-hands for declaring walls of different types
    //------------------------------------------------------------

    var velocityToGlyph = function(vX, vY) {
        if(vX === 1 && vY === -1) {
            return '⬈';
        }
        if(vX === -1 && vY === -1) {
            return '⬉';
        }
        if(vX === -1 && vY === 1) {
            return '⬋';
        }
        if(vX === 1 && vY === 1) {
            return '⬊';
        }
    }

    //White regions. Changeable
    var white = function() {
        return {
            type: 'white',
            originalType: 'white',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: PS.COLOR_WHITE,

            onCollision: function(bouncer) {
                bouncer.life -= 1;
            },
            onClick: function() {
                this.type = 'black';
                this.color = PS.COLOR_BLACK;
                this.onClick = black().onClick;
            },
            reset: function() {
                this.type = 'white';
                this.color = PS.COLOR_WHITE;
                this.onClick = white().onClick;
            }
        };
    }

    //Black regions. Changeable
    var black = function() {
        return {
            type: 'black',
            originalType: 'black',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: PS.COLOR_BLACK,

            onCollision: function(bouncer) {
                bouncer.life -= 1;
            },
            onClick: function() {
                this.type = 'white';
                this.color = PS.COLOR_WHITE;
                this.onClick = white().onClick;
            },
            reset: function() {
                this.type = 'black';
                this.color = PS.COLOR_BLACK;
                this.onClick = black().onClick;
            }
        };
    }

    //Static walls. Unchangeable
    var sWall = function() {
        return {
            type: 'swall',
            originalType: 'swall',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: 0x707070,

            onCollision: function(bouncer) {
                bouncer.life -= 1;
            },
            onClick: function() {},
            reset: function() {}
        }
    }

    //Killer walls. Unchangeable. Immediately kill bouncer on collision
    var kWall = function() {
        return {
            type: 'kwall',
            originalType: 'kwall',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: 0xffa100,

            onCollision: function(bouncer) {
                bouncer.life = 0;
            },
            onClick: function() {},
            reset: function() {}
        }
    }

    //Breakable walls. Unchangeable (by clicks). Breaks after a collision
    var bWall = function(life) {
        return {
            type: 'bwall',
            originalType: 'bwall',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: 0x63a6ff,
            life: life,
            maxLife: life,

            onCollision: function(bouncer) {
                bouncer.life -= 1;
                this.life -= 1;
                if(this.life <= 0) {
                    this.type = bouncer.type === 'white' ? 'white' : 'black';
                    this.color = bouncer.type === 'white' ? PS.COLOR_WHITE : PS.COLOR_BLACK;
                    this.onClick = bouncer.type === 'white' ? white().onClick : black().onClick;
                    this.onCollision = bouncer.type === 'white' ? white().onCollision : black().onCollision;
                    PS.audioPlay('fx_pop');
                }
            },
            onClick: function() {},
            reset: function() {
                this.type = 'bwall';
                this.color = 0x63a6ff;
                this.life = this.maxLife;
                this.onClick = bWall().onClick;
                this.onCollision = bWall().onCollision;
            }
        };
    }

    //White ball shooter (on white squares, shoots black ball)
    var whiteS = function(x, y, vX, vY) {
        var res = {
            type: 'whiteshooter',
            originalType: 'whiteshooter',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: 0x63d347,
            x: x,
            y: y,
            vX: vX,
            vY: vY,

            onCollision: function(bouncer) {},
            shoot: function() {
                var numBounces = levels()[GameState.levelNum].numBounces > 0 ? levels()[GameState.levelNum].numBounces : Infinity;
                Bouncer.addBouncer(this.x + this.vX, this.y + this.vY, this.vX, this.vY, 'white', numBounces);
                PS.audioPlay('fx_swoosh');
            },
            onClick: function() {
                this.type = 'blackshooter';
                this.glyphColor = PS.COLOR_WHITE;
                this.onClick = blackS().onClick;
                this.shoot = blackS().shoot;
            },
            reset: function() {
                this.type = 'whiteshooter';
                this.glyphColor = PS.COLOR_BLACK,
                    this.onClick = whiteS().onClick;
                this.shoot = whiteS().shoot;
            }
        };
        res.glyph = velocityToGlyph(vX, vY);
        return res;
    }

    //Black ball shooter (on black squares, shoots white ball)
    var blackS = function(x, y, vX, vY) {
        var res = {
            type: 'blackshooter',
            originalType: 'blackshooter',
            glyph: '',
            glyphColor: PS.COLOR_WHITE,
            color: 0x63d347,
            x: x,
            y: y,
            vX: vX,
            vY: vY,

            onCollision: function(bouncer) {},
            shoot: function() {
                var numBounces = levels()[GameState.levelNum].numBounces > 0 ? levels()[GameState.levelNum].numBounces : Infinity;
                Bouncer.addBouncer(this.x + this.vX, this.y + this.vY, this.vX, this.vY, 'black', numBounces);
                PS.audioPlay('fx_swoosh');
            },
            onClick: function() {
                this.type = 'whiteshooter';
                this.glyphColor = PS.COLOR_BLACK;
                this.onClick = whiteS().onClick;
                this.shoot = whiteS().shoot;
            },
            reset: function() {
                this.type = 'blackshooter';
                this.glyphColor = PS.COLOR_WHITE,
                    this.onClick = blackS().onClick;
                this.shoot = blackS().shoot;
            }
        };
        res.glyph = velocityToGlyph(vX, vY);
        return res;
    }

    //White chain reaction ball shooter. (on black squares, shoots white ball on collision)
    var whiteC = function(x, y, vX, vY) {
        var res = {
            type: 'whitechainshooter',
            originalType: 'whitechainshooter',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: 0x9f70ff,
            life: 1,
            x: x,
            y: y,
            vX: vX,
            vY: vY,

            onCollision: function(bouncer) {
                bouncer.life = 0;
                var numBounces = levels()[GameState.levelNum].numBounces > 0 ? levels()[GameState.levelNum].numBounces : Infinity;
                Bouncer.addBouncer(this.x + this.vX, this.y + this.vY, this.vX, this.vY, 'white', numBounces);
                PS.audioPlay('fx_swoosh');
            },
            onClick: function() {
                this.type = 'blackchainshooter';
                this.glyphColor = PS.COLOR_WHITE;
                this.onClick = blackC().onClick;
                this.onCollision = blackC().onCollision;
            },
            reset: function() {
                this.type = 'whitechainshooter';
                this.glyphColor = PS.COLOR_BLACK,
                    this.onClick = whiteC().onClick;
                this.onCollision = whiteC().onCollision;
            }
        };
        res.glyph = velocityToGlyph(vX, vY);
        return res;
    }

    //Black chain reaction ball shooter. (on white squares, shoots black ball on collision)
    var blackC = function(x, y, vX, vY) {
        var res = {
            type: 'blackchainshooter',
            originalType: 'blackchainshooter',
            glyph: '',
            glyphColor: PS.COLOR_WHITE,
            color: 0x9f70ff,
            life: 1,
            x: x,
            y: y,
            vX: vX,
            vY: vY,

            onCollision: function(bouncer) {
                bouncer.life = 0;
                var numBounces = levels()[GameState.levelNum].numBounces > 0 ? levels()[GameState.levelNum].numBounces : Infinity;
                Bouncer.addBouncer(this.x +  this.vX, this.y + this.vY, this.vX, this.vY, 'black', numBounces);
                PS.audioPlay('fx_swoosh');
            },
            onClick: function() {
                this.type = 'whitechainshooter';
                this.glyphColor = PS.COLOR_BLACK;
                this.onClick = whiteC().onClick;
                this.onCollision = whiteC().onCollision;
            },
            reset: function() {
                this.type = 'blackchainshooter';
                this.glyphColor = PS.COLOR_WHITE,
                    this.onClick = blackC().onClick;
                this.onCollision = blackC().onCollision;
            }
        };
        res.glyph = velocityToGlyph(vX, vY);
        return res;
    }

    //goal
    var goal = function() {
        return {
            type: 'goal',
            originalType: 'goal',
            glyph: '☆',
            glyphColor: 0xff8c09,
            color: 0xfff177,
            life: 1,
            onCollision: function(bouncer) {
                Bouncer.clear();
                GameState.setLevel(GameState.levelNum + 1);
                PS.audioPlay('fx_tada');
            },
            onClick: function() {},
            reset: function() {},
        };
    }

    //------------------------------------------------------------
    //     Level definitions
    //------------------------------------------------------------

    return [
        {
            drawSize: 0,
            numBounces: 10,
            par: '0', //minimum is par
            hint: "No changes needed. Press R to reset",
            hintAttempts: 4,
            state: [
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), goal() , white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), whiteS(3, 11, 1, -1), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '0', //minimum is par
            hint: "No changes needed. Press R to reset",
            hintAttempts: 4,
            state: [
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), goal(),  black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), blackS(3, 11, 1, -1), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(), black(),              black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '1', //minimum is par
            hint: "Try inverting the emitter's color",
            hintAttempts: 2,
            state: [
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), goal() , white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), blackS(3, 11, 1, -1), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '5', //minimum is par
            hint: "Make a path between the black areas",
            hintAttempts: 5,
            state: [
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), goal() , black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), blackS(3, 11, 1, -1), black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '25', //minimum is around 15
            hint: "Make a path around the grey bar",
            hintAttempts: 6,
            state: [
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), goal() , black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), sWall(), black(), black(), black(), black(), black(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), sWall(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), sWall(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), blackS(3, 11, 1, -1), black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), black(), black(),              black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(),              white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '6', //minimum is 2
            hint: "Try bouncing in an M shape",
            hintAttempts: 7,
            state: [
                [black(), black(),             black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(),             black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(),             black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(),             black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(),             black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), blackS(1, 5, 1, -1), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), goal(),  black()],
                [black(), black(),             black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [sWall(), sWall(),             sWall(), black(), black(), black(), sWall(), sWall(), sWall(), white(), white(), white(), sWall(), sWall(), sWall()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(),             white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '30', //minimum is 3
            hint: "The areas on the left are misleading",
            hintAttempts: 8,
            state: [
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), sWall(), sWall(), sWall(), white(), white(), sWall(), goal(),  white(), white(), white(),               white()],
                [white(), white(), white(), white(), sWall(), white(), white(), white(), white(), sWall(), sWall(), white(), white(), white(),               white()],
                [sWall(), sWall(), sWall(), sWall(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall(),               sWall()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), whiteS(13, 13, -1, 1), white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),               white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '9', //minimum is 6
            hint: "Start by inverting the emitter's color",
            hintAttempts: 5,
            state:    [
                [black(), black(), black(),        black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), whiteS(2,1,1,1),white(), white(), black(), black(), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), white(),        white(), white(), black(), black(), goal(),  black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), white(),        white(), white(), white(), sWall(), sWall(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),        black(), white(), white(), white(), sWall(), sWall(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), sWall(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),        black(), sWall(), sWall(), white(), white(), sWall(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(),        black(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '7', //minimum is 1
            hint: "Try bouncing in a big V Shape",
            hintAttempts: 8,
            state: [
                [whiteS(0, 0, 1, 1), white(), white(), sWall(), black(), black(), black(), black(), black(), black(), black(), sWall(), white(), white(), goal() ],
                [white(),            white(), white(), sWall(), black(), black(), black(), black(), black(), black(), black(), sWall(), white(), white(), white()],
                [white(),            white(), white(), white(), white(), white(), sWall(), sWall(), sWall(), white(), white(), white(), white(), white(), white()],
                [white(),            white(), white(), white(), white(), white(), sWall(), sWall(), sWall(), white(), white(), white() ,white(), white(), white()],
                [white(),            white(), white(), white(), white(), white(), sWall(), sWall(), sWall(), white(), white(), white(), white(), sWall(), sWall()],
                [white(),            white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), sWall()],
                [sWall(),            sWall(), sWall(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), sWall()],
                [sWall(),            sWall(), sWall(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), sWall()],
                [black(),            black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), sWall()],
                [black(),            black(), black(), black(), white(), white(), white(), white(), sWall(), white(), white(), white(), white(), sWall(), sWall()],
                [black(),            black(), black(), black(), white(), white(), white(), white(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall()],
                [black(),            black(), black(), black(), white(), white(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall(), sWall()],
                [black(),            black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(),            black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
                [black(),            black(), black(), black(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '0', //minimum is par
            hint: "No changes needed. Press R to reset",
            hintAttempts: 4,
            state: [
                [black(), black(), black(), black(), black(), black(), black(), black(),             black(), black(), sWall(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), black(),             black(), black(), sWall(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), black(),             black(), black(), sWall(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), black(),             black(), sWall(), white(), white() ,white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), black(),             sWall(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), blackC(7, 7, -1, 1), white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), black(), sWall(), white(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), black(), sWall(), white(), white(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), sWall(), white(), white(), white(),             white(), white(), white(), white(), white(), whiteS(13, 12, -1, -1), white()],
                [black(), goal(),  black(), black(), sWall(), white(), white(), white(),             white(), white(), white(), white(), white(), white(), white()],
                [black(), black(), black(), black(), sWall(), white(), white(), white(),             white(), white(), white(), white(), white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 8,
            par: '14', //minimum is 1
            hint: "The ball goes too far down at first",
            hintAttempts: 8,
            state: [
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), sWall(), black(), black(), black(), sWall(),              white(), white(), white(), sWall(), white(),             white(), white()],
                [black(), black(), goal(),  sWall(), black(), black(), black(), blackC(7, 7, -1, -1), white(), white(), white(), sWall(), whiteS(12, 7, 1, 1), white(), white()],
                [black(), black(), black(), sWall(), black(), black(), black(), sWall(),              white(), white(), white(), sWall(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
                [black(), black(), black(), black(), black(), black(), black(), sWall(),              white(), white(), white(), white(), white(),             white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '0', //minimum is par
            hint: "The ball will break blue blocks",
            hintAttempts: 6,
            state: [
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), blackS(2, 4, 1, 1), black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), goal(),  black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
                [black(), black(), black(),            black(), black(), black(), bWall(1), black(), black(), black(), black(), black(), black(), black(), black()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: '20', //minimum is 4
            hint: "Start by blocking off the orange",
            hintAttempts: 6,
            state: [
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), goal(),  white(), white(), white(), white(), white(), white(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), sWall() ,               sWall(), sWall(), sWall()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), kWall(),                kWall(), kWall(), kWall()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), kWall(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), kWall(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), kWall(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), kWall(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), kWall(), white(), white(), whiteS(11, 12, -1, -1), white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), kWall(), white(), white(), white(),                white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white(), white(), white(),                white(), white(), white()],
            ]
        },
        {
            drawSize: 0,
            numBounces: 25,
            par: '20', //minimum is around 7
            hint: "Aim between the orange beads",
            hintAttempts: 10,
            state:  [
                [black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black()],
                [black(),kWall(),black(),black(),black(),kWall(),black(),black(),black(),kWall(),black(),black(),black(),black(),black()],
                [black(),black(),black(),black(),black(),black(),black(),white(),black(),black(),black(),black(),black(),black(),black()],
                [black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black(),black()],
                [black(),black(),black(),black(),black(),bWall(1),bWall(1),sWall(),sWall(),sWall(),whiteC(10,4,-1,-1),sWall(),kWall(),black(),black()],
                [black(),black(),black(),bWall(1),bWall(1),bWall(1),sWall(),white(),white(),white(),white(),white(),sWall(),black(),black()],
                [black(),black(),black(),bWall(1),black(),goal(),sWall(),whiteS(7,6,1,1),white(),white(),white(),white(),sWall(),black(),black()],
                [black(),black(),black(),bWall(1),bWall(1),bWall(1),sWall(),white(),white(),white(),sWall(),sWall(),sWall(),black(),black()],
                [black(),black(),black(),black(),black(),bWall(1),bWall(1),sWall(),white(),white(),sWall(),black(),black(),black(),black()],
                [black(),black(),black(),black(),black(),black(),white(),sWall(),white(),white(),sWall(),black(),black(),black(),black()],
                [black(),black(),kWall(),black(),black(),black(),kWall(),sWall(),white(),white(),white(),kWall(),sWall(),sWall(),sWall()],
                [black(),black(),black(),black(),black(),black(),sWall(),kWall(),white(),white(),white(),white(),white(),white(),white()],
                [black(),black(),black(),black(),black(),black(),sWall(),white(),white(),white(),white(),white(),white(),white(),white()],
                [black(),black(),black(),black(),black(),black(),sWall(),white(),white(),white(),white(),white(),white(),white(),white()],
                [black(),black(),black(),black(),black(),black(),sWall(),white(),white(),white(),white(),white(),white(),white(),white()]
            ]
        },
        {
            drawSize: 0,
            numBounces: 10,
            par: 'Out of levels! (for now)',
            hint: "",
            hintAttempts: -1,
            state: [
                [sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall()],
                [white(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), white()],
                [white(), white(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white()],
                [white(), white(), white(), sWall(), white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white(), white()],
                [white(), white(), white(), white(), sWall(), white(), white(), white(), white(), white(), sWall(), white(), white(), white(), white()],
                [white(), white(), white(), white(), white(), sWall(), white(), white(), white(), sWall(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), sWall(), white(), sWall(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(), white(), white(), sWall(), white(), sWall(), white(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(), white(), sWall(), white(), white(), white(), sWall(), white(), white(), white(), white(), white()],
                [white(), white(), white(), white(), sWall(), white(), white(), white(), white(), white(), sWall(), white(), white(), white(), white()],
                [white(), white(), white(), sWall(), white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white(), white()],
                [white(), white(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), white(), white()],
                [white(), sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall(), white()],
                [sWall(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), white(), sWall()],
            ]
        },
    ];
}


//-------------------------------------------------------------------------------------------------
//                                       UNUSED CALLBACKS
//-------------------------------------------------------------------------------------------------

PS.enter = function( x, y, data, options ) {};

PS.exitGrid = function( options ) {};

PS.release = function( x, y, data, options ) {};

PS.exit = function( x, y, data, options ) {};

PS.keyDown = function( key, shift, ctrl, options ) {};

PS.input = function( sensors, options ) {};

PS.swipe = function( data, options ) {};

PS.shutdown = function( options ) {};