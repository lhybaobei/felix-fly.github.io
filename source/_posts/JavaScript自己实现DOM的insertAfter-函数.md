---
title: JavaScript自己实现DOM的insertAfter()函数
tags:
  - JavaScript
url: 13.html
id: 13
categories:
  - 编程开发
date: 2008-12-10 18:52:00
---

DOM只提供了insertBefore()方法,将新元素插入到现有元素的前面,现在我们来实现自己的insertAfter()函数,代码如下


```language
function insertAfter(newElement,targetElement){
  var parent=targetElement.parentNode;
  if(parent.lastChild==targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
\n```


这样我们就可以将新节点插入到现有节点后面了