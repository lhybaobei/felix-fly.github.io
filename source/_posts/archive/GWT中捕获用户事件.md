---
title: GWT中捕获用户事件
tags:
  - gwt
  - NativePreviewEvent
  - 用户事件
url: 748.html
id: 748
categories:
  - 编程开发
date: 2010-10-09 20:53:15
---

这里捕获的事件不是针对特定的元素对象，而是针对页面模块级别，此处主要使用到NativePreviewEvent  

具体的描述可以参考官方文档 [http://google-web-toolkit.googlecode.com/svn/javadoc/2.0/com/google/gwt/user/client/Event.NativePreviewEvent.html](http://google-web-toolkit.googlecode.com/svn/javadoc/2.0/com/google/gwt/user/client/Event.NativePreviewEvent.html)  

另外还有个例子 [http://code.google.com/p/google-web-toolkit/issues/detail?id=3892](http://code.google.com/p/google-web-toolkit/issues/detail?id=3892)  

下面仅给出关键代码 ```JAVA  

Event.addNativePreviewHandler(new NativePreviewHandler() { @Override public void onPreviewNativeEvent(NativePreviewEvent event) { if (event.getTypeInt() ==Event.ONCLICK) { / * * 此处捕获点击事件，也可以是其它用户事件 */ Window.alert("oh,click"); } } }); \\n```