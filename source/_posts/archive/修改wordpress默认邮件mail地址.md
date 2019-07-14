---
title: 修改wordpress默认邮件mail地址
tags:
  - wordpress
  - 邮件
url: 406.html
id: 406
categories:
  - 互联网络
date: 2009-10-05 14:09:54
---

wordpress默认的发邮件的地址是wordpress@yourdomain.com，使用起来感觉不舒服，想要用自己定义的邮件，例如abc@itcao.com修改方法如下：  

找到wordpress目录下，打开wp-includes\\pluggable.php  

搜索“wordpress@”  

$from_email = 'wordpress@' . $sitename;  

$wp\_email = 'wordpress@' . preg\_replace('#^www\\.#', '', strtolower($\_SERVER\['SERVER\_NAME'\]));  

两处需要修改，替换成你想要的任何名字就可以了！  

注意：wordpress自带的邮件功能需要主机开启PHP的mail函数功能。