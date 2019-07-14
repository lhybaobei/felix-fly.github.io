---
title: extjs更新页面内容
tags:
  - element
  - extjs
  - JavaScript
  - web开发
  - 更新
url: 1104.html
id: 1104
categories:
  - 编程开发
date: 2011-11-19 20:07:09
---

对于使用extjs创建的对象，一般都有对应的方法来修改属性值，对于页面中原有的dom元素或者通过html生成的元素操作起来就略微有点麻烦。  

而某些时候，我们需要使用extjs来更新页面中类似这样的元素文本值。  

一般可以使用Ext.get()方法根据元素的id来取得元素，返回的对象为Ext.core.Element。  

获取到节点后就可以使用update()方法更新了，update()方法实际上是修改了元素的innerHTML属性。  

下面给出部分示例代码：  

```javascript  

var html = '

some text

'; var totalWidget = Ext.create('Ext.panel.Panel', { border : false, width : 300, height : 50, html : html });  

// modify the element content Ext.get('myDiv').update('some new text'); \\n```  

更多关于Ext.core.Element的方法可以查看官方文档。