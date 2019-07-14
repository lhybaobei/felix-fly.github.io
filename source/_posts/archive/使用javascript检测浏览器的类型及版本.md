---
title: 使用javascript检测浏览器的类型及版本
tags:
  - JavaScript
  - 兼容性
  - 检测浏览器
  - 浏览器
url: 945.html
id: 945
categories:
  - 编程开发
date: 2011-07-22 21:32:22
---

高温终于来袭了，离开了空调的保护，热浪真的无法让人忍受，七月的骄阳真不是盖的~  

前些天一直忙着配置vps，都没时间更新日志了，为啥时间总是这么不够用呢？  

今天使用google reader的时候，忽然想到搜下自己看看，有17个订阅者，感谢朋友们的支持哦，呵呵。  

本次日志的主题是使用javascript检测浏览器的类型及版本，目的就是实现一份浏览器的兼容列表————当浏览器低于特定版本时，执行相关操作，如提示等。  

写的时候只是满足需求，没有做更多封装方面的考虑，有心的朋友自行修改便是。  

代码如下： ```javascript  

/\*\* \* check user's browser type and version */ function checkBrowser(){ var type = "Unknown"; var version = ""; var ua; ua = window.navigator.userAgent.toLowerCase(); //console.log(window.navigator.userAgent); var Sys = {}; var s; (s = ua.match(/msie (\[\\d.\]+)/)) ? Sys.ie = s\[1\] : (s = ua.match(/firefox\\/(\[\\d.\]+)/)) ? Sys.firefox = s\[1\] : (s = ua.match(/chrome\\/(\[\\d.\]+)/)) ? Sys.chrome = s\[1\] : (s = ua.match(/opera.(\[\\d.\]+)/)) ? Sys.opera = s\[1\] : (s = ua.match(/version\\/(\[\\d.\]+).*safari/)) ? Sys.safari = s\[1\] : 0; var result = null; var pass = null; // valid version if (Sys.ie) { type = "IE"; version = Sys.ie; var array = version.split("."); var subVersion = array\[0\] + "." + array\[1\]; if (subVersion < 8.0) { pass = false; } else { pass = true; } } else if (Sys.firefox) { type = "Firefox"; version = Sys.firefox; var array = version.split("."); var subVersion = array\[0\] + "." + array\[1\]; if (subVersion < 3.6) { pass = false; } else { pass = true; } } else if (Sys.chrome) { type = "Chrome"; version = Sys.chrome; var array = version.split("."); var subVersion = array\[0\] + "." + array\[1\]; if (subVersion < 4.0) { pass = false; } else { pass = true; } } else if (Sys.opera) { type = "Opera"; version = Sys.opera; if (version) { pass = false; } } else if (Sys.safari) { type = "Safari"; version = Sys.safari; var array = version.split("."); var subVersion = array\[0\] + "." + array\[1\]; if (subVersion < 4.0) { pass = false; } else { pass = true; } } else { type = "Unknown" pass = false; } if (pass) { return; } else { //TODO something } } \\n```