function chanLe() {
    // đầu vào
    var a = document.getElementById("num_1").value;

    var b = document.getElementById("num_2").value;

    var c = document.getElementById("num_3").value;

    var chan = 0;
    var le = 0;

    //   xử lý
    if (a % 2 == 0) {
        chan = ++chan;
    } else {
        le = ++le;
    }
    if (b % 2 == 0) {
        chan = ++chan;
    } else {
        le = ++le;
    }
    if (c % 2 == 0) {
        chan = ++chan;
    } else {
        le = ++le;
    }
    // đầu ra
    document.getElementById("soChan").innerHTML = chan;
    document.getElementById("soLe").innerHTML = le;

}