
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
  html: 'Na <strong>Média Aritmética Ponderada</strong> existem casos onde as ocorrências têm importância relativa diferentes. Nestes, o cálculo da média deve levar em conta esta importância relativa ou peso relativo.<br>Ponderar é sinônimo de pesar. No cálculo da média ponderada, multiplicamos cada valor do conjunto por seu "peso", isto é, sua importância relativa.'
},
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  html: '<table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><thead><tr><td><strong>Consumo diário em kWh</strong></td><td><strong>Nº de dias de consumo</strong></td> </tr> </thead><tr><td class="noLeftBorder">3,0</td><td class="noRightBorder">2</td></tr><tr><td class="noLeftBorder">3,5</td><td class="noRightBorder">4</td></tr> <tr><td class="noLeftBorder">3,8</td><td class="noRightBorder"> 5</td></tr><tr> <td class="noLeftBorder">4,0</td><td class="noRightBorder">17</td> </tr><tr> <td class="noLeftBorder tabelaTotal">Soma</td> <td class="noRightBorder tabelaTotal">28</td></tr> </table> <br> Para encontrar a média aritmética do consumo diário, podemos utilizar o conceito da média ponderada utilizando o número de dias como peso, pois cada valor se repetiu durante certo número de dias.'
},
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  html: 'Veja como calcular a média do consumo diário. Use uma calculadora para obter o resultado <br><img src="../assets/img/Objeto 2/equacaoTela8.png">'
}
]

