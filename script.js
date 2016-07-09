$(document).on('ready', function(){
  console.log('ready');


  var playerOne = new Create();
  var playerTwo = new Create();


  $( window ).keypress(function(event) {
    if(event.which == 112){

      $( ".playerOneMovement" ).animate({
        'margin-left': '+=3%'
      },

      200,

      function() {
        playerOne.increase();
        if(playerOne.moves === 3){
          console.log('boo');
        }
      });
    }


  });

  $(window).keypress(function(event){
    if(event.which == 113){

      $( ".playerTwoMovement" ).animate({
        'margin-left': '+=3%'
      },

      200,

      function() {
        playerTwo.increase();
        if(playerTwo.moves === 3){
          console.log('yay');
        }
      });
    }
  });



});


function Create(){
  this.moves = 0;
  this.increase = function(){
    this.moves++;
  };

}
