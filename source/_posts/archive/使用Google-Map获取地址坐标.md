---
title: 使用Google Map获取地址坐标
tags:
  - google map
  - 获取坐标
url: 23.html
id: 23
categories:
  - 编程开发
date: 2008-12-16 21:41:00
---

通过地址http://maps.google.com/maps/geo?获取坐标,后面接的参数如下:

q 需要进行地址解析的地址

key 申请到的API密钥

output 生成的输出应有的格式,选项有xml,kml,csv或json.

下面的例子将获取苏州市的坐标:

http://maps.google.com/maps/geo?q=苏州&output=xml&key=abcdefg