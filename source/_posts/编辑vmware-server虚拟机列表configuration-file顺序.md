---
title: 编辑vmware server虚拟机列表configuration file顺序
tags:
  - configuration file
  - vmware
  - vmware tools
  - 虚拟机
url: 505.html
id: 505
categories:
  - 电脑医生
date: 2010-01-18 23:25:47
---

配置好了vmware server，导入了原来的虚拟机，一切ok，只是发现导入虚拟机后，生成了一个vm列表，包含vm name和configuration file，但是vm顺序不能调整，关闭了虚拟机之后，这个列表里还是存在，没法删除不需要的vm，在安装目录找了找没有找到保存列表的配置文件，又到注册表里搜了搜，还是没有，既然两个地方都没有应该就是在系统盘了。  

上网查找，果然在c盘里  

C:\\Documents and Settings\\All Users\\Application Data\\VMware\\VMware Server\\vm-list  

这个vm-list没有扩展名的文件，记事本或者其它文本编辑软件打开一看，果然在这里，马上调整一下顺序，删除不用的vm，重新打开vmware，删除的是没有了，但是调整的顺序没有改变，还是原来导入时的顺序，真是晕，也懒得想其它方法了，把顺序乱的都删除了，然后按顺序导入，ok，这样看上去比较舒服了:-)