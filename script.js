
$(document).on('ready', function(){
  console.log('ready');

  $( window ).keypress(function(event) {
    if(event.which == 112){
      movePlayerOne();
  $( ".playerOneMovement" ).animate({
    'margin-left': '+=3%'


  }, 200, function() {
    // Animation complete.
  });
}
});

$(window).keypress(function(e){
  if(e.which == 113){
    movePlayerTwo();
    $( ".playerTwoMovement" ).animate({
      'margin-left': '+=50px'


    }, 200, function() {
      // Animation complete.
    });
  }
});



});
var playerOne = 0;
var playerTwo = 0; 

function movePlayerOne () {
   playerOne++;
   if(playerOne === 25){
       alert('Player One Wins!');
   }

}


function movePlayerTwo(){
   playerTwo++;
  if(playerTwo === 25){
    alert('Player Two Wins!');
  }
}
