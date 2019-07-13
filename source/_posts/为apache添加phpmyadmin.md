---
title: 为apache添加phpmyadmin
tags:
  - apache
  - php
  - phpmyadmin
url: 163.html
id: 163
categories:
  - 互联网络
  - 电脑医生
date: 2009-04-09 02:31:51
---

前面文章已经搭建好了apache+php+mysql环境,本文添加phpmyadmin,方便的数据库连接管理程序.  

[下载phpmyadmin3.1.3](http://www.phpmyadmin.net/home_page/downloads.php "phpmyadmin官方下载地址")  

下载多语言支持的压缩包,解压至apache下htdocs目录下,目录名改为phpmyadmin,就是去掉后面版本什么的,太长了,也可自由更改为其它名称.  

进入phpmyadmin目录,将config.sample.inc.php文件复制一份,改名为config.inc.php,然后打开文件,修改这一行$cfg\['blowfish\_secret'\] = '';在引号中间随便输入写字符,这里输入localhost,就变成$cfg\['blowfish\_secret'\] = 'localhost';保存文件.  

浏览器访问[http://localhost/phpmyadmin/](http://localhost/phpmyadmin/ "打开phpmyadmin"),输入用户名和密码登录.