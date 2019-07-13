---
title: extjs表格分页加载solr数据
tags:
  - extjs
  - JavaScript
  - solr
  - store
  - 分页
  - 表格
url: 1140.html
id: 1140
categories:
  - 编程开发
date: 2011-12-08 20:36:03
---

先说明一下，本文的代码都是基于ext 4.0.2a版本，其它版本可能不适用。  

ext中数据都是通过store获取的，store可以通过配置proxy读取远程数据，此时也可以跨域读取数据，官方的例子就是很好的参考。  

本文的数据来源于solr，并且solr数据通过服务器反向代理获得，这也是解决跨域问题的一种方案。  

在proxy设置中，reader用来解析服务端返回的数据，这里的数据格式为json，root就是对应数据的根节点，对于solr而言，此处就是response.docs，同时totalProperty对应与记录总数。  

对于另外的一组设置extraParams目的是在发送请求时添加额外的参数，对于solr有些参数是必须的。这里查了些资料，对于设置baseParams的方法是无效的，应该是作用于早期版本的。  

```javascript  

var ROWS = 10; var store = Ext.create('Ext.data.JsonStore', { model : 'someModel', pageSize : ROWS, proxy : { type : 'ajax', url : 'solr/select/', reader : { type : 'json', root : 'response.docs', totalProperty : 'response.numFound' }, extraParams : { 'fl' : '*', 'rows' : ROWS, 'q' : '*:*', 'wt' : 'json' } } }); \\n```  

定义好store之后，再来定义grid表格，其中的disableSelection并不是设置表格文字能否选择的配置项，而是设置一条记录能否被选中的状态，loadMask会在加载数据时显示，bbar用来设置表格底部的分页组件，各个配置项可以自行设置。  

```javascript  

var grid = Ext.create('Ext.grid.Panel', { width : 700, height : 300, title : '分页显示solr数据', store : store, disableSelection : true, loadMask : true, columns : \[{ text : "列名", dataIndex : 'someField', width : 100, sortable : true }\], // paging bar on the bottom bbar : new Ext.PagingToolbar({ store : store, displayInfo : true, inputItemWidth : 50, beforePageText : "第", afterPageText : "/ {0}页", firstText : "首页", prevText : "上一页", nextText : "下一页", lastText : "尾页", refreshText : "刷新", displayMsg : "当前显示记录从 {0} - {1} 总 {2} 条记录", emptyMsg : "没有相关记录!" }) }); \\n```  

store设置proxy时，默认是不自动加载数据的，因此在grid定义好后，需要手动加载第一页的数据：  

> store.loadPage(1);

文中的gird组件并没有绑定到页面节点，需要自行处理（绑定或者动态添加），至此分页查询solr的功能就完成了。