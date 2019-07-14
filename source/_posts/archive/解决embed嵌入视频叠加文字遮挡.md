---
title: 解决embed嵌入视频叠加文字遮挡
tags:
  - activex
  - embed
  - 视频
  - 遮挡
url: 1259.html
id: 1259
categories:
  - 编程开发
date: 2014-04-05 13:16:39
---

使用embed标签可以很方便的将音频、视频等媒体资源嵌入到网页中，最近在一个项目中使用时遇到了一个问题。  

根据需求，在视频内容的上层需要显示文字，类似电视节目中那种滚动字幕的效果。设置容器z-index未果，网上查了查，关于遮挡的问题大致有两种类型：  

一是对于嵌入flash的情况，一般使用object标签，通过修改参数wmode为Opaque或Transparent就可以了，本文嵌入的为视频文件，这种不适用。  

另外一种是针对嵌入ActiveX控件的情况，需要增加iframe设置透明，再配合z-index等等，试了多次，没有效果。  

不得不再次海搜，偶然看到关于vb控制windows media player的文章里提到设置windowlessvideo属性为true可以叠加文字等效果，于是试了一下，果然ok。  

原来解决如此轻而易举： ```html  

 \\n``` 又看了下windowlessvideo属性的[官方文档](http://msdn.microsoft.com/en-us/library/dd564092(v=VS.85).aspx)，通过设置为true使得视频成为无窗口模式，这样就与网页其它元素位于同一层面了，结合z-index就可以达到想要的效果了。  

这里需要补习一下了，关于windows的有窗口元素和无窗口元素。  

有窗口元素： <object> 、ActiveX控件 、Plug-ins、DHTML Scriptlets、SELECT elements（即DropdownList的HTML表现）、IE5.01以前的IFRAMEs  

无窗口元素： 无窗口的ActiveX控件、IE5.5以后的IFRAMEs、大部分的DHTML元素  

关于html中遇到的各种遮挡问题，大多数都与有窗口元素有关。