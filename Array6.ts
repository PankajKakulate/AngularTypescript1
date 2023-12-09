// Function defination
function displayArray(Arr:number[]):void{
    var iCnt:number=0;
    console.log("Element of array are : ");
    for(iCnt=0;iCnt<Arr.length;iCnt++){
        console.log(Arr[iCnt]);
    }
}

var Marks : number[]=[11,21,51,101,111];

// Function Call
displayArray(Marks);