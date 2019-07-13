---
title: JavaScript检测中文长度
tags:
  - JavaScript
  - 中文长度
  - 字符串
  - 验证
url: 989.html
id: 989
categories:
  - 编程开发
date: 2011-09-04 15:50:12
---

在JavaScript中检测字符串的文长度时，必然会遇到中文长度的问题。  

一般在验证javascript表单数据时，使用字符串的length属性进行验证，此时一个汉字的长度记为1。但是字符串提交到数据库中时，一个汉字占两个字节，长度为2，这样就造成验证误差。  

比如数据库表定义一个字段长度为5，用length来限制录入的长度，如果录入的为汉字，这样可以通过验证，但插入数据库肯定会出错。  

为了解决这中情况，可以定义一个新的函数getBytes()取得字符串的字节数。  

代码如下：  

```javascript  

String.prototype.getBytes = function() { var cArr = this.match(/\[^\\x00-\\xff\]/ig); return this.length + (cArr == null ? 0 : cArr.length); } var len=frm.elements\["CSMArea/mscID"\].value.getBytes();  

if(len>5){ alert("length limit"); frm.elements\["CSMArea/mscID"\].select(); return false; } \\n```  

getBytes用正则表达式来判断字符串中包含汉字的个数，包含的汉字都放到数组cArr中，这样cArr的长度就是汉字的总数。getBytes方法返回length加上汉字数，就是总的字节数。