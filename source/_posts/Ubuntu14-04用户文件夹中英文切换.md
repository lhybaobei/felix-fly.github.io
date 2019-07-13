---
title: Ubuntu14.04用户文件夹中英文切换
tags:
  - ubuntu
  - 中文
  - 切换
  - 文件夹
url: 1297.html
id: 1297
categories:
  - 电脑医生
date: 2014-08-24 10:57:20
---

安装ubuntu14.04时选择了中文，装好后用户文件夹为中文，在终端操作时有些不太方便，于是需要切换为英文的命名方式。  

切换方法很简单，打开终端，先修改为英文环境：  

export LANG=en_US

然后再输入  

xdg-user-dirs-gtk-update

会弹出一个对话框，可以看到中文文件夹会被修改为对应的英文文件夹，选择确认  

最后再恢复为中文环境：  

export LANG=zh_CN