---
title: gwt项目uibinder中的href属性转义问题
tags:
  - gwt
  - href
  - uibinder
  - 转义
  - 转码
url: 826.html
id: 826
categories:
  - 编程开发
date: 2011-01-16 15:07:47
---

使用gwt进行web项目开发时，在uibinder中使用a标签设置href属性值需要注意到是，属性值需要进行转义转码。  

目前飞尘只遇到了这个

&

，其它的还不清楚，如有遗漏请告诉我哦。  

&连接符需要转义为& amp;

其实&和amp;之间是没有空格的，不过这里加了空格的话就看不到了，嘿嘿。  

举个例子，如需要这样的地址：  

\`\`\`html http://www.abc.com/?a=1&b=2\\n\`\`\`  

而转义后的地址为：  

\`\`\`html http://www.abc.com/?a=1&b=2\\n\`\`\`  

如果没有对

&

进行转义，就会报下面的错误提示：  

The reference to entity "b" must end with the ';' delimiter.