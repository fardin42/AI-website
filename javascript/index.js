$( window ).on( "scroll", function() {
  var iScroll = window.scrollY;

  
  $( "#dome" ).css( "border", "solid 2px  rgba(10, 24, 55, 0.15" ).fadeIn( "soft" );

  if (iScroll == 0) {
    $( "#dome" ).css( "border", "solid 2px  rgba(10, 24, 55, 0" ).fadeIn( "soft" );
  }

} );