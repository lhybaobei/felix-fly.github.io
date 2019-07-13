---
title: 把vmware虚拟机最小化到系统托盘
tags:
  - vmware
  - 最小化
  - 系统托盘
  - 虚拟机
url: 501.html
id: 501
categories:
  - 电脑医生
date: 2010-01-17 23:25:54
---

vmware一直没有提供“最小化到系统托盘”的功能，任务条上的vmware比较碍眼。  

看到有位朋友的方法挺好的，试试看哦  

下载trayconizer软件，下载地址就不提供了，自行搜索  

解压后放到任意目录，如d:\\trayconizer  

新建或者修改vmware的快捷方式的目标  

d:\\trayconizer\\trayconizer.exe "d:\\VMware\\vmware.exe"  

换句话说就是在原有基础之前添加 d:\\trayconizer\\trayconizer.exe  

注意trayconizer.exe后面要有一个空格  

使用修改后的快捷方式打开的vmware，就可以最小化到系统托盘了。  

也可以将该工具用于其他程序哦