---
title: 使用CryptoJS进行sha1哈希报错
tags:
  - CryptoJS
  - JQuery
  - sha1
  - 哈希
url: 1214.html
id: 1214
categories:
  - 编程开发
date: 2012-09-22 10:12:32
---

按照官方给出的例子使用CryptoJS进行sha1哈希: [http://code.google.com/p/crypto-js/#SHA-1](http://code.google.com/p/crypto-js/#SHA-1)  

从form中取得密码后，进行sha1散列，之后作为参数post到服务器，firebug报错：  

> a is undefined——————sha1.js (第 8 行)

之前也有使用过CryptoJS没有问题的，在firebug控制台直接执行  

CryptoJS.SHA1($('#password').val());  

没有问题，不过返回值似乎有些特点：  

7c4a8d09ca3762af61e59520943dc26494f8941b { $super=, words=\[5\], sigBytes=20}  

很明显是个对象，而不是简单的字符串  

查了一下原来是jquery那边转换时出错了，转换一下就ok了：  

CryptoJS.SHA1('Message') + ''; 或者 CryptoJS.SHA1('Message').toString();  

示例代码： ```html  

var hash = CryptoJS.SHA1('Message'); \\n```  

更详细的讨论可以查看这里  

[http://code.google.com/p/crypto-js/issues/detail?id=41](http://code.google.com/p/crypto-js/issues/detail?id=41)