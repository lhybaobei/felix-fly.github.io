---
title: extjs表格展开更多内容
tags:
  - extjs
  - grid
  - JavaScript
  - RowExpander
  - 展开
url: 1186.html
id: 1186
categories:
  - 编程开发
date: 2012-03-07 21:17:15
---

事情是从官方的一个[表格的例子](http://dev.sencha.com/deploy/ext-4.0.7-gpl/examples/grid/grid-plugins.html)开始的。  

就是其中第一个名为“Expander Rows in a Collapsible Grid”的表格吸引了飞尘。  

通过这个可以展开和折叠的小功能，我们就可以直接在表格中展现更多的内容，而不需要新窗口或者额外的页面。  

这么好的方法自然要用到项目中了，找来先有的表格做测试，对比了一下，与官方例子主要的差别就在于这个plugins属性了。  

于是直接copy来，修改为自己的数据字段，并加入到原有的grid创建代码中。  

```javascript  

plugins: \[{ ptype: 'rowexpander', rowBodyTpl : \[ '

**name:** {name}

', '

**age:** {age}

' \] }\], \\n```  

意料之中的页面出现错误，直接就不显示表格了，看来这个plugins并不简单啊，呵呵。  

又去观察了一下官方例子，发现引用了另外的js：  

> examples/ux/RowExpander.js?_dc=1323855646488

原来这个不在extjs中，而是extjs的扩展插件。  

在自己的extjs文件夹找了下，的确是有这个文件的，那就引用一下好了。  

但是问题并没有彻底解决，这次报脚本错误了：  

> this.view is undefined

官方查到了这个bug，已经在新版本中进行了修正。  

[http://www.sencha.com/forum/showthread.php?141590-New-bug-in-RowExpander-plugin](http://www.sencha.com/forum/showthread.php?141590-New-bug-in-RowExpander-plugin)  

[http://www.sencha.com/forum/showthread.php?139187-rowexpander-does-not-work](http://www.sencha.com/forum/showthread.php?139187-rowexpander-does-not-work)  

项目启动时使用的extjs是4.0.2a版本，于是去看了下最新的版本，升级到了4.0.7。小版本的升级应该不会有太多变化，于是下载最新版本，替换现有的4.0.2a。把已有的功能过了一遍，没有问题，平滑升级。  

关于之前发现的中文本地化一个问题，依然存在，于是手工修改了一下，详细内容就不多说了。  

RowExpander的终于正常工作了。  

赶快体验一下展开表格的酷炫感受吧。不幸的是又出现了新问题，当表格设置了高度，且加载的数据条目较少，表格不会有滚动条，当有多个记录被展开后，表格中内容的高度就超过了表格设定的高度，但是表格并未出现意料中的滚动条，如图所示：  

![](https://res.cloudinary.com/flyash/image/upload/v1562815215/itcao/182-02_ngfjoq.png alt= "182-02")  

![](https://res.cloudinary.com/flyash/image/upload/v1562815214/itcao/182-03_tu3pba.png alt= "182-03")  

而对于开始数据就比较多，表格已经有滚动条的情况，展开是没有问题的。  

查看了RowExpander.js的源码，其中toggleRow就是展开、折叠时做的一些处理，方法的最后一行  

> this.view.up('gridpanel').invalidateScroller();

似乎已经对滚动条进行了考虑，没有再继续追查，通过表格对象的getHeight()方法对比了折叠前后的表格高度，发现一样都是创建表格时设置的高度。  

借鉴之前的经验，在这个时候再对表格执行一下doLayout()，使其重新渲染，但是没有效果，滚动条依旧没有出现。  

经过查阅，refresh可以搞定，增加下面一句：  

> this.view.up('gridpanel').view.refresh();

再来查看表格，展开时久违的滚动条终于露脸了。  

提醒一下，最好保留原始的extjs所有文件，自己修改过的文件，复制一份到项目路径，修改最好添加简单的注释说明。这样以后升级版本时会方便很多。