////////////////////////////////////////////////////////////////////
// Function Name : Maximum
// Description   : Write a typescrip program which contains one function named as Maximum. 
//                 That function accepts three parameters and it should returns largest value from three input parameters.
// input         : 23 89 6
// output        : Maximum number is 89
// Date          : 07/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Maximum(Value1:number,Value2:number,Value3:number):number{
    var maximumNumer:number=0;
    if(Value1>maximumNumer){
        maximumNumer=Value1;
    }
    if(Value2>maximumNumer){
        maximumNumer=Value2;
    }
    if(Value3>maximumNumer){
        maximumNumer=Value3;
    }
    return maximumNumer;
}

var No1:number=23,No2:number=89,No3:number=6;
var result:number=0;
result=Maximum(No1,No2,No3);
console.log("Maximum number is : "+result);


function MaximumFromArray(Value1:Array<number>):number{
    var maximumNumer:number=0;
    for(var iCnt:number=0;iCnt<Value1.length;iCnt++){
        if(Value1[iCnt]>maximumNumer){
            maximumNumer=Value1[iCnt];
        }

    }
    return maximumNumer;
}
let NumberArray:Array<number>=[23,89,6];
result=0;
result=MaximumFromArray(NumberArray);
console.log("Maximum number is : "+result);

////////////////////////////////////////////////////////////////////
// Input           : 23 89 6
//                   
// Output          : Maximum number is : 89  
// 
////////////////////////////////////////////////////////////////////