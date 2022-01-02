let canal = "cfb cursos";
let curso = "curso de programação web";
const separador = " - ";
const quebra = "\n"
const info ="Entre com seu nome"

let nome = prompt("Digite seu nome", info);
alert(nome);

let nome = prompt ("Digite seu nome: ", "Nome aqui")
let res = confirm(nome +","+ " Deseja continuar?");
alert(res);

let v1, v2, tx1, tx2;

v1 = 10;
v2 = 10;
tx1 = "CFB - Cursos";
tx2 = "Curso de JavaScript";

if (v1 != v2) {
  document.write(tx1);
  alert(tx1);
} else {
  document.write(tx2);
  alert(tx2);
}

let pontos = 40;
let energia = 50;
// vitoria --> >=30 && <=40 || >=70 && <=80

if ( ((pontos>=30)&&(pontos<=40))&&(energia>=40) || ((pontos>=70) && (pontos<=80)&&(energia>=40)) ){
  document.write("Ganhou");
} else {
  document.write("Perdeu");
}