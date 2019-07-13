---
title: firefox4使用iteye.com博客代码复制 导致浏览器挂掉
tags:
  - firefox
  - flash
  - iteye
  - 代码复制
  - 浏览器
url: 974.html
id: 974
categories:
  - 电脑医生
date: 2011-08-27 11:43:05
---

2011-08-27更新  

在最新发布的firefox6中该问题得到解决。由于中间也存在flash的版本更新，问题的关键目前飞尘还不能确定，哪位朋友知晓请不吝赐教。  

---------------以下文字记录于早些时期----------------  

win7环境下（32/64），使用firefox4访问iteye.com中博客板块，使用代码复制功能将造成浏览器挂掉。  

此处的代码复制功能借助了flash完成部分功能。  

查看在firefox4下的代码  

```html  

Java代码    ![](/images/icon_star.png) ![](/images/spinner.gif) 

\\n```  

通过Chrome11查看也是一样的代码，但复制功能使用正常  

又对比了一下IE9下的代码  

```html  

Java代码 ![](/images/icon_copy.gif)    ![](/images/icon_star.png) ![](/images/spinner.gif) 

\\n```  

对于IE8或IE9没有依赖flash，使用js实现复制，没有问题，只是浏览器会提示需要访问剪切板。