---
title: JavaScript使用异步对象连接服务器
tags:
  - ajax
  - JavaScript
  - xml
url: 18.html
id: 18
categories:
  - 编程开发
date: 2008-12-15 11:57:00
---

创建浏览器兼容的XMLHttpRequset对象

```language
var xmlHttp;
funtcion createXMLHttpRequset(){
  if(window.ActiveXObject)
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  else if(window.XMLHttpRequset)
    xmlHttp=new XMLHttpRequset();
}
\n```