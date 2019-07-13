---
title: 使用Notepad++替换系统自带的记事本
tags:
  - notepad++
  - 脚本
  - 记事本
url: 590.html
id: 590
categories:
  - 电脑医生
date: 2010-05-08 22:37:49
---

看了notepad++之后，才发现原来系统自带的记事本功能是如此的简陋，这么好的东西一定不能放过拉——马上替换掉系统的记事本，让它下岗待业去吧。  

不过替换起来还是小有一点麻烦的，总结了朋友们的方法，整理了一下，记录下来，方便以后需要。  

下载[notepad++安装版](http://notepad-plus.sourceforge.net/uk/download.php)或者绿色解压版，此处有些不同，后面详细介绍。  

安装或解压程序，本文安装（解压）至D:\\Notepad++  

下面的方法是引用官方的，英文请参考上面给出的下载页面中的Notepad Replacement说明  

1.下载引导程序[Notepad++ launcher](http://notepad-plus.sourceforge.net/commun/misc/NppLauncher.bin.zip)  

2.备份系统原始的记事本程序notepad.exe  

3.安装下面的顺序复制下载到的notepad.exe至以下路径


```C:\WINDOWS\ServicePackFiles\i386
C:\WINDOWS\System32\dllcache
C:\WINDOWS\System32
C:\WINDOWS
```

4.使用安装程序，此步骤可以省略；对于解压的情况，需打开注册表，定位到HKEY\_LOCAL\_MACHINE\\SOFTWARE  

新建项Notepad++  

修改其右侧“默认”的值为之前程序解压至的目录，本文为D:\\Notepad++  

==此时，系统的记事本已经替换为notepad++了，赶快试一下吧。  

为了方便，写了个小脚本，使用批处理替换文件


```@echo off
copy /y notepad.exe C:\WINDOWS\ServicePackFiles\i386
copy /y notepad.exe C:\WINDOWS\System32\dllcache
copy /y notepad.exe C:\WINDOWS\System32
copy /y notepad.exe C:\WINDOWS
echo. & pause
```

将以上代码保存为*.bat文件，放在与下载到的Notepad++ launcher中的notepad.exe相同的目录下，执行即可。同时也把它贴在下面吧，方便朋友们使用~  

[替换系统记事本脚本](https://res.cloudinary.com/flyash/raw/upload/v1562834160/itcao/Notepad2_nulnlt.zip)