---
title: javascript阿拉伯数字转中文
tags:
  - JavaScript
  - 中文
  - 转换
  - 阿拉伯数字
url: 984.html
id: 984
categories:
  - 编程开发
date: 2011-09-01 22:14:27
---

有时会遇到这样的需求，原始数据是数值型的数据，也就是阿拉伯数字，例如“123”，而在业务逻辑中，需要展现在页面中的为中文的数字字符，例如“一百二十三”。  

一般通过javascript转换一下就能满足我们的需求了。  

下面这个方法不是飞尘原创的，取材于互联网，针对自身的需要做了小小的修改。  

将转换方法放到了工具包中，需要转换阿拉伯数字的时候，调用一下就可以了。  


```Utils.numberToChinese(123);
```

返回字符串“一百二十三”  

下面是程序源代码  

```javascript  

/\*\* \* 工具包 */ var Utils = { /** * 数字转中文 * * @number {Integer} 形如123的数字 * @return {String} 返回转换成的形如 一百二十三 的字符串 */ numberToChinese : function(number) { /* * 单位 */ var units = '个十百千万@#%亿^&~'; /* * 字符 */ var chars = '零一二三四五六七八九'; var a = (number + '').split(''), s = \[\]; if (a.length > 12) { throw new Error('too big'); } else { for ( var i = 0, j = a.length - 1; i <= j; i++) { if (j == 1 || j == 5 || j == 9) {// 两位数 处理特殊的 1* if (i == 0) { if (a\[i\] != '1') s.push(chars.charAt(a\[i\])); } else { s.push(chars.charAt(a\[i\])); } } else { s.push(chars.charAt(a\[i\])); } if (i != j) { s.push(units.charAt(j - i)); } } } // return s; return s.join('').replace(/零(\[十百千万亿@#%^&~\])/g, function(m, d, b) {// 优先处理 零百 零千 等 b = units.indexOf(d); if (b != -1) { if (d == '亿') return d; if (d == '万') return d; if (a\[j - b\] == '0') return '零' } return ''; }).replace(/零+/g, '零').replace(/零(\[万亿\])/g, function(m, b) {// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的 return b; }).replace(/亿\[万千百\]/g, '亿').replace(/\[零\]$/, '').replace(/\[@#%^&~\]/g, function(m) { return { '@' : '十', '#' : '百', '%' : '千', '^' : '十', '&' : '百', '~' : '千' }\[m\]; }).replace(/(\[亿万\])(\[一-九\])/g, function(m, d, b, c) { c = units.indexOf(d); if (c != -1) { if (a\[j - c\] == '0') return d + '零' + b } return m; }); } }; \\n```