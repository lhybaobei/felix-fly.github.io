---
title: 实现GWT组件PopupPanel鼠标拖动功能
tags:
  - gwt
  - PopupPanel
  - 鼠标拖动
url: 723.html
id: 723
categories:
  - 编程开发
date: 2010-09-20 22:29:37
---

使用gwt开发中，经常使用到PopupPanel这个widget，但是组件本身没有提供鼠标拖动的接口，正好又有此需求，自己摸索了一番，初步实现了鼠标点击标题拖动（类似窗口的操作），在此仅起到抛砖引玉的作用，下面给出关键部分的代码，完整的例子等闲暇的时候在整理贴出，嘿嘿。  

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-  

2010-12-09更新  

to:shix  

由于代码为项目中的一部分，不便于贴出，就对下面的代码简单说明一下，w为一个用uibinder设计的widget，getTitlePanel()得到窗口的标题栏，本例中为一HTMLPanel，实际就是<div>，拖到标题栏移动窗口，类似Windows的窗口操作。  

鼠标按下时，记下初始位置，同时激活拖动；鼠标移到，重新计算新位置，这里可以控制窗口是否可以拖出当前屏幕或容器；鼠标释放则禁止拖动。 ```JAVA private boolean flag = false; private int leftOffset = 0; private int topOffset = 0;  

public void showPopup() { final PopupPanel p = new PopupPanel(true); p.clear(); p.add(w);  

w.getTitlePanel().addMouseMoveHandler(new MouseMoveHandler() { public void onMouseMove(MouseMoveEvent event) { if (flag == true) { p.setPopupPosition(event.getClientX() + leftOffset, event.getClientY() + topOffset); } } }); w.getTitlePanel().addMouseDownHandler(new MouseDownHandler() { public void onMouseDown(MouseDownEvent event) { flag = true; leftOffset = p.getPopupLeft() - event.getClientX(); topOffset = p.getPopupTop() - event.getClientY(); } }); w.getTitlePanel().addMouseUpHandler(new MouseUpHandler() { public void onMouseUp(MouseUpEvent event) { flag = false; } }); p.center(); }\\n``` 窗口可以拖动到超出屏幕，如果需要限制在屏幕或者浏览器内拖动，需要多加一些判断条件。