---
title: nginx服务器出现502 bad gateway错误补充
tags:
  - 502 bad gateway
  - nginx
  - 服务器
url: 555.html
id: 555
categories:
  - 互联网络
date: 2010-03-28 23:54:20
---

前些日子整理了一篇[nginx服务器出现502 bad gateway错误常见原因](/post_532.html)，在自己的vps上面也相应的做了调整，谁知偶尔还是会遇到502 bad gateway错误，看来问题还真是复杂，又搜索了半天，看到一位朋友提到php配置中memory_limit设置较小也会造成这个错误：  

编辑php.ini文件，修改


```memory_limit = 256M
```

视服务器的配置，自行调整此数值  

另外还有一个问题是php-cgi进程死掉造成502 bad gateway错误，对于这个可以采用重启php-fpm解决，可以做成计划任务，定时执行php-fpm重启


```crontab -e
0 */4 * * * /usr/local/php/sbin/php-fpm reload
```

上面配置为每隔4小时自动执行，可以根据需要自行修改