let cor1, cor2, cor3, cor4;

cor1 = "preto";
cor2 = "branco";
cor3 = "vermelho";
cor4 = "azul";

// let cor = new Array();
let cor = [];

cor.push("preto");
cor.push("branco");
cor.push("vermelho");
cor.push("verde");
cor.push("azul");
document.write(cor[0] + "<br><br>");

cor[0] = "preto";
cor[1] = "branco";
cor[2] = "vermelho";
cor[3] = "verde";
cor[4] = "azul";

document.write(cor[1]+"<br><br>");

// var itens = ["faca", "Pederneira", "Corda", "Lanterna", "Luvas", "Chave de fenda", "Arama"];


var mochila = [];

// mochila.push(itens[2]);
mochila.push("Faca");
mochila.push("Corda");
mochila.push("Pederneira");
mochila.push("Chave");
mochila.push("Lanterna");
mochila.push("Pedra");

mochila.pop();

mochila.shift();

mochila.splice(1,1);

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");


