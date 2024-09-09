function myFunction() {
    var number = parseInt(document.getElementById('nhap').value);
    var day;
    switch (number) {
        case 1:
            day = "Monday";
            document.getElementById('demo').style.color = "green";
            break;
        case 2:
            day = "Tuesday";
            document.getElementById('demo').style.color = "red";
            break;
        case 3: 
            day = "Wednesday";
            document.getElementById('demo').style.color = "yellow";
            break;
        case 4:
            day = "Thursday";
            document.getElementById('demo').style.color = "orange";
            break;
        case 5:
            day = "Friday";
            document.getElementById('demo').style.color = "violet";
            break;
        case 6:
            day = "Saturday";
            document.getElementById('demo').style.color = "pink";
            break;
        case 7:
            day = "Sunday";
            document.getElementById('demo').style.color = "aqua";
            break;
        default:
            day = "Ban da nhap sai";
            break;
    }
    document.getElementById('demo').innerHTML = day;
}