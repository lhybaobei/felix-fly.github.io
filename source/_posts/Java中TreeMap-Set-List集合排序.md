---
title: Java中TreeMap Set List集合排序
tags:
  - java
  - list
  - set
  - treemap
  - 集合排序
url: 965.html
id: 965
categories:
  - 编程开发
date: 2011-08-19 21:46:54
---

在Java项目中TreeMap、Set、List集合经常会用到，自然也会遇到需要排序的情况。  

下面的文字是摘自网络，记录于此供以后学习备用。  

对于Set  

要实现排序功能，一般有两种途径，这里对基本类型不适用，基本类型一般有Arrays中的静态方法。  

1.对象本身实现Comparable接口，那么该类的实例就是可以排序的。  

只要实现了Comparable接口，就可以调用Collections的sort方法对集合中的元素排序。  

2.指定一个Comparator，也就是实现了Comparator的类的一个实例。  

但是Java本身只提供了一个Comparator的实现，就是Collections.reverseOrder()。  

该方法返回的是一个已经实现了Comparable接口的反序。  

看一下Comparator的全部内容:  


```public interface Comparator {
  int compare(Object o1, Object o2);
  boolean equals(Object obj);
}
```

定义了两个方法，其实我们一般都只需要实现compare方法就行了，因为类都是默认从Object继承 所以会使用Object的equals方法。  

Comparator一般都作为一个匿名类出现，对于没有实现Comparable的对象的集合，排序的时候 需要指定一个Comparator。  

这里举例说明，对于实现了Comparable的类我们就用最简单的Integer  


```List list=new ArrayList();
list.add(new Integer(3));
list.add(new Integer(53));
list.add(new Integer(34));
Collections.sort(list);
```

对于没有实现Comparable的,我们就用Object,按照hashCode大小来排序.


```List list= new ArrayList();
list.add(new Object());
list.add(new Object());
list.add(new Object());
Collections.sort(list,new Comparator(){ public int compare(Object o1, Object o2){
return (o1.hashCode()-o2.hashCode());
})
```

对于Map 实现Comparator方法


```class TComp implements Comparator {
    public int compare(Object a, Object b) {
        int i, j, k;
        String aStr, bStr;
        aStr = (String)a;
        bStr = (String)b;
        // find index of beginning of last name
        i = aStr.lastIndexOf(' ');
        j = bStr.lastIndexOf(' ');
        k = aStr.substring(i).compareTo(bStr.substring(j));
        if (k == 0) // last names match, check entire name
            return aStr.compareTo(bStr);
        else
            return k;
    }
}
```


```public class TreeMapSort {
    public static void main(String[] args) {
        TreeMap tm = new TreeMap(new TComp());
        tm.put("John Doe", new Double(3434.34));
        tm.put("Tom Smith", new Double(123.22));
        tm.put("Jane Baker", new Double(1378.00));
        tm.put("Todd Hall", new Double(99.22));
        tm.put("Ralph Smith", new Double(-19.08));
        System.out.println(tm.toString());
    }
} 
```