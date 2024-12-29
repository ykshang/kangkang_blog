(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{449:function(i,v,_){},477:function(i,v,_){i.exports=_.p+"assets/img/init.ee1a5b3b.png"},478:function(i,v,_){"use strict";_(449)},533:function(i,v,_){"use strict";_.r(v);_(478);var t=_(14),l=Object(t.a)({},(function(){var i=this,v=i._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[v("h2",{attrs:{id:"初始化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[i._v("#")]),i._v(" 初始化")]),i._v(" "),v("p",[i._v("当一个元素被设置为flex容器时，那么容器内他的所有子元素具备以下行为；")]),i._v(" "),v("ul",[v("li",[i._v("元素排列为一行 (容器的flex-direction 属性的初始值是 row)。")]),i._v(" "),v("li",[i._v("元素从主轴的起始线开始（容器的justify-content，初始值为flex-start）。")]),i._v(" "),v("li",[i._v("元素不会在主维度方向拉伸，但是可以缩小（元素的flex-grow默认为0）。")]),i._v(" "),v("li",[i._v("元素被拉伸来填充交叉轴大小（容器的align-items，默认值为stretch）。")]),i._v(" "),v("li",[i._v("flex-basis 初始值为 auto，如果元素本身上设置了主轴方向上的宽度，那么flex-basis的值默认取那个宽度，如果单独设置了flex-basis，那么元素本身在主轴上的宽度不再起作用。")]),i._v(" "),v("li",[i._v("flex-wrap 属性为 nowrap。")])]),i._v(" "),v("p",[i._v("这会让你的元素呈线形排列，并且把自己的大小作为在主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。元素会沿交叉轴被拉伸来填满它的大小。")]),i._v(" "),v("p",[v("img",{attrs:{src:_(477),alt:"示意图"}})]),i._v(" "),v("el-divider",[i._v("一条分割线")]),i._v(" "),v("h2",{attrs:{id:"初始化的计算过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化的计算过程"}},[i._v("#")]),i._v(" 初始化的计算过程")]),i._v(" "),v("ol",[v("li",[v("p",[i._v("确定弹性容器和元素")])]),i._v(" "),v("li",[v("p",[i._v("根据flex-direction的确定容器内的主轴方向和起始线终止线的位置，flex-direction的初始默认值为row")])]),i._v(" "),v("li",[v("p",[i._v("根据容器的justify-content的值，确认元素在主轴上的排列方式")])]),i._v(" "),v("li",[v("p",[i._v("根据元素的flex-grow的值确定元素在父容器存在正向自由空间时的分配比例")])]),i._v(" "),v("li",[v("p",[i._v("根据元素的flex-shirnk的值确定元素在父容器存在负向自由空间时的分配比例")])]),i._v(" "),v("li",[v("p",[i._v("根据flex-wrap的值确定是否可以换行，默认值为nowrap")]),i._v(" "),v("ul",[v("li",[i._v("换行的前提是容器的空间不够分配")])])]),i._v(" "),v("li",[v("p",[i._v("确定flex-basis的值，默认值为auto，正负自用空间的计算是根据flex-basis计算得到的")]),i._v(" "),v("ul",[v("li",[v("p",[i._v("如果元素设置了felx-basis的值，那么可以直接参与计算")])]),i._v(" "),v("li",[v("p",[i._v("如果元素设置主轴方向上的宽度（width或者height，可以为像素值，可以为max-content/contentd等值），那么这个宽度就是flex-basis的值")])]),i._v(" "),v("li",[v("p",[i._v("如果元素未设置flex-basis或者主轴方向上的宽度取元素max-content的值")])])])]),i._v(" "),v("li",[v("p",[i._v("根据flex-basis计算正负自由空间，容器的宽度 - ∑所有子元素的flex-basis得到的值")]),i._v(" "),v("p",[i._v("假设有n个元素，felx-basis分别为F1、F2...，flex-grow的值分别为g1、g2...，flex-shrink的值分别为s1、s2...，容器的总宽度为W")]),i._v(" "),v("p",[i._v("正/负自由空间的计算方式为值："),v("strong",[i._v("W自由 =W - F1 - F2 - ... - Fn")])]),i._v(" "),v("ul",[v("li",[i._v("如果为正，则存在正向自由空间，允许元素通过伸展填满父元素，具体计算方式为：")])]),i._v(" "),v("p",[i._v("第x个最终宽度为："),v("strong",[i._v("Fx+ W自由 * gx / (g1 + g2 + ... gn)")])]),i._v(" "),v("ul",[v("li",[v("p",[i._v("如果为负，则存在负向自由空间，需要元素进行收缩，以填满父容器")]),i._v(" "),v("ol",[v("li",[v("p",[i._v("假设有n个元素，felx-basis宽度分别为F1、F2.....,,容器的总宽度为W")])]),i._v(" "),v("li",[v("p",[i._v("则第x个最终宽度为："),v("strong",[i._v("Fx + W自由 * sx / (F1 * s1 + F2 * s2 + ... Fn * sn)")])])]),i._v(" "),v("li",[v("p",[i._v("按照上述公式计算所有元素的最终宽度，如果小于min-content，那么他的的flex-basis置为min-content，即最终宽度为min-content")])]),i._v(" "),v("li",[v("p",[i._v("根据第3步的结果重新计算自由空间")])]),i._v(" "),v("li",[v("p",[i._v("重复第3,4步的计算,直到计算出所有元素的最终宽度")])]),i._v(" "),v("li",[v("p",[i._v("根据第5步的结果，如果最终还是存在负向自由空间，这时候需要看一下是否存在min-width或者overflow:hidden等影响计算的属性的元素，此时继续套用上述计算自由空间和最终宽度的公式，继续计算，直至填满父容器或者所有元素达到各自的最小宽度（min-content、min-width、0px）")])]),i._v(" "),v("li",[v("p",[i._v("根据第6步的结果，假如所有的元素步如果不允许换行，最终如果总宽度等于父容器的宽度，则刚好填满，如果最终总宽度大于父容器的高度，则此时溢出，此时计算结束")])]),i._v(" "),v("li",[v("p",[i._v("根据第6步的结果，如果允许换行的话，具体换行策略为，所有元素的初始宽度均为各自的最小值，一个元素一个元素排列，直到某一个元素的加入，导致溢出了，这时候这个元素换到下一行，此时上一行的元素，则重新按照第3、4、5、6步计算各自的最终宽度")])]),i._v(" "),v("li",[v("p",[i._v("重复第8步，直至所有元素排列完成，并根据第3、4、5、6步计算出每一行的元素排列分布，则计算结束")])])])])])]),i._v(" "),v("li",[v("p",[i._v("根据align-itmes，align-contentg，align-iself等几个属性，确定上述元素在交叉轴上的分布")])])])],1)}),[],!1,null,"1a270b94",null);v.default=l.exports}}]);