---
title: PHP实现随机页面跳转
tags:
  - php
  - 页面跳转
url: 328.html
id: 328
categories:
  - 互联网络
date: 2009-09-08 13:56:47
---


```< ?php
$url[0] = "http://www.itcao.com/";
$url[1] = "http://www.luluzu.com/ ";
$url[2] = "http://flyash.itcao.com/ ";
$url[3] = "http://smile.itcao.com/ ";
srand ((double)microtime()*1000000);
$randomnum = rand(0, count($url)-1);
header ("Location: $url[$randomnum]");
exit();
?>
srand ((double)microtime()*1000000);
$1一个随机数种子，产生随机数用的
$randomnum = rand(0, count($url)-1);
$1生一个0和url数量-1之间的随机数，也就是上面的地址数组的下标
header ("Location: $url[$randomnum]");
$1现页面跳转
```