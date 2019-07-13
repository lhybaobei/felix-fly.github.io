---
title: 调试工具ollydbg常用断点之二
tags:
  - ollydbg
  - 常用断点
url: 42.html
id: 42
categories:
  - 加密解密
date: 2009-03-01 21:39:00
---

文件处理函数  

CreateFileA 打开和创建文件、管道、邮槽、通信服务、设备以及控制台  

OpenFile 这个函数能执行大量不同的文件操作  

ReadFile 从文件中读出数据  

ReadFileEx 与ReadFile相似，只是它只能用于异步读操作，并包含了一个完整的回调  

WriteFile 将数据写入一个文件  

WriteFileEx 与WriteFile类似，只是它只能用于异步写操作，并包括了一个完整的回调  

SetFilePointer 在一个文件中设置当前的读写位置 　  

SetEndOfFile 针对一个打开的文件，将当前文件位置设为文件末尾  

CloseHandle 关闭一个内核对象。其中包括文件、文件映射、进程、线程、安全和同步对象等  

_lcreat 创建一个文件  

_lopen 以二进制模式打开指定的文件  

_lread 将文件中的数据读入内存缓冲区  

_lwrite 将数据从内存缓冲区写入一个文件  

_llseek 设置文件中进行读写的当前位置  

_lclose 关闭指定的文件  

_hread 将文件中的数据读入内存缓冲区 　  

_hwrite 将数据从内存缓冲区写入一个文件  

OpenFileMappingA 打开一个现成的文件映射对象  

CreateFileMappingA 创建一个新的文件映射对象  

MapViewOfFile 将一个文件映射对象映射到当前应用程序的地址空间  

MapViewOfFileEx （内容同上）  

CreateDirectoryA 创建一个新目录  

CreateDirectoryExA 创建一个新目录  

RemoveDirectoryA 删除指定目录  

SetCurrentDirectoryA 设置当前目录  

MoveFileA 移动文件  

DeleteFileA 删除指定文件  

CopyFileA 复制文件  

CompareFileTime 对比两个文件的时间  

SetFileAttributesA 设置文件属性  

SetFileTime 设置文件的创建、访问及上次修改时间  

FindFirstFileA 根据文件名查找文件  

FindNextFileA 根据调用FindFirstFile函数时指定的一个文件名查找下一个文件  

FindClose 关闭由FindFirstFile函数创建的一个搜索句柄  

SearchPathA 查找指定文件  

GetBinaryTypeA 判断文件是否可以执行  

GetFileAttributesA 判断指定文件的属性  

GetFileSize 判断文件长度  

GetFileTime 取得指定文件的时间信息  

GetFileType 在给出文件句柄的前提下，判断文件类型