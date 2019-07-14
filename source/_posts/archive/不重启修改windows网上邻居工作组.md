---
title: 不重启修改windows网上邻居工作组
tags:
  - windows
  - 工作组
  - 网上邻居
  - 重启
url: 546.html
id: 546
categories:
  - 电脑医生
date: 2010-03-25 23:52:49
---

之前写过一篇文章[不重启修改windows计算机名](http://flyash.itcao.com/post_539.html)，今天又要改工作组，在系统属性那里修改还是需要重启的，太不方便了，其实也有不需要重启的方法的：  

一条命令就可以搞定


```wmic computersystem where Name="%COMPUTERNAME%" call JoinDomainOrWorkgroup Name="WORKGROUP"
```

也可以建立一个bat文件，以后修改起来就方便极了


```set /p work1=请输入工作组名：
wmic computersystem where Name="%COMPUTERNAME%" call JoinDomainOrWorkgroup Name="%work1%"
echo.
```

执行bat文件的时候输入想要设置的工作组名称回车就ok了