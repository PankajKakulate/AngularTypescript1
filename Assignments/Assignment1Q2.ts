////////////////////////////////////////////////////////////////////
// Function Name : Area
// Description   : Write a typescript program which contains one function named as Area.
//                 That function should calculate area of circle. Accept value of radius from
//                 user and return its area. Default valur of PI should be 3.14 if it is not provided by the caller.
// input         : 5
// output        : Area of circle is : 78.5
// Date          : 07/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function Area(radius:number,PI:number=3.14):number{
    var areaResult:number=0;
    areaResult=PI*(radius*radius);
    return areaResult;
}

var result:number=0;
var radiusValue:number=5;
result=Area(radiusValue);
console.log("Area of circle is : "+result);

////////////////////////////////////////////////////////////////////
// Input           : 5
//                   ṭ
// Output          : Area of circle is : 78.5  
//
////////////////////////////////////////////////////////////////////