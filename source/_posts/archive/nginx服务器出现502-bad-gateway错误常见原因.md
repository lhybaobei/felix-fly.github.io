---
title: nginx服务器出现502 bad gateway错误常见原因
tags:
  - '502'
  - 502 bad gateway
  - nginx
  - 服务器
url: 532.html
id: 532
categories:
  - 互联网络
date: 2010-03-19 14:11:18
---

在vps上面搭建的lnmp已经使用很长一段时间了，前些日子出现过一次502 bad gateway错误，把服务器重启了一下就没问题了。刚才又出现了这个错误，重启服务器后还是如此，找来网上的方法实验了一下，效果不错，记录下来，方便以后查阅。  

1.FastCGI进程不够使用 执行命令

netstat -anpo | grep "php-cgi" | wc -l

查看当前FastCGI进程，如果接近设置数值，表示进程不够，需调整 编辑php-fpm.conf文件 设置

<value name="max_children">10</value>

2.执行超时，编辑文件nginx.conf，修改数值 fastcgi\_connect\_timeout 300; fastcgi\_send\_timeout 300; fastcgi\_read\_timeout 300;  

3.FastCGI缓冲不足，编辑文件nginx.conf，修改下面值 fastcgi\_buffer\_size 128k; fastcgi_buffers 10 128k;  

4.如果使用Proxy，可能缓冲不足，同样修改ginx.conf文件 proxy\_buffer\_size 32k; proxy_buffers 4 32k;  

502 bad gateway错误的原因很多，这里只是列举了几种常见的原因，有同样问题的朋友可以试试看。