$( window ).on( "scroll", function() {
  var iScroll = window.scrollY;

  
  $( "#dome" ).css( "border", "solid 1px  rgba(10, 24, 55, 0.15" ).fadeIn( "soft" );

  if (iScroll == 0) {
    $( "#dome" ).css( "border", "solid 1px  rgba(10, 24, 55, 0" ).fadeIn( "soft" );
  }

} );



VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 400
});