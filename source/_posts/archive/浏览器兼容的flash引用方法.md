---
title: 浏览器兼容的flash引用方法
tags:
  - flash
  - 兼容性
  - 浏览器
url: 709.html
id: 709
categories:
  - 编程开发
date: 2010-09-20 21:09:05
---

浏览器的兼容性真是个让人头疼的问题，flash的引用也有所不同，当然apple就更牛了，天生就是不支持flash，期待着html5的到来啊，呵呵。  

目前在html中嵌入flash有更好的选择，就是使用[swfobject](http://code.google.com/p/swfobject/)，具体的方法就不详述了，这里给出的是最简单的方法，参考自官方给出的代码示例：  

最精简的引用 ```HTML  

  \\n```  

更详细的范例 ```HTML  

...   ...   \\n```  

开始的时候只有在firefox下flash能够显示，IE下无法加载，查阅了官方文档，原来是引用代码不正确，修正后各浏览器正常。