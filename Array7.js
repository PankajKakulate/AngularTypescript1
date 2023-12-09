// Function defination
function displayArraySum(Arr) {
    var iCnt = 0;
    var iSum = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;
}
var Marks = [11, 21, 51, 101, 111];
// Function Call
var result = 0;
result = displayArraySum(Marks);
console.log("Addition is : " + result);
