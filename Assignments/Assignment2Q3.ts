////////////////////////////////////////////////////////////////////
// Function Name : Maximum
// Description   : Write a typescript program which contains one function named as Maximum.
//                 That fuction accepts array of numbers and returns the second largest number from array.
// input         : 23 89 6 29 56 45 77 32
// output        : Second Maximum number is : 77
// Date          : 14/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Maximum(...Arr :number[]):number{
 
   var  maxTemp : number=0
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        
        for (var jCnt = 0; jCnt < iCnt; jCnt++) {
           
            if(Arr[iCnt] > Arr[jCnt]){
                maxTemp = Arr[jCnt];
                Arr[jCnt] = Arr[iCnt];
                Arr[iCnt] = maxTemp;
            }
        }
    }
    
   return Arr[1];
}

var result : number = 0;
result = Maximum(23,89,6,29,56,45,77,32);
console.log("Second Maximum number is : "+result);

////////////////////////////////////////////////////////////////////
// Input           : 23 89 6 29 56 45 77 32
//                   
// Output          : Second Maximum number is : 77  
// 
////////////////////////////////////////////////////////////////////
