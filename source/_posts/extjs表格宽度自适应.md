---
title: extjs表格宽度自适应
tags:
  - extjs
  - JavaScript
  - 宽度自适应
  - 表格
url: 1076.html
id: 1076
categories:
  - 编程开发
date: 2011-11-09 22:06:30
---

在extjs中使用表格组件是再经常不过的事情了，不过组件与纯html还是有些不太一样的，有时候很简单的一件事情，可能实现的时候还是需要费些功夫的。  

由于刚刚接触，有太多的未知，其中就遇到一个表格宽度自适应的问题。  

参考着一些示例代码进行尝试修改，发现columns中的width只能接受数值类型，实际转换为px，无法设置auto或者100%，与原始的html有点区别。  

经过一番查阅，发现可以使用另外的方法，就是设置colunms的flex属性，看一下文档是这样描述的：  

> flex : Number  
>   
> This configuration option is to be applied to child items of the container managed by this layout. Each child item with a flex property will be flexed horizontally according to each item's relative flex value compared to the sum of all items with a flex value specified. Any child items that have either a flex = 0 or flex = undefined will not be 'flexed' (the initial size will not be changed).

举个例子，如果表格有3列，其中两列指定了宽度为固定大小，剩余一列设置flex为1或者大于0的值，则此列充满表格剩余的宽度，也就实现了宽度的自适应。  

下面给出一份grid panel的代码样例供参考： ```javascript  

var grid = Ext.create('Ext.grid.Panel', { columns : \[{ text : 'userId', minWidth : 180, flex : 1.5, sortable : true, dataIndex : 'userId' }, { text : 'userName', minWidth : 100, flex : 1, sortable : true, dataIndex : 'userName' }\], // create store before store : store, stateful : true, minHeight : 300, minWidth : 500, margin : '5', viewConfig : { stripeRows : true } }); \\n```