---
title: vmware安装linux客户机共享目录/mnt/hgfs为空
tags:
  - linux
  - ubuntu
  - vmware
  - 共享
url: 1221.html
id: 1221
categories:
  - 编程开发
date: 2013-04-13 20:16:49
---

由于文件的搜索功能需要调用linux命令来实现，在现有windows平台下就无法测试了，于是不得不开个linux的虚拟机来调试。  

在vmware中安装了ubuntu12.04，安装好了tools，但是发现设置共享目录时遇到个小问题。  

按照之前客户机为windows的情况操作，宿主机设置好共享后客户机就可以看到了，但是linux似乎有点不太一样。  

对于linux而言，宿主机的共享目录应该出现在/mnt/hgfs目录下，但是刷新了几下依然看不到，郁闷哪。  

sudo apt-get install open-vm-dkms  

会提示一些配置先Y，在N、N、N......下去  

共享禁用再启用就可以刷新看到共享目录了