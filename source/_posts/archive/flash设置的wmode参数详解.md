---
title: flash设置的wmode参数详解
tags:
  - flash
  - web
  - wmode
  - 参数设置
url: 764.html
id: 764
categories:
  - 编程开发
date: 2010-12-02 22:00:38
---

在网页中嵌入flash的时候不能避免会遇到这个wmode参数的问题，设置不好很容易造成麻烦。  

当wmode属性设置不是window的时候，在Firefox下我们就会发现Flash里的文本输入框无法输入中文，这个问题暂无解决方案。  

下面列出wmode各个参数的详细含义。  

**Window模式** 默认情况下的显示模式，在这种模式下flash player有自己的窗口句柄，这就意味着flash影片是存在于Windows中的一个显示实例，并且是在浏览器核心显示窗口之上的，所以flash只是貌似显示在浏览器中，但这也是flash最快最有效率的渲染模式。由于他是独立于浏览器的HTML渲染表面，这就导致默认显示方式下flash总是会遮住位置与他重合的所有DHTML层。  

但是大多数苹果电脑浏览器会允许DHTML层显示在flash之上，但当flash影片播放时会出现比较诡异的现象，比如DHTML层像被 flash刮掉一块一样显示异常。  

**Opaque模式** 这是一种无窗口模式，在这种情况下flash player没有自己的窗口句柄，这就需要浏览器需要告诉flash player在浏览器的渲染表面绘制的时间和位置。这时flash影片就不会在高于浏览器HTML渲染表面而是与其他元素一样在同一个页面上,因此你就可以使用z-index值来控制DHTML元素是遮盖flash或者被遮盖。  

**Transparent模式** 透明模式，在这种模式下flash player会将stage的背景色alpha值将为0并且只会绘制stage上真实可见的对象，同样你也可以使用z-index来控制flash影片的深度值，但是与Opaque模式不同的是这样做会降低flash影片的回放效果，而且在9.0.115之前的flash player版本设置wmode=”opaque”或”transparent”会导致全屏模式失效。  

_说明_ 在做web开发中可能会遇到Flash遮挡页面中元素的情况，无论怎么设置Flash容器和层的深度(z-index)也无济于事，现有的解决方案是在插入flash的embed或object标签中加入”wmode”属性并设置为wmode=“transparent”或”opaque”来解决。