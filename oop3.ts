class DemoThree{
    // Characteristics 
    No1 : number;
    No2 : number;
    // Bahaviour

    // Default Constructor 
    constructor(){
        console.log("Inside default contructor");
        this.No1=0;
        this.No2=0;
    }
    Display(){
        console.log("Inside Display Function of Demo");

    }
}

var obj = new DemoThree();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
