---
title: JavaScript屏蔽浏览器脚本错误提示
tags:
  - JavaScript
  - 脚本错误
url: 15.html
id: 15
categories:
  - 编程开发
date: 2008-12-10 20:23:00
---

实现很简单,代码如下

```language
window.onerror=function(){
  //alert("error");
  //定义自己的错误处理过程
  return true;
}
\n```

function()中有三个参数可选:

sMessage 错误信息

sUrl 地址

sLine 行号