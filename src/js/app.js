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
  const numOfGoodDots = 200;
  const numOfBadDots = 200;
  const numOfBigDots = 30;
  const numOfGoldDots = 2;
  // const gameTime = 30000; // in miliseconds
  let mute = false;
  const audio = $('audio')[0];
  const audioBig = $('audio')[1];
  const audioError = $('audio')[2];
  const audioGold = $('audio')[3];
  const goldenters = $('audio')[4];
  let gameTime = 60000;

  const rangeSlider = function(){
    $('input[type=range]').eq(0).on('change', (e) => {
      gameTime = $(e.target).val();
      console.log('gametime is now ', gameTime);
      $('.value').text('Your game will last ' + (gameTime / 1000) + ' seconds');
    });
  };

  let help = false;
  $('#popupBackground').hide();

  rangeSlider();


  //help

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
  $('.icon1').each(function() {
    $(this).data('original', $(this).html());
  }).on('click', function() {
    $(this).toggleClass('clicked').html(function(_, html) {
      var org = $(this).data('original');
      return html === org ? '<i class="fa fa-times-circle" aria-hidden="true"></i>' : org;
    });
  });

  //Mute button toggle
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
    console.log('start clicked');
    $( '#welcomePage' ).hide();
    $('.gameScreen').removeAttr('id', 'hidden');




    $('#mute-button').on('click', () => {
      mute = !mute;
    });

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

    // makes random amounts of div on the page
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
        $newdiv.appendTo('#gameBoard').clone().delay(2000).fadeIn(100);
        count ++;
      }
    }

    //adds in the big green dots
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
        $newBigdiv.appendTo('#gameBoard').clone().delay(2000).fadeIn(100);
        count ++;
      }
    }
    // adds in the bad red dotts
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
        $newBaddiv.appendTo('#gameBoard').clone().delay(2000).fadeIn(100);
        count ++;
      }
    }


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


        $newGoldDiv.appendTo('#gameBoard').clone().delay(2000).fadeIn(100);
        count ++;
        if(!mute)goldenters.play();

      }
    }

    // collide function to check for collision

    // check for p1 + blue dots
    function isCollideP1(a, b) {
      return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
      );
    }
    // check for p2 + blue dots
    function isCollideP2(c, b) {
      return !(
        ((c.y + c.height) < (b.y)) ||
        (c.y > (b.y + b.height)) ||
        ((c.x + c.width) < b.x) ||
        (c.x > (b.x + b.width))
      );
    }

    // check for p1 + red dots
    function isBadCollideP1(a, s) {
      return !(
        ((a.y + a.height) < (s.y)) ||
        (a.y > (s.y + s.height)) ||
        ((a.x + a.width) < s.x) ||
        (a.x > (s.x + s.width))
      );
    }
    // check for p2 + red dots
    function isBadCollideP2(c, s) {
      return !(
        ((c.y + c.height) < (s.y)) ||
        (c.y > (s.y + s.height)) ||
        ((c.x + c.width) < s.x) ||
        (c.x > (s.x + s.width))
      );
    }
    // check for p1 + green dots
    function isBigCollideP1(a, big) {
      return !(
        ((a.y + a.height) < (big.y)) ||
        (a.y > (big.y + big.height)) ||
        ((a.x + a.width) < big.x) ||
        (a.x > (big.x + big.width))
      );
    }
    // check for p2 + green dots
    function isBigCollideP2(c, big) {
      return !(
        ((c.y + c.height) < (big.y)) ||
        (c.y > (big.y + big.height)) ||
        ((c.x + c.width) < big.x) ||
        (c.x > (big.x + big.width))
      );
    }
    // check for p1 + green dots
    function isGoldCollideP1(a, gold) {
      return !(
        ((a.y + a.height) < (gold.y)) ||
        (a.y > (gold.y + gold.height)) ||
        ((a.x + a.width) < gold.x) ||
        (a.x > (gold.x + gold.width))
      );
    }
    // check for p2 + GOLD dots
    function isGoldCollideP2(c, gold) {
      return !(
        ((c.y + c.height) < (gold.y)) ||
        (c.y > (gold.y + gold.height)) ||
        ((c.x + c.width) < gold.x) ||
        (c.x > (gold.x + gold.width))
      );
    }

    //movement using keys
    $(window).keydown(function(e) {
      d[e.which] = true;

      const a = {
        x: boxP1.position().left,
        y: boxP1.position().top,
        width: boxP1.width(),
        height: boxP1.height()
      };

      const c = {
        x: boxP2.position().left,
        y: boxP2.position().top,
        width: boxP2.width(),
        height: boxP2.height()
      };


      //Check for bad ball connect
      $('.badball').each((index, badball) => {
        const s = {
          x: $(badball).position().left,
          y: $(badball).position().top,
          width: $(badball).width(),
          height: $(badball).height()
        };

        if (isBadCollideP1(a, s)) {
          $('#p1Counter').html(function(i, val) {
            return val-1;
          });
          $(badball).remove();
          p1score.pop();
          if(!mute)audioError.play();
        }

        if (isBadCollideP2(c, s)) {
          $('#p2Counter').html(function(i, val) {
            return val-1;
          });
          $(badball).remove();
          p2score.pop();
          if(!mute)audioError.play();
        }
      });

      //Check for ball connect
      $('.ball').each((index, ball) => {
        const b = {
          x: $(ball).position().left,
          y: $(ball).position().top,
          width: $(ball).width(),
          height: $(ball).height()
        };



        if (isCollideP1(a, b)) {
          $('#p1Counter').html(function(i, val) {
            return +val+1;
          });
          $(ball).remove();
          p1score.push('ball');
          if(!mute)audio.play();

        }

        if (isCollideP2(c, b)) {
          $('#p2Counter').html(function(i, val) {
            return +val+1;
          });
          $(ball).remove();
          p2score.push('ball');
          if(!mute)audio.play();

        }
      });


      //Check for big ball connect
      $('.bigBall').each((index, bigball) => {
        const big = {
          x: $(bigball).position().left,
          y: $(bigball).position().top,
          width: $(bigball).width(),
          height: $(bigball).height()
        };

        if (isBigCollideP1(a, big)) {
          $('#p1Counter').html(function(i, val) {
            return +val+2;
          });
          $(bigball).remove();
          p1score.push('ball', 'ball2');
          if(!mute)audioBig.play();

        }

        if (isBigCollideP2(c, big)) {
          $('#p2Counter').html(function(i, val) {
            return +val+2;
          });
          $(bigball).remove();
          p2score.push('ball', 'ball2');
          if(!mute)audioBig.play();
        }
      });


      //Check for GOLD ball connect
      $('.goldenball').each((index, goldenball) => {
        const gold = {
          x: $(goldenball).position().left,
          y: $(goldenball).position().top,
          width: $(goldenball).width(),
          height: $(goldenball).height()
        };

        if (isGoldCollideP1(a, gold)) {
          $('#p1Counter').html(function(i, val) {
            return +val+10;
          });
          $(goldenball).remove();
          p1score.push('ball', 'ball2', 'ball3', 'ball4', 'ball5', 'ball6', 'ball7', 'ball8', 'ball9', 'ball10');
          if(!mute)audioGold.play();

        }

        if (isGoldCollideP2(c, gold)) {
          $('#p2Counter').html(function(i, val) {
            return +val+10;
          });
          $(goldenball).remove();
          p2score.push('ball', 'ball2', 'ball3', 'ball4', 'ball5', 'ball6', 'ball7', 'ball8', 'ball9', 'ball10');
          if(!mute)audioGold.play();
        }
      });



      // box movement controlls
      boxP1.css({
        left: function(i,v) {
          return newLocationP1(v, 65, 68);
        },
        top: function(i,v) {
          return newLocationP1(v, 87, 83);
        }
      });
      boxP2.css({
        left: function(i,v) {
          return newLocationP2(v, 37, 39);
        },
        top: function(i,v) {
          return newLocationP2(v, 38, 40);
        }
      });
    });



    $(window).keyup(function(e) {
      d[e.which] = false;
    });

    //checking for winnner function
    function checkWinner() {
      if (p1score.length > p2score.length){
        $('.showWinner').text('Player One Wins');
      } else if (p1score.length < p2score.length) {
        $('.showWinner').text('Player Two Wins');
      } else $('.showWinner').text('It\'s a draw');
    }


    let timeLeft = (gameTime / 1000);
    const elem = document.getElementById('countDownTimer');
    const timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft === 0) {
        clearTimeout(timerId);
        $('.gameScreen').remove();
        $('#gameOverDiv').removeClass('noshow');
        checkWinner();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  });



});
