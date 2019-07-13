---
title: javascript多文本框内容重复检测
tags:
  - JavaScript
  - JQuery
  - 文本框
  - 重复检测
url: 995.html
id: 995
categories:
  - 编程开发
date: 2011-09-05 20:42:59
---

项目中遇到这样的需求，对于一组文本框，要求验证用户的输入不能为空，并且不能存在相同的内容输入。  

举个例子，在考试的选择题目中，对于答案选项就不能出现重复的情况。  

下面的方法就是检测给定的一组输入是否存在相同的值。  

为了指出相同的输入值，事先在每个输入框的后面隐藏一个文本节点，用于检测到重复时显示提示信息，这是可选的，根据项目的需求设计会有不同的表现形式。  

代码中使用了jquery。  

```javascript  

/\*\* \* if find duplicate show tip message and return true, otherwise return false * * @param obj - * input:text array * @returns {Boolean} */ function findDuplicate(obj) { for ( var i = 0; i < obj.length; i++) { for ( var j = i + 1; j < obj.length; j++) { if ($(obj\[i\]).val() == $(obj\[j\]).val()) { $(obj\[i\]).next().text("重复").show(); $(obj\[j\]).next().text("重复").show(); // alert("重复"); return true; } } } return false; } \\n```