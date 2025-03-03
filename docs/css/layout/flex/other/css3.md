# 3、css属性direction对flex布局的影响

```css
direction：ltr | rtl 
```

<div style="display: flex">
  <div class="form-label">direction</div>
  <el-select v-model="formInline.value" placeholder="请选择" @change="changeItem" clearable>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
  <div class="form-label">flex-direction</div>
  <el-select v-model="formInline.value1" placeholder="请选择" @change="changeItem1" clearable>
    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</div>
<br/>
<div :class="'flex container' + css + css1">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<script>
export default {
  data () {
    return {
      formInline: {
        value: "",
        value1: ""
      },
      msg1: "```css\n direction：ltr | rtl \n```",
      css: "",
      css1: "",
      options: [
        {label: "ltr", value: "ltr"},
        {label: "rtl", value: "rtl"}
      ],
      options1: [
        {label: "row", value: "row"},
        {label: "row-reverse", value: "row-reverse"},
        {label: "column", value: "column"},
        {label: "column-reverse", value: "column-reverse"}
      ]
    };
  },
  mounted () {
  },
  methods: {
    changeItem (value) {
      this.css = " " + value;
      console.log(value);
    },
    changeItem1 (value) {
      this.css1 = " " + value;
      console.log(value);
    }
  }
};
</script>

<style scoped>
.lrt {
  direction: ltr;
}
.rtl {
  direction: rtl;
}
.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}
.column {
  flex-direction: column;
}
.form-label {
  vertical-align: middle;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 5px;
  box-sizing: border-box;
}
.column-reverse {
  flex-direction: column-reverse;
}
img {
  max-width: 70%;
  height: auto;
}
.flex {
  display: flex;
}
.container {
  width: 100%;
  background: yellow;
}
.item {
  border: dashed 1px;
  font-size: 40px;
  height: 100px;
  width: 19%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: cyan;
}
</style>
