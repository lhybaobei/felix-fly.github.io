---
title: 实现extjs表格单元格内容自动换行
tags:
  - extjs
  - JavaScript
  - 单元格
  - 自动换行
  - 表格
url: 1081.html
id: 1081
categories:
  - 编程开发
date: 2011-11-13 19:58:48
---

使用extjs的表格组件时发现有很多默认的设置不是我们所希望的，例如单元格内容自动换行。  

可能会想到修改ext-all.css文件，但是一般我们不会这样做，更简单的是使用新的样式来覆盖ext-all.css中的默认样式。下面给出的两种分别针对ext3和ext4版本。  


```/* for ext3 */
.x-grid3-cell-inner{white-space:normal;}
```


```/* for ext4*/
.x-grid-cell-inner{white-space:normal;}
```

虽然修改样式可以达到想要的效果，不过所有的单元格都会受到影响。  

而我们可能更希望设置某一行数据实现自动换行，其它的单元格并不会受到影响。  

下面这种写法是针对ext-js3的，在ext-js4中不起作用  

```javascript  

function renderName(value, metadata, record){ metadata.attr = 'style="white-space:normal;"'; return value; } \\n```  

针对ext4需要换用另外的方法来实现：  

```javascript  

renderer : function(value, p, record) { return '

' \+ value + '

'; } \\n```