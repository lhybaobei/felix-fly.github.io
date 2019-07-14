---
title: csdn帐号安全性堪忧
tags:
  - csdn
  - 加密
  - 安全
  - 密码
  - 帐号
  - 数据库
  - 明文
url: 1150.html
id: 1150
categories:
  - 互联网络
date: 2011-12-21 17:05:02
---

下午QQ群里有人贴了个网址  

[http://www.wooyun.org/bugs/wooyun-2010-03692](http://www.wooyun.org/bugs/wooyun-2010-03692)  

说是CSDN数据库泄露，大量用户真实账号密码外泄  

具体信息的真实与否，这里不做任何评价和考量。  

但是处于安全性的考虑，还是想着去csdn把密码修改一下为好。而大多数人都习惯很多帐号使用同一组密码，那么其它网站的密码呢？全部修改？工作量何其之大啊。  

登陆时多了个想法，由于看到截图给出的CSDN数据库中的密码居然都是明文，就在firefox中使用firebug查看了一下。真是不看不知道，一看吓一跳啊。  

看看下面的登陆提交的页面地址就很清楚了，先说登陆是使用的get方法，个人认为使用post似乎更稳妥些吧。可能是为了登陆后跳转回原来的页面，故而使用get方法的吧。这点到没什么太大问题，但是用户名和密码都是赫然的使用明文作为参数进行传递，这点可真的说不过去了吧。  

http://passport.csdn.net/ajax/accounthandler.ashx?t=log&u=test-user&p=test-password&c=&remember=0&f=http%3A//passport.csdn.net/account/login  

飞尘在做一个比较小的系统时，都是将密码在web前端使用javascript进行加密之后才传递参数的。对于csdn的方式真是不敢恭维啊。之前有看到md5被破解，因此加密采用了sha1，当然加密的算法有很多，比如SHA-256、AES、DES等等，各种语言都有具体的实现，下面给出一份在javascript中实现的crypto-js  

[http://code.google.com/p/crypto-js/](http://code.google.com/p/crypto-js/)  

在安全性要求更高的情况下，加密后的密码在服务端还会做一些处理，进行二次加密，这样即便是服务器被黑客攻击，数据库遭遇盗窃，用户的密码也不至于大白于天下，毕竟算法的逆向工程还是很有难度的。  

如果真如文章所言，用户密码为明文保存，后果真的很严重，估计绝大部分的黎叔都会很生气吧。  

无论与否，定时修改密码总归是件值得做的事情。可惜csdn修改密码依然不给力啊。  

http://passport.csdn.net/ajax/accounthandler.ashx?t=chgpwd&p0=old-password&p1=new-password&p2=new-password