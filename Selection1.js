function checkNumber(No) {
    if ((No % 2) == 0) {
        console.log("Even");
        return true;
    }
    else {
        console.log("odd");
        return false;
    }
}
var Value1 = 11;
var Value2 = 12;
checkNumber(Value1);
checkNumber(Value2);
