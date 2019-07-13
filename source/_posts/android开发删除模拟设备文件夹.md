---
title: android开发删除模拟设备文件夹
tags:
  - android
  - android开发
  - DDMS
  - eclipse
  - 删除文件夹
url: 1042.html
id: 1042
categories:
  - 编程开发
date: 2011-10-11 21:13:43
---

进行android时，我们都会用到模拟设备来进行各种功能的开发测试。  

其中就包括在外部存储设备（如sdcard）中创建、删除文件等操作。  

在eclipse中android-sdk提供了一个管理工具--DDMS，通过DDMS可以很方便的查看设备的各种信息。  

通过DDMS操作sdcard中的文件也是再经常不过的事情了。但是这里就遇到了一个问题，在DDMS中可以正常删除文件，当选中一个文件夹的时候，删除的功能却无法使用，图标是灰色的，不可操作，这时为何呢？  

既然DDMS的图形界面无法删除，那就用命令行吧。  

执行adb shell启动shell之后，使用rm命令来删除文件夹即可。例如删除sdcard路径下的hello文件夹  

命令操作如下：


```adb shell
cd /sdcard
rm -r hello
```