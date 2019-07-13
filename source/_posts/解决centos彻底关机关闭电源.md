---
title: 解决centos彻底关机关闭电源
tags:
  - centos
  - linux
  - 关机
  - 关闭电源
url: 557.html
id: 557
categories:
  - 互联网络
date: 2010-03-29 01:15:47
---

在centos系统里使用shutdown命令关机，发现并没有关闭电源，原来问题在grub中


```vi /boot/grub/grub.conf
```

修改这行


```kernel /boot/vmlinuz-2.6.x-* ro root=LABEL=/
```

为


```kernel /boot/vmlinuz-2.6.x-* ro root=LABEL=/ apm=on apm=power-off
```

linux内核不同，此处vmlinuz-2.6不尽相同，就是在原有代码基础上添加


```apm=on apm=power-off
```