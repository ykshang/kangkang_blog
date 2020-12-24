var input = "2 2 3 4";
var arry = input.split(" ");
var err = false; // 判断输入是否包含大小王
for (var i = 0; i < arry.length; i++) {
    var  item = arry[i];
    if (item == "JOKER" || item == "joker") {
        err = true;
        break;
    } else if (item == "A") {
        arry[i] = "1"
    } else if (item == "J") {
        arry[i] = "11"
    } else if (item == "Q") {
        arry[i] = "12"
    } else if (item == "K") {
        arry[i] = "13"
    }
}
if (err) {
    console.log("ERROR");
} else {
    var resStr = "";
    var orderList = ['0123', "0132", "0213", "0231", "0312", "0321", '1023', "1032", "1203", "1230", "1302", "1320", "2013", "2031", "2103", "2130", "2301", "2310", "3012", "3021", "3102", "3120", "3201", "3210"];
    var operList = ["+", "-", "*", "/"];
    for (let qq = 0; qq < orderList.length; qq++) {
        var order = orderList[qq].split("");
        resStr = calc(parseInt(arry[order[0]]), parseInt(arry[order[1]]), parseInt(arry[order[2]]), parseInt(arry[order[3]]));
        if (resStr) {
            break;
        }
        
    }
    // 组装计算公式
    function calc (v1, v2, v3, v4) {
        console.log("arguments", ...arguments);
        var flg = false;
        var result = "";
        for (var x = 0; x < operList.length; x++) {
            var resultX = "";
            if (flg) {
                break;
            }
            resultX = eval(`v1${operList[x]}v2`);
            console.log(resultX);
            for (let y = 0; y < operList.length; y++) {
                if (flg) {
                    break;
                }
                var resultY = "";
                resultY = eval(`resultX${operList[y]}v3`);
                console.log(resultY);
                for (let z = 0; z < operList.length; z++) {
                    var resultZ = "";
                    resultZ = eval(`resultY${operList[z]}v4`);
                    var temp  = "";
                    if (resultZ > 24) {
                        temp = resultZ - 24;
                    } else {
                        temp = 24 - resultZ;
                    }
                    if (temp < 10E-10) {
                        console.log(resultZ);
                        result = v1 + operList[x] + v2 + operList[y] + v3 + operList[z] + v4;
                        flg = true;
                        break;
                    }
                }
            }
        }
        console.log("res: ", result);
        return result;
    }
    if (!resStr) {
        console.log("NONE");
    } else {
        console.log(resStr);
    }
}