---
title: ubuntu服务管理工具
tags:
  - sysv-rc-conf
  - ubuntu
  - 服务
url: 1289.html
id: 1289
categories:
  - 电脑医生
date: 2014-08-24 10:44:31
---

ubuntu下的服务管理工具应该有很多的吧，个人才疏学浅就不一一罗列了，今天要说的是 sysv-rc-conf。  

sysv-rc-conf是ubuntu下的图形化服务管理工具，通过它我们可以很方便的修改配置开机启动项。  

提示没有该命令时需要先安装一下

sudo apt-get install sysv-rc-conf

安装后之后就可以很方便的使用了

sudo sysv-rc-conf

配置启动级别只需要在括号里选中（使用空格键），设置完成直接按q键就可以保存退出了 这里需要特别说明的一点是，已经删除的服务项还是会显示在列表了，让人看着很别扭，那该怎么删除呢？ 方法真的很简单哦，只要

sudo sysv-rc-conf -P

看看是不是已经清爽多了