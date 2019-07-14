---
title: xhtml网页文档类型声明格式
tags:
  - xhtml
  - 类型声明
url: 33.html
id: 33
categories:
  - 编程开发
date: 2008-12-26 15:50:00
---

xhtml有三种文档类型声明方式:  

strict（严格类型）  

transitional（过渡类型）  

frameset（框架类型）  

声明格式如下  

strict  

<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">  

在这样的情况下使用：需要干净的标记，避免表现上的混乱。请与层叠样式表配合使用。  

transitional  

<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  

在这样的情况下使用：当需要利用HTML在表现上的特性时，并且当需要为那些不支持层叠样式表的浏览器编写XHTML时。  

frameset  

<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">  

在这样的情况下使用：需要使用HTML框架将浏览器窗口分割为两部分或更多框架时。