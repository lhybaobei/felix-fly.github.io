---
title: 禁止table内容溢出外层div容器
tags:
  - CSS
  - div
  - table
  - 宽度
url: 746.html
id: 746
categories:
  - 编程开发
date: 2010-10-09 20:42:42
---

问题描述：在div容器中嵌入table，默认情况下，table中内容（比如文字）较多，会导致表格宽度超出外层div容器的宽度，造成溢出。  

解决方法很简单，指定table的css样式即可  

table-layout:fixed;

这样table就会老实很多了