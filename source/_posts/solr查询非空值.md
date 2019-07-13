---
title: solr查询非空值
tags:
  - solr
  - sql
  - 查询
  - 非空值
url: 1102.html
id: 1102
categories:
  - 编程开发
date: 2011-11-19 19:59:33
---

solr查询非空值的方法


```q=FieldName:['' TO *]
```

相当于在sql中执行:  

> SELECT field\_name FROM some\_table WHERE field_name IS NOT NULL;

查询某列大于0的记录


```q=FieldName:[1 TO *]
```

对应的sql:  

> SELECT field\_name FROM some\_table WHERE field_name > 0;