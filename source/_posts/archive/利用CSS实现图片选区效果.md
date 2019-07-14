---
title: 利用CSS实现图片选区效果
tags:
  - CSS
  - 图片选区
url: 27.html
id: 27
categories:
  - 编程开发
date: 2008-12-24 20:05:00
---

模拟一个虚线的选区边界,在边界上有8个控制点,中心1个控制,将鼠标放到各个控制点上时,鼠标样式发生变化,只有样式,没有实现鼠标点击拖动等功能高,仅抛砖引玉而已!

div#constituencies{ display: block; border: 2px dashed #0000f3; margin: 0px; padding: 0px; position: relative; cursor: move; height: 200px; width: 200px; } div#control\_1{ cursor: nw-resize; left: 0px; top: 0px; } div#control\_2{ cursor: n-resize; left: 90px; top: 0px; } div#control\_3{ cursor: ne-resize; left: 178px; top: 0px; } div#control\_4{ cursor: w-resize; left: 0px; top: 89px; } div#control\_5{ cursor: move; left: 89px; top: 89px; } div#control\_6{ cursor: e-resize; left: 178px; top: 89px; } div#control\_7{ cursor: sw-resize; left: 0px; top: 178px; } div#control\_8{ cursor: s-resize; left: 89px; top: 178px; } div#control_9{ cursor: se-resize; left: 178px; top: 178px; } div#constituencies div { border: 1px solid #666666; position: absolute; margin: 0px; padding: 0px; background-color: #eeeee1; height: 20px; width: 20px; }