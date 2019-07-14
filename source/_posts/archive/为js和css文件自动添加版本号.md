---
title: 为js和css文件自动添加版本号
tags:
  - CSS
  - JavaScript
  - web
  - 版本号
  - 缓存
url: 914.html
id: 914
categories:
  - 编程开发
date: 2011-06-08 21:16:22
---

web应用必然要面对缓存问题，无论前台后台都会涉足缓存。特别是对于前端而言，缓存利用的是否得当直接关系到应用的性能。  

通常情况下，我们会倾向于使用缓存，因为缓存一方面可以减少网络开销，一方面可以减轻服务器的压力。  

但是有些时候缓存也会带来一些比较诡异的问题，呵呵。关于缓存的文章应该不在少数，不再讨论，本文的重点在于为js和css文件自动添加版本号。  

这样做的原因是：首先对于js和css类型的静态文件设置了缓存机制，当文件被更新时，需要强迫浏览器下载修改后的新文件，也就是要更新缓存，而通过为js和css文件增加版本号这样的方式就可以很好的解决这个问题。  

本文是以php脚本为例，其它语言可参考  

php脚本的作用是取文件的时间戳作为版本号，这里可以自行定义版本格式  

```php  

< ?php /** * Add version to the file for cache problem * @param string $url to add version * @return string */ function autoVer($url){ $ver = filemtime($\_SERVER\['DOCUMENT\_ROOT'\].$url); echo $url.'?v='.$ver; } ?> \\n```  

引用js和css等资源文件时，使用脚本 ```html  

 \\n```  

最终客户端展现的html页面内容 ```html  

 \\n```  

这里URI不是静态，可能会造成某些浏览器不会进行缓存，可以采用伪静态配合URL重写来解决，关于伪静态也比较简单，这里就不赘述了。  

更多内容可以参考[这篇英文](http://particletree.com/notebook/automatically-version-your-css-and-javascript-files/)