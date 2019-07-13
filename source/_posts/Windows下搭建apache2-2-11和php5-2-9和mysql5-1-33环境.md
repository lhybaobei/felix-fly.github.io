---
title: Windows下搭建apache2.2.11和php5.2.9和mysql5.1.33环境
tags:
  - apache
  - mysql
  - php
  - windows
url: 160.html
id: 160
categories:
  - 互联网络
  - 电脑医生
date: 2009-04-09 02:19:32
---

首先下载相应软件  

[Apache2.2.11](http://httpd.apache.org/ "Apache官方下载")  

[php5.2.9](http://www.php.net/downloads.php "php官方下载地址")  

[mysql5.1.33](http://dev.mysql.com/downloads/ "mysql官方下载地址")  

为了安装方便这里都下载的是安装包,也可以下载压缩包手动配置.  

先来安装apache,主要就是自定义一下目录,本文安装到d:\\apache2.2下,如果没有出错的话,安装完成后,apache会自动运行,桌面右下角可看到绿色的小箭头,无法启动会对话框提示,可能是之前安装过apache,原来的配置文件导致出错.  

接下来安装mysql,路径设置为d:\\mysql,最后完成时设置用户名名及密码,这里可以在mysql官方网站下载mysql GUI Tools,方便数据库操作.  

最后安装php,先前的版本可能需要手动配置apache的httpd.conf文件,安装php5.2.9时会提示选择apache配置文件目录,安装程序会自动在httpd.conf文件末尾添加如下内容:  

#BEGIN PHP INSTALLER EDITS - REMOVE ONLY ON UNINSTALL ScriptAlias /php/ "D:/PHP/" Action application/x-httpd-php "D:/PHP/php-cgi.exe" PHPIniDir "D:/PHP/" LoadModule php5\_module "D:/PHP/php5apache2\_2.dll" PHPIniDir "D:/PHP/" LoadModule php5\_module "D:/PHP/php5apache2.dll" PHPIniDir "D:/PHP/" LoadModule php5\_module "D:/PHP/php5apache.dll" #END PHP INSTALLER EDITS - REMOVE ONLY ON UNINSTALL  

本文php安装在d:\\php下,故这里的路径会根据你安装位置不同而不同.  

这时我们重启apache会提示错误,原因就是上面的文件,我们需要注释掉重复的PHPIniDir "D:/PHP/" 只保留一行,前面添加#或者删除都可.这时apache正常启动.  

测试一下php环境,在apache的htdocs目录下建立文件test.php,内容输入<?php phpinfo(); ?>  

到浏览器访问一下看看是否ok.