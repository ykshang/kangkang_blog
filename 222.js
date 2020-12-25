line = "16";
var lines = line.split(" ");
var total = parseInt(lines[0]);
var count = 0;
// 看看更接近那个2的幂数
var min = Math.floor(Math.log(total) / Math.log(2));
var max = Math.ceil(Math.log(total) / Math.log(2));
if (min == max) {
    print(min);
} else {
    var pingjunshu = (Math.pow(2, min) + Math.pow(2, max)) / 2;
    if (total > pingjunshu) {
        while (total > 1) {
            if (total % 2 != 0) {
                total = total + 1;
                count = count + 1;
            } else {
                total = total / 2;
                count = count + 1;
            }
        }
    } else {
        while (total > 1) {
            if (total % 2 != 0) {
                total = total - 1;
                count = count + 1;
            } else {
                total = total / 2;
                count = count + 1;
            }
        }
    }
    print(count);
}


