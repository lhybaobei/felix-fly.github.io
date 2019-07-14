---
title: 表格table行的hover伪属性失效解决办法
tags:
  - hover
  - table
  - 失效
url: 32.html
id: 32
categories:
  - 编程开发
date: 2008-12-26 15:36:00
---

可能你会发现写好了代码,到浏览器测试表格的hover属性并没有起作用,仔细检测代码后,没有发现任何错误,那么为什么属性不起作用呢?  

可能是你的文档缺少了类型声明,就是网页源码里最顶行的那句代码,可以是这个样子

```language
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
table#row-hover tr:hover
{
color: #000;
background: #F0F;
}



11111111


22222222


33333333


44444444


55555555


\n```

加上类型声明代码后,hover属性就会有效了