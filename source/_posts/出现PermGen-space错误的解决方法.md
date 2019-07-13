---
title: 出现PermGen space错误的解决方法
tags:
  - java
  - out of memory
  - PermGen
  - tomcat
url: 804.html
id: 804
categories:
  - 编程开发
date: 2011-01-02 20:38:30
---

在跑tomcat的时候，经常会遇到这样一个错误：  

java.lang.OutOfMemoryError: PermGen space  

为什么会出现这个错误呢？先来看看这个错误是如何定义的。  

> PermGen space的全称是Permanent Generation space，是指内存的永久保存区域OutOfMemoryError: PermGen space从表面上看就是内存益出，解决方法也一定是加大内存。说说为什么会内存益出：这一部分用于存放Class和Meta的信息,Class在被 Load的时候被放入PermGen space区域，它和和存放Instance的Heap区域不同,GC(Garbage Collection)不会在主程序运行期对PermGen space进行清理，所以如果你的APP会LOAD很多CLASS的话,就很可能出现PermGen space错误。这种错误常见在web服务器对JSP进行pre compile的时候。

在tomcat中，如果你的WEB APP下都用了大量的第三方jar, 其大小超过了jvm默认的大小(4M)那么就会产生此错误信息了。  

解决方法是：手动设置MaxPermSize的大小。  

修改TOMCAT_HOME/bin/catalina.sh 在

echo "Using CATALINA_BASE:   $CATALINA_BASE"

上面加入以下行：

JAVA_OPTS="-server -XX:PermSize=64M -XX:MaxPermSize=128m

也可以设置为更大的值。