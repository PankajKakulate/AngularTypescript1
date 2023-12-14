////////////////////////////////////////////////////////////////////
// Function Name : Summation
// Description   : Write a typescript program which contains one function named as Summation.
//                 That fuction accepts array of numbers and returns the summation of each number from array.
// input         : 23 6 7 4 5 7
// output        : Addition is : 52
// Date          : 14/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Summation(...Arr :number[]):number{
   var  Sum : number=0

    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
       Sum = Sum + Arr[iCnt];
    }
   return Sum;
}

var result : number = 0;
result = Summation(23,6,7,4,5,7);
console.log("Addition is  : "+result);

////////////////////////////////////////////////////////////////////
// Input           : 23 6 7 4 5 7
//                   
// Output          : Addition is : 52 
// 
////////////////////////////////////////////////////////////////////
