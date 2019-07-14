---
title: 修改tomcat6.0以上console输出字体红色
tags:
  - console
  - eclipse
  - tomcat
  - 红色字体
url: 806.html
id: 806
categories:
  - 编程开发
date: 2011-01-03 20:46:25
---

在eclipse中使用Tomcat5.5跑服务的时候，系统日志console输出一直是黑色字体。  

当使用tomcat6.0的时候，发现console输出字体变成了红色，看上去很是刺眼。  

就算不是错误消息，只是日志输出也是红色，查了一下，原来是可以自定义设置的。  

依次找到下面的菜单项：  

Window -> Preperences -> Run/Debug -> Console -> Standard Error text color

在这里修改设置成黑色或者其他颜色就可以了。