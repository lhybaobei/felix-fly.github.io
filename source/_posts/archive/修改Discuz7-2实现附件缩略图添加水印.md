---
title: 修改Discuz7.2实现附件缩略图添加水印
tags:
  - discuz
  - 水印
  - 缩略图
  - 附件
url: 516.html
id: 516
categories:
  - 互联网络
date: 2010-03-04 18:43:32
---

Discuz7.2默认状态下论坛附件以缩略图图查看时是不添加水印的，而这在一定程度上不能很好的保护文件的版权，下面就来修改一下，让附件缩略图也加上水印吧！  

修改方法很简单，具体如下：  

论坛根目录include文件夹下找到post.func.php文件，使用文件编辑软件打开  

搜索如下这行代码


```$attach = $image->attach;
```

在这行代码的下面添加


```if(file_exists($target.'.thumb.jpg')) {
	$image = new Image($target.'.thumb.jpg',$target.'.thumb.jpg');
	$image->Watermark();
}
```

保存文件即可，如果使用记事本编辑UTF-8文件时记得修改编码格式。