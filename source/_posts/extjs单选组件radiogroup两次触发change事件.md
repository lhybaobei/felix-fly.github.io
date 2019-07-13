---
title: extjs单选组件radiogroup两次触发change事件
tags:
  - change事件
  - extjs
  - JavaScript
  - radiogroup
  - 单选按钮
url: 1106.html
id: 1106
categories:
  - 编程开发
date: 2011-11-21 20:16:38
---

在extjs中创建单选按钮会用到radiogroup组件，一般情况下当单选按钮被选中或者发生状态改变时，应用会作出相应的处理，例如验证或者触发其它事件。  

通常情况下单选按钮会一组同时出现，于是对radiogroup组件绑定change事件，但是测试发现change事件在一组radio中会被触发两次。经过分析，找到了原因：  

举个例子，比如有一组单选radio，分别是yes和no，默认设置选中yes。  

此时点击no时，yes和no两个元素都会发生选择状态的改变，各自都会触发change事件。  

对radiogroup组件绑定了change事件后，自然change就会被触发两次了。  

不过两次事件还是有些不同的，这里就是根据参数的不同，保证了业务上只执行一次change功能。  

代码片段如下（这是不完整的代码，请根据自身实际情况参考）：  

```javascript  

new Ext.form.RadioGroup({ listeners : { 'change' : function(group, newValue, oldValue) { if (typeof newValue.agree === 'string') { // use alert() for IE browser console.log('newValue', newValue); // someFunction(); } } }, defaults : { name : 'agree', width : 100 }, items : \[{ boxLabel : 'yes', inputValue : 'yes', checked : true }, { boxLabel : 'no', inputValue : 'no' }\] }); \\n```