---
title: asp在iis中调试错误解决方法
tags:
  - asp
  - IIS
url: 44.html
id: 44
categories:
  - 互联网络
date: 2009-03-03 10:06:00
---

症状表现为:静态html网页可以显示,但是运行asp页面时出现错误,或者是500内部服务器错误,或者网站正在维护,或者该网站要求登录等等  

解决方法如下:  

第一步,运行：msdtc -resetlog  

如果问题解决,下面的无需操作  

第二步,运行：regsvr32 %windir%/system32/vbscript.dll  

一般情况,到这里错误应该解决了,如果还不行只能继续  

第三步,重新安装iis  

如何安装IIS,请参考安装IIS详细步骤