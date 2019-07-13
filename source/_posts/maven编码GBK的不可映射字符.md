---
title: maven编码GBK的不可映射字符
tags:
  - gbk
  - maven
  - UTF-8
  - 编码
  - 编译
url: 980.html
id: 980
categories:
  - 编程开发
date: 2011-08-29 21:40:41
---

在用maven2编译打包时，命令行报错：  

> 编码GBK的不可映射字符

编译失败，原因是java文件由于包含中文，而maven默认是采用GBK编码。  

解决方案如下：  

对于aven2，在项目的pom.xml文件的根节点下添加  

```xml  

UTF-8 \\n```  

对于maven3，添加  

```xml  

UTF-8 \\n``` 为了更加方便说明，下面给出一个完整的例子： ```xml  

4.0.0  

com.myexample my-example jar  

UTF-8  

maven-compiler-plugin UTF-8  

\\n```  

再次执行mvn clean package，编译成功。