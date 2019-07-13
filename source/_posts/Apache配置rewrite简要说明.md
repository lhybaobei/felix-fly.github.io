---
title: Apache配置rewrite简要说明
tags:
  - apache
  - rewrite
  - 伪静态
  - 服务器
url: 780.html
id: 780
categories:
  - 互联网络
date: 2010-12-23 22:15:09
---

配置apache服务器，启用rewrite功能来实现url地址的伪静态，有利于SEO。  

以下是几点简单的说明  

首先在httpd.conf文件中启用rewrite模块，如果已经启用可忽略此步

LoadModule rewrite_module modules/mod_rewrite.so

接着在虚拟主机配置中添加

Options Indexes FollowSymLinks
AllowOverride all

然后在虚拟目录下建立.htaccess文件，下面是一个简单的文件例子：

RewriteEngine on
RewriteRule category-(.*)-post-(.*)\.html ?category=$1&post=$2

这条规则可以实现静态地址到动态地址的映射 静态URL

/category-book-post-1.html

动态URL

/?category=book&post=1

rewrite的规则是比较简单的，多研究一下可以实现任何你想要的。