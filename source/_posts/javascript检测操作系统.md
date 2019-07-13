---
title: javascript检测操作系统
tags:
  - JavaScript
  - 操作系统
  - 浏览器
url: 939.html
id: 939
categories:
  - 编程开发
date: 2011-07-01 21:01:40
---

之前一般只是使用javascript检测浏览器类型及版本号，然后针对一些特殊的浏览器做一些相应的处理。目前遇到的需求是，同时还有考虑操作系统的类型，因为有些浏览器在不同的操作系统下还是有点不同的。  

代码是参考自网络的，实现的原理与检测浏览器类似，都是通过判断客户端代理的一些特征实现操作系统的识别。  

当然user-agent之类是可以人为修改的，这里不去纠结。我们认为大多数都是正常情况，嘿嘿。  

windows8还只是泄漏版，未来还不确定，看起来还是windows系统的版本最复杂。  

代码比较简单，不多啰嗦了。  

```javascript  

/\*\* \* check user's operating system */ function checkSystem(){ var ua = window.navigator.userAgent; var os = window.navigator.platform; var isWin = (os == "Win32") || (os == "Windows"); var isMac = (os == "Mac68K") || (os == "MacPPC") || (os == "Macintosh") || (os == "MacIntel"); if (isMac) return "Mac"; var isUnix = (os == "X11") && !isWin && !isMac; if (isUnix) return "Unix"; var isLinux = (String(os).indexOf("Linux") > -1); if (isLinux) return "Linux"; if (isWin) { var isWin2K = ua.indexOf("Windows NT 5.0") > -1 || ua.indexOf("Windows 2000") > -1; if (isWin2K) return "Win2000"; var isWinXP = ua.indexOf("Windows NT 5.1") > -1 || ua.indexOf("Windows XP") > -1; if (isWinXP) return "WinXP"; var isWin2003 = ua.indexOf("Windows NT 5.2") > -1 || ua.indexOf("Windows 2003") > -1; if (isWin2003) return "Win2003"; var isWinVista = ua.indexOf("Windows NT 6.0") > -1 || ua.indexOf("Windows Vista") > -1; if (isWinVista) return "WinVista"; var isWin7 = ua.indexOf("Windows NT 6.1") > -1 || ua.indexOf("Windows 7") > -1; if (isWin7) return "Win7"; } return "other"; } \\n```