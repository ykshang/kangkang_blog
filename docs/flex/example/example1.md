## 表格hover组件

<div class="tableCss">
  <el-table :data="tableData" style="width: 100%" :show-header="false">
    <el-table-column prop="id" label="Id" width="100px">
    </el-table-column>
    <el-table-column prop="name" label="名称">
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
    <el-table-column prop="date" label="日期" width="60px">
    </el-table-column>
    <el-table-column prop="des" label="描述" width="80px">
    </el-table-column>
  </el-table>
  <!------------------------------------------------------------------------------------>
  <el-divider>一条木有感情的分割线</el-divider>
  <p>div默认情况下会独占一行：</p>
  <div style="border: 1px dashed">ddd</div>
</div>

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
        return "el-icon-folder";
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
</style>
