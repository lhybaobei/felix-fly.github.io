---
title: titanium开发读取android外存设备文件
tags:
  - andriod应用
  - android
  - android开发
  - titanium
  - 外存设备
url: 1046.html
id: 1046
categories:
  - 编程开发
date: 2011-10-17 20:29:17
---

使用titanium开发android应用，遇到读取android外存设备文件的需求。  

例如读取项目本身包含的资源文件：  

var url = "sound/demo.mp3"

此时指定的路径为项目Resources下sound文件夹下的demo.mp3文件。  

如果需要读取设备外部存储设备中的文件，如在android系统下读取外部存储设备中的文件：  

var url = "file:///mnt/sdcard/sound/demo.mp3"

文件路径是以file://加文件绝对路径的形式表现的。  

这时可以创建一个音频对象，就可以播放了。  

```javascript  

var snd = Titanium.Media.createSound({ url: url, preload: true }); snd.play(); \\n```