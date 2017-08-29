var ajudaTela1_3_13 = [
{
  progressSteps: [],
  title: 'Ajuda!',
  html: 'Ao ler cada fala, clique na seta direita para ver a próxima'
}]


var ajudaTela8 = [
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda!',
  confirmButtonText: 'Próxima &rarr;',
  html: 'Na <strong>Média Aritmética Ponderada</strong> existem casos onde as ocorrências têm importância relativa diferentes. Nestes, o cálculo da média deve levar em conta esta importância relativa ou peso relativo.<br>Ponderar é sinônimo de pesar. No cálculo da média ponderada, multiplicamos cada valor do conjunto por seu "peso", isto é, sua importância relativa.'
},
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  confirmButtonText: 'Próxima &rarr;',
  html: '<table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><thead><tr><td><strong>Consumo diário em kWh</strong></td><td><strong>Nº de dias de consumo</strong></td> </tr> </thead><tr><td class="noLeftBorder">3,0</td><td class="noRightBorder">2</td></tr><tr><td class="noLeftBorder">3,5</td><td class="noRightBorder">4</td></tr> <tr><td class="noLeftBorder">3,8</td><td class="noRightBorder"> 5</td></tr><tr> <td class="noLeftBorder">4,0</td><td class="noRightBorder">17</td> </tr><tr> <td class="noLeftBorder tabelaTotal">Soma</td> <td class="noRightBorder tabelaTotal">28</td></tr> </table> <br> Para encontrar a média aritmética do consumo diário, podemos utilizar o conceito da média ponderada utilizando o número de dias como peso, pois cada valor se repetiu durante certo número de dias.'
},
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  confirmButtonText: 'Próxima &rarr;',
  html: 'Veja como calcular a média do consumo diário. Use uma calculadora para obter o resultado <br><img src="../assets/img/Objeto 2/equacaoTela8.png">'
}
]


var ajudaTela14NenhumaAtiv = [
{
  progressSteps: [],
  title: 'Ajuda!',
  html: 'Realize todas as atividades em qualquer ordem. Após finalizar cada atividade, retorne para esta tela e escolha outra para ser realizada'
}
]

var ajudaTela14Ativ1 = [
{
 progressSteps: [],
 title: 'Ajuda!',
 html: 'Instruções da atividade 1'
}
]

var ajudaTela14Ativ2 = [
{
 progressSteps: [],
 title: 'Ajuda!',
 html: 'Instruções da atividade 2'
}
]

var ajudaTela14Ativ3 = [
{
 progressSteps: [],
 title: 'Ajuda!',
 html: 'Instruções da atividade 3'
}
]


var ajudaTela14Ativ4 = [
{
 progressSteps: [],
 title: 'Ajuda!',
 confirmButtonText: 'Próxima &rarr;',
 html: 'Instruções da atividade 4'
}
]


function getHelpScene(numeroDaTela) {
  switch(numeroDaTela){
    default:
    return null;
    break;
    case 1:
    case 3:
    case 13:
    return ajudaTela1_3_13;
    case 8:
    return ajudaTela8;
    case '140':
    return ajudaTela14NenhumaAtiv;
    case '141':
    return ajudaTela14Ativ1;
    case '142':
    return ajudaTela14Ativ2;
    case '143':
    return ajudaTela14Ativ3;
    case '144':
    return ajudaTela14Ativ4;
  }
}

function showHelp(scene) {
  if (getHelpScene(scene)) {
    swal.queue(getHelpScene(scene)).then(function () {

    })
  }
}