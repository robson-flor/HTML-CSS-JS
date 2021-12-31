function trocaBanner() {
  var num = Math.floor(Math.random()*3);
  var imgs = ['b1.jpg','b2.jpg','b3.jpg'];
  document.getElementById("banner").src = imgs[num];
}
function iniciar() {
  trocaBanner(); 
}
window.addEventListener("load", iniciar)