---
title: 解决extjs中chart显示不下legend的问题
tags:
  - chart
  - extjs
  - JavaScript
  - legend
  - pie
url: 1087.html
id: 1087
categories:
  - 编程开发
date: 2011-11-17 11:44:41
---

在extjs中使用chart类绘制图表时，可以通过设置legend来添加图例，但是当图例类型较多时，就会出现legend显示不全的问题，而chart不会根据legend的标签数量做相应的调整。  

翻查了官方文档，没有找到有关的说明。  

于是又google搜索了一下，依然没有找到有效的解决办法，只是看到有提到可以修改createBox的方法，具体的讨论可以在[sencha的论坛](http://www.sencha.com/forum/showthread.php?131384-ExtJS-4-chart-legend-sizing&s=e258bf71b26ad175490b7fc7bf2b93b2)查看。  

可能语言描述的不是很清楚，通过下面这张图就可以有个很具体的认识了。  

这是一张很典型的饼图：  

![](https://res.cloudinary.com/flyash/image/upload/v1562815222/itcao/177-01_x3msdi.png alt= "default pie chart")  

下面是对应的示例代码：  

```javascript  

Ext.onReady(function() { var data = \[\]; for(var i = 1; i <= 21; i++) { data.push({ name : 'a' + i, value : i }); } var store = Ext.create('Ext.data.Store', { fields : \['name', 'value'\], data : data });  

var panel1 = Ext.create('Ext.panel.Panel', { margin : '20', width : 600, height : 350, title : 'demo', renderTo : Ext.getBody(), items : { width : 600, height : 300, xtype : 'chart', animate : true, store : store, shadow : true, legend : { position : 'right', itemSpacing:5, padding:5 }, series : \[{ type : 'pie', field : 'value', showInLegend : true, highlight : { segment : { margin : 20 } }, label : { field : 'name', display : 'rotate', contrast : true, font : '18px Arial' } }\] } }); }); \\n```  

经过一番尝试，实现了legend中标签的多列显示，当标签数量较少时，依然显示一列，数量较多时（大于一列的情况），可以分两列甚至多列显示，在标签的对齐上花费了比较多的精力，最终采用下面的方式，具体的大家看下代码就明白了。  

对于Ext.chart.LegendItem类的修改  

```javascript  

/\*\* \* ovrride 'Ext.chart.LegendItem' */ Ext.override(Ext.chart.LegendItem, { updatePosition : function(relativeTo) { var me = this, items = me.items, ln = items.length, i = 0, item; if (!relativeTo) { relativeTo = me.legend; } // modify start if (me.legend.height > 0 && me.y > me.legend.maxY) { var r = Math.ceil((me.y - me.legend.maxY) / me.legend.offsetY); me.x += me.legend.columnWidth * r; me.y -= me.legend.offsetY * r; } // modify end for (; i < ln; i++) { item = items\[i\]; switch (item.type) { case 'text' : item.setAttributes({ x : 20 + relativeTo.x + me.x, y : relativeTo.y + me.y }, true); break; case 'rect' : item.setAttributes({ translate : { x : relativeTo.x + me.x, y : relativeTo.y + me.y - 6 } }, true); break; default : item.setAttributes({ translate : { x : relativeTo.x + me.x, y : relativeTo.y + me.y } }, true); } } } }); \\n```  

对于Ext.chart.Legend类的修改  

```javascript  

/\*\* \* ovrride 'Ext.chart.Legend' */ Ext.override(Ext.chart.Legend, { createItems : function() { var me = this, chart = me.chart, surface = chart.surface, items = me.items, padding = me.padding, itemSpacing = me.itemSpacing, spacingOffset = 2, maxWidth = 0, maxHeight = 0, totalWidth = 0, totalHeight = 0, vertical = me.isVertical, math = Math, mfloor = math.floor, mmax = math.max, index = 0, i = 0, len = items ? items.length : 0, x, y, spacing, item, bbox, height, width;  

if (len) { for (; i < len; i++) { items\[i\].destroy(); } }  

items.length = \[\];  

chart.series.each(function(series, i) { if (series.showInLegend) { Ext.each(\[\].concat(series.yField), function(field, j) { item = Ext.create('Ext.chart.LegendItem', { legend : this, series : series, surface : chart.surface, yFieldIndex : j }); bbox = item.getBBox(); width = bbox.width; height = bbox.height;  

if (i + j === 0) { spacing = vertical ? padding + height / 2 : padding; } else { spacing = itemSpacing / (vertical ? 2 : 1); }  

item.x = mfloor(vertical ? padding : totalWidth + spacing); item.y = mfloor(vertical ? totalHeight + spacing : padding + height / 2); totalWidth += width + spacing; totalHeight += height + spacing; maxWidth = mmax(maxWidth, width); maxHeight = mmax(maxHeight, height);  

items.push(item); }, this); } }, me);  

me.width = mfloor((vertical ? maxWidth : totalWidth) + padding * 2); if (vertical && items.length === 1) { spacingOffset = 1; } me.height = mfloor((vertical ? totalHeight - spacingOffset * spacing : maxHeight) + (padding * 2)); me.itemHeight = maxHeight; // modify start var outerHeight = me.chart.height - 20; if (items.length >= 2 && me.height > outerHeight) { var row = math.floor((outerHeight - padding * 2) / (items\[1\].y - items\[0\].y)); if (row > 0) { me.columnWidth = me.width; me.width *= math.ceil(items.length / row); me.height = outerHeight; me.offsetY = items\[row\].y - items\[0\].y; me.maxY = items\[row - 1\].y; } } // modify end } }); \\n```  

经过上面的修改，就可以实现图例的多列显示了，下面是修改后的效果：  

![](https://res.cloudinary.com/flyash/image/upload/v1562815224/itcao/177-02_djcwh5.png alt= "modify pie chart")  

提醒一点，以上的修改是针对legend放在left或者right的情况，对于top和bottom需要考虑的是宽度，有兴趣的朋友可以自行尝试修改。  

记得这两个覆盖类的代码要在创建chart之前执行哦，最后再来个多列显示的图：  

![](https://res.cloudinary.com/flyash/image/upload/v1562815225/itcao/177-03_r831vv.png alt= "resize legend pie chart")