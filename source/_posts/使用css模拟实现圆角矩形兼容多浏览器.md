---
title: 使用css模拟实现圆角矩形兼容多浏览器
tags:
  - CSS
  - html
  - 兼容浏览器
  - 圆角矩形
url: 782.html
id: 782
categories:
  - 编程开发
date: 2010-12-25 10:22:06
---

这个方法也是在网上看到的，自己实际使用了一下，确实可以达到圆角矩形的效果。  

简单说明一下实现的思路吧：  

圆角不是通过设置一个容器的边框实现，那样的话对于ie浏览器是不兼容的，也没有使用背景图片来拼接，而是通过多个容器的边框样式组合成形似圆角的效果。  

对于需要调整圆角的弧度的话，可能还需要更多的容器，不过理解了方法，接下来的事情就是尝试了。  

下面给出一个例子代码：  

html: ```html  

这是一个圆角矩形

\\n```  

css: ```css  

.roundDiv { margin: 0 auto; width: 327px; }  

.round { border-left: 1px solid #b2b2b2; border-right: 1px solid #b2b2b2; display: block; height: 1px; overflow: hidden; }  

.roundTop,.roundBottom { border: 0; background-color: #b2b2b2; margin: 0 5px; }  

.round1 { height: 2px; margin: 0 1px; }  

.round2 { margin: 0 2px; }  

.round3 { border-width: 2px; margin: 0 3px; }  

.roundInner { height:200px; margin:0 auto; width:325px; } \\n``` 下面是效果 .roundDiv { margin: 0 auto; width: 327px; } .round { border-left: 1px solid #b2b2b2; border-right: 1px solid #b2b2b2; display: block; height: 1px; overflow: hidden; } .roundTop,.roundBottom { border: 0; background-color: #b2b2b2; margin: 0 5px; } .round1 { height: 2px; margin: 0 1px; } .round2 { margin: 0 2px; } .round3 { border-width: 2px; margin: 0 3px; } .roundInner { height:200px; margin:0 auto; width:325px; }

这是一个圆角矩形