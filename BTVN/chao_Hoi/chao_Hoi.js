function chaoHoi(event) {
    event.preventDefault();
    // đầu vào
    var viTri = document.getElementById("nguoiDung").value;
// xử lý
    if (viTri == "bố") {
        document.getElementById("bo").innerHTML;
        document.getElementById("bo").style.display = "block";
    } else if (viTri == "mẹ") {
        document.getElementById("me").innerHTML;
        document.getElementById("me").style.display = "block";
    } else if (viTri == "anh") {
        document.getElementById("anh").innerHTML;
        document.getElementById("anh").style.display = "block";
    } else if (viTri == "em") {
        document.getElementById("em").innerHTML;
        document.getElementById("em").style.display = "block";
    } else {
        alert("Xin mời nhập lại")
    }
}
