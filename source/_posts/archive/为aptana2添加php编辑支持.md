---
title: 为aptana2添加php编辑支持
tags:
  - aptana
  - eclipse插件
  - pdt
  - php
  - php插件
url: 921.html
id: 921
categories:
  - 编程开发
date: 2011-06-13 22:45:28
---

aptana3包含了php编辑器，使用了一下，觉得格式化效果不好，同时不再支持pdt了，于是还是打算使用aptana2。  

在aptana2中可以安装pdt插件，但是也不是很好用。  

对比使用了几个插件，个人比较喜欢下面的这个。  

aptana php plugin 1.1  

优点有：  

可以比较好的显示html/javascript/php混合的代码，格式化也没有乱作一团。  

可以语法高亮，语法提示有待验证，总体满意。  

安装方法：  

使用在线安装，安装地址为

http://update.aptana.com/update/php

，选择Aptana PHP 1.1安装即可。  

需要注意的是，如果安装了Eclipse PDT插件需要卸载，否则aptana php plugin可能无法正常工作。  

附上一段英文原版的安装说明  

> From the Help menu, click on Install New Software…  
>   
> add the Aptana PHP plugin update site. Click on the Add… button and type the url http://update.aptana.com/update/php  
>   
> Choose the Aptana PHP 1.1 and install it. After restarting Studio, the Aptana PHP plugin will be installed and your php files will be handled by it.  
>   
> As you can see on the Plugins Manager, Aptana PHP 1.1 is installed (the Duplicate location warning appears because I typed the url again for this tutorial).  
>   
> I’ve you already installed Eclipse PDT, make sure you remove it, or your php files won’t be handled by Aptana PHP.