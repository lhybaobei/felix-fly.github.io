---
title: 解决TightVNC无法连接Ubuntu14.04
tags:
  - TightVNC
  - ubuntu
  - 远程桌面
url: 1293.html
id: 1293
categories:
  - 电脑医生
date: 2014-08-24 10:51:44
---

使用TightVNC连接Ubuntu14.04远程桌面共享时报错，提示如下：  

> Error in TightVNC Viewer: No security types supported. Server sent security types, but we do not support any of their.

之前在用ubuntu12.04的时候是好好的，看来新版有些不同啊。  

于是搜索了一下，找到解决方案如下：  

1、安装dconf-editor  

sudo apt-get install dconf-editor

2、打开刚刚安装的dconf-editor，找到下面的配置路径  

> org > gnome > desktop > applications > remote-access

3、取消钩选 "REQUIRE-ENCRYPTION"属性  

好了，现在可以在windows下正常使用TightVNC来连接了