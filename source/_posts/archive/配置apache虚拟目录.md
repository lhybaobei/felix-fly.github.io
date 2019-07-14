---
title: ' 配置apache虚拟目录'
tags:
  - apache
  - php
  - 虚拟目录
  - 配置
url: 498.html
id: 498
categories:
  - 互联网络
date: 2010-01-10 22:02:56
---

配置apache虚拟目录本来是件很简单的事情，可是却遇到了一系列的问题，先说下如何设置吧--  

打开apache配置文件，找到模块，在其内添加


```Alias /study "E:/学习/"
```

其中/study是虚拟目录，E:/学习/为物理路径  

接着在后面添加


```
    AllowOverride None
    Options None
    Order allow,deny
    Allow from all

```

保存配置文件重新启动apache  

这里就遇到了一个问题，由于物理路径使用的是中文，修改了配置文件后，apache无法启动，网上查了下，需要修改文件编码，可以使用类似UEStudio等文本编辑软件将apache配置文件另存为UTF-8编码格式，这次再启动apache成功。  

写了个简单的php文件测试，使用到数组函数，浏览器访问出错，以为编码问题，另存为UTF-8格式，问题依旧


```include_path='.;C:\php5\pear'
```

错误提示可能不同，但一般包含这个提示  

问题的关键是测试文件中并不包含require、include等调用，中文的目录还真是问题多，查找了半天也没找到适合的解决方法，于是将中文目录改为英文


```Alias /study "E:/study/"

    AllowOverride None
    Options None
    Order allow,deny
    Allow from all

```

浏览器访问测试文件，一切正常。