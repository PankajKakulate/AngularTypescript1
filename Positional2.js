function DisplayPercentage(Marks, outOf) {
    var per = 0;
    per = (Marks / outOf) * 100;
    return per;
}
var Percentage = 0;
Percentage = DisplayPercentage(855, 1000);
console.log(Percentage);
Percentage = DisplayPercentage(955, 1000);
console.log(Percentage);
//Display("Sneha",97);
