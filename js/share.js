(function($){

  // article-share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      qrcode_img = $this.attr('data-qrcode'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      title = document.title,
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<div class="article-share-links">',
            '<a href="//service.weibo.com/share/share.php?title=' + title + '&url=' + encodedUrl + '&searchPic=true&style=number' + '" class="icon-weibo" target="_blank" title="Weibo"></a>',
            '<a href="//connect.qq.com/widget/shareqq/index.html?url=' + encodedUrl + '&title=' + title + '" class="icon-qq" target="_blank" title="QQ"></a>',
            '<a href="//shuo.douban.com/!service/share?href=' + encodedUrl + '&name=' + title + '" class="icon-douban" target="_blank" title="QQ"></a>',
            '<a href="' + qrcode_img + '" class="icon-qrcode" target="_blank" title="QR code"></a>',
            '<div class="qrcode"><img src=' + qrcode_img + '></div>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

})(jQuery);