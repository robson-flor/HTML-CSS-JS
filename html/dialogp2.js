/* CÓDIGO PARA O  DIALOG */

function fecharDialog1() {
  document.getElementById("btn_dialog").innerHTML = "Abrir";
  document.getElementById("d1").removeAttribute("open");
}
function abrirDialog1() {
  document.getElementById("btn_dialog").innerHTML = "Fechar";
  document.getElementById("d1").setAttribute("open", "");
}
function controlaDialog(msg, titulo) {
  var obj = document.getElementById("d1");
  if (document.getElementById("d1").open) {
    fecharDialog1();
  } else {
    abrirDialog1();
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("msg1").innerHTML = msg;
  }
}