var ajudaTela10 = [
{
  progressSteps: ['1', '2', '3', '4'],
  title: 'Ajuda!',
  html: '<div style="text-align:left;"><b>Mediana</b><br>A mediana representa o valor que fica exatamente no meio do conjunto, assim, podemos afirmar que 50% dos valores de um determinado conjunto estão acima da mediana, e 50% estão abaixo dela.<br>Para obtermos a mediana o principal é organizarmos todos os valores do conjunto em ordem crescente ou decrescente. Em seguida, identifica-se o meio deste intervalo de dados.<br>Um detalhe importante à ser lembrado, está relacionado com o número de elementos que constituem o conjunto de dados</div>'
},
{
  progressSteps: ['1', '2', '3', '4'],
  title: 'Ajuda',
  html: '<div style="text-align:left;">•Se a quantidade de elementos for ímpar, existe somente um número central, portanto a mediana é este próprio número.<br>Exemplo 1: A conta de energia de um determinado estabelecimento comercial custou, para os meses de junho a dezembro, 1.570, 1.399, 1.450, 1.375, 1.500, 1.525, 1.480 reais, respectivamente. Reorganizando estes valores em <b>ordem crescente</b>, obtemos o seguinte conjunto: <br>Custo da energia: {1.375; 1.399; 1.450; <b>1.480</b>; 1.500; 1.525; 1.580}<br>Observe que o valor 1.480 divide o conjunto exatamente ao meio, pois há somente três elementos antes e três elementos após este número. Portanto ele é a própria mediana.</div>'
},
{
  progressSteps: ['1', '2', '3', '4'],
  title: 'Ajuda',
  html: '<div style="text-align:left;">•No entanto, se o número de elementos for par, existiriam dois valores centrais e a mediana será a média destes dois valores.<br>Exemplo 2: Geração de energia em hidrelétricas no Brasil em 2016, por GWh (Giga watt-hora)<br><table class="table table-responsive table-bordered"><tr><td>Janeiro - 28.119,52</td><td>Julho - 24.961,68</td></tr><tr><td>Fevereiro - 28.599,45</td><td>Agosto - 24.931,22</td></tr><tr><td>Março - 31.187,06</td><td>Setembro - 23.449,26</td></tr><tr><td>Abril - 28.388,97</td><td>Outubro - 24.732,25</td></tr><tr><td>Maio - 26.483,32</td><td>Novembro - 24.814,3</td></tr><tr><td>Junho - 24.523,08</td><td>Dezembro - 28.707,38</td></tr></table><br>Primeiramente colocamos em ordem crescente: 23.449,26; 24.523,09; 24.732,35; 24.814,30; 24.931,22; 24.961,68; 26.483,32; 28.119,52; 28.388,97; 28.599,45; 28.707,38; 31.187,06.'
},
{
  progressSteps: ['1', '2', '3', '4'],
  title: 'Ajuda',
  html: '<div style="text-align:left;">Existem dois valores centrais: 24.961,68 e 26.483,32<br>A mediana está no meio destes dois números. Para encontrar o valor exato, basta calcular a média aritmética destes dois valores:<br>x = (24.962,68 + 26.483,32) / 2 = 51.445/2 = 25.722,5<br>A mediana é 25.722,5GWh</div>'
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
  progressSteps: ['1', '2', '3', '4', '5', '6'],
  title: 'Moda',
  html: '<div style="text-align:left;">Vamos analisar novamente os pagamentos da conta de luz: <br>Joana pagou no ano de 2016 os seguintes valores:<br><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><tr><td>Janeiro</td><td>R$96.00</td></tr><tr><td>Fevereiro</td><td>R$78.00</td></tr><tr><td>Março</td><td style="color:red"> R$82.00</td></tr><tr><td>Abril</td><td>R$103.00</td></tr><tr><td>Maio</td><td>R$97.00</td></tr><tr><td>Junho</td><td>R$85.00</td></tr><tr><td>Julho</td><td>R$100.00</td></tr><tr><td>Agosto</td><td style="color:red">R$82.00</td></tr><tr><td>Setembro</td><td>R$94.00</td></tr><tr><td>Outubro</td><td>R$89.00</td></tr><tr><td>Novembro</td><td>R$91.00</td></tr><tr><td>Dezembro</td><td>R$115.00</td></tr></table><br>Apenas dois valores são iguais, ou seja, apresenta uma moda definida como R$82. A classificação para uma moda é unimodal </div>'
},
{
  progressSteps: ['1', '2', '3', '4', '5', '6'],
  title: 'Moda',
  html: '<div style="text-align:left;">Arthur pagou no ano de 2016 os seguintes valores:<br><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><tr><td>Janeiro</td><td style="color:blue">R$129.00</td></tr><tr><td>Fevereiro</td><td>R$118.00</td></tr><tr><td>Março</td><td>R$107.00</td></tr><tr><td>Abril</td><td style="color:red">R$115.00</td></tr><tr><td>Maio</td><td>R$122.00</td></tr><tr><td>Junho</td><td>R$120.00</td></tr><tr><td>Julho</td><td style="color:red">R$115.00</td></tr><tr><td>Agosto</td><td style="color:blue">R$129.00</td></tr><tr><td>Setembro</td><td>R$105.00</td></tr><tr><td>Outubro</td><td>R$111.00</td></tr><tr><td>Novembro</td><td>R$126.00</td></tr><tr><td>Dezembro</td><td>R$134.00</td></tr></table><br>Existem dois valores diferentes que se repetiram, R$115 e R$129. Sendo assim, apresenta duas modas, sua classificação é bimodal</div>'
},
{
  progressSteps: ['1', '2', '3', '4', '5', '6'],
  title: 'Moda',
  html: '<div style="text-align:left;">Mateus pagou no ano de 2016 os seguintes valores:<br><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><tr><td>Janeiro</td><td style="color:red">R$165.00</td></tr><tr><td>Fevereiro</td><td style="color:#269228">R$162.00</td></tr><tr><td>Março</td><td>R$153.00</td></tr><tr><td>Abril</td><td style="color:blue">R$159.00</td></tr><tr><td>Maio</td><td style="color:red">R$165.00</td></tr><tr><td>Junho</td><td>R$150.00</td></tr><tr><td>Julho</td><td style="color:blue">R$159.00</td></tr><tr><td>Agosto</td><td>R$161.00</td></tr><tr><td>Setembro</td><td>R$157.00</td></tr><tr><td>Outubro</td><td style="color:#269228">R$162.00</td></tr><tr><td>Novembro</td><td>R$160.00</td></tr><tr><td>Dezembro</td><td>R$155.00</td></tr></table><br>Existem três valores diferentes que se repetiram: R$159, R$162, e R$165. Sendo assim, apresenta mais que duas modas, sua classificação é plurimodal</div>'
},
{
  progressSteps: ['1', '2', '3', '4', '5', '6'],
  title: 'Moda!',
  html: '<div style="text-align:left;">Você pagou no ano de 2016 os seguintes valores:<br><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><tr><td>Janeiro</td><td>R$158.00</td></tr><tr><td>Fevereiro</td><td>R$134.00</td></tr><tr><td>Março</td><td>R$122.00</td></tr><tr><td>Abril</td><td>R$146.00</td></tr><tr><td>Maio</td><td>R$119.00</td></tr><tr><td>Junho</td><td>R$105.00</td></tr><tr><td>Julho</td><td>R$98.00</td></tr><tr><td>Agosto</td><td>R$108.00</td></tr><tr><td>Setembro</td><td>R$127.00</td></tr><tr><td>Outubro</td><td>R$131.00</td></tr><tr><td>Novembro</td><td>R$140.00</td></tr><tr><td>Dezembro</td><td>R$152.00</td></tr></table><br>Não existem valores iguais, sendo assim não apresenta moda. Sua classificação é amodal</div>'
},
{
  progressSteps: ['1', '2', '3', '4', '5', '6'],
  title: 'Mediana',
  html: '<div style="text-align:left;">•Se o número de elementos for par, existem dois valores centrais e a mediana será a média destes dois valores.<br>Exemplo: Geração de energia em hidrelétricas no Brasil em 2016, por GWh (Giga watt-hora)<br><table class="table table-responsive table-bordered"><tr><td>Janeiro - 28.119,52</td><td>Julho - 24.961,68</td></tr><tr><td>Fevereiro - 28.599,45</td><td>Agosto - 24.931,22</td></tr><tr><td>Março - 31.187,06</td><td>Setembro - 23.449,26</td></tr><tr><td>Abril - 28.388,97</td><td>Outubro - 24.732,25</td></tr><tr><td>Maio - 26.483,32</td><td>Novembro - 24.814,3</td></tr><tr><td>Junho - 24.523,08</td><td>Dezembro - 28.707,38</td></tr></table><br>Primeiramente colocamos em ordem crescente: 23.449,26; 24.523,09; 24.732,35; 24.814,30; 24.931,22; 24.961,68; 26.483,32; 28.119,52; 28.388,97; 28.599,45; 28.707,38; 31.187,06.'
},
{
  progressSteps: ['1', '2', '3', '4', '5', '6'],
  title: 'Mediana',
  html: '<div style="text-align:left;">Existem dois valores centrais: 24.961,68 e 26.483,32<br>A mediana está no meio destes dois números. Para encontrar o valor exato, basta calcular a média aritmética destes dois valores:<br>x = (24.962,68 + 26.483,32) / 2 = 51.445/2 = 25.722,5<br>A mediana é 25.722,5GWh</div>'
}
]

