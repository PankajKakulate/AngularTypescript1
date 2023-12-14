////////////////////////////////////////////////////////////////////
// Function Name : MaximumNumber
// Description   : Write a typescript program which contains one function named as Maximum.
//                 That fuction accepts array of numbers and returns the largest number from array.
// input         : 23 89 6 29 56 45 77 32
// output        : Maximum number is : 89
// Date          : 14/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Maximum() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Max = 0;
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Max) {
            Max = Arr[iCnt];
        }
    }
    return Max;
}
var result = 0;
result = Maximum(23, 89, 6, 29, 56, 45, 77, 32);
console.log("Maximum number is : " + result);
////////////////////////////////////////////////////////////////////
// Input           : 23 89 6 29 56 45 77 32
//                   
// Output          : Maximum number is : 89  
// 
////////////////////////////////////////////////////////////////////
