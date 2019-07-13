---
title: ubuntu下xampp忘记mysql密码重置
tags:
  - mysql
  - ubuntu
  - xampp
  - 密码
url: 1283.html
id: 1283
categories:
  - 编程开发
date: 2014-05-07 21:32:06
---

之前在ubuntu 12.04里安装了xampp，设置了mysql数据库root密码，今天需要增加个数据库，发现忘记之前设置的密码是什么了。经过一番摸爬滚打，终于搞明白了，注意以下的操作都是以linux的root身份操作的，其它的未测试，目测只要权限允许应该没问题。  

先停止mysql

/opt/lampp/lampp stopmysql

接着这样启动mysqld

/opt/lampp/sbin/mysqld --skip-grant-tables &

会看到类似这样的输出

> 2014-04-29 10:54:43 25686 \[Note\] /opt/lampp/sbin/mysqld: ready for connections. Version: '5.6.16' socket: '/opt/lampp/var/mysql/mysql.sock' port: 3306 Source distribution on

此时光标可能会停在on后，没有回到提示符状态，那么就先敲一下回车，然后就回到命令提示符状态了。 接下来，就可以空密码root登录到mysql数据库了

/opt/lampp/bin/mysql -u root

赶紧设置为新的root密码吧

> mysql> use mysql; mysql> update user set password=PASSWORD("123456") where User='root'; mysql> flush privileges; mysql> quit

重启mysql

/opt/lampp/lampp stopmysql
/opt/lampp/lampp startmysql