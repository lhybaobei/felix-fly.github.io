---
title: extjs加载数据等待
tags:
  - extjs
  - JavaScript
  - MessageBox
  - 加载数据
  - 提示信息
url: 1112.html
id: 1112
categories:
  - 编程开发
date: 2011-11-23 21:04:43
---

在extjs中加载数据时一般会给出相应的提示信息，表示当前正在进行某些操作，请用户等待。  

下面以两种类型为例：  

1\. 对于某个容器自身，例如  

> var o=Ext.getCmp('panelId');

显示加载数据提示可以采用这样很简单的方法：  

> o.el.mask('Loading', 'x-mask-loading');

数据加载完成后，取消提示：  

> o.el.unmask();

2\. 对于整个页面，可以使用MessageBox组件  

> Ext.MessageBox.wait('Loadng', 'Please Wait...');

完成后隐藏消息框  

> Ext.MessageBox.hide();