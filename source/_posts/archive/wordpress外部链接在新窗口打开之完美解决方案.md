---
title: wordpress外部链接在新窗口打开之完美解决方案
tags:
  - wordpress
  - 新窗口
  - 链接
url: 413.html
id: 413
categories:
  - 互联网络
date: 2009-10-07 22:20:11
---

折腾了好久，看了n多的方法，终于有点眉目了，目前还没完善，不过已经前进了很大一步，嘿嘿。  

先说说一些其它方法，如果这些能搞定，就不用我这个了，比较麻烦-P  

简单的一个插件就可以了，External Links Plugin，可以直接后台设置为外部链接添加图标、新窗口打开（基于javascript，非target=\_blank，听说利于seo）、nofollow属性（忽略链接评价）。之前使用这个插件觉得不错，挺省事的，可是最近更换了主题发现这个插件不起效了，主题也应用了大量js，可能是冲突了吧，虽然可以通过设置target=\_blank实现新窗口打开，觉得不太好，于是开始大动手术……  

过程很曲折，搞了很久才算搞好，实现倒也不难，先说关键-就是利用jQuery选择外部链接，改变其属性和事件

```html

$("a[rel*='external']").click(function(){window.open(this.href);return false;}).css({background:"url(/wp-content/themes/philna2/images/external.gif) no-repeat right","padding-right": "12px"});

\n```

这段代码放在主题的footer.php里前，如果没有引用到jQuery需先引用，放在上面代码的前面，最好先看看网页源码是不是已经引用了

```html

\n```

wordpress目录下就有jQuery，src处可记得改为你的博客地址哦  

还有一点说明一下，外部链接的背景图地址需要设置正确  

只是有了这些还不够，因为wordpress没有给我们现成的rel="external"属性，这个就比较麻烦了，目前搞定了一半，就是在HTML编辑环境下，使用link插入链接可以完成插入rel="external"属性，可视化的编辑环境还没搞定，继续努力中，先说前者的方法  

打开wp-includes/js/quicktags.js 搜索href应该能找到4个 修改

```html
a href="'+a+'">';edInsertTag(d,c)
\n```

改为

```html
a href="'+a+'" rel="external">';edInsertTag(d,c)
\n```

这里也可以设置target=_blank，即可实现新窗口打开  

下一步是修改可视化编辑环境了，继续努力……