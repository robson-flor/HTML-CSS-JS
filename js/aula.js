// let nome = 'Rafael'
// let idade = 25;
// let estaAprovado = true;
// let sobrenome = undefined;
// let corSelecionado = null;

// let pessoa = {
//   nome: 'Robson',
//   idade: 25,
//   estaAprovado: true,
//   sobrenome: 'de Souza'
// };
// console.log(pessoa);

// let cachorro = {
//   nome: 'Priscila',
//   idade: 7,
//   fofo: true,
//   sobrenome: 'pricilete'
// };
// console.log(cachorro);

// let gato = {
//   nome: 'Milk',
//   idade: 1,
//   chato: true,
//   sobrenome: 'chatonildo'
// };
// console.log(gato)

// Arrays

// let familia = [26, 45, 50, 17];

// let nomeDoColega = ['Igor', '31', 'Rio de Janeiro'];

// let corSite = "azul";
// function resetaCor(cor,tonalidade) {
//   corSite = cor + tonalidade;
// };

// console.log(corSite);
// resetaCor("vermelho", " escuro");
// console.log(corSite);

// let estado = "rj"
// function resetaEstado(Estado, Municipio) {
//   resetaEstado = Estado + ' ' + Municipio;
// };

// console.log(estado);
// resetaEstado("BA", "Jacobina")
// console.log(resetaEstado)

// let salario = 100;

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

// let idade = 20;

// console.log(++idade);

// console.log(--idade);

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log('pode aplicar: ', podeAplicar);

// //Operador NOT (!)
// let candidatoRecusado = !podeAplicar;

// console.log('candidato recusado',candidatoRecusado);

//trocando valores das variaveis
// let a = 'vermelho';
// let b = 'azul'

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

//IF ELSE
//Se a hora estiver entre 06:00 até 12Ç00 : Bom dia!
//Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa noite!

// let hora = 22;
// if (hora > 6 && hora < 12) {
//   console.log("bom dia");
// }
// else if (hora > 12 && hora < 18) {
//   console.log("boa tarde")
// }
// else {
//   console.log("boa noite")
// }

// SWITCH CASE

// let permissao;//usuario comum, gerente, diretor

// permissao = 'diretor'
// switch (permissao) {
//   case "comum":
//     console.log('usuario comum');
//     break;

//   case 'gerente':
//     console.log('usuario gerente');
//     break;

//   case 'diretor':
//     console.log('usuario diretor');
//     break;

//   default:
//     console.log('usuario nao reconhecido!');
// }

//Laços --- FOR - while - do..while - for..in - for..of

// for (let i = 5; i >= 1; i--){
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// //while loop
// let i = 5;

// while (i >= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i--;
// }

//do..while
let i = 0;

// do {
//   console.log('digitando..');
//   i++;
// }while(i < 10)

// const pessoa = {
//   nome: 'Jhonatan',
//   idade: 25
// };

// for (let chave in pessoa) {
//   console.log(chave,pessoa.nome);
// }

// const cores = ["Vermelho", "Azul", "Verde"];

// for (let indice in cores) {
//   console.log(indice, cores[indice]);
// }

//for-of
// for (let cor of cores) {
//   console.log(cor);
// }

// const notebooks = ["Acer", "HP", "Macbook", "Dell XPS", "Avell"];

//   for (let notebook of notebooks) {
//   console.log(notebook);
// }
//   for (let i in notebooks) {
//     console.log(i, notebooks[i]);
//   }

// Escreva uma função que usa 2 números e retorna o maior entre eles

// let valorMaior = max(15, 19);
// console.log(valorMaior);

// function max(numero1, numero2) {
//   return numero1 > numero2 ? numero1 : numero2;


// }
  // if (numero1 > numero2)
  //   return numero1;
  // else return numero2;

//FIZZBUZZ
//divisível por 3 = fizz
//divisivel por 5 = buzz
//divisivel por 3 e 5 = fizzbuzz
//nao divisivel por 3 ou 5 = entrada
//nao eh um numero = Nao eh um numero

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number')
    return 'Nao eh um numero';
    if (entrada % 3 === 0 && entrada % 5 === 0)
      return 'FizzBuzz';
  if (entrada % 3 === 0)
    return 'Fizz';
  if (entrada % 5 == 0)
    return 'Buzz';
  return entrada;
}

