function DisplayPercentage(Marks:number,outOf:number=1000):number{
    
    var per:number=0;
    per=(Marks/outOf)*100;
    return per;
}

var Percentage : number=0;
Percentage=DisplayPercentage(855,2000);
console.log("Percentage is "+Percentage);
Percentage=DisplayPercentage(955);
console.log("Percentage is "+Percentage);
//Display("Sneha",97);

