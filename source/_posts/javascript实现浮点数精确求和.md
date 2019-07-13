---
title: javascript实现浮点数精确求和
tags:
  - JavaScript
  - 加和
  - 浮点数
url: 866.html
id: 866
categories:
  - 编程开发
date: 2011-03-30 20:39:38
---

在javascript中计算两个浮点数的和，发现直接相加结果会出人意料。  

例如这个

alert(0.1+0.2)

输出为0.30000000000000004  

网上找了一下，有人写了这样的算法，就是通过小数点将浮点数分割为整数和小数部分，然后分别加和，最后再重新组合为浮点数。  

需要计算有浮点数加和的时候，调用这个方法。  

举个例子

alert(Sum_TwoFloatNumber(0.1,0.2) );

再附上算法  

```javascript  

function Sum\_TwoFloatNumber(val1,val2) { var TotalNum; val1 = val1 + '' ; var sp\_val1 = val1.split(".") ; val2 = val2 + '' ; var sp\_val2 = val2.split(".") ; if ((sp\_val1.length==2) && (sp\_val2.length==2)) { //两个浮点数相加 TotalNum = TotalNum + 0 ; TotalNum = parseFloat(sp\_val1\[0\]) + parseFloat(sp\_val2\[0\]) ; var length1 = sp\_val1\[1\].length; var length2 = sp\_val2\[1\].length; var length; if(length1>=length2){ length = length1; sp\_val2\[1\] = sp_val2\[1\]*Math.pow(10,length1 - length2); }else if(length1  
代码比较简单\\n```