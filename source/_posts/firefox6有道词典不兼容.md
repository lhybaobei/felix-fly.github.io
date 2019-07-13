---
title: firefox6有道词典不兼容
tags:
  - firefox
  - 兼容
  - 升级
  - 插件
  - 有道词典
url: 1063.html
id: 1063
categories:
  - 电脑医生
date: 2011-11-02 20:38:30
---

虽然现在firefox已经升级到了7，但是这篇日志还是有必要发出来的，要不辛苦的记录岂不浪费了。看来以后要勤奋一些，及时记录，及时整理，及时发布。  

在升级了firefox到6.0版本后，启动时报错：  

> TypeError: Components.classes\[cid\] is undifined

个人凭经验估计是插件不兼容造成的，经过逐个测试，最终找到了问题的所在。  

飞尘这里用的是英文版的，有问题的插件名称为：  

Youdao Word Capturer 1.1

在火狐官网附加组件中却搜不到，估计是安装有道词典时添加到火狐的。  

firefox升级太快，一般的插件是跟不上这种速度的，没办法只能将这个插件禁用了。在firefox的扩展管理中是无法卸载这个插件的，如果想删除，也不是没有办法的，打开注册表编辑器regedit，定位到下面的路径：  

HKEY_CURRENT_USER\Software\Mozilla\Firefox\Extensions

可以看到这个键  

dict@www.youdao.com

对应的值就是有道词典关于火狐的扩展插件位置，本文是这个样子的：  

C:\Program Files (x86)\Youdao\Dict4\\res\extensions\firefox

禁用或者删除了有道词典的插件后，火狐启动时不再报错，带来的问题就是在firefox中也无法使用有道的鼠标取词了。