// 本题为考试多行输入输出规范示例，无需提交，不计分。
var hotpot = []; //火锅
var orderList = []; // 成熟顺序
// 先处理火锅食材顺序和成熟时间顺序
while (line = readline()) {
    hotpot.push(line);
    var lines = line.split(' ');
    // 成熟时间
    var cai = i + 1 + parseInt(lines[1]);
    orderList.push(cai);
}
for(var i = 0;i < n; i++){

}
var count = 0; // 吃到的菜
// 开始往火锅里加菜

for (var j = 0; j < hotpot.length; j++) {
    // 寻找已经熟的菜
    var shucai = shu(j);
    
}
function shu(time) {
    var list = [];
    for (var k = 0; k < time; k++) {
        if (parseInt(time === orderList[k])) {
            list.push(K);
        }
        
    }
    return list;
}