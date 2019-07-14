---
title: mybatis查询传递Integer类型参数报错
tags:
  - integer
  - mybatis
  - 参数错误
  - 标注
url: 1280.html
id: 1280
categories:
  - 编程开发
date: 2014-04-05 13:50:11
---

使用mybatis查询数据库，在传递Integer类型参数时，遇到下面的错误：

> Servlet.service() for servlet \[spring\] in context with path /\] threw exception \[Request processing failed; nested exception is org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.reflection.ReflectionException: There is no getter for property named 'abc' in 'class java.lang.Integer'\]

解决方法有两种：  

一是将参数名称 "abc" 替换为"_parameter"。  

二是在接口中定义方法时添加标注@Param("abc")