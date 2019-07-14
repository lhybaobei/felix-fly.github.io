---
title: jquery文件上传插件iframe-post-form
tags:
  - iframe-post-form
  - JQuery
  - 插件
  - 文件上传
url: 1010.html
id: 1010
categories:
  - 编程开发
date: 2011-09-09 21:02:51
---

web中免不了就需要使用到文件上传功能，通常有两种做法：  

一是传统的使用form表单提交文件，另外一种就是通过flash实现文件上传。  

jquery也不乏上传文件插件，不过飞尘比较倾向于使用form的形式。  

iframe-post-form就是这样的轻量级ajax文件上传插件，无需flash。  

> Really simple jQuery Ajax File Uploader plugin.

插件自动在body末尾创建iframe并设置form的target属性为iframe  

需要引入js，jquery自然也是必须的  

```html  

\\n```  

页面中设置上传文件使用的form标签  

```html  

\\n```  

在js中绑定上传事件  

```javascript  

$("#uploadForm").iframePostForm({ iframeID: 'iframe-post-form', post: function(){ // uploading, can show some message or do nothing }, complete: function(response){ // console.log(response); // upload finished callback } }); \\n```  

更详细的介绍可以查看这里 [Really simple jQuery Ajax File Upload plugin](http://www.jainaewen.com/files/javascript/jquery/iframe-post-form/)