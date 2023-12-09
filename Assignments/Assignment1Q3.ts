////////////////////////////////////////////////////////////////////
// Function Name : DisplayFactors
// Description   : Write a typescript program which contains one function named as DisplayFactors.
//                 That function should accept one number and display factors of that number.
// input         : 20
// output        : 1 2 4 5 10
// Date          : 07/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function DisplayFactors(Value:number):void{
    console.log(1);
    for(var iCnt : number = 1; iCnt <= (Value / 2); iCnt++){
        if((iCnt % 2) == 0){
            console.log(iCnt);
        }
    }
}

var value:number=20;
DisplayFactors(value);
////////////////////////////////////////////////////////////////////
// Input           : 
//                   
// Output          :   
// Time Complexity :
////////////////////////////////////////////////////////////////////