---
title: 父div容器随子div变化
tags:
  - CSS
  - div
  - html
url: 233.html
id: 233
categories:
  - 编程开发
date: 2009-07-07 00:32:52
---

当div包含时，使得父div大小随子div变化有三种方法： 1.将父对象也设置浮动。即添加float:left;  

2.将子对象的浮动属性去掉。即去掉“float:left;  

3.在外层DIV的后面加一个空的块级对象，并设置“clear:both;”取消浮动。