// Lamda fuction, anonymus function, fat arrow function 
function Addition(No1:number, No2 : number):number{
    var ans : number=0;
    ans= No1 + No2;
    return ans;
}


var result : number = 0;
result = Addition(10,11);
console.log("Addition is : "+result);

// in lamda function we cannot write lenghty code
var Fun = (No1 : number,No2 : number)/* parameter */ => /* lamda fuction operator */ No1 + No2 /* body of function */;

result = Fun(21,22);
console.log("Addition is : "+result);

