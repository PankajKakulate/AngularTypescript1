function Display(Numo:number,Value ? : number):void{

    console.log("NO : "+ Numo +" value "+Value);
}

function DisplayN(Numo:number,Value ? : number):void{

    console.log("NO : "+ Numo );
    if(Value!=undefined){
        console.log(" Value "+  Value);
    }
}
// ? mean optional arguments 
Display(11,21);
Display(11);
DisplayN(11);