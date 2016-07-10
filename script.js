$(document).on('ready', function(){
  console.log('ready');

  var playerOne = new PlayerObj();
  var playerTwo = new PlayerObj();

  $('.announceWinner').hide();

  $('body').on('keypress',function(event) {
    if(event.which == 112){
      playerOne.condensedWinCheck();

      $( ".trackOne" ).animate(
        {'margin-left': '+='+playerOne.move+'%'},
        600);

        if(playerOne.winner >= 100){
          $('.announce').html("<h1>"+ playerOne.name + " " + "Wins!" + "</h1>");
          $('.announce').animate({'margin-left' : '70%'},
          9000);
          playerOne.reset();
          $('.announceWinner').show();
        }
      }

      $(".trackOne").clearQueue();

    });

    $('body').keypress(function(event){
      if(event.which == 113){
        playerTwo.condensedWinCheck();
        $( ".trackTwo" ).animate(
          {'margin-left': '+='+playerTwo.move+'%'},
          600 );
        }
        $(".trackTwo").clearQueue();
      });

    $('.avatar').on('click', function(){

    });

});


    function PlayerObj(){
      this.move = 0;
      this.name = null;
      this.winner = 0;

      this.whoWon = function(){
        this.winner += this.move;
      };

      this.randomMove = function(){
        this.move = Math.floor(Math.random()*20+1);
      };

      this.reset = function(){
        this.move = 0;
        this.winner = 0;
      };

      this.condensedWinCheck = function(){
        this.randomMove();
        this.whoWon();
        this.name = $('.firstName').val();
      };

    }
