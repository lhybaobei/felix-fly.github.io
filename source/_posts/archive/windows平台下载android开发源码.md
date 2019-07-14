---
title: windows平台下载android开发源码
tags:
  - android开发
  - android源码
  - autogit
  - eclipse
  - windows
url: 1037.html
id: 1037
categories:
  - 编程开发
date: 2011-09-21 11:10:51
---

android官方给出的源码下载都是在linux平台下，然而在windows平台下却很不方便下载android的源码。  

这里下载源码是便于在eclipse中调试程序，不是重新编译android的源码，如果需要编译可能需要更多的操作。  

首先需要安装git环境，在Windows下可安装msysgit  

[http://code.google.com/p/msysgit/](http://code.google.com/p/msysgit/)  

本文安装到

E:\msysgit

下  

在该目录下运行

git-cmd.bat

后，会自动打开一个命令行窗口  

定位到要存放android源码的目录，此处为  

E:\Android\android-sdk\source

将下载脚本

autogit.sh

放在该目录下  

然后执行  

sh autogit.sh

脚本文件在这里  

[下载autogit.sh](https://res.cloudinary.com/flyash/raw/upload/v1562817466/itcao/autogit_phzwzg.zip)  

英文好点的可以去这里看下  

[http://bradchow.wordpress.com/2009/01/20/get-android-source-code-in-m-windows/](http://bradchow.wordpress.com/2009/01/20/get-android-source-code-in-m-windows/)