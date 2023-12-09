// Function defination
function Demo():string[]{// Function prototype
    
    var Languages : string[]=["C","CPP","Java","Typescript"];
    return Languages; 
}
// Function Call
var result : string[] ;
result= Demo() ;
var iCnt : number = 0;
console.log("Element of array are : ")
for(iCnt;iCnt<result.length;iCnt++){
    console.log(result[iCnt]);
}