---
title: 解决vmware tools系统托盘图标丢失
tags:
  - vmware
  - vmware tools
  - 图标
  - 系统托盘
url: 502.html
id: 502
categories:
  - 电脑医生
date: 2010-01-17 23:41:49
---

安装后了vmware tools之后少不了配置一下，之前一直都把不必要的服务统统取消掉了，vmware tools的系统托盘图标自然也取消了，可是当想要压缩磁盘时发现没有操作了，托盘图标没有了，在安装的vmware文件夹里找了半天，没有压缩相关的程序，有个VMwareTray.exe程序，应该是系统托盘图标，但是运行了没有反应，真是郁闷了。  

网上搜了几下，不得要领，算了还是自己解决吧。  

原来问题真的很简单，配置就在注册表里，找到这个分支  

HKEY\_CURRENT\_USER\\Software\\VMware, Inc.\\VMware Tools  

右边有个ShowTray键值，修改为1即可  

注销了再登陆就可以看到久违的vmware tools系统托盘图标了