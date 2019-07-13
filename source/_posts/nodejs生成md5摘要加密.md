---
title: nodejs生成md5摘要加密
tags:
  - CryptoJS
  - md5
  - nodejs
  - 加密
url: 1295.html
id: 1295
categories:
  - 编程开发
date: 2014-08-24 10:54:59
---

在使用nodejs开发过程中，使用到了crypto模块进行md5加密，但是发现一个问题，就是有中文时加密信息与标准md5计算出的结果不一致，网上大概查了一下，好像是编码什么的问题，具体不去纠结它了，最要紧的是需要保持一致的加密算法。  

找了一下，最终选择了之前在js开发中曾经使用过的crypto-js，现在node里也有实现了，于是拿来测试一下看看，结果如愿以偿。  

下面给出的一段例子可以对比这两者生成的摘要信息，感兴趣的话可以修改text为英文字符串，看看加密后的结果是不是一样的呢？  

```javascript  

var text = '中文'; var crypto = require('crypto'); var md5 = crypto.createHash('md5'); console.log(md5.update(text).digest('hex')); // eeff7ad1ae620adc859df95b565cd590 var CryptoJS = require("crypto-js"); console.log(CryptoJS.MD5(text).toString()); // a7bac2239fcdcb3a067903d8077c4a07 \\n```