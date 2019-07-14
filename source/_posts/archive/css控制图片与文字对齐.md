---
title: css控制图片与文字对齐
tags:
  - CSS
  - html
url: 280.html
id: 280
categories:
  - 编程开发
date: 2009-07-24 03:06:17
---

文字旁边搭配图片时，发现图片比文字靠上，原来默认的情况是图片顶对齐而文字底对齐，通过设置css属性可以使得图片与文字对齐。  

设置各对象的vertical-align属性，属性说明： baseline－将支持valign特性的对象的内容与基线对齐 sub－垂直对齐文本的下标 super－垂直对齐文本的上标 top－将支持valign特性的对象的内容与对象顶端对齐 text-top－将支持valign特性的对象的文本与对象顶端对齐 middle－将支持valign特性的对象的内容与对象中部对齐 bottom－将支持valign特性的对象的文本与对象底端对齐 text-bottom－将支持valign特性的对象的文本与对象顶端对齐  

在此设置为text-bottom即可实现图片与文字位于同一水平线上，好看多了。