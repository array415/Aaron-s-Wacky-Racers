$(document).on('ready', function(){
  console.log('ready');


  var playerOne = new Player();
  var playerTwo = new Player();




  $( 'body' ).on('keypress',function(event) {
    if(event.which == 112){
      playerOne.name = $('.frank').val();
      console.log(playerOne);
      $( ".trackOne" ).animate(
        {'margin-left': '+=3%'},
        150,
        function complete() {

        });

        playerOne.increase();
        if(playerOne.moves === 25){
          console.log(playerOne.playerName + " " + "Wins!");
        }

      }

      $(".trackOne").clearQueue();

    });

    $(window).keypress(function(event){
      if(event.which == 113){
         playerTwo.increase();
         console.log(playerTwo.winner());
         console.log(playerTwo.move);
        $( ".trackTwo" ).animate(
          {'margin-left': '+='+playerTwo.move+'%'},
          300 );
        }
        $(".trackOne").clearQueue();
      });



    });


    function Player(){
      this.move = 0;
      this.name = null;
      this.winner =
      this.increase = function(){
        this.move = Math.floor(Math.random()*10+1);
      };

    }
