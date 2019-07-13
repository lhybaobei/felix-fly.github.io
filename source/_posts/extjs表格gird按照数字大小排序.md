---
title: extjs表格gird按照数字大小排序
tags:
  - extjs
  - grid
  - JavaScript
  - 排序
  - 数字
url: 1138.html
id: 1138
categories:
  - 编程开发
date: 2011-12-06 21:01:32
---

extjs中默认情况下，表格grid是允许列排序的，并且是以asc作为排序规则。  

而这种排序方式对于以字符形式存在的数字就不合适了。  

此时只需要简单的在创建store数据源的时候，设置一下需要以数值大小排序的field类型即可。  

比如下面的这个例子：  

> var store = Ext.create('Ext.data.Store', { fields : \['filename', { name : 'size', type : 'int' }, 'createtime'\], data : d });

经过指定数据类型后，文件以大小排序就正常了。