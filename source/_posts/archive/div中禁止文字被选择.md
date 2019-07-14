---
title: div中禁止文字被选择
tags:
  - CSS
  - div禁止选中
  - JavaScript
url: 886.html
id: 886
categories:
  - 编程开发
date: 2011-05-12 22:28:22
---

在做div的点击计数事件时，遇到一个小问题。  

因为div里面有文字，所以当点击多次时，特别是鼠标点的比较快的时候，文字会被选中。  

查了下，用css和javascript可以实现禁止选择。  

css代码：


```/* css style: */
html,body{
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
```

html代码 ```html  

some text

\\n```  

说明： unselectable针对IE onselectstart针对Chrome、Safari -moz-user-select是firefox专有的