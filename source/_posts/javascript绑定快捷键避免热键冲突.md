---
title: javascript绑定快捷键避免热键冲突
tags:
  - JavaScript
  - 快捷键
  - 有道词典
  - 绑定事件
url: 937.html
id: 937
categories:
  - 编程开发
date: 2011-06-30 20:44:45
---

在javascript中绑定事件是很自然的事情，进而绑定键盘事件也是很自然的啦。  

比如在图片幻灯片浏览的时候，使用方向键控制图片翻页就是很好的设计，用js也是很容易实现的。  

不过最近在开发中遇到了一件比较怪异的事情，应用中绑定了键盘的c字母键事件，但是测试时发现按快速点击页面中的按钮会造成浏览器发出“嘣嘣”的声音，而且会激活c键的绑定事件。  

经过多番排查，发现只有测试机有这个问题。几经努力，终于发现了问题的所在，原来是有道词典。测试机运行了有道词典，并且开启了划词搜索，快速点击按钮触发了双击事件，激活了有道的划词功能，可能是取词调用了键盘的ctrl+c（复制）事件，而这又恰好于js绑定的事件重叠，于是就发生了不想看到的意外。  

更改快捷键，比如改c为其它字母键，可以解决这个问题，不过难免与其它系统热键发生冲突。  

于是改用下面的策略解决：  

在js绑定键盘快捷键事件时，忽略按下Ctrl/Alt/Shift与字母键的组合键，只处理单击字母键的情况，从而避免与系统热键的冲突。  

下面是代码片段： ```javascript  

function bindKeyUp(){ $(document).unbind("keyup").keyup(function(event){ if (event.altKey || event.ctrlKey || event.shiftKey) { return; } // ARROW\_LEFT = 37 if (event.keyCode == 37) { $("#functionButtons .prevButton").click(); } // ARROW\_RIGHT = 39 if (event.keyCode == 39) { $("#functionButtons .nextButton").click(); } // other key }); } \\n```