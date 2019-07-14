---
title: 压缩JavaScript文件
tags:
  - JavaScript
  - TBCompressor
  - 压缩
url: 284.html
id: 284
categories:
  - 编程开发
date: 2009-07-27 03:18:33
---

之前写过一篇介绍了几个js压缩的工具，那个在线压缩的用起来比较方便，不过这次压缩遇到一些问题，记录下来。  

使用base62压缩后，总是有错误，搜了一下，说是包含类似for(var i=0;i<10;i++)这样的语句就会语法错误，于是把var i全部拿到for外面，在线压缩，测试还是有问题。  

找找其它工具，看到个TBCompressor，据说是淘宝团队用的js和css压缩工具，于是拿来使用，我这里是用utf-8编码的，参考TBCompressor的说明文件调整即可，开始没修改，中文字符显示乱码，调整后正常，经过TBCompressor压缩后的js文件大约为原来大小的80％左右，此时再将TBCompressor压缩后的js文件到在线压缩那里使用base62压缩，压缩后的文件可以缩小到原始文件的50％左右，对于优化网络下载速度还是很有效果的。 个人感觉是TBCompressor压缩同时对代码进行了整理，因此使用base62压缩时不再产生错误。