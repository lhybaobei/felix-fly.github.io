---
title: linux下tar命令分卷压缩
tags:
  - linux
  - tar
  - 分卷压缩
url: 547.html
id: 547
categories:
  - 互联网络
date: 2010-03-26 01:05:38
---

在linux下压缩文件使用tar很方便，今天压缩文件的时候，发现压缩完成后文件较大，想分卷压缩，实现也比较简单：


```tar czvf file.tar.gz file/
tar czvfp - file.tar.gz | split -b 5m
cat x* > file.tar.gz
```

分卷压缩后的文件为以x开头的文件（xaa、xab、xac……）  

查看压缩包里面的内容:


```tar -tzvf file.tar.gz
```