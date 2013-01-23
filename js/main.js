/* JS Document
 * coded by GIOVANNI IACUZZO 2383
 * 2013
 */

/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";

	// --- global vars
	
	// --- methods
	var slide = function(e){
		e.preventDefault();
		$("#changeSlide a").css('backgroundImage', 'none');
		$(this).css('backgroundImage', 'url("./img/arrowSlide.png")');
		$("#highlited article").hide();
		$('#highlited article[data-index="' + $(this).attr("data-index") + '"]').show();
	};

	$( function () {
		// --- onload routines
		$("#changeSlide li:first-child a").css('backgroundImage', 'url("./img/arrowSlide.png")');
		$("#changeSlide a").on("click", slide);
	} );
}( jQuery ) );


