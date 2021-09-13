function ascending() {
  //  đầu vào
  var a = document.getElementById("num_1").value;
  a = parseInt(a);
  var b = document.getElementById("num_2").value;
  b = parseInt(b);
  var c = document.getElementById("num_3").value;
  c = parseInt(c);
  var n;
  // xử lý
  if (a > b) {
    n = a
    a = b;
    b = n;
  } if (a > c) {
    n = a
    a = c;
    c = n;

  } if (b > c) {
    n = b
    b = c
    c = n
  }
  // đâu ra

  document.getElementById("tangDan").innerHTML = a;
  document.getElementById("tangDan1").innerHTML = b;
  document.getElementById("tangDan2").innerHTML = c;





}

