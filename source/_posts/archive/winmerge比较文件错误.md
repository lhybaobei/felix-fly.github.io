---
title: winmerge比较文件错误
tags:
  - UTF-8
  - winmerge
  - 中文乱码
  - 代码
  - 字符编码
  - 文件比较
url: 1069.html
id: 1069
categories:
  - 电脑医生
date: 2011-11-04 20:35:06
---

在使用winmerge进行文件比较的时候，出现下面的错误提示：  

> 由于字符编码错误造成两个文件信息丢失  
>   
> Information lost due to encoding errors: both files

经查原因是比较的两个文件是使用utf-8编码的，并且代码中存在中文字符（一般多为注释内的中文），比较的时候中文可能会显示为乱码。  

找到了原因，解决起来就比较简单了————指定winmerge字符编码即可。  

以中文版的winmerge为例，通过菜单依次定位  

菜单编辑->选项->代码页->默认代码页：  

选择Custom codepage:  

填入65001  

这个65001就是uft-8的代码页  

确定之后，重新进行文件对比，不再提示错误消息，代码中的中文字符也显示正常了。