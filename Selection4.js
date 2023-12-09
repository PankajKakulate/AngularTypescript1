function displayExamTime(div) {
    switch (div) {
        case "A":
            {
                console.log("Exam Time 11 am on 3/12/2023");
                break;
            }
        case "B":
            {
                console.log("Exam Time 09 am on 3/12/2023");
                break;
            }
        case "C":
            {
                console.log("Exam Time 08 am on 3/12/2023");
                break;
            }
        case "D":
            {
                console.log("Exam Time 10 am on 3/12/2023");
                break;
            }
        case "E":
            {
                console.log("Exam Time 07 am on 3/12/2023");
                break;
            }
        default:
            {
                console.log("Wrong Input pleae enter value A B C D E  ");
                break;
            }
    }
}
var Value = "kC";
displayExamTime(Value);
