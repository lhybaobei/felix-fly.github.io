---
title: spring配置bean错误
tags:
  - applicationContext.xml
  - bean
  - 春天
  - 错误
url: 899.html
id: 899
categories:
  - 编程开发
date: 2011-05-31 20:23:14
---

使用spring配置bean，出现错误。  

得到的错误消息形如：  

Bean property '' is not writable or has an invalid setter method

造成这个错误的原因可能有如下几个方面，仔细排查，很容易找到原因的。  

1\. 检查applicationContext.xml配置文件  

是否存在拼写错误(大小写，名字不对应)，bean的id必须首字母小写，如userDao  

2\. 检查*Impl文件中是否缺少注入方法，例如  

public void setUserDao(UserDao userDao) {
  this.userDao=userDao;
}