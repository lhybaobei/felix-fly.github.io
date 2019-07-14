---
title: maven安装jar包到本地库和远程库
tags:
  - maven
  - 中央库
  - 本地库
  - 资源库
url: 910.html
id: 910
categories:
  - 编程开发
date: 2011-06-03 20:46:20
---

使用maven一般都会配置引用资源库，默认使用官方中央库，也可以自己搭建速度更好的局域网资源库。  

项目中可能会引用到一些较新版本的资源，而这些资源还未添加到maven资源库中，此时就需要自己手动来添加这些资源了。  

如果仅自己使用，安装到本地库即可  

一般直接mvn install就可以了，当然也可以设置更详细的参数  

例如添加gwt-log包：  

mvn install:install-file -DgroupId=com.google.code.gwt-log -DartifactId=gwt-log -Dversion=3.1.0 -Dpackaging=jar -Dfile=gwt-log-3.1.0.jar

如果项目组都需要添加引用，也可将资源部署到中央库（一般为私服）  

发布到中央库需要具有一定权限  

mvn deploy:deploy-file -DgroupId=com.google.inject.extensions -DartifactId=guice-servlet -Dversion=3.0 -Dpackaging=jar -Dfile=guice-servlet-3.0.jar -Durl=http://www.some-domain.com/some-path -DrepositoryId=nexus