---
title: js日期与extjs日期不一致
tags:
  - extjs
  - firebug
  - JavaScript
  - 日期
  - 时间
url: 1158.html
id: 1158
categories:
  - 编程开发
date: 2011-12-30 22:19:13
---

在javascript中使用new Date()获取当前时间，也可以直接将时间格式的字符串转换为时间对象，如：  

> new Date('2011-11-11');

在firebug中输出日期为：  

Date {Fri Nov 11 2011 08:00:00 GMT+0800}  

既然已经指定了时区为GMT+0800，时间就不应该是08:00:00，就是这个原因带来了很多麻烦。  

在extjs中，通过日期组件获取到的时间对象与js的时间有些区别，如果选择2011年11月11日，则可以看到得到的日期为：  

Date {Fri Nov 11 2011 00:00:00 GMT+0800}  

而此时如果需要使用到日期比较时，就会出现问题，因此需要将日期统一为一种形式。  

extjs提供了这样的方法Ext.Date.clearTime()：  

> clearTime( Date date, Boolean clone ) : Date Attempts to clear all time information from this Date by setting the time to midnight of the same day, automatically adjusting for Daylight Saving Time (DST) where applicable. (note: DST timezone information for the browser's host operating system is assumed to be up-to-date)  
>   
> Parameters date : Date The date clone : Boolean true to create a clone of this date, clear the time and return it (defaults to false). Returns Date this or the clone.

可以在firebug中通过下面的代码查看区别：  

> var a=new Date(); console.log(a); var b=Ext.Date.format(a,'Y-m-d'); var c=new Date(b); console.log(c); var d=Ext.Date.clearTime(c); console.log(d);