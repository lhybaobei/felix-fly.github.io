---
title: 通过html5方法无刷新变更页面url地址
tags:
  - history
  - html5
  - pushState
  - url
  - 无刷新
url: 1276.html
id: 1276
categories:
  - 编程开发
date: 2014-04-05 13:45:09
---

通过html5方法无刷新变更页面url地址，基于安全的要求，url是不可以跨域的  

pushState()方法接受三个参数  

状态对象（state object） — 一个JavaScript对象，与用pushState()方法创建的新历史记录条目关联。无论何时用户导航到新创建的状态，popstate事件都会被触发，并且事件对象的state属性都包含历史记录条目的状态对象的拷贝。  

任何可序列化的对象都可以被当做状态对象。因为FireFox浏览器会把状态对象保存到用户的硬盘，这样它们就能在用户重启浏览器之后被还原，我们强行限制状态对象的大小为640k。如果你向pushState()方法传递了一个超过该限额的状态对象，该方法会抛出异常。如果你需要存储很大的数据，建议使用sessionStorage或localStorage。  

标题（title） — FireFox浏览器目前会忽略该参数，虽然以后可能会用上。考虑到未来可能会对该方法进行修改，传一个空字符串会比较安全。或者，你也可以传入一个简短的标题，标明将要进入的状态。  

地址（URL） — 新的历史记录条目的地址。浏览器不会在调用pushState()方法后加载该地址，但之后，可能会试图加载，例如用户重启浏览器。新的URL不一定是绝对路径；如果是相对路径，它将以当前URL为基准；传入的URL与当前URL应该是同源的，否则，pushState()会抛出异常。该参数是可选的；不指定的话则为文档当前URL。  

浏览器兼容性

> Feature Chrome Firefox (Gecko) Internet Explorer Opera Safari replaceState, pushState 5 4.0 (2.0) 10 11.50 5.0 history.state 18 4.0 (2.0) 10 11.50 6.0

关于history对象的详细说明可以参考mozilla的文档 [https://developer.mozilla.org/zh-CN/docs/DOM/Manipulating\_the\_browser_history](https://developer.mozilla.org/zh-CN/docs/DOM/Manipulating_the_browser_history)  

下面是个简单的小例子： ```javascript  

// 判断当前浏览器是否支持 if (window.history && typeof window.history.pushState == 'function') { // 获取当前页面的url var href = window.location.href; // 通过正则表达式替换为新页面的url var reg = new RegExp('someParam=\\\d+'); href = href.replace(reg, 'someParam=' + 9999); var state = { someKey : 'some value' }; window.history.pushState(state, document.title, href); } \\n```