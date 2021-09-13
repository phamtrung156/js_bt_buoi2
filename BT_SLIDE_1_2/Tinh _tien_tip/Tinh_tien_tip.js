function tienTip(event){
    event.preventDefault();
    // đầu vào
    var tongTien = document.getElementById("txttongTien").value 
    var phanTram = document.getElementById("txtphanTram").value 
    var soNguoi = document.getElementById("txtsoNguoi").value 
// xử lý
    var tienTip = (tongTien*phanTram )/100 / soNguoi
// đầu ra
    document.getElementById("Amount").innerHTML = tienTip;
    document.getElementById("showTip").style.display = "block";
}