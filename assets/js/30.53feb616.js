(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{446:function(s,n,t){},470:function(s,n,t){"use strict";t(446)},525:function(s,n,t){"use strict";t.r(n);var e={name:"Overview",data:()=>({flexFlag:"",flg:!0,isDiv:"div",cssContent:[],cssContent1:[],isCollapse:!0}),mounted(){this.flg=!1,this.cssContent=[{name:"容器",cssContent:"```css \n.container {\n  width: 1200px;\n  height: 400px;\n  background: yellow;\n}\n```"},{name:"弹性元素1",cssContent:"```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"},{name:"弹性元素2",cssContent:"```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"},{name:"弹性元素3",cssContent:"```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"}],this.cssContent1=[{name:"容器",cssContent:"```css \n.container {\n  width: 1200px;\n  height: 400px;\n  background: yellow;\n}\n.flex {\n  display: flex;\n}\n ```"},{name:"弹性元素1",cssContent:"```css \n.item\n  border: dashed 1px;\n  flex: 1;\n}\n ```"},{name:"弹性元素2",cssContent:"```css \n.item\n  border: dashed 1px;\n  flex: 1;\n}\n ```"},{name:"弹性元素3",cssContent:"```css \n.item\n  border: dashed 1px;\n  flex: 1;\n}\n ```"}]},methods:{changeDiv(){"div"===this.isDiv?this.isDiv="span":this.isDiv="div"},changeFlexFlag(){this.flexFlag?(this.flexFlag="",this.flg=!1):(this.flexFlag=" flex",this.flg=!0),console.log(this.flg)}}},i=(t(470),t(14)),a=Object(i.a)(e,(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("CSS 弹性盒子布局是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。")]),s._v(" "),n("h1",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),n("hr"),s._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:s.changeFlexFlag}},[s._v(s._s("切换弹性元素: "+s.flg))]),s._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:s.changeDiv}},[s._v(s._s("当前为: "+s.isDiv))]),s._v(" "),n("hr"),s._v(" "),"div"===s.isDiv?n("div",{class:"container"+s.flexFlag},[n("div",{staticClass:"item"},[s._v("弹性元素1")]),s._v(" "),n("div",{staticClass:"item"},[s._v("弹性元素2")]),s._v(" "),n("div",{staticClass:"item"},[s._v("弹性元素3")])]):s._e(),s._v(" "),"span"===s.isDiv?n("div",{class:"container"+s.flexFlag},[n("span",{staticClass:"item"},[s._v("弹性元素1")]),n("span",{staticClass:"item"},[s._v("弹性元素2")]),n("span",{staticClass:"item"},[s._v("弹性元素3")])]):s._e()],1)}),[],!1,null,"46631ee2",null);n.default=a.exports}}]);