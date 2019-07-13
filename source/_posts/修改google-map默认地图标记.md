---
title: 修改google map默认地图标记
tags:
  - google map
  - 地图标记
url: 11.html
id: 11
categories:
  - 编程开发
date: 2008-12-05 15:12:00
---

以下是官方例子的源码

修改letteredIcon.image图片地址即可更改标记,需要使用绝对路径,相对路径似乎不起作用,笔者开始使用相对路径,结果图片不显示,后改为绝对路径解决. 同时可以对标记大小,位置等做相应修改. ```language <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" v="urn:schemas-microsoft-com:vml"> <head> <meta equiv="content-type" content="text/html; charset=utf-8"> <title>Google 地图 JavaScript API 示例: 定制图标</title> <script src="http://ditu.google.com/maps?file=api&v=2&key=ABQIAAAAzr2EBOXUKnm\_jVnk0OJI7xSosDVG8KKPE1-m51RBrvYughuyMxQ-i1QfUnH94QxWIa6N4U6MouMmBA&hl=zh-CN" type="text/javascript"></script> <script type="text/javascript"> function initialize() { if (GBrowserIsCompatible()) { var map = new GMap2(document.getElementById("map\_canvas")); map.setCenter(new GLatLng(39.917,116.397), 14); map.addControl(new GSmallMapControl());  

// 为所有标记创建指定阴影、图标尺寸灯的基础图标 var baseIcon = new GIcon(); baseIcon.shadow = "http://www.google.com/mapfiles/shadow50.png"; baseIcon.iconSize = new GSize(20, 34); baseIcon.shadowSize = new GSize(37, 34); baseIcon.iconAnchor = new GPoint(9, 34); baseIcon.infoWindowAnchor = new GPoint(9, 2); baseIcon.infoShadowAnchor = new GPoint(18, 25);  

// 创建信息窗口显示对应给定索引的字母的标记 function createMarker(point, index) { // Create a lettered icon for this point using our icon class var letter = String.fromCharCode("A".charCodeAt(0) + index); var letteredIcon = new GIcon(baseIcon); letteredIcon.image = "http://www.google.com/mapfiles/marker" + letter + ".png";  

// 设置 GMarkerOptions 对象 markerOptions = { icon:letteredIcon }; var marker = new GMarker(point, markerOptions);  

GEvent.addListener(marker, "click", function() { marker.openInfoWindowHtml("标记 <b>" + letter + "</b>"); }); return marker; }  

// 随机向地图添加 10 个标记 var bounds = map.getBounds(); var southWest = bounds.getSouthWest(); var northEast = bounds.getNorthEast(); var lngSpan = northEast.lng() - southWest.lng(); var latSpan = northEast.lat() - southWest.lat(); for (var i = 0; i < 10; i++) { var latlng = new GLatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()); map.addOverlay(createMarker(latlng, i)); } } } </script> </head> <body onload="initialize()" onunload="GUnload()"> <div id="map_canvas" style="width: 500px; height: 300px"></div> </body> </html>\\n```