---
title: mac上安装使用v2ray及配置自启动
tags:
  - mac
  - v2ray
  - 去广告
  - 自启动
url: 1347.html
id: 1347
categories:
  - 互联网络
date: 2018-12-14 16:41:29
---

相关脚本文件及后续更新，请移步至[我的码云](https://github.com/felix-fly/v2ray-mac)获取，此处内容可能不是最新。

v2ray官方文档给出了几个mac上的第三方客户端，使用过一段时间，也没有太大问题。不过鉴于别人维护的版本不一定及时更新，于是就自己动手基于v2ray-core打造适合自己的工具，可以随着官方版本更新，使用起来更灵活。注意：不是客户端哦，仅仅是工具，或者说一些脚本。个人使用，有兴趣的同学也可以拿来玩玩。

[](https://github.com/felix-fly/v2ray-mac#%E5%87%A0%E4%B8%AA%E9%9C%80%E6%B1%82)几个需求
-----------------------------------------------------------------------------------

下面是个人使用时感觉比较实用的几点。

### [](https://github.com/felix-fly/v2ray-mac#%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF)开机自启

mac上不能像linux那样很方便的以service的形式实现自启动，这里采用了比较简单的方式，利用crontab的@reboot来达到自动启动的效果，虽然apple官方并不建议这样，但是个人感觉配置launchd略显繁琐，所以还是crontab这种比较适合。

打开系统自带终端，这点很关键，使用其他第三方的终端需要在**系统偏好设置->安全性与隐私->隐私->完全磁盘访问权限**赋予权限，系统自带终端无感，执行

```bash
crontab -e
```

增加一行，注意替换为你自己的path

```bash
@reboot /==YOUR PATH==/start.sh
```

保存退出即可，启动后ps下看不到v2ray进程，活动监视器可以看到，stop脚本可以正常关闭代理。

### [](https://github.com/felix-fly/v2ray-mac#%E5%85%A8%E5%B1%80%E4%BB%A3%E7%90%86)全局代理

由于最新版的mac自动代理不支持file文件的形式，所以pac文件需要以web形式提供，这里使用python来启动一个简单的http服务提供pac文件供系统使用。

如果不是wifi上网，可以自行修改。

### [](https://github.com/felix-fly/v2ray-mac#%E8%BF%87%E6%BB%A4%E5%B9%BF%E5%91%8A)过滤广告

v2ray强大的地方就是代理及过滤一步到位，此处使用自建的site.dat文件来达到此效果。

[](https://github.com/felix-fly/v2ray-mac#%E5%81%9C%E6%AD%A2v2ray)停止v2ray
-------------------------------------------------------------------------

为了方便更新配置啊等等，增加了一个stop脚本，可以无痛关闭v2ray代理。