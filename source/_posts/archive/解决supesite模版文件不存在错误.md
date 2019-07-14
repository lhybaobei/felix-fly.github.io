---
title: 解决supesite模版文件不存在错误
tags:
  - supesite
  - 模版
  - 错误
url: 380.html
id: 380
categories:
  - 互联网络
date: 2009-09-24 19:36:09
---

访问网站出现如下错误：  

Template file :  

D:\\web\\wwwroot\\templates\\\index.html.php  

Not found or have no access!  

按照官方解决方法：  

1、检查 ./templates/* 目录有没有可读写权限，Linux 服务器给 777 权限，Windows 给 Internet 来宾账户的读写权限。  

文件夹权限修改方法：[http://faq.comsenz.com/viewnews-183  

](http://faq.comsenz.com/viewnews-183)2、检查 data 目录有没有 system 目录，另查查看 cache 目录下面是否有 tpl 这个目录，如果都没有或者没有其中一个，到本地安装一个对应版本的 SupeSite，上传对应目录下的文件上去即可。  

记得上传要使用二进制：几种常见的FTP软件的二进制设置说明：[http://faq.comsenz.com/viewnews-373](http://faq.comsenz.com/viewnews-373)  

飞尘在迁移服务器的时候遇到这个问题，发现问题不在目录权限上，而是提及的第二点，是data目录下的system目录里少了文件，从原来的服务器上复制system下的文件上传至新服务器后，网站可以正常访问了。如果没有这些文件的备份，可以本地安装supesite，然后将本地的文件上传至服务器即可。