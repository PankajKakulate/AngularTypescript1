function DisplayPercentage(Marks:number,outOf:number):number{
    
    var per:number=0;
    per=(Marks/outOf)*100;
    return per;
}

var Percentage : number=0;
Percentage=DisplayPercentage(855,1000);
console.log(Percentage);
Percentage=DisplayPercentage(955,1000);
console.log(Percentage);
//Display("Sneha",97);

