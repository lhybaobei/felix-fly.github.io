---
title: 解决多分支项目导入eclipse错误
tags:
  - branches
  - eclipse
  - maven
  - trunk
  - 项目
url: 647.html
id: 647
categories:
  - 编程开发
date: 2010-07-13 23:02:02
---

项目开发到一定阶段，需要做分支，一般使用trunk做主线，使用branches做分支。分支副本多了之后，可能需要在多个分支副本之间进行切换。  

本文是在eclipse+maven下进行的开发，操作时将当前的分支工程关闭后，导入另外的分支，出现下面的错误提示：  

Some projects cannot be imported because they already exist in the workspace  

原因就是当前分支的存在，仅仅关闭是不够的，需要将当前的项目删除，不要删除文件，这样eclipse的workspace中关于项目的配置就会被删除了，自然也就能够导入另外的分支项目了。  

ps： 另外一个办法就是把原有的项目改下名字，比如project-1。