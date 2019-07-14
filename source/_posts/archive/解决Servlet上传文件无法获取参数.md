---
title: 解决Servlet上传文件无法获取参数
tags:
  - form
  - servlet
  - 参数
  - 文件上传
url: 752.html
id: 752
categories:
  - 编程开发
date: 2010-10-09 21:16:05
---

通过Servlet上传文件，form中的参数无法获取，经过一番勘查，找到原因：  

使用HttpServletRequest方法getParameter()无法取到参数是因为form中包含混合类型(如文本框和文件上传控件)  

使用这样的form提交，服务器端就无法取到文本框的参数值  

解决办法: ```java  

public class MyServlet extends HttpServlet {  

protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { response.setCharacterEncoding("utf-8");  

FileItemFactory factory = new DiskFileItemFactory(); ServletFileUpload upload = new ServletFileUpload(factory);  

List items = null;  

try { items = upload.parseRequest(request); } catch (FileUploadException ex) { throw new ServletException(ex); }  

Iterator iter = items.iterator();  

String name = null; InputStream image = null; while (iter.hasNext()) { FileItem item = (FileItem) iter.next(); String field = item.getFieldName();  

if ("name".equals(field)) { name = item.getString(); System.out.println(name); } else if ("imageFile".equals(field)) { image = item.getInputStream(); System.out.println(image.toString()); }  

}  

//TODO some operation  

} } \\n```