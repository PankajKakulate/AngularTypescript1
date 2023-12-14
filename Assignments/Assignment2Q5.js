////////////////////////////////////////////////////////////////////
// Function Name : ChkString
// Description   : Write a typescript program which contains one function names as ChkString.
//                 That function accept one string and check whether that string contains "Marvellous" word or not.
// input         : "Pune Kothrud Marvellous Infosystems"
// output        : String contains Marvellous in it.
// Date          : 14/12/2023
// Author        : Pankaj Keda Kakulate
////////////////////////////////////////////////////////////////////
function ChkString(statement) {
    var isContains = false;
    var str = statement.split(" ");
    for (var iCnt = 0; iCnt < str.length; iCnt++) {
        if (("Marvellous") == str[iCnt]) {
            isContains = true;
            break;
        }
    }
    return isContains;
}
if (ChkString("Pune Kothrud Marvellous Infosystems")) {
    console.log("String contains Marvellous in it.");
}
else {
    console.log("String NOT contains Marvellous in it.");
}
////////////////////////////////////////////////////////////////////
// Input           : "Pune Kothrud Marvellous Infosystems"
//                   
// Output          : String contains Marvellous in it.  
// 
////////////////////////////////////////////////////////////////////
