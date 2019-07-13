---
title: Ubuntu升级安装firefox至新版本
tags:
  - firefox
  - linux
  - ubuntu
  - 安装
url: 812.html
id: 812
categories:
  - 互联网络
date: 2011-01-06 21:53:01
---

Ubuntu软件安装完成后会自动安装一个Firefox浏览器，遗憾的是这个Firefox版本通常较低，例如Ubuntu 9.04会安装Firefox 3.0，不过我们可以想办法下载最新的Firefox覆盖掉老版本Firefox，具体方法是，先上Firefox官方网站下载最新的Linux版本 Firefox，然后将其解压缩到某一个目录下，例如firefox目录，进入终端，到这个目录的父目录，执行下面的语句：  


```sudo cp -r firefox /usr/lib/firefox-3.6.13  
sudo mv /usr/bin/firefox /usr/bin/firefox.old  
sudo ln -s /usr/lib/firefox-3.6.13/firefox /usr/bin/firefox-3.6.13  
sudo ln -s /usr/bin/firefox-3.6.13 /usr/bin/firefox 
```

之后就可以将Firefox成功替换为最新的Firefox 3.6.13版本，未来的Firefox更新也可以使用这种方法。  

Ubuntu软件安装Firefox的Flash问题  

经过我的实际测试，Ubuntu自动安装的Flash插件swfdec存在很多问题，在Firefox中，很多网页的Flash无法显示，包括Google音乐和开心网等，因此建议使用下面两条语句将其卸载。  

sudo apt-get remove swfdec-mozilla  
sudo apt-get remove swfdec-gnome 

之后可安装官方的Adobe Flash Player的Linux版，下载地址是： http://get.adobe.com/flashplayer/安装完成后，还要解决中文乱码问题，解决方法是执行下面语句：  

sudo cp /etc/fonts/conf.d/49-sansserif.conf /etc/fonts/conf.d/49-sansserif.conf.bak  
sudo rm /etc/fonts/conf.d/49-sansserif.conf 
```

之后，Firefox的Flash就完全正常了，在Firefox中访问开心网等Flash网站，显示都正常。