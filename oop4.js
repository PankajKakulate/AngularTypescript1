var DemoFour = /** @class */ (function () {
    // Bahaviour
    // Parameterised Constructor 
    function DemoFour(A, B) {
        console.log("Inside parameterised contructor");
        this.No1 = A;
        this.No2 = B;
    }
    DemoFour.prototype.Display = function () {
        console.log("Inside Display Function of Demo");
    };
    return DemoFour;
}());
var obj1 = new DemoFour(10, 11);
var obj2 = new DemoFour(20, 21);
obj1.Display();
console.log(obj1.No1);
console.log(obj2.No1);
