---
title: 服务端response返回pre标记
tags:
  - JavaScript
  - json
  - pre标记
  - response
  - 服务端
url: 1012.html
id: 1012
categories:
  - 编程开发
date: 2011-09-09 21:11:23
---

服务端通过response返回数据时，要求包含pre标记，例如返回类似下面的结果：  


```<pre>{"isSuccess":false}</pre>
```

客户端获取到服务器返回的数据后，进行json解析时出现出错。  

原因是没有设置字符编码格式，只要简单的设置下就可以解决这个问题了：  


```response.setCharacterEncoding("utf-8");
response.setContentType("text/html");
```

或者也可以这样：  


```response.setContentType("text/html; charset=UTF-8");
```