---
title: 安装ipv6出现错误
tags:
  - ipv6
  - 安装
  - 错误
url: 384.html
id: 384
categories:
  - 电脑医生
date: 2009-09-25 08:30:50
---

命令行安装ipv6  

ipv6 install  

出现错误如下：  

Installing... Failed to complete the action. Error 0x800704b8  

解决方法：  

先运行esentutl /p %windir%\\security\\Database\\secedit.sdb 再运行ipv6 install  

安装成功，呵呵