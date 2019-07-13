---
title: 扁平化设计-jquery插件实现卡片翻转效果
tags:
  - Flip
  - Flippy
  - JQuery
  - QuickFlip2
  - 卡片翻转
  - 扁平化
url: 1246.html
id: 1246
categories:
  - 编程开发
date: 2013-08-08 21:12:10
---

扁平化设计是越来越流行了，飞尘在开发中也小小的使用了一下。用到的是方块布局中很典型的卡片翻转效果，于是搜罗了一下，目前只测试使用了三个基于jquery的插件。  

下面就个人的体会简单说明一下。  

**QuickFlip2**  

看了下文档，没有设置翻转后内容的参数，翻转的内容需要直接在容器内写好，如果只需要简单的翻转效果，用这个就够了。  

官方网址： [http://jonraasch.com/blog/quickflip-2-jquery-plugin](http://jonraasch.com/blog/quickflip-2-jquery-plugin)  

**Flip**  

基于翻转的效果，翻转时容器会被放大，可能导致原有页面布局出现混乱。  

官方网址： [http://lab.smashup.it/flip/](http://lab.smashup.it/flip/)  

**Flippy**  

目前采用的方案，但是使用中发现有一点小小的不足，当设置翻转前后背景色不为白色时，翻转时的效果会对颜色进行渐变，但是翻转回来的效果没有对颜色进行反向渐变，导致翻转效果结束时背景色突变。  

官方网址： [http://blog.guilhemmarty.com/flippy/](http://blog.guilhemmarty.com/flippy/)