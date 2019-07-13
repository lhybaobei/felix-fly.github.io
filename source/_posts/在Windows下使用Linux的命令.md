---
title: 在Windows下使用Linux的命令
tags:
  - linux
  - windows
  - 命令
url: 584.html
id: 584
categories:
  - 电脑医生
date: 2010-04-24 21:16:03
---

在服务器上的Linux下使用tar分卷压缩了一个文件，使用ftp下载下来后发现没法处理了，windows没有tar这个命令的，7zip好像压缩解压可以，这个分卷的不知道怎么处理。于是想在windows下也拥有tar命令，原来在很早以前就有人已经给我们准备好了——[UnxUtils](http://unxutils.sourceforge.net/)，有了它之后就可以在windows下尽情Linux了，呵呵。  

下载到的是个压缩包，解压至任意目录，比如C盘根目录，然后把下面的路径加入系统环境变量


```C:\usr\local\wbin
```

我的电脑-右键-属性-高级-环境变量-系统变量-path，在path变量值最后添加


```;C:\usr\local\wbin
```

注意要有分号，和前面的值分开，几个确定就完成了  

这时可以开始-运行-cmd，在命令行中使用Linux的命令了。