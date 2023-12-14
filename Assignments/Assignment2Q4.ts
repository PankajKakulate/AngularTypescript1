////////////////////////////////////////////////////////////////////
// Function Name : ChkArmstrong
// Description   : Write a typescript program which contains one arrow function name as ChkArmstrong.
//                 That function accepts one number and check wheather number is Armstrong number or not.
// input         : 153
// output        : It is Armstrong number
// Date          : 14/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
var ChkArmstrong=(No : number) : boolean => Armstrong(No);


function Armstrong(Num : number) : boolean{
    var isArmstrong : boolean = false;
    var digit : number = 0;
    var sum : number = 0;
    
    var No : number = fromFloatingPointToDecimal(Num);
    // conver default floating valur of number data  type in decimal number
    
    while(No > 0){

        digit = No % 10;
        // to make digit seperate from 153 to 3, 5 and 1

        sum = sum + (digit * digit * digit);
        // to make sum of seprate digit cube in sum
        
        No = fromFloatingPointToDecimal(No / 10); // because all number data type in typescript are float internally.
        // to replace number with one last digit removed upto number is not zero in while 
    }
    if(sum == Num)
    isArmstrong = true;
    

    return isArmstrong;
}

function fromFloatingPointToDecimal(digit : number) : number {
    return digit >> 0;
  }


if(ChkArmstrong(15)){
    console.log("It is an Armstrong number");
}else{
    console.log("It is not an Armstrong number");
}
////////////////////////////////////////////////////////////////////
// Input           : 153
//                   
// Output          : It is Armstrong number  
// 
////////////////////////////////////////////////////////////////////
