"use strict";$(function(){var t=$("#gameBoard"),e=$(".boxP1"),i=$(".boxP2"),n=t.width()-e.width(),o=t.height()-i.height(),a={},h=20,l=[],r=[],d=200,u=200,c=30,s=2,g=!1,p=$("audio")[0],f=$("audio")[1],m=$("audio")[2],x=$("audio")[3],y=$("audio")[4],w=6e4,v=!1;$("#popupBackground").hide(),function(){$("input[type=range]").eq(0).on("change",function(t){w=$(t.target).val(),console.log("gametime is now ",w),$(".value").text("Your game will last "+w/1e3+" seconds")})}(),$(".icon1").click(function(){!1===v?($("#popupBackground").fadeIn("fast","swing"),v=!0):!0===v&&($("#popupBackground").fadeOut("fast","swing"),v=!1)}),$(".icon1").each(function(){$(this).data("original",$(this).html())}).on("click",function(){$(this).toggleClass("clicked").html(function(t,e){var i=$(this).data("original");return e===i?'<i class="fa fa-times-circle" aria-hidden="true"></i>':i})}),$("#mute-button").each(function(){$(this).data("original",$(this).html())}).on("click",function(){$(this).toggleClass("clicked").html(function(t,e){var i=$(this).data("original");return e===i?'<i class="fa fa-volume-off" aria-hidden="true"></i>':i})}),$("#start").click(function(){function t(t,e,i){var l=parseInt(t,10)-(a[e]?h:0)+(a[i]?h:0);return 65===e?l<0?0:l>n?n:l:87===e?l<0?0:l>o?o:l:void 0}function v(t,e,i){var l=parseInt(t,10)-(a[e]?h:0)+(a[i]?h:0);return 37===e?l<0?0:l>n?n:l:38===e?l<0?0:l>o?o:l:void 0}function b(){for(var t=1;t<s;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="goldenball"></div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++,g||y.play()}}function B(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function k(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function C(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function M(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function I(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function T(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function F(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function P(t,e){return!(t.y+t.height<e.y||t.y>e.y+e.height||t.x+t.width<e.x||t.x>e.x+e.width)}function W(){l.length>r.length?$(".showWinner").text("Player One Wins"):l.length<r.length?$(".showWinner").text("Player Two Wins"):$(".showWinner").text("It's a draw")}function O(){S.innerHTML=D+" seconds remaining",0===--D&&(clearTimeout(q),$(".gameScreen").remove(),$("#gameOverDiv").removeClass("noshow"),W())}console.log("start clicked"),$("#welcomePage").hide(),$(".gameScreen").removeAttr("id","hidden"),$("#mute-button").on("click",function(){g=!g}),function(){for(var t=1;t<d;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="ball"</div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}(),function(){for(var t=1;t<c;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="bigBall"></div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}(),function(){for(var t=1;t<u;){var e=(Math.random()*($("#gameBoard").width()-20)).toFixed(),i=(Math.random()*($("#gameBoard").height()-20)).toFixed();$('<div class="badball"></div>').css({left:e+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}(),setTimeout(function(){b()},Math.floor(Math.random()*(w-1e4))),$(window).keydown(function(n){a[n.which]=!0;var o={x:e.position().left,y:e.position().top,width:e.width(),height:e.height()},h={x:i.position().left,y:i.position().top,width:i.width(),height:i.height()};$(".badball").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};C(o,i)&&($("#p1Counter").html(function(t,e){return e-1}),$(e).remove(),l.pop(),g||m.play()),M(h,i)&&($("#p2Counter").html(function(t,e){return e-1}),$(e).remove(),r.pop(),g||m.play())}),$(".ball").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};B(o,i)&&($("#p1Counter").html(function(t,e){return+e+1}),$(e).remove(),l.push("ball"),g||p.play()),k(h,i)&&($("#p2Counter").html(function(t,e){return+e+1}),$(e).remove(),r.push("ball"),g||p.play())}),$(".bigBall").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};I(o,i)&&($("#p1Counter").html(function(t,e){return+e+2}),$(e).remove(),l.push("ball","ball2"),g||f.play()),T(h,i)&&($("#p2Counter").html(function(t,e){return+e+2}),$(e).remove(),r.push("ball","ball2"),g||f.play())}),$(".goldenball").each(function(t,e){var i={x:$(e).position().left,y:$(e).position().top,width:$(e).width(),height:$(e).height()};F(o,i)&&($("#p1Counter").html(function(t,e){return+e+10}),$(e).remove(),l.push("ball","ball2","ball3","ball4","ball5","ball6","ball7","ball8","ball9","ball10"),g||x.play()),P(h,i)&&($("#p2Counter").html(function(t,e){return+e+10}),$(e).remove(),r.push("ball","ball2","ball3","ball4","ball5","ball6","ball7","ball8","ball9","ball10"),g||x.play())}),e.css({left:function(e,i){return t(i,65,68)},top:function(e,i){return t(i,87,83)}}),i.css({left:function(t,e){return v(e,37,39)},top:function(t,e){return v(e,38,40)}})}),$(window).keyup(function(t){a[t.which]=!1});var D=w/1e3,S=document.getElementById("countDownTimer"),q=setInterval(O,1e3)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZ2FtZUJvYXJkIiwiYm94UDEiLCJib3hQMiIsIndpZHRoIiwiaGVpZ2h0IiwiZCIsIngiLCJwMXNjb3JlIiwicDJzY29yZSIsIm51bU9mR29vZERvdHMiLCJudW1PZkJhZERvdHMiLCJudW1PZkJpZ0RvdHMiLCJtdXRlIiwiYXVkaW8iLCJhdWRpb0JpZyIsImF1ZGlvRXJyb3IiLCJhdWRpb0dvbGQiLCJnb2xkZW50ZXJzIiwiaGVscCIsImhpZGUiLCJyYW5nZVNsaWRlciIsImVxIiwiZSIsImdhbWVUaW1lIiwidGFyZ2V0IiwidmFsIiwiY29uc29sZSIsInRleHQiLCJjbGljayIsImZhZGVJbiIsImZhZGVPdXQiLCJlYWNoIiwidGhpcyIsImRhdGEiLCJodG1sIiwib24iLCJ0b2dnbGVDbGFzcyIsIl8iLCJvcmciLCJhIiwibiIsImIiLCJwYXJzZUludCIsInYiLCJuZXdMb2NhdGlvblAyIiwicG9zeSIsImNvdW50IiwiJG5ld0dvbGREaXYiLCJwb3N4IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJ0b3AiLCJhcHBlbmRUbyIsImNsb25lIiwiZGVsYXkiLCJwbGF5IiwiaXNDb2xsaWRlUDEiLCJ5IiwiaXNCYWRDb2xsaWRlUDEiLCJzIiwiaXNDb2xsaWRlUDIiLCJjIiwiaXNCaWdDb2xsaWRlUDIiLCJpc0dvbGRDb2xsaWRlUDIiLCJ3aGljaCIsInBvc2l0aW9uIiwiYmlnIiwiYmFkYmFsbCIsImlzR29sZENvbGxpZGVQMSIsImdvbGQiLCJjaGVja1dpbm5lciIsImxlbmd0aCIsImNvdW50ZG93biIsImVsZW0iLCJpbm5lckhUTUwiLCJ0aW1lTGVmdCIsImNsZWFyVGltZW91dCIsInRpbWVySWQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImxvZyIsInJlbW92ZUF0dHIiLCJjc3MiLCIkbmV3ZGl2IiwiJG5ld0JpZ2RpdiIsIiRuZXdCYWRkaXYiLCJzZXRUaW1lb3V0IiwibWFrZUdvbGREaXYiLCJkaXZzaXplIiwid2luZG93IiwibGVmdCIsImluZGV4IiwiYmFsbCIsImkiLCJiaWdiYWxsIiwiaXNCYWRDb2xsaWRlUDIiLCJwdXNoIiwiZ29sZGVuYmFsbCIsIm5ld0xvY2F0aW9uUDEiLCJpc0JpZ0NvbGxpZGVQMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJrZXl1cCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBRSxXQUdBLEdBQU1DLEdBQVlELEVBQUUsY0FBZEMsRUFBQUEsRUFBWUQsVUFDWEUsRUFBVUYsRUFBQSxVQUNWRyxFQUFVRixFQUFqQkcsUUFBQUYsRUFBQUUsUUFDT0EsRUFBUUgsRUFBVUcsU0FBVUYsRUFBQUcsU0FDNUJBLEtBQ0FDLEVBQVAsR0FDT0MsS0FDREMsS0FDQUMsRUFBTixJQUNNQyxFQUFnQixJQUNoQkMsRUFBZSxHQUNmQyxFQUFOLEVBRUFDLEdBQUEsRUFDSUEsRUFBT2IsRUFBWCxTQUFBLEdBQ01jLEVBQVVkLEVBQUEsU0FBaEIsR0FDTWUsRUFBYWYsRUFBQSxTQUFuQixHQUNNZ0IsRUFBYWhCLEVBQUUsU0FBRixHQUNiaUIsRUFBY2pCLEVBQUEsU0FBcEIsR0FDTWtCLEVBQUFBLElBV0ZDLEdBQU8sQ0FBWG5CLEdBQUEsb0JBQUFvQixPQVJvQixXQUFwQnBCLEVBQU1xQixxQkFBY0MsR0FBZEQsR0FBQUEsR0FBQUEsU0FBd0IsU0FBQUUsR0FDMUJDLEVBQUF4QixFQUFBdUIsRUFBQUUsUUFBRkMsTUFDRUYsUUFBQUEsSUFBV3hCLG1CQUFYd0IsR0FDQUcsRUFBQUEsVUFBWUMsS0FBQSx1QkFBWkosRUFBQSxJQUFBLGlCQVVKeEIsRUFBQSxVQUFBNkIsTUFBQSxZQUNZQSxJQUFWVixHQUNBbkIsRUFBSW1CLG9CQUFlVyxPQUFBLE9BQUEsU0FDakI5QixHQUFFLElBQ0YsSUFBT21CLElBRlRuQixFQUFBLG9CQUdPK0IsUUFBa0IsT0FBQSxTQUN2Qi9CLEdBQUUsS0FLTkEsRUFBQSxVQUFBZ0MsS0FBQSxXQUNFaEMsRUFBQWlDLE1BQUZDLEtBQVlG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SUFBSVcsR0FBWXJELEVBQVcsSUFDckJtRCxFQUFPMkIsU0FBU0MsZUFBZSxrQkFDL0J4QixFQUFVMEIsWUFBWS9CLEVBQVciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG5cblxuICBjb25zdCBnYW1lQm9hcmQgPSAkKCcjZ2FtZUJvYXJkJyk7XG4gIGNvbnN0ICBib3hQMSA9ICQoJy5ib3hQMScpO1xuICBjb25zdCAgYm94UDIgPSAkKCcuYm94UDInKTtcbiAgY29uc3QgIHdpZHRoID0gZ2FtZUJvYXJkLndpZHRoKCkgLSBib3hQMS53aWR0aCgpO1xuICBjb25zdCAgaGVpZ2h0ID0gZ2FtZUJvYXJkLmhlaWdodCgpIC0gYm94UDIuaGVpZ2h0KCk7XG4gIGNvbnN0ICBkID0ge307XG4gIGNvbnN0ICB4ID0gMjAgO1xuICBjb25zdCBwMXNjb3JlID0gW107XG4gIGNvbnN0IHAyc2NvcmUgPSBbXTtcbiAgY29uc3QgbnVtT2ZHb29kRG90cyA9IDIwMDtcbiAgY29uc3QgbnVtT2ZCYWREb3RzID0gMjAwO1xuICBjb25zdCBudW1PZkJpZ0RvdHMgPSAzMDtcbiAgY29uc3QgbnVtT2ZHb2xkRG90cyA9IDI7XG4gIC8vIGNvbnN0IGdhbWVUaW1lID0gMzAwMDA7IC8vIGluIG1pbGlzZWNvbmRzXG4gIGxldCBtdXRlID0gZmFsc2U7XG4gIGNvbnN0IGF1ZGlvID0gJCgnYXVkaW8nKVswXTtcbiAgY29uc3QgYXVkaW9CaWcgPSAkKCdhdWRpbycpWzFdO1xuICBjb25zdCBhdWRpb0Vycm9yID0gJCgnYXVkaW8nKVsyXTtcbiAgY29uc3QgYXVkaW9Hb2xkID0gJCgnYXVkaW8nKVszXTtcbiAgY29uc3QgZ29sZGVudGVycyA9ICQoJ2F1ZGlvJylbNF07XG4gIGxldCBnYW1lVGltZSA9IDYwMDAwO1xuXG4gIGNvbnN0IHJhbmdlU2xpZGVyID0gZnVuY3Rpb24oKXtcbiAgICAkKCdpbnB1dFt0eXBlPXJhbmdlXScpLmVxKDApLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgZ2FtZVRpbWUgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdnYW1ldGltZSBpcyBub3cgJywgZ2FtZVRpbWUpO1xuICAgICAgJCgnLnZhbHVlJykudGV4dCgnWW91ciBnYW1lIHdpbGwgbGFzdCAnICsgKGdhbWVUaW1lIC8gMTAwMCkgKyAnIHNlY29uZHMnKTtcbiAgICB9KTtcbiAgfTtcblxuICBsZXQgaGVscCA9IGZhbHNlO1xuICAkKCcjcG9wdXBCYWNrZ3JvdW5kJykuaGlkZSgpO1xuXG4gIHJhbmdlU2xpZGVyKCk7XG5cbiAgLy9oZWxwXG4gICQoJy5pY29uMScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgaWYgKGhlbHAgPT09IGZhbHNlKXtcbiAgICAgICQoJyNwb3B1cEJhY2tncm91bmQnKS5mYWRlSW4oJ2Zhc3QnLCAnc3dpbmcnKTtcbiAgICAgIGhlbHAgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaGVscCA9PT0gdHJ1ZSl7XG4gICAgICAkKCcjcG9wdXBCYWNrZ3JvdW5kJykuZmFkZU91dCgnZmFzdCcsICdzd2luZycpO1xuICAgICAgaGVscCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gaW5zdHJ1Y3Rpb25zIGJ1dHRvbiB0b2dnbGVcbiAgJCgnLmljb24xJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsJywgJCh0aGlzKS5odG1sKCkpO1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbGlja2VkJykuaHRtbChmdW5jdGlvbihfLCBodG1sKSB7XG4gICAgICB2YXIgb3JnID0gJCh0aGlzKS5kYXRhKCdvcmlnaW5hbCcpO1xuICAgICAgcmV0dXJuIGh0bWwgPT09IG9yZyA/ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nIDogb3JnO1xuICAgIH0pO1xuICB9KTtcblxuICAvL011dGUgYnV0dG9uIHRvZ2dsZVxuICAkKCcjbXV0ZS1idXR0b24nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuZGF0YSgnb3JpZ2luYWwnLCAkKHRoaXMpLmh0bWwoKSk7XG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NsaWNrZWQnKS5odG1sKGZ1bmN0aW9uKF8sIGh0bWwpIHtcbiAgICAgIHZhciBvcmcgPSAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsJyk7XG4gICAgICByZXR1cm4gaHRtbCA9PT0gb3JnID8gJzxpIGNsYXNzPVwiZmEgZmEtdm9sdW1lLW9mZlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nIDogb3JnO1xuICAgIH0pO1xuICB9KTtcblxuXG4gIC8vU1RBUlRTIFdIT0xFIEdBTUUhISFcbiAgJCgnI3N0YXJ0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgY2xpY2tlZCcpO1xuICAgICQoICcjd2VsY29tZVBhZ2UnICkuaGlkZSgpO1xuICAgICQoJy5nYW1lU2NyZWVuJykucmVtb3ZlQXR0cignaWQnLCAnaGlkZGVuJyk7XG5cblxuXG5cbiAgICAkKCcjbXV0ZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtdXRlID0gIW11dGU7XG4gICAgfSk7XG5cbiAgICAvLyB2ID0gb3JnaW5pbmFsIHZhbHVlLlxuICAgIC8vIGEsYiA9IGRpcmVjdGlvblxuICAgIC8vIGQgaXMgb2JqZWN0IGhvbGRpbmcgdHJ1ZSBvciBmYXNlIGFib3V0IGtleSBwcmVzc1xuICAgIC8vIHBhcnNlSW50IHR1cm5zIHB4IGludG8gSW50IGlzaW5nIDEwIG9yIHNvbWV0aGluZyByYWRpeCBzdHVmZlxuICAgIC8vIG4gPSBjaGVjayBmb3IgdmFsaWQgbW92ZW1lbnRcbiAgICAvLyB4ID0gcGl4YWwganVtcFxuXG4gICAgZnVuY3Rpb24gbmV3TG9jYXRpb25QMSh2LGEsYikge1xuICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYsIDEwKSAtIChkW2FdID8geCA6IDApICsgKGRbYl0gPyB4IDogMCk7XG4gICAgICBpZiAoYSA9PT0gNjUpIHJldHVybiAgIG4gPCAwID8gMCA6IG4gPiB3aWR0aCA/IHdpZHRoIDogbjtcbiAgICAgIGlmIChhID09PSA4NykgcmV0dXJuIG4gPCAwID8gMCA6IG4gPiBoZWlnaHQgPyBoZWlnaHQgOiBuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBuZXdMb2NhdGlvblAyKHYsYSxiKSB7XG4gICAgICBjb25zdCBuID0gcGFyc2VJbnQodiwgMTApIC0gKGRbYV0gPyB4IDogMCkgKyAoZFtiXSA/IHggOiAwKTtcbiAgICAgIGlmIChhID09PSAzNykgcmV0dXJuIG4gPCAwID8gMCA6IG4gPiB3aWR0aCA/IHdpZHRoIDogbjtcbiAgICAgIGlmIChhID09PSAzOCkgcmV0dXJuIG4gPCAwID8gMCA6IG4gPiBoZWlnaHQgPyBoZWlnaHQgOiBuO1xuICAgIH1cblxuICAgIC8vIG1ha2VzIHJhbmRvbSBhbW91bnRzIG9mIGRpdiBvbiB0aGUgcGFnZVxuICAgIG1ha2VEaXYoKTtcbiAgICBmdW5jdGlvbiBtYWtlRGl2KCkge1xuICAgICAgdmFyICBjb3VudCA9IDE7XG4gICAgICB3aGlsZSAoY291bnQgPCBudW1PZkdvb2REb3RzKXtcbiAgICAgICAgY29uc3QgZGl2c2l6ZSA9IDIwO1xuICAgICAgICBjb25zdCBwb3N4ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLndpZHRoKCkgLSBkaXZzaXplKSkudG9GaXhlZCgpO1xuICAgICAgICB2YXIgcG9zeSA9IChNYXRoLnJhbmRvbSgpICogKCQoJyNnYW1lQm9hcmQnKS5oZWlnaHQoKSAtIGRpdnNpemUpKS50b0ZpeGVkKCk7XG4gICAgICAgIGNvbnN0ICRuZXdkaXYgPSAkKCc8ZGl2IGNsYXNzPVwiYmFsbFwiPC9kaXY+JykuY3NzKHtcbiAgICAgICAgICAnbGVmdCc6IHBvc3ggKyAncHgnLFxuICAgICAgICAgICd0b3AnOiBwb3N5ICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgICAgJG5ld2Rpdi5hcHBlbmRUbygnI2dhbWVCb2FyZCcpLmNsb25lKCkuZGVsYXkoMjAwMCkuZmFkZUluKDEwMCk7XG4gICAgICAgIGNvdW50ICsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vYWRkcyBpbiB0aGUgYmlnIGdyZWVuIGRvdHNcbiAgICBtYWtlQmlnRGl2KCk7XG4gICAgZnVuY3Rpb24gbWFrZUJpZ0RpdigpIHtcbiAgICAgIHZhciAgY291bnQgPSAxO1xuICAgICAgd2hpbGUgKGNvdW50IDwgbnVtT2ZCaWdEb3RzKXtcbiAgICAgICAgY29uc3QgZGl2c2l6ZSA9IDIwO1xuICAgICAgICBjb25zdCBwb3N4ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLndpZHRoKCkgLSBkaXZzaXplKSkudG9GaXhlZCgpO1xuICAgICAgICB2YXIgcG9zeSA9IChNYXRoLnJhbmRvbSgpICogKCQoJyNnYW1lQm9hcmQnKS5oZWlnaHQoKSAtIGRpdnNpemUpKS50b0ZpeGVkKCk7XG4gICAgICAgIGNvbnN0ICRuZXdCaWdkaXYgPSAkKCc8ZGl2IGNsYXNzPVwiYmlnQmFsbFwiPjwvZGl2PicpLmNzcyh7XG4gICAgICAgICAgJ2xlZnQnOiBwb3N4ICsgJ3B4JyxcbiAgICAgICAgICAndG9wJzogcG9zeSArICdweCdcbiAgICAgICAgfSk7XG4gICAgICAgICRuZXdCaWdkaXYuYXBwZW5kVG8oJyNnYW1lQm9hcmQnKS5jbG9uZSgpLmRlbGF5KDIwMDApLmZhZGVJbigxMDApO1xuICAgICAgICBjb3VudCArKztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkcyBpbiB0aGUgYmFkIHJlZCBkb3R0c1xuICAgIG1ha2VCYWREaXYoKTtcbiAgICBmdW5jdGlvbiBtYWtlQmFkRGl2KCkge1xuICAgICAgdmFyICBjb3VudCA9IDE7XG4gICAgICB3aGlsZSAoY291bnQgPCBudW1PZkJhZERvdHMpe1xuICAgICAgICBjb25zdCBkaXZzaXplID0gMjA7XG4gICAgICAgIGNvbnN0IHBvc3ggPSAoTWF0aC5yYW5kb20oKSAqICgkKCcjZ2FtZUJvYXJkJykud2lkdGgoKSAtIGRpdnNpemUpKS50b0ZpeGVkKCk7XG4gICAgICAgIHZhciBwb3N5ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnI2dhbWVCb2FyZCcpLmhlaWdodCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgICAgY29uc3QgJG5ld0JhZGRpdiA9ICQoJzxkaXYgY2xhc3M9XCJiYWRiYWxsXCI+PC9kaXY+JykuY3NzKHtcbiAgICAgICAgICAnbGVmdCc6IHBvc3ggKyAncHgnLFxuICAgICAgICAgICd0b3AnOiBwb3N5ICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgICAgJG5ld0JhZGRpdi5hcHBlbmRUbygnI2dhbWVCb2FyZCcpLmNsb25lKCkuZGVsYXkoMjAwMCkuZmFkZUluKDEwMCk7XG4gICAgICAgIGNvdW50ICsrO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBtYWtlR29sZERpdigpO1xuXG4gICAgfSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdhbWVUaW1lIC0gMTAwMDApKSk7XG5cbiAgICBmdW5jdGlvbiBtYWtlR29sZERpdigpIHtcbiAgICAgIHZhciAgY291bnQgPSAxO1xuICAgICAgd2hpbGUgKGNvdW50IDwgbnVtT2ZHb2xkRG90cyl7XG4gICAgICAgIGNvbnN0IGRpdnNpemUgPSAyMDtcbiAgICAgICAgY29uc3QgcG9zeCA9IChNYXRoLnJhbmRvbSgpICogKCQoJyNnYW1lQm9hcmQnKS53aWR0aCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgICAgdmFyIHBvc3kgPSAoTWF0aC5yYW5kb20oKSAqICgkKCcjZ2FtZUJvYXJkJykuaGVpZ2h0KCkgLSBkaXZzaXplKSkudG9GaXhlZCgpO1xuICAgICAgICBjb25zdCAkbmV3R29sZERpdiA9ICQoJzxkaXYgY2xhc3M9XCJnb2xkZW5iYWxsXCI+PC9kaXY+JykuY3NzKHtcbiAgICAgICAgICAnbGVmdCc6IHBvc3ggKyAncHgnLFxuICAgICAgICAgICd0b3AnOiBwb3N5ICsgJ3B4J1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICRuZXdHb2xkRGl2LmFwcGVuZFRvKCcjZ2FtZUJvYXJkJykuY2xvbmUoKS5kZWxheSgyMDAwKS5mYWRlSW4oMTAwKTtcbiAgICAgICAgY291bnQgKys7XG4gICAgICAgIGlmKCFtdXRlKWdvbGRlbnRlcnMucGxheSgpO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29sbGlkZSBmdW5jdGlvbiB0byBjaGVjayBmb3IgY29sbGlzaW9uXG5cbiAgICAvLyBjaGVjayBmb3IgcDEgKyBibHVlIGRvdHNcbiAgICBmdW5jdGlvbiBpc0NvbGxpZGVQMShhLCBiKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgKChhLnkgKyBhLmhlaWdodCkgPCAoYi55KSkgfHxcbiAgICAgICAgKGEueSA+IChiLnkgKyBiLmhlaWdodCkpIHx8XG4gICAgICAgICgoYS54ICsgYS53aWR0aCkgPCBiLngpIHx8XG4gICAgICAgIChhLnggPiAoYi54ICsgYi53aWR0aCkpXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgcDIgKyBibHVlIGRvdHNcbiAgICBmdW5jdGlvbiBpc0NvbGxpZGVQMihjLCBiKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAoYi55KSkgfHxcbiAgICAgICAgKGMueSA+IChiLnkgKyBiLmhlaWdodCkpIHx8XG4gICAgICAgICgoYy54ICsgYy53aWR0aCkgPCBiLngpIHx8XG4gICAgICAgIChjLnggPiAoYi54ICsgYi53aWR0aCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBwMSArIHJlZCBkb3RzXG4gICAgZnVuY3Rpb24gaXNCYWRDb2xsaWRlUDEoYSwgcykge1xuICAgICAgcmV0dXJuICEoXG4gICAgICAgICgoYS55ICsgYS5oZWlnaHQpIDwgKHMueSkpIHx8XG4gICAgICAgIChhLnkgPiAocy55ICsgcy5oZWlnaHQpKSB8fFxuICAgICAgICAoKGEueCArIGEud2lkdGgpIDwgcy54KSB8fFxuICAgICAgICAoYS54ID4gKHMueCArIHMud2lkdGgpKVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gY2hlY2sgZm9yIHAyICsgcmVkIGRvdHNcbiAgICBmdW5jdGlvbiBpc0JhZENvbGxpZGVQMihjLCBzKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAocy55KSkgfHxcbiAgICAgICAgKGMueSA+IChzLnkgKyBzLmhlaWdodCkpIHx8XG4gICAgICAgICgoYy54ICsgYy53aWR0aCkgPCBzLngpIHx8XG4gICAgICAgIChjLnggPiAocy54ICsgcy53aWR0aCkpXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgcDEgKyBncmVlbiBkb3RzXG4gICAgZnVuY3Rpb24gaXNCaWdDb2xsaWRlUDEoYSwgYmlnKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgKChhLnkgKyBhLmhlaWdodCkgPCAoYmlnLnkpKSB8fFxuICAgICAgICAoYS55ID4gKGJpZy55ICsgYmlnLmhlaWdodCkpIHx8XG4gICAgICAgICgoYS54ICsgYS53aWR0aCkgPCBiaWcueCkgfHxcbiAgICAgICAgKGEueCA+IChiaWcueCArIGJpZy53aWR0aCkpXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgcDIgKyBncmVlbiBkb3RzXG4gICAgZnVuY3Rpb24gaXNCaWdDb2xsaWRlUDIoYywgYmlnKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAoYmlnLnkpKSB8fFxuICAgICAgICAoYy55ID4gKGJpZy55ICsgYmlnLmhlaWdodCkpIHx8XG4gICAgICAgICgoYy54ICsgYy53aWR0aCkgPCBiaWcueCkgfHxcbiAgICAgICAgKGMueCA+IChiaWcueCArIGJpZy53aWR0aCkpXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgcDEgKyBncmVlbiBkb3RzXG4gICAgZnVuY3Rpb24gaXNHb2xkQ29sbGlkZVAxKGEsIGdvbGQpIHtcbiAgICAgIHJldHVybiAhKFxuICAgICAgICAoKGEueSArIGEuaGVpZ2h0KSA8IChnb2xkLnkpKSB8fFxuICAgICAgICAoYS55ID4gKGdvbGQueSArIGdvbGQuaGVpZ2h0KSkgfHxcbiAgICAgICAgKChhLnggKyBhLndpZHRoKSA8IGdvbGQueCkgfHxcbiAgICAgICAgKGEueCA+IChnb2xkLnggKyBnb2xkLndpZHRoKSlcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIGNoZWNrIGZvciBwMiArIEdPTEQgZG90c1xuICAgIGZ1bmN0aW9uIGlzR29sZENvbGxpZGVQMihjLCBnb2xkKSB7XG4gICAgICByZXR1cm4gIShcbiAgICAgICAgKChjLnkgKyBjLmhlaWdodCkgPCAoZ29sZC55KSkgfHxcbiAgICAgICAgKGMueSA+IChnb2xkLnkgKyBnb2xkLmhlaWdodCkpIHx8XG4gICAgICAgICgoYy54ICsgYy53aWR0aCkgPCBnb2xkLngpIHx8XG4gICAgICAgIChjLnggPiAoZ29sZC54ICsgZ29sZC53aWR0aCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vbW92ZW1lbnQgdXNpbmcga2V5c1xuICAgICQod2luZG93KS5rZXlkb3duKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRbZS53aGljaF0gPSB0cnVlO1xuXG4gICAgICBjb25zdCBhID0ge1xuICAgICAgICB4OiBib3hQMS5wb3NpdGlvbigpLmxlZnQsXG4gICAgICAgIHk6IGJveFAxLnBvc2l0aW9uKCkudG9wLFxuICAgICAgICB3aWR0aDogYm94UDEud2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiBib3hQMS5oZWlnaHQoKVxuICAgICAgfTtcblxuICAgICAgY29uc3QgYyA9IHtcbiAgICAgICAgeDogYm94UDIucG9zaXRpb24oKS5sZWZ0LFxuICAgICAgICB5OiBib3hQMi5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgd2lkdGg6IGJveFAyLndpZHRoKCksXG4gICAgICAgIGhlaWdodDogYm94UDIuaGVpZ2h0KClcbiAgICAgIH07XG5cblxuICAgICAgLy9DaGVjayBmb3IgYmFkIGJhbGwgY29ubmVjdFxuICAgICAgJCgnLmJhZGJhbGwnKS5lYWNoKChpbmRleCwgYmFkYmFsbCkgPT4ge1xuICAgICAgICBjb25zdCBzID0ge1xuICAgICAgICAgIHg6ICQoYmFkYmFsbCkucG9zaXRpb24oKS5sZWZ0LFxuICAgICAgICAgIHk6ICQoYmFkYmFsbCkucG9zaXRpb24oKS50b3AsXG4gICAgICAgICAgd2lkdGg6ICQoYmFkYmFsbCkud2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQ6ICQoYmFkYmFsbCkuaGVpZ2h0KClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNCYWRDb2xsaWRlUDEoYSwgcykpIHtcbiAgICAgICAgICAkKCcjcDFDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKGJhZGJhbGwpLnJlbW92ZSgpO1xuICAgICAgICAgIHAxc2NvcmUucG9wKCk7XG4gICAgICAgICAgaWYoIW11dGUpYXVkaW9FcnJvci5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNCYWRDb2xsaWRlUDIoYywgcykpIHtcbiAgICAgICAgICAkKCcjcDJDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKGJhZGJhbGwpLnJlbW92ZSgpO1xuICAgICAgICAgIHAyc2NvcmUucG9wKCk7XG4gICAgICAgICAgaWYoIW11dGUpYXVkaW9FcnJvci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL0NoZWNrIGZvciBiYWxsIGNvbm5lY3RcbiAgICAgICQoJy5iYWxsJykuZWFjaCgoaW5kZXgsIGJhbGwpID0+IHtcbiAgICAgICAgY29uc3QgYiA9IHtcbiAgICAgICAgICB4OiAkKGJhbGwpLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgICAgICB5OiAkKGJhbGwpLnBvc2l0aW9uKCkudG9wLFxuICAgICAgICAgIHdpZHRoOiAkKGJhbGwpLndpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0OiAkKGJhbGwpLmhlaWdodCgpXG4gICAgICAgIH07XG5cblxuXG4gICAgICAgIGlmIChpc0NvbGxpZGVQMShhLCBiKSkge1xuICAgICAgICAgICQoJyNwMUNvdW50ZXInKS5odG1sKGZ1bmN0aW9uKGksIHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICt2YWwrMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKGJhbGwpLnJlbW92ZSgpO1xuICAgICAgICAgIHAxc2NvcmUucHVzaCgnYmFsbCcpO1xuICAgICAgICAgIGlmKCFtdXRlKWF1ZGlvLnBsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29sbGlkZVAyKGMsIGIpKSB7XG4gICAgICAgICAgJCgnI3AyQ291bnRlcicpLmh0bWwoZnVuY3Rpb24oaSwgdmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gK3ZhbCsxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoYmFsbCkucmVtb3ZlKCk7XG4gICAgICAgICAgcDJzY29yZS5wdXNoKCdiYWxsJyk7XG4gICAgICAgICAgaWYoIW11dGUpYXVkaW8ucGxheSgpO1xuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vQ2hlY2sgZm9yIGJpZyBiYWxsIGNvbm5lY3RcbiAgICAgICQoJy5iaWdCYWxsJykuZWFjaCgoaW5kZXgsIGJpZ2JhbGwpID0+IHtcbiAgICAgICAgY29uc3QgYmlnID0ge1xuICAgICAgICAgIHg6ICQoYmlnYmFsbCkucG9zaXRpb24oKS5sZWZ0LFxuICAgICAgICAgIHk6ICQoYmlnYmFsbCkucG9zaXRpb24oKS50b3AsXG4gICAgICAgICAgd2lkdGg6ICQoYmlnYmFsbCkud2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQ6ICQoYmlnYmFsbCkuaGVpZ2h0KClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNCaWdDb2xsaWRlUDEoYSwgYmlnKSkge1xuICAgICAgICAgICQoJyNwMUNvdW50ZXInKS5odG1sKGZ1bmN0aW9uKGksIHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICt2YWwrMjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKGJpZ2JhbGwpLnJlbW92ZSgpO1xuICAgICAgICAgIHAxc2NvcmUucHVzaCgnYmFsbCcsICdiYWxsMicpO1xuICAgICAgICAgIGlmKCFtdXRlKWF1ZGlvQmlnLnBsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQmlnQ29sbGlkZVAyKGMsIGJpZykpIHtcbiAgICAgICAgICAkKCcjcDJDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiArdmFsKzI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJChiaWdiYWxsKS5yZW1vdmUoKTtcbiAgICAgICAgICBwMnNjb3JlLnB1c2goJ2JhbGwnLCAnYmFsbDInKTtcbiAgICAgICAgICBpZighbXV0ZSlhdWRpb0JpZy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vQ2hlY2sgZm9yIEdPTEQgYmFsbCBjb25uZWN0XG4gICAgICAkKCcuZ29sZGVuYmFsbCcpLmVhY2goKGluZGV4LCBnb2xkZW5iYWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGdvbGQgPSB7XG4gICAgICAgICAgeDogJChnb2xkZW5iYWxsKS5wb3NpdGlvbigpLmxlZnQsXG4gICAgICAgICAgeTogJChnb2xkZW5iYWxsKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgICB3aWR0aDogJChnb2xkZW5iYWxsKS53aWR0aCgpLFxuICAgICAgICAgIGhlaWdodDogJChnb2xkZW5iYWxsKS5oZWlnaHQoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpc0dvbGRDb2xsaWRlUDEoYSwgZ29sZCkpIHtcbiAgICAgICAgICAkKCcjcDFDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiArdmFsKzEwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoZ29sZGVuYmFsbCkucmVtb3ZlKCk7XG4gICAgICAgICAgcDFzY29yZS5wdXNoKCdiYWxsJywgJ2JhbGwyJywgJ2JhbGwzJywgJ2JhbGw0JywgJ2JhbGw1JywgJ2JhbGw2JywgJ2JhbGw3JywgJ2JhbGw4JywgJ2JhbGw5JywgJ2JhbGwxMCcpO1xuICAgICAgICAgIGlmKCFtdXRlKWF1ZGlvR29sZC5wbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0dvbGRDb2xsaWRlUDIoYywgZ29sZCkpIHtcbiAgICAgICAgICAkKCcjcDJDb3VudGVyJykuaHRtbChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiArdmFsKzEwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoZ29sZGVuYmFsbCkucmVtb3ZlKCk7XG4gICAgICAgICAgcDJzY29yZS5wdXNoKCdiYWxsJywgJ2JhbGwyJywgJ2JhbGwzJywgJ2JhbGw0JywgJ2JhbGw1JywgJ2JhbGw2JywgJ2JhbGw3JywgJ2JhbGw4JywgJ2JhbGw5JywgJ2JhbGwxMCcpO1xuICAgICAgICAgIGlmKCFtdXRlKWF1ZGlvR29sZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cblxuICAgICAgLy8gYm94IG1vdmVtZW50IGNvbnRyb2xsc1xuICAgICAgYm94UDEuY3NzKHtcbiAgICAgICAgbGVmdDogZnVuY3Rpb24oaSx2KSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0xvY2F0aW9uUDEodiwgNjUsIDY4KTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9wOiBmdW5jdGlvbihpLHYpIHtcbiAgICAgICAgICByZXR1cm4gbmV3TG9jYXRpb25QMSh2LCA4NywgODMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJveFAyLmNzcyh7XG4gICAgICAgIGxlZnQ6IGZ1bmN0aW9uKGksdikge1xuICAgICAgICAgIHJldHVybiBuZXdMb2NhdGlvblAyKHYsIDM3LCAzOSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvcDogZnVuY3Rpb24oaSx2KSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0xvY2F0aW9uUDIodiwgMzgsIDQwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG4gICAgJCh3aW5kb3cpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRbZS53aGljaF0gPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vY2hlY2tpbmcgZm9yIHdpbm5uZXIgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgICAgIGlmIChwMXNjb3JlLmxlbmd0aCA+IHAyc2NvcmUubGVuZ3RoKXtcbiAgICAgICAgJCgnLnNob3dXaW5uZXInKS50ZXh0KCdQbGF5ZXIgT25lIFdpbnMnKTtcbiAgICAgIH0gZWxzZSBpZiAocDFzY29yZS5sZW5ndGggPCBwMnNjb3JlLmxlbmd0aCkge1xuICAgICAgICAkKCcuc2hvd1dpbm5lcicpLnRleHQoJ1BsYXllciBUd28gV2lucycpO1xuICAgICAgfSBlbHNlICQoJy5zaG93V2lubmVyJykudGV4dCgnSXRcXCdzIGEgZHJhdycpO1xuICAgIH1cblxuXG4gICAgbGV0IHRpbWVMZWZ0ID0gKGdhbWVUaW1lIC8gMTAwMCk7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudERvd25UaW1lcicpO1xuICAgIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbChjb3VudGRvd24sIDEwMDApO1xuICAgIGZ1bmN0aW9uIGNvdW50ZG93bigpIHtcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gdGltZUxlZnQgKyAnIHNlY29uZHMgcmVtYWluaW5nJztcbiAgICAgIHRpbWVMZWZ0LS07XG4gICAgICBpZiAodGltZUxlZnQgPT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICAkKCcuZ2FtZVNjcmVlbicpLnJlbW92ZSgpO1xuICAgICAgICAkKCcjZ2FtZU92ZXJEaXYnKS5yZW1vdmVDbGFzcygnbm9zaG93Jyk7XG4gICAgICAgIGNoZWNrV2lubmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG5cbn0pO1xuIl19
