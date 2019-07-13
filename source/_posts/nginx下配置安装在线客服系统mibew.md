---
title: nginx下配置安装在线客服系统mibew
tags:
  - apache
  - mibew
  - nginx
  - rewrite
  - 在线客服
url: 1303.html
id: 1303
categories:
  - 编程开发
date: 2015-04-10 16:08:41
---

mibew是一个用php、mysql实现的开源在线客服系统，可以方便的集成到现有的网站系统中。客服人员和客户都可以直接通过浏览器进行沟通交流，无需安装额外的客户端或插件。关于mibew更加详细的介绍飞尘这里就不多啰嗦了，用到的朋友自行查阅吧。  

从mibew官方网站[https://mibew.org](https://mibew.org)下载最新版本的安装包，目前最新的是2.0.0-bata.5，当然也有1.6.x的稳定版本，根据个人需要选择下载即可。  

下载好解压安装包到任意目录，比如mibew/，在该目录的下README.txt文件中提供了详细的安装步骤，虽然是英文，但是比较简单，就不翻译了。不过几个注意点说明一下：  

1\. 中文语言包需要另外下载，解压到mibew/locales/下 2. 数据库需要先创建好，地址、用户名、密码需要手动在config.yml文件中配置。 3. config.yml配置文件默认缓存方式为file_system，windows下受到文件名长度的限制会有问题，如果没有性能方面的考虑，这里设置为storage: none 4. 可设置默认语言为中文

> \# Locales ## Native name will be used in this locale home\_locale: zh-cn ## If user does not provide known lang default\_locale: zh-cn

5\. 配置好后通过浏览器访问安装http://yourdomain/mibew/install.php，README文档里没有写php的扩展名  

windows平台下安装比较容易，linux系统下可能需要注意一些文件的权限设置。  

mibew自身提供了.htaccess配置文件，安装到apache服务器中几乎不用修改什么配置。但是笔者这里没有使用apache，web服务器是nginx，所以使用浏览器访问http://yourdomain/mibew/install.php时就出现问题了，页面自动跳转到http://yourdomain/mibew/install.php/install/check-requirements，自然显示404了，nginx找不到文件。  

看了一下.htaccess配置文件，的确是用rewrite规则的，这个需要在nginx中相应的配置一下，虽然获得正确规则配置的过程曲折了一些，但是结果是令人满意的，先看一下成功的配置吧  

> \# 假设mibew安装在子目录mibew中 rewrite ^/mibew/$ /mibew/index.php permanent; rewrite ^/mibew/install\\.php/(.*)$ /mibew/install.php?$1 last; rewrite ^/mibew/index\\.php/(.*)$ /mibew/index.php?$1 last;

看上去真的好简单哦，但是得到的过程却不简单，先是使用.htaccess转换工具，又google了一番未果，只能自己丰衣足食，其实最主要的问题是rewrite与location的组合，开始尝试的配置是这样的  

> location /mibew/ { rewrite ^/mibew/install\\.php/(.*)$ /mibew/install.php?$1 last; rewrite ^/mibew/index\\.php/(.*)$ /mibew/index.php?$1 last; }

安装没有问题，但是使用的时候添加了一个客服人员，在上传头像时死活就是404，都是伪静态的链接， http://yourdomain/mibew/install.php/operator/operator/2/edit这个正常访问，但是http://yourdomain/mibew/install.php/operator/operator/2/avatar这个就是404，搞了半天还是搞不定，最后把location段删除了，rewrite直接放在server段，然后就神奇了。至于配合location怎么弄，期待你的高见。。。