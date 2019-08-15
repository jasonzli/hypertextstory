//this is a sample flashlight effect
//https://codepen.io/jedmac/pen/RWQPNb


$( document ).ready(function() {
  $(this).mousemove(function(e) {
    $("#light").css({
      "top": e.pageY - 250,
      "left": e.pageX - 250
    });
  }).mousedown(function(e) {
    switch (e.which) {
        case 1:
            //$("#light").toggleClass("light-off");
            //$("body").
            break;
        case 2:
            console.log('Middle Mouse button pressed.');
            break;
        case 3:
            console.log('Right Mouse button pressed.');
            break;
        default:
            console.log('You have a strange Mouse!');
    }
  });


    $( ".pogi" ).on( "click", function() {
      var html = 
      "<h1 class='next linker spacer'>I heard of Amontillado</h1>";
      $("#content").append(html);

      $([document.documentElement, document.body]).animate({
        scrollTop: $(".next").offset().top
    }, 2000);
      $( ".next" ).on( "click", function() {
      var html = 
      "<h1 class='next2 linker spacer'>To the vaults!</h1>";
      $("#content").append(html);

      $([document.documentElement, document.body]).animate({
        scrollTop: $(".next2").offset().top
    }, 2000);
  });
  });

    

});