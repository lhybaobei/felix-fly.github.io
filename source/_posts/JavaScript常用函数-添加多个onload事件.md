---
title: JavaScript常用函数-添加多个onload事件
tags:
  - JavaScript
url: 12.html
id: 12
categories:
  - 编程开发
date: 2008-12-10 16:29:00
---

代码清单


```language
function addLoadEvent(func){
  var oldonload=window.onload;
  if(typeof window.onload!='function'){
    window.onload=func;
  }else{
    window.onload=function(){
      oldonload();
      func();
    }
  }
}
\n```


当需要多个函数事件绑定到onload上时,只需要使用

addLoadEvent(fun1); addLoadEvent(fun2);

即可