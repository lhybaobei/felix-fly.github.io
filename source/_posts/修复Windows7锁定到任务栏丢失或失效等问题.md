---
title: 修复Windows7锁定到任务栏丢失或失效等问题
tags:
  - Windows7
  - 任务栏
  - 锁定解锁
url: 641.html
id: 641
categories:
  - 电脑医生
date: 2010-07-12 23:11:53
---

今天不知道又哪里操作不当，忽然发现打开的程序不能固定到Windows7的任务栏中了，之前在程序图标上右键菜单是有“将此程序锁定到任务栏”选项的，此时没有了，只有“关闭窗口”了，在已经固定的图标上点右键，还是有“将此程序从任务栏解锁”的，点击也是有效的，不过取消了就不能固定啦。  

赶紧网上搜搜，据说是个什么去掉快捷方式的箭头造成的，这个好像早些年用Windows优化大师的时候看到过，呵呵。解决方法也很简单，使用下面这个注册表的小脚本就可以搞定了。 ```reg  

Windows Registry Editor Version 5.00  

\[HKEY\_CLASSES\_ROOT\\lnkfile\] @="Shortcut" "IsShortcut"="" \[HKEY\_CLASSES\_ROOT\\piffile\] @="Shortcut to MS-DOS Program" "IsShortcut"="" \\n``` 复制代码至任何文本编辑器，保存为*.reg文件，然后双击导入到注册表即可。  

为了使上面的操作能够马上生效，需要将桌面explorer.exe进程结束，然后再新任务，这时程序就能够正常固定到任务栏了。