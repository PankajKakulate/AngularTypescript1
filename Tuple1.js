// Tuple in Typescript 
var Arr = [10, 20];
var Data = [99, "Python", 90.67, true, Arr];
console.log(typeof Data);
console.log(typeof Arr);
var iCnt = 0;
console.log("Number of element in tuple are: " + Data.length);
for (iCnt = 0; iCnt < Data.length; iCnt++) {
    console.log(Data[iCnt]);
}
function arrayReturn() {
    return Data;
}
var result;
result = arrayReturn();
