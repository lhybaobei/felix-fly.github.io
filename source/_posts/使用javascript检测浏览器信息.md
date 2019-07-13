---
title: 使用javascript检测浏览器信息
tags:
  - JavaScript
  - 浏览器
url: 262.html
id: 262
categories:
  - 编程开发
date: 2009-07-11 02:50:15
---

```javascript

	#agent-test{
		font-family:arial,verdana;
		margin: 1px;
		font-size:13px;
		border:1px solid #afc784;
		padding-left:2px;
	}


function test(){
	var browser=navigator;
	var tmp='<table><tr><td>Browser Name</td><td>'+browser.appName
		+'</td></tr><tr><td>Browser Version</td><td>'+browser.appVersion
		+'</td></tr><tr><td>Browser Platform</td><td>'+browser.platform
		+'</td></tr><tr><td>Cookies Enabled</td><td>'+browser.cookieEnabled
		+'</td></tr><tr><td>User Agent</td><td>'+browser.userAgent
		+'</td></tr></table>';
	document.getElementById("agent-test").innerHTML=tmp;
}

$1击检测
\n```