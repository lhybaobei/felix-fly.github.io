---
title: css中文字体英文名称对照表
tags:
  - CSS
  - font-family
  - 中文字体
url: 717.html
id: 717
categories:
  - 编程开发
date: 2010-09-20 21:38:17
---

在网站开发中遇到需要显示中文字体时，使用css来设置字体，下面给出中文字体（font-family）对应的英文名称，按操作系统进行了简单分类，可随时查阅  

对于Mac OS的一些中文字体：


```华文细黑：STHeiti Light [STXihei]
华文黑体：STHeiti
$1文楷体：STKaiti
$1文宋体：STSong
$1文仿宋：STFangsong
$1黑 Pro：LiHei Pro Medium
$1宋 Pro：LiSong Pro Light
$1楷體：BiauKai
$1果儷中黑：Apple LiGothic Medium
$1果儷細宋：Apple LiSung Light
```

对于Windows系统的字体：


```新細明體：PMingLiU
$1明體：MingLiU
$1楷體：DFKai-SB
$1体：SimHei
$1体：SimSun
$1宋体：NSimSun
$1宋：FangSong
$1体：KaiTi
$1宋 _GB2312：FangSong_GB2312
$1体_GB2312：KaiTi_GB2312
$1軟正黑體：Microsoft JhengHei
$1软雅黑体：Microsoft YaHei
```

另外对于Windows系统安装Office后添加的一些字体：


```隶书：LiSu
$1圆：YouYuan
$1文细黑：STXihei
$1文楷体：STKaiti
$1文宋体：STSong
$1文中宋：STZhongsong
$1文仿宋：STFangsong
$1正舒体：FZShuTi
$1正姚体：FZYaoti
$1文彩云：STCaiyun
$1文琥珀：STHupo
$1文隶书：STLiti
$1文行楷：STXingkai
$1文新魏：STXinwei
```

几点说明： 在默认情况下，也就是未自行安装新字体或者 Office 等文字处理软件的情况下，Windows 默认提供下列字体： Windows 95/98/98SE 宋体、黑体、楷体\_GB2312、仿宋\_GB2312 Windows XP/2000/2003/ME/NT 宋体/新宋体、黑体、楷体\_GB2312、仿宋\_GB2312 (Windows XP SP3 宋体-PUA) Windows Vista/7/2008 宋体/新宋体、黑体、楷体、仿宋、微软雅黑、SimSun-ExtB  

那么每种字体能显示那些汉字呢？ Vista 之前的 Windows 中宋体/新宋体、黑体支持 GBK 1.0 字符集， 楷体\_GB2312、仿宋\_GB2312 支持 GB2312-80 字符集。 （注：Windows 3.X 只能支持 GB2312-80 字符集）  

Vista 及之后的 Windows 中宋体/新宋体、黑体、楷体、仿宋、微软雅黑支持 GB18030-2000 字符集， SimSun-ExtB 只支持 GB18030-2005 字符集扩展 B 部分。  

有关字符集的简单介绍： GB2312-80 < GBK 1.0 < GB18030-2000 < GB18030-2005 GB2312-80 中的字符数量最少，GB18030-2005 字符数量最多。 GB2312-80 是最早的版本，字符数比较少； GBK 1.0 中的汉字大致与 Unicode 1.1 中的汉字数量相同； GB18030-2000 中的汉字大致与 Unicode 3.0 中的汉字数量相同，主要增加了扩展 A 部分； GB18030-2005 中的汉字大致与 Unicode 4.1 中的汉字数量相同，主要增加了扩展 B 部分； 由于 Unicode 5.2 的发布，估计 GB18030 会在近期发布新版本，增加扩展 C 部分。 需要说明的是在 GB18030 中扩展 B 部分并不是强制标准。 如果想查看 GB18030 的标准文本，请访问[http://www.gb168.cn](http://www.gb168.cn) 中的强标阅读。 如果想了解 Unicode 的内容，请访问[http://www.unicode.org](http://www.unicode.org)  

使用楷体\_GB2312、仿宋 \_GB2312后，在 Windows 7/Vista/2008 中可能不再显示为对应的字体。 这是因为 Windows 7/Vista/2008 中有楷体、仿宋，默认情况下没有楷体\_GB2312、仿宋\_GB2312，字体名称相差“_GB2312”。