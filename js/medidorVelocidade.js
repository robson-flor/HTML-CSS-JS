// MEDIDOR DE VELOCIDADE
// Velocidade maxima de ateh 70km/h
//a cada 5km acima do limite voce ganha 1 ponto na carteira
//Math.Floor() arredonda para o decimal mais proximo
// caso os pontos sejam maior que 12 -> "Carteira Suspendida"

verificarVelocidade(110);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if (velocidade <= velocidadeMaxima)
    console.log('ok');
  else {
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
    if (pontos >= 12)
      console.log('Carteira Suspensa');
    else
      console.log('Pontos', pontos);
  }
}