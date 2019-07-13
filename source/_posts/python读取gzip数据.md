---
title: python读取gzip数据
tags:
  - gzip
  - http
  - python
  - urllib2
  - web
url: 1117.html
id: 1117
categories:
  - 编程开发
date: 2011-11-25 20:38:13
---

对于web请求，使用gzip压缩传输数据是很自然的事情，当然大多数情况下也是这样配置的。  

使用python的urllib2模块通过http请求抓取数据也很方便，不过对于gzip数据需求进行一点小小的设置，这样才可以发挥压缩的效果。  

发送http请求时只要设置一下urllib2中request的header就可以了，告诉服务器自己可以接收gzip压缩的数据。  

相应的在收到数据后，需要判断下，因为服务端不一定启用了gzip压缩，避免出错。  

多余的话就不多说了，看代码就知道了，很简单的哦。  

python处理gzip请求代码片段：  

```python  

import urllib2 from StringIO import StringIO import gzip  

def loadData(url): request = urllib2.Request(url) request.add_header('Accept-encoding', 'gzip') response = urllib2.urlopen(request) if response.info().get('Content-Encoding') == 'gzip': print 'gzip enabled' buf = StringIO(response.read()) f = gzip.GzipFile(fileobj=buf) data = f.read() else: data = response.read() return data \\n```