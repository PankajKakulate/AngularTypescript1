var Marks : number[]=[11,21,51,101,111];

console.log("Number of element in the array are : "+Marks.length);



console.log("Array display using for loop");
for(var iCnt:number=0; iCnt<Marks.length;iCnt++){
    console.log(Marks[iCnt]);
}
var iCnt : number=0;
console.log("Array display using while loop");
while(iCnt<Marks.length){
    console.log(Marks[iCnt]);
    iCnt++;
}
iCnt=0;
console.log("Array display using do-while loop");
do{
    console.log(Marks[iCnt]);
    iCnt++;
}while(iCnt<Marks.length);