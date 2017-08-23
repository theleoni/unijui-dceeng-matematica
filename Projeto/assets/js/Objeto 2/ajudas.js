var ajudaTela8 = [
{
  title: 'Ajuda!',
  html: 'Na <strong>Média Aritmética Ponderada</strong> existem casos onde as ocorrências têm importância relativa diferentes. Nestes, o cálculo da média deve levar em conta esta importância relativa ou peso relativo.<br>Ponderar é sinônimo de pesar. No cálculo da média ponderada, multiplicamos cada valor do conjunto por seu "peso", isto é, sua importância relativa.'
},
{
  title: 'Ajuda',
  html: '<table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><thead><tr><td><strong>Consumo diário em kWh</strong></td><td><strong>Nº de dias de consumo</strong></td> </tr> </thead><tr><td class="noLeftBorder">3,0</td><td class="noRightBorder">2</td></tr><tr><td class="noLeftBorder">3,5</td><td class="noRightBorder">4</td></tr> <tr><td class="noLeftBorder">3,8</td><td class="noRightBorder"> 5</td></tr><tr> <td class="noLeftBorder">4,0</td><td class="noRightBorder">17</td> </tr><tr> <td class="noLeftBorder tabelaTotal">Soma</td> <td class="noRightBorder tabelaTotal">28</td></tr> </table> <br> Para encontrar a média aritmética do consumo diário, podemos utilizar o conceito da média ponderada utilizando o número de dias como peso, pois cada valor se repetiu durante certo número de dias.'
},
{
  title: 'Ajuda',
  html: 'Veja como calcular a média do consumo diário. Use uma calculadora para obter o resultado <br><img src="../assets/img/Objeto 2/equacaoTela8.png">'
}
]




function getHelpScene(numeroDaTela) {
  switch(numeroDaTela){
    default:
    return null;
    break;
    case 8:
    return ajudaTela8;
    break;

  }
}

function showHelp(scene) {
  if (getHelpScene(scene)) {
    swal.queue(getHelpScene(scene)).then(function () {
      swal({
        title: 'E ai, consegue agora?',
        html: 'Agora que você já entendeu como realizar os cálculos, tente fazer a atividade',
        confirmButtonText: 'Vamos lá!'
      })
    })
  }
}