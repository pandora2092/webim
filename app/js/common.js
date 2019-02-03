$(function() {
	var menuLink = $('.menu-link');
	var menu = $('.menu-mobile');
	var close = $('.close-btn');
	var navLink = $('.menu_ul li a');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});

	close.click(function() {
		menu.toggleClass('active-menu');
	});

	navLink.on('click', function(event) {
		menu.toggleClass('active-menu');
	});
});