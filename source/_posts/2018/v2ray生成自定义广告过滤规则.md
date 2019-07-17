---
title: v2ray生成自定义广告过滤规则
tags:
  - openwrt
  - v2ray
  - 广告
url: 1337.html
id: 1337
categories:
  - 互联网络
date: 2018-10-27 22:06:09
---

本文最初发布在github上，且后续的更新也会在那边，这里只是做个记录，以备不时之需。

获取脚本工具及查看最新的内容请移步 [https://gitee.com/felix-fly/v2ray-adlist](https://gitee.com/felix-fly/v2ray-adlist)

通过官方文档可以获知v2ray天生是支持block功能，正好可以用来过滤广告。在openwrt的生态圈里目前比较成熟的有两大方案：adbyby和koolproxy。之前也使用过，效果还是不错的，不过有了v2ray之后，总感觉组合使用不是我想要的，效果、速度等等这里不做讨论，有兴趣的小伙伴可以去做个对比测试。

生成自定义广告过滤文件，脚本默认执行环境为linux 64。windows下安装git后可以获得bash仿真环境，大部分linux命令可以执行，更新规则脚本需要wget命令，需要自行安装，可以参考[这里](https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058)或者自行百度。

更新规则

```bash
# linux/mac
chmod +x ./update.sh
./update.sh
# windows
./update.sh
```

生成v2ray使用的dat文件

```bash
# linux
chmod +x ./v2sitedat
./v2sitedat -dat ./site.dat -dir ./site
# mac
chmod +x ./v2sitedat_darwin
./v2sitedat_darwin -dat ./site.dat -dir ./site
# windows
./v2sitedat.exe -dat ./site.dat -dir ./site
# 32位操作系统替换为v2sitedat32
```

### [](https://github.com/felix-fly/v2ray-adlist#-domain-%E8%A7%84%E5%88%99)\# domain 规则

*   gw
*   ad

[](https://github.com/felix-fly/v2ray-adlist#%E6%87%92%E4%BA%BA%E6%A8%A1%E5%BC%8F)懒人模式
--------------------------------------------------------------------------------------

直接下载site.dat文件，放到v2ray目录下，修改配置文件，添加相关条目。

[](https://github.com/felix-fly/v2ray-adlist#%E9%A2%98%E5%A4%96%E8%AF%9D)题外话
----------------------------------------------------------------------------

原始的规则列表里是包含ip规则的，不过数量不多，本来是想加上ip规则的，不过ip加载自定义文件需要geoip.dat文件，该文件本身就比较大，所以把ip规则去掉了，需要的可以自行修改，或者直接在v2ray配置文件中添加ip过滤规则。

经过一番尝试之后，目前ip还是没有搞定，使用[gslsoft](https://github.com/gslsoft/v2ray-custom-geo)提供的工具可以生产自定义的ip.dat文件，但是目前没法使用，会报

country not found:

的错误。

脚本改自

[https://github.com/onplus/v2ray-SiteDAT](https://github.com/onplus/v2ray-SiteDAT)

[https://github.com/ToutyRater/V2Ray-SiteDAT](https://github.com/ToutyRater/V2Ray-SiteDAT)

规则来自

[https://github.com/h2y/Shadowrocket-ADBlock-Rules](https://github.com/h2y/Shadowrocket-ADBlock-Rules)

[https://github.com/vokins/yhosts](https://github.com/vokins/yhosts)