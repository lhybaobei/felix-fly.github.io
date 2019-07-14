---
title: PHP数组和字符串转换函数
tags:
  - php
  - 字符串
  - 数组
  - 转换函数
url: 433.html
id: 433
categories:
  - 编程开发
date: 2009-10-21 21:24:18
---

修改uchome文件，需要用到这个数组和字符串之间相互转换的函数，记录下来方便以后使用。  


```< ?php
$array = array('lastname', 'email', 'phone');
$result = implode(",", $array);
echo $result ; // lastname,email,phone
$string = 'jpg|gif|png';
$result = explode('|',$string);
print_r($result); //array('jpg','gif','png')
?>
```