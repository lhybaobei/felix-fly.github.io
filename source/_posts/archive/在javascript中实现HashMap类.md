---
title: 在javascript中实现HashMap类
tags:
  - HashMap
  - java
  - JavaScript
url: 859.html
id: 859
categories:
  - 编程开发
date: 2011-03-14 20:15:58
---

在java中经常会用到hashmap类，在javascript中也是可以实现hashmap的。  

Set()方法 //在hashMap对象中添加值  

例如 hashMap.Set("key","this is a test");  

Get()方法 //在hashMap对象中获取值  

例如 hashMap.Get("key");  

Contains()方法 //判断hashMap对象中是否有指定变量  

例如 hashMap.Contains("key");  

Remove()方法 //删除hashMap中指定的变量  

例如 hashMap.Remove("key");  

HashMap对象定义


```var hashMap = {  
Set : function(key,value){this[key] = value},  
Get : function(key){return this[key]},  
Contains : function(key){return this.Get(key) == null?false:true},  
Remove : function(key){delete this[key]}  
}
```