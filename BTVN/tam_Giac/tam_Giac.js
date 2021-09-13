function tamGiac() {
    // đầu vào
    var canh1 = document.getElementById("canh_1").value;
    canh1 = parseInt(canh1)
    var canh2 = document.getElementById("canh_2").value;
    canh2 = parseInt(canh2)
    var canh3 = document.getElementById("canh_3").value;
    canh3 = parseInt(canh3)
    var n = 2
// xử lý & đầu ra

if( canh1 == canh2 && canh2  == canh3){
    document.getElementById("deu").innerHTML
    document.getElementById("deu").style.display = "inline"
}else if( canh1 == canh2 || canh2 == canh3 || canh1 == canh3){
    document.getElementById("can").innerHTML
    document.getElementById("can").style.display = "inline"
}else if( canh1**n == canh2**n + canh3**n || canh2**n == canh1**n + canh3**n || canh3**n == canh1**n + canh2**n){
    document.getElementById("vuong").innerHTML
    document.getElementById("vuong").style.display = "inline"
}else{
    document.getElementById("thuong").innerHTML
    document.getElementById("thuong").style.display = "inline"
}





}


