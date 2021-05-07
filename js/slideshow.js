
var indexValue = 0;
//var img = ["../../image/0.jpg","../../image/1.jpg","../../image/2.jpg"];

function slideShow(){
  setTimeout(slideShow, 2000);
  var x;
  var img = document.querySelectorAll("img");
  for(x = 0; x < img.length; x++){
    img[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > img.length){indexValue = 1}
  img[indexValue -1].style.display = "block";
}
slideShow();

window.onload = slideShow;


jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});
