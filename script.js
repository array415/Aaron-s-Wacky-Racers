$(document).on('ready', function(){
  console.log('ready');


  var playerOne = new Player();
  var playerTwo = new Player();


  $(".wow").on('click', function(){
    $('.playerOneName').hide();
    $('.wow').hide();
  });





  // $( 'body' ).on('keypress',function(event) {
  //   if(event.which == 112){
  //     playerOne.name = $('.frank').val();
  //     console.log(playerOne);
  //     $( ".trackOne" ).animate(
  //       {'margin-left': '+=3%'},
  //       150,
  //       function complete() {
  //
  //       });
  //
  //       playerOne.increase();
  //       if(playerOne.moves === 25){
  //         console.log(playerOne.playerName + " " + "Wins!");
  //       }
  //
  //     }
  //
  //     $(".trackOne").clearQueue();
  //
  //   });
  //   //
  //   // $(window).keypress(function(event){
  //   //   if(event.which == 113){
  //   //
  //   //     $( ".trackTwo" ).animate(
  //   //       {'margin-left': '+=3%'},
  //   //       300 );
  //   //     }
  //   //     $(".trackOne").clearQueue();
  //   //   });
  //   //
  //   //
  //   //
  //   // });
  //   //

    function Player(){
      this.moves = 0;
      this.name = null;
      this.increase = function(){
        this.moves++;
      };

    }
});
