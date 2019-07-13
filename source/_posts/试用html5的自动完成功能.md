---
title: 试用html5的自动完成功能
tags:
  - autocomplete
  - html5
  - 自动完成
  - 表单
url: 972.html
id: 972
categories:
  - 编程开发
date: 2011-08-27 11:25:10
---

以往的web开发中，对于表单中输入对象的自动完成功能，依赖于用户对浏览器的自定义设置。  

在html5中，如果不希望用户的浏览器自动记录这些历史记录，可以对form或者form里的每个input做单独的autocomplete属性设置。  

autocomplete是html5中新增加的属性，但是它已经存在很久了。autocomplete早先是微软在IE5中加入的，以后逐渐被其它浏览器支持。  

有两种可选值，不设置autocomplete属性时，默认是on：  

on Default. Specifies that autocomplete is enabled off Specifies that autocomplete is disabled  

下面是一个简单的例子 ```html  

Username:  
E-mail:   

\\n```