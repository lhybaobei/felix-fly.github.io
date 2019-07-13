---
title: 调试工具ollydbg常用断点之一
tags:
  - ollydbg
  - 常用断点
url: 41.html
id: 41
categories:
  - 加密解密
date: 2009-03-01 21:24:00
---

限制程序功能函数  

EnableMenuItem 允许、禁止或变灰指定的菜单条目  

EnableWindow 允许或禁止鼠标和键盘控制指定窗口和条目（禁止时菜单变灰）  

对话框函数  

CreateDialog 从资源模板建立一非模态对话窗  

CreateDialogParam 从资源模板建立一非模态对话窗  

CreateDialogIndirect 从内存模板建立一非模态对话窗  

CreateDialogIndirectParam 从内存模板建立一非模态对话窗  

DialogBox 从资源模板建立一模态对话窗  

DialogBoxParam 从资源模板建立一模态对话窗  

DialogBoxIndirect 从内存模板建立一模态对话窗  

DialogBoxIndirectParam 从内存模板建立一模态对话窗  

EndDialog 结束一模态对话窗  

MessageBox 显示一信息对话框  

MessageBoxEx 显示一信息对话框  

MessageBoxIndirect 显示一定制信息对话框  

GetDlgItemInt 得指定输入框整数值  

GetDlgItemText 得指定输入框输入字符串  

GetDlgItemTextA 得指定输入框输入字符串  

Hmemcpy 内存复制 （非应用程序直接调用）  

磁盘处理函数  

GetDiskFreeSpaceA 获取与一个磁盘的组织有关的信息，以及了解剩余空间的容量  

GetDiskFreeSpaceExA 获取与一个磁盘的组织以及剩余空间容量有关的信息  

GetDriveTypeA 判断一个磁盘驱动器的类型  

GetLogicalDrives 判断系统中存在哪些逻辑驱动器字母  

GetFullPathNameA 获取指定文件的详细路径  

GetVolumeInformationA 获取与一个磁盘卷有关的信息 　  

GetWindowsDirectoryA 获取Windows目录的完整路径名  

GetSystemDirectoryA 取得Windows系统目录（即System目录）的完整路径名