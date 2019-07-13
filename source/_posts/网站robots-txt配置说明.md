---
title: 网站robots.txt配置说明
tags:
  - google
  - robots
  - 搜索引擎
url: 928.html
id: 928
categories:
  - 互联网络
date: 2011-06-26 15:47:38
---

robots.txt文件一般放置于网站根目录下面，用来控制各大搜索引擎的网络蜘蛛对网站内容的抓取控制。  

下面列出的是一些常用的配置项说明（涉及到User-agent项时，本文的配置针对google爬虫设置，其它搜索引擎可参考）：  

Disallow 行列出的是您要拦截的网页。 您可以列出某一具体网址或网址模式。 条目应以正斜杠 (/) 开头。  

要拦截整个网站，请使用正斜扛。  

Disallow: /  

要拦截目录及其中的所有内容，请在目录名后添加正斜杠。  

Disallow: /forbidden/  

要拦截某个网页，请列出该网页。  

Disallow: /private_file.html  

对google而言，要从 Google 图片搜索中删除特定图片，请添加如下内容：  

User-agent: Googlebot-Image Disallow: /images/image.jpg  

要从 Google 图片搜索中删除网站上的所有图片：  

User-agent: Googlebot-Image Disallow: /  

要拦截某一特定文件类型的文件（例如 .gif），请使用以下内容：  

User-agent: Googlebot Disallow: /*.gif$  

要在阻止网站页面被抓取的同时仍然在这些页面上显示 AdSense 广告，请禁止除 Mediapartners-Google 以外的所有漫游器。 这样可使页面不出现在搜索结果中，同时又能让 Mediapartners-Google 漫游器分析页面，从而确定要展示的广告。 Mediapartners-Google 漫游器并不与其他 Google User-agent 共享网页。 例如：  

User-agent: * Disallow: /folder1/  

User-agent: Mediapartners-Google Allow: /folder1/  

请注意，指令区分大小写。 例如， Disallow: /junk\_file.asp 会拦截 http://www.example.com/junk\_file.asp，但会允许 http://www.example.com/Junk_file.asp。  

模式匹配  

Googlebot（但不是所有搜索引擎）遵循某些模式匹配。  

要匹配连续字符，请使用星号 (*)。例如，要拦截对所有以 private 开头的子目录的访问：  

User-agent: Googlebot Disallow: /private*/  

要拦截对所有包含问号 (?) 的网址的访问（具体地说，这种网址以您的域名开头，后接任意字符串，然后是问号，而后又是任意字符串），可使用以下条目：  

User-agent: Googlebot Disallow: /*?  

要指定与某个网址的结束字符相匹配，请使用 $。 例如，要拦截以 .xls 结束的所有网址，请使用：  

User-agent: Googlebot Disallow: /*.xls$  

您可将此模式匹配与 Allow 指令配合使用。 例如，如果 ? 代表一个会话 ID，您可能希望排除包含 ? 的所有网址，以便确保 Googlebot 不会抓取重复网页。 但是以 ? 结束的网址 可能是您希望包含的网页的版本。 在此情况下，您可以对 robots.txt 文件进行如下设置：  

User-agent: * Allow: /*?$ Disallow: /*?  

Disallow: / *? 指令将阻止包含 ? 的所有网址 （具体而言，它将拦截所有以您的域名开头、后接任意字符串，然后是问号，而后又是任意字符串的网址）。  

Allow: /*?$ 指令将包含以 ? 结束的所有网址 （具体而言，它将允许包含所有以您的域名开头、后接任意字符串，然后是问号 (?)，问号之后没有任何字符的网址）。