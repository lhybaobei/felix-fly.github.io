---
title: javascript在split函数中使用正则表达式
tags:
  - JavaScript
  - split
  - 分隔符
  - 字符串
  - 正则表达式
url: 1071.html
id: 1071
categories:
  - 编程开发
date: 2011-11-05 21:06:08
---

使用javascript开发项目，在需要统计英文句子中包含的单词数，或者将英文句子切分为单词时可能会遇到这样的情况。  

如果仅使用空格作为分隔符，就会潜在风险。  

当一段字符串中，如果多个空格连续存在，使用split进行分割就会出现错误，比如下面的例子：  

```javascript  

var s="a b c d"; var x=s.split(" ").length; alert(x); \\n```  

此时的结果就不是我们所预期的4了，而是为7。  

也就是说单纯使用空格作为分隔符来切分句子中的单词就有可能出现错误。  

使用正则表达式来分割字符串就可以避免这个问题。  

```javascript  

x=s.split(/\\s+/).length; alert(x); \\n```  

这样就是我们所期望的正确结果4了。