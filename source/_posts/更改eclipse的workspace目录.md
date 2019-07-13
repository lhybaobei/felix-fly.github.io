---
title: 更改eclipse的workspace目录
tags:
  - eclipse
  - workspace
url: 218.html
id: 218
categories:
  - 编程开发
date: 2009-05-15 10:51:39
---

首次运行eclipse时，会提示选择workspace路径，一般情况下我们为了不再麻烦都会勾选下次不再询问，可是后来当workspace目录发生变化时，却发现找不到在哪里更改路径了，网站查了下，有这么几种方法： 1、进入 Window > Preferences > General > Startup and Shutdown 选中 Prompt for workspace on startup。 2、进入Eclipse的安装目录，找到configuration 目录下的 .settings 文件夹，里面有一个 org.eclipse.ui.ide.prefs， 用Ultra Edit等打开，也可以用写字板打开，找到RECENT_WORKSPACES，按照它的格式修改一下。 3、先打开Eclipse，进入之后，再去打开一次，会提示 Workspace in use or cannot be created, choose a different one 。 这时候就会提示你更改workspace的目录了。 这三种方法都可以更改，选一种适合的就可以。 个人用的是第一种方式，感觉不错，希望遇到此问题的朋友可以有所发现。