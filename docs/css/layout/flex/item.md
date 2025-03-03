# 弹性元素

## 1、order

该属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0

```html
<div>
  <div style="order: 1">1</div>
  <div style="order: 2">2</div>
  <div style="order: 1">1</div>
  <div style="order: 2">2</div>
  <div style="order: 3">3</div>
  <div style="order: 0">0</div>
  <div>无</div>
  <div style="order: 1">1</div>
</div>
```

示意图:

<div class="container" style="height: 50px">
  <div class="item flex1" style="order: 1">1</div>
  <div class="item flex1" style="order: 2">2</div>
  <div class="item flex1" style="order: 1">1</div>
  <div class="item flex1" style="order: 2">2</div>
  <div class="item flex1" style="order: 3">3</div>
  <div class="item flex1" style="order: 0">0</div>
  <div class="item flex1" >无</div>
  <div class="item flex1" style="order: 1">1</div>
</div>
<br/>
<div class="container" style="flex-direction: column; height: 200px; width: 150px">
  <div class="item flex1" style="order: 1">1</div>
  <div class="item flex1" style="order: 2">2</div>
  <div class="item flex1" style="order: 1">1</div>
  <div class="item flex1" style="order: 2">2</div>
  <div class="item flex1" style="order: 3">3</div>
  <div class="item flex1" style="order: 0">0</div>
  <div class="item flex1" >无</div>
  <div class="item flex1" style="order: 1">1</div>
</div>

## 2、flex-grow

该属性定义项目在主轴上的的放大比例，默认为 0，即如果存在剩余空间，也不放大。

flex-grow 若被赋值为一个正整数， flex 元素会以 flex-basis 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space，即正向自由空间）。如果有多个元素被允许延展，那么他们会按照 flex-grow 的值为比例分配剩余的可空间（正向自由空间），以填满容器主轴方向上的空间。

```html
<div class="container" style="height: 50px">
  <div>11111</div>
  <div style="flex-grow: 0">11111</div>
  <div style="flex-grow: 1">11111</div>
  <div style="flex-grow: 2">11111</div>
  <div style="flex-grow: 3">11111</div>
</div>
```

示意图

<div class="container" style="height: 50px">
  <div class="item">11111</div>
  <div class="item" style="flex-grow: 0">11111</div>
  <div class="item" style="flex-grow: 1">11111</div>
  <div class="item" style="flex-grow: 2">11111</div>
  <div class="item" style="flex-grow: 3">11111</div>
</div>

## 3、flex-shrink

该属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

flex-grow 属性是处理 flex 元素在主轴上增加空间的问题，相反 flex-shrink 属性是处理 flex 元素收缩的问题。如果容器中空间不足以容纳全部的子元素，可以通过设置 flex-shrink 属性设置为正整数来缩小它所占的空间。与 flex-grow 属性一样，可以赋予不同的值来控制 flex 元素收缩的程度，其数值代表了收缩的比例。在计算 flex 元素收缩的大小时，它的最小尺寸（**min-content**）也会被考虑进去，就是说实际上 flex-shrink 属性可能会和 flex-grow 属性表现的不一致。

```html
<div class="container" style="height: 50px">
  <div style="flex-shrink: 0; width: 200px">111</div>
  <div style="width: 200px">111</div>
  <div style="flex-shrink: 1; width: 200px">111</div>
  <div style="flex-shrink: 2; width: 200px">111</div>
  <div style="flex-shrink: 3; width: 200px">111</div>
</div>
```

示意图

<div class="container" style="height: 50px">
  <div class="item" style="flex-shrink: 0; width: 200px">111</div>
  <div class="item" style="width: 200px">111</div>
  <div class="item" style="flex-shrink: 1; width: 200px">111</div>
  <div class="item" style="flex-shrink: 2; width: 200px">111</div>
  <div class="item" style="flex-shrink: 3; width: 200px">111</div>
</div>

## 4、flex-basis

该属性定义了在分配空间之前，项目占据的主轴空间（main size）。

浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。如果元素设置主轴方向的宽度（**width**或者**height**），那么 flex-basis 会默认使用这个值，它可以设为具体的值（比如 350px），则项目将占据固定空间。flex-basis 属性在任何空间分配发生之前初始化 flex 子元素的尺寸. 此属性的初始值为 auto. 如果 flex-basis 设置为 auto , 浏览器会先检查 flex 子元素的主尺寸是否设置了绝对值再计算出 flex 子元素的初始值. 比如说你已经给你的 flex 子元素设置了 200px 的宽，则 200px 就是这个 flex 子元素的 flex-basis.

```html
<div class="container" style="height: 50px">
  <div>11111</div>
  <div style="flex-basis: auto">11111</div>
  <div style="flex-basis: 50px">11111</div>
  <div style="flex-basis: 100px">11111</div>
  <div style="flex-basis: 200px">11111</div>
</div>
```

示意图

<div class="container" style="height: 50px">
  <div class="item">11111</div>
  <div class="item" style="flex-basis: auto">11111</div>
  <div class="item" style="flex-basis: 50px">11111</div>
  <div class="item" style="flex-basis: 100px">11111</div>
  <div class="item" style="flex-basis: 200px">11111</div>
</div>

## 5、flex

该属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

```css
flex: 0 1 auto;
```

- **flex: initial：** 是把 flex 元素重置为 Flexbox 的初始值，它相当于 flex: 0 1 auto。在这里 flex-grow 的值为 0，所以 flex 元素不会超过它们 flex-basis 的尺寸。flex-shrink 的值为 1, 所以可以缩小 flex 元素来防止它们溢出。flex-basis 的值为 auto. Flex 元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的。
- **flex: auto：** 等同于 flex: 1 1 auto；和上面的 flex:initial 基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩。
- **flex: none：** 可以把 flex 元素设置为不可伸缩。它和设置为 flex: 0 0 auto 是一样的。元素既不能拉伸或者收缩，但是元素会按具有 flex-basis: auto 属性的 flexbox 进行布局。
- 你在教程中常看到的 flex: 1 或者 flex: 2 等等。它相当于 flex: 1 1 0。元素可以在 flex-basis 为 0 的基础上伸缩

## 6、align-self

该属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。

- 默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch：轴线占满整个交叉轴。

```html
<div class="container" style="height: 200px; align-items: flex-start">
  <div class="item" style="height: 40px">11111</div>
  <div class="item" style="height: 50px">11111</div>
  <div class="item" style="height: 110px">11111</div>
  <div class="item" style="height: 80px; align-self:flex-end">11111</div>
  <div class="item" style="height: 30px">11111</div>
  <div class="item" style="height: 170px">11111</div>
</div>
```

示意图

<div class="container" style="height: 200px; align-items: flex-start">
  <div class="item" style="height: 40px">11111</div>
  <div class="item" style="height: 50px">11111</div>
  <div class="item" style="height: 110px">11111</div>
  <div class="item" style="height: 80px; align-self:flex-end">11111</div>
  <div class="item" style="height: 30px">11111</div>
  <div class="item" style="height: 170px">11111</div>
</div>

<style scoped>
.item {
  border: 1px dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: cyan;
}
.container {
  display: flex;
  border: 1px dashed red;
  background: #ffe5644d;
  width: 100%;
}
.flex1 {
  flex: 1;
}
</style>
