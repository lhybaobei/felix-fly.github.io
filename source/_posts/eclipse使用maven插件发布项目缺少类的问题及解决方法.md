---
title: eclipse使用maven插件发布项目缺少类的问题及解决方法
tags:
  - class not found
  - eclipse
  - maven
  - maven dependency
url: 789.html
id: 789
categories:
  - 编程开发
date: 2010-12-28 21:53:48
---

项目一直使用maven进行管理，在升级了eclipse到3.6版本后，导入原来的项目在tomcat中无法正常运行，错误为找不到某些类，原因其实是maven相关依赖包没有发布到项目的类路径下。  

经过一番查找，在国外一篇文章里看到了解决方法，经笔者测试有效，但不保证具有通用性，环境配置与项目关系很紧密，问题表现相似，但原因可能千差万别，多思考，即可迎刃而解。  

[英文原文在这里可以查看](http://www.mkyong.com/maven/eclipse-web-deployment-assembly-maven-dependencies-issue/)  

下面是问题描述  

> In Eclipse 3.5 or early version, in order to deployed the Maven dependencies to the correct “/WEB-INF/lib” folder, you have to configure the dependencies via “Java EE Module Dependencies”, and the updated “.classpath” file will look like following :  
>   
> File : “.classpath”, by Java EE Module Dependencies…

在eclipse 3.5 及之前的版本中，通过配置“Java EE Module Dependencies”选项，Maven dependencies会发布到“/WEB-INF/lib”路径下，在 “.classpath”文件中，可以看到类似下面的内容：  

```xml ... ... \\n```  

> Since Eclipse 3.6, the “Java EE Module Dependencies” is replaced by “Web Deployment Assembly”, but you can do the same via the “Referenced Projects Classpath Entries”, however, it will update the “.classpath” file as following :

在eclipse 3.6版本中，“Java EE Module Dependencies”选项被“Web Deployment Assembly”所代替，同样需要设置：  

```xml ... ... \\n```  

> Sadly, the default (value=”../”) makes all the Maven’s dependencies failed to deploy.

而value=”../”就会导致maven依赖包无法正确发布。  

解决方案：  

> Not a big issue, you still can modify the (value=”../”) to (value=”/WEB-INF/lib”) manually, but it will get override every time you run a Maven build. No worry, there are still have two solutions :  
>   
> 1\. WTP Support Ignore the “Referenced Projects Classpath Entries” settings, instead, make the Maven supports WTP 2.0  
>   
> mvn eclipse:eclipse -Dwtpversion=2.0 It will generate a new file named “org.eclipse.wst.common.component“, under “settings” folder, see a portion of this file :  
>   
> File : “org.eclipse.wst.common.component”, by WTP  
>   
> ```xml ... uses ...\\n``` With WTP support, it helps to deploy the Maven dependencies to “/WEB-INF/lib” folder correctly.  
>   
> 2\. m2eclipse plugin Install the m2eclipse, an Eclipse plugin to integrate Maven into the Eclipse IDE. After the installation, right click on the project folder, select “Maven” –> “Update Project Configuration“, it will update the “.classpath” file accordingly, see a snippet  
>   
> File : “.classpath”, by m2eclipse  
>   
> ```xml ... ...\\n``` It helps to deploy the Maven dependencies correctly as well.

上面的英文都比较简单，就不再详细翻译了，手工修改类路径会被重置，启用WTP支持或者使用m2eclipse插件即可完美解决。