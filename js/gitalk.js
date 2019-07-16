(function() {
  if (!window.gitalkConfig) return;
  var onload = window.onload;
  window.onload = function() {
    if (onload) onload();
    var gitalk = new Gitalk(window.gitalkConfig);
    gitalk.render('gitalkWrapper');
  }
})();
