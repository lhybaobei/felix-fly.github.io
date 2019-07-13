---
title: linux执行shell脚本，提示“没有那个文件或目录”
tags:
  - linux
  - shell
  - windows
  - 换行符
url: 1278.html
id: 1278
categories:
  - 编程开发
date: 2014-04-05 13:47:13
---

linux执行shell脚本，提示“没有那个文件或目录”  

终端直接cd /var正常 shell脚本中执行则报错  

原因是脚本是在windows平台下写的，换行符与linux不同，造成脚本不能正确执行。  

windows是CR+LF Unix/linux是LF Mac是CR