---
title: javascript中文字符串截断函数
tags:
  - JavaScript
  - 字符串
  - 截断
url: 246.html
id: 246
categories:
  - 编程开发
date: 2009-07-08 03:13:11
---

javascript中的substr()函数对英文字符有效，由于中文字符占两个字节，所以无法直接使用此函数，可以通过下面方面实现中文字符截断功能。


```javascript

function strDisplay(str,n){ 
	var r =/[^\x00-\xff]/g; 
 	if(str.replace(r, "mm").length > n){ 
		var m = Math.floor(n/2); 
		for(var i=m; i<str .length; i++){ 
			if(str.substr(0, i).replace(r, "mm").length>=n){ 
				return str.substr(0, i) +"…"; 
			} 
		} 
	} 
	return str; 
}
</str>\n```