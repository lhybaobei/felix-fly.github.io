---
title: Tomcat6启动文件startup.bat解读
tags:
  - startup
  - tomcat
  - 启动文件
url: 187.html
id: 187
categories:
  - 互联网络
date: 2009-04-26 06:16:27
---

@echo off //DOS在运行批处理时，会依次执行批处理中的每条命令，并且会在显示器上显示，如果你不想让它们显示，可以加一个“echo off”。当然，“echo off”也是命令，它本身也会显示，如果连这条也不显示，就在前面加个“@”。  

if "%OS%" == "Windows_NT" setlocal //判断当前系统是否是window系统 rem --------------------------------------------------------------------------- //rem 是注释（下同） rem Start script for the CATALINA Server rem rem $Id: startup.bat 302918 2004-05-27 18:25:11Z yoavs $ rem ---------------------------------------------------------------------------  

rem Guess CATALINA\_HOME if not defined set CURRENT\_DIR=%cd% //设置当前目录 if not "%CATALINA\_HOME%" == "" goto gotHome //如果设置了CATALINA\_HOME环境变量 ，就直接到下面的gotHome处 set CATALINA\_HOME=%CURRENT\_DIR% //如果没有设置CATALINA\_HOME，就设置CATALINA\_HOME为当前目录（其实这里她假设你进入tomcat的安装目录） if exist "%CATALINA\_HOME%\\bin\\catalina.bat" goto okHome//判断一下catalina.bat是否找到了，找到了就直接到下面的gotHome处 cd .. //这里他是假设你开始已经进入到了tomcat的bin目录，所以就退到上一级目录 set CATALINA\_HOME=%cd%//现在再设置CATALINA\_HOME为tomcat的安装目录 cd %CURRENT\_DIR% //这里是进入dos的当前目录 :gotHome if exist "%CATALINA\_HOME%\\bin\\catalina.bat" goto okHome //再次判断catalina.bat是否找到了，找到了就直接到下面的okHome处，没有的话，就只能提示你啦！ echo The CATALINA\_HOME environment variable is not defined correctly echo This environment variable is needed to run this program goto end :okHome  

set EXECUTABLE=%CATALINA_HOME%\\bin\\catalina.bat //设置要执行的文件  

rem Check that target executable exists if exist "%EXECUTABLE%" goto okExec //再次判断catalina.bat是否找到了，找到了就直接到下面的okExec处，没有的话，就提示。 echo Cannot find %EXECUTABLE% echo This file is needed to run this program goto end :okExec  

rem Get remaining unshifted command line arguments and save them in the set CMD\_LINE\_ARGS= //这里是设置参数 :setArgs if ""%1""=="""" goto doneSetArgs //判断参数是否加入完成 set CMD\_LINE\_ARGS=%CMD\_LINE\_ARGS% %1 //将参数组成一行，接在后面 shift goto setArgs :doneSetArgs  

call "%EXECUTABLE%" start %CMD\_LINE\_ARGS% //执行catalina.bat，最好将这行改为:echo "%EXECUTABLE%" start %CMD\_LINE\_ARGS% 以便阅读、理解本文件的作用  

:end  

//这个批处理文件，主要是正确的找到catalina.bat，并且执行。  

当把tomcat解压到一个地方时，通常是设置一个CATALINA\_HOME的环境变量，执行这个文件时，就很容易找到 catalina.bat 如果没有设置CATALINA\_HOME的环境变量，那么你需要在dos中进入tomcat的安装目录，或者bin...子目录，再执行这个文件，如果在其他目录，将会出现提示找不到文件。 【针对startup.bat文件】 双击该文件时，%cd%的值为当前目录的值，所有执行是没有问题的。