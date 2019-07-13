---
title: 在gwt项目中自己实现PopupPanel功能
tags:
  - gwt
  - JQuery
  - PopupPanel
  - widget
url: 802.html
id: 802
categories:
  - 编程开发
date: 2011-01-01 21:36:04
---

在gwt项目开发中遇到这样一个问题：使用PopupPanel后导致调用JavaScript绑定(例如用JQuery)的事件实效，经过几番折腾之后，终于找到了一种解决方法。  

这里当然只是个人的一种解决办法，如果有更好的可以告诉飞尘哦，大家交流一下。  

先来说说我的方法吧。  

就是通过自己实现PopupPanel的功能及效果来避免这个问题，实现起来也不是很困难。  

大概的思路就是通过给widget添加样式并设置隐藏显示属性来实现自定义的PopupPanel。  

首先就是创建widget了，可以在代码中新建，也可以通过uibinder获取*.ui.xml中已经设计好的widget。此处假定widget名为someWidget  

接着实现两个方法，例如名为hide()和show()，在方法中设置someWidget的属性 ```java  

private void show(){ someWidget.addStyleName(styleName); someWidget.setVisible(true); } \\n```  

```java  

private void hide(){ someWidget.removeStyleName(styleName); someWidget.setVisible(false); } \\n```  

然后在原来需要PopupPanel功能的地方，使用自己的方法替换就可以了，当然一些另外的功能，如窗口位置居中、模式化窗口等等需要自己来实现。本文意在抛砖引玉，望各位不要见笑，嘿嘿。