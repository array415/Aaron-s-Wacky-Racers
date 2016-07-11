$(document).on('ready', function(){

  var playerOne = new PlayerObj();
  var playerTwo = new PlayerObj();

  $('.announceWinner').hide();

  function $resetButton() {
    $('.trackOne').css('margin-left', '0');
    $('.trackTwo').css('margin-left', '0');
    $('.announce').css('margin-left', '0');
    playerOne.reset();
    playerTwo.reset();
    $('.announceWinner').hide();
    $('.playerName').show();
  }

  // keypress handler
  // remove class listenField to disable play
  $('.listenField').on('keypress',function(event) {
    // P key

    if(event.which == 112){
      // check if win
      var playerName = 'player' + this.num;
      this.condensedWinCheck();
      // animate player forward
      var trackName = '.track' + this.num;
      var $track  = $(trackName);
      $track.animate(
        {'margin-left': '+='+this.move+'%'},
        600);


        if(playerOne.winner >= 90){
          $('.announce').html("<h1>"+ this.name + " " + "Wins!" + "</h1>");
          // TODO: use position
          $('.announce').animate({'margin-left' : '70%'},
          9000);
          $('.announceWinner').show();
        }
        // Q Key
      } else if(event.which == 113){
        playerTwo.condensedWinCheck();
        $( '.trackTwo' ).animate(
          {'margin-left': '+='+playerTwo.move+'%'},
          600 );


          if(playerTwo.winner >= 90){
            $('.announce').html("<h1>"+ playerTwo.name + " " + "Wins!" + "</h1>");
            $('.announce').animate({'margin-left' : '70%'},
            9000);
            $('.announceWinner').show();
          }
        }
      });

      $('.psuedoSubmit').on('click', function(){
        playerOne.name = $('.playerOne').val();
        playerTwo.name = $('.playerTwo').val();

        $('.playerName').hide();
      });

      $('.avatar').on('click', function(){
        $resetButton();
      });

    });


    function PlayerObj(num){
      // num = 'One' or 'Two'
      this.num = num;
      this.move = 0;
      this.name = '';
      this.winner = 0;
      this.money = 1000;

      this.reset = function(){
        this.move = 0;
        this.winner = 0;
      };

      this.condensedWinCheck = function(){
        this.move = Math.floor(Math.random()*20+1);
        this.winner += this.move;
      };

    }
