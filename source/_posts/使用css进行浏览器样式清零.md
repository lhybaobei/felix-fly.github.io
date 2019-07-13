---
title: 使用css进行浏览器样式清零
tags:
  - CSS
  - web开发
  - 样式清零
  - 浏览器
url: 1019.html
id: 1019
categories:
  - 编程开发
date: 2011-09-10 10:49:11
---

css是web开发中很重要的元素，良好的css可以实现非常优雅的页面效果。  

但是摆在开发者面前的各种浏览器的兼容性问题常常搞的人焦头烂额。而设计者希望给用户展现的是风格样式统一的web页面还有一致的用户体验。  

开发者虽然不能做到各浏览器完全一样的显示效果，但是有些事情还是可以做到的。  

为了便于统一，一般都会使用一份css清零代码，从而使浏览器的默认样式尽量一致。  

下面这段就是一份很常见也很常用的css样式清零代码：  

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr, acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong, sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption, tbody,tfoot,thead,tr,th,td{border:0;outline:0;vertical-align:baseline; background:transparent;margin:0;padding:0;}
body{line-height:1;}
ol,ul{list-style:none;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:none;}
:focus{outline:0;}
ins{text-decoration:none;}
del{text-decoration:line-through;}
table{border-collapse:collapse;border-spacing:0;}

这个是经过了简单压缩的，下面这个可能更利于阅读：  

```css  

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td { border: 0; outline: 0; vertical-align: baseline; background: transparent; margin: 0; padding: 0; } body { line-height: 1; } ol,ul { list-style: none; } blockquote,q { quotes: none; } blockquote: before,blockquote: after,q: before,q: after { content: none; } : focus { outline: 0; } ins { text-decoration: none; } del { text-decoration: line-through; } table { border-collapse: collapse; border-spacing: 0; } \\n```