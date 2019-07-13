---
title: solr查询统计分组个数
tags:
  - group
  - solr
  - 分组
  - 查询
  - 统计
url: 1109.html
id: 1109
categories:
  - 编程开发
date: 2011-11-22 20:59:59
---

使用solr进行一些文本查询是很方便的，当然solr也可以实现一些简单的分组查询。  

在项目中，有这样的需求：通过solr查询某个字段有多少个不同值，也就是说统计一下分组的个数，而不是统计每个分组包含的记录个数。  

对于这样的需求，如果使用facet功能则有些水土不服，facet返回的信息太多了，而且使用json格式输出时，有点小小的别扭。这样的话，facet就不能满足需求了，于是改为使用group。  

查询时使用下面的参数：  

> group : true, group.field : 'userId' group.ngroups : true

组合为http请求后的查询链接为：  

```txt  

http://www.some-domain.com/solr/select/?fl=%2Cscore&q.op=AND&start=0&rows=0&q=*%3A*&fq=&qt=&group=true&group.field=userId&group.ngroups=true \\n```  

默认情况返回的数据为xml格式：  

```xml  

100 20 \\n```  

分组个数统计的关键就是这个ngroups，这样查询速度快，返回数据体积又小。  

> group.ngroups(true/false) If true, includes the number of groups that have matched the query. Default is false.

更多关于group分组的介绍请参考[官方文档](http://wiki.apache.org/solr/FieldCollapsing)