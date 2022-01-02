// aprovado -> nota >=60
// recuperação -> nota >=40 && <60
// reprovado -> nota <40
// aprovado com louvor -> nota >95

let nota = 80;
let res;

if (nota >= 60) {
  res = "Aprovado"
  if (nota >= 95) {
    if (nota == 100) {
      res += " com excelencia";
    } else {
      res += " com louvor";
    }
  } else {
    res += " com nota normal";
  }

} else if (nota >= 40) {
  res = "recuperacao";
} else {
  res = "Reprovado";
  if(nota >= 20){
    res += " por nota baixa";
  } else {
    res += " com louvor";
  }
}
  

document.write(res);
