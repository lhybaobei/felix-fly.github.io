---
title: android开发为模拟器添加sdcard设备
tags:
  - android
  - android开发
  - eclipse
  - sdcard
  - 模拟器
url: 1032.html
id: 1032
categories:
  - 编程开发
date: 2011-09-15 21:09:40
---

android开发中，模拟器是最经常使用到的了。而一般做应用开发中，都会需要存储一些资料内容等到外部文件，也就是android系统的外部存储设备。  

此时就需要为模拟器添加sdcard设备，以方便程序测试调试。  

通过命令行程序cmd定位android-sdk/tools目录，飞尘这里的路径是：  

E:\Android\android-sdk\tools

在此路径下执行命令  

mksdcard 1024M sdcard.img

将创建一个大小为1G的sdcard设备，容量大小可依据个人需要自行调整。  

如果遇到下面的错误提示：  

> Failed to push items null

可能是eclipse已经打开，此时需要重启下eclipse即可。