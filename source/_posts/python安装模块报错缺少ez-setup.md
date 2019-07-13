---
title: python安装模块报错缺少ez_setup
tags:
  - easy_install
  - python
  - windows
  - 安装
  - 模块
  - 脚本
url: 1156.html
id: 1156
categories:
  - 编程开发
date: 2011-12-23 20:10:40
---

在windows环境下使用python安装模块时，遇到这样的错误，说是缺少ez_setup。  

这个问题是在安装pygeoip时遇到的，pygeoip是一个用纯python实现（不依赖c库）的查询ip对应国家、城市等等的模块，项目地址：  

[http://code.google.com/p/pygeoip/](http://code.google.com/p/pygeoip/)  

具体的错误消息如下：  

> ImportError: No module named ez_setup

而安装是手动下载了模块，然后使用python setup.py install安装的，并没有直接使用easy_install pygeoip，不过遗憾的是安装脚本里却使用了:-(  

在Windows平台下python默认情况是没有easy_install这个模块的，不过从下面这个地址下载对应python版本的setuptools安装即可解决此问题。  

[http://pypi.python.org/pypi/setuptools#files](http://pypi.python.org/pypi/setuptools#files)  

本文下载使用的是  

> setuptools-0.6c11.win32-py2.7.exe