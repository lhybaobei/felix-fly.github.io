---
title: apache虚拟主机vhost配置样例
tags:
  - apache
  - vhost
  - 虚拟主机
  - 配置
url: 903.html
id: 903
categories:
  - 编程开发
date: 2011-06-01 21:00:56
---

不记得自己之前是不是已经记录过了，反正是没有存到大脑里，每次需要配置apache虚拟主机的时候，还是要查找，为啥没有那过目不忘的本领呢？~~  

俗话说，好记性不如烂笔头，那么好吧，就再记一次，便于以后查阅。  

这里只是一个简单的配置样例。  

关于apache的更多配置请自行查阅。  

apache虚拟主机vhost配置样例如下：  

```txt  

ServerName www.domain.com ServerAlias www.domain.com DirectoryIndex index.html index.php  

DocumentRoot "D:\\some-directory" Allow from all Options Indexes FollowSymLinks AllowOverride all  

#子目录 Alias /sub "D:\\another-directory" Allow from all  

#反向代理，如配置solr指向另外一台服务器 ProxyPass /solr http://www.other.com/solr ProxyPassReverse /solr http://www.other.com/solr  

ErrorLog "logs/error.log" CustomLog "logs/access.log" common  

\\n```