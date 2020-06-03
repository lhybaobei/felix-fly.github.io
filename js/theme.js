$(function() {
  // Back to top
  $(window).scroll(function() {
    $(window).scrollTop() > 500
      ? $(".to-top").addClass("show")
      : $(".to-top").removeClass("show");
  });
  $(".to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  // Load comment
  if ($("#comment").length) {
    var gitalk = new Gitalk({
      clientID: "6547db074e10fdcf2ee5",
      clientSecret: "56db5ea786632526b128d0164f7d4c5fe92d1dad",
      repo: "felix-fly.github.io",
      owner: "felix-fly",
      admin: ["felix-fly"],
      id: location.pathname,
      distractionFreeMode: false
    });
    gitalk.render("comment");
  }

  // article-share
  $('.share-box i').click(function() {
    var type = $(this).data('type');
    var title = document.title;
    var encodedUrl = encodeURIComponent(location.href);
    var url;
    if (type === 'weibo') {
      url = '//service.weibo.com/share/share.php?title=' + title + '&url=' + encodedUrl + '&searchPic=true&style=number';
    } else if (type === 'qq') {
      url = '//connect.qq.com/widget/shareqq/index.html?url=' + encodedUrl + '&title=' + title;
    } else if (type === 'douban') {
      url = '//shuo.douban.com/!service/share?href=' + encodedUrl + '&name=' + title;
    }
    if (url) window.open(url);
  });
});
