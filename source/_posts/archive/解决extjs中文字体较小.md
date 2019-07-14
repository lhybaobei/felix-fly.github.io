---
title: 解决extjs中文字体较小
tags:
  - CSS
  - extjs
  - 中文字体
  - 修改
  - 字体较小
url: 1097.html
id: 1097
categories:
  - 编程开发
date: 2011-11-18 21:45:40
---

extjs毕竟是英语原生的，对于显示中文字体有点小问题，就是字体太小了，看起来很吃力，尤其在现在高分辨率的显示器下，更是突出。  

因此在使用extjs开发中文页面时，就需要对extjs使用的默认的字体设置稍做调整，以适合国内的使用情况。  

在ext-all.css文件中，关于字体大小的设置有很多。一般情况下，我们也不会选择直接修改extjs框架中的文件，转而更为推荐采用css的样式覆盖来达到理想目标。  

从互联网搜索来的关于extjs中文字体偏小的解决方法都比较久远，而目前extjs的最新版本是4.0.2a，相对于之前的2.x、3.x等版本有了较大不同，css中很多命名都已经大相径庭。  

于是手工从ext-all.css文件中整理出了下面的样式集合，此处只抽取了font大小为11px的样式，11px对于中文字体显示偏小，阅读比较吃力，将其增加到12px，如果对于字体另有要求，可以自行设置。  

为了方便修改与维护，另存为样式表文件ext-chinese-font.css  

```css  

.x-mask-msg div{font: normal 12px tahoma, arial, verdana, sans-serif;} .x-btn-default-small .x-btn-inner{font-size: 12px;} .x-btn-default-medium .x-btn-inner{font-size: 12px;} .x-btn-default-large .x-btn-inner{font-size: 12px;} .x-btn-default-toolbar-small .x-btn-inner{font-size: 12px;} .x-btn-default-toolbar-medium .x-btn-inner{font-size: 12px;} .x-btn-default-toolbar-large .x-btn-inner{font-size: 12px;} .x-btn-group-header-text-default-framed{font: normal 12px tahoma, arial, verdana, sans-serif;} table.x-datepicker-inner th{font: normal 12px tahoma, arial, verdana, sans-serif;} table.x-datepicker-inner a{font: normal 12px tahoma, arial, verdana, sans-serif;} .x-monthpicker-item{font: normal 12px tahoma, arial, verdana, sans-serif;} .x-menu-item-text{font-size: 12px;} .x-column-header{font: normal 12px /15px tahoma, arial, verdana, sans-serif;font: normal 12px tahoma, arial, verdana, sans-serif;} .x-grid-row .x-grid-cell{font: normal 12px tahoma, arial, verdana, sans-serif;} .x-grid-rowbody{font: normal 12px /13px tahoma, arial, verdana, sans-serif;} .x-grid-group-title{font: bold 12px tahoma, arial, verdana, sans-serif;} .x-grid-row-editor .x-form-field{font: normal 12px tahoma, arial, verdana, sans-serif !important} .x-grid-row-editor .x-form-display-field {font: normal 12px tahoma, arial, verdana, sans-serif !important;} .x-form-invalid-under{font: normal 12px tahoma, arial, verdana, sans-serif;} .x-fieldset-header{font: 12px bold tahoma, arial, verdana, sans-serif;} .x-html-editor-tb .x-font-select{font-size: 12px} .x-panel-header-default{font-size: 12px;} .x-panel-header-text-default{font-size: 12px;} .x-panel-header-default-framed{font-size: 12px;} .x-panel-header-text-default-framed{font-size: 12px;} .x-tip-header-text{font-size: 12px;} .x-tip-header, .x-tip-body, .x-form-invalid-tip-body{font-size: 12px;} .x-progress-text{font-size: 12px;} .x-toolbar{font-size: 12px;} .x-toolbar .x-form-item-label{font-size: 12px;} .x-toolbar .x-toolbar-text{font-size: 12px;} .x-window-header-text-default{font-size: 12px} .x-tab-bar{font-size: 12px;} .x-tab button{font-size: 12px;} .x-dd-drag-ghost{font: normal 12px tahoma, arial, verdana, sans-serif;} \\n```  

在项目中引用ext-all.css之后，再引入ext-chinese-font.css即可解决extjs中文字体偏小的问题了。