---
title: js避免console报错
tags:
  - console
  - firebug
  - firefox
  - IE
  - JavaScript
  - 控制台
url: 1114.html
id: 1114
categories:
  - 编程开发
date: 2011-11-24 20:42:14
---

js开发过程中经常会使用console对象来进行程序调试，对于太过强势的alert还是避而远之的好，呵呵。  

不过使用console的时候，也有个潜在的问题需要注意，由于较老版本的ie浏览器不支持console对象及相应的方法，如果发布的代码中依然包含console方法时，就会出现意想不到的错误。  

由于开发一般使用firebug进行调试，代码发布时经常会有些调试的代码没有及时清理，所以避免由console引发的错误就很重要了。  

例如类似下面这样的句子在firefox中可以正常的运作，并且很方便的输出日志到控制台：  

> console.log('some message');

但是对于老版本的ie浏览器就不怎么好使了，好在ie9也有了控制台，不过与firebug还是有些不大相同的。  

为了浏览器兼容性，同时也方便调试，可以将console的方法以try-catch保护起来，不过输出的内容形式有点变化：  

```javascript  

function printLog() { try { console.log(arguments); } catch (e) { // not support console method (ex: IE) } } \\n```