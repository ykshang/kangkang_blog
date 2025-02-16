# position

position为absolute和fixed的元素会导致元素脱离文档流，影响flex布局，不会作为弹性子元素的存在，但是可以设置在容器上进行布局

position为arelative的元素不会导致元素脱离文档流，但也影响flex布局

```html
<div class="container flex">
  <div class="item">1111111111 11111111</div>
  <div class="item">11111111111 111111111111</div>
  <div class="item" style="position: absolute; top:40px; left:60px">1111 11111</div>
  <div class="item">111111111 1111111111</div>
</div>
```

<div class="container flex" style="position: relative">
    <div class="item">1111111111 11111111</div>
    <div class="item">11111111111 111111111111</div>
    <div class="item" style="position: absolute; top:40px; left:60px">1111 111111111</div>
    <div class="item">111111111 1111111111</div>
</div>

<style scoped>
.item {
  border: 1px dashed;
  height: 150px;
}
.container {
  display: flex;
  border: 1px dashed red;
  background: yellow;
}
</style>
