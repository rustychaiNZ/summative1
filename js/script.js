console.log('My script is working')

$(document).ready(function() {
    // Opens the hamburger menu
	$('#hamburger').click(function(){
		$('#mobile').toggle('active');
		$('#hamburger').toggle('inactive');
	})
	//Buttons that allows you to close the hamburger menu
	// $('#close').click(function(){
	// 	$('#mobile').fadeOut(500);
	// })
	// Closes the hamburger menu
	$('nav').mouseleave(function(){
		$('#mobile').toggle('inactive');
		$('#hamburger').toggle('active');
	})

});

$(function() {
	$('#card').on('click', function() {
		$('.btn__card').addClass('.btn__payment--active');
	});
}