var ajudaTela14Ativ2 = [
{
 progressSteps: ['1', '2'],
 title: 'Ajuda!',
 html: '<div style="text-align:left;">Média<br>É calculada somando-se todos os elementos do conjunto, e em seguida, dividindo o resultado pela quantidade de elementos que compões o conjunto. Fórmula:<br><img src="../assets/img/Objeto 2/ajuda1Atividade2.PNG"><br>Exemplo:<br><img src="../assets/img/Objeto 2/ajuda2Atividade2.PNG"></div>'
}, 
{
 progressSteps: ['1', '2'],
 title: 'Ajuda!',
 html: '<div style="text-align:left;">Mediana<br>Se a quantidade de elementos for ímpar, existe somente um número central, portanto, a mediana é este próprio número. Basta organizarmos todos os valores do conjunto em ordem crescente ou descrescente. Em seguida identifica-se o meio deste intervalo de dados.<br>Exemplo: A conta de energia de um determinado estabelecimento comercial custou, para os meses de junho a dezembro, 1.570, 1.399, 1.450, 1.375, 1.500, 1.525, 1.480 reais, respectivamente. Reagrupando estes valores em ordem crescente obtemos o seguinte conjunto:<br>Custo da energia: {1.375; 1.399; 1.450; <b>1.480</b>; 1.500; 1.525; 1.570}<br>Observe que o valor 1.480 divide o conjunto exatamente ao meio, pois há somente três elementos antes e três elementos após este número. Portante ele é a própria mediana.</div>'
}
]

var ajudaTela14Ativ3 = [
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  html: '<div style="text-align:left;">Complete a tabela calculando a média e a mediana dos dados. Após completar clique no botão "Enviar Resposta" para fazer a correção das respostas. Em seguida responda as perguntas, você só poderá ver a próxima pergunta após responder corretamente cada pergunta. <br>Observação: A diferença entre a média e mediana é calculada da segiunte forma: valor da média - valor da mediana.</div>'
},
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  html: '<div style="text-align:left;">Mediana<br>•Se o número de elementos for par, existem dois valores centrais e a mediana será a média destes dois valores.<br>Exemplo: Geração de energia em hidrelétricas no Brasil em 2016, por GWh (Giga watt-hora)<br><table class="table table-responsive table-bordered"><tr><td>Janeiro - 28.119,52</td><td>Julho - 24.961,68</td></tr><tr><td>Fevereiro - 28.599,45</td><td>Agosto - 24.931,22</td></tr><tr><td>Março - 31.187,06</td><td>Setembro - 23.449,26</td></tr><tr><td>Abril - 28.388,97</td><td>Outubro - 24.732,25</td></tr><tr><td>Maio - 26.483,32</td><td>Novembro - 24.814,3</td></tr><tr><td>Junho - 24.523,08</td><td>Dezembro - 28.707,38</td></tr></table><br>Primeiramente colocamos em ordem crescente: 23.449,26; 24.523,09; 24.732,35; 24.814,30; 24.931,22; 24.961,68; 26.483,32; 28.119,52; 28.388,97; 28.599,45; 28.707,38; 31.187,06.'
},
{
  progressSteps: ['1', '2', '3'],
  title: 'Ajuda',
  html: '<div style="text-align:left;">Existem dois valores centrais: 24.961,68 e 26.483,32<br>A mediana está no meio destes dois números. Para encontrar o valor exato, basta calcular a média aritmética destes dois valores:<br>x = (24.962,68 + 26.483,32) / 2 = 51.445/2 = 25.722,5<br>A mediana é 25.722,5GWh</div>'
}
]


