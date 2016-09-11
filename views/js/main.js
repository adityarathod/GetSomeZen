var apis = {
  epic: "https://api.adviceslip.com/advice",
  current: null
};


function setZen(txt) {
  $(".zen").fadeOut(1000).promise().done(function() {
      $(".zen").text(txt).promise().done(function() {
        $(".zen").fadeIn(1000);
      });
  });
}
function zenFresh() {
   $.getJSON( "http://api.adviceslip.com/advice", function( data ) {
    setZen(data.slip.advice);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
      setZen("😥 Zen is not available right now.");
  });
}
$(function() {
  apis.current = apis.epic;
  zenFresh();
  setInterval(zenFresh, 9000);
});