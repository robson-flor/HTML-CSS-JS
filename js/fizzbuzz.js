//FIZZBUZZ
//divisível por 3 = fizz
//divisivel por 5 = buzz
//divisivel por 3 e 5 = fizzbuzz
//nao divisivel por 3 ou 5 = entrada
//nao eh um numero = Nao eh um numero

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "Nao eh um numero";
  if (entrada % 3 === 0 && entrada % 5 === 0) return "FizzBuzz";
  if (entrada % 3 === 0) return "Fizz";
  if (entrada % 5 == 0) return "Buzz";
  return entrada;
}