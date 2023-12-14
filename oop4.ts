class DemoFour{
    // Characteristics 
    No1 : number;
    No2 : number;
    // Bahaviour

    // Parameterised Constructor 
    constructor(A:number,B:number){
        console.log("Inside parameterised contructor");
        this.No1 = A;
        this.No2 = B;
    }
    
    Display(){
        console.log("Inside Display Function of Demo");

    }
}

var obj1 = new DemoFour(10,11);
var obj2 = new DemoFour(20,21);
obj1.Display();
console.log(obj1.No1);
console.log(obj2.No1);
