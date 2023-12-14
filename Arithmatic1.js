var Arithmatic1 = /** @class */ (function () {
    function Arithmatic1(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic1.prototype.Addition = function () {
        var ans = 0;
        ans = this.No1 + this.No2;
        return ans;
    };
    Arithmatic1.prototype.Subtraction = function () {
        var ans = 0;
        ans = this.No1 - this.No2;
        return ans;
    };
    return Arithmatic1;
}());
var obje1 = new Arithmatic1(10, 11);
var obje2 = new Arithmatic1(20, 21);
console.log(obje1.No1);
console.log("Addition is : " + obje1.Addition());
console.log("Substraction is : " + obje1.Subtraction());
console.log("Addition is : " + obje2.Addition());
console.log("Substraction is : " + obje2.Subtraction());
