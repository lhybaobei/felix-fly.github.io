---
title: 解决gwt项目邮件发送失败
tags:
  - appengine
  - gwt
  - 发送邮件
url: 874.html
id: 874
categories:
  - 编程开发
date: 2011-04-01 20:41:34
---

使用gwt开发项目中，有发送邮件的需求，使用javax.mail来发送邮件，测试时发现邮件不能发送。  

查看日志输出，出现如下的错误：  

The API package 'mail' or call 'Send()' was not found  

错误消息原文是这个样子的：  

Exception in thread "Thread-10" com.google.apphosting.api.ApiProxy$CallNotFoundException: The API package 'mail' or call 'Send()' was not found. at com.google.apphosting.api.ApiProxy.makeSyncCall(ApiProxy.java:95) at com.google.apphosting.api.ApiProxy.makeSyncCall(ApiProxy.java:48) at com.google.appengine.api.mail.MailServiceImpl.doSend(MailServiceImpl.java:95) at com.google.appengine.api.mail.MailServiceImpl.send(MailServiceImpl.java:32) at com.google.appengine.api.mail.stdimpl.GMTransport.sendMessage(GMTransport.java:247) at javax.mail.Transport.send(Transport.java:95) at javax.mail.Transport.send(Transport.java:48) at ...  

看到这个错误很是迷惑，项目并没有使用gwt提供的app engine，怎么会在这里出错呢。  

网上搜罗一番，也没有明确的答案，不过大概确定就是app engine的问题，折腾了半天，终于把问题解决了。  

首先，检查webapp\\WEB-INF\\lib目录下是否有appengine开头的jar包，如果有，删除之  

接着，确认项目设置中google app engine未被选中  

最后，clean工程及tomcat，邮件发送正常。  

原因分析，项目本身并未使用appengine，但是由于gwt版本更新，不知何故appengine*.jar出现在了项目中，使得邮件发送被appengine拦截导致出错。