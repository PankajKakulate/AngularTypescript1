class  Arithmatic1 {
   // default access specifier is public
    private No1 : number;
    private No2 : number;

    constructor(A:number,B:number){
        
        this.No1 = A;
        this.No2 = B;
    }

    Addition():number
    {
    var ans : number=0;
    ans = this.No1 + this.No2;
    return ans;
    }

    Subtraction():number
    {
    var ans : number=0;
    ans = this.No1 - this.No2;
    return ans;
    }
    

}

var objec1 = new Arithmatic1(10,11);
var objec2 = new Arithmatic1(20,21);

console.log("Addition is : "+objec1.Addition());
console.log("Substraction is : "+objec1.Subtraction());
console.log("Addition is : "+objec2.Addition());
console.log("Substraction is : "+objec2.Subtraction());

