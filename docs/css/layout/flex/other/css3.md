# 3、css 属性 direction 对 flex 布局的影响

```css
direction：ltr | rtl
```

<div style="display: flex;flex-direction: row;align-items: center;">
  <div>direction：</div>
  <div class="dropdown" :key="'1'">
    <button class="dropdown-btn" :key="'1-1'" @click="this.isOpen = !this.isOpen"> {{ selectedOption || "请选择" }} </button>
    <ul v-if="isOpen" class="dropdown-menu" :key="'1-1-1'">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option.value)"> {{ option.label }} </li>
    </ul>
  </div>
  <div>flex-direction：</div>
  <div class="dropdown" :key="'2'">
    <button class="dropdown-btn" :key="'2-1'" @click="this.flexOpen = !this.flexOpen"> {{ selectedOption1 || "请选择" }} </button>
    <ul v-if="flexOpen" class="dropdown-menu" :key="'2-1-1'">
      <li v-for="(option, index) in options1" :key="index" @click="selectOption1(option.value)"> {{ option.label }} </li>
    </ul>
  </div>
</div>

<br/><!--  -->

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
      css: '',
      css1: '',
      isOpen: false,
      flexOpen: false,
      selectedOption: '',
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
    // 选择选项
    selectOption(value) {
      this.selectedOption = value;
      this.css = " " + value;
      this.isOpen = false; // 选择后关闭下拉菜单
    },
        // 选择选项
    selectOption1(value) {
      this.selectedOption1 = value;
      this.css1 = " " + value;
      this.flexOpen = false; // 选择后关闭下拉菜单
    },
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
  box-sizing: border-box;
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
  box-sizing: border-box;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  min-width: 100px;
  margin: 5px 10px 5px 0;
  display: inline-block;
  font-size: 14px;
  color: #42b883;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 4px;
  box-sizing: border-box;
  transition: .1s;
  padding: 8px 14px;
}
.dropdown-btn:hover {
  border-color: #dcdfe6;
  background: #ecf5ff
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 10px;
  text-align: left;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background-color: #ddd;
}
</style>
