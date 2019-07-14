---
title: 解决wordpress上传附件提示出错
tags:
  - wordpress
  - 上传
  - 文件类型
  - 附件
url: 552.html
id: 552
categories:
  - 互联网络
date: 2010-03-26 14:10:23
---

刚才写了篇日志，有个小软件打算作为附件传上来，结果上传的时候出错，使用flash上传提示说：文件类型不符合安全规则。试试别的文件。  

换成使用浏览器上传的方式，又说是I/O错误，赶紧网上搜寻，原来如此——wordpress毕竟是舶来品，国外多使用zip格式的压缩文件，飞尘刚才要上传的是个rar文件，而wordpress默认不支持rar类型的文件，知道了原因，自然解决方法也就简单了。  

第一种，“偷梁换柱”，最简单，把文件压缩为zip格式，使用winrar压缩的时候记得选择一下就ok了，然后上传zip文件就没有问题了。  

第二种，“釜底抽薪”，就是将文件类型检测关闭（个人不推荐），编辑配置文件wp-config.php，添加一行代码：


```define('ALLOW_UNFILTERED_UPLOADS', true);
```

第三种，“聘请外援”，就是安装插件PJW Mime Config，插件地址如下  

[http://wordpress.org/extend/plugins/pjw-mime-config/](http://wordpress.org/extend/plugins/pjw-mime-config/)  

第四种，“自力更生”，其实飞尘最喜欢这种，呵呵，修改源代码，添加对rar文件类型的支持：  

编辑wp-includes/functions.php文件，文件较大，建议使用搜索，查找

application/zip

大约在2316行，在这行下面添加  

'rar' => 'application/rar',

如果需要支持更多文件类型，都可以在此添加，修改完后保存即可。  

注意使用Windows记事本编辑文件，保存时记得选择编码为UTF-8