let num, cont;

num = 0;
while (num < 10) {
  document.write("ROBSON <br>")
    num++;
}

document.write("<hr>");

num = 10;
while (num--) {
  document.write("Robson <br>");
}

document.write("<hr>");

num = true;
cont = 0;
while (num) {
  document.write("ROBSON <br>");
  {
    cont++;
    if (cont > 9){
      num = false;
    }
  }
}