---
title: extjs使用store加载远程数据chart报错
tags:
  - chart
  - extjs
  - solr
  - store
  - warning
url: 1142.html
id: 1142
categories:
  - 编程开发
date: 2011-12-09 20:23:37
---

extjs使用store加载远程数据到chart组件时，出现警告信息  

在firebug中可见日志输出如下：  

> Unexpected value NaN parsing height attribute. Unexpected value NaN parsing y attribute.

此处store数据是来自solr查询结果，chart为pie饼图类型，其它类型图表未做测试。  

由于store中的数据是动态从远端服务器获取的，在store提供给chart时，store中的数据一般情况下是空的，这时chart使用空的store就会出现上面的警告信息。  

解决的办法就是在store加载数据成功之后才去创建chart，这样就能保证是有数据的store了，自然也不会出现警告了。  

以下是部分代码：  

// 定义数据模型 ```javascript  

Ext.define('MyChart', { extend : 'Ext.data.Model', fields : \[{ name : 'type', mapping : 'groupValue' }, { name : 'num', mapping : 'doclist.numFound', type : 'int' }\] }); \\n```  

// 定义store ```javascript  

var store = Ext.create('Ext.data.JsonStore', { model : 'MyChart', proxy : { type : 'ajax', url : 'solr/select/', reader : { type : 'json', root : 'grouped.someField.groups' }, extraParams : { 'fl' : '*', 'q' : '*:*', 'group' : true, 'group.field' : 'someField', 'group.ngroups' : true, 'wt' : 'json' } } }); \\n```  

// 加载数据，成功后绘制chart ```javascript  

store.load({ callback : function(r, options, success) { if (success == false) { // show some error message } else { // create chart } } }); \\n```