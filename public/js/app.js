"use strict";$(function(){function t(t,o,i){var n=parseInt(t,10)-(a[o]?c:0)+(a[i]?c:0);return 65===o?n<0?0:n>r?r:n:87===o?n<0?0:n>d?d:n:void 0}function o(t,o,i){var n=parseInt(t,10)-(a[o]?c:0)+(a[i]?c:0);return 37===o?n<0?0:n>r?r:n:38===o?n<0?0:n>d?d:n:void 0}console.log("helllloooo");var i=$("#gameBoard"),n=$(".boxP1","box2"),e=$(".boxP1"),h=$(".boxP2"),r=i.width()-n.width(),d=i.height()-n.height(),a={},c=10,u=$(".ball");!function(){for(var t=1;t<20;){var o=(Math.floor(501*Math.random()),(Math.random()*($("body").width()-100)).toFixed()),i=(Math.random()*($("body").height()-100)).toFixed();$('<div class="ball "></div>').css({left:o+"px",top:i+"px"}).appendTo("#gameBoard").clone().delay(2e3).fadeIn(100),t++}}(),$(window).keydown(function(i){a[i.which]=!0;var n={x:h.position().left,y:e.position().top,width:e.width(),height:e.height()};u.each(function(t,o){var i={x:$(o).position().left,y:$(o).position().top,width:$(o).width(),height:$(o).height()};(function(t,o){return!(t.y+t.height<o.y||t.y>o.y+o.height||t.x+t.width<o.x||t.x>o.x+o.width)})(n,i)&&$(o).remove()}),e.css({left:function(o,i){return t(i,65,68)},top:function(o,i){return t(i,87,83)}}),h.css({left:function(t,i){return o(i,37,39)},top:function(t,i){return o(i,38,40)}})}),$(window).keyup(function(t){a[t.which]=!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwibmV3TG9jYXRpb25QMSIsInYiLCJhIiwiYiIsIm4iLCJwYXJzZUludCIsIngiLCJ3aWR0aCIsImhlaWdodCIsIm5ld0xvY2F0aW9uUDIiLCJjb25zb2xlIiwibG9nIiwiYm94IiwiZ2FtZUJvYXJkIiwiYm94UDEiLCJib3hQMiIsImQiLCJjb3VudCIsInBvc3giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b0ZpeGVkIiwicG9zeSIsImNzcyIsImxlZnQiLCJ0b3AiLCJhcHBlbmRUbyIsImNsb25lIiwiZGVsYXkiLCJmYWRlSW4iLCJ3aW5kb3ciLCJrZXlkb3duIiwiZSIsIndoaWNoIiwicG9zaXRpb24iLCJ5IiwiJGJhbGxzIiwiZWFjaCIsImluZGV4IiwiYmFsbCIsImlzQ29sbGlkZSIsInJlbW92ZSIsImkiLCJrZXl1cCJdLCJtYXBwaW5ncyI6IllBQUFBLEdBQUUsV0FxQkEsUUFBU0MsR0FBY0MsRUFBdkJDLEVBQUFDLEdBQ0UsR0FBTUMsR0FBSUMsU0FBQUosRUFBQSxLQUFxQkMsRUFBRkEsR0FBQUksRUFBbkIsSUFBc0NILEVBQUZBLEdBQUFHLEVBQTlDLEVBQ0EsT0FBVSxNQUFOSixFQUFtQkUsRUFBQSxFQUFBLEVBQVlBLEVBQUlHLEVBQVFBLEVBQWpDSCxFQUNKLEtBQU5GLEVBQWlCRSxFQUFJLEVBQUksRUFBSUEsRUFBSUksRUFBU0EsRUFBU0osTUFBdkQsR0FFRixRQUFTSyxHQUFjUixFQUF2QkMsRUFBQUMsR0FDRSxHQUFNQyxHQUFJQyxTQUFBSixFQUFBLEtBQXFCQyxFQUFGQSxHQUFBSSxFQUFuQixJQUFzQ0gsRUFBRkEsR0FBQUcsRUFBOUMsRUFDQSxPQUFVLE1BQU5KLEVBQWlCRSxFQUFJLEVBQUksRUFBSUEsRUFBSUcsRUFBUUEsRUFBUUgsRUFDM0MsS0FBTkYsRUFBaUJFLEVBQUksRUFBSSxFQUFJQSxFQUFJSSxFQUFTQSxFQUFTSixNQUF2RCxHQTVCRk0sUUFBUUMsSUFBSSxhQUFaRCxJQUFBQSxHQUFZWCxFQUFBLGNBR0xhLEVBQU1iLEVBQUUsU0FBVSxRQURuQmMsRUFBQUEsRUFBWWQsVUFDWGEsRUFBUWIsRUFBQSxVQUNSZSxFQUFVRCxFQUFqQk4sUUFBQUssRUFBQUwsUUFDT1EsRUFBVUYsRUFBakJMLFNBQUFJLEVBQUFKLFNBQ09ELEtBQ0RDLEVBQUFBLEdBQ0NRLEVBQVBqQixFQUFBLFVBMEJBLFdBR0UsSUFGQSxHQUFLa0IsR0FBTCxFQUVPQSxFQUFRLElBQWYsQ0FDRSxHQUVNQyxJQUZVQyxLQUFLQyxNQUFzQixJQUFoQkQsS0FBS0UsV0FFbEJGLEtBQUtFLFVBQWN0QixFQUFBLFFBQVFRLFFBRHpCLE1BQzZDZSxXQUN6REMsR0FBUUosS0FBS0UsVUFBWXRCLEVBQUUsUUFBUVMsU0FGdkIsTUFFNENjLFNBQzFDdkIsR0FBQSw2QkFBa0N5QixLQUNsREMsS0FBUVAsRUFBTyxLQUNmUSxJQUFPSCxFQUFPLE9BRVJJLFNBQVMsY0FBY0MsUUFBUUMsTUFBTSxLQUFNQyxPQUFPLEtBQzFEYixRQU1KbEIsRUFBRWdDLFFBQVFDLFFBQVEsU0FBQUMsR0FDaEJqQixFQUFFaUIsRUFBRUMsUUFBUyxDQUViLElBQU1oQyxJQUNKSSxFQUFHUyxFQUFNb0IsV0FBV1YsS0FDcEJXLEVBQUd0QixFQUFNcUIsV0FBV1QsSUFDcEJuQixNQUFPTyxFQUFNUCxRQUNiQyxPQUFRTSxFQUFNTixTQUdoQjZCLEdBQU9DLEtBQUssU0FBQUMsRUFBQUMsR0FDVixHQUFNckMsSUFDSkcsRUFBR1AsRUFBRXlDLEdBQU1MLFdBQVdWLEtBQ3RCVyxFQUFHckMsRUFBRXlDLEdBQU1MLFdBQVdULElBQ3RCbkIsTUFBT1IsRUFBRXlDLEdBQU1qQyxRQUNmQyxPQUFRVCxFQUFFeUMsR0FBTWhDLFdBR2xCLFNBQW1CTixFQUFHQyxHQUNwQixRQU1ERCxFQUFBa0MsRUFBQWxDLEVBQUFNLE9BQUFMLEVBQUFpQyxHQUpJbEMsRUFBRWtDLEVBQUtqQyxFQUFFaUMsRUFBSWpDLEVBQUVLLFFBTWhCaUMsRUFBQUEsRUFBQUEsRUFBVXZDLE1BQU9DLEVBQUFHLEdBQ2pCa0MsRUFBQUEsRUFBTUUsRUFBQUEsRUFBUnZDLEVBQUFJLFNBSUpMLEVBQUFDLElBQ0FXLEVBQU1VLEdBQUlrQixXQUVhNUIsRUFBQVUsS0FBa0NDLEtBQUEsU0FBQWtCLEVBQUExQyxHQUFBLE1BQUFELEdBQUFDLEVBQUEsR0FBQSxLQUZ6RHlCLElBQUEsU0FBQWlCLEVBQUExQyxHQUFBLE1BQUFELEdBQUFDLEVBQUEsR0FBQSxPQUtFd0IsRUFBQUEsS0FBc0JBLEtBQUEsU0FBT2hCLEVBQUFBLEdBQUFBLE1BQUFBLEdBQVBSLEVBQUEsR0FBQSxLQUFrQ3lCLElBRGhELFNBQUFpQixFQUFBMUMsR0FBQSxNQUFBUSxHQUFBUixFQUFBLEdBQUEsU0FFK0NGLEVBQUFnQyxRQUFBYSxNQUFBLFNBQUFYLEdBRi9DakIsRUFBVmlCLEVBQUFDLFFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbGxvb29vJyk7XG5cbiAgY29uc3QgZ2FtZUJvYXJkID0gJCgnI2dhbWVCb2FyZCcpO1xuICBjb25zdCAgYm94ID0gJCgnLmJveFAxJywgJ2JveDInKTtcbiAgY29uc3QgIGJveFAxID0gJCgnLmJveFAxJyk7XG4gIGNvbnN0ICBib3hQMiA9ICQoJy5ib3hQMicpO1xuICBjb25zdCAgd2lkdGggPSBnYW1lQm9hcmQud2lkdGgoKSAtIGJveC53aWR0aCgpO1xuICBjb25zdCBoZWlnaHQgPSBnYW1lQm9hcmQuaGVpZ2h0KCkgLSBib3guaGVpZ2h0KCk7XG4gIGNvbnN0ICBkID0ge307XG4gIGNvbnN0ICB4ID0gMTA7XG4gIGNvbnN0ICRiYWxscyA9ICQoJy5iYWxsJyk7XG5cblxuXG4gIC8vIHYgPSBvcmdpbmluYWwgdmFsdWUuXG4gIC8vIGEsYiA9IGRpcmVjdGlvblxuICAvLyBkIGlzIG9iamVjdCBob2xkaW5nIHRydWUgb3IgZmFzZSBhYm91dCBrZXkgcHJlc3NcbiAgLy8gcGFyc2VJbnQgdHVybnMgcHggaW50byBJbnQgaXNpbmcgMTAgb3Igc29tZXRoaW5nIHJhZGl4IHN0dWZmXG4gIC8vIG4gPSBjaGVjayBmb3IgdmFsaWQgbW92ZW1lbnRcbiAgLy8geCA9IHBpeGFsIGp1bXBcbiAgZnVuY3Rpb24gbmV3TG9jYXRpb25QMSh2LGEsYikge1xuICAgIGNvbnN0IG4gPSBwYXJzZUludCh2LCAxMCkgLSAoZFthXSA/IHggOiAwKSArIChkW2JdID8geCA6IDApO1xuICAgIGlmIChhID09PSA2NSkgcmV0dXJuICAgbiA8IDAgPyAwIDogbiA+IHdpZHRoID8gd2lkdGggOiBuO1xuICAgIGlmIChhID09PSA4NykgcmV0dXJuIG4gPCAwID8gMCA6IG4gPiBoZWlnaHQgPyBoZWlnaHQgOiBuO1xuICB9XG4gIGZ1bmN0aW9uIG5ld0xvY2F0aW9uUDIodixhLGIpIHtcbiAgICBjb25zdCBuID0gcGFyc2VJbnQodiwgMTApIC0gKGRbYV0gPyB4IDogMCkgKyAoZFtiXSA/IHggOiAwKTtcbiAgICBpZiAoYSA9PT0gMzcpIHJldHVybiBuIDwgMCA/IDAgOiBuID4gd2lkdGggPyB3aWR0aCA6IG47XG4gICAgaWYgKGEgPT09IDM4KSByZXR1cm4gbiA8IDAgPyAwIDogbiA+IGhlaWdodCA/IGhlaWdodCA6IG47XG4gIH1cblxuLy8gbWFrZSBkaXYgd29ya3MgYnV0IGNhbm5vdCBhY3Nlc3MgZGl2cyB3aGVuIG1hZGUgdG8gXCJlYXRcIiB0aGVtXG4gIG1ha2VEaXYoKTtcblxuICBmdW5jdGlvbiBtYWtlRGl2KCkge1xuICAgIHZhciAgY291bnQgPSAxO1xuXG4gICAgd2hpbGUgKGNvdW50IDwgMjApe1xuICAgICAgY29uc3QgbnVtUmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMSk7XG4gICAgICBjb25zdCBkaXZzaXplID0gMTAwO1xuICAgICAgY29uc3QgcG9zeCA9IChNYXRoLnJhbmRvbSgpICogKCQoJ2JvZHknKS53aWR0aCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIHZhciBwb3N5ID0gKE1hdGgucmFuZG9tKCkgKiAoJCgnYm9keScpLmhlaWdodCgpIC0gZGl2c2l6ZSkpLnRvRml4ZWQoKTtcbiAgICAgIGNvbnN0ICRuZXdkaXYgPSAkKCc8ZGl2IGNsYXNzPVwiYmFsbCAnICsgJ1wiPjwvZGl2PicpLmNzcyh7XG4gICAgICAgICdsZWZ0JzogcG9zeCArICdweCcsXG4gICAgICAgICd0b3AnOiBwb3N5ICsgJ3B4J1xuICAgICAgfSk7XG4gICAgICAkbmV3ZGl2LmFwcGVuZFRvKCcjZ2FtZUJvYXJkJykuY2xvbmUoKS5kZWxheSgyMDAwKS5mYWRlSW4oMTAwKTtcbiAgICAgIGNvdW50ICsrO1xuICAgIH1cbiAgfVxuXG4vLyBib3RoIGJveGVzIG1vdmUgYnV0IGJveCAyIHdvbnQgZWF0IGFueXRoaW5nIGFuZCBib3gxIG5vdyBlYXRzIGV2ZXJ5dGhpbmcgb24gWCBheHNpc1xuICAvL21vdmVtZW50IHVzaW5nIGtleXNcbiAgJCh3aW5kb3cpLmtleWRvd24oZnVuY3Rpb24oZSkge1xuICAgIGRbZS53aGljaF0gPSB0cnVlO1xuXG4gICAgY29uc3QgYSA9IHtcbiAgICAgIHg6IGJveFAyLnBvc2l0aW9uKCkubGVmdCxcbiAgICAgIHk6IGJveFAxLnBvc2l0aW9uKCkudG9wLFxuICAgICAgd2lkdGg6IGJveFAxLndpZHRoKCksXG4gICAgICBoZWlnaHQ6IGJveFAxLmhlaWdodCgpXG4gICAgfTtcblxuICAgICRiYWxscy5lYWNoKChpbmRleCwgYmFsbCkgPT4ge1xuICAgICAgY29uc3QgYiA9IHtcbiAgICAgICAgeDogJChiYWxsKS5wb3NpdGlvbigpLmxlZnQsXG4gICAgICAgIHk6ICQoYmFsbCkucG9zaXRpb24oKS50b3AsXG4gICAgICAgIHdpZHRoOiAkKGJhbGwpLndpZHRoKCksXG4gICAgICAgIGhlaWdodDogJChiYWxsKS5oZWlnaHQoKVxuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gaXNDb2xsaWRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuICEoXG4gICAgICAgICAgKChhLnkgKyBhLmhlaWdodCkgPCAoYi55KSkgfHxcbiAgICAgICAgICAoYS55ID4gKGIueSArIGIuaGVpZ2h0KSkgfHxcbiAgICAgICAgICAoKGEueCArIGEud2lkdGgpIDwgYi54KSB8fFxuICAgICAgICAgIChhLnggPiAoYi54ICsgYi53aWR0aCkpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NvbGxpZGUoYSwgYikpIHtcbiAgICAgICAgJChiYWxsKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGJveCBtb3ZlbWVudCBjb250cm9sbHNcbiAgICBib3hQMS5jc3Moe1xuICAgICAgbGVmdDogZnVuY3Rpb24oaSx2KSB7IHJldHVybiBuZXdMb2NhdGlvblAxKHYsIDY1LCA2OCk7IH0sXG4gICAgICB0b3A6IGZ1bmN0aW9uKGksdikgeyByZXR1cm4gbmV3TG9jYXRpb25QMSh2LCA4NywgODMpOyB9XG4gICAgfSk7XG4gICAgYm94UDIuY3NzKHtcbiAgICAgIGxlZnQ6IGZ1bmN0aW9uKGksdikgeyByZXR1cm4gbmV3TG9jYXRpb25QMih2LCAzNywgMzkpOyB9LFxuICAgICAgdG9wOiBmdW5jdGlvbihpLHYpIHsgcmV0dXJuIG5ld0xvY2F0aW9uUDIodiwgMzgsIDQwKTsgfVxuICAgIH0pO1xuICB9KTtcbiAgJCh3aW5kb3cpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICBkW2Uud2hpY2hdID0gZmFsc2U7XG4gIH0pO1xuXG5cblxuICAvLyBVU0UgQ09NTUVOVEVEIE9VVCBDT0RFIEZPUiBTTU9PVEhFUiBNT1ZFTUVOVFxuICAvLyByZXBlYXRzIHBvc3Rpbmcgb2YgQ1NTIHRvIHNob3cgYm94IG1vdmVtZW50XG4gIC8vIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAvLyAgIGJveC5jc3Moe1xuICAvLyAgICAgbGVmdDogZnVuY3Rpb24oaSx2KSB7IHJldHVybiBuZXdMb2NhdGlvbih2LCAzNywgMzkpOyB9LFxuICAvLyAgICAgdG9wOiBmdW5jdGlvbihpLHYpIHsgcmV0dXJuIG5ld0xvY2F0aW9uKHYsIDM4LCA0MCk7IH1cbiAgLy8gICB9KTtcbiAgLy8gfSwgMjApO1xufSk7XG4iXX0=
