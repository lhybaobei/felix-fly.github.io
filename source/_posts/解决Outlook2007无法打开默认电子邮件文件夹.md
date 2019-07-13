---
title: 解决Outlook2007无法打开默认电子邮件文件夹
tags:
  - outlook
  - 电子邮件
  - 通讯簿
  - 黑莓
url: 754.html
id: 754
categories:
  - 电脑医生
date: 2010-11-01 22:46:36
---

由于要用outlook来修改黑莓的通讯录，于是就随便设置了一下outlook账户配置，结果乱填一气，造成outlook没法正常打开。  

心想删掉这个用户配置重新设置一下就可以了吧，找了半天没找到形似配置的文件，想必又是写进注册表了吧，ms的东西一贯喜欢这样，什么时候也绿色环保一下多好。  

注册表自己就懒得翻了，上网搜搜吧，据说是在这个路径下：

HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows Messaging Subsystem\Profiles

懒得去验证了，因为有更好的方法：  

运行里直接

outlook /importprf .\.prf

就提示配置什么的了  

当然能直接在运行里启动outlook是依赖于环境变量的，不一定都有效，如果找不到命令什么的不能运行，可以从cmd中切换到outlook的安装目录，然后再执行就ok了。