////////////////////////////////////////////////////////////////////
// Function Name : Maximum
// Description   : Write a typescrip program which contains one function named as Maximum. 
//                 That function accepts three parameters and it should returns largest value from three input parameters.
// input         : 23 89 6
// output        : Maximum number is 89
// Date          : 07/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Maximum(Value1, Value2, Value3) {
    var maximumNumer = 0;
    if (Value1 > maximumNumer) {
        maximumNumer = Value1;
    }
    if (Value2 > maximumNumer) {
        maximumNumer = Value2;
    }
    if (Value3 > maximumNumer) {
        maximumNumer = Value3;
    }
    return maximumNumer;
}
var No1 = 23, No2 = 89, No3 = 6;
var result = 0;
result = Maximum(No1, No2, No3);
console.log("Maximum number is : " + result);
function MaximumFromArray(Value1) {
    var maximumNumer = 0;
    for (var iCnt = 0; iCnt < Value1.length; iCnt++) {
        if (Value1[iCnt] > maximumNumer) {
            maximumNumer = Value1[iCnt];
        }
    }
    return maximumNumer;
}
var NumberArray = [23, 89, 6];
result = 0;
result = MaximumFromArray(NumberArray);
console.log("Maximum number is : " + result);
////////////////////////////////////////////////////////////////////
// Input           : 23 89 6
//                   
// Output          : Maximum number is : 89  
// 
////////////////////////////////////////////////////////////////////
