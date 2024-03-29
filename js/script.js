console.log('My script is working')

$(document).ready(function() {
    // Opens the hamburger menu
	$('#hamburger').click(function() {
		$('#mobile').toggle('active');
		$('#hamburger').toggle('inactive');
	});
	//Buttons that allows you to close the hamburger menu
	$('#closeMenu').click(function() {
		$('#hamburger').toggle('active')
		$('#mobile').toggle('inactive')
	});
	// Closes the hamburger menu
	// $('nav').mouseleave(function(){
	// 	$('#mobile').toggle('inactive');
	// 	$('#hamburger').toggle('active');
	// })

});



// Function for the payment section on join us page
$(function() {
	$('#card').click(function() {
		// Changes colour of active button
		$('#card').addClass('btn__payment--active');
		// After the button has been pressed, reveals fields
		$('#cardDetails').addClass('active');
		
		// Hides other sections if they are already open
		$('#directDebit').addClass('hidden');
		$('#paypal').addClass('hidden')

	// Effects the sections
		// Reveals card section
		$('#cardDetails').removeClass('hidden');
		// Hides direct debit section
		$('#directDebit').removeClass('active');
		// hides paypal section
		$('#paypal').removeClass('active');

		// Changes buttons back to default states
		$('#ddbt').removeClass('btn__payment--active');
		$('#pp').removeClass('btn__payment--active')
	});
	$('#ddbt').click(function(){
		$('#ddbt').addClass('btn__payment--active');
		$('#directDebit').addClass('active');
		$('#cardDetails').addClass('hidden');
		$('#paypal').addClass('hidden')
		$('#directDebit').removeClass('hidden');
		$('#cardDetails').removeClass('active');
		$('#paypal').removeClass('active');
		$('#card').removeClass('btn__payment--active');
		$('#pp').removeClass('btn__payment--active');
	});
	$('#pp').click(function(){
		$('#pp').addClass('btn__payment--active');
		$('#paypal').addClass('active');
		$('#directDebit').addClass('hidden');
		$('#cardDetails').addClass('hidden');
		$('#paypal').removeClass('hidden');
		$('#cardDetails').removeClass('active');
		$('#directDebit').removeClass('active');
		$('#ddbt').removeClass('btn__payment--active');
		$('#card').removeClass('btn__payment--active');
	});

	// About Us ribbon sections
	$('#tabs').tabs({
      collapsible: true, 
      active: false
    });
    // Adding active and inactive class
    $('#cfi').click(function(){
    	$('#cfi').addClass('about__active');
    	$('#oo').removeClass('about__active');
    	$('#oc').removeClass('about__active');
    	$('#op').removeClass('about__active');
    });
    $('#oo').click(function(){
    	$('#oo').addClass('about__active');
    	$('#oc').removeClass('about__active');
    	$('#op').removeClass('about__active');
    	$('#cfi').removeClass('about__active');
    });
    $('#oc').click(function(){
    	$('#oc').addClass('about__active');
    	$('#oo').removeClass('about__active');
    	$('#op').removeClass('about__active');
    	$('#cfi').removeClass('about__active');
    });
    $('#op').click(function(){
    	$('#op').addClass('about__active');
    	$('#cfi').removeClass('about__active');
    	$('#oo').removeClass('about__active');
    	$('#oc').removeClass('about__active');
    });
});

// Function for submit button on the join us page, Get the modal
$(function (){
	var modal = document.getElementById('confirmation');
	
	// Get the button that opens the modal
	var btn = document.getElementById('submit');
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
  	if (event.target == modal) {
    modal.style.display = "none";
  }
}
});

// Carousel Slide show - Automatic slider
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel__gallery--img");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2500); // Change image every 5 seconds
}



