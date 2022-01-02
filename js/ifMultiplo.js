// aprovado -> nota >=60
// recuperação -> nota >=40 && <60
// reprovado -> nota <40
// aprovado com louvor -> nota >95

let nota = 60;
let res;

if (nota >= 95) {
  res = "aprovado com louvor";
}
else if (nota >= 60) {
  res = "aprovado";
}
else if (nota >= 40) {
  res = "recuperacao";
}
else if (nota >= 20) {
  res = "reprovado";
}else { 
  res = "Reprovado provado com louvor";
}

document.write(res);

