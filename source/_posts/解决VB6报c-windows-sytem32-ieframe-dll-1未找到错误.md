---
title: '解决VB6报c:\windows\sytem32\ieframe.dll\1未找到错误'
tags:
  - ieframe
  - VB6
  - 注册表
url: 508.html
id: 508
categories:
  - 编程开发
date: 2010-02-06 09:52:14
---

本来好好的工程，突然打开说是c:\\windows\\sytem32\\ieframe.dll\\1未找到，webbrowser不能使用了，昨天还好着呢，准是升级系统又给破坏了，要想解决此问题到也很简单，编辑一下注册表就行，或者把下面的代码存为文件，随时坏了随时修复：


```Windows Registry Editor Version 5.00 
[HKEY_CLASSES_ROOT\TypeLib\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}] 
[HKEY_CLASSES_ROOT\TypeLib\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}\1.1] 
@="Microsoft Internet Controls" 
[HKEY_CLASSES_ROOT\TypeLib\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}\1.1\0] 
[HKEY_CLASSES_ROOT\TypeLib\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}\1.1\0\win32] 
@="C:\\WINDOWS\\system32\\ieframe.dll"
```

存为*.reg文件导入到注册表中，再重新打开原来的工程不再报错  

注意：之前打开加载出错的工程关闭时不要保存哦