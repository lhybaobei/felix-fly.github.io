---
title: GWT编译参数
tags:
  - gwt
  - 参数
  - 编译
url: 734.html
id: 734
categories:
  - 编程开发
date: 2010-09-24 21:47:17
---

使用GWT开发有一点不足就是编译时间很长，不过基本上编译都是比较耗时间的，cpu还是不够强劲啊，呵呵。  

平时开发的时候，做浏览器兼容性测试的时候就不得不编译了，因为opera和safari(Window平台)是没有gwt调试模式的，必须先把项目或者模块编译了才好进行调试。下面是gwt提供的编译时的一些可选参数：


```Google Web Toolkit 2.0.3
Compiler [-logLevel level] [-workDir dir] [-gen dir] [-style style] [-ea] [-XdisableClassMetadata] [-XdisableCastChecking] [-validateOnly] [-draftCompile] [-compileReport] [-localWorkers count] [-war dir] [-extra dir] module[s]
where
  -logLevel               The level of logging detail: ERROR, WARN, INFO, TRACE, DEBUG, SPAM, or ALL
  -workDir                The compiler's working directory for internal use (must be writeable; defaults to a system tem
p dir)
  -gen                    Debugging: causes normally-transient generated types to be saved in the specified directory
  -style                  Script output style: OBF[USCATED], PRETTY, or DETAILED (defaults to OBF)
  -ea                     Debugging: causes the compiled output to check assert statements
  -XdisableClassMetadata  EXPERIMENTAL: Disables some java.lang.Class methods (e.g. getName())
  -XdisableCastChecking   EXPERIMENTAL: Disables run-time checking of cast operations
  -validateOnly           Validate all source code, but do not compile
  -draftCompile           Enable faster, but less-optimized, compilations
  -compileReport          Create a compile report that tells the Story of Your Compile
  -localWorkers           The number of local workers to use when compiling permutations
  -war                    The directory into which deployable output files will be written (defaults to 'war')
  -extra                  The directory into which extra files, not intended for deployment, will be written
and
  module[s]               Specifies the name(s) of the module(s) to compile
```