var num = 10; //escopo global
document.write(num + "<br>");
if (num == 10) {
  let num = 5; //escopo local
  document.write(num + "<br>");
}

document.write(num + "<br>");