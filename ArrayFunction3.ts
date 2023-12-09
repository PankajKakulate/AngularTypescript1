// Function defination
function Demo():number[]{
    
    return new Array(10,20,30,40);
}
// Function Call
var result : number[] = Demo() ;
var iCnt : number = 0;
console.log("Element of array are : ")
for(iCnt;iCnt<result.length;iCnt++){
    console.log(result[iCnt]);
}