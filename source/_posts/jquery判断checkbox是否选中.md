---
title: jquery判断checkbox是否选中
tags:
  - attr
  - checkbox
  - checked
  - JavaScript
  - JQuery
  - prop
url: 1274.html
id: 1274
categories:
  - 编程开发
date: 2014-04-05 13:41:30
---

所使用的jquery版本为jquery-1.9.1，浏览器为Chrome  

1.通过prop方法获取checked属性，获取的checked返回值为boolean，选中为true,否则为flase ```html  

全选 function checkAll() { var checkedOfAll=$("#selectAll").prop("checked"); alert(checkedOfAll); $("input\[name='procheck'\]").prop("checked", checkedOfAll); } \\n```  

2.如果使用attr方法获取时，如果当前input中初始化未定义checked属性，则不管当前是否选中，$("#selectAll").attr("checked")都会返回undefined； 如果当前input中初始化已定义checked属性，则不管是否选中，$("#selectAll").attr("checked")都会返回checked. ```html 全选 function checkAll() { var checkedOfAll=$("#selectAll").attr("checked"); alert(checkedOfAll); $("input\[name='procheck'\]").attr("checked", checkedOfAll); } \\n``` 总结，如果使用jquery,应使用prop方法来获取和设置checked属性，不应使用attr.