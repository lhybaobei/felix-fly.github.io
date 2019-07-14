---
title: vmware5.5安装debian5手记
tags:
  - debian
  - vmware
  - vmware tools
url: 479.html
id: 479
categories:
  - 电脑医生
date: 2009-12-04 00:38:07
---

本来是打算安装个centos，结果只下载第一张cd安装无法完成，全部六张cd，真是够大，等下次再装，这次先装个debian，一张盘的发行版。  

安装比较简单，很快安装好了，没有安装图形界面，不过还是打算安装一下vmware tools，比起windows的傻瓜式安装，linux下安装起来步骤比较多，还是记录下来，以备以后参考。  

debian:~# mount /cdrom mount: block device /dev/hdc is write-protected, mounting read-only debian:~# ls /cdrom VMwareTools-5.5.2-29772.i386.rpm VMwareTools-5.5.2-29772.tar.gz debian:~# cp /cdrom/* /tmp debian:~# umount /cdrom debian:~# cd /tmp debian:/tmp# ls VMwareTools-5.5.2-29772.i386.rpm VMwareTools-5.5.2-29772.tar.gz debian:/tmp# tar zxf VMwareTools-5.5.2-29772.tar.gz debian:/tmp# ls VMwareTools-5.5.2-29772.i386.rpm VMwareTools-5.5.2-29772.tar.gz vmware-tools-distrib debian:/tmp# cd vmware-tools-distrib debian:/tmp/vmware-tools-distrib# ls bin doc etc FILES INSTALL installer lib vmware-install.pl debian:/tmp/vmware-tools-distrib# ./vmware-install.pl  

以上的步骤来自网络，安装时遇到些问题，第一个是  

Setup is unable to find the "killall" program on your machine. Please make sure it is installed. Do you want to specify the location of this program by hand?\[yes\]  

回车输入/usr/bin/pkill  

如果提示没有gcc，先安装apt-get install gcc  

由于第一次安装失败，因此再次安装的时候提示  

A previous installation of VMware software has been detected  

进入/etc删除vmware-tools目录 rm -rf vmware-tools 进入/tmp删除vmware-tools-distrib目录 rm -rf vm*  

接下来的比较郁闷，之前安装失败导致一直提示覆盖文件，按着回车好久，终于安装成功了。这次vmware不提示没有安装vmware tools了。  

还有个问题没有解决，就是网络问题，vmware设置网络为桥接，debian里网络也设置后了静态ip，和主机间可以相互ping的通，但是却ping不通网关，说是destination host unreachable，今天时间不够了，等待明天解决。  

先把网络配置方法记录下：  

vi /etc/network/interfaces  

打开配置文件后，默认是命令行方式，按i切换到插入模式  

auto lo iface lo inet loopback allow-hotplug eth0 #iface eth0 inet dhcp iface eth0 inet static address 192.168.0.2 netmask 255.255.255.0 gateway 192.168.0.1  

编辑完成后esc返回到命令行模式，shift+zz（双击大写ZZ）保存文件比退出编辑。  

之前把lo删除导致了这个错误 starting nfs common utilities statd failed