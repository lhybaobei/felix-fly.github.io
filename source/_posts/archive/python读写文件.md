---
title: python读写文件
tags:
  - python
  - 异常
  - 文件操作
  - 读写文件
url: 1125.html
id: 1125
categories:
  - 编程开发
date: 2011-11-30 20:45:38
---

在python中读写文件很简单。  

例如使用open('cache.txt')打开一个缓存文件，此时文件是只读模式打开的，等同于使用open('cache.txt', 'r')。  

如果需要打开的文件不存在，就会遇到异常。因此，在程序中需要进行一些简单的处理。  

可以定义一个方法来安全的打开文件：  

```python  

def readFile(path): try: chcheFile = open(path) try: text = chcheFile.read() except IOError: # when first time, file not exist # do something text = {} finally: chcheFile.close() except IOError, e: # show error message or other process text = {} pass return text \\n```  

对应的写文件操作，也可以这样处理：  

```python  

def writeFile(path, text): try: chcheFile = open(path, 'w') try: chcheFile.write(text) except IOError: pass finally: chcheFile.close() except IOError, e: pass \\n```