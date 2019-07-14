---
title: extjs获取url参数
tags:
  - extjs
  - JavaScript
  - url参数
  - web开发
url: 1129.html
id: 1129
categories:
  - 编程开发
date: 2011-12-01 21:17:59
---

使用extjs开发时，需要获取页面地址url中的参数。  

大概找了一下，没有找到，不知道extjs有没有相关的方法，可能是自己知道的太少吧。  

也不去管那么多了，先搞个功能用起来再说。  

使用javascript直接就可以获取url的参数，只是这里进行一下解码，没什么好解释的，一切都在代码中。  

> var id = getUrlParam('id');  
>   
> function getUrlParam(param) { var params = Ext.urlDecode(location.search.substring(1)); return param ? params\[param\] : params; }