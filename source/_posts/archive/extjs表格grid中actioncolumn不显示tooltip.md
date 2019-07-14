---
title: extjs表格grid中actioncolumn不显示tooltip
tags:
  - CSS
  - extjs
  - grid
  - JavaScript
  - tooltip
  - 表格
url: 1136.html
id: 1136
categories:
  - 编程开发
date: 2011-12-05 20:51:03
---

按照extjs官方的例子创建了表格，并且设置了actioncolumn，但是无论如何就是没有tooltip显示，真是奇怪。  

图片也显示正常，点击事件也是有监听到的。  

部分代码如下：  

> { xtype:'actioncolumn', width:50, items: \[{ icon: 'images/edit.png', // Use a URL in the icon config tooltip: 'Edit', handler: function(grid, rowIndex, colIndex) { // something } }\] }

折腾了半天，在api文档中查看Ext.grid.column.Action的tooltip属性设置时，是这样说的：  

> tooltip : String A tooltip message to be displayed on hover. Ext.tip.QuickTipManager must have been initialized.

原来需要Ext.tip.QuickTipManager这个对象初始化。于是在onReady()方法中添加：  

```javascript  

Ext.onReady(function() { Ext.tip.QuickTipManager.init(); // init(); }); \\n```  

此时再来看例子some-path/ext-4.0.2a/examples/grid/array-grid.js，原来也是有的。  

这个tooltip是解决了，但是鼠标指针的状态还是不对啊，没有变成手型。  

例子some-path/ext-4.0.2a/examples/grid/array-grid.html的确是手型，看了下源码，原来是要自己设置css样式的。  

```html  

/\* style rows on mouseover */ .x-grid-row-over .x-grid-cell-inner { font-weight: bold; } /* shared styles for the ActionColumn icons */ .x-action-col-cell img { height: 16px; width: 16px; cursor: pointer; } /* custom icon for the "buy" ActionColumn icon */ .x-action-col-cell img.buy-col { background-image: url(../shared/icons/fam/accept.gif); } /* custom icon for the "alert" ActionColumn icon */ .x-action-col-cell img.alert-col { background-image: url(../shared/icons/fam/error.gif); } \\n```  

飞尘更倾向于设置iconCls属性，在外部css文件中设置样式  

> .gridAction{cursor: pointer;}

这时可爱的手型终于出现了，如果需要更多的图标变换，可以设置getClass来实现，例子中也有体现，不多说啦。