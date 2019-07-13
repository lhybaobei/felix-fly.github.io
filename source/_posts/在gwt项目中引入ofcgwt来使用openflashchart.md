---
title: 在gwt项目中引入ofcgwt来使用openflashchart
tags:
  - gwt
  - ofcgwt
  - openflashchart
url: 671.html
id: 671
categories:
  - 编程开发
date: 2010-07-18 16:22:06
---

前面写了一篇关于gwt中使用openflashchart的日志，不过没有详细描述如何使用ofcgwt，今天来补充一下。  

本文使用gwt开发的项目使用maven进行管理，因此引入ofcgwt需在项目pom.xml文件中的标签中增加 ```xml  

com.rednels ofcgwt 2.0.1-beta provided \\n```  

在需要使用到open flash chart的模块配置文件中添加 ```xml \\n```  

这里有一点需要注意： 使用ofcgwt需要引用User模块，而且引用的顺序很关键，正确的应该保持这样的顺序 ```xml \\n```  

如果引用的顺序不正确或者缺少引用，在gwt编译的时候会报错

Loading inherited module 'com.rednels.ofcgwt.OFCGWT'
         [ERROR] Property 'user.agent' not found
         [ERROR] Failure while parsing XML
com.google.gwt.core.ext.UnableToCompleteException: (see previous log entries)