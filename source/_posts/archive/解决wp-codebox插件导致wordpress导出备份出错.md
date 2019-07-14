---
title: 解决wp-codebox插件导致wordpress导出备份出错
tags:
  - wordpress
  - wp-codebox
  - 插件
url: 465.html
id: 465
categories:
  - 互联网络
date: 2009-11-13 21:18:25
---

wordpress导出日志备份的时候出现类似下面的错误：  


```Warning : include_once(../../../wp-config.php) [ function.include-once ]: failed to open stream: No such file or directory in /plugins/wp-codebox/wp-codebox.php on line 32
```

看提示问题是出在wp-codebox.php文件，打开查看，根据文件所在的路径，要包含wordpress的配置文件的确是应该include_once(../../../wp-config.php)，为什么会找不到文件呢？  

尝试删除一个../导出仍然出错，再删除一个../导出正常，也就是include_once(../wp-config.php)  

分析可能是导出日志的执行文件是export.php在/wp-admin/下，此时要包含wp-config.php是应该到上一级的目录中查找，而不是从wp-codebox.php寻找wp-config.php所需要的路径，但是这样改了之后会不会影响到插件前台的使用啊。