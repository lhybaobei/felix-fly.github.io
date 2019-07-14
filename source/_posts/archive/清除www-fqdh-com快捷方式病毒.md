---
title: 清除www.fqdh.com快捷方式病毒
tags:
  - fqdh
  - sveran
  - 快捷方式
  - 病毒
url: 466.html
id: 466
categories:
  - 电脑医生
date: 2009-11-16 23:33:07
---

网上下的软件真的良莠不齐，稍有不慎就会中招。昨天找个css的工具，不小心从垃圾网站下载个病毒回来，看着就不像什么好东西，运行了没反应，小红伞也没报，以为没事，谁知桌面多了个Internet Explorer快捷方式，我一般是用遨游的，不用ie。查看快捷方式属性，发现是个指向www.fqdh.com的链接，赶紧删除，查看任务管理器里没有异常的进程，双击打开我的电脑，桌面的快捷方式又马上生成了，病毒就是如此龌龊！  

注册表搜fqdh，\[HKEY\_CURRENT\_USER\\Software\\Microsoft\\Internet Explorer\\Desktop\\longma\]项下面有一堆url指向，统统删除，不要高兴的太早，打开我的电脑，出现错误提示，说是找不到url，用魔法兔子修复ie，可是重启以后问题依旧。  

与此同时，发现电脑运行一段时间后变慢，查看进程里多了个sveran.exe进程，kill掉后恢复正常，看来是个病毒，网上搜了搜，中文没什么结果，看英文的说是个间谍软件，于是下了SUPERAntiSpyware来扫描，果然发现了这个sveran.exe间谍软件，杀完重启系统，sveran.exe没有再生，但是快捷方式的问题依旧，看来还有木马。  

再下360木马专杀，杀出了这个 名称:Trojan.Win32.AutoDS 类别:木马 文件路径:c:\\windows\\system32\\W1NL0g0.exe  

杀完重启，为了彻底，又用魔法兔子修复了下ie，快捷方式没有再次出现，终于搞定了。