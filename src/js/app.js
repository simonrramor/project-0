$(() => {


  const gameBoard = $('#gameBoard');
  const  boxP1 = $('.boxP1');
  const  boxP2 = $('.boxP2');
  const  width = gameBoard.width() - boxP1.width();
  const  height = gameBoard.height() - boxP2.height();
  const  d = {};
  const  x = 20 ;
  const p1score = [];
  const p2score = [];
  const numOfGoodDots = 300;
  const numOfBadDots = 200;
  const numOfBigDots = 50;
  const numOfGoldDots = 2;
  let mute = false;
  const audio = $('audio')[0];
  const audioBig = $('audio')[1];
  const audioError = $('audio')[2];
  const audioGold = $('audio')[3];
  const goldenters = $('audio')[4];
  const audioend = $('audio')[5];
  let gameTime = 60000;


  //range slider stuff to choose time
  const rangeSlider = function(){
    $('input[type=range]').eq(0).on('change', (e) => {
      gameTime = $(e.target).val();
      console.log('gametime is now ', gameTime);
      $('.value').text('Your game will last ' + (gameTime / 1000) + ' seconds');
    });
  };
  rangeSlider();

  //help icon
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
    makeDiv();
    function makeDiv() {
      var  count = 1;
      while (count < numOfGoodDots){
        const divsize = 20;
        const posx = (Math.random() * ($('#gameBoard').width() - divsize)).toFixed();
        var posy = (Math.random() * ($('#gameBoard').height() - divsize)).toFixed();
        const $newdiv = $('<div class="ball"</div>').css({
          'left': posx + 'px',
          'top': posy + 'px'
        });
        $newdiv.appendTo('#gameBoard');
        count ++;
      }
    }

    //ADDS RANDOM AMOUNT OF GREEN (2pt) DOTS INTO THE GAME BOARD
    makeBigDiv();
    function makeBigDiv() {
      var  count = 1;
      while (count < numOfBigDots){
        const divsize = 20;
        const posx = (Math.random() * ($('#gameBoard').width() - divsize)).toFixed();
        var posy = (Math.random() * ($('#gameBoard').height() - divsize)).toFixed();
        const $newBigdiv = $('<div class="bigBall"></div>').css({
          'left': posx + 'px',
          'top': posy + 'px'
        });
        $newBigdiv.appendTo('#gameBoard');
        count ++;
      }
    }



    // ADDS RANDOM AMOUNT OF RED (-1PT) DOTS INTO THE GAME BOARD
    makeBadDiv();
    function makeBadDiv() {
      var  count = 1;
      while (count < numOfBadDots){
        const divsize = 20;
        const posx = (Math.random() * ($('#gameBoard').width() - divsize)).toFixed();
        var posy = (Math.random() * ($('#gameBoard').height() - divsize)).toFixed();
        const $newBaddiv = $('<div class="badball"></div>').css({
          'left': posx + 'px',
          'top': posy + 'px'
        });
        $newBaddiv.appendTo('#gameBoard');
        count ++;
      }
    }

    // ADDS ONE GOLD DOT (10PT) INTO THE GAME BOARD AT A RANDOM.
    setTimeout(function () {
      makeGoldDiv();
    }, Math.floor(Math.random() * (gameTime - 10000)));
    function makeGoldDiv() {
      var  count = 1;
      while (count < numOfGoldDots){
        const divsize = 20;
        const posx = (Math.random() * ($('#gameBoard').width() - divsize)).toFixed();
        var posy = (Math.random() * ($('#gameBoard').height() - divsize)).toFixed();
        const $newGoldDiv = $('<div class="goldenball"></div>').css({
          'left': posx + 'px',
          'top': posy + 'px'
        });
        $newGoldDiv.appendTo('#gameBoard');
        count ++;
        if(!mute)goldenters.play();

      }
    }

    // CHECK FOR COLLIDES

    // CHECKS FOR P1 COLLIDE WITH BLUE DOTS
    function isCollideP1(p1Cube, blueDot) {
      return !(
        ((p1Cube.y + p1Cube.height) < (blueDot.y)) ||
        (p1Cube.y > (blueDot.y + blueDot.height)) ||
        ((p1Cube.x + p1Cube.width) < blueDot.x) ||
        (p1Cube.x > (blueDot.x + blueDot.width))
      );
    }
    // CHECKS FOR P2 COLLIDE WITH BLUE DOTS
    function isCollideP2(p2Cube, blueDot) {
      return !(
        ((p2Cube.y + p2Cube.height) < (blueDot.y)) ||
        (p2Cube.y > (blueDot.y + blueDot.height)) ||
        ((p2Cube.x + p2Cube.width) < blueDot.x) ||
        (p2Cube.x > (blueDot.x + blueDot.width))
      );
    }
    // CHECKS FOR P1 COLLIDE WITH RED DOTS
    function isBadCollideP1(p1Cube, redDot) {
      return !(
        ((p1Cube.y + p1Cube.height) < (redDot.y)) ||
        (p1Cube.y > (redDot.y + redDot.height)) ||
        ((p1Cube.x + p1Cube.width) < redDot.x) ||
        (p1Cube.x > (redDot.x + redDot.width))
      );
    }
    // CHECKS FOR P2 COLLIDE WITH RED DOTS
    function isBadCollideP2(p2Cube, redDot) {
      return !(
        ((p2Cube.y + p2Cube.height) < (redDot.y)) ||
        (p2Cube.y > (redDot.y + redDot.height)) ||
        ((p2Cube.x + p2Cube.width) < redDot.x) ||
        (p2Cube.x > (redDot.x + redDot.width))
      );
    }
    // CHECKS FOR P1 COLLIDE WITH GREEN DOTS
    function isBigCollideP1(p1Cube, greenDot) {
      return !(
        ((p1Cube.y + p1Cube.height) < (greenDot.y)) ||
        (p1Cube.y > (greenDot.y + greenDot.height)) ||
        ((p1Cube.x + p1Cube.width) < greenDot.x) ||
        (p1Cube.x > (greenDot.x + greenDot.width))
      );
    }
    // CHECKS FOR P2 COLLIDE WITH GREEN DOTS
    function isBigCollideP2(p2Cube, greenDot) {
      return !(
        ((p2Cube.y + p2Cube.height) < (greenDot.y)) ||
        (p2Cube.y > (greenDot.y + greenDot.height)) ||
        ((p2Cube.x + p2Cube.width) < greenDot.x) ||
        (p2Cube.x > (greenDot.x + greenDot.width))
      );
    }
    // CHECKS FOR P1 COLLIDE WITH GOLD DOTS
    function isGoldCollideP1(p1Cube, goldDot) {
      return !(
        ((p1Cube.y + p1Cube.height) < (goldDot.y)) ||
        (p1Cube.y > (goldDot.y + goldDot.height)) ||
        ((p1Cube.x + p1Cube.width) < goldDot.x) ||
        (p1Cube.x > (goldDot.x + goldDot.width))
      );
    }
    // CHECKS FOR P2 COLLIDE WITH GOLD DOTS
    function isGoldCollideP2(p2Cube, goldDot) {
      return !(
        ((p2Cube.y + p2Cube.height) < (goldDot.y)) ||
        (p2Cube.y > (goldDot.y + goldDot.height)) ||
        ((p2Cube.x + p2Cube.width) < goldDot.x) ||
        (p2Cube.x > (goldDot.x + goldDot.width))
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
        if (isBadCollideP1(p1Cube, redDot)) {
          $('#p1Counter').html(function(i, val) {
            return val-1;
          });
          $(badball).remove();
          p1score.pop();
          if(!mute)audioError.play();
        }
// WHAT TO DO IF P2 HITS BAD DOT
        if (isBadCollideP2(p2Cube, redDot)) {
          $('#p2Counter').html(function(i, val) {
            return val-1;
          });
          $(badball).remove();
          p2score.pop();
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
        if (isCollideP1(p1Cube, blueDot)) {
          $('#p1Counter').html(function(i, val) {
            return +val+1;
          });
          $(ball).remove();
          p1score.push('ball');
          if(!mute)audio.play();
        }
// WHAT TO DO IF P2 HITS BLUE DOT
        if (isCollideP2(p2Cube, blueDot)) {
          $('#p2Counter').html(function(i, val) {
            return +val+1;
          });
          $(ball).remove();
          p2score.push('ball');
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
        if (isBigCollideP1(p1Cube, greenDot)) {
          $('#p1Counter').html(function(i, val) {
            return +val+2;
          });
          $(bigball).remove();
          p1score.push('ball', 'ball2');
          if(!mute)audioBig.play();
        }
// WHAT TO DO IF P2 HITS GREEN DOT
        if (isBigCollideP2(p2Cube, greenDot)) {
          $('#p2Counter').html(function(i, val) {
            return +val+2;
          });
          $(bigball).remove();
          p2score.push('ball', 'ball2');
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
        if (isGoldCollideP1(p1Cube, goldDot)) {
          $('#p1Counter').html(function(i, val) {
            return +val+10;
          });
          $(goldenball).remove();
          p1score.push('ball', 'ball2', 'ball3', 'ball4', 'ball5', 'ball6', 'ball7', 'ball8', 'ball9', 'ball10');
          if(!mute)audioGold.play();
        }
// WHAT TO DO IF P2 HITS GOLD DOT
        if (isGoldCollideP2(p2Cube, goldDot)) {
          $('#p2Counter').html(function(i, val) {
            return +val+10;

          });
          $(goldenball).remove();
          p2score.push('ball', 'ball2', 'ball3', 'ball4', 'ball5', 'ball6', 'ball7', 'ball8', 'ball9', 'ball10');
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

// CHECK FOR WINNER
    function checkWinner() {
      if (p1score.length > p2score.length){
        $('.showWinner').text('Player One Wins');
      } else if (p1score.length < p2score.length) {
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
