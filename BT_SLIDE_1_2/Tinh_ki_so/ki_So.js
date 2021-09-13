function kiSo(event) {
    event.preventDefault()
    var n = document.getElementById("soNhap").value;
    n = parseInt(n);

    var hangTram = Math.floor(n / 100);
    var hangChuc = Math.floor((n % 100) / 10);
    var hangDonVi = n % 10;
    var sum = hangTram + hangChuc + hangDonVi;

    

    document.getElementById("kQ").innerHTML = sum;

}