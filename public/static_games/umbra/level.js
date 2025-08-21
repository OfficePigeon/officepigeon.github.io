
/*
Functions for parsing level data into objects that can be used in game.
*/

"use strict";
var Level = {
    //--------------------------------------------------------------------------
    //   Short-hand functions for intantiating wall objects of different types
    //--------------------------------------------------------------------------

    makeWalkable: function(x, y, color, tag) {
        return {
            type: 'walkable',           //Types determine behavior
            glyph: '',                  //Glyph drawn on the the cell
            glyphColor: PS.COLOR_BLACK, //Color of the glyph
            color: color,               //Color of the cell
            tag: tag,                   //Extra metadata

            x: x,                       //Cell specific info after line break
            y: y,

            onUpdate: function() {},
            onCollision: function(character) {
                Characters.moveTo(character, x, y); //Allow the character to move onto this cell
            }
        };
    },

    makeWall: function(color, tag) {
        return {
            type: 'wall',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: color,
            tag: tag,

            onUpdate: function() {},
            onCollision: function(character) {
                //Do not allow the character to move onto this cell
                PS.audioPlay('fx_click');
            }
        };
    },

    makeGoal: function(color, tag) {
        return {
            type: 'goal',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: color,
            tag: 'tag',

            onUpdate: function() {},
            onCollision: function(character) {
                this.glyph = '•';
                Characters.markForRemoval(character);
            }
        };
    },

    makeDecoration: function(x, y, walkable, glyph, tag, onUpdate) {
        return {
            type: 'walkable',
            glyph: '',
            glyphColor: PS.COLOR_BLACK,
            color: 0,
            tag: tag,
            
            x: x,
            y: y,
            walkable: walkable,

            onUpdate: onUpdate,
            onCollision: function(character) {
                if(walkable) {
                    Characters.moveTo(character, x, y); //Allow the character to move onto this cell
                } else {
                    PS.audioPlay('fx_click');
                }
            }
        };
    },


    //--------------------------------------------------------------------------
    //              Functions to build darkness functions
    // Darkness functions take a step number, grid width, and grid height, and 
    // return a 2D array of numbers between 0 and 255 indicating how dark that 
    // cell is. 0 is full light, 255 is full dark.
    //--------------------------------------------------------------------------

    linearDarkness: function(width, height, step, comparisonFunc) {
        var darknessVals = [];

        var x, y;
        for(x = 0; x < width; x++) {
            darknessVals[x] = [];
            for(y = 0; y < height; y++) {
                if(comparisonFunc(x, y, step) < 0) {
                    darknessVals[x][y] = 255;
                }
                if(comparisonFunc(x, y, step) === 0) {
                    darknessVals[x][y] = 127;
                }
                if(comparisonFunc(x, y, step) > 0) {
                    darknessVals[x][y] = 0;
                }
            }
        }

        return darknessVals;
    },

    bidirectionalLinear: function(width, height, step, firstComparisonFunc, secondComparisonFunc) {
        var darknessVals = [];

        var x, y;
        for(x = 0; x < width; x++) {
            darknessVals[x] = [];
            for(y = 0; y < height; y++) {

                if((firstComparisonFunc(x, y, step) > 0) || (secondComparisonFunc(x, y, step) > 0)) {
                    darknessVals[x][y] = 0;
                }

                if((firstComparisonFunc(x, y, step) === 0) || (secondComparisonFunc(x, y, step) === 0)) {
                    darknessVals[x][y] = 127;
                }

                if((firstComparisonFunc(x, y, step) < 0) || (secondComparisonFunc(x, y, step) < 0)) {
                    darknessVals[x][y] = 255;
                }
            }
        }

        return darknessVals;
    },

    darknessFromLeft: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return x - step;});
    },

    darknessFromRight: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return (width - x) - step;});
    },

    darknessFromTop: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return y - step;});
    },

    darknessFromBottom: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return (height - y) - step;});
    },

    darknessFromTopLeft: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return (x + y) - step;});
    },

    darknessFromBottomLeft: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return (x + (height - y)) - step;});
    },

    darknessFromLeftAndRight: function(width, height, step) {
        return Level.bidirectionalLinear(width, height, step, function(x, y, step) {return (x - step);}, function(x, y, step) {return (width - 1 - x) - step;});
    },


    darknessFromTopAndBottom: function(width, height, step) {
        return Level.bidirectionalLinear(width, height, step, function(x, y, step) {return (y - step);}, function(x, y, step) {return (height - 1 - y) - step;});
    },

    darknessFromTopLeftAndBottomRight: function(width, height, step) {
        return Level.bidirectionalLinear(width, height, step, function(x, y, step) {return (x + y) - step;}, function(x , y, step) {return ((width - 2 - x) + (height - y)) - step;});
    },

    darknessFromRightAndBottom: function(width, height, step) {
        return Level.bidirectionalLinear(width, height, step, function(x, y, step) {return (width - x) - step;}, function(x, y, step) {return (height - y) - step;})
    },

    noDarkness: function(width, height, step) {
        return Level.linearDarkness(width, height, step, function(x, y, step) {return 1;});
    },

    //------------------------------------------------------------
    //                      Level loading code
    //------------------------------------------------------------

    // Load the given level
    loadLevel: function(levels, index) {
        var loadedLevel = {};

        //Add darkness function
        loadedLevel.initialDarknessProgress = levels[index].initialDarknessProgress;
        switch(levels[index].darkness) {
            case 'fromLeft':    loadedLevel.darkness = Level.darknessFromLeft;    break;
            case 'fromRight':   loadedLevel.darkness = Level.darknessFromRight;   break;
            case 'fromTop':     loadedLevel.darkness = Level.darknessFromTop;     break;
            case 'fromBottom':  loadedLevel.darkness = Level.darknessFromBottom;  break;
            case 'fromTopLeft': loadedLevel.darkness = Level.darknessFromTopLeft; break;
            case 'fromBottomLeft': loadedLevel.darkness = Level.darknessFromBottomLeft; break;
            case 'fromLeftAndRight': loadedLevel.darkness = Level.darknessFromLeftAndRight; break;
            case 'fromTopAndBottom': loadedLevel.darkness = Level.darknessFromTopAndBottom; break;
            case 'fromTopLeftAndBottomRight': loadedLevel.darkness = Level.darknessFromTopLeftAndBottomRight; break;
            case 'fromRightAndBottom': loadedLevel.darkness = Level.darknessFromRightAndBottom; break;
            case 'none': loadedLevel.darkness = Level.noDarkness; break;
        }

        //Load map cell data
        loadedLevel.cells = [];

        //Load status message
        loadedLevel.statusMessage = levels[index].statusMessage;
        loadedLevel.onLoad = levels[index].onLoad;

        var currentRow = 0;
        levels[index].data.forEach(function(rowString) {
            var typeStrings = rowString.trim().split(/ +/);
            var row = [];
            var currentCol = 0;
            typeStrings.forEach(function(type) {
                switch(type) {
                    case 'S': row.push(Level.makeWalkable(currentCol, currentRow, 0x808080, 'start')); break;
                    case '.': row.push(Level.makeWalkable(currentCol, currentRow, 0x808080, ''));      break;
                    case '#': row.push(Level.makeWall(0x404040, ''));                                  break;
                    case '*': row.push(Level.makeGoal(0xFFFFFF, ''));                                  break;
                    case 'B':
                        row.push(
                            Level.makeDecoration(
                                currentCol, currentRow, false, '', '',
                                function() {
                                    this.color = 
                                        PS.makeRGB(
                                            40 + PS.random(20),
                                            40 + PS.random(20),
                                            235 + PS.random(20)
                                        );
                                }
                            )
                        ); 
                        break;
                    case 'G':
                        row.push(
                            Level.makeDecoration(
                                currentCol, currentRow, true, '', '',
                                function() {
                                    this.color = 
                                        PS.makeRGB(
                                            40 + PS.random(20),
                                            235 + PS.random(20),
                                            40 + PS.random(20)
                                        );
                                }
                            )
                        );
                        break;
                    case 'R':
                        row.push(
                            Level.makeDecoration(
                                currentCol, currentRow, true, '', '',
                                function() {
                                    this.color = 
                                        PS.makeRGB(
                                            150 + PS.random(20),
                                            100 + PS.random(10),
                                            80 + PS.random(5)
                                        );
                                }
                            )
                        );
                        break;
                }
                currentCol += 1;
            });
            loadedLevel.cells.push(row);
            currentRow += 1;
        });

        return loadedLevel;
    },
};
