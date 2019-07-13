---
title: eclipse使用maven 2.9插件报错
tags:
  - eclipse
  - maven
  - maven-eclipse-plugin
  - 插件
url: 1017.html
id: 1017
categories:
  - 编程开发
date: 2011-09-10 10:31:59
---

在使用maven命令  

mvn eclipse:eclipse

生成eclipse项目所需的工程配置文件时，遇到下面的错误：  

> \[INFO\] Unable to find resource 'org.apache.maven.plugins:maven-eclipse-plugin:maven-plugin:2.9-SNAPSHOT' in repository c entral (http://repo1.maven.org/maven2/) \[INFO\] ------------------------------------------------------------------------ \[ERROR\] BUILD FAILURE \[INFO\] ------------------------------------------------------------------------ \[INFO\] A required plugin was not found: Plugin could not be found - check that the goal name is correct: Unable to downl oad the artifact from any repository

去官方的maven库查看，果然没有maven-eclipse-plugin 2.9这个版本的文件。  

那就用其它版本来替换下吧，使用mvn命令时指定插件的版本：  

mvn org.apache.maven.plugins:maven-eclipse-plugin:2.8:eclipse

或者可以修改

~/.m2/plugin-registry.xml

这个文件，最好先备份下原有的文件。  

还可以使用

-npr,--no-plugin-registry

参数强制maven不使用

~/.m2/plugin-registry.xml

指定版本：  

mvn -npr eclipse:eclipse

但是这个方法不一定都会有效。  

最后一个是从本地的maven库中删除2.9-SNAPSHOT这个版本：  

~/.m2/repository/org/apache/maven/plugins/maven-eclipse-plugin/2.9-SNAPSHOT