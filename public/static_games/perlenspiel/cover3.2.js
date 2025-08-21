// cover3.2.js for Perlenspiel 3.2

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright Â© 2009-14 Worcester Polytechnic Institute.
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

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

var _RSHIFT = 256 * 256;
var _GSHIFT = 256;

function rgbString ( rgb ) {
	"use strict";
	var red, green, blue, rval, gval;

	rgb = Math.floor( rgb );
	if ( rgb < 1 ) // black
	{
		red = green = blue = 0;
	}
	else if ( rgb >= 0xFFFFFF ) // white
	{
		red = green = blue = 255;
	}
	else
	{
		red = rgb / _RSHIFT;
		red = Math.floor( red );
		rval = red * _RSHIFT;

		green = ( rgb - rval ) / _GSHIFT;
		green = Math.floor( green );
		gval = green * _GSHIFT;

		blue = rgb - rval - gval;
	}

	return ( "rgb(" + red + "," + green + "," + blue + ")" );
}

function init ( arg1, arg2 )
{
	"use strict";
	var MAXG, MAXF, bgColor, txtColor, args, ww, wh, min, max, fmax, w, h, m, p, e, f;

	MAXG = 512;
	MAXF = 1.25;

	bgColor = "rgb(48,48,48)";
	txtColor = "rgb(255,255,255)";

	args = arguments.length;
	if ( args > 0 )
	{
		e = document.getElementById( 'sts' );
		if ( typeof arg1 === "number" ) {
			bgColor = rgbString( arg1 );
		}
		if ( args > 1 ) {
			if ( typeof arg2 === "number" ) {
				txtColor = rgbString( arg2 );
			}
		}
	}

	// calc device dimensions & scaling

	ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	// Reduce size of grid if client width or height is <125% of MAXG (512)

	min = ( MAXG / 4 ) * 5; // minimum width/height
	if ( ( ww >= min ) && ( wh >= min ) )
	{
		max = MAXG;
		fmax = MAXF;
	}
	else
	{
		w = ( ww / 5 ) * 4;
		h = ( wh / 5 ) * 4;
		max = Math.min( w, h ); // use smallest
		max = Math.floor( max / 8 ) * 8; // force to multiple of 8
		fmax = MAXF * ( max / MAXG ); // calc percentage
		fmax = Math.floor( fmax * 100 ) / 100; // round to nearest 100th
	}

	document.body.style.backgroundColor = bgColor;

	// Resize main

	m = document.getElementById( 'main' );
	m.style.width = max;

	// Resize image

	p = document.getElementById( 'pic' );
	p.width = max;
	p.height = max;

	// Resize and disable header

	e = document.getElementById( 'sts' );
	e.style.fontSize = fmax + "em";
	e.style.color = txtColor;
	e.style.backgroundColor = bgColor;
	e.onfocus = function () { this.blur(); };

	// Create footer, append to main

	f = document.createElement( "p" );
	f.id = "ftr";
	f.innerHTML = "Perlenspiel 3.2";
	f.style.color = txtColor;
	f.style.backgroundColor = bgColor;
	m.appendChild( f );
}
