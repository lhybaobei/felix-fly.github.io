---
title: mysql5配置文件导致的Incorrect integer value错误
tags:
  - Incorrect integer value
  - mysql
  - 配置文件
  - 错误
url: 482.html
id: 482
categories:
  - 电脑医生
date: 2009-12-09 22:46:09
---

之前备份过的mysql数据库，使用phpmyadmin导入后网站打开出现  

MySQL error #1366 - Incorrect integer value 后面是插入表操作  

网站和数据库都是之前正常使用时的备份，怎么会出错呢？赶紧搜搜，原来是与mysql5的sql-mode设置有关，在严格模式下对自动增长字段插入空值就出现了这个错误，解决也很简单  

打开mysql安装目录下的my.ini文件，搜索sql-mode，默认设置是这样的  

# Set the SQL mode to strict
sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"

把它注释掉，替换成下面这样就可以了  

sql-mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"

重启mysql，网站一切正常