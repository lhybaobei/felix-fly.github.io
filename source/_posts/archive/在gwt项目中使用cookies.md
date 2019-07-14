---
title: 在gwt项目中使用cookies
tags:
  - cookies
  - gwt
  - JavaScript
  - JQuery
url: 799.html
id: 799
categories:
  - 编程开发
date: 2010-12-30 22:30:14
---

在gwt项目中使用cookies记录用户有关信息，开发模式下似乎有点问题，不能设置cookies，domain那里好像是null，所以cookies设置失败，不知道是不是代码写的有问题，也没有时间仔细研究，每天事情一大堆，没完没了的，而且现在人家不喜欢gwt，原来使用gwt开发的模块正在一点一点被侵蚀掉，迟早还是会退化到……  

个人接触gwt时间不长，但是还是比较喜欢的，java里写起来很舒服，现在用aptana主要写js，虽然还是eclipse，但是js真的感觉不顺，再加上jquery，还有plugins，真是感觉好乱啊，可能是对jquery还不够熟悉吧。  

使用gwt最大的障碍就是它得编译，项目大了之后，编译一次要好久，就是平时开发模式，eclipse也显得慢慢腾腾。在这一点上，的确没有js的轻量级，保存刷新就好了。不过个人比较关心的是项目整体的效率，不知道有没有能够将gwt和jquery或者其他js框架开发出来的项目进行一下性能、效率等等方面的对比，偶对技术了解到实在是太肤浅了，望洋兴叹啊～～  

cookies使用还是比较简单的，可以先参考一下这个例子  

```java  

/\* \* Copyright 2007 Google Inc. * * Licensed under the Apache License, Version 2.0 (the "License"); you may not * use this file except in compliance with the License. You may obtain a copy of * the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the * License for the specific language governing permissions and limitations under * the License. */ package com.google.gwt.user.client;  

import com.google.gwt.junit.client.GWTTestCase;  

import java.util.Collection; import java.util.Date;  

/\*\* \* Test Case for {@link Cookies}. */ public class CookieTest extends GWTTestCase {  

public String getModuleName() { return "com.google.gwt.user.User"; }  

public void test() { // Make the cookie expire in one minute, so that they don't hang around // past the end of this test. Date expires = new Date(new Date().getTime() + (60 * 1000));  

// Test setting a simple cookie. Cookies.setCookie("foo", "bar", expires); assertEquals("bar", Cookies.getCookie("foo"));  

// Make sure that parsing cookies with embedded '=' works correctly. Cookies.setCookie("foo1", "foo=bar", expires); assertEquals("foo=bar", Cookies.getCookie("foo1"));  

// Make sure that setting the second cookie doesn't clobber the first. assertEquals("bar", Cookies.getCookie("foo"));  

// Make sure embedded ';' works as well. Cookies.setCookie("foo2", "foo;bar", expires);  

// Differentiate null cookie from '' cookie. Cookies.setCookie("novalue", "", expires); assertEquals(Cookies.getCookie("novalue"), ""); assertEquals(Cookies.getCookie("notpresent"), null); } /* * Test that the cookie will expire correctly after a set amount of time, * but does not expire before that time. */ public void testExpires() { // Test that the cookie expires in 5 seconds Date expiresEarly = new Date(new Date().getTime() + (5 * 1000)); Date expiresLate = new Date(new Date().getTime() + (60 * 1000)); Cookies.setCookie("shouldExpireEarly", "early", expiresEarly); Cookies.setCookie("shouldExpireLate", "late", expiresLate); Cookies.setCookie("shouldNotExpire", "forever", null);  

// Wait until the cookie expires before checking it Timer timer = new Timer() { public void run() { // Verify that the early expiring cookie does NOT exist assertNull(Cookies.getCookie("shouldExpireEarly"));  

// Verify that the late expiring cookie does exist assertEquals(Cookies.getCookie("shouldExpireLate"), "late");  

// Verify the session cookie doesn't expire assertEquals(Cookies.getCookie("shouldNotExpire"), "forever"); Cookies.removeCookie("shouldNotExpire"); assertNull(Cookies.getCookie("shouldNotExpire")); // Finish the test finishTest(); } }; timer.schedule(5010); delayTestFinish(6 * 1000); } /** * Test that removing cookies works correctly. */ public void testRemoveCookie() { // First clear all cookies clearCookies(); // Set a few cookies Cookies.setCookie("test1", "value1"); Cookies.setCookie("test2", "value2"); Cookies.setCookie("test3", "value3"); Collection cookies = Cookies.getCookieNames(); assertEquals(3, cookies.size()); // Remove a cookie Cookies.removeCookie("test2"); assertEquals("value1", Cookies.getCookie("test1")); assertEquals(null, Cookies.getCookie("test2")); assertEquals("value3", Cookies.getCookie("test3"));  

// Remove another cookie Cookies.removeCookie("test1"); assertEquals(null, Cookies.getCookie("test1")); assertEquals(null, Cookies.getCookie("test2")); assertEquals("value3", Cookies.getCookie("test3"));  

// Remove last cookie Cookies.removeCookie("test3"); assertEquals(null, Cookies.getCookie("test1")); assertEquals(null, Cookies.getCookie("test2")); assertEquals(null, Cookies.getCookie("test3")); cookies = Cookies.getCookieNames(); assertEquals(0, cookies.size()); } /** * Clear out all existing cookies. */ private void clearCookies() { Collection cookies = Cookies.getCookieNames(); for (String cookie : cookies) { Cookies.removeCookie(cookie); } } } \\n```  

还有[google官方的文档](http://google-web-toolkit.googlecode.com/svn/javadoc/2.1/com/google/gwt/user/client/Cookies.html)也是很有帮助的  

这里指向的是最新gwt2.1版本的文档，其他版本可以将地址中的版本号替换即可，最新版的增加了一些方法，使用时注意版本。