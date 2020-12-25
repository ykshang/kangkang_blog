
var lines = ["1313", "63464", "5354353"];
for (var i = 0; i < lines.length; i++) {
    for (var j = i; j < lines.length; j++) {
        var temp = "";
        if (lines[i] < lines[j]) {
            temp = lines[i];
            lines[i] = lines[j];
            lines[j] = temp;
        }
    }    
}
console.log(lines.join(""));