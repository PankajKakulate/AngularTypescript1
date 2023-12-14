class  Arithmatic {
   // default access specifier is public
    public No1 : number;
    public No2 : number;

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

var obje1 = new Arithmatic(10,11);
var obje2 = new Arithmatic(20,21);

console.log("Addition is : "+obje1.Addition());
console.log("Substraction is : "+obje1.Subtraction());
console.log("Addition is : "+obje2.Addition());
console.log("Substraction is : "+obje2.Subtraction());

