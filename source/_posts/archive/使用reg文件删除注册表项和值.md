---
title: 使用reg文件删除注册表项和值
tags:
  - 注册表
url: 62.html
id: 62
categories:
  - 电脑医生
date: 2009-03-11 14:46:59
---

例如要删除注册表项中HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Licenses下的所有子项,可以编辑文件如下:


```Windows Registry Editor Version 5.00
空行
[-HKEY_LOCAL_MACHINE\SOFTWARE\Licenses]
$1行

用记事本等文本工具保存文件为*.reg扩展名的文件,双击导入即可  

如果只需要删除某些项,可以编辑如下:


```Windows Registry Editor Version 5.00
$1行
[HKEY_LOCAL_MACHINE\SOFTWARE\Licenses]
"A"=-
$1行
```