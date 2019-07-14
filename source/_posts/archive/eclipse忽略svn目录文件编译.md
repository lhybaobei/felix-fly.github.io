---
title: eclipse忽略svn目录文件编译
tags:
  - eclipse
  - java
  - svn
  - TortoiseSVN
  - 编译
url: 656.html
id: 656
categories:
  - 编程开发
date: 2010-07-14 22:30:39
---

使用eclipse进行开发时，在编译JAVA代码时的原则是：对于源代码目录中的所有*.java文件编译成同名的*.class文件，而对于如abc.java中的内部类C，编译成abc$C.class；对于所有非java后缀后的文件与目录，连同编译后的文件复制到目标位置。  

这样就存在一个问题，如果代码是从svn库检出的，每个目录下都会有个.svn类型的目录，eclipse会把它们全都拷贝到编译目录（默认为bin），导致svn客户端会误认为bin目录是svn co出来的，而bin目录下的svn信息又与该目录下的文件内容不符，这样很多svn客户端就错乱了。更有甚者，会把bin目录下的内容check in到库中。  

解决这个问题很简单，修改项目属性（选中工程->右键->properties），选择Java Build Path，在Sources选项卡中选择对应的源代码目录，选中Excluded，点击edit，在Exclusion pattems里填加 **/.svn/** 就可以了。这样eclipse在编译时会忽略掉.svn目录。  

对于[TortoiseSVN](http://tortoisesvn.net/)可能会设置使用_svn代替.svn目录，做相应设置即可。  

更多关于TortoiseSVN的设置可参考官方提供的中文帮助文档。  

[http://tortoisesvn.net/docs/release/TortoiseSVN\_zh\_CN/index.html](http://tortoisesvn.net/docs/release/TortoiseSVN_zh_CN/index.html)