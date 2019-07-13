---
title: css使用远程自定义字体
tags:
  - CSS
  - google
  - 网页字体
  - 自定义字体
  - 远程字体
url: 967.html
id: 967
categories:
  - 编程开发
date: 2011-08-19 22:11:20
---

网页设置字体后，即使同一种字体在不同平台下可能会有不同的显示，而且各平台支持的字体不同且有限，网站设计者总是希望给用户同一的界面，因此也就有使用自定义字体的需求。  

google提供了一个解决方案————webfonts，具体可以去google官方网站查看。  

[http://www.google.com/webfonts](http://www.google.com/webfonts)  

其实也没什么神秘的，只是包装了一下css3中字体来实现的，关于css自定义字体请参阅  

[http://www.w3.org/TR/css3-fonts/#font-face-rule](http://www.w3.org/TR/css3-fonts/#font-face-rule)  

实现很简单的，下面就是个小例子  

```html  

@font-face { font-family: 'GBPinyinokRegular'; src: url(#); src: url(#) format('embedded-opentype'), url(#) format('woff'), url(#) format('truetype'), url(#) format('svg'); font-weight: normal; font-style: normal; } \\n```  

使用css自定义字体时需要注意的是：  

eot字体用于微软的IE浏览器，TTF字体用于Chrome、FireFox、Opera、Safari（pc）浏览器。  

IE9不加载eot字体，加载ttf字体但无法正常显示  

提供两个字体转换的工具  

在线字体转换 http://www.fontsquirrel.com/fontface/generator  

上传需要转换的字体文件，记得选择BASIC，默认为OPTIMAL，原有的字体文件变大了，不知道是如何优化的。  

还有一个是离线版的，可以到google代码库去下载  

ttf2eot http://code.google.com/p/ttf2eot/wiki/Demo