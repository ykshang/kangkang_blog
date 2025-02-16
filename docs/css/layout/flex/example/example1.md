# 表格hover组件

> - 移动端点击表格某一行，查看效果
> - pc端悬浮即可查看hover效果

<div class="tableCss">
  <el-table :data="tableData" style="width: 100%" :show-header="false">
    <el-table-column prop="id" label="Id" min-width="80">
    </el-table-column>
    <el-table-column prop="name" label="名称" min-width="150">
      <template slot-scope="scope">
        <ColumnHover
          :type="typeRender(scope.row.type)"
          mode="row"
          :content="scope.row.name"
          :row="scope.row"
          @clickContent="clickName"
          :icon="iconRender(scope.row.type)"
          :iconStyle="iconStyleRender(scope.row.type)"
          :iconList="iconList">
        </ColumnHover>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="日期" min-width="60">
    </el-table-column>
    <el-table-column prop="des" label="描述" min-width="70">
    </el-table-column>
  </el-table>
</div>

::: details 查看ColumnHover.vue组件代码及引用方式

**引用方式**

```html
<ColumnHover
  :type="typeRender(scope.row.type)"
  mode="row"
  :content="scope.row.name"
  :row="scope.row"
  @clickContent="clickName"
  :icon="iconRender(scope.row.type)"
  :iconStyle="iconStyleRender(scope.row.type)"
  :iconList="iconList">
</ColumnHover>
```

**源码**

```vue
<template>
  <div class="column">
    <div class="column_content">
      <i :class="icon" v-if="!!icon" :style="'margin-right: 5px; font-size: 1.3em;'+ iconStyle"></i>
      <div :class="contentStyle" :title="content" @click="clickFun">{{content}}</div>
    </div>
    <div :class="showMode + ' column_icon'" v-if="showIconListFlag">
      <i v-for="(item, index) in icons" :key="index" :class="item.icon" @click="item.handler(row)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnHover',
  props: ["icon", "type", "iconStyle", "row", "content", "iconList", "mode"],
  data () {
    return {
      contentStyle: "",
      showIconListFlag: false,
      icons: [],
      showMode: ""
    };
  },
  mounted () {
    let self = this;
    if (this.type === "text") {
      this.contentStyle = "content";
    } else {
      this.contentStyle = "content el-button--text";
    }
    if (this.mode !== "column") {
      this.mode = "row";
    }
    this.showMode = this.mode;
    this.init();
    if (!this.row) {
      throw new Error("The prop 'row' is Required");
    }
  },
  methods: {
    init () {
      this.icons = [];
      this.iconList.forEach(item => {
        if (item.icon && Object.prototype.toString.call(item.handler) === "[object Function]") {
          if (item.enabled === undefined || item.enabled === true || (Object.prototype.toString.call(item.enabled) === "[object Function]" && item.enabled(this.row) === true)) {
            this.icons.push({
              icon: item.icon,
              handler: item.handler
            });
          }
        }
      });
      if (this.icons.length > 0) {
        this.showIconListFlag = true;
      } else {
        this.showIconListFlag = false;
      }
    },
    clickFun () {
      if (this.type === "text") {
        return false;
      } else {
        this.$emit("clickContent", this.row);
      }
    }
  }
};
</script>
<style scoped>
.column {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.column_content {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}
.column_icon {
  display: none;
 }
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: inherit;
  cursor: pointer;
}
.column_icon i {
  margin: 5px 5px;
  font: 1.5em;
  display: inline-block;
}
.column_icon i:hover {
  color: #409EFF;
  cursor: pointer;
}
@media only screen and (max-width: 500px) {
  .column_content {
    max-width: 200px;
  }
  .content {
    white-space: initial;
  }
}
</style>
```

:::

::: warning 注意
  引用的时候，需要在父层容器或者全局下将组件设置为弹性元素
  例如element-ui表格组件el-tab

```css
  div >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
    display: inline-flex;
  }
  /* 适应移动端设备 */
  @media only screen and (max-width:580px) {
    div >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
      display: inline-flex;
      flex-direction: column;
    }
  }
```

:::

<script>
import ColumnHover from "../../.vuepress/componets/ColumnHover";
export default {
  name: 'Overview',
  data () {
    return {
      tableData: [{
        date: '2018-05-02',
        name: 'VolumeSolt@AutoSnap d6b44619-7767-4904-9018-3b709a179af3',
        id: 'd6b44619-7767-4904-9018-3b709a179af3',
        type: "catalog",
        status: "可用",
        des: "云计划任务自动生成的云硬盘 快照"
      }, {
        date: '2018-05-04',
        name: '蒸羊羔,蒸熊掌,蒸鹿尾儿,烧花鸭,烧雏鸡儿,烧子鹅,卤煮咸鸭,酱鸡,松花,小肚儿,晾肉,香肠,什锦苏盘',
        type: "catalog",
        status: "可用",
        id: '2c559087-e3f4-4c53-8b8c-416f785fcb35'
      }, {
        date: '2018-05-01',
        name: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        id: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        type: "file",
        status: "可用",
        des: "null"
      }, {
        date: '2018-05-03',
        name: '王小虎',
        id: 'bef8b732-afc8-4255-8622-a380749838f4',
        type: "catalog",
        status: "异常",
        des: "上海市普陀区金沙江路 1518 弄"
      }],
      iconList: [{
        icon: "el-icon-star-off",
        enabled: function (row) {
          return row.type !== "file";
        },
        handler: function (row) {
          this.$message.info("收藏成功");
        }.bind(this)
      }, {
        icon: "el-icon-share",
        enabled: function (row) {
          return row.status === "可用";
        },
        handler: function (row) {
          this.$message.error("分享成功");
        }.bind(this)
      }, {
        icon: "el-icon-warning-outline",
        enabled: true,
        handler: function (row) {
          this.$message.warning("更多");
        }.bind(this)
      }]
    };
  },
  mounted () {
  },
  methods: {
    clickName (value) {
      console.log(value);
      this.$message.info(value.name);
    },
    typeRender (value) {
      if (value === "file") {
        return "text";
      } else {
        return "button";
      }
    },
    iconRender (value) {
      if (value === "file") {
        return "el-icon-document";
      } else {
        return "el-icon-folder-opened";
      }
    },
    iconStyleRender (value) {
      if (value === "file") {
        return "color: #c0c4cca8";
      } else {
        return "color: #ffb509";
      }
    }
  },
  components: {
    ColumnHover
  }
};
</script>

<style scoped>
.table {
  margin: 30px;
}
/* .tableCss >>> .el-table--enable-row-hover .el-table__body tr td:hover .column_icon { */
div >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
  display: inline-flex;
}
@media only screen and (max-width:580px) {
  div >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
    display: inline-flex;
    flex-direction: column;
  }
}
</style>
