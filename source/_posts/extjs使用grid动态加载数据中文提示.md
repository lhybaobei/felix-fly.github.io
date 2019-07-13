---
title: extjs使用grid动态加载数据中文提示
tags:
  - extjs
  - grid
  - JavaScript
  - 中文
  - 提示
  - 本地化
url: 1145.html
id: 1145
categories:
  - 编程开发
date: 2011-12-13 21:32:56
---

extjs默认的消息文本都是英文的，当然它已经提供了本地化的方法，只需要在页面中引用ext-all.js之后再引用一下locale文件夹下的ext-lang-zh_CN.js就可以了，这样界面中的大部分消息文本就是中文显示了。  

设置grid使用动态store数据的情况下，从远程加载数据时，grid会锁定并有相应的提示，默认为loading...  

本文虽然已经本地化了，但是此处消息依然是英文，虽说影响不大，但是整体却不统一了，肯定是要完善的，自己这关就无法通过。  

但是翻看了文档，对于例子中的loadMask : true属性文档中并未体现，而且即使不设置，也会有加载提示。文档中提到的setLoading()方法，设置了字符串参数也是无效，依然显示英文，文档是这么说的，飞尘应该没理解错吧。  

> setLoading( Boolean/Object/String load, Boolean targetEl ) : Ext.LoadMask This method allows you to show or hide a LoadMask on top of this component.  
>   
> Parameters- load : Boolean/Object/String True to show the default LoadMask, a config object that will be passed to the LoadMask constructor, or a message String to show. False to hide the current LoadMask. targetEl : Boolean True to mask the targetEl of this Component instead of the this.el. For example, setting this to true on a Panel will cause only the body to be masked. (defaults to false) Returns- Ext.LoadMask The LoadMask instance that has just been shown.

既然此路不通，只能另觅他途。在ext-all-debug.js文件中遍历了一下，包含loading...文本的共有4处，对照着ext-lang-zh_CN.js文件，发现有三处文本已经被本地化覆盖，但是还有一处未做处理，在ext-all-debug.js文件中，定义Ext.view.AbstractView时有行代码很可疑，本文的extjs版本为4.0.2a，代码在58419行：  

loadingText: 'Loading...',  

找到了原因，那就自己来本地化吧。  

将原始的ext-lang-zh\_CN.js备份为ext-lang-zh\_CN\_bak.js，然后在ext-lang-zh\_CN.js文件中添加下面的代码：  

```javascript  

if(Ext.view.AbstractView){ Ext.apply(Ext.view.AbstractView.prototype, { loadingText: '读取中...', }); } \\n```  

刷新页面，英文不再o(∩_∩)o