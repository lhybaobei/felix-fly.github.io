---
title: javascript检查form中radio未选择
tags:
  - form
  - JavaScript
  - radio
  - 验证规则
url: 978.html
id: 978
categories:
  - 编程开发
date: 2011-08-29 21:29:04
---

在web开发中，form是最经常使用不过的了。  

一般情况下，对于用户的输入，前台页面都会进行简单的规则验证，例如是否必填项为空，email地址不合法等等。  

对于一组给定的radio，一般也会需要检查用户是否进行了选择。例如选择性别：男/女。  

下面的代码对于给定的form，将遍历form中所有radio，并进行分组，对于每一组单选按钮，检测是否已经选择了其中一项，如果全部分组都通过验证，以数组形式返回选中的项目，否则，返回验证未通过。  

具体代码如下：  

```javascript  

function checkRadio(formId) { var radioName; var radioNames = new Array(); var inputs = $("#" + formId + " input"); var message = new Array(); var result = { "statu" : false, "message" : "" };  

for ( var i = 0; i < inputs.length; i++) { if (inputs\[i\].type == "radio") { // group radio by name if (radioName != inputs\[i\].name) { radioNames.push(inputs\[i\].name); radioName = inputs\[i\].name } } }  

for ( var i = 0; i < radioNames.length; i++) { var checked = false; var arr = $("input\[@name='" + radioNames\[i\] + "'\]"); for ( var j = 0; j < arr.length; j++) { if (arr\[j\].checked == true) { checked = true; message.push(arr\[j\].value); continue; } } if (!checked) { // not complete all selection return result; } }  

result.statu = true; result.message = message; return result; } \\n```