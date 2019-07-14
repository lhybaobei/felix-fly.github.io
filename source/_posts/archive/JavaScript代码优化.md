---
title: JavaScript代码优化
tags:
  - JavaScript
  - 代码优化
url: 17.html
id: 17
categories:
  - 编程开发
date: 2008-12-15 10:53:00
---

JavaScript是一种解释性语言,对代码优化可以提高下载速度和执行效率.

1.减少代码体积,加快下载,可以使用一些工具如[ECMAScript Cruncher](http://www.saltstorm.net/downloads/esc/ESC.zip),[JSMin](http://www.crockford.com/javascript/jsmin.zip),[Online JavaScript Compressor](http://javascriptcompressor.com/)等.

2.尽量使用var声明局部变量

3.多使用内部函数

4.if-else条件应把可能性最大的放到前面

5.对DOM的操作应尽量减少