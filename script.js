$(document).on('ready', function(){
  console.log('ready');

  var playerOne = new PlayerObj();
  var playerTwo = new PlayerObj();

  $('.announceWinner').hide();

  $('body').on('keypress',function(event) {
    if(event.which == 112){
      playerOne.condensedWinCheck();
      playerOne.name = $('.playerOne').val();
      $( ".trackOne" ).animate(
        {'margin-left': '+='+playerOne.move+'%'},
        600);

        if(playerOne.winner >= 90){
          $('.announce').html("<h1>"+ playerOne.name + " " + "Wins!" + "</h1>");
          $('.announce').animate({'margin-left' : '70%'},
          9000);
          event.preventDefault();
          playerOne.reset();
          $('.announceWinner').show();
        }
      }

    });

    $('body').keypress(function(event){
      if(event.which == 113){
        playerTwo.condensedWinCheck();
        playerTwo.name = $('.playerTwo').val();
        $( ".trackTwo" ).animate(
          {'margin-left': '+='+playerTwo.move+'%'},
          600 );
        }
      });

    $('.psuedoSubmit').on('click', function(){
      $('.playerName').hide();
    });

    $('.avatar').on('click', function(){
      $('.trackOne').css('margin-left', '0');
      $('.trackTwo').css('margin-left', '0');
      playerOne.reset();
      playerTwo.reset();
      $('.announceWinner').hide();
      $('.playerName').show();
    });

});


    function PlayerObj(){
      this.move = 0;
      this.name = null;
      this.winner = 0;
      this.money = 1000;

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
      };

    }
