---
title: titanium开发设置android访问权限
tags:
  - android
  - android开发
  - titanium
  - 手机开发
  - 权限设置
url: 1040.html
id: 1040
categories:
  - 编程开发
date: 2011-10-11 20:59:37
---

使用android-sdk进行开发，设置权限是很容易的，修改配置文件就可以了。  

对于使用titanium进行android应用的开发时，也遇到了需要设置android访问权限的问题，原来也是很简单的，只是文件不同而已。  

在tiapp.xml文件中android配置项中添加  

```xml  

\\n```  

例如添加录音和外部存储设备写权限  

```xml  

\\n```  

关于这个文件的更多配置项可以参考官方文档  

[http://developer.appcelerator.com/doc/mobile/android-custom-androidmanifest](http://developer.appcelerator.com/doc/mobile/android-custom-androidmanifest)