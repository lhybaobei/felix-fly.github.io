---
title: CSS3中的圆角矩形
tags:
  - CSS
  - 圆角矩形
url: 20.html
id: 20
categories:
  - 编程开发
date: 2008-12-16 12:47:00
---

IE7无法看到圆角矩形,在firefox和safari3中可见圆角效果

div#rounded-rectangular { width: 150px; height: 120px; border: 1px solid #999999; background-color: #00000f; border-radius: 18px; -moz-border-radius: 18px; -webkit-border-radius: 18px; }

源代码如下


```<style type="text/css">
div#rounded-rectangular {
  width: 150px;
  height: 120px;
  border: 1px solid #999999;
  background-color: #00000f;
  border-radius: 18px;
  -moz-border-radius: 18px;
  -webkit-border-radius: 18px;
}
</style>
<div id="rounded-rectangular"></div>
```