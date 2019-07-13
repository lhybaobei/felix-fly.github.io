---
title: 安装discuz论坛修改文件属性目录
tags:
  - discuz
  - 属性
  - 目录
  - 论坛
url: 373.html
id: 373
categories:
  - 互联网络
date: 2009-09-24 19:20:33
---

文件目录参考自官方，安装时linux主机修改属性为777，Win 主机请设置 internet 来宾帐户可读写属性。  

./config.inc.php  

./attachments  

./forumdata  

./forumdata/cache  

./forumdata/templates  

./forumdata/threadcaches  

./forumdata/logs  

./uc_client/data/cache  

关于目录权限修改可以参考：[http://faq.comsenz.com/viewnews-183](http://faq.comsenz.com/viewnews-183)