---
title: webpy搭配wsgi使用session的问题
tags:
  - apache
  - python
  - session
  - webpy
url: 1182.html
id: 1182
categories:
  - 编程开发
date: 2012-03-06 20:42:56
---

项目使用webpy作为python的web框架，同时借助于mod_wsgi搭建在apache服务器之上。  

随着项目的不断推进，用户相关的需求被引入，自然就用到了session。  

在webpy官方也给出了session及用户认证相关的例子，可以参考：  

[http://webpy.org/cookbook/sessions](http://webpy.org/cookbook/sessions)  

[http://webpy.org/cookbook/userauthpgsql](http://webpy.org/cookbook/userauthpgsql)  

在结合自身项目时，遇到了点小问题，总是报这样的错误：  

> AttributeError: 'function' object has no attribute 'add_processor'

经过一番折腾，在google讨论组找到了原因：  

[http://groups.google.com/group/webpy/browse_thread/thread/5a41ad7a10dca68f](http://groups.google.com/group/webpy/browse_thread/thread/5a41ad7a10dca68f)  

对于wsgi是这样的  

> application = web.application(urls, globals(), autoreload=True).wsgifunc()

注意这里是globals()  

而webpy官方给出的例子中是locals()  

> app = web.application(urls, locals()) session = web.session.Session(app, web.session.DiskStore('sessions'), initializer={'count': 0})

难怪会出错呢  

原有的保持不变，新增加一个app用来为session服务就好了  

> app = web.application(urls, locals())

但是又遇到了新的问题：  

> AttributeError: 'ThreadedDict' object has no attribute

费了九牛二虎之力还是没有搞定，都准备放弃webpy了，看了一下django，重构的成本有点大，再说webpy不可能不行啊，终于还是在webpy官方找到了原因：  

> Note: mod_wsgi + sessions  
>   
> If you use sessions with mod_wsgi, you should change you code like below:  
>   
> app = web.application(urls, globals())  
>   
> curdir = os.path.dirname(\_\_file\_\_) session = web.session.Session(app, web.session.DiskStore(os.path.join(curdir,'sessions')),)  
>   
> application = app.wsgifunc()

现在来输出一下session_id就不再报错了  

> \[Thu Dec 08 10:59:38 2011\] \[error\] \[Thu Dec 08 10:59:38 2011\] \[error\] da397a83fc1f92f4d4ed1fa919b6f50d105392a5

哎，真是的，当初只看了一半，看来有时候还是应该静下心来仔细的阅读一下文档，似乎做项目太浮躁了，只管实现就好，真是不应该啊。