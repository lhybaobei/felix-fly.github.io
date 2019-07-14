---
title: 解决wordpress自动升级及安装插件无法完成
tags:
  - wordpress
  - 插件
  - 自动升级
url: 484.html
id: 484
categories:
  - 互联网络
date: 2009-12-11 20:47:13
---

之前wordpress放在别的空间的时候，有新版本升级和安装插件的时候一键就搞定了，很是方便，最近换到vps上，一切都是自己配置的，今天安装一个插件的时候要求输入ftp信息，网上搜了一下，原来是php脚本执行者和wordpress的文件所有者不同才会有这个提示，解决方法如下：  

chown -R www wordpress  

将wordpress的所有者改为www用户组，这样就可以自动完成升级了，呵呵。