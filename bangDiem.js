function myFunction1() {
    var diemSemester1 = parseFloat(document.getElementById('semester1').value);
    var diemSemester2 = parseFloat(document.getElementById('semester2').value);
    var year = document.getElementById('Year');
    var value = parseInt(year.options[year.selectedIndex].value);

    var diemTB;
    var kqxeploai;

    if (value == 1){
        diemTB = (diemSemester1 + diemSemester2)/2;
    } else if (year == 2) {
        diemTB = (diemSemester1 + diemSemester2*2)/3;
    } else {
        diemTB = (diemSemester1 + diemSemester2*3)/4;
    }
    document.getElementById('diem').value = diemTB;

    if (diemTB >= 9) {
        kqxeploai = "Hoc sinh xuat sac";
    } else if (diemTB >= 8){
        kqxeploai = "Hoc sinh gioi";
    } else if (diemTB >= 7){
        kqxeploai = "Hoc sinh kha";
    } else if (diemTB >= 6){
        kqxeploai = "Hoc sinh trung binh";
    } else {
        kqxeploai = "Hoc sinh yeu";
    }
    document.getElementById('diem').innerHTML = kqxeploai;
}

function myFunction2() {
    document.getElementById('semester1').value="";
    document.getElementById('semester2').value="";
}