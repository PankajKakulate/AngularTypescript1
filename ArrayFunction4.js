// Function defination
function Demo() {
    var Marks = [10, 20, 30, 40];
    return Marks;
}
// Function Call
var result = Demo();
var iCnt = 0;
console.log("Element of array are : ");
for (iCnt; iCnt < result.length; iCnt++) {
    console.log(result[iCnt]);
}
