---
title: apache支持mht类型文件
tags:
  - apache
  - html
  - mht
  - ppt
url: 1261.html
id: 1261
categories:
  - 编程开发
date: 2014-04-05 13:18:41
---

ppt文件另存为单个网页mht类型文件，直接使用ie打开该类型文件没有问题。放到服务器（apache）上之后，使用iframe嵌入该文件，浏览器无法正常显示。  

因为apache默认是不支持mht文件格式的，我们需要手动添加一下。  

打开apache安装目录下的conf/mime.types文件，找到这行  

> message/rfc822 eml mime

在后面添加mht  

> message/rfc822 eml mime mht

可能apache的版本不一样，message/rfc822后面的内容有所不同，只要在原有的基础上加上mht就可以了。  

保存文件，重启apache后，访问mht文件就正常了。