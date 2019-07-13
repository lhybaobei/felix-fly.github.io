---
title: 设置ubuntu使用root帐号登录
tags:
  - root
  - ubuntu
  - 登录
url: 852.html
id: 852
categories:
  - 电脑医生
date: 2011-03-09 21:39:49
---

之前在虚拟机里安装了ubuntu，使用的过程中发现默认登录的帐号不是root，一般操作没有影响，但是在进行安装软件等操作时权限不够，需要root管理员权限才行。  

虽然可以临时输入root密码来完成操作，但是如果这样的操作较多，总是要求权限就显得有些繁琐了。  

因为是在虚拟机中使用，主要用于测试，并非常规使用，不需要考虑这么多的安全性，于是考虑直接以root帐号登录来使用系统。  

切换使用root登录失败，经查原来是设置的原因，可以采取下面的方法来达到目的。  

通过修改/etc/gdm/gdm.conf文件，就可以使用root帐号直接登陆了  

AllowRoot＝false

改为

AllowRoot=true

重启就ok  

如果想重新设置root的密码，则执行  

sudo passwd root

会提示输入新的密码  

当然如果出于安全的考虑，想要禁用root帐号，可以执行下列的命令：  

sudo passwd -l root