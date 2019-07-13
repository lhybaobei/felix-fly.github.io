---
title: windows下为apache启用mod_rewrite模块
tags:
  - apache
  - htaccess
  - mod_rewrite
  - windows
url: 166.html
id: 166
categories:
  - 互联网络
  - 电脑医生
date: 2009-04-09 03:07:11
---

windows下安装apache默认是没有开启mod\_rewrite模块的,启用也很简单,修改apache配置文件httpd.conf,将#LoadModule rewrite\_module modules/mod\_rewrite.so这一行前面的#号去掉,改为LoadModule rewrite\_module modules/mod_rewrite.so  

为了测试mod_rewrite模块是否启用成功,可以采用一个简单的例子测试一下.  

在htdocs下新建.htaccess文件,可以打开记事本另存-所有文件,文件名为.htaccess,在windows下直接改名是无法改成.htaccess文件的,在文件中输入:  

RewriteEngine On RewriteBase / RewriteRule ^(.+)$ index.html  

然后都浏览器localhost/后随便输入abc,然后回车,是不是显示It works!  

需要注意的是,我们这里是在根目录下使用.htaccess,如果我们的网站在子目录中,虽然我们有.htaccess文件,同时也启用apache的mod_rewrite模块,但是我们依然会遇到无法找到页面错误,原因在哪里呢?  

还是httpd.conf文件,找到<Directory "D:/Apache2.2/htdocs">,就是文档根目录,根据安装位置不同会有所不同,将AllowOverride None改为AllowOverride All,其实文件注释里说的很明白的  

AllowOverride controls what directives may be placed in .htaccess files. It can be "All", "None", or any combination of the keywords:   Options FileInfo AuthConfig Limit  

至此,重启apache后子目录也可以使用.htaccess实现url重写了.