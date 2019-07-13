---
title: 获取iframe页面的id
tags:
  - iframe
  - JavaScript
  - seo
  - 搜索引擎
url: 1023.html
id: 1023
categories:
  - 编程开发
date: 2011-09-11 13:49:18
---

虽然iframe不是一种很好的web设计形式，对于搜索引擎也不是很友好，基本上是不推荐使用的。  

但是有时候为了应对某些特殊的需求，还是不得不使用iframe来实现。  

而在实现中，可能就会遇到需要知道当前iframe的id的情况（前提是iframe拥有id属性）。  

父页面一般是知道子iframe的id的，不知道时也可以通过获取window.frames数组取得。  

另一方面，在iframe子页面中获取当前iframe的id  

var frameId = window.frameElement && window.frameElement.id || '';