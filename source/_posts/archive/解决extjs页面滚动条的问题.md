---
title: 解决extjs页面滚动条的问题
tags:
  - doLayout
  - extjs
  - viewport
  - 滚动条
url: 1099.html
id: 1099
categories:
  - 编程开发
date: 2011-11-18 21:50:16
---

使用extjs开发使用viewport展现页面时，默认是没有滚动条的，可以通过设置autoScroll属性为true来解决。  

> autoScroll : Boolean true to use overflow:'auto' on the components layout element and show scroll bars automatically when necessary, false to clip any overflowing content (defaults to false).

经过这个设置之后，如果页面内容较多时，则会自动添加滚动条。  

但是可能会遇到新的问题，页面内容是动态变化的，内容可能是在页面框架展现之后添加进去的，这时如果之前页面没有滚动条，可能水平滚动条和垂直滚动条会同时出现，而一般我们是不希望出现水平滚动条的。  

这时我们可以通过调用viewport的doLayout()方法强制页面重新渲染，这样就可以去掉烦人的水平滚动条了。  

关于doLayout()方法，文档中是这样描述的：  

> Manually force this container's layout to be recalculated. The framwork uses this internally to refresh layouts form most cases. Returns: {Ext.container.Container} this