---
title: apache虚拟主机子目录访问权限forbidden原因
tags:
  - apache
  - forbidden
  - 子目录
  - 虚拟主机
url: 715.html
id: 715
categories:
  - 编程开发
date: 2010-09-20 21:26:35
---

使用apache配置虚拟主机，访问子目录时出现403 forbidden错误，赶紧查找原因，原来是配置文件惹的祸。  

在虚拟主机配置中，Alias目录结尾不能加“/”，就是这个“/”造成的子目录禁止访问错误  

下面给出一个例子： ```TXT  

ServerName a.com  

DocumentRoot D:/htdocs Allow from all  

Alias /abc "D:/abcd"  

ErrorLog "error.log"  

\\n```