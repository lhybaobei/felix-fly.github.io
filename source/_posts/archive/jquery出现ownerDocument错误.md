---
title: jquery出现ownerDocument错误
tags:
  - apache
  - JavaScript
  - JQuery
  - ownerDocument
  - 跨域
url: 1008.html
id: 1008
categories:
  - 编程开发
date: 2011-09-08 21:12:30
---

使用jquery做项目开发的时候，遇到了这样的一个错误：  

在firebug里查看到  

> Permission denied to access property 'ownerDocument'

网上一查，原来是跨域了，看来一不小心就掉进了跨域的陷阱。  

项目中部分跑在apache应用里，还有部分身处tomcat容器中，虽然同一台主机充当服务器，但是端口不同还是会造成跨域问题。  

That's the cross domain policy restricting you. It's designed to prevent cross site scripting (XSS) attacks.  

Basically, only pages from the same domain, protocol and port can alter each other's content.  

配置了apache的反向代理，跨域say goodbye。