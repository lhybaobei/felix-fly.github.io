---
title: 安装supesite修改文件属性目录
tags:
  - supesite
  - 属性
  - 目录
url: 370.html
id: 370
categories:
  - 互联网络
date: 2009-09-24 19:13:55
---

这个是来自官方的说法，使用ftp类管理软件，登陆远程服务器空间，修改下列文件夹的属性为777(Linux)，可读写(win)。  

./config.php  

./attachments/ (包括本目录、子目录和文件)  

./cache/ (包括本目录、子目录和文件)  

./channel/ (包括本目录、子目录和文件)  

./html/ (包括本目录、子目录和文件)  

./log/ (包括本目录、子目录和文件)  

./styles/ (包括本目录、子目录和文件)  

./model/ (包括本目录、子目录和文件)  

./data/ (包括本目录、子目录和文件)  

./uc_client/data/ (包括本目录、子目录和文件)  

关于目录权限更详细的修改方法请参考：[文件权限修改方法](http://faq.comsenz.com/viewnews-183)  

修改了文件夹属性才能正确安装supesite哦。