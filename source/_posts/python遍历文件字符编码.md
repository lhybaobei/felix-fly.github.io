---
title: python遍历文件字符编码
tags:
  - ascii
  - python
  - UTF-8
  - 文件
  - 编码
url: 1132.html
id: 1132
categories:
  - 编程开发
date: 2011-12-02 20:49:15
---

使用python写了一个列出某目录下所有文件的文件名、创建时间、修改时间和访问时间的脚本，运行时报错：  

> SyntaxError: Non-ASCII character '\\xe5' in file

原来python默认情况下文件是用ASCII编码的，需要在文件开头加以声明  

> #coding=utf-8

或者这样也可以  

> \# -*- coding: UTF-8 -*-

运行脚本不再报错。  

顺便把遍历文件的代码也贴下，方便以后自己查阅：  

```python  

#coding=utf-8 import os  

pwd = os.path.abspath(os.path.dirname(\_\_file\_\_))  

def show(): dir = os.path.join(pwd, 'cache') if not os.path.exists(dir): print 'folder not exist' return \[\] list = os.listdir(dir) result = \[\] for line in list: filepath = os.path.join(dir, line) if os.path.isfile(filepath): info = os.stat(filepath) ctime = info.st\_ctime mtime = info.st\_mtime atime = info.st_atime o = {} o\['ctime'\] = ctime * 1000 o\['mtime'\] = mtime * 1000 o\['atime'\] = atime * 1000 o\['filename'\] = line result.append(o) print result return result \\n```