---
title: 在gwt项目中使用OpenFlashChart2
tags:
  - flash
  - gwt
  - json
  - ofcgwt
  - openflashchart
  - uibinder
url: 660.html
id: 660
categories:
  - 编程开发
date: 2010-07-15 23:30:59
---

[OpenFlashChart2](http://teethgrinder.co.uk/open-flash-chart-2/)是一个用flash显示数据图表的工具，许多的网页设计中都使用到了它。近来使用gwt开发网站，正好也有这方面的需求，最初的时候是通过JQuery直接使用json的方法来显示数据图表，后来发现了专门为gwt设计的[ofcgwt](http://code.google.com/p/ofcgwt/)，对openflashchart进行了java的封装，相比直接手工生成json数据要方便了许多。  

具体的使用也是比较简单的，这里飞尘就不多介绍了，下面主要是解决使用中遇到的一个问题。  

按照设计的要求，用户在未安装flash插件或者禁用flash插件时，网页能给出相应的提示，这一点openflashchart也为我们考虑到了，而且提供了一个方法可以自定义要显示的提示内容。飞尘这里遇到的问题可能比较特殊，由于openflashchart是作为一个widget在uibinder加载的，可能正是由于这种加载方式，使得openflashchart提供的setInnerDivTextForFlashPlayerNotFound方法在程序运行时没有得到执行，页面中始终显示的是默认的提示信息FlashPlayer ${flashPlayer.version} is required。  

经过一番分析后，找到了解决方法，就是在uibinder中来设置setInnerDivTextForFlashPlayerNotFound  

在uibinder中需引入ofcgwt： ```xml  

\\n```  

使用openflashchart： ```xml  

\\n```  

这里如果设置的提示内容非纯文本而是html代码，需要对< 和>进行转义 \`\`\`txt "<"和">"\\n\`\`\`