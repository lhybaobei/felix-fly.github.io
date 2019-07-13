---
title: 天猫魔盒无需root更换输入法
tags:
  - android
  - root
  - 天猫
  - 输入法
  - 魔盒
url: 1291.html
id: 1291
categories:
  - 电脑医生
date: 2014-08-24 10:48:03
---

平时都是电脑操作习惯了，最近一段时间用天猫魔盒看看视频、上上网等，发现输入法很难用，键位的布局不是按照电脑键盘来的，而是按字母顺序，找个字母很别扭。当然我们是理解天猫这样是有它特殊的考虑的。既然原生的不好用，那我们就自己安装一个吧。  

先说明一下，这里是在天猫魔盒上外接无线鼠标配合遥控器使用的（无线键鼠组合也是可以的），如果只有遥控器的话还是不要更换输入法的好，因为自己安装的这些第三方输入法是没有针对魔盒做适配的，遥控器不一定能用的。  

应用中心是没有输入法的，自己通过那个UC浏览器TV版可以下载手机常用的输入法，比如讯飞、百度、搜狗等等，或者电脑下载到u盘魔盒安装也可。  

输入法安装好了，但是问题是不能启用，系统没有切换输入法的设置，点击第三方输入法的“切换”也是没有任何效果，看来此路不通啊，但是自带的输入法真心不好用啊（希望更新版本时能改进一下）。于是搜索之，经过一番摸索，找到了一个比较好的方法，在这里与大家分享一下。  

主要的思路就是电脑通过adb shell来切换输入法，电脑需要具有adb工具，一般情况下电脑安装了类似刷机精灵软件的都应该具有adb工具，此文以刷机精灵为例。打开刷机精灵工具中的adb shell，输入  

adb connect 192.168.1.6

ip地址为局域网中天猫魔盒的ip，连接成功的话会看到  

> connected to 192.168.1.6:5555

此时再输入adb shell，进入shell@android:/ $提示符，输入  

ime list -a

该命令会返回当前魔盒已安装的所有输入法  

> com.aliyun.mobile.ime/.AImeService: mId=com.aliyun.mobile.ime/.AImeService mSettingsActivityName=com.aliyun.mobile .ime.setting.AImeSettingsAct mIsDefaultResId=0x7f080000 Service: priority=0 preferredOrder=0 match=0x108000 specificIndex=-1 isDefault=false ServiceInfo: name=com.aliyun.mobile.ime.AImeService packageName=com.aliyun.mobile.ime enabled=true exported=true processName=com.aliyun.mobile.ime permission=android.permission.BIND\_INPUT\_METHOD flags=0x0 com.iflytek.inputmethod.pad/.FlyIME: mId=com.iflytek.inputmethod.pad/.FlyIME mSettingsActivityName=com.iflytek.inpu tmethod.pad.SettingsActivity mIsDefaultResId=0x0 Service: priority=0 preferredOrder=0 match=0x108000 specificIndex=-1 isDefault=false ServiceInfo: name=com.iflytek.inputmethod.pad.FlyIME packageName=com.iflytek.inputmethod.pad enabled=true exported=true processName=com.iflytek.inputmethod.pad permission=android.permission.BIND\_INPUT\_METHOD flags=0x0

本文安装的是讯飞输入法，接下来就切换为讯飞输入法（pad版）吧，输入  

ime set com.iflytek.inputmethod.pad/.FlyIME

会看到成功的消息  

> Input method com.iflytek.inputmethod/.FlyIME selected

好了，现在再去操作一下天猫魔盒吧，输入法已经如你所愿啦，都快忘记说了，系统是不需要root的哦。