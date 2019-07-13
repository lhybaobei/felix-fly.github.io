---
title: 配置cas实现单点登录实例
tags:
  - cas
  - keytool
  - tomcat
  - 单点登录
url: 1270.html
id: 1270
categories:
  - 编程开发
date: 2014-04-05 13:34:08
---

结合cas官方文档及一篇中文教程，搭建单点登录的完整实例。  

官方配置文档，配置的每一步描述都很详细，不过各软件版本较旧，文档中给出的有些链接已经失效。 [https://wiki.jasig.org/display/CASUM/Demo](https://wiki.jasig.org/display/CASUM/Demo)  

small_love的中文教程很精炼 [http://blog.csdn.net/small_love/article/details/6664831](http://blog.csdn.net/small_love/article/details/6664831)  

系统环境 \- windows 7 32  

下面是详细的配置过程：  

由于某些网络原因，cas官方网站（www.jasig.org/cas）无法访问，故将文中涉及到的各软件版本及下载地址列出  

Tomcat 6.0.37 [http://archive.apache.org/dist/tomcat/tomcat-6/v6.0.37/bin/](http://archive.apache.org/dist/tomcat/tomcat-6/v6.0.37/bin/)  

cas-server 3.5.2 [http://downloads.jasig.org/cas/](http://downloads.jasig.org/cas/)  

cas-client 3.2.1 [http://downloads.jasig.org/cas-clients/](http://downloads.jasig.org/cas-clients/)  

以上给出的仅为软件所在的目录，请根据自身需要下载相应的文件类型  

1\. JDK环境配置 不再赘述，请参考相关教程 cas-server-3.5需要jdk1.6以上的版本，本例jdk1.6.0_21  

2\. 使用JDK自带的keytool工具制作证书 如果将JAVA\_HOME加入了系统path变量，在任意目录dos命令窗口都可以直接执行命令；否则需要在cmd中切换到java工具目录（例如C:\\Program Files\\Java\\jdk1.6.0\_21\\bin）  

// 生成证书并存储到自定义的证书库，输入的密码为证书库密码

> keytool -genkey -alias tomcat -keyalg RSA -keystore C:/keystore 输入keystore密码：123456 再次输入新密码:123456 您的名字与姓氏是什么？ \[Unknown\]：compA 您的组织单位名称是什么？ \[Unknown\]：IT 您的组织名称是什么？ \[Unknown\]：Inc 您所在的城市或区域名称是什么？ \[Unknown\]：SZ 您所在的州或省份名称是什么？ \[Unknown\]：JS 该单位的两字母国家代码是什么 \[Unknown\]：CN CN=compA, OU=IT, O=Inc, L=SZ, ST=JS, C=CN 正确吗？ \[否\]：是 输入的主密码 （如果和 keystore 密码相同，按回车）：回车

// 从自定义证书库中导出证书文件，密码为自定义证书库的密码

> keytool -export -file C:/server.crt -alias tomcat -keystore C:/keystore 输入keystore密码：123456 保存在文件中的认证

// 将证书导入JDK证书库中，此处要求输入的密码是JDK的证书库密码，默认为changeit

> keytool -import -keystore "%JAVA_HOME%\\jre\\lib\\security\\cacerts" -file C:/server.crt -alias tomcat 输入keystore密码：changeit 所有者:CN=compA, OU=IT, O=Inc, L=SZ, ST=JS, C=CN 签发人:CN=compA, OU=IT, O=Inc, L=SZ, ST=JS, C=CN 序列号:52564247 有效期: Thu Oct 10 13:59:35 CST 2013 至Wed Jan 08 13:59:35 CST 2014 证书指纹: MD5:4D:9A:FE:3E:CB:72:CF:FC:00:FF:74:96:0C:24:22:2D SHA1:9E:61:59:FF:27:A2:3B:EA:58:06:31:F9:5B:BA:C4:FA:D8:1D:62:6B 签名算法名称:SHA1withRSA 版本: 3 信任这个认证？ \[否\]： 是 认证已添加至keystore中

如果出现错误，可能是JDK的证书库密码已经修改过了，如果不知道密码，需要删除%JAVA_HOME%\\jre\\lib\\security\\cacerts文件，再重新导入证书，此时会自动新建一个证书库，会要求设置证书库的密码 keytool错误： java.io.IOException: Keystore was tampered with, or password was incorrect  

修改证书库密码可以使用下面的命令

> C:\\Users\\flyash>keytool -storepasswd -keystore "%JAVA_HOME%\\jre\\lib\\security\\cacerts"

3\. 配置cas服务器 安装Tomcat 6.0.37，此处不再展开，请参考tomcat安装的相关说明教程。  

解压下载的cas-server-3.5.2，将modules文件夹下的cas-server-webapp-3.5.2.war复制到tomcat的webapps目录下并重命名为cas.war  

修改tomcat的conf目录下的server.xml文件，去掉SSL在8443端口配置的注释，修改后的配置如下 ```xml  

\\n```  

启动tomcat，访问https://localhost:8443/cas/可以看到cas的登录页面，浏览器会提示证书不受信任，忽略或者添加例外即可。  

4\. 配置cas客户端 本例中cas客户端和服务端使用同一个tomcat，仅用于演示，实际使用中，一般客户端与服务端分属于不同的tomcat（服务器）中。  

解压下载的cas-client-3.2.1，将modules文件夹下的cas-client-core-3.2.1.jar和commons-logging-1.1.jar复制到tomcat下的webapps\\examples\\WEB-INF\\lib目录。  

修改tomcat的webapps\\examples\\WEB-INF下的web.xml文件，增加cas过滤器，这里cas服务器的地址不能是localhost，此处通过修改host文件自定义域名指向本机 ```xml  

CASFilter org.jasig.cas.client.authentication.AuthenticationFilter casServerLoginUrl https://compa:8443/cas/login serverName http://localhost:8080 CASFilter /servlets/servlet/HelloWorldExample CAS Validation Filter org.jasig.cas.client.validation.Cas20ProxyReceivingTicketValidationFilter casServerUrlPrefix https://compa:8443/cas serverName http://localhost:8080 CAS Validation Filter /servlets/servlet/HelloWorldExample org.jasig.cas.client.session.SingleSignOutHttpSessionListener  

CAS Single Sign Out Filter org.jasig.cas.client.session.SingleSignOutFilter CAS Single Sign Out Filter /servlets/servlet/HelloWorldExample CAS HttpServletRequest Wrapper Filter org.jasig.cas.client.util.HttpServletRequestWrapperFilter CAS HttpServletRequest Wrapper Filter /servlets/servlet/HelloWorldExample CAS Assertion Thread Local Filter org.jasig.cas.client.util.AssertionThreadLocalFilter CAS Assertion Thread Local Filter /servlets/servlet/HelloWorldExample \\n```  

修改host文件，增加一行，注意域名（主机名）小写

> 127.0.0.1 compa

重启tomcat，访问http://localhost:8080/examples/servlets/servlet/HelloWorldExample，会跳转到cas登录页面  

输入用户名及密码admin，登录成功后返回到hello world页面