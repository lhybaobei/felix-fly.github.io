---
title: myeclipse中javascript文件中文乱码解决
tags:
  - JavaScript
  - myeclipse
  - UTF-8
  - 乱码
url: 190.html
id: 190
categories:
  - 编程开发
date: 2009-04-26 06:34:38
---

在js文件中包含中文的时侯，用myeclipse打开发现是乱码，之前是用utf-8编码保存的，myeclipse默认的字符编码是iso的，所以会出现乱码，将编码格式更改即可解决乱码。  

菜单window－preferences－general－content types，右边text下找到javascript一项把默认的字符集设置为对应的格式，这里设置为UTF-8，再打开js文件，中文已经正确显示了。  

同时也可把window－preferences－general－editors－text editors－spelling右面项的encoding改为UTF-8，默认为GBK。