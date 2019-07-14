---
title: flv文件提取音频
tags:
  - ffmpeg
  - flv
  - FLV_Extract
  - flv分离
  - 音频提取
url: 1056.html
id: 1056
categories:
  - 电脑医生
date: 2011-10-26 21:02:23
---

音频文件使用flv进行了包装，而实际上flv文件是视频格式。飞尘需要编辑处理包含的音频信息，因此需要将音频从flv文件中分离出来。  

网上大部分都是关于FLV_Extract的，但是实际使用过程中发现，无法提取音频，给出的信息是：  

> nellymoser is unsupported

原因是由于文件在处理时使用的格式不被FLV_Extract所支持，也就是nellymoser。  

于是不得不寻找它法，后来看到有人提及在linux下可以使用ffmpeg进行音频文件的提取，幸运的是ffmpeg也提供了Windows平台下的版本。  

使用ffmpeg进行提取音频文件很简单，下面给出一个例子：  

ffmpeg -i source.flv -f mp3 audio.mp3

上面的命令是在cmd命令行条件下执行的。  

ffmpeg windows版本的下载地址： [http://ffmpeg.zeranoe.com/builds/](http://ffmpeg.zeranoe.com/builds/)  

其它下载： [http://ffmpeg.org/download.html](http://ffmpeg.org/download.html)