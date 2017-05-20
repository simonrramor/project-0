$(() => {
  console.log('helllloooo');

  const gameBoard = $('#gameBoard');
  const  box = $('.boxP1', 'box2');
  const  boxP1 = $('.boxP1');
  const  boxP2 = $('.boxP2');
  const  width = gameBoard.width() - box.width();
  const height = gameBoard.height() - box.height();
  const  d = {};
  const  x = 10;
  const $balls = $('.ball');



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

// make div works but cannot acsess divs when made to "eat" them
  makeDiv();

  function makeDiv() {
    var  count = 1;

    while (count < 20){
      const numRand = Math.floor(Math.random() * 501);
      const divsize = 100;
      const posx = (Math.random() * ($('body').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('body').height() - divsize)).toFixed();
      const $newdiv = $('<div class="ball ' + '"></div>').css({
        'left': posx + 'px',
        'top': posy + 'px'
      });
      $newdiv.appendTo('#gameBoard').clone().delay(2000).fadeIn(100);
      count ++;
    }
  }

// both boxes move but box 2 wont eat anything and box1 now eats everything on X axsis
  //movement using keys
  $(window).keydown(function(e) {
    d[e.which] = true;

    const a = {
      x: boxP2.position().left,
      y: boxP1.position().top,
      width: boxP1.width(),
      height: boxP1.height()
    };

    $balls.each((index, ball) => {
      const b = {
        x: $(ball).position().left,
        y: $(ball).position().top,
        width: $(ball).width(),
        height: $(ball).height()
      };

      function isCollide(a, b) {
        return !(
          ((a.y + a.height) < (b.y)) ||
          (a.y > (b.y + b.height)) ||
          ((a.x + a.width) < b.x) ||
          (a.x > (b.x + b.width))
        );
      }

      if (isCollide(a, b)) {
        $(ball).remove();
      }
    });

    // box movement controlls
    boxP1.css({
      left: function(i,v) { return newLocationP1(v, 65, 68); },
      top: function(i,v) { return newLocationP1(v, 87, 83); }
    });
    boxP2.css({
      left: function(i,v) { return newLocationP2(v, 37, 39); },
      top: function(i,v) { return newLocationP2(v, 38, 40); }
    });
  });
  $(window).keyup(function(e) {
    d[e.which] = false;
  });



  // USE COMMENTED OUT CODE FOR SMOOTHER MOVEMENT
  // repeats posting of CSS to show box movement
  // setInterval(function() {
  //   box.css({
  //     left: function(i,v) { return newLocation(v, 37, 39); },
  //     top: function(i,v) { return newLocation(v, 38, 40); }
  //   });
  // }, 20);
});
