---
title: php通过curl提交数据出错
tags:
  - apache
  - curl
  - php
  - xampp
  - 提交数据
url: 1065.html
id: 1065
categories:
  - 编程开发
date: 2011-11-03 21:12:54
---

php通过curl提交数据，需要开启curl功能，在php.ini文件中取消注释  

;extension=php_curl.dll

改为  

extension=php_curl.dll

重启apache服务器生效。  

使用php的curl模块获取或者提交数据都是很方便的，但是使用中遇到了这样的一个问题：提交数据时出错，服务器返回400错误。  

下面先给出一个通过curl提交数据的php文件示例：  

```php  

$post\_data\['username'\] = $username; $post\_data\['password'\] = $password; $post_data\['timestamp'\] = $timestamp;  

$ch = curl\_init(); curl\_setopt($ch, CURLOPT\_URL, 'http://www.some-domain.com/webservice'); curl\_setopt($ch, CURLOPT\_HEADER, true); curl\_setopt($ch, CURLOPT\_POST, true); curl\_setopt($ch, CURLOPT\_RETURNTRANSFER, true); // 直接传递数组作为参数 curl\_setopt($ch, CURLOPT\_POSTFIELDS, $post\_data); // 将数组进行编码后作为参数 // curl\_setopt($ch, CURLOPT\_POSTFIELDS, http\_build\_query($post\_data)) // print\_r($post_data); // echo "  
"; // print\_r(http\_build\_query($post\_data)); $data = curl\_exec($ch); curl\_close($ch); var_dump($data); ?> \\n```  

直接传递数组时，一切正常，但是将数组编码后，服务器返回出错信息  

> HTTP Status 400 - Syntactically incorrect  
>   
> Description: The request sent by the client was syntactically incorrect ().

经过对比测试，可以看到编码前的参数  

> Array ( \[username\] => test-user \[password\] => 789cbe0407840b1c2041cb33452ff60f19bf58cc \[timestamp\] => 1314842207975 )

经过http\_build\_query编码后的参数  

> username=test-user&password=789cbe0407840b1c2041cb33452ff60f19bf58cc×tamp=1314842207975

正是编码后的这个连接符&导致的问题  

在php.ini文件有如下的配置项：  

> ; The separator used in PHP generated URLs to separate arguments. ; PHP's default setting is "&". ; http://php.net/arg-separator.output ; Example: arg_separator.output = "&"

在xampp中，php默认的配置是启用的  

> ;arg_separator.output = "&"

将其注释后重启服务器，不再报错。  

不修改php全局配置也可以，在php脚本里设置一下就行  

ini\_set('arg\_separator.output', '&');