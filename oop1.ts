function Addition(No1:number,No2:number):number
{
    var ans : number=0;
    ans = No1 + No2;
    return ans;
}

function Subtraction(No1:number,No2:number):number
{
    var ans : number=0;
    ans = No1 - No2;
    return ans;
}

var Value1 : number = 11;
var Value2 : number = 21;
var Result : number = 0;

Result = Addition(Value1,Value2);
console.log("Addition is : "+Result);

Result = Subtraction(Value1,Value2);
console.log("Substration is : "+Result);
