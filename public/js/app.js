"use strict";$(function(){function t(t,e,i){var n=parseInt(t,10)-(y[e]?w:0)+(y[i]?w:0);return 65===e?n<0?0:n>x?x:n:87===e?n<0?0:n>m?m:n:void 0}function e(t,e,i){var n=parseInt(t,10)-(y[e]?w:0)+(y[i]?w:0);return 37===e?n<0?0:n>x?x:n:38===e?n<0?0:n>m?m:n:void 0}function i(){for(var t=1;t<I;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="goldenball"></div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++,F.play()}}function n(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function o(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function a(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function h(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function l(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function r(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function d(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function u(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function c(){v.length>b.length?$(".showWinner").text("Player One Wins"):v.length<b.length?$(".showWinner").text("Player Two Wins"):$(".showWinner").text("It's a draw")}function p(){0===k?(clearTimeout(W),$(".gameScreen").remove(),$("#gameOverDiv").removeClass("noshow"),c()):(P.innerHTML=k+" seconds remaining",k--)}var f=$("#gameBoard"),g=$(".boxP1"),s=$(".boxP2"),x=f.width()-g.width(),m=f.height()-s.height(),y={},w=20,v=[],b=[],B=200,M=200,C=30,I=2,T=!1;$("#mute-button").each(function(){$(this).data("original",$(this).html())}).on("click",function(){$(this).toggleClass("clicked").html(function(t,e){var i=$(this).data("original");return e===i?'<i class="fa fa-volume-off" aria-hidden="true"></i>':i})}),$("#mute-button").on("click",function(){T=!T}),function(){for(var t=1;t<B;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="ball"</div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}(),function(){for(var t=1;t<C;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="bigBall"></div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}(),function(){for(var t=1;t<M;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="badball"></div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}();var F=$("audio")[4];setTimeout(function(){i()},Math.floor(199e4*Math.random())),$(window).keydown(function(i){y[i.which]=!0;var c={x:g.position().left,y:g.position().top,width:g.width(),height:g.height()},p={x:s.position().left,y:s.position().top,width:s.width(),height:s.height()},f=$("audio")[2];$(".badball").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};a(c,i)&&($("#p1Counter").html(function(t,e){return e-1}),$(e).remove(),v.pop(),T||f.play()),h(p,i)&&($("#p2Counter").html(function(t,e){return e-1}),$(e).remove(),b.pop(),T||f.play())}),$(".ball").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()},a=$("audio")[0];n(c,i)&&($("#p1Counter").html(function(t,e){return+e+1}),$(e).remove(),v.push("ball"),T||a.play()),o(p,i)&&($("#p2Counter").html(function(t,e){return+e+1}),$(e).remove(),b.push("ball"),T||a.play())});var x=$("audio")[1];$(".bigBall").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};l(c,i)&&($("#p1Counter").html(function(t,e){return+e+2}),$(e).remove(),v.push("ball","ball2"),T||x.play()),r(p,i)&&($("#p2Counter").html(function(t,e){return+e+2}),$(e).remove(),b.push("ball","ball2"),T||x.play())});var m=$("audio")[3];$(".goldenball").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};d(c,i)&&($("#p1Counter").html(function(t,e){return+e+10}),$(e).remove(),v.push("ball","ball2","ball3","ball4","ball5","ball6","ball7","ball8","ball9","ball10"),T||m.play()),u(p,i)&&($("#p2Counter").html(function(t,e){return+e+10}),$(e).remove(),b.push("ball","ball2","ball3","ball4","ball5","ball6","ball7","ball8","ball9","ball10"),T||m.play())}),g.css({left:function(e,i){return t(i,65,68)},top:function(e,i){return t(i,87,83)}}),s.css({left:function(t,i){return e(i,37,39)},top:function(t,i){return e(i,38,40)}})}),$(window).keyup(function(t){y[t.which]=!1});var k=2e3,P=document.getElementById("countDownTimer"),W=setInterval(p,1e3);$("#mute-button").on("click",function(){$("audio").each(function(){console.log("paused"),$(this).volume=0})}),$("#mute").click(function(){!1===P.muted?mutePage():unMutePage()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwibmV3TG9jYXRpb25QMSIsInYiLCJhIiwiYiIsIm4iLCJkIiwieCIsInBhcnNlSW50Iiwid2lkdGgiLCJuZXdMb2NhdGlvblAyIiwibWFrZUdvbGREaXYiLCJjb3VudCIsIm51bU9mR29sZERvdHMiLCJwb3N4IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJwb3N5IiwiaGVpZ2h0IiwiY3NzIiwibGVmdCIsInRvcCIsImdvbGRlbnRlcnMiLCJwbGF5IiwiaXNDb2xsaWRlUDEiLCJ5IiwiaXNDb2xsaWRlUDIiLCJjIiwiaXNCYWRDb2xsaWRlUDIiLCJzIiwiaXNCaWdDb2xsaWRlUDIiLCJiaWciLCJpc0dvbGRDb2xsaWRlUDEiLCJ3aW5kb3ciLCJrZXlkb3duIiwiZSIsIndoaWNoIiwiYm94UDEiLCJhdWRpb0Vycm9yIiwiZWFjaCIsImdvbGQiLCJpc0JhZENvbGxpZGVQMSIsInAxc2NvcmUiLCJjaGVja1dpbm5lciIsImxlbmd0aCIsInAyc2NvcmUiLCJ0ZXh0IiwiY291bnRkb3duIiwidGltZUxlZnQiLCJjbGVhclRpbWVvdXQiLCJ0aW1lcklkIiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJlbGVtIiwiaW5uZXJIVE1MIiwiZ2FtZUJvYXJkIiwiYm94UDIiLCJudW1PZkdvb2REb3RzIiwibnVtT2ZCYWREb3RzIiwidGhpcyIsImRhdGEiLCJodG1sIiwib24iLCJ0b2dnbGVDbGFzcyIsIl8iLCJvcmciLCJtdXRlIiwibWFrZURpdiIsImRpdnNpemUiLCIkbmV3ZGl2IiwiYXBwZW5kVG8iLCJjbG9uZSIsImRlbGF5IiwiZmFkZUluIiwibWFrZUJpZ0RpdiIsIm51bU9mQmlnRG90cyIsIiRuZXdCaWdkaXYiLCJtYWtlQmFkRGl2IiwiJG5ld0JhZGRpdiIsInNldFRpbWVvdXQiLCJmbG9vciIsInBvc2l0aW9uIiwiYmFsbCIsImF1ZGlvIiwicHVzaCIsImluZGV4IiwiYmFkYmFsbCIsImkiLCJ2YWwiLCJwb3AiLCJhdWRpb0JpZyIsImJpZ2JhbGwiLCJhdWRpb0dvbGQiLCJnb2xkZW5iYWxsIiwiaXNHb2xkQ29sbGlkZVAyIiwiaXNCaWdDb2xsaWRlUDEiLCJrZXl1cCIsImdhbWVUaW1lIiwiY29uc29sZSIsImNsaWNrIiwidW5NdXRlUGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRJbnRlcnZhbCIsImxvZyIsInZvbHVtZSIsIm11dGVkIiwibXV0ZVBhZ2UiXSwibWFwcGluZ3MiOiJZQUFBQSxHQUFFLFdBeUNBLFFBQVNDLEdBQWNDLEVBQUVDLEVBQUVDLEdBQTNCLEdBQUFDLEdBQVNKLFNBQUFBLEVBQVQsS0FBQUssRUFBOEJILEdBQUFJLEVBQUEsSUFBQUQsRUFBQUYsR0FBQUcsRUFBQSxFQUM1QixPQUFVQyxNQUFKSCxFQUFJQSxFQUFtQkMsRUFBQSxFQUFBRCxFQUFuQkksRUFBb0NBLEVBQVdKLEVBQy9DLEtBQU5GLEVBQW1CRSxFQUFJLEVBQUksRUFBSUEsRUFBSUksRUFBUUEsRUFBakNKLE1BQWQsR0FFRCxRQUFBSyxHQUFBUixFQUFBQyxFQUFBQyxHQUNELEdBQUFDLEdBQVNLLFNBQUFBLEVBQVQsS0FBQUosRUFBOEJILEdBQUFJLEVBQUEsSUFBQUQsRUFBQUYsR0FBQUcsRUFBQSxFQUM1QixPQUFVQyxNQUFKSCxFQUFnQkEsRUFBWixFQUFxQkYsRUFBRkUsRUFBQUksRUFBaUJILEVBQUFELEVBQ3BDLEtBQU5GLEVBQWlCRSxFQUFJLEVBQUksRUFBSUEsRUFBSUksRUFBUUEsRUFBL0JKLE1BQWQsR0E0REYsUUFBU00sS0FFUCxJQURBLEdBQUtDLEdBQUwsRUFDT0EsRUFBUUMsR0FBZixDQUNFLEdBQ01DLElBQVFDLEtBQUtDLFVBQWNoQixFQUFBLGNBQWNTLFFBRC9DLEtBQ21FUSxVQUMvREMsR0FBUUgsS0FBS0MsVUFBWWhCLEVBQUUsY0FBY21CLFNBRjdDLEtBRWtFRixTQUM1Q2pCLEdBQUEsa0NBQWtDb0IsS0FDdERDLEtBQVFQLEVBQU8sS0FDZlEsSUFBT0osRUFBTyxPQUtoQk4s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a0QsRUFBQUEsS0FDQW5HLEtBQUEsU0FBQXdGLEVBQWlCdEYsR0FGbkIsTUFBQUQsR0FBQUMsRUFBQSxHQUFBLEtBL0NFb0IsSUFBSyxTQUFTa0UsRUFBRXRGLEdBc0RsQixNQUFTa0csR0FBTWxHLEVBQVcsR0FBQSxPQUd6QnVELEVBRkRyQyxLQUdFaUYsS0FBQUEsU0FBQUEsRUFBQUEsR0FDRCxNQUFBM0YsR0FBQVIsRUFBQSxHQUFBLEtBdlpMb0IsSUFBQSxTQUFBa0UsRUFBQXRGLEdBcVdRLE1BQU9RLEdBQWNSLEVBQUcsR0FBSSxTQU9sQ0YsRUFBRWtDLFFBQVErRCxNQUFNLFNBQVM3RCxHQUN2QjlCLEVBQUU4QixFQUFFQyxRQUFTLEdBYWYsSUFBSVksR0FBWWlELElBQ1Y1QyxFQUFPZ0QsU0FBU0MsZUFBZSxrQkFDL0JwRCxFQUFVcUQsWUFBWXhELEVBQVcsSUFjdkNoRCxHQUFFLGdCQUFnQitELEdBQUcsUUFBUyxXQUM1Qi9ELEVBQUUsU0FBU3dDLEtBQUssV0FDZDJELFFBQVFNLElBQUksVUFDWnpHLEVBQUU0RCxNQUFNOEMsT0FBUyxNQUtyQjFHLEVBQUUsU0FBU29HLE1BQU0sWUFDSSxJQUFmOUMsRUFBS3FELE1BQ1BDLFdBRUFQIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCkgPT4ge1xuXG4gIGNvbnN0IGdhbWVCb2FyZCA9ICQoJyNnYW1lQm9hcmQnKTtcbiAgY29uc3QgIGJveFAxID0gJCgnLmJveFAxJyk7XG4gIGNvbnN0ICBib3hQMiA9ICQoJy5ib3hQMicpO1xuICBjb25zdCAgd2lkdGggPSBnYW1lQm9hcmQud2lkdGgoKSAtIGJveFAxLndpZHRoKCk7XG4gIGNvbnN0ICBoZWlnaHQgPSBnYW1lQm9hcmQuaGVpZ2h0KCkgLSBib3hQMi5oZWlnaHQoKTtcbiAgY29uc3QgIGQgPSB7fTtcbiAgY29uc3QgIHggPSAyMCA7XG4gIGNvbnN0IHAxc2NvcmUgPSBbXTtcbiAgY29uc3QgcDJzY29yZSA9IFtdO1xuICBjb25zdCBudW1PZkdvb2REb3RzID0gMjAwO1xuICBjb25zdCBudW1PZkJhZERvdHMgPSAyMDA7XG4gIGNvbnN0IG51bU9mQmlnRG90cyA9IDMwO1xuICBjb25zdCBudW1PZkdvbGREb3RzID0gMjtcbiAgY29uc3QgZ2FtZVRpbWUgPSAyMDAwMDAwOyAvLyBpbiBtaWxpc2Vjb25kc1xuICBsZXQgbXV0ZSA9IGZhbHNlO1xuXG4gICQoJyNtdXRlLWJ1dHRvbicpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsJywgJCh0aGlzKS5odG1sKCkpO1xuXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NsaWNrZWQnKS5odG1sKGZ1bmN0aW9uKF8sIGh0bWwpIHtcbiAgICAgIHZhciBvcmcgPSAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsJyk7XG5cbiAgICAgIHJldHVybiBodG1sID09PSBvcmcgPyAnPGkgY2xhc3M9XCJmYSBmYS12b2x1bWUtb2ZmXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicgOiBvcmc7XG4gICAgfSk7XG4gIH0pO1xuXG4gICQoJyNtdXRlLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBtdXRlID0gIW11dGU7XG4gIH0pO1xuXG4gIC8vIHYgPSBvcmdpbmluYWwgdmFsdWUuXG4gIC8vIGEsYiA9IGRpcmVjdGlvblxuICAvLyBkIGlzIG9iamVjdCBob2xkaW5nIHRydWUgb3IgZmFzZSBhYm91dCBrZXkgcHJlc3NcbiAgLy8gcGFyc2VJbnQgdHVybnMgcHggaW50byBJbnQgaXNpbmcgMTAgb3Igc29tZXRoaW5nIHJhZGl4IHN0dWZmXG4gIC8vIG4gPSBjaGVjayBmb3IgdmFsaWQgbW92ZW1lbnRcbiAgLy8geCA9IHBpeGFsIGp1bXBcblxuICBmdW5jdGlvbiBuZXdMb2NhdGlvblAxKHYsYSxiKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHYsIDEwKSAtIChkW2FdID8geCA6IDApICsgKGRbYl0gPyB4IDogMCk7XG4gICAgaWYgKGEgPT09IDY1KSByZXR1cm4gICBuIDwgMCA/IDAgOiBuID4gd2lkdGggPyB3aWR0aCA6IG47XG4gICAgaWYgKGEgPT09IDg3KSByZXR1cm4gbiA8IDAgPyAwIDogbiA+IGhlaWdodCA/IGhlaWdodCA6IG47XG4gIH1cbiAgZnVuY3Rpb24gbmV3TG9jYXRpb25QMih2LGEsYikge1xuICAgIGNvbnN0IG4gPSBwYXJzZUludCh2LCAxMCkgLSAoZFthXSA/IHggOiAwKSArIChkW2JdID8geCA6IDApO1xuICAgIGlmIChhID09PSAzNykgcmV0dXJuIG4gPCAwID8gMCA6IG4gPiB3aWR0aCA/IHdpZHRoIDogbjtcbiAgICBpZiAoYSA9PT0gMzgpIHJldHVybiBuIDwgMCA/IDAgOiBuID4gaGVpZ2h0ID8gaGVpZ2h0IDogbjtcbiAgfVxuXG4gIC8vIG1ha2VzIHJhbmRvbSBhbW91bnRzIG9mIGRpdiBvbiB0aGUgcGFnZVxuICBtYWtlRGl2KCk7XG4gIGZ1bmN0aW9uIG1ha2VEaXYoKSB7XG4gICAgdmFyICBjb3VudCA9IDE7XG4gICAgd2hpbGUgKGNvdW50IDwgbnVtT2ZHb29kRG90cyl7XG4gICAgICBjb25zdCBkaXZzaXplID0gMjA7XG4gICAgICBjb25zdCBwb3N4ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLndpZHRoKCkgLSBkaXZzaXplKSkudG9GaXhlZCgpO1xuICAgICAgdmFyIHBvc3kgPSAoTWF0aC5yYW5kb20oKSAqICgkKCcjZ2FtZUJvYXJkJykuaGVpZ2h0KCkgLSBkaXZzaXplKSkudG9GaXhlZCgpO1xuICAgICAgY29uc3QgJG5ld2RpdiA9ICQoJzxkaXYgY2xhc3M9XCJiYWxsXCI8L2Rpdj4nKS5jc3Moe1xuICAgICAgICAnbGVmdCc6IHBvc3ggKyAncHgnLFxuICAgICAgICAndG9wJzogcG9zeSArICdweCdcbiAgICAgIH0pO1xuICAgICAgJG5ld2Rpdi5hcHBlbmRUbygnI2dhbWVCb2FyZCcpLmNsb25lKCkuZGVsYXkoMjAwMCkuZmFkZUluKDEwMCk7XG4gICAgICBjb3VudCArKztcbiAgICB9XG4gIH1cblxuICAvL2FkZHMgaW4gdGhlIGJpZyBncmVlbiBkb3RzXG4gIG1ha2VCaWdEaXYoKTtcbiAgZnVuY3Rpb24gbWFrZUJpZ0RpdigpIHtcbiAgICB2YXIgIGNvdW50ID0gMTtcbiAgICB3aGlsZSAoY291bnQgPCBudW1PZkJpZ0RvdHMpe1xuICAgICAgY29uc3QgZGl2c2l6ZSA9IDIwO1xuICAgICAgY29uc3QgcG9zeCA9IChNYXRoLnJhbmRvbSgpICogKCQoJyNnYW1lQm9hcmQnKS53aWR0aCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIHZhciBwb3N5ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLmhlaWdodCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIGNvbnN0ICRuZXdCaWdkaXYgPSAkKCc8ZGl2IGNsYXNzPVwiYmlnQmFsbFwiPjwvZGl2PicpLmNzcyh7XG4gICAgICAgICdsZWZ0JzogcG9zeCArICdweCcsXG4gICAgICAgICd0b3AnOiBwb3N5ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgICAkbmV3QmlnZGl2LmFwcGVuZFRvKCcjZ2FtZUJvYXJkJykuY2xvbmUoKS5kZWxheSgyMDAwKS5mYWRlSW4oMTAwKTtcbiAgICAgIGNvdW50ICsrO1xuICAgIH1cbiAgfVxuICAvLyBhZGRzIGluIHRoZSBiYWQgcmVkIGRvdHRzXG4gIG1ha2VCYWREaXYoKTtcbiAgZnVuY3Rpb24gbWFrZUJhZERpdigpIHtcbiAgICB2YXIgIGNvdW50ID0gMTtcbiAgICB3aGlsZSAoY291bnQgPCBudW1PZkJhZERvdHMpe1xuICAgICAgY29uc3QgZGl2c2l6ZSA9IDIwO1xuICAgICAgY29uc3QgcG9zeCA9IChNYXRoLnJhbmRvbSgpICogKCQoJyNnYW1lQm9hcmQnKS53aWR0aCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIHZhciBwb3N5ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLmhlaWdodCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIGNvbnN0ICRuZXdCYWRkaXYgPSAkKCc8ZGl2IGNsYXNzPVwiYmFkYmFsbFwiPjwvZGl2PicpLmNzcyh7XG4gICAgICAgICdsZWZ0JzogcG9zeCArICdweCcsXG4gICAgICAgICd0b3AnOiBwb3N5ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgICAkbmV3QmFkZGl2LmFwcGVuZFRvKCcjZ2FtZUJvYXJkJykuY2xvbmUoKS5kZWxheSgyMDAwKS5mYWRlSW4oMTAwKTtcbiAgICAgIGNvdW50ICsrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdvbGRlbnRlcnMgPSAkKCdhdWRpbycpWzRdO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBtYWtlR29sZERpdigpO1xuXG4gIH0sIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChnYW1lVGltZSAtIDEwMDAwKSkpO1xuXG4gIGZ1bmN0aW9uIG1ha2VHb2xkRGl2KCkge1xuICAgIHZhciAgY291bnQgPSAxO1xuICAgIHdoaWxlIChjb3VudCA8IG51bU9mR29sZERvdHMpe1xuICAgICAgY29uc3QgZGl2c2l6ZSA9IDIwO1xuICAgICAgY29uc3QgcG9zeCA9IChNYXRoLnJhbmRvbSgpICogKCQoJyNnYW1lQm9hcmQnKS53aWR0aCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIHZhciBwb3N5ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLmhlaWdodCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIGNvbnN0ICRuZXdHb2xkRGl2ID0gJCgnPGRpdiBjbGFzcz1cImdvbGRlbmJhbGxcIj48L2Rpdj4nKS5jc3Moe1xuICAgICAgICAnbGVmdCc6IHBvc3ggKyAncHgnLFxuICAgICAgICAndG9wJzogcG9zeSArICdweCdcbiAgICAgIH0pO1xuXG5cbiAgICAgICRuZXdHb2xkRGl2LmFwcGVuZFRvKCcjZ2FtZUJvYXJkJykuY2xvbmUoKS5kZWxheSgyMDAwKS5mYWRlSW4oMTAwKTtcbiAgICAgIGNvdW50ICsrO1xuICAgICAgZ29sZGVudGVycy5wbGF5KCk7XG5cbiAgICB9XG4gIH1cblxuICAvLyBjb2xsaWRlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBjb2xsaXNpb25cblxuICAvLyBjaGVjayBmb3IgcDEgKyBibHVlIGRvdHNcbiAgZnVuY3Rpb24gaXNDb2xsaWRlUDEoYSwgYikge1xuICAgIHJldHVybiAhKFxuICAgICAgKChhLnkgKyBhLmhlaWdodCkgPCAoYi55KSkgfHxcbiAgICAgIChhLnkgPiAoYi55ICsgYi5oZWlnaHQpKSB8fFxuICAgICAgKChhLnggKyBhLndpZHRoKSA8IGIueCkgfHxcbiAgICAgIChhLnggPiAoYi54ICsgYi53aWR0aCkpXG4gICAgKTtcbiAgfVxuICAvLyBjaGVjayBmb3IgcDIgKyBibHVlIGRvdHNcbiAgZnVuY3Rpb24gaXNDb2xsaWRlUDIoYywgYikge1xuICAgIHJldHVybiAhKFxuICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAoYi55KSkgfHxcbiAgICAgIChjLnkgPiAoYi55ICsgYi5oZWlnaHQpKSB8fFxuICAgICAgKChjLnggKyBjLndpZHRoKSA8IGIueCkgfHxcbiAgICAgIChjLnggPiAoYi54ICsgYi53aWR0aCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBwMSArIHJlZCBkb3RzXG4gIGZ1bmN0aW9uIGlzQmFkQ29sbGlkZVAxKGEsIHMpIHtcbiAgICByZXR1cm4gIShcbiAgICAgICgoYS55ICsgYS5oZWlnaHQpIDwgKHMueSkpIHx8XG4gICAgICAoYS55ID4gKHMueSArIHMuaGVpZ2h0KSkgfHxcbiAgICAgICgoYS54ICsgYS53aWR0aCkgPCBzLngpIHx8XG4gICAgICAoYS54ID4gKHMueCArIHMud2lkdGgpKVxuICAgICk7XG4gIH1cbiAgLy8gY2hlY2sgZm9yIHAyICsgcmVkIGRvdHNcbiAgZnVuY3Rpb24gaXNCYWRDb2xsaWRlUDIoYywgcykge1xuICAgIHJldHVybiAhKFxuICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAocy55KSkgfHxcbiAgICAgIChjLnkgPiAocy55ICsgcy5oZWlnaHQpKSB8fFxuICAgICAgKChjLnggKyBjLndpZHRoKSA8IHMueCkgfHxcbiAgICAgIChjLnggPiAocy54ICsgcy53aWR0aCkpXG4gICAgKTtcbiAgfVxuICAvLyBjaGVjayBmb3IgcDEgKyBncmVlbiBkb3RzXG4gIGZ1bmN0aW9uIGlzQmlnQ29sbGlkZVAxKGEsIGJpZykge1xuICAgIHJldHVybiAhKFxuICAgICAgKChhLnkgKyBhLmhlaWdodCkgPCAoYmlnLnkpKSB8fFxuICAgICAgKGEueSA+IChiaWcueSArIGJpZy5oZWlnaHQpKSB8fFxuICAgICAgKChhLnggKyBhLndpZHRoKSA8IGJpZy54KSB8fFxuICAgICAgKGEueCA+IChiaWcueCArIGJpZy53aWR0aCkpXG4gICAgKTtcbiAgfVxuICAvLyBjaGVjayBmb3IgcDIgKyBncmVlbiBkb3RzXG4gIGZ1bmN0aW9uIGlzQmlnQ29sbGlkZVAyKGMsIGJpZykge1xuICAgIHJldHVybiAhKFxuICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAoYmlnLnkpKSB8fFxuICAgICAgKGMueSA+IChiaWcueSArIGJpZy5oZWlnaHQpKSB8fFxuICAgICAgKChjLnggKyBjLndpZHRoKSA8IGJpZy54KSB8fFxuICAgICAgKGMueCA+IChiaWcueCArIGJpZy53aWR0aCkpXG4gICAgKTtcbiAgfVxuICAvLyBjaGVjayBmb3IgcDEgKyBncmVlbiBkb3RzXG4gIGZ1bmN0aW9uIGlzR29sZENvbGxpZGVQMShhLCBnb2xkKSB7XG4gICAgcmV0dXJuICEoXG4gICAgICAoKGEueSArIGEuaGVpZ2h0KSA8IChnb2xkLnkpKSB8fFxuICAgICAgKGEueSA+IChnb2xkLnkgKyBnb2xkLmhlaWdodCkpIHx8XG4gICAgICAoKGEueCArIGEud2lkdGgpIDwgZ29sZC54KSB8fFxuICAgICAgKGEueCA+IChnb2xkLnggKyBnb2xkLndpZHRoKSlcbiAgICApO1xuICB9XG4gIC8vIGNoZWNrIGZvciBwMiArIEdPTEQgZG90c1xuICBmdW5jdGlvbiBpc0dvbGRDb2xsaWRlUDIoYywgZ29sZCkge1xuICAgIHJldHVybiAhKFxuICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAoZ29sZC55KSkgfHxcbiAgICAgIChjLnkgPiAoZ29sZC55ICsgZ29sZC5oZWlnaHQpKSB8fFxuICAgICAgKChjLnggKyBjLndpZHRoKSA8IGdvbGQueCkgfHxcbiAgICAgIChjLnggPiAoZ29sZC54ICsgZ29sZC53aWR0aCkpXG4gICAgKTtcbiAgfVxuXG4gIC8vbW92ZW1lbnQgdXNpbmcga2V5c1xuICAkKHdpbmRvdykua2V5ZG93bihmdW5jdGlvbihlKSB7XG4gICAgZFtlLndoaWNoXSA9IHRydWU7XG5cbiAgICBjb25zdCBhID0ge1xuICAgICAgeDogYm94UDEucG9zaXRpb24oKS5sZWZ0LFxuICAgICAgeTogYm94UDEucG9zaXRpb24oKS50b3AsXG4gICAgICB3aWR0aDogYm94UDEud2lkdGgoKSxcbiAgICAgIGhlaWdodDogYm94UDEuaGVpZ2h0KClcbiAgICB9O1xuXG4gICAgY29uc3QgYyA9IHtcbiAgICAgIHg6IGJveFAyLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgIHk6IGJveFAyLnBvc2l0aW9uKCkudG9wLFxuICAgICAgd2lkdGg6IGJveFAyLndpZHRoKCksXG4gICAgICBoZWlnaHQ6IGJveFAyLmhlaWdodCgpXG4gICAgfTtcblxuICAgIGNvbnN0IGF1ZGlvRXJyb3IgPSAkKCdhdWRpbycpWzJdO1xuICAgIC8vQ2hlY2sgZm9yIGJhZCBiYWxsIGNvbm5lY3RcbiAgICAkKCcuYmFkYmFsbCcpLmVhY2goKGluZGV4LCBiYWRiYWxsKSA9PiB7XG4gICAgICBjb25zdCBzID0ge1xuICAgICAgICB4OiAkKGJhZGJhbGwpLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgICAgeTogJChiYWRiYWxsKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgd2lkdGg6ICQoYmFkYmFsbCkud2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiAkKGJhZGJhbGwpLmhlaWdodCgpXG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNCYWRDb2xsaWRlUDEoYSwgcykpIHtcbiAgICAgICAgJCgnI3AxQ291bnRlcicpLmh0bWwoZnVuY3Rpb24oaSwgdmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgJChiYWRiYWxsKS5yZW1vdmUoKTtcbiAgICAgICAgcDFzY29yZS5wb3AoKTtcbiAgICAgICAgaWYoIW11dGUpYXVkaW9FcnJvci5wbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0JhZENvbGxpZGVQMihjLCBzKSkge1xuICAgICAgICAkKCcjcDJDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gdmFsLTE7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGJhZGJhbGwpLnJlbW92ZSgpO1xuICAgICAgICBwMnNjb3JlLnBvcCgpO1xuICAgICAgICBpZighbXV0ZSlhdWRpb0Vycm9yLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL0NoZWNrIGZvciBiYWxsIGNvbm5lY3RcbiAgICAkKCcuYmFsbCcpLmVhY2goKGluZGV4LCBiYWxsKSA9PiB7XG4gICAgICBjb25zdCBiID0ge1xuICAgICAgICB4OiAkKGJhbGwpLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgICAgeTogJChiYWxsKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgd2lkdGg6ICQoYmFsbCkud2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiAkKGJhbGwpLmhlaWdodCgpXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhdWRpbyA9ICQoJ2F1ZGlvJylbMF07XG5cbiAgICAgIGlmIChpc0NvbGxpZGVQMShhLCBiKSkge1xuICAgICAgICAkKCcjcDFDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gK3ZhbCsxO1xuICAgICAgICB9KTtcbiAgICAgICAgJChiYWxsKS5yZW1vdmUoKTtcbiAgICAgICAgcDFzY29yZS5wdXNoKCdiYWxsJyk7XG4gICAgICAgIGlmKCFtdXRlKWF1ZGlvLnBsYXkoKTtcblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDb2xsaWRlUDIoYywgYikpIHtcbiAgICAgICAgJCgnI3AyQ291bnRlcicpLmh0bWwoZnVuY3Rpb24oaSwgdmFsKSB7XG4gICAgICAgICAgcmV0dXJuICt2YWwrMTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoYmFsbCkucmVtb3ZlKCk7XG4gICAgICAgIHAyc2NvcmUucHVzaCgnYmFsbCcpO1xuICAgICAgICBpZighbXV0ZSlhdWRpby5wbGF5KCk7XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGF1ZGlvQmlnID0gJCgnYXVkaW8nKVsxXTtcbiAgICAvL0NoZWNrIGZvciBiaWcgYmFsbCBjb25uZWN0XG4gICAgJCgnLmJpZ0JhbGwnKS5lYWNoKChpbmRleCwgYmlnYmFsbCkgPT4ge1xuICAgICAgY29uc3QgYmlnID0ge1xuICAgICAgICB4OiAkKGJpZ2JhbGwpLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgICAgeTogJChiaWdiYWxsKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgd2lkdGg6ICQoYmlnYmFsbCkud2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiAkKGJpZ2JhbGwpLmhlaWdodCgpXG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNCaWdDb2xsaWRlUDEoYSwgYmlnKSkge1xuICAgICAgICAkKCcjcDFDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gK3ZhbCsyO1xuICAgICAgICB9KTtcbiAgICAgICAgJChiaWdiYWxsKS5yZW1vdmUoKTtcbiAgICAgICAgcDFzY29yZS5wdXNoKCdiYWxsJywgJ2JhbGwyJyk7XG4gICAgICAgIGlmKCFtdXRlKWF1ZGlvQmlnLnBsYXkoKTtcblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNCaWdDb2xsaWRlUDIoYywgYmlnKSkge1xuICAgICAgICAkKCcjcDJDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gK3ZhbCsyO1xuICAgICAgICB9KTtcbiAgICAgICAgJChiaWdiYWxsKS5yZW1vdmUoKTtcbiAgICAgICAgcDJzY29yZS5wdXNoKCdiYWxsJywgJ2JhbGwyJyk7XG4gICAgICAgIGlmKCFtdXRlKWF1ZGlvQmlnLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGF1ZGlvR29sZCA9ICQoJ2F1ZGlvJylbM107XG4gICAgLy9DaGVjayBmb3IgR09MRCBiYWxsIGNvbm5lY3RcbiAgICAkKCcuZ29sZGVuYmFsbCcpLmVhY2goKGluZGV4LCBnb2xkZW5iYWxsKSA9PiB7XG4gICAgICBjb25zdCBnb2xkID0ge1xuICAgICAgICB4OiAkKGdvbGRlbmJhbGwpLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgICAgeTogJChnb2xkZW5iYWxsKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgd2lkdGg6ICQoZ29sZGVuYmFsbCkud2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiAkKGdvbGRlbmJhbGwpLmhlaWdodCgpXG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNHb2xkQ29sbGlkZVAxKGEsIGdvbGQpKSB7XG4gICAgICAgICQoJyNwMUNvdW50ZXInKS5odG1sKGZ1bmN0aW9uKGksIHZhbCkge1xuICAgICAgICAgIHJldHVybiArdmFsKzEwO1xuICAgICAgICB9KTtcbiAgICAgICAgJChnb2xkZW5iYWxsKS5yZW1vdmUoKTtcbiAgICAgICAgcDFzY29yZS5wdXNoKCdiYWxsJywgJ2JhbGwyJywgJ2JhbGwzJywgJ2JhbGw0JywgJ2JhbGw1JywgJ2JhbGw2JywgJ2JhbGw3JywgJ2JhbGw4JywgJ2JhbGw5JywgJ2JhbGwxMCcpO1xuICAgICAgICBpZighbXV0ZSlhdWRpb0dvbGQucGxheSgpO1xuXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0dvbGRDb2xsaWRlUDIoYywgZ29sZCkpIHtcbiAgICAgICAgJCgnI3AyQ291bnRlcicpLmh0bWwoZnVuY3Rpb24oaSwgdmFsKSB7XG4gICAgICAgICAgcmV0dXJuICt2YWwrMTA7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGdvbGRlbmJhbGwpLnJlbW92ZSgpO1xuICAgICAgICBwMnNjb3JlLnB1c2goJ2JhbGwnLCAnYmFsbDInLCAnYmFsbDMnLCAnYmFsbDQnLCAnYmFsbDUnLCAnYmFsbDYnLCAnYmFsbDcnLCAnYmFsbDgnLCAnYmFsbDknLCAnYmFsbDEwJyk7XG4gICAgICAgIGlmKCFtdXRlKWF1ZGlvR29sZC5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgLy8gYm94IG1vdmVtZW50IGNvbnRyb2xsc1xuICAgIGJveFAxLmNzcyh7XG4gICAgICBsZWZ0OiBmdW5jdGlvbihpLHYpIHtcbiAgICAgICAgcmV0dXJuIG5ld0xvY2F0aW9uUDEodiwgNjUsIDY4KTtcbiAgICAgIH0sXG4gICAgICB0b3A6IGZ1bmN0aW9uKGksdikge1xuICAgICAgICByZXR1cm4gbmV3TG9jYXRpb25QMSh2LCA4NywgODMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJveFAyLmNzcyh7XG4gICAgICBsZWZ0OiBmdW5jdGlvbihpLHYpIHtcbiAgICAgICAgcmV0dXJuIG5ld0xvY2F0aW9uUDIodiwgMzcsIDM5KTtcbiAgICAgIH0sXG4gICAgICB0b3A6IGZ1bmN0aW9uKGksdikge1xuICAgICAgICByZXR1cm4gbmV3TG9jYXRpb25QMih2LCAzOCwgNDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuXG5cbiAgJCh3aW5kb3cpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICBkW2Uud2hpY2hdID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vY2hlY2tpbmcgZm9yIHdpbm5uZXIgZnVuY3Rpb25cbiAgZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gICAgaWYgKHAxc2NvcmUubGVuZ3RoID4gcDJzY29yZS5sZW5ndGgpe1xuICAgICAgJCgnLnNob3dXaW5uZXInKS50ZXh0KCdQbGF5ZXIgT25lIFdpbnMnKTtcbiAgICB9IGVsc2UgaWYgKHAxc2NvcmUubGVuZ3RoIDwgcDJzY29yZS5sZW5ndGgpIHtcbiAgICAgICQoJy5zaG93V2lubmVyJykudGV4dCgnUGxheWVyIFR3byBXaW5zJyk7XG4gICAgfSBlbHNlICQoJy5zaG93V2lubmVyJykudGV4dCgnSXRcXCdzIGEgZHJhdycpO1xuICB9XG5cblxuICBsZXQgdGltZUxlZnQgPSAoZ2FtZVRpbWUgLyAxMDAwKTtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudERvd25UaW1lcicpO1xuICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoY291bnRkb3duLCAxMDAwKTtcbiAgZnVuY3Rpb24gY291bnRkb3duKCkge1xuICAgIGlmICh0aW1lTGVmdCA9PT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgJCgnLmdhbWVTY3JlZW4nKS5yZW1vdmUoKTtcbiAgICAgICQoJyNnYW1lT3ZlckRpdicpLnJlbW92ZUNsYXNzKCdub3Nob3cnKTtcbiAgICAgIGNoZWNrV2lubmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gdGltZUxlZnQgKyAnIHNlY29uZHMgcmVtYWluaW5nJztcbiAgICAgIHRpbWVMZWZ0LS07XG4gICAgfVxuICB9XG5cblxuICAkKCcjbXV0ZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICQoJ2F1ZGlvJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ3BhdXNlZCcpXG4gICAgICAkKHRoaXMpLnZvbHVtZSA9IDAuMDtcbiAgICB9KTtcblxuICB9KTtcblxuICAkKCcjbXV0ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmIChlbGVtLm11dGVkID09PSBmYWxzZSl7XG4gICAgICBtdXRlUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bk11dGVQYWdlKCk7XG4gICAgfVxuICB9KTtcblxuXG59KTtcbiJdfQ==
