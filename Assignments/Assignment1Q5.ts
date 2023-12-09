////////////////////////////////////////////////////////////////////
// Function Name : Fibonacci
// Description   : Write a typescript program which contains one function named as Fibonacci.
//                 That function accept one number from user and print Fibonacci series till that number.
// input         : 21
// output        : 1 1 2 3 5 8 13 21
// Date          : 07/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Fibonacci(value:number):void{
    var itemp:number=0;
    var iNo1:number=1;
    var iNo2:number=1;
    if(value<0)
     value=-value;
   
    for(var iCnt:number=0;iCnt<=value;iCnt++){
        if(iCnt>2){
            if(itemp==value){
                break;
            }
            itemp=iNo1 + iNo2;
            iNo1=iNo2;
            iNo2=itemp;
            console.log(itemp);
        }
        if(iCnt==0 || iCnt==1){
            console.log(1);
        }
        

    }
}

var No:number=-21;
Fibonacci(No);

////////////////////////////////////////////////////////////////////
// Input           : 21
//                   
// Output          : 1 1 2 3 5 8 13 21  
// 
////////////////////////////////////////////////////////////////////