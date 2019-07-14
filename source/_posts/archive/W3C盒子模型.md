---
title: W3C盒子模型
tags:
  - w3c
  - 盒子模型
url: 21.html
id: 21
categories:
  - 编程开发
date: 2008-12-16 16:39:00
---

通过这个例子,我们可以对盒子模型有一个比较清晰的认识  

由于竖排文字在firefox中不被支持,可能样子比较难看:-(  

W3C的盒子模型中height和width不包含padding和border,仅指content的高和宽;而IE的盒子模型height和width属性不包含padding和border值. div#s-margin { margin: 0px; padding: 0px; width: 500px; height: 400px; border: 0px; background-color: #f0fff0; } div#s-margin-left,#s-margin-right { margin: 0px; border: 0px; padding: 0px; height: 300px; width: 50px; float: left; direction: rtl!important; direction: inherit; writing-mode: tb-rl; } div#s-margin-top,#s-margin-bottom { margin: 0px; border: 0px; padding: 0px; height: 50px; } div#s-border { margin: 0px; border: 0px; padding: 0px; float: left; width: 400px; height: 300px; background-color: #cccccc; } div#s-border-left,#s-border-right { margin: 0px; border: 0px; padding: 0px; height: 200px; width: 50px; float: left; direction: rtl!important; direction: inherit; writing-mode: tb-rl; } div#s-border-top,#s-border-bottom { margin: 0px; border: 0px; padding: 0px; height: 50px; } div#s-padding { float: left; margin: 0px; border: 0px; padding: 0px; width: 300px; height: 200px; background-color: #fff00f; } div#s-padding-left,#s-padding-right { margin: 0px; border: 0px; padding: 0px; height: 100px; width: 50px; float: left; direction: rtl!important; direction: inherit; writing-mode: tb-rl; } div#s-padding-top,#s-padding-bottom { margin: 0px; border: 0px; padding: 0px; height: 50px; } div#s-content { float: left; margin: 0px; border: 0px; padding: 0px; width: 200px; height: 100px; background-color: #ffffff; } div p.s-center { text-align: center; }

margin-top

margin-left

border-top

border-left

padding-top

padding-left

content

padding-right

padding-bottom

border-right

border-bottom

margin-right

margin-bottom