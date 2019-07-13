---
title: 'C#中HttpWebResponse获取不到cookies'
tags:
  - 'c#'
  - cookies
  - HttpWebRequest
  - HttpWebResponse
url: 1210.html
id: 1210
categories:
  - 编程开发
date: 2012-09-22 10:05:06
---

最近有机会接触到了一点C#功能的开发，自然就有新东西要学，呵呵，我喜欢。  

下面就是遇到的一个小问题，客户端需要做登录，然后保存好cookies，以便接下来的业务使用，但是登录成功后cookies获取不到。  

下面是部分示例代码：  


```string Url= "http://www.some-domain.com/";
HttpWebRequest req = (HttpWebRequest)WebRequest.Create(Url);
req.CookieContainer = new CookieContainer();
HttpWebResponse response = (HttpWebResponse)req.GetResponse();
```

此时直接通过response.Cookies获取，发现count为0，而在调试窗口可以查看到response对象的Headers中是包含Set-Cookie的。  

原因是req对象的CookieContainer属性没有进行初始化，也就是没有准备好盒子来接收服务端返回的cookies。  

解决也很简单，在获取返回之前进行初始化：


```req.CookieContainer = new CookieContainer();
```

这时response.Cookies就会有你想要的东西了。