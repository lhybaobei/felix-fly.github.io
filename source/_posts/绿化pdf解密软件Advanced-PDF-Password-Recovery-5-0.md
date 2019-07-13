---
title: 绿化pdf解密软件Advanced PDF Password Recovery 5.0
tags:
  - Advanced PDF Password Recovery
  - pdf
  - 注册表
url: 477.html
id: 477
categories:
  - 电脑医生
date: 2009-11-24 12:10:19
---

一直比较喜欢绿色的软件，对于这个Advanced PDF Password Recovery也不例外，可惜网上搜了半天，找到的号称是绿色的，可惜不能使用，无法将加密的pdf文件解密，这里说明一下，解密的目的是把多个文件合并，单个文件是可以打开看的，只是标题显示（已加密），合并的时候要求口令，因此才需要这个解密软件。  

找不到绿色的版本又不甘心，于是想自己搞。找了一个汉化特别版，安装以后能使用，把文件复制一份，然后卸载，运行出错，未找到regdll，同时也显示未注册（看来没这么简单:-)）。  

使用解包工具看看那个汉化特别版里都有什么吧。除了在安装目录下我已经复制的文件外，还有几个其他文件，放到一起，还是不行，估计在注册表有文章吧。  

再次安装汉化特别版，注册表有两处改动： HKEY\_CURRENT\_USER\\Software\\ElcomSoft HKEY\_LOCAL\_MACHINE\\SOFTWARE\\ElcomSoft  

第一个地方是一些注册信息，第二个是相关的dll。对第一处修改包含路径的键值为空，然后导出为reg文件。对第二处比较麻烦，键值包含路径信息，直接导出导入不行。考虑使用bat来处理，先导入第一处的reg文件，然后使用reg命令将当前路径写入注册表，即修改原有的固定C:\\Program Files\\ElcomSoft\\Common Files为当前程序所在的路径，测试绿化成功，嘿嘿。  

其实不是真正的绿化，不过对于我已足够了。