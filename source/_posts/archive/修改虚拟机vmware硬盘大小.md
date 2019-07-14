---
title: 修改虚拟机vmware硬盘大小
tags:
  - vmware
  - 硬盘
  - 虚拟机
url: 362.html
id: 362
categories:
  - 电脑医生
date: 2009-09-22 20:14:04
---

在VMware的安装目录下有一个命令行工具vmware-vdiskmanager.exe 程序，可用来修改虚拟机硬盘的大小。使用无参数命令可以看到使用方法，修改硬盘大小使用下面的方法： 1、关闭虚拟机，运行cmd 2、使用cd 命令进入虚拟系统的安装目录，注意不是虚拟机的安装目录，如：D:\\My Virtual Machines。同时记下虚拟机vmware的安装目录，如D:\\VMware workstation 3、执行如下命令

"D:\VMware workstation\vmware-vdiskmanager" -x 4Gb "D:\My Virtual Machines\wm1.vmdk"

参数-x表示要扩展虚拟机硬盘空间，后面的数字指扩展后大小（如4Gb，表示磁盘总量，包含原来的磁盘容量），最后是要操作的虚拟机硬盘对应的具体文件。 说明：若路径名中有空格，必须以双引号括起来 等待执行完毕，关闭命令提示符窗口，启动VMware，对于原来已经安装了操作系统的分区大小没变，但是通过磁盘管理器可以看到一个新的未分区，使用PQ Magic硬盘分区大师等可以数据无损调整分区大小。