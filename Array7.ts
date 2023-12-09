// Function defination
function displayArraySum(Arr:number[]):number{
    var iCnt:number=0;
    var iSum:number=0;
    for(iCnt=0;iCnt<Arr.length;iCnt++){
        iSum=iSum+Arr[iCnt]
    }
    return iSum;
}

var Marks : number[]=[11,21,51,101,111];

// Function Call
var result : number = 0;
result = displayArraySum(Marks);
console.log("Addition is : "+result);
