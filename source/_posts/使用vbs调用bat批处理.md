---
title: 使用vbs调用bat批处理
tags:
  - bat
  - vbs
  - 命令行
  - 资源管理器
url: 925.html
id: 925
categories:
  - 电脑医生
date: 2011-06-22 22:15:45
---

编写bat批处理文件的目标是自动执行这样的操作：  

**先结束explorer.exe进程，然后再重新打开此进程**  

飞尘将这个批处理文件命名为refresh.bat，文件内容如下  


```@echo off
taskkill /im explorer.exe /f
explorer.exe
exit
```

直接运行refresh.bat时，功能可以实现，但是会出现dos窗口且不能自己关闭，exit应该没用  

查了一下未果，换个角度，使用vbs文件调用bat文件，这样可以不显示命令行窗口。  

新建一个记事本文件，保存为refresh.vbs，在文件中加入如下代码：  


```Set shell = Wscript.createobject("wscript.shell")
a = shell.run ("refresh.bat",0)
```

运行refresh.vbs完美实现。  

注：此处refresh.vbs文件和refresh.bat文件在同一文件夹下，不同时请自行指定文件路径。