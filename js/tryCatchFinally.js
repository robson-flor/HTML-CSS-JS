// try {
//   document.writi("cfb cursos");
// } catch (e) {
//   document.write("ERRO:<br>" + e.message);
//   console.log("mensagem de erro: "); //Sem console log não aparece o erro no console do desenvolvedor.
// }

//Gerando exceção
var num; //maximo 10
try {
  num = prompt("Digite um valor");
  if (num > 10) {
    throw new Error("Valor inválido, o valor deve ser menor ou igual a 10");
  }

  document.write("Valor: " + num);
} catch (ex) {
  
  document.write("ERRO: " + ex.message);
} finally {
  document.write("<br>Fim do tratamento")
}
