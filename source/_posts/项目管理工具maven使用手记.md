---
title: 项目管理工具maven使用手记
tags:
  - eclipse
  - maven
  - 命令
  - 项目管理
url: 658.html
id: 658
categories:
  - 编程开发
date: 2010-07-14 22:48:09
---

这里主要是在eclipse中使用[maven](http://maven.apache.org/)，因此只使用到了一部分命令，整理下来方便以后查阅。  

生成清除Eclipse项目结构：

mvn eclipse:eclipse   
mvn eclipse:clean

清理（删除target目录下编译内容）

mvn clean

仅打包Web页面文件

mvn war:exploded

编译项目

mvn compile

打包发布

mvn package

打包时跳过测试

mvn package -Dmaven.test.skip=ture

还有很多命令目前还没有使用到，以后遇到再补充