---
title: 使用vbs脚本解决axure生成chm乱码
tags:
  - axure
  - chm
  - vbs
  - 乱码
  - 原型
  - 设计
url: 1203.html
id: 1203
categories:
  - 编程开发
date: 2012-08-30 22:05:20
---

最近做原型设计，用到了axure。做好后需要发布给其他人查看，弄一堆html页面总归感觉有些凌乱，好在axure提供了打包成chm文件的功能：在生成原型的时候，发布设置中勾选“创建HTML帮助文件(.chm)”即可。记得要安装Microsoft的HTML Help Workshop。  

原来“没那么简单”，如果设计中页面名称使用了中文（这很正常），直接发布出来的chm文件打开后页面索引会显示乱码的。虽然页面中的内容是正常的，但是这也是影响使用的。  

于是问google，原来是因为微软的hhc.exe工具进行编译时默认的是ascii编码，而axure生成的Table of Contents.hhc工程文件是使用utf-8编码，两者不统一自然会乱码了。  

找到原因当然也就有解决办法了，使用文本编辑工具打开Table of Contents.hhc的工程文件（类似maven的pom文件），另存为ascii编码格式。  

打开一个hhp扩展名的文件，双击\[OPTIONS\]中的Language=那一行，修改为中文简体，确定后菜单File->complie重新编译工程即可。  

以上为手工的处理方式，偶尔发布一两次还能接受。但是原型一般会改来改去，这样子岂不太郁闷了。于是看到了另外一种半自动的方式——使用vbs脚本来做，在哪里看到的忘记了，谢谢这位朋友，不好意思啊。  

这里飞尘根据自己的需要做了些调整，将转码后的文件做了一次拷贝，放到和脚本一起的目录，个人感觉这样比较方便，不用去一大堆文件里去找。  

使用的时候需要稍作修改： strHHCEXE - hhc工具的路径 strWorkPath - axure原型的输出目录 strFileName - axure工程名  

这里补充一点，为了避免生成的chm文件名乱码，axure工程名还是用英文的吧。  

完整的vbs脚本如下：  

```vbs  

Dim strHHCEXE, strWorkPath, strFileName strHHCEXE = "D:\\HTML Help Workshop\\hhc.exe" strWorkPath = "E:\\html\_out\\" strFileName = "UI\_0.0.1" Dim strHHCFile, strHHPFile, strCompileCmd strHHCFile = strWorkPath+"Table of Contents.hhc" strHHPFile = strWorkPath+strFileName+".hhp" strCompileCmd = """"+strHHCEXE+""" """+strWorkPath+strFileName+".hhp"""  

'将hhc从unicode转换为Ansi U8ToAnsi(strHHCFile)  

'将hhp文件中的0x409(英文),改为0x804(中文) Dim fso, f, ts, strContent Set fso = Wscript.CreateObject("Scripting.FileSystemObject") Set f = fso.GetFile(strHHPFile) Set ts = f.OpenAsTextStream(1, 0) strContent = ts.ReadAll ts.close strContent = Replace(strContent,"=0x409","=0x804") Set ts = f.OpenAsTextStream(2, 0) ts.write strContent ts.close  

'重新编译chm文件 Set WshShell = Wscript.CreateObject("WScript.Shell") '阻止脚本并行，保证重新编译后，再拷贝新文件 - modified by flyash WshShell.Run strCompileCmd, ,True  

'拷贝文件到上传目录 \- added by flyash fso.CopyFile strWorkPath+"\\"+strFileName+".chm", ".\\", True  

function U8ToAnsi(strFile) dim ADOStrm dim s Set ADOStrm = CreateObject("ADODB.Stream") ADOStrm.Type = 2 ADOStrm.Mode = 3 ADOStrm.CharSet = "utf-8" ADOStrm.Open ADOStrm.LoadFromFile strFile s = ADOStrm.ReadText ADOStrm.Position = 0 ADOStrm.CharSet = "gbk" ADOStrm.WriteText s ADOStrm.SetEOS ADOStrm.SaveToFile strFile, 2 ADOStrm.Close Set ADOStrm = Nothing end function \\n```