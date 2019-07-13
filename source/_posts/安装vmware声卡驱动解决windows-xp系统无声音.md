---
title: 安装vmware声卡驱动解决windows xp系统无声音
tags:
  - vmware
  - windows xp
  - 声卡驱动
  - 无声音
url: 503.html
id: 503
categories:
  - 电脑医生
date: 2010-01-18 21:13:53
---

在vmware里安装了windows xp系统，也安装了vmware tools，但是奇怪的是系统还是没有声音，总是搞的主板嘀嘀个不停，很是让人讨厌。  

在tools工具的安装镜像windows.iso里也没有发现声卡驱动文件，xp系统自动安装的声卡驱动似乎无效，虽然设备管理器里显示正常，但是控制面板中设置声音选项时无声音设备。  

网上搜索vmware声卡驱动也没有找到好的结果，从Creative官网下载那个声卡驱动无法安装，提示无适合的设备。  

于是又按照设备管理器里的Creative ES1371搜索驱动，这次下了xp.exe，安装没有报错，但是安装完后提示重启，确定后等了好久不见有反应，于是不得不手动重启，结果重启了还是没装好驱动。不甘心啊，用7zip打开那个xp.exe文件，看到是有声卡驱动文件的，于是提取出来，放到宿主机共享文件里，到虚拟机客户系统里，从设备管理器处更新声卡驱动，手动选择共享文件驱动文件所在路径，几秒钟的安装文件之后，再次控制面板设置声音选项，大功告成，声音终于出来了，嘿嘿。  

为了方便朋友们操作，飞尘这里把提取出来的声卡驱动文件贴在下面，文件放在live的共享里，下载可能有点不太方便，请大家见谅。  

[点此下载vmware声卡驱动for windows xp](http://cid-1f2c5513fd9f3c44.skydrive.live.com/self.aspx/%e9%ad%85%e8%81%9a%e8%8b%8f%e5%b7%9e/vmware%5E_xp%5E_%e5%a3%b0%e5%8d%a1%e9%a9%b1%e5%8a%a8.rar)  

看来遇到这个问题的朋友还很多，于是就把这个声卡驱动文件做下调整，现在在飞尘的博客里就可以直接下载了，觉得live不方便的朋友可以直接下载了，同时对于live的下载依然存在。  

[vmware声卡驱动for windows xp](/wp-content/uploads/vmware声卡驱动for-windows-xp.zip)  

------------2012/04/13更新------------  

附上一个虚拟机设置的截图  

![](https://res.cloudinary.com/flyash/image/upload/v1562815213/itcao/0011_oisyrp.png alt= "虚拟机设置")