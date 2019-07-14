---
title: applicationContext-mysql配置文件出错的解决方法
tags:
  - applicationContext-mysql
  - maven
  - persistence
  - 配置文件
url: 675.html
id: 675
categories:
  - 编程开发
date: 2010-07-18 16:36:33
---

项目开发过程中，突然遇到这样一个错误，相关的提示消息如下： no single default persistence unit defined in classpath meta-inf persistence.xml  

之前项目一直是正常的，不知道什么原因在跑服务器的时候就抛出这个错误。  

经过一番摸索，找到了解决方法： 首先在persistence.xml文件中查看persistence-unit的name属性值，比如abc，记下这个值 ```xml  

\\n```  

然后在src/main/resource下修改配置文件applicationContext-mysql.xml ```xml  

\\n```