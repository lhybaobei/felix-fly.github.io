---
title: jquery日历插件FullCalendar简介
tags:
  - FullCalendar
  - JQuery
  - 插件
  - 日历
url: 1249.html
id: 1249
categories:
  - 编程开发
date: 2013-08-21 20:31:55
---

FullCalendar是一款基于jquery的日历控件  

**简介**  

官方网站： [http://arshaw.com/fullcalendar/](http://arshaw.com/fullcalendar/) 英文文档： [http://arshaw.com/fullcalendar/docs/](http://arshaw.com/fullcalendar/docs/)  

中文翻译文档（虽然是2009年翻译的，不过文档变动不是很大，可以参考） [http://blog.csdn.net/lgg201/article/details/4818941](http://blog.csdn.net/lgg201/article/details/4818941)  

开源协议 \- MIT 目前最新版本 - 1.6.3 发布日期 - 2013-08-10  

**使用方法** 1\. 下载压缩包fullcalendar-1.6.3.zip解压 2. 在html页面中导入资源 ```html \\n``` 几点说明： FullCalendar需要jquery，如果项目已经引入了jquery，此处不需要重复导入 如果要在日历中使用鼠标拖拽功能，需要导入jquery-ui 压缩包中包含的jquery-ui文件仅包含了jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.resizable.js的功能；如果项目已经引入了包含以上功能的jquery-ui文件，此处不可重复导入，重复导入会造成jquery-ui的其它功能失效 3. 调用插件 \`\`\`javascript $(function(){ $('#calenderDemo').fullCalendar({}); }); \\n\`\`\` **配置日历表头** \`\`\`javascript $('#calenderDemo').fullCalendar({ header:{ left: 'prev,next today', center: 'title', right: 'month,agendaWeek,agendaDay' } }); \\n\`\`\` left、center、right参数对应页面表头三个位置（左、中、右），参数值多个之间可以使用逗号或者空格隔开，可选值范围如下： title - 当前日期文本 prev - 向前翻按钮 next - 向后翻按钮 prevYear - 前一年按钮 nextYear - 后一年按钮 today - 今天按钮 month - 月视图 basicWeek - 周视图 basicDay - 日视图 agendaWeek - 带小时周视图 agendaDay - 带小时日视图  

**配置中文界面** \`\`\`javascript $('#calenderDemo').fullCalendar({ buttonText: { today: '今天', month: '月', week: '周', day: '天' }, allDayText: '全天', monthNames: \['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'\], monthNamesShort: \['1','2','3','4','5','6','7','8','9','10','11','12'\], dayNames: \['星期日','星期一','星期二','星期三','星期四','星期五','星期六'\], dayNamesShort: \['周日','周一','周二','周三','周四','周五','周六'\], }); \\n\`\`\` **日程对象event** 日历中显示的日程事件 { title: 'some name', start: '2013-08-08', end: '2013-08-12' } 基本参数说明 title - 事件名称，显示在日程中 start - 日程开始时间 end - 日程结束时间 其它参数 id allDay url className editable startEditable durationEditable source color backgroundColor borderColor textColor 除此以外，可以根据功能需要在event对象中添加自定义的属性  

**显示日程** \`\`\`javascript $('#calenderDemo').fullCalendar({ events:\[\] }); \\n\`\`\` 添加参数events: array/json string/function 可以为数组： \`\`\`javascript events: \[ { title: 'All Day Event', start: new Date() }, { title: 'Long Event', start: new Date(), end: new Date(new Date().getTime()+86400000) } \] \\n\`\`\` 可以通过ajax加载json数据： \`\`\`javascript events: { url: '/myfeed.php', type: 'POST', data: { custom\_param1: 'something', custom\_param2: 'somethingelse' }, error: function() { alert('there was an error while fetching events!'); }, color: 'yellow', // a non-ajax option textColor: 'black' // a non-ajax option } \\n\`\`\` 也可以是一个function： \`\`\`javascript events: function(start, end, callback) { // 取得日程数据后回调 callback(events); } \\n\`\`\` **添加日程** 通过点击日历单元格，添加新日程 \`\`\`javascript var calendar = $('#calenderDemo').fullCalendar({ dayClick: function(date, allDay, jsEvent, view) { // 此处可以进行弹窗、后台通信等处理 // 本例仅在日历中添加一个新日程 calendar.fullCalendar('renderEvent', { title: '日程' + new Date().getTime(), start: date, allDay: allDay } ); } }); \\n\`\`\` 参数说明 date - 当前日期，在agendaWeek、agendaDay视图点击时包含时间 allDay - 在agendaWeek、agendaDay视图点击时为false，其它情况为true jsEvent - 原生javascript事件 view - 当前视图对象  

**修改日程** 点击当前显示的日程，修改日程 \`\`\`javascript var calendar = $('#calenderDemo').fullCalendar({ eventClick : function(event, jsEvent, view) { // 此处可添加修改日程的代码 var red = Math.round(255 * Math.random()); var green = Math.round(255 * Math.random()); var blue = Math.round(255 * Math.random()); $(this).css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')'); } }); \\n\`\`\` event参数为当前点击的日程  

**鼠标拖动改变日程时间范围** 使用鼠标在页面上直接拖动改变日程时间范围，需要jquery-ui的拖拽功能，初始化时需配置参数editable为true来启用拖动功能。 \`\`\`javascript var calendar = $('#calenderDemo').fullCalendar({ editable : true, eventDrop : function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) { // 拖动某个日程到新位置时，日程时间改变，此处可做相关处理 } }); \\n\`\`\` 参数说明 dayDelta - 保存了这次拖动导致该日程事件移动了多少天, 向前为正数, 向后为负数 minuteDelta - 保存了这次拖动导致该日程事件移动了多少分钟, 向前为正数, 向后为负数，该值只有在agenda view下有效 allDay - 如果在month view下移动, 或在agenda view下移动到all-day区域, 则allDay为true, 移动到agenda view的其他区域则为false revertFunc - 调用该方法, 可以将刚才的拖动恢复到原状。这个方法多用于ajax的提交, 移动之后, 提交数据到后台, 如果后台更新失败, 根据返回消息, 调用这个方法, 可以使页面回复原状 \`\`\`javascript var calendar = $('#calenderDemo').fullCalendar({ editable : true, eventResize : function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view) { // 改变某个日程大小，日程结束时间改变，此处可做相关处理 } }); \\n\`\`\` 参数与eventDrop回调类似，以下仅说明不同之处： dayDelta - 保存了日程结束时间变化了多少天，向前为正数, 向后为负数 minuteDelta -保存了日程结束时间变化了多少分钟, 向前为正数, 向后为负数，该值只有在agenda view下有效，其它情况为0  

**鼠标划过选择一段日期** 类似在资源管理器中选择多个文件的操作，使用鼠标在页面上选择一段日期进行操作，例如添加日程，需要配置selectable参数为true 在一个单元格上，鼠标划过选择事件select和鼠标点击单元格事件dayClick会被同时触发 \`\`\`javascript var calendar = $('#calenderDemo').fullCalendar({ selectable : true, select : function(startDate, endDate, allDay, jsEvent, view) { // 选中一段日期，此处可做相关处理 // 处理完成后，取消选中状态 calendar.fullCalendar('unselect'); } }); \\n\`\`\` 参数说明 startDate - 开始日期 endDate - 结束日期，当allDay为true时，结束日期包含最后一天  

**演示demo** demo/calender.html  

[示例下载demo](https://res.cloudinary.com/flyash/raw/upload/v1562816908/itcao/demo_noad8x.zip)