---
title: 解决eclipse更新安装插件慢的方法
tags:
  - eclipse
  - 插件
  - 更新
  - 速度慢
url: 795.html
id: 795
categories:
  - 编程开发
date: 2010-12-29 22:16:20
---

在eclipse中安装插件，一直停在验证那里，当已经安装的插件有很多时，速度就更无法忍受了。  

那怎么解决呢？其实很简单，慢就慢在验证关联性上，只要少验证一些，或者不验证就可以了，这样速度会有很大的提升。  

在菜单Help -> Software Updates -> Available Software -> Manage Sites中，可以看到许多条目，取消选中状态后，安装更新就不会对其进行验证了。  

至于是否全部取消选择，可以依个人需要自行斟酌。  

下面看一下别人是怎么说的  

> Installation is taking a long time on Eclipse 3.4. What can I do about this?

> When installing a new plugin on Eclipse 3.4, Eclipse checks for updates of all of that plugin's dependencies. This can take quite a while. To keep Eclipse from doing this overzealous update check, go to Help > Software Updates > Available Software > Manage Sites. You'll be presented with a list of Available Software Sites. Uncheck all of the update sites listed except for Google Plugin for Eclipse 3.4 and Ganymede Update Site. Later, when you are interested in updating other components, check them again.

飞尘测试速度提升很明显，有此问题的朋友可以不妨一试哦。