---
title: python启用日志功能
tags:
  - log
  - python
  - webpy
  - 日志
  - 输出
url: 1119.html
id: 1119
categories:
  - 编程开发
date: 2011-11-26 21:07:50
---

在python中一般情况下可以使用print进行简单调试，随着项目的不断演进，日志的需求就越发重要了。  

下面先给出一个最简单的日志输出形式：  

> import logging logging.warning('Oh, my log.')

因为默认情况下python定义日志输出级别是warning以上的，所以如果这里用debug的话会看不到日志输出。  

当然我们可以使用basicConfig进行设置，修改日志的输出级别  

> logging.basicConfig(level=logging.DEBUG)

个人更喜欢使用配置文件来设置  

```python  

import logging import logging.config  

logging.config.fileConfig("logger.conf") \\n```  

使用上面的配置文件后，发现python执行脚本没有问题，但是在使用webpy配置apache的情况下报错：  

> NoSectionError: No section: 'formatters'

需要这样来加载配置文件  

```python  

import logging import logging.config import os  

logging.config.fileConfig(os.path.abspath(os.path.dirname(\_\_file\_\_)) + "/logger.conf") \\n```  

相应的配置文件logger.conf如下  

```txt  

#logger.conf ############################################### \[loggers\] keys=root \[logger\_root\] level=DEBUG handlers=hand ############################################### \[handlers\] keys=console,file \[handler\_console\] class=StreamHandler level=DEBUG formatter=form args=(sys.stdout,) \[handler\_file\] class=FileHandler level=DEBUG formatter=form args=('python.log', 'a') ############################################### \[formatters\] keys=form \[formatter\_form\] format=%(asctime)s %(filename)s\[line:%(lineno)d\] %(levelname)s %(message)s datefmt=%Y-%m-%d %H:%M:%S \\n```  

官方文档[http://docs.python.org/library/logging.html](http://docs.python.org/library/logging.html) [一些简单的例子](http://docs.python.org/howto/logging.html#logging-basic-tutorial) [还有关于配置文件的说明](http://docs.python.org/library/logging.config.html#configuration-file-format)