
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
var playerOne = ['x', null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null];
var playerTwo = ['o', null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null];

function movePlayerOne () {
   playerOne.pop();
   playerOne.unshift(null);
   if(playerOne[16] === "x"){
       alert('Player One Wins!');
   }

}


function movePlayerTwo(){
  playerTwo.pop();
  playerTwo.unshift(null);
  if(playerTwo[16] === "o"){
    alert('Player Two Wins!');
  }
}
