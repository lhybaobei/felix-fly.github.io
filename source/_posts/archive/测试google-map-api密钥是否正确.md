---
title: 测试google map api密钥是否正确
tags:
  - google map
url: 10.html
id: 10
categories:
  - 编程开发
date: 2008-12-05 14:40:00
---

```LANGUAGE
    <script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAPMb9i-xfXea2BhwglLD6vhQQfXL1E26uZVzpSr4bnBOO5ggYXxTJ8o5DOfAanEM5dHhSGnAhnn526Q"
      type="text/javascript"></script>
    <script type="text/javascript">
    //<![CDATA[
    function load() {
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(37.4419, -122.1419), 13);
      }
    }
    //]]>
    </script>
    <body onload="load()" onunload="GUnload()">
    <div id="map" style="width: 500px; height: 300px"></div>
  </body>\n```