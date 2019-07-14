---
title: android开发配置证书和地图key
tags:
  - android
  - android开发
  - eclipse
  - 地图key
  - 证书配置
url: 1030.html
id: 1030
categories:
  - 编程开发
date: 2011-09-14 21:40:05
---

按照android官方的文档，把几个小例子都做了一下。其中有个关于如何使用地图的例子。  

这里有几点关键的问题可能需要注意：  

1.生成证书文件  

飞尘是在eclipse中进行开发的，所以以eclipse为例：  

Eclipse->选中项目->右键->android tools->Export signed Application package

在cmd中使用keytool获得证书文件的MD5值  

keytool是jdk提供的一个工具，若提示命令无法识别，需在系统环境变量path中添加keytool所在路径，例如：  

D:\Java\jre\bin

如果是在debug模式下开发测试，可以直接使用android-sdk提供的证书文件  

keytool -list -alias androiddebugkey -keystore "C:\Users\flyash\.android\debug.keystore" -storepass android -keypass android

这时如果只有SHA1，看不到MD5，需要增加参数 -v 来显示详细信息  

keytool -list -v -alias androiddebugkey -keystore "C:\Users\flyash\.android\debug.keystore" -storepass android -keypass android

可以看到类似下面的显示内容：  

> 证书指纹: MD5: 24:63:59:52:51:4D:1C:7D:0E:4D:AB:B0:F6:6D:37:A9 SHA1: 23:D6:E7:92:B0:64:41:BD:60:0B:D0:86:52:D5:52:9C:BA:12:BD:18 SHA256: 1E:5D:13:AC:68:DD:5B:10:CF:90:F0:40:7F:27:16:6C:C0:31:65:EB:F1:5B:AC:60:7A:E7:7D:DA:89:07:F6:D4 签名算法名称: SHA256withRSA 版本: 3

2.关于注册map-api-key  

使用前面得到的md5值就可以去下面的地址申请地图api的key了  

[http://code.google.com/android/maps-api-signup.html](http://code.google.com/android/maps-api-signup.html)  

得到的debug模式地图key:

0Fo-cLI4oiZH7TwrBoC5DARKqF9Hlv2x8ijwTMQ

同时也可以看到下面这个key使用的例子：  

> Here is an example xml layout to get you started on your way to mapping glory: ```xml  
>   
> \\n```