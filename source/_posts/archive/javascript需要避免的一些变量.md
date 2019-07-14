---
title: javascript需要避免的一些变量
tags:
  - chrome
  - firefox
  - JavaScript
  - 保留字
  - 变量
  - 浏览器
url: 1240.html
id: 1240
categories:
  - 编程开发
date: 2013-07-27 10:20:47
---

任何一门编程语言都有一些保留字，javascript也不例外，至于有哪些这里就不一一罗列了，随便搜索下就知道了，而且一般情况下我们也不会越雷池的。  

不过在开发中遇到了一些比较奇怪的现象，最典型的情况就是明明给某个对象添加了某个方法，但是在调用时就是报错。  

这里需要说明的是，定义变量的时候采用了合并的方式，就是说如果之前该变量已经定义过，此处就指向该变量，否则定义为空对象。  

请看下面的例子： \`\`\`javascript var sidebar = sidebar || {}; sidebar.test = function(){ alert('ok'); } sidebar.test();\\n\`\`\` 拿这段代码在firebug中执行会看到

> Error: Cannot modify properties of a WrappedNative

如果改为直接定义变量，则没有问题。  

我们直接在firebug中查看sidebar，发现

> \[xpconnect wrapped (nsISupports, nsISidebar, nsISidebarExternal)\] { QueryInterface=QueryInterface(), addPanel=addPanel(), addPersistentPanel=addPersistentPanel(), 更多...}

应该是浏览器使用了这个变量，看来我们只有绕道了。  

似乎这样的变量还不止一两个，至于有多少，有没有列表飞尘真的是不晓得了，查了半天也没弄出个所以然来，看来只能靠大家慢慢搜集整理了，希望有一天可以发布一份变量冲突表，以飨读者。

变量名

IE

Firefox

Chrome

sidebar

-

xpconnect wrapped

-

top

object Window

window

window