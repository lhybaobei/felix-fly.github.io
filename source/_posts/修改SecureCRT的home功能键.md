---
title: 修改SecureCRT的home功能键
tags:
  - putty
  - SecureCRT
  - ssh
  - 功能键
  - 客户端
  - 键映射编辑器
url: 1160.html
id: 1160
categories:
  - 互联网络
date: 2012-01-03 08:49:08
---

之前一直使用putty作为ssh的客户端，最近用了一下SecureCRT，多标签比较好用，但是在使用时发现没有home、end功能，而且delete键删除的是光标前一个字符，功能与退格键是一样的。  

网上有关于SecureCRT使用“键映射编辑器”，实现自定义的功能的文章，不过飞尘这里试了一下貌似不起作用。  

于是换另外一个思路，修改仿真终端类型即可。  

SecureCRT中默认的终端为VT100，这里修改为linux，并勾选“ANSI颜色选项”，这样就会五颜六色了哦，呵呵。  

对于键映射编辑器的方式，这里就不再多做研究了。