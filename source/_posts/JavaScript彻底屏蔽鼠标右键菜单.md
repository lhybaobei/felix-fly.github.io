---
title: JavaScript彻底屏蔽鼠标右键菜单
tags:
  - JavaScript
  - 右键菜单
url: 14.html
id: 14
categories:
  - 编程开发
date: 2008-12-10 19:14:00
---

通过右键菜单的contextmenu事件屏蔽鼠标右键功能,代码如下


```language
<script type="text/javascript">
function blockMenu(oEvent){
  if(window.event){
    oEvent=window.event;
    oEvent.returnValue=false;
  }else{
    oEvent.preventDefault();
  }
}
document.oncontextmenu=blockMenu;
</script>
\n```