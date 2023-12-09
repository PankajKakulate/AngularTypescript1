function checkNumber(No:number):boolean
{
    if((No%2)==0){
       
        return true;
    }else{
        
return false;
    }
}


var Value1:number=11;
var result:boolean=false;
result=checkNumber(Value1);
if(result==true){
    console.log("it is even Number")
}else{
    console.log("it is odd Number")
}
