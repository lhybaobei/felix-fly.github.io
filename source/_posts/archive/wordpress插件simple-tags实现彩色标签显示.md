---
title: wordpress插件simple tags实现彩色标签显示
tags:
  - simple tags
  - wordpress
  - 彩色标签
  - 插件
url: 392.html
id: 392
categories:
  - 互联网络
date: 2009-09-25 19:01:46
---

升级了插件，发现没了彩色显示，又找了下，记录下来，以后再升级时就好修改了，呵呵。  

在wp-content\\plugins\\simple-tags\\2.7目录下文件simple-tags.client.php中先找到getColorByScale的function：  

注释掉或者删除以下语句：  

$scale\_color = $scale\_color / 100; $minr = hexdec(substr($min\_color, 1, 2)); $ming = hexdec(substr($min\_color, 3, 2)); $minb = hexdec(substr($min\_color, 5, 2)); $maxr = hexdec(substr($max\_color, 1, 2)); $maxg = hexdec(substr($max\_color, 3, 2)); $maxb = hexdec(substr($max\_color, 5, 2)); $r = dechex(intval((($maxr - $minr) * $scale\_color) + $minr)); $g = dechex(intval((($maxg - $ming) * $scale\_color) + $ming)); $b = dechex(intval((($maxb - $minb) * $scale_color) + $minb));  

替换为以下代码：  

//Colorful Tag Cloud start $r = dechex(rand(0,255)); $g = dechex(rand(0,196)); $b = dechex(rand(0,255)); //Colorful Tag Cloud end  

显示标签个数、样式以及字体大小在后台Simple Tags的选项中进行设置。  

在需要显示标签云的位置加上<?php st\_tag\_cloud(); ?>，就可以看到彩色的标签云了。