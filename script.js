$(document).on('ready', function(){
  console.log('ready');


  var playerOne = new Player();
  var playerTwo = new Player();




  $('body').on('keypress',function(event) {
    if(event.which == 112){
      playerOne.name = $('.firstName').val();
      playerOne.increase();
      playerOne.whoWon();
      $( ".trackOne" ).animate(
        {'margin-left': '+='+playerOne.move+'%'},
        600,
        function complete() {

        });

        playerOne.increase();
        if(playerOne.winner >= 90){
          console.log(playerOne.name + " " + "Wins!");
        }

      }

      $(".trackOne").clearQueue();

    });

    $('body').keypress(function(event){
      if(event.which == 113){
         playerTwo.increase();
         playerTwo.whoWon();
        $( ".trackTwo" ).animate(
          {'margin-left': '+='+playerTwo.move+'%'},
          600 );
        }
        $(".trackTwo").clearQueue();
      });



    });


    function Player(){
      this.move = 0;
      this.name = null;
      this.winner = 0;
      this.whoWon = function(){
        this.winner += this.move;
      };
      this.increase = function(){
        this.move = Math.floor(Math.random()*20+1);
      };

    }
