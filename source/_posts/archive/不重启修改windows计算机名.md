---
title: 不重启修改windows计算机名
tags:
  - windows
  - 注册表
  - 计算机名
  - 重启
url: 539.html
id: 539
categories:
  - 电脑医生
date: 2010-03-21 19:17:45
---

在我的电脑-属性-计算机名修改需要重启才能生效，很是烦人，其实修改不就是修改了注册表了嘛，既然这样那就自己手动修改啦。  

有几个地方需要修改：


```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ActiveComputerName
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName

在这两项右侧栏修改ComputerName的值为任意需要的字符


```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters

在该项右侧栏修改NV Hostname和Hostname的值。  

修改完后在我的电脑-属性中查看，计算机名称已经修改成功。