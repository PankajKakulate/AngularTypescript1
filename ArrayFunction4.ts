// Function defination
function Demo():number[]{// Function prototype
    
    var Marks : number[]=[10,20,30,40];
    return Marks; 
}
// Function Call
var result : number[] ;
result= Demo() ;
var iCnt : number = 0;
console.log("Element of array are : ")
for(iCnt;iCnt<result.length;iCnt++){
    console.log(result[iCnt]);
}