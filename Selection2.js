function checkNumber(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var Value1 = 11;
var Value2 = 12;
if (checkNumber(Value1)) {
    console.log("it is even Number");
}
else {
    console.log("it is odd Number");
}
