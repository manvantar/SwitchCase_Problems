let number = Math.floor((Math.random() * 7));
console.log(number);
let day = "";
if (number >= 0 && number < 7) {
    switch (number) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        default:
            day = "Saturday";
    }
    console.log(day);
}