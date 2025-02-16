# Flex相关概念

**示意图：**

![示意图](./assets/demo.png)

## 主轴(Main Axis)

flex-direction 可以设置主轴以及元素排列方向，它有以下四个取值：

```css
flex-direction: row ||  row-reverse || column || column-reverse;
```

示意图

![示意图](./assets/flex-direction.png)

## 交叉轴(Cross Axis)

垂直于主轴的轴线是交叉轴。

## 起始线和终止线

- 主轴的开始位置（与边框的交叉点）叫做 **`main start`** ，结束位置叫做 **`main end`** ；

- 交叉轴的开始位置叫做 **`cross start`** ，结束位置叫做 **`cross end`** 。

- 如果是阿拉伯语，他的书写方式是按照从右向左的方式来写的，这时候起始线和终止线会交换，通过 **`head`** 标签设置浏览器的语言来通知浏览器。浏览器会自动切换的。

## 容器和项目

- 采用 Flex 布局的元素，称为 Flex 容器（**flex container**），简称"**容器**"。

- 容器的所有子元素自动成为容器成员，称为 Flex 项目（**flex item**），简称"**项目**"或者“**元素**”。设置了flex属性后，会让项目的float，clear，vertical-align属性失效，不会导致脱离文档流。

## flex和inline-flex的区别

- flex相当于是块级元素，相当于div独占一行
- inline-flex相当于内联元素，相当于span，一行有很多个弹性盒子容器。

## 正/负自由空间

- 正向自由空间：指的是所有的弹性元素在主轴上未能占满弹性容器的全部宽度，这时候多余的空间叫做正向自由空间
- 负向自由空间：指的是所有的弹性元素在主轴上平铺，弹性容器的全部宽度不足以全部容纳，这时候不足的空间叫做负向自由空间
