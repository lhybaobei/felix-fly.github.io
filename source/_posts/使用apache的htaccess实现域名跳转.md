---
title: 使用apache的htaccess实现域名跳转
tags:
  - apache
  - htaccess
  - url跳转
url: 303.html
id: 303
categories:
  - 互联网络
date: 2009-08-31 16:37:53
---

实现域名的统一，即使得itcao.com转向www.itcao.com,据说对于seo也有些好处，代码


```RewriteEngine on
RewriteCond %{HTTP_HOST} ^itcao.com [NC]
RewriteRule ^(.*)$ http://www.itcao.com/$1 [L,R=301]
```

还可以利用apache的重定向功能实现url的跳转，例如


```RewriteEngine on
RewriteCond %{HTTP_HOST} ^www.abc.com [NC]
RewriteRule ^(.*)$ http://www.itcao.com/$1 [L,R=301]
```