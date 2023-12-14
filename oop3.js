var DemoONE = /** @class */ (function () {
    // Bahaviour
    function DemoONE() {
        console.log("Inside default contructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    DemoONE.prototype.Display = function () {
        console.log("Inside Display Function of Demo");
    };
    return DemoONE;
}());
var obj = new DemoONE();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
