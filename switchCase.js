let pos, msg, pontos;

pontos = 1000;

if (pontos >= 1000) {
  pos = 1;
} else if (pontos >= 800) {
  pos = 2;
} else if (pontos >= 600) {
  pos = 3;
} else {
  pos = 0;
}


switch (pos) {
  case 1:
    msg = "Primeiro lugar <br> Medalha de ouro";
    break;
  case 2:
    msg = "Segundo lugar <br> Medalha de Prata";
    break;
  case 3:
    msg = "Terceiro lugar <br> Medalha de Bronze";
    break;
  default:
    msg = "Não atingiu o Pódio <br> Não obteve medalha";
}

switch (pos) {
  case 1:
  case 2:
  case 3:
    msg += "<br>Subiu ao pódio";
    break;
  default:
    msg += "<br>Não obteve colocação";
}



document.write(msg);