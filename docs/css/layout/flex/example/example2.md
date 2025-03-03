# 表格行内操作按钮

一般我们在操作表格时候，行内会有一些操作按钮，但是我们希望按钮隐藏，当鼠标悬浮到这一行时，再显示按钮。我们可以用 flex 布局来搞

### 1、显示效果

<br/>
<div class="parent">
  <div class='text'>VolumeSolt@AutoSnap(悬浮查看效果)</div>
  <div class='btn-g'>
    <div class="btn">新增</div>
    <div class="btn">删除</div>
    <div class="btn">编辑</div>
    <div class="btn">收藏</div>
  </div>
</div>

<style scoped>
  .parent {
    width: 400px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    background: #f9f9f9
  }
  .parent:hover>.btn-g {
    display: inline-flex;
  }
  .text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
  }
  .btn-g {
    display: none;
    align-items: center;
    justify-content: flex-start;
  }
  .btn {
    margin: 0px 6px;
    color: #409EFF;
    cursor: pointer;
    text-decoration: none;

  }
  .btn:hover {
    text-decoration: underline;
  }
</style>

### 2、实现代码

```vue
<div class="parent">
  <div class='text'>VolumeSolt@AutoSnap(悬浮查看效果)</div>
  <div class='btn-g'>
    <div class="btn">新增</div>
    <div class="btn">删除</div>
    <div class="btn">编辑</div>
    <div class="btn">收藏</div>
  </div>
</div>

<style scoped>
  .parent {
    width: 400px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    background: #f9f9f9
  }
  .parent:hover>.btn-g {
    display: inline-flex;
  }
  .text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
  }
  .btn-g {
    display: none;
    align-items: center;
    justify-content: flex-start;
  }
  .btn {
    margin: 0px 6px;
    color: #409EFF;
    cursor: pointer;
  }
</style>
```
