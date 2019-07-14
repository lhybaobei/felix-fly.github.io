---
title: 成功在vmware硬盘中安装beini系统
tags:
  - beini
  - vmware
  - 硬盘
  - 系统
url: 537.html
id: 537
categories:
  - 电脑医生
date: 2010-03-20 23:54:08
---

beini是个微型的linux操作系统，只有20几M，具体的就不多说了，感兴趣的话去问下搜索引擎就知道了。  

下载下来的是一个iso镜像，可以直接在vmware中使用，不过无论如何是只读介质，在系统里面得到的文件想要保存下来，网上也有使用挂载U盘的方式实现通讯，不过每次都这样操作比较麻烦，找了一下安装在硬盘上的方法，主要有这么几种情况：安装到U盘、安装到硬盘与windows共存、或者与其它linux共存，就是没有找到全新安装的方法。  

后来看到论坛上一位朋友说这里[http://www.tinycorelinux.com/install.html](http://www.tinycorelinux.com/install.html)可以参考，beini其实就是在tinycorelinux基础上附加了一些工具，于是就按照上面的方法进行安装，这里纠缠了好久才搞定，首先vmware硬盘没有分区，按上面的介绍安装cfdisk和grub无论如何都是出错，没法下载，于是又到[http://distro.ibiblio.org/pub/linux/distributions/tinycorelinux/tcz_2x.html](http://distro.ibiblio.org/pub/linux/distributions/tinycorelinux/tcz_2x.html)手动下载cfdisk.tcz和grub-0.97-splash.tcz文件，然后用ultraiso将两个文件添加到beini-1.0-rc5.2.iso中，在vmware中使用appbrowser-install local安装，谁知这两个工具已经安装了，真是晕死，白费了半天劲。  

那就接着按照步骤往下执行：  

第一步，硬盘分区并格式化： 飞尘开始已经使用DiskGenius在windows下对vmware的硬盘文件vmdk进行了分区，新建的硬盘可以按照官方的方法进行，步骤比较多，虽然是英文，不过一般都能看的懂，这里就不再做翻译了。  

第二步，拷贝文件并配置grub启动 挂载硬盘时注意，如果建立swap交换分区，需要自己确认数据分区

mount /mnt/hda1
mkdir -p /mnt/hda1/boot/grub
mount /mnt/hdc
cp -p /mnt/hdc/boot/* /mnt/hda1/boot/
mkdir -p /mnt/hda1/tce
cp -p /mnt/hdc/tce/* /mnt/hda1/tce/
touch /mnt/hda1/tce/mydata.tgz
cp -p /usr/lib/grub/i386-pc/* /mnt/hda1/boot/grub/
vi /mnt/hda1/boot/grub/menu.lst
```

输入下面的代码，注意bzImage中I是大写，飞尘开始写的小写的i，结果无法启动

default 0
timeout 10
title tinycore
kernel /boot/bzImage quiet
initrd /boot/tinycore.gz
```

输入完毕按ESC推出编辑模式，按shift+zz保存退出 配置grub启动

grub
root (hd0,0)
setup (hd0)
quit
```

第三步，可以测试一下啦，祝你成功哦

umount /mnt/hdc
eject /dev/hdc
reboot 
```