var ajudaTela14Ativ4 = [
{
 progressSteps: ['1', '2', '3'],
 title: 'Ajuda!',
 html: '<div style="text-align:left;">Os dados das tabelas também podem aparecer de forma agrupada, como no exemplo à seguir:<br><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><thead><tr><td><strong>Consumo diário em kWh</strong></td><td><strong>Nº de dias de consumo</strong></td></tr></thead><tr><td class="noLeftBorder">3,0</td><td class="noRightBorder">2</td></tr><tr><td class="noLeftBorder">3,5</td><td class="noRightBorder">4</td></tr><tr><td class="noLeftBorder">3,8</td><td class="noRightBorder"> 5</td></tr><tr><td class="noLeftBorder">4,0</td><td class="noRightBorder">17</td></tr><tr><td class="noLeftBorder tabelaTotal">Soma</td><td class="noRightBorder tabelaTotal">28</td></tr></table><br>Para encontrarmos a mediana, o valor central, primeiro devemos organizar os dados em ordem crescente, levando em conta a frequência (quantas vezes cada número deverá repetir): <br><br>Ordem crescente: <br>3; 3; 3.5; 3.5; 3.5; 3.5; 3.8; 3.8; 3.8; 3.8; 3.8; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; 4.0; </div>'
},
{
 progressSteps: ['1', '2', '3'],
 title: 'Ajuda!',
 html: '<div style="text-align:left;"><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><thead><tr><td><strong>Consumo diário em kWh</strong></td><td><strong>Nº de dias de consumo</strong></td></tr></thead><tr><td class="noLeftBorder">3,0</td><td class="noRightBorder">2</td></tr><tr><td class="noLeftBorder">3,5</td><td class="noRightBorder">4</td></tr><tr><td class="noLeftBorder">3,8</td><td class="noRightBorder"> 5</td></tr><tr><td class="noLeftBorder">4,0</td><td class="noRightBorder">17</td></tr><tr><td class="noLeftBorder tabelaTotal">Soma</td><td class="noRightBorder tabelaTotal">28</td></tr></table><br>Temos como valores centrais: 4 e 4.<br>Logo, calculamos a média entre eles: (4+4)/2 = 8/2 = 4<br>Então nossa mediana é 4</div>'
},
{
 progressSteps: ['1', '2', '3'],
 title: 'Ajuda!',
 html: '<div style="text-align:left;"><table id="tabelaAgrupadaConsumoMensal" class="table table-responsive table-bordered"><thead><tr><td><strong>Consumo diário em kWh</strong></td><td><strong>Nº de dias de consumo</strong></td></tr></thead><tr><td class="noLeftBorder">3,0</td><td class="noRightBorder">2</td></tr><tr><td class="noLeftBorder">3,5</td><td class="noRightBorder">4</td></tr><tr><td class="noLeftBorder">3,8</td><td class="noRightBorder"> 5</td></tr><tr><td class="noLeftBorder">4,0</td><td class="noRightBorder">17</td></tr><tr><td class="noLeftBorder tabelaTotal">Soma</td><td class="noRightBorder tabelaTotal">28</td></tr></table><br>Para descobrirmos a moda, basta observar qual o número que apareceu om maior frequência, da seguinte maneira: <br> • O número 3 apareceu <span style="color:green;">2</span> vezes <br>• O número 3.5 apareceu <span style="color:blue;">4</span> vezes <br>• O número 3.8 apareceu <span style="color:brown;">5</span> vezes <br>• O número 4 apareceu <span style="color:red;">17</span> vezes <br><br>A maior frequência foi o 17, então o número 4 se repetiu mais vezes que os outros números, logo a nossa moda é o 4.</div>'
},
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
    case 10:
    return ajudaTela10;
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

