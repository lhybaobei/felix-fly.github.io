---
title: 解决iframe造成onbeforeunload多次提示
tags:
  - iframe
  - JavaScript
  - onbeforeunload
  - 提示
url: 991.html
id: 991
categories:
  - 编程开发
date: 2011-09-04 16:07:53
---

有些时候需要在用户离开当前浏览页面时给出提示，一般就会使用到javascript的onbeforeunload方法了。  

不过并非所有的浏览器都有效。  

在项目中就遇到了给出提示的需求，但是由于页面中使用了文件上传功能（借助于iframe实现），在测试中发现了一个比较奇怪的问题。  

按照设计提示信息应该只出现一次，在ie和firefox浏览器中功能正常，但是在chrome浏览器中提示却出现了两次。  

查了好久，终于找到了问题的关键。  

用于文件上传的iframe设置了

src="#"

，正是这个设置造成了提示两次的问题。  

改为

src=""

后功能正常。