function DisplayPercentage(Marks, outOf) {
    if (outOf === void 0) { outOf = 1000; }
    var per = 0;
    per = (Marks / outOf) * 100;
    return per;
}
var Percentage = 0;
Percentage = DisplayPercentage(855, 2000);
console.log(Percentage);
Percentage = DisplayPercentage(955);
console.log(Percentage);
//Display("Sneha",97);
