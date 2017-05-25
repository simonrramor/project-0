$(() => {


  const gameBoard = $('#gameBoard');
  const  boxP1 = $('.boxP1');
  const  boxP2 = $('.boxP2');
  const  width = gameBoard.width() - boxP1.width();
  const  height = gameBoard.height() - boxP2.height();
  const  d = {};
  const  x = 20 ;
  let p1Score = 0;
  let p2Score = 0;
  const numOfGoodDots = 400;
  const numOfBadDots = 300;
  const numOfBigDots = 100;
  const numOfGoldDots = 2;
  let mute = false;
  const audio = $('audio')[0];
  const audioBig = $('audio')[1];
  const audioError = $('audio')[2];
  const audioGold = $('audio')[3];
  const goldenters = $('audio')[4];
  const audioend = $('audio')[5];
  let gameTime = 60000;
  const divsize = 20;


  //range slider stuff to choose time
  const rangeSlider = function(){
    $('input[type=range]').eq(0).on('change', (e) => {
      gameTime = $(e.target).val();
      $('.value').text('Your game will last ' + (gameTime / 1000) + ' seconds');
    });
  };
  rangeSlider();

  //
  let help = false;
  $('.icon1').click(function(){
    if (help === false){
      $('#popupBackground').fadeIn('fast', 'swing');
      help = true;
    } else if (help === true){
      $('#popupBackground').fadeOut('fast', 'swing');
      help = false;
    }
  });

  // instructions button toggle
  $('#popupBackground').hide();
  $('.icon1').each(function() {
    $(this).data('original', $(this).html());
  }).on('click', function() {
    $(this).toggleClass('clicked').html(function(_, html) {
      var org = $(this).data('original');
      return html === org ? '<i class="fa fa-times-circle" aria-hidden="true"></i>' : org;
    });
  });

  //MUTE TOGGLE ON AND OFF
  $('#mute-button').on('click', () => {
    mute = !mute;
  });

  //MUTE TOGGLE BUTTON STYLE ON AND OFF
  $('#mute-button').each(function() {
    $(this).data('original', $(this).html());
  }).on('click', function() {
    $(this).toggleClass('clicked').html(function(_, html) {
      var org = $(this).data('original');
      return html === org ? '<i class="fa fa-volume-off" aria-hidden="true"></i>' : org;
    });
  });

  //STARTS WHOLE GAME!!!
  $('#start').click(function(){
    $( '#welcomePage' ).hide();
    $('.gameScreen').removeAttr('id', 'hidden');


    // v = orgininal value.
    // a,b = direction
    // d is object holding true or fase about key press
    // parseInt turns px into Int ising 10 or something radix stuff
    // n = check for valid movement
    // x = pixal jump

    function newLocationP1(v,a,b) {
      const n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
      if (a === 65) return   n < 0 ? 0 : n > width ? width : n;
      if (a === 87) return n < 0 ? 0 : n > height ? height : n;
    }
    function newLocationP2(v,a,b) {
      const n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
      if (a === 37) return n < 0 ? 0 : n > width ? width : n;
      if (a === 38) return n < 0 ? 0 : n > height ? height : n;
    }

    // ADDS RANDOM AMOUNT OF BLUE (1PT) DOTS INTO THE GAME BOARD
    makeDiv(numOfGoodDots, 'ball');
    makeDiv(numOfBigDots, 'bigBall');
    makeDiv(numOfBadDots, 'badball');
    setTimeout(function () {
      makeDiv(numOfGoldDots, 'goldenball');
      if(!mute)goldenters.play();
    }, Math.floor(Math.random() * (gameTime - 10000)));


    function makeDiv(num, className) {
      var  count = 1;
      while (count < num){
        const posx = (Math.random() * ($('#gameBoard').width() - divsize)).toFixed();
        const posy = (Math.random() * ($('#gameBoard').height() - divsize)).toFixed();
        const $newdiv = $(`<div class="${className}"</div>`).css({
          'left': posx + 'px',
          'top': posy + 'px'
        });
        $newdiv.appendTo('#gameBoard');
        count ++;
      }
    }


    // CHECKS FOR P1 COLLIDE WITH BLUE DOTS
    function isCollide(cube, dot) {
      return !(
        ((cube.y + cube.height) < (dot.y)) ||
        (cube.y > (dot.y + dot.height)) ||
        ((cube.x + cube.width) < dot.x) ||
        (cube.x > (dot.x + dot.width))
      );
    }

    // CHECKS FOR MOVEMENT
    $(window).keydown(function(e) {
      d[e.which] = true;

      // CHECKS FOR P1 MOVEMENT
      const p1Cube = {
        x: boxP1.position().left,
        y: boxP1.position().top,
        width: boxP1.width(),
        height: boxP1.height()
      };
      // CHECKS FOR P2 MOVEMENT
      const p2Cube = {
        x: boxP2.position().left,
        y: boxP2.position().top,
        width: boxP2.width(),
        height: boxP2.height()
      };

      // POSITION OF RED DOTS
      $('.badball').each((index, badball) => {
        const redDot = {
          x: $(badball).position().left,
          y: $(badball).position().top,
          width: $(badball).width(),
          height: $(badball).height()
        };
        // WHAT TO DO IF P1 HITS BAD DOT
        if (isCollide(p1Cube, redDot)) {
          p1Score--;
          $('#p1Counter').html(p1Score);
          $(badball).remove();
          if(!mute)audioError.play();
        }
        // WHAT TO DO IF P2 HITS BAD DOT
        if (isCollide(p2Cube, redDot)) {
          p2Score--;
          $('#p2Counter').html(p2Score);
          $(badball).remove();
          if(!mute)audioError.play();
        }
      });
      // POSITION OF BLUE DOTS
      $('.ball').each((index, ball) => {
        const blueDot = {
          x: $(ball).position().left,
          y: $(ball).position().top,
          width: $(ball).width(),
          height: $(ball).height()
        };
        // WHAT TO DO IF P1 HITS BLUE DOT
        if (isCollide(p1Cube, blueDot)) {
          p1Score++;
          $('#p1Counter').html(p1Score);
          $(ball).remove();
          if(!mute)audio.play();
        }
        // WHAT TO DO IF P2 HITS BLUE DOT
        if (isCollide(p2Cube, blueDot)) {
          p2Score++;
          $('#p2Counter').html(p2Score);
          $(ball).remove();
          if(!mute)audio.play();

        }
      });
      // POSITION OF GREEN DOTS
      $('.bigBall').each((index, bigball) => {
        const greenDot = {
          x: $(bigball).position().left,
          y: $(bigball).position().top,
          width: $(bigball).width(),
          height: $(bigball).height()
        };
        // WHAT TO DO IF P1 HITS GREEN DOT
        if (isCollide(p1Cube, greenDot)) {
          p1Score += 2;
          $('#p1Counter').html(p1Score);
          $(bigball).remove();
          if(!mute)audioBig.play();
        }
        // WHAT TO DO IF P2 HITS GREEN DOT
        if (isCollide(p2Cube, greenDot)) {
          p2Score += 2;
          $('#p2Counter').html(p2Score);
          $(bigball).remove();
          if(!mute)audioBig.play();
        }
      });
      // POSITION OF GOLD DOTS
      $('.goldenball').each((index, goldenball) => {
        const goldDot = {
          x: $(goldenball).position().left,
          y: $(goldenball).position().top,
          width: $(goldenball).width(),
          height: $(goldenball).height()
        };
        // WHAT TO DO IF P1 HITS GOLD DOT
        if (isCollide(p1Cube, goldDot)) {
          p1Score += 10;
          $('#p1Counter').html(p1Score);
          $(goldenball).remove();
          if(!mute)audioGold.play();
        }
        // WHAT TO DO IF P2 HITS GOLD DOT
        if (isCollide(p2Cube, goldDot)) {
          p2Score += 10;
          $('#p2Counter').html(p2Score);
          $(goldenball).remove();
          if(!mute)audioGold.play();
        }
      });


      // MOVEMENT FUNCTIONS

      // P1 MOVEMENT
      boxP1.css({
        left: function(i,v) {
          return newLocationP1(v, 65, 68);
        },
        top: function(i,v) {
          return newLocationP1(v, 87, 83);
        }
      });
      // P2 MOVEMENT
      boxP2.css({
        left: function(i,v) {
          return newLocationP2(v, 37, 39);
        },
        top: function(i,v) {
          return newLocationP2(v, 38, 40);
        }
      });
    });

    // WHEN KEY IS NOT DOWN
    $(window).keyup(function(e) {
      d[e.which] = false;
    });

    // // CHECK FOR WINNER
    function checkWinner() {
      if (p1Score > p2Score){
        $('.showWinner').text('Player One Wins');
      } else if (p1Score < p2Score) {
        $('.showWinner').text('Player Two Wins');
      } else $('.showWinner').text('It\'s a draw');
    }

    // GAME TIMER AND END
    let timeLeft = (gameTime / 1000);
    const elem = document.getElementById('countDownTimer');
    const timerId = setInterval(countdown, 1000);
    function countdown() {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
      if (timeLeft === 0) {
        clearTimeout(timerId);
        $('.gameScreen').remove();
        $('#gameOverDiv').removeClass('noshow');
        checkWinner();
        if(!mute)audioend.play();
      }
    }
  });
  // END
});
