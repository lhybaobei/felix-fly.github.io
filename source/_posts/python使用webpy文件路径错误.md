---
title: python使用webpy文件路径错误
tags:
  - apache
  - log
  - python
  - webpy
  - 文件路径
url: 1123.html
id: 1123
categories:
  - 编程开发
date: 2011-11-29 21:55:47
---

按照webpy官方给的样例代码进行修改时发现在code.py中引入自定义模块时出现错误：  

> ImportError: No module named someName

错误消息是在apache的log中查看的，页面显示500错误  

此时需要将当前应用的路径加入系统路径：  

> import os import sys sys.path.append(os.path.abspath(os.path.dirname(\_\_file\_\_)))

页面显示正常，可以引入自定义模块了。  

过了一段时间，项目中增加了logging功能，并且是通过配置文件对logging进行初始化的。在python中直接运行脚本没有问题，但是整合到页面中时，又报500了，查看apache错误日志：  

> NoSectionError: No section: 'formatters'

而配置文件中明明有formatters，而且模块本身可以正常运行。  

经过一翻排查，原来还是路径的原因  

将原来的读取配置文件的代码  

> logging.config.fileConfig("logger.conf")

改为下面的即可，注意/  

> import os logging.config.fileConfig(os.path.abspath(os.path.dirname(\_\_file\_\_)) + "/logger.conf")