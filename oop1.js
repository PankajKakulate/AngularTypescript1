function Addition(No1, No2) {
    var ans = 0;
    ans = No1 + No2;
    return ans;
}
function Subtraction(No1, No2) {
    var ans = 0;
    ans = No1 - No2;
    return ans;
}
var Value1 = 11;
var Value2 = 21;
var Result = 0;
Result = Addition(Value1, Value2);
console.log("Addition is : " + Result);
Result = Subtraction(Value1, Value2);
console.log("Substration is : " + Result);
