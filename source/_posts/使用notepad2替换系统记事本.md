---
title: 使用notepad2替换系统记事本
tags:
  - notepad++
  - 记事本
url: 848.html
id: 848
categories:
  - 文件分享
date: 2011-03-08 23:09:23
---

之前在winxp下用notepad++换了系统记事本，后来升级了系统到win7，一直还是系统自带的记事本，今天弄点东西的时候发现用着很不方便，看来还是要换一下。  

对于notepad++功能有点过于强大了，跑起来的效率略差一点，于是想起了notepad2这个轻量级的替代品。  

相当于notepad++多国语言支持中文而言，notepad2就没有这个feature了，不过有国人汉化版的，就算使用英文原版也不错啊，嘿嘿。  

notepad2是绿色版，将下载到压缩包解压至任意目录，如d:\\notepad2  

切换至d:\\notepad2目录，运行install.bat文件，这个是飞尘根据[Notepad2官方的文档](http://www.flos-freeware.ch/doc/notepad2-Replacement.html)自己编辑的，有兴趣的朋友也可以自己去看下。  

对于文中所述的这个方法未能成功，360报警，不能执行：  

> reg add "HKLM\\Software\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\notepad.exe" /v "Debugger" /t REG_SZ /d "\\"%~dp0Notepad2.exe\\" /z" /f

后来是按照Enable Jump List Support介绍的来操作的：  

> reg add "HKCR\\*\\OpenWithList\\Notepad2.exe" /f reg add "HKCR\\Applications\\Notepad2.exe" /v "AppUserModelID" /t REG\_SZ /d "Notepad2" /f reg add "HKCR\\Applications\\Notepad2.exe\\shell\\open\\command" /ve /t REG\_SZ /d "\\"%~dp0Notepad2.exe\\" %%1" /f

这样就可以在文件的打开方式中添加一条notepad2的记录，可以将txt文件设置为始终使用notepad2打开就好了，对于系统的记事本也并不排斥，似乎这样的替换更好些:-)  

notepad2很小巧，这里顺便提供一份打包好的文件，感兴趣可以拿来试试看。  

[Notepad2](/wp-content/uploads/Notepad2.zip)