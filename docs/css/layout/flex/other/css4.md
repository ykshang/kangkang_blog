# 4、margin

## 在第一个和第三个元素上加margin: auto

<div class="container">
    <div class="item" style="margin:auto">111111</div>
    <div class="item">11111111</div>
    <div class="item" style="margin:auto">11111</div>
    <div class="item">11111</div>
    <div class="item">11111</div>
  </div>

## 在第一、二、三个元素上加margin: auto

<div class="container">
    <div class="item" style="margin:auto">111111</div>
    <div class="item" style="margin:auto">11111</div>
    <div class="item" style="margin:auto">11111</div>
    <div class="item">11111</div>
    <div class="item">111</div>
  </div>

## 在第一个和第三个元素上加margin-left: auto

<div class="container">
    <div class="item" style="margin-left:auto">11111</div>
    <div class="item">111</div>
    <div class="item" style="margin-left:auto">11111</div>
    <div class="item">1111</div>
    <div class="item">1111</div>
  </div>

<style scoped>
.item {
  border: 1px dashed;
  background: cyan;
  height: 50px;
}
.container {
  display: flex;
  border: 1px dashed red;
  background: yellow;
  width: 100%;
}
</style>
