// Function defination
function Demo() {
    var Languages = ["C", "CPP", "Java", "Typescript"];
    return Languages;
}
// Function Call
var result;
result = Demo();
var iCnt = 0;
console.log("Element of array are : ");
for (iCnt; iCnt < result.length; iCnt++) {
    console.log(result[iCnt]);
}
