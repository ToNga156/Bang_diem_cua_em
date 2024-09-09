
        var a = "Hello";
        var b = "World";
        var c = a + " " + b;
        //alert(c); => hiển thị một thanh thông báo với nội dung 'Hello World'
        //document.write(c);=>sử dụng phương thức write của đối tượng document để viết nội dung của c là Hello World trực tiếp vào trang web
        document.getElementById("kq").innerHTML=c; //tìm tới đối tượng có id là 'kq' và thay thế nội dung của đối tượng bằng nội dung của c
