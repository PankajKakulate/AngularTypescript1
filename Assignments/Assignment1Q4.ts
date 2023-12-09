////////////////////////////////////////////////////////////////////
// Function Name : ChkPrime
// Description   : Write a typescript program which contains one function named as ChkPrime.
//                 That function should accept one number and it should return true if the given number is prime and otherwise return false.
// input         : 11
// output        : It is prime number
// Date          : 07/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function ChkPrime(value:number):boolean{
    var isPrime:boolean=false;
    for(var iCnt:number=2;iCnt<value;iCnt++){
        if( (value % iCnt) == 0 ){
             isPrime=false;
             break;   
        }else{
            isPrime=true;
        }
    }
    return isPrime;
}

var No:number=11;
if(ChkPrime(No)){
    console.log("It is prime number")
}else{
    console.log("It is not prime number")
}
////////////////////////////////////////////////////////////////////
// Input           : 11
//                   
// Output          : It is prime number 
// 
////////////////////////////////////////////////////////////////////