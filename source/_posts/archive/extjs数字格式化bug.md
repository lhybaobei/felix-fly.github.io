---
title: extjs数字格式化bug
tags:
  - extjs
  - JavaScript
  - 中文
  - 数字
  - 本地化
  - 格式化
url: 1134.html
id: 1134
categories:
  - 编程开发
date: 2011-12-04 20:21:36
---

在用extjs开发项目时，遇到一个很奇怪的问题。需求是将原始数字转换为带有逗号分隔符的千位计数法。  

ext也提供了这样的工具，就是

Ext.util.Format.number()

参考文档的说明，使用也是比较简单的：  

> Ext.util.Format.number(100000, "0,000")

这样格式化后的数字显示为100,000  

但是这样一个简单的转换却没有想象中那么顺利，返回的结果很出人意料，居然是100.000  

怎么搞的啊，翻看了源码，没有问题啊，而且明明定义了的：  

> Ext.apply(UtilFormat, { thousandSeparator: ',', ...

加了日志输出，真怪，UtilFormat对象的thousandSeparator属性竟然是.而不是,  

折腾了好久也没找到什么地方这个属性被修改了。偶然在查看firebug中输出的UtilFormat对象时，看到currencySign属性是￥，就猜想是不是因为设置了中文本地化的原因。  

赶紧将html文件中引用的ext-lang-zh_CN.js注掉  

```html  

\\n```  

刷新页面，输出正常了，这回是100,000了  

于是打开ext-lang-zh_CN.js来看，赫然写到：  

```javascript  

if(Ext.util.Format){ Ext.apply(Ext.util.Format, { thousandSeparator: '.', decimalSeparator: ',', currencySign: '\\u00a5', // Chinese Yuan dateFormat: 'y年m月d日' }); } \\n```  

就算中文，也是用逗号作为千位分隔符的吧，不知道哪位大侠给飞尘在此设了个陷阱，真是摔个够呛啊。  

将thousandSeparator和decimalSeparator属性值对调，问题得以解决。