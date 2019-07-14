---
title: 兼容IE和firefox的dl dt dd布局
tags:
  - CSS
  - firefox
  - ie7
  - ie8
url: 634.html
id: 634
categories:
  - 编程开发
date: 2010-07-06 22:24:19
---

在网页设计中经常会使用到dl dt dd来显示数据，并且通常显示为表格的样式。  

在调试css样式时，首要解决的就是浏览器的兼容性，下面有几点需要注意，否则不同的浏览器可能完全面目全非。  

飞尘仅在ie7 ie8及firefox中做了测试，其它浏览器会在未来进一步测试。ie8目前与firefox较接近，主要的差别在于ie7，对于ie6个人觉得放弃也罢。  

dl dt dd样式设置要点：  

1.指定dl的height 否则ie7会默认设置，高度明显高于firefox中的值  

2.指定dt和dd的margin和padding属性 浏览器的默认值不同，显示会有差别  

3.dt和dd的内容需要在同一行显示时，需设置dt的float:left属性  

目前只涉及了这么多，如果有补充飞尘会及时更新的