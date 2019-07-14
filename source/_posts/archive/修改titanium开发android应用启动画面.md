---
title: 修改titanium开发android应用启动画面
tags:
  - android
  - ios
  - iPhone
  - titanium
  - 启动画面
url: 1051.html
id: 1051
categories:
  - 编程开发
date: 2011-10-24 21:06:45
---

使用titanium开发android应用程序，默认的应用程序启动画面是个不怎么美观的logo，于是很自然的要把它换掉了。  

原来如此简单，只需要替换这个图片文件就可以了：  

Resources\android\default.png

以上是针对android应用的，对于ios的应用没有测试(没有设备)。  

不过在iphone文件夹下有四个不同尺寸的图片文件：  

Resources\iphone\Default.png
Resources\iphone\Default@2x.png
Resources\iphone\Default-Landscape.png
Resources\iphone\Default-Portrait.png

下面是在国外某处看到的  

> This is done relatively simple. In your titanium project inside the resources folder is a folder for resources which are special for android. Titanium will look into this folder and use the Default.png as the image to display while starting up. Just replace the file that is already existing in this folder with your splash screen image. Be sure to get use Default.png and not default.png because on the device titanium will be case sensitive.

按照这个朋友的说法，default.png和Default.png应该是针对ios应用，需要注意区分大小写。