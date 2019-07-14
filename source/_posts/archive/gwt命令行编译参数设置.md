---
title: gwt命令行编译参数设置
tags:
  - gwt
  - maven
  - 编译参数
url: 854.html
id: 854
categories:
  - 编程开发
date: 2011-03-13 19:55:47
---

在eclipse中编译gwt项目时，可以直接添加编译参数。  

There are many options you can pass to the GWT compiler process to control how you want to compile your GWT application and where you want the output to be generated. These options can differ slightly from version to version, but will generally include the options shown in the command-line help text below:  

详细的参数列表可以在官方文档中看到：  

[http://code.google.com/intl/en/...html#DevGuideCompilerOptions](http://code.google.com/intl/en/webtoolkit/doc/latest/DevGuideCompilingAndDebugging.html#DevGuideCompilerOptions)  

使用maven打包发布项目时，需要在命令行中添加编译参数  

参考下面这段文字  

> It would be very useful to be able to set the number of localWorkers from a command line (e.g. mvn install -Dgwt.compiler.localWorkers=4). It should be straight forward to implement - add @parameter expression="${gwt.compiler.localWorkers}" to localWorkers field in CompileMojo.

本文是用maven，例如多核情况下设置使用多核编译  

-Dgwt.compiler.localWorkers=4