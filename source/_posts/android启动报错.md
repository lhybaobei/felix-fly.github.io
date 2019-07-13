---
title: android启动报错
tags:
  - android
  - android-sdk
  - android开发
  - eclipse
  - Windows7
url: 1027.html
id: 1027
categories:
  - 编程开发
date: 2011-09-12 21:10:10
---

按照官方的例子操作，启动android虚拟设备时报错  

> \[2011-08-01 11:41:27 - Emulator\] invalid command-line parameter: Files. \[2011-08-01 11:41:27 - Emulator\] Hint: use '@foo' to launch a virtual device named 'foo'. \[2011-08-01 11:41:27 - Emulator\] please use -help for more information

折腾了半天，找到了原因，原来是安装路径包含了空格  

android的sdk在Windows 7下默认的安装路径

C:\Program Files\Android\android-sdk

对于64位系统

C:\Program Files (x86)\Android\android-sdk

解决方法：  

修改eclipse中android SDK location为

C:\PROGRA~1\Android\android-sdk

对应于64位

C:\PROGRA~2\Android\android-sdk

或者将android-sdk移至不包含空格的目录下，如：

D:\Android\android-sdk

同时修改eclipse中android SDK location。