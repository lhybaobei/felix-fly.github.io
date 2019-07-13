---
title: 忘记MySQL密码的解决办法
tags:
  - mysql
  - 密码
url: 289.html
id: 289
categories:
  - 加密解密
date: 2009-07-31 03:33:34
---

步骤如下：  

1、停止mysql服务。可以打开命令行窗口，用命令停止mysql服务：Net stop mysql  

2、启动mysql，一般到mysql的安装路径，找到mysqld-nt.exe，运行：  

mysqld-nt --skip-grant-tables

当前窗口将会停止。  

3、另外打开一个命令行窗口，进入MYSQL的安装位置下BIN目录，运行mysql  

4、输入如下命令：  

>use mysql
>update user set password=password("12345") where user="root";
>flush privileges;
>exit

6。用Ctrl+Alt+Del，找到mysqld-nt的进程杀掉它，在重新启动mysql-nt服务，就可以用新密码登录了。