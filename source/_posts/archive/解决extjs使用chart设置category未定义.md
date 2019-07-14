---
title: 解决extjs使用chart设置category未定义
tags:
  - category
  - chart
  - extjs
  - JavaScript
  - 未定义
url: 1174.html
id: 1174
categories:
  - 编程开发
date: 2012-03-03 16:06:19
---

本文主要是解决extjs使用chart设置category未定义的问题。  

定义一个json对象，注意其中的数据类型都是字符串。  

> var data = \[{ name : 'Jan', value : '20' }, { name : 'Feb', value : '25' }\];

定义store，此处没有指定数据类型，而这样会带来潜在的问题，后面就可以看到。  

> var store = Ext.create('Ext.data.Store', { fields : \['name', 'value'\], data : data });

创建一个chart，此处设置为category并使用line折线类型。注意此处的数据类型为numeric。  

```javascript  

var chart = Ext.create('Ext.chart.Chart', { width : 500, height : 300, store : store, renderTo : Ext.getBody(), legend : { position : 'bottom' }, axes : \[{ type : 'Category', position : 'bottom', fields : 'name' }, { type : 'Numeric', position : 'left', fields : 'value', decimals : 0, grid : true, minimum : 0 }\], series : \[{ type : 'line', axis : 'left', xField : 'name', yField : 'value', markerCfg : { size : 1, radius : 1 }, tips : { width : 170, height : 60, renderer : function(storeItem, item) { this.setTitle(storeItem.get('name') + '  

' \+ storeItem.get('value')); } } }\] }); \\n```  

放到Ext.onReady(function() {});里就可以看到效果了。  

![](https://res.cloudinary.com/flyash/image/upload/v1562815221/itcao/180-01_mikhpy.png alt= "180-01")  

从图中可以看到，虽然图表画出来了，但是y轴的坐标是错误的。这就是前面data以及store中数据类型与chart中要求的数据不统一造成的。  

不是说js若类型吗，但那也是有类型的。所以需要对data或者store中的数据类型进行一下预处理，以满足chart的需要。  

store在初始化的时候就提供了数据类型的设置，可以自动完成类型的转换。  

> var store = Ext.create('Ext.data.Store', { fields : \[{ name : 'name', type : 'string' }, { name : 'value', type : 'int' }\], data : data });

经过这样修改后，如图显示正常了。但是下面的问题才是本文的重点。  

![](https://res.cloudinary.com/flyash/image/upload/v1562815220/itcao/180-02_cy5tgo.png alt= "180-02")  

假如现在data中只有一条数据：  

> var data = \[{ name : 'Jan', value : '20' }\];

来看看extjs给我们的效果吧：  

![](https://res.cloudinary.com/flyash/image/upload/v1562815219/itcao/180-03_lny9or.png alt= "180-03")  

天哪，怎么这个样子啊，只有一个点折线自然是没有了，就这一个点也不知道跑到哪里了，似乎在左上角的地方。而且还有一个undefined，真是丑陋无比，在注重用户体验的今天这是无法容忍的。  

好吧，那我们自己增加两个端点，让烦人的undefined见鬼去吧。  

> if (data.length === 1) { data.push({ name : 'after' }); data.splice(0, 0, { name : 'before' }); }

来看看效果，有了点进步，但是依然不理想。端点应该只是体现在x轴的标签上，折线就免了，因为两边不一定也不应该是0，理想的效果是，只显示原来的一个点，不需要有线。  

![](https://res.cloudinary.com/flyash/image/upload/v1562815218/itcao/180-04_ckrvvt.png alt= "180-04")  

经过了一番摸索，终于找到了解决的办法。对于data中的数据进行处理，将字符串类型的数据转换为数值型。  

> for (i in data) { data\[i\].value = parseInt(data\[i\].value); }

对于store依然保持原始的定义方式  

> var store = Ext.create('Ext.data.Store', { fields : \['name', 'value'\], data : data });

最终的效果，这下看上去舒服多了。  

![](https://res.cloudinary.com/flyash/image/upload/v1562815216/itcao/180-05_ccydkz.png alt= "180-05")