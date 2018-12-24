$(document).ready(function(){
  //***********************************************************SMOTH SCROLLING***********************************************************
  // Add smooth scrolling to all links
  $("ul, .gif").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (event.target.hash !== "" || event.target.dataset.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = event.target.hash || event.target.dataset.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (600) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  //***********************************************************SMOOTH SCROLLING***********************************************************

  //***********************************************************FADE IN NAVIGATION***********************************************************
  $(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //high of screen
    var sub = h - 100;

    //nav is set on display: none
    if ($(window).scrollTop() > (h-sub)) {
        if ($('nav:hidden')) {
          $('nav').fadeIn(500);
        }
    } else {
        if ($('nav:visible')) {
          $('nav').fadeOut(500);
        }
    };    
  });
  //***********************************************************FADE IN NAVIGATION***********************************************************

});
