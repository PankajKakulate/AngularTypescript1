var Demo = /** @class */ (function () {
    function Demo() {
    }
    // Bahaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display Function of Demo");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
