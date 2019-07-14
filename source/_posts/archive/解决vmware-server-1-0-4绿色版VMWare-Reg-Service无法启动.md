---
title: 解决vmware server 1.0.4绿色版VMWare Reg Service无法启动
tags:
  - vmware
  - VMWare Reg Service
  - vmware server
  - 无法启动
  - 绿色版
url: 504.html
id: 504
categories:
  - 电脑医生
date: 2010-01-18 23:01:17
---

之前一直使用的是vmware workstation，突然心血来潮想试试vmware server，看名字似乎更强一些哦，呵呵，重要的是它还是免费的。  

最新的已经是2.0+了，不过看看好像文件很大，不想太费时下载，于是找了个低版本的先玩玩，找了这个VMWare Server 1.0.4绿色版，链接暂不贴出，请自行查找，如果需要的话也可以在此留言，我发给大家，或者看情况贴个地址，嘿嘿。  

绿色版是很好，解压到任意目录，运行那个绿化.bat就ok了，不过安装到最后的时候出现了错误提示，猜想可能会有问题，运行vmware一看，果然有问题，说是VMWare Reg Service服务无法启动，和安装时的提示一样，到系统服务里一看，是没有启动，手动启动出错，赶紧网上搜搜，原来问题很简单，是路径不对，解决方法如下：  

修改一下vmware安装目录下vmserverdRoot子目录下的init.pl文件即可，找到这段代码


```if( -d '%debugdir%' ) {
  $PREFIX_PATH = '%debugdir%';
} else {
  $PREFIX_PATH = 'C:\Program Files\VMware\VMware Server';
}
```

把原有的路径修改为vmware server所在的路径即可，本文改为d:\\vmware server  

再次启动VMWare Reg Service服务成功  

等有时间研究下绿化.bat，看能不能在安装时把这个路径自动修改好，呵呵。