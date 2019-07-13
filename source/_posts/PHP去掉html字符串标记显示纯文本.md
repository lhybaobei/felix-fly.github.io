---
title: PHP去掉html字符串标记显示纯文本
tags:
  - html
  - php
  - 字符串
  - 替换
  - 纯文本
url: 434.html
id: 434
categories:
  - 编程开发
date: 2009-10-21 23:03:14
---

使用这个函数strip_tags()可以很简单的去除掉html字符串中的标记，只显示纯文本信息。  

使用函数转换后，字符串中可能还包含nbsp之类的代码，可以使用字符串替换函数进行替换。  


```$str=str_replace(" "," ",$str);
```