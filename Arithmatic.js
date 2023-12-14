var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        var ans = 0;
        ans = this.No1 + this.No2;
        return ans;
    };
    Arithmatic.prototype.Subtraction = function () {
        var ans = 0;
        ans = this.No1 - this.No2;
        return ans;
    };
    return Arithmatic;
}());
var obje1 = new Arithmatic(10, 11);
var obje2 = new Arithmatic(20, 21);
console.log("Addition is : " + obje1.Addition());
console.log("Substraction is : " + obje1.Subtraction());
console.log("Addition is : " + obje2.Addition());
console.log("Substraction is : " + obje2.Subtraction());
