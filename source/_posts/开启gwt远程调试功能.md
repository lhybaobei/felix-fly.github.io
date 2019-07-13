---
title: 开启gwt远程调试功能
tags:
  - bindAddress
  - gwt
  - 开发模式
  - 远程调试
url: 816.html
id: 816
categories:
  - 编程开发
date: 2011-01-07 22:29:04
---

一般情况下，使用GWT开发都是在本机进行调试，也就是跑develop mode，但是有的时候需要测试其它的系统环境，这就需要在远程电脑上进行调试--remote debug。  

开启远程调试其实很简单，只需要添加一个参数而已。具体如下：  

依次找到菜单项

Run Configurations->Web Application->project name

切换到(x)= Arguments标签  

在Program arguments下添加参数  

-bindAddress 0.0.0.0

也可以指定为本机的ip地址  

> http://127.0.0.1:8888/module.html?gwt.codesvr=127.0.0.1:9997  
>   
> If you supply a -bindAddress value, that will be used instead of 127.0.0.1. If you supply 0.0.0.0 as the bind address, you will get current behavior (bind on all valid addresses), but it will choose your machine's primary address to use in the URL.