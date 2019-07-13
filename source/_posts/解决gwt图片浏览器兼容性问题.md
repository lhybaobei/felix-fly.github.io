---
title: 解决gwt图片浏览器兼容性问题
tags:
  - google web toolkit
  - gwt
  - 兼容性
  - 图片
  - 浏览器
url: 645.html
id: 645
categories:
  - 编程开发
date: 2010-07-13 22:47:20
---

最近使用[google web toolkit](http://code.google.com/webtoolkit/)进行网站开发，一直在firefox中进行调试，开发到一定阶段，项目需要发布demo，要求浏览器兼容性。在ie中一测试，原来设计好好的页面变得惨不忍睹，此问题在ie7中尤其明显，经过观察发现，其中一个主要的原因就是图片的问题。  

使用gwt开发的一个优点就是自动实现了图标、图片的拼接组合，一般为了优化网站结构及效率，设计者会将使用到的各种小图标、图片拼接在一个透明背景的大图片中，浏览器可以使用较少的连接次数下载图片，在一定程度上提高网站速度。  

此处遇到的问题就是与此有关，最初的设计是在一个容器中（比如div），绑定css样式，在css中通过@sprite引用gwt-image，容器中同时包含文本，控制padding属性实现图片在前、文字在后的效果，在firefox中没有问题，在ie7这中设计就有问题了，由于使用的小图标是大的图片文件中的一部分，整个容器会将大图片作为背景，造成文字的背景会出现不该有的图片。解决方法是：为图片使用单独的容器，与文字分开。  

同时还遇到另外一个问题，就是图片在ie8中不能正常显示，在ie7及firefox均可显示，查阅了相关资料，原因可能是ie8对于base64编码长度的一个限制造成的。原文是这样描述的：  

Internet Explorer 8 limits data URIs to a maximum length of 32 KB.  

资料来源于[http://en.wikipedia.org/wiki/Data\_URI\_scheme](http://en.wikipedia.org/wiki/Data_URI_scheme)  

gwt对于较小的图片（具体多少k还不太确定）进行base64编码，在css中使用base64代替图片的url，飞尘在实际中测试当图片大于25k的时候，ie8就无法显示了。解决方法是：对图片压缩，保证base64转码后不大于32k；或者将图片切片再组合。  

几点思考，gwt对图片的处理机制到底是怎样的，还要进一步的考证，近来gwt也在更新，已经发布了2.1 M2，修正许多已知的bug，相信不久就能够看到2.1正式发布了。  

<!\-\- 2010年7月19日更新 --> to：1楼的朋友  

举个例子：  

```xml  

\\n```  

这是在ui文件中的一个简单的例子，实现的效果类似这个样子的，当然样式需要自己设置。 ![](https://res.cloudinary.com/flyash/image/upload/v1562816320/itcao/001_tygosx.png alt= "gwt图片例子1")  

这里使用的是image的widget，当然可以使用其它widget，然后用css设置使用gwt背景图片，关键的是需要指定放置图片的容器宽度和高度不大于图片。