---
title: U盘无法显示盘符原因总结
tags:
  - u盘
  - 无法显示
  - 盘符
url: 569.html
id: 569
categories:
  - 电脑医生
date: 2010-04-07 23:04:53
---

最近不知道是如何搞的U盘接到电脑上后，就是不出盘符，右下角的小图标已经出来了，u盘是正确识别的，只是资源管理器中没有可移动磁盘的盘符，使用盘符路径（如H:）访问提示找不到文件。不过使用winrar或者7zip的文件管理器可以看到盘符，也可以正常访问，不知道问题出在哪里，上网搜索一番，大致以下几个原因：  

1.主板usb设备被禁用  

在CMOS设置里USB设备被禁用，这样U盘插到电脑上无法识别。  

2.U盘不格式不正确  

一般的U盘是使用HD（硬盘FAT16）格式，如果使用U盘制作启动盘可能造成U盘格式不正确。可以使用PQ、PPM等硬盘分区软件修改U盘格式； 3.usb移动存储设备被禁用，打开注册表，找到下面键值


```[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\usbehci] 
"start"=dword:00000003
```

4.驱动器被隐藏，打开注册表找到


```[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer] 
```

右侧窗口如存在NoDrives，删除之，若需要设置隐藏驱动器，可以查找飞尘之前的一篇文章  

5.系统分派盘符出错  

控制面板中找到计算机管理-磁盘管理，为u盘设置盘符  

可能还有其它原因未能一一列出，后续继续补充。