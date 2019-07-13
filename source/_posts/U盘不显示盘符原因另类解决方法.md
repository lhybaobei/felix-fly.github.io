---
title: U盘不显示盘符原因另类解决方法
tags:
  - u盘
  - 不显示
  - 盘符
  - 资源管理器
url: 570.html
id: 570
categories:
  - 电脑医生
date: 2010-04-08 16:51:34
---

今天终于把u盘搞定了，按照之前整理的[U盘无法显示盘符原因总结](http://flyash.itcao.com/post_569.html "U盘无法显示盘符原因总结")方式都不起作用，网上再搜，基本上不外乎那几种，飞尘这里的问题看来很麻烦啊。  

插入U盘，打开我的电脑或者资源管理器都看不到盘符，看到有人说虚拟光驱有影响，我的另外一台电脑安装着daemon没有问题，怕是版本问题，于是重新换成4.30版的，重启了好几次，接上u盘还是问题依旧，所以不是虚拟光驱的问题。  

看来问题只有自己解决了，在虚拟机vmware里的windows xp下u盘一切正常，和外面的系统对比了一下服务设置什么的，都是一样的，这个系统问题还真是麻烦，查看系统日志，错误也是一样的

> RSM 无法加载在库 *** USB Device 的驱动器 Drive 0 中的媒体。  
>   
> 有关更多信息，请参阅在 http://go.microsoft.com/fwlink/events.asp 的帮助和支持中心。

错误来源：Removable Storage Service 事件ID：111  

之前按照这个错误也找了半天未果，问题也不在这里。  

偶然想起资源管理器不就是那个桌面explorer.exe吗，是不是又是它的问题啊，查看虚拟机中和主机中文件属性，大小不一致，于是把虚拟机中的explorer.exe复制出来，先复制到主机的c盘根目录下，替换文件需要把桌面进程结束掉，在任务管理器中结束explorer.exe，新任务打开cmd，复制文件到c:\\windows替换


```copy c:\exeplorer.exe c:\windows\
```

提示是否覆盖，y回车即可，然后新任务打开explorer.exe，到我的电脑中一看，u盘的盘符乖乖的在那里了，原来都是桌面惹的祸啊。  

与此同时，原来光驱和虚拟光驱的图标是cd的样子，现在变成DVD的图标了（系统本来就是DVD的光驱），还是一箭双雕，呵呵。  

ps：飞尘的系统是windows xp的，这里顺便把explorer.exe文件也贴一下，方便没有虚拟机的朋友，如果遇到与飞尘一样的问题，可以尝试一下这个方法哦。  

[下载explorer.exe文件](https://res.cloudinary.com/flyash/raw/upload/v1562834244/itcao/explorer_m6kqew.zip)