---
title: 又一个linux服务器web压力测试工具http_load
tags:
  - http_load
  - linux
  - web
  - 压力测试
  - 服务器
url: 556.html
id: 556
categories:
  - 互联网络
date: 2010-03-29 00:51:30
---

之前使用了apache的ab和webbench，都各有特点，只是测试自己的vps时200个并发时返回成功的很少，同时访问网站是可以打开的，觉得可能是不是自己系统这里网络链接造成的，又找找其它的测试工具，看到了这个http_load，下载安装


```wget http://www.acme.com/software/http_load/http_load-12mar2006.tar.gz
tar -zxvf http_load-12mar2006.tar.tar
cd http_load-12mar2006
mkdir -p /usr/local/man/man1
make && make install
http_load -p 100 -s 60 urllist
```

默认的安装目录在/usr/local/man/man1，需先建立，否则安装时报错，或者自己编辑Makefile文件，修改安装目录  

同时建立urllist文件，包含需要测试url列表，一行一个，务必不要包含空行，否则执行时报unknow protocol -错误  

参数p设置并发连接数，s设置连接时间  

可以参考官方的例子 [http://www.acme.com/software/http_load/](http://www.acme.com/software/http_load/)