---
title: 调试工具ollydbg常用断点之三
tags:
  - ollydbg
  - 常用断点
url: 43.html
id: 43
categories:
  - 加密解密
date: 2009-03-01 21:42:00
---

注册表处理函数

RegOpenKeyA 打开一个现有的注册表项

RegOpenKeyExA 打开一个现有的注册表项

RegCreateKeyA 在指定的项下创建或打开一个项

RegCreateKeyExA 在指定项下创建新项的更复杂的方式

RegDeleteKeyA 删除现有项下方一个指定的子项

RegDeleteValueA 删除指定项下方的一个值

RegQueryValueA 获取一个项的设置值

RegQueryValueExA 获取一个项的设置值

RegSetValueA 设置指定项或子项的值

RegSetValueExA 设置指定项的值

RegCloseKey 关闭系统注册表中的一个项（或键）

时间处理函数

CompareFileTime 比较两文件时间

GetFileTime 得文件建立，最后访问，修改时间

GetLocalTime 得当前本地时间

GetSystemTime 得当前系统时间　

GetTickCount 得windows启动至现时毫秒　

SetFileTime 设置文件时间

SetLocalTime 设置本地时间

SetSystemTime 设置系统时间

进程函数

CreateProcessA 创建一个新进程

ExitProcess 以干净的方式关闭一个进程

FindExecutableA 查找与一个指定文件关联在一起的程序的文件名

FreeLibray 释放指定的动态链库

GetCurrentProcess 获取当前进程的一个伪句柄

GetCurrentProcessId 获取当前进程一个唯一的标识符

GetCurrentThread 获取当前线程的一个伪句柄

GetExitCodeProces 获取一个已结束进程的退出代码

GetExitCodeThread 获取一个已结束线程的退出代码

GetModuleHandleA 获取一个应用程序或动态链接库的模块句柄

GetPriorityClassA 获取特定进程的优先级别

LoadLibraryA 载入指定的动态链接库，并将它映射到当前进程使用的地址空间

LoadLibraryExA 装载指定的动态链接库，并为当前进程把它映射到地址空间

LoadModule 载入一个windows应用程序，并在指定的环境中运行

TerminateProcess 结束一个进程