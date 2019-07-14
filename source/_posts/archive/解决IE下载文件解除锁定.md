---
title: 解决IE下载文件解除锁定
tags:
  - IE
  - 下载
  - 解除锁定
url: 515.html
id: 515
categories:
  - 互联网络
date: 2010-03-03 23:17:25
---

使用IE下载程序文件、word文档时，常常被自动锁定，尤其是程序文件，如果文件较大，打开会很慢，word、pdf等文档打开后也会明显感觉到缓慢，这些都是系统在作怪。使用其它第三方下载工具不存在这个问题。  

按照微软的说法[http://support.microsoft.com/kb/883260](http://support.microsoft.com/kb/883260)是对存在风险的文件进行锁定，可以修改下载文件属性-解除锁定使得文件正常，但是每次都这样做很是麻烦，最好是禁用这个功能，毕竟杀毒软件在做这个事情嘛。  

解决方法很简单，打开注册表找到下面这个项，没有的话需要新建项


```HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Attachments
```

修改键值，同样没有需要新建DWORD值


```HideZoneInfoOnProperties
```

为1，默认为0  

刷新注册表，关闭即可，这下没有烦人的锁定了。