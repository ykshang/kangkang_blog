var line = "J Q K 2";
var arry = input.split(" ");
var err = false; // 判断输入是否包含大小王
var resStr = "";
var arryBak = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
};
for (var i = 0; i < arry.length; i++) {
    var  item = arry[i];
    if (item == "JOKER" || item == "joker") {
        err = true;
        break;
    }
}
if (err) {
    console.log("ERROR");
} else {
    var orderList = ['0123', "0132", "0213", "0231", "0312", "0321", '1023', "1032", "1203", "1230", "1302", "1320", "2013", "2031", "2103", "2130", "2301", "2310", "3012", "3021", "3102", "3120", "3201", "3210"];
    var operList = ["+", "-", "*", "/"];
    for (let qq = 0; qq < orderList.length; qq++) {
        var order = orderList[qq].split("");
        resStr = calc(arry[order[0]], arry[order[1]], arry[order[2]], arry[order[3]]);
        if (resStr) {
            break;
        }
        
    }
    // 组装计算公式
    function calc (v1, v2, v3, v4) {
        var flg = false;
        var result = "";
        for (var x = 0; x < operList.length; x++) {
            var resultX = "";
            if (flg) {
                break;
            }
            resultX = eval(arryBak[v1] + operList[x]+ arryBak[v2]);
            for (let y = 0; y < operList.length; y++) {
                if (flg) {
                    break;
                }
                var resultY = "";
                resultY = eval(`resultX` + operList[y] + arryBak[v3]);
                for (let z = 0; z < operList.length; z++) {
                    var resultZ = "";
                    resultZ = eval(`resultY` + operList[z] + arryBak[v4]);
                    var temp  = "";
                    if (resultZ > 24) {
                        temp = resultZ - 24;
                    } else {
                        temp = 24 - resultZ;
                    }
                    if (temp < 10E-5) {
                        result = v1 + operList[x] + v2 + operList[y] + v3 + operList[z] + v4;
                        flg = true;
                        break;
                    }
                }
            }
        }
        return result;
    }
    if (!resStr) {
        console.log("NONE");
    } else {
        console.log(resStr);
    }
}