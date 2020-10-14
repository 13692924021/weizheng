(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
      recalc = function() {
          if (docEl.clientWidth > 750) {
              docEl.style.fontSize = "100px";
          } else {
              var width = docEl.clientWidth / 7.5;
              docEl.style.fontSize = width + "px";
          }
      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);