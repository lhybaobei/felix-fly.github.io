---
title: 为apache配置启用gzip压缩
tags:
  - apache
  - gzip
  - 压缩
  - 服务器
url: 750.html
id: 750
categories:
  - 编程开发
date: 2010-10-09 21:08:57
---

使用gzip压缩能够使得web服务器提升不小的性能，下面给出的是为apache服务器配置启用gzip压缩的方法：  

1\. 去掉#LoadModule headers\_module modules/mod\_headers.so前面的注释#, 2. 添加LoadModule deflate\_module modules/mod\_deflate.so 3. 在VirtualHost中添加


```
     SetOutputFilter DEFLATE
     BrowserMatch ^Mozilla/4 gzip-only-text/html
     BrowserMatch ^Mozilla/4\.0[678] no-gzip
     BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
     SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip dont-vary
     Header append Vary User-Agent env=!dont-vary

```