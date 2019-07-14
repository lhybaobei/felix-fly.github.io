---
title: extjs表格文本启用选择复制功能
tags:
  - extjs
  - grid
  - JavaScript
  - 复制
  - 表格
  - 鼠标选择
url: 1084.html
id: 1084
categories:
  - 编程开发
date: 2011-11-16 22:15:22
---

extjs提供了方便的表格组件grid供使用，但是默认情况下表格中的文本是不能被选中的，自然也是无法复制的。  

而选择复制文本的需要也是很平常的，于是我们就需要自己动手来解决这个问题，实现extjs的grid文本选择复制功能。  

说明一点，文中所列出的代码片断都是在当前ext 4.0.2a版本下的，其它版本未做测试，请自行斟酌。  

首先自定义一下样式，来覆盖默认的css样式：  

```html  

.x-selectable, .x-selectable * { -moz-user-select: text!important; -khtml-user-select: text!important; } \\n```  

复写extjs的table类，阻止鼠标选择文本的就是这个unselectable  

```javascript  

/\*\* \* override the table class */ Ext.override(Ext.view.Table, { afterRender : function() { var me = this;  

me.callParent(); me.mon(me.el, { scroll : me.fireBodyScroll, scope : me }); if (!me.featuresMC && (me.featuresMC.findIndex('ftype', 'unselectable') >= 0)) { me.el.unselectable(); }  

me.attachEventsForFeatures(); } }); \\n```  

然后再自定义一个feature，启用文本选择功能，通过替换取消unselectable样式，同时增加x-selectable样式  

```javascript  

/\*\* \* define the select feature */ Ext.define('Myext.grid.SelectFeature', { extend : 'Ext.grid.feature.Feature', alias : 'feature.selectable',  

mutateMetaRowTpl : function(metaRowTpl) { var i, ln = metaRowTpl.length;  

for (i = 0; i < ln; i++) { tpl = metaRowTpl\[i\]; tpl = tpl.replace(/x-grid-row/, 'x-grid-row x-selectable'); tpl = tpl.replace(/x-grid-cell-inner x-unselectable/g, 'x-grid-cell-inner'); tpl = tpl.replace(/unselectable="on"/g, ''); metaRowTpl\[i\] = tpl; }; } }); \\n```  

现在可以声明一个selectFeature了


```var selectFeature = Ext.create('Myext.grid.SelectFeature');
```

需要启用文本选择的表格，在创建时添加这个feature就可以了  

```javascript  

Ext.create('Ext.grid.Panel', { title : 'grid example', store : gridStore, // define before width : 600, height : 300, features : \[selectFeature\], columns : \[{ text:'name', dataIndex:'name' }\] // other code } \\n```