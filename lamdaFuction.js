// Lamda fuction, anonymus function, fat arrow function 
function Addition(No1, No2) {
    var ans = 0;
    ans = No1 + No2;
    return ans;
}
var result = 0;
result = Addition(10, 11);
console.log("Addition is : " + result);
var Fun = function (No1, No2) { return No1 + No2; };
result = Fun(21, 22);
console.log("Addition is : " + result);
