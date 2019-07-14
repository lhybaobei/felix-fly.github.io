---
title: 关于css的inline-block属性
tags:
  - CSS
  - IE
  - inline-block
  - 布局
url: 834.html
id: 834
categories:
  - 编程开发
date: 2011-01-20 21:55:06
---

css中的display:inline-block是将对象呈现为内联对象，但是对象的内容作为块对象。相连的内联对象会在同一行内，允许空格。  

但对于这个属性不是所有浏览器都识别。支持的浏览器有：Opera、Safari。  

在IE下对内联对象（如a/span等）设置此属性会触发layout，使内联对象拥有了display:inline-block属性相似的表现。  

例如:

span{
  display:inline-block;
}

对块级元素设置此属性是不起作用的。