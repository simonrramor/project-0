$(document).ready(function () {
  makeDiv();


  function makeDiv() {
    var  count = 1;

    while (count < 300){
      const numRand = Math.floor(Math.random() * 501);
      const divsize = 100;
      const posx = (Math.random() * ($('body').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('body').height() - divsize)).toFixed();
      $newdiv = $('<div class="exploding"></div>').css({
        'left': posx + 'px',
        'top': posy + 'px'
      });
      $newdiv.appendTo('#gameBoard').delay(2000).fadeIn(100);
      count ++;
    }
  }
});
