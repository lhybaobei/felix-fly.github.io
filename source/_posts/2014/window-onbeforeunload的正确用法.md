---
title: window.onbeforeunload的正确用法
tags:
  - chrome
  - firefox
  - onbeforeunload
  - window
  - 兼容性
  - 浏览器
url: 1272.html
id: 1272
categories:
  - 编程开发
date: 2014-04-05 13:37:24
---

通过window.onbeforeunload方法，我们可以在用户离开当前页面时进行提示，通常情况是用户输入了某些内容而没有及时保存。  

经常地，我们会被告知，onbeforeunload方法并不是所有的浏览器都支持的，的确是的。但是这并不影响我们对它的使用，因为主流的浏览器，或者说90%的浏览器都是支持的。  

下面是引用mozilla社区关于onbeforeunload的浏览器支持情况

> Feature Chrome Firefox (Gecko) Internet Explorer Opera Safari (WebKit) Basic support 1 1 4 12 3

个人测试下来，如果使用的是基于Presto内核的opera，即使最新版12.15仍然是不支持的，需要使用基于WebKit内核的opera next才可以支持。对于safari已经停止windows平台版本的开发，历史的东西就让它属于历史吧  

更多关于onbeforeunload的描述可以看看mozilla的开发文档 [https://developer.mozilla.org/en-US/docs/Web/API/window.onbeforeunload](https://developer.mozilla.org/en-US/docs/Web/API/window.onbeforeunload)  

微软也有相关的介绍 [http://msdn.microsoft.com/en-us/library/ms536907(v=vs.85).aspx](http://msdn.microsoft.com/en-us/library/ms536907(v=vs.85).aspx)  

接着要特别指出的是，正确使用onbeforeunload才能达到理想的效果

> window.onbeforeunload = function(e) { return 'Dialog text here.'; };

我们经常会看到如下的写法

> window.onbeforeunload = function(e) { window.event.returnValue = "确定离开当前页面吗？"; };

这样的写法是有局限性的，IE、chrome是有效的，而在firefox、opera next下是无效的。