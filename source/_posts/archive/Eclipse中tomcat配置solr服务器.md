---
title: Eclipse中tomcat配置solr服务器
tags:
  - eclipse
  - solr
  - tomcat
  - 服务器
url: 736.html
id: 736
categories:
  - 编程开发
date: 2010-09-24 21:53:13
---

在Eclipse中为tomcat配置solr，启动服务器遇到如下错误消息： Can't find resource 'solrconfig.xml' in classpath or 'solr/conf/  

参考官方的文档得以解决，记录一下，免得以后忘掉。


```Tomcat on Windows
Single Solr app
    * Download and install Tomcat for Windows using the MSI installer. Install it with the tcnative.dll file. Say you installed it in c:\tomcat\
    * Check if Tomcat is installed correctly by going to http://localhost:8080/
    * Change the c:\tomcat\conf\server.xml file to add the URIEncoding Connector element as shown above.
    * Download and unzip the Solr distribution zip file into (say) c:\temp\solrZip\
    * Make the "solr home" directory called, where you intend the application server to function, say c:\web\solr\
    * Copy the contents of the example\solr directory c:\temp\solrZip\example\solr\ to c:\web\solr\
    * Stop the Tomcat service
    * Copy the *solr*.war file from c:\temp\solrZip\dist\ to the Tomcat webapps directory c:\tomcat\webapps\
    * Rename the *solr*.war file solr.war
    * Configure Tomcat to recognize the solr home directory you created, by adding the Java Option -Dsolr.solr.home=c:\web\solr
          o either use the system tray icon to add the java option
          o or manually edit the environment script c:\tomcat\bin\setenv.bat and add it to JAVA_OPTS 
    * Start the Tomcat service
    * Go to the solr admin page to verify that the installation is working. It will be at http://localhost:8080/solr/admin
```