---
title: 修复htm和html文件图标
tags:
  - htm
  - html
  - iexplorer
url: 222.html
id: 222
categories:
  - 互联网络
  - 电脑医生
date: 2009-05-16 07:22:34
---

安装了firefox，发现htm和html的默认打开程序变成火狐了，于是改回原来的ie，但是发现图标还是火狐的，没有变回原来熟悉的样子，到文件夹选项－文件类型里修改还是无效，真是晕了，赶紧上网搜索，搞定，把方法分享给大家。 先试一下这个 打开注册表找到这两个项 HKEY\_CLASSES\_ROOT\\.htm 右侧默认值是htmlfile HKEY\_CLASSES\_ROOT\\.html 右侧默认值是htmlfile 本文这里已经被火狐修改为firefox …… 注销后看看效果 如果未起效，尝试下面的方法（均来自网络，未测试） 1、是文件夹选项的文件类型里把.htm，.html的打开方式上输入%systemroot%\\ststem32\\url.dll 2、进入注册表： HKEY\_CLASSES\_ROOT\\CLSID\\{42042206-2D85-11D3-8CFF-005004838597}\\Old Icon\\htmlfile\\DefaultIcon （提示：手工查到此项有些难度，可在 "HKEY\_CLASSES\_ROOT" 下搜索 "42042206-2D85-11D3-8CFF-0050048"） 发现右侧默认值为： C:\\Program Files\\Internet Explorer\\iexplore.exe,-17 修改为（把末尾的 "-17" 改为 "1"）： C:\\Program Files\\Internet Explorer\\iexplore.exe,1 注销后修复生效。