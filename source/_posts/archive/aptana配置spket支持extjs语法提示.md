---
title: aptana配置spket支持extjs语法提示
tags:
  - aptana
  - extjs
  - JavaScript
  - spket
  - 代码补全
  - 插件
url: 1074.html
id: 1074
categories:
  - 编程开发
date: 2011-11-07 22:42:22
---

使用aptana进行javascript开发是比较方便的，目前项目选用了extjs作为框架进行开发，通过一些简单的配置，aptana就可以很好的支持extjs了，包括语法高亮、提示等等。  

使用的aptana版本为3.0.5，extjs版本为4.0.2a。  

需要下载安装一个插件spket，可以通过在线升级的方式安装：  

更新地址为

http://www.spket.com/update/

安装好插件后重启aptana，此时还需要一个补丁包：  

[http://www.agpad.com/downloads/com.spket.js_1.6.18.jar](http://www.agpad.com/downloads/com.spket.js_1.6.18.jar)  

复制粘贴到aptana安装目录下的plugins文件夹下（原有文件最好先改名备份）。  

下载extjs的补丁文件：  

[http://www.agpad.com/downloads/ext-4.0.2a.jsb2](http://www.agpad.com/downloads/ext-4.0.2a.jsb2)  

复制到extjs的主目录和build目录下。  

在aptana中依次执行如下操作：  

1\. Window → Preferences → Spket → JavaScript Profiles → New 2. 输入"ExtJS"确定 3. 选择"ExtJS"并点击"Add Library"，在弹出的窗口中选择本地extjs的主目录 4. 选择"ExtJS"并点击"Add File"，选择之前下载的ext-4.0.2a.jsb2文件  

重启aptana之后，使用spket编辑一个新的js文件，就可以看到代码自动补全的提示了。  

有不明白可以去看一下英文的相关讨论：  

[http://forums.spket.com/viewtopic.php?f=6&t=1866&sid=5e73e2a68237ab9cb297e08c14378e99&start=15](http://forums.spket.com/viewtopic.php?f=6&t=1866&sid=5e73e2a68237ab9cb297e08c14378e99&start=15)  

[http://www.sencha.com/learn/legacy/Manual:Resources#Aptana_.2B\_Spket\_.2B_ExtJS](http://www.sencha.com/learn/legacy/Manual:Resources#Aptana_.2B_Spket_.2B_ExtJS)