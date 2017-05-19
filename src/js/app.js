$(() => {
  console.log('helllloooo');

  const gameBoard = $('#gameBoard');
  const  box = $('.box');
  const  width = gameBoard.width() - box.width();
  const height = gameBoard.height() - box.height();
  const  d = {};
  const  x = 30;
  const $balls = $('.ball');





  // v = orgininal value.
  // a,b = direction
  // d is object holding true or fase about key press
  // parseInt turns px into Int ising 10 or something radix stuff
  // n = check for valid movement
  // x = pixal jump

  function newLocation(v,a,b) {
    const n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    if (a === 37) return n < 0 ? 0 : n > width ? width : n;
    if (a === 38) return n < 0 ? 0 : n > height ? height : n;
  }

  //movement using keys
  $(window).keydown(function(e) {
    d[e.which] = true;
    // const ballPosition = ball.position()
    // const boxPosition = box.position();

    const a = {
      x: box.position().left,
      y: box.position().top,
      width: box.width(),
      height: box.height()
    };

    $balls.each((index, ball) => {
      const b = {
        x: $(ball).position().left,
        y: $(ball).position().top,
        width: $(ball).width(),
        height: $(ball).height()
      };

      console.log(isCollide(a, b), $(ball).attr('class'));

      // if (isCollide(a, b)) {
      //   $(ball).remove();
      // }
    });


    box.css({
      left: function(i,v) { return newLocation(v, 37, 39); },
      top: function(i,v) { return newLocation(v, 38, 40); }
    });

    // var ballString = JSON.stringify(ballPosition);
    // var boxString = JSON.stringify(boxPosition);

    // const result = isCollide(a, b);
    //
    // if (result === true) {
    //   box.addClass('boxgrow');
    //   console.log('winner')
    // } else {
    //   console.log('not quite')
    // }



  });
  $(window).keyup(function(e) {
    d[e.which] = false;
  });

  function isCollide(a, b) {
    return !(
      ((a.y + a.height) < (b.y)) ||
      (a.y > (b.y + b.height)) ||
      ((a.x + a.width) < b.x) ||
      (a.x > (b.x + b.width))
    );
  }

  // USE COMMENTED OUT CODE FOR SMOOTHER MOVEMENT
  // repeats posting of CSS to show box movement
//   setInterval(function() {
//     box.css({
//       left: function(i,v) { return newLocation(v, 37, 39); },
//       top: function(i,v) { return newLocation(v, 38, 40); }
//     });
//   }, 20);
});
