---
title: css浏览器兼容性解决ie7的!important
tags:
  - CSS
  - ie6
  - ie7
  - important
url: 260.html
id: 260
categories:
  - 编程开发
date: 2009-07-10 22:54:19
---

之前ie6和firefox之间的兼容性可以使用!important解决，但是ie7支持了!important，所以这种方法无法解决ie7的兼容性问题。  

可以使用下面的方法来解决ie6、ie7和firefox之间的兼容问题  

#div1 li {margin:4px;} /* firefox */ * html #div1 li {margin:2px;} /* IE6 */ *+html #div1 li {margin:2px;} /* IE7*/  

\* html为ie独有的标记 *+html为ie7独有的标记 firefox与ie在margin属性上有2px的差别