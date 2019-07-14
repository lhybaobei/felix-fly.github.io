---
title: maven增加编译内存大小
tags:
  - maven
  - 内存
  - 溢出
  - 编译
url: 740.html
id: 740
categories:
  - 编程开发
date: 2010-09-24 22:08:59
---

在构建大的项目时，需要大内存的支持，此时Maven可能会常常报内存溢出（OutOfMemory）的异常！解决的方法就是调整Java堆的大小，具体如下：  

找到文件%M2_HOME%\\bin\\mvn.bat，这就是启动Maven的脚本文件，找到该文件中以下代码所在的行：


```@REM set MAVEN_OPTS=-Xdebug -Xnoagent -Djava.compiler=NONE...  
```

它的意思是你可以设置一些Maven参数，我们就在该行下面加入以下行：


```set MAVEN_OPTS= -Xms256m -Xmx512m  
```

上述设置表示Java堆的大小范围为256M-512M