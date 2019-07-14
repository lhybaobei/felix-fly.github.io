---
title: wordpress升级安装插件出现http错误
tags:
  - api
  - http错误
  - wordpress
  - 升级
  - 插件
url: 1152.html
id: 1152
categories:
  - 互联网络
date: 2011-12-21 23:51:04
---

之前使用wordpress一直是很正常，后来就发现akismet经常出现无法连接服务器，造成评论不能自动审核。  

再后来，使用自动更新插件，升级wordpress版本就遇到了这样的错误：  

> 在向 API 发送请求时发生了一个 HTTP 异常错误

其中有一种原因是网络请求超时，修改方法也是参考自网络，超时时间不一定要设置很大，飞尘此处将原来的5改为10，基本上没有再出现以上的错误消息。  

修改wp-includes/class-http.php文件中的第220行（这个行数对于不同的版本可能不一定相同，不去纠结它）：  

‘timeout’ => apply_filters( ‘http_request_timeout’, 5)

修改其中的5即可，这个5是请求时间，根据个人情况自行增加。  

对于vps或者拥有控制权的独立主机，可以配合下面的方法：  

编辑/etc/reslov.conf文件，飞尘这里本身就没有这个文件的  

> nameserver 8.8.8.8 nameserver 8.8.4.4

设置dns服务器，上面是以google的为例。