---
title: wordpress自定义最新评论样式
tags:
  - JQuery
  - wordpress
  - 最新评论
url: 485.html
id: 485
categories:
  - 互联网络
date: 2009-12-11 22:17:42
---

使用wordpress的widget功能边栏的最新评论，发现并不是我想要的样式，网上找找，大多是插件或者修改文件来实现，也发现一个使用jQuery来解决这个问题，直接使用Ajax读取评论rss的内容，然后输出。这样不需要安装插件也不需要修改其他文件代码。  

注意：需要引入jQuery，可以先看看网页源码是否包含了jquery，如果没有，在wordpress的wp-includes\\js\\jquery目录下就有JQuery，可以自己引入。  

然后使用下面的代码就可以了，在外观-小工具添加文本，贴入代码，rss地址改为自己的，样式也可以自由设置，也可以配合css达到更好的效果。  

```javascript



$.get('http://smile.itcao.com/?feed=comments-rss2', function(data){
	$(data).find('item').each(function(){
		$('#comment-ajax').append('<li><a href="'+$(this).find('link').text()+'" title="'+$(this).find('title').text()+'">'+($(this).find('dc\\:creator').text()?$(this).find('dc\\:creator').text():$(this).find('creator').text())+':'+$(this).find('description').text()+'</a></li>');
	});
});
```