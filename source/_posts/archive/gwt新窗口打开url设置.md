---
title: gwt新窗口打开url设置
tags:
  - gwt
  - window
  - 新窗口
  - 模态
url: 810.html
id: 810
categories:
  - 编程开发
date: 2011-01-05 21:41:39
---

在gwt项目中，需要在新窗口打开url时，最简单的就是使用window对象的open方法。  

在项目开发中，遇到这样一个问题，以新窗口打开的页面缺少菜单、地址栏、工具栏等，简单的说法就是模态窗口。由于一直是在firefox中进行测试，导致这个问题没有被察觉，firefox是将新窗口在新标签中打开，因此不存在模态的情况，但是在ie下此问题就浮出水面了。  

原始代码是类似这个样子的：  

Window.open(newURL, "_blank", null);

就是null参数控制新窗口为模态的，改为下面的样子就没有问题了  

Window.open(newURL, "_blank", "");

参考一下open方法的文档就什么都明白了  

> void com.google.gwt.user.client.Window.open(String url, String name, String features)  
>   
> Opens a new browser window. The "name" and "features" arguments are specified here.  
>   
> Parameters: url the URL that the new window will display name the name of the window (e.g. "_blank") features the features to be enabled/disabled on this window

以后要多加细心了～～