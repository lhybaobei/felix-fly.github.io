---
title: 在openwrt中最小化安装oh-my-zsh
date: 2020-06-03 15:16:58
tags:
  - openwrt
  - oh-my-zsh
  - 路由器
categories:
  - 互联网络
---

平时一直使用oh-my-zsh操作shell，好处嘛用过的都知道。偶尔也会ssh到路由上执行一些命令，虽然是偶尔，但是用默认的ash实在还是有点难以接受。既然都是linux，那就也搞个好用点的环境，自然就是oh-my-zsh了。于是各种依赖包安装：

* zsh
* git
* git-http
* ca-certificates

然后官方脚本安装oh-my-zsh，终于熟悉的环境回来了。但是不一会发现可怜的路由器存储空间几乎已经被占满了。看了一下git和git-http对于我的路由而言体积实在是有点过于庞大了，当然你的路由足够high那就无所谓。研究了一下下，其实oh-my-zsh官方安装脚本就是通过git把代码同步了下来而已，git这里仅仅就是个搬运工，个头太大，于我而言有点大材小用了。于是想到这里不用git而是用其它比如wget也是可以达到预期的效果的。

这样就有了 [https://github.com/felix-fly/openwrt-ohmyzsh](https://github.com/felix-fly/openwrt-ohmyzsh)

就是在官方脚本的基础上做了一些修改，不用git拉代码，而是通过wget下载zip包来获取源码。oh-my-zsh内置了很多plugins，大约5m，个人目前使用不到，所以脚本里提供了是否保留plugins的选项，默认是不保留，这样整个oh-my-zsh大约占用不到1m的空间。同时也是支持自动检测提示更新的。

下面是项目的使用说明，如有变化请在[github](https://github.com/felix-fly/openwrt-ohmyzsh)上查看，此处不会同步更新。

## 依赖的包

* wget
* unzip
* zsh
* ca-certificates

```shell
opkg update
opkg install wget unzip zsh ca-certificates
```

## 安装

```shell
sh -c "$(wget -O- https://raw.githubusercontent.com/felix-fly/openwrt-ohmyzsh/master/install.sh)"
```

## 设置 zsh 为默认 shell

```shell
which zsh && sed -i -- 's:/bin/ash:'`which zsh`':g' /etc/passwd
```

重新登录到路由器，就是 oh-my-zsh 了。

## 卸载

```shell
sh -c "$(wget -O- https://raw.githubusercontent.com/felix-fly/openwrt-ohmyzsh/master/uninstall.sh)"
```
