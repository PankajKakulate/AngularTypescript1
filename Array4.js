var Marks = [11, 21, 51, 101, 111];
console.log("Number of element in the array are : " + Marks.length);
console.log(Marks[0]);
console.log(Marks[1]);
console.log(Marks[2]);
console.log(Marks[3]);
console.log(Marks[4]);
console.log();
for (var iCnt = 0; iCnt < Marks.length; iCnt++) {
    console.log(Marks[iCnt]);
}
var iCnt = 0;
console.log();
while (iCnt < Marks.length) {
    console.log(Marks[iCnt]);
    iCnt++;
}
iCnt = 0;
console.log();
do {
    console.log(Marks[iCnt]);
    iCnt++;
} while (iCnt < Marks.length);
