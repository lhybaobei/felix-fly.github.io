---
title: python使用logging模块之二
tags:
  - apache
  - linux
  - logging
  - python
  - windows
  - 日志
url: 1147.html
id: 1147
categories:
  - 编程开发
date: 2011-12-16 21:00:00
---

之前写过一篇如何在python中启用日志logging模块的文章，当时是使用外部配置文件的形式来设置logging相关参数的。  

由于开发环境是在win7下，潜在的文件权限问题没有及时的暴露出来。在项目部署到服务器的linux环境中时，出现了许多始料未及的问题，而最主要的也就是文件系统的差异带来的问题。  

记得在配置文件中，日志输出到文件只需要设置日志文件名就可以了，当然可以带有路径，只是需要绝对路径。至于相对路径，在python环境下自然是脚本所在的路径了，但是跑在apache容器中的时候，就不是脚本文件的路径了，而是apache安装的路径。  

所以当时只设定了文件名，而这个日志文件是写在了apache安装目录下，windows下一般是不会有问题的，等到linux环境时，apache目录自然是不允许随便写的啦，python脚本执行出错。查看了apache的错误日志才发现了这个问题。  

网上也查了些资料，始终没有找到解决方法，当时只能先将日志功能禁用。  

如今又需要日志了，既然配置文件不好使，那就先来点直接的。  

log.py文件如下  

```python  

#coding=utf-8 import logging import os pwd = os.path.abspath(os.path.dirname(\_\_file\_\_))  

folder = 'log' dir = os.path.join(pwd, folder) if not os.path.exists(dir): os.mkdir(dir)  

logger = logging.getLogger('debug') logger.setLevel(logging.DEBUG)  

ch = logging.FileHandler(dir + '/debug.txt') ch.setLevel(logging.DEBUG)  

\# create formatter formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')  

\# add formatter to ch ch.setFormatter(formatter)  

def debug(msg): logger.addHandler(ch) logger.debug(msg) logger.removeHandler(ch)  

def error(msg): logger.addHandler(ch) logger.error(msg) logger.removeHandler(ch) \\n```  

使用logger的时候遇到另外一个问题，重复的日志会多次输出，由于是web形式，每次刷新页面，log就会多输出一次，乖乖！  

经查，原来是没有removeHandler，那种返回logger对象的方法不好用，于是自己修改为上面的形式。引入log模块后，调用相应级别的方法就好了，如log.debug('hello')