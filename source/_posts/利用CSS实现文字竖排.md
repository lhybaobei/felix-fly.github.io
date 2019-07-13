---
title: 利用CSS实现文字竖排
tags:
  - CSS
  - 文字竖排
url: 22.html
id: 22
categories:
  - 编程开发
date: 2008-12-16 18:53:00
---

文字竖排为IE专用属性,默认情况下firefox并不支持文字竖排显示

实现方法有:

1.writing-mode: lr-tb 或 tb-rl

参数说明：

lr-tb 从左向右,从上往下

tb-rl 从上往下,从右向左

2.layout-flow: horizontal 或 vertical-ideographic

参数说明:

horizontal 对象中的内容自左边流入。下一行在前一行下面。这个值适于拉丁语系

vertical-ideographic 对象中的内容自上而下流入，下一行在前一行左面。这个值适于亚洲语系