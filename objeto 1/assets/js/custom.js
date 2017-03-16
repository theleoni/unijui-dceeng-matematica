  var nome;
  var i = -11.4;
  var scene = 0;
  var fadeTime = 500;
  var questionNumber = 1;
  var listeningToKeyPress = false;
  var questaoSelecionada;
  var corretas = [false, false];

  function sleep(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
	}

  $( document ).ready(function() {
		$("#alertNome").hide();
		$("#scene1").hide();
		$("#scene2").hide();
		$("#scene3").hide();
		$("#scene4").hide();

		$("#imagensFixas").hide();

});


		$(document).on('click', '#iconSetaDireita', function () {
			nextScene();
		});



		$(document).on('click', '#iconSetaEsquerda', function () {
			previousScene();
		});


	function pressedEnter(event) {
		if (event.keyCode == 13 && scene == 0) {
			saveName();
		}
	}



	
	
	
  /* Pega o nome inserido pelo usuário */
	function saveName() {
		
		if (!$("#inputNome").val()) {
			$("#alertNome").show();
	    }
		else {
			nome = $("#inputNome").val(); 
			$("#rowInputName").remove();
			showFixedImages();
			nextScene();
		}
	}
	
	

	
	
	
	
	/* SCENE 1 */
		

		function showFixedImages() {
		$("#imagensFixas").show();
		}
	
		function hideFixedImages() {
			$("#imagensFixas").hide();
		}
	
	
	
	
	
	
	
	
	
	/* SCENE 2 */
	
	function showMoreInfo(usina) {
		$("body").css("background-color", "gray");
		$('#detalhesUsinas').show();
	 	$('#additionalScene2').hide();
		$('#mensagem').hide();
		$('#imagemEngenheiro2').hide();
		hideFixedImages();
		switch (usina) {
			case 'hidreletrica': 
				$('#imgUsina').attr("src", "assets/img/hidreletrica_animada.mp4");
				$('#textoUsina').html("Energia gerada pela água em usinas Hidrelétricas. A energia contida nas correntezas de rios é transformada em energia cinética que movimenta uma turbina, movendo um gerador que por sua vez irá gerar energia elétrica");
				$('#tituloUsina').html("Energia Hídrica");

				break;
			case 'eolica':
				$('#imgUsina').attr("src", "assets/img/eolica_animada.mp4");
				$('#textoUsina').html("É a energia gerada pelo vento, grandes turibinas são posicionadas em locais abertos e com grande quantidade de vento. O vento, ao mover as turbinas gera energia elétrica através de um gerador.");
				$('#tituloUsina').html("Energia Eólica");
				break;
			case 'fossil':
				$('#imgUsina').attr("src", "assets/img/fossil_animada.mp4");
				$('#textoUsina').html("Energia gerada através de reações químicas de combustão de materiais orgânicos decompostos, quando as ligações químicas dos hidrocarbonetos são quebradas, a energia é liberada");
				$('#tituloUsina').html("Energia Fóssil");
				break;
			case 'nuclear':
				$('#imgUsina').attr("src", "assets/img/nuclear_animada.mp4");
				$('#textoUsina').html("Utiliza a energia proveniente de reações de fissão nuclear para gerar energia. A fissão nuclear libera grande quantidade de calor que aquece a água e produz o vapor responsável por movimentar as turbinas do gerador em grandes velocidades, gerando a corrente elétrica.");
				$('#tituloUsina').html("Energia Nuclear");
				break;
			case 'solar':
				$('#imgUsina').attr("src", "assets/img/solar_animada.mp4");
				$('#textoUsina').html("É a energia irradiada pelo sol. Pode ser utilizada para geração de calor, ou pode ser convertida em energia elétrica através de células fotovoltaicas");
				$('#tituloUsina').html("Energia Solar");
				break;	
			case 'biomassa':
				$('#imgUsina').attr("src", "assets/img/biomassa_animada.mp4");
				$('#textoUsina').html("Gerada através da decomposição de materiais orgânicos (esterco, resto de alimentos). É transformada em energia por meio de combustão, gaseificação e fermentação");
				$('#tituloUsina').html("Energia de Biomassa");
				break;	
		}
	}
	

	  
	function restoreScene2() {
		loadScene();
		showFixedImages();
		$('#imagemEngenheiro2').show();
		$('#mensagem').show(); 
		$("body").css("background-color", "white");

	}
	  
	  
	  
	  
	  
	  
	  /*Scene 3 */
	  
	  function showImposto(imposto) {
		  $("#containerImposto").show();
		  
		  switch (imposto) {
			case 'icms':
				$("#containerImposto").css("background-color", "#654E44");
				$("#containerImposto").html("Poderá levar até 30% do valor consumido, este imposto é cobrado referente a circulação de mercadorias (eletrodomésticos, alimentos, cosméticos e outras mercadorias relacionadas ao segmentos) e prestação de serviços de transporte interestadual e intermunicipal e comunicação.");
				break;
			
			case 'tusd':
				$("#containerImposto").css("background-color", "#5E35B1");
				$("#containerImposto").html("Tarifa de Uso do Sistema de Distribuição, que remunera instalações, equipamentos e componentes da rede de distribuição para levar a energia até as casas (Imposto estabelecido pela ANEEL, dando poder para as concessionarias cobrarem de seus clientes sobre a conta de energia");
				break;	
				
			case 'cofins':
				$("#containerImposto").css("background-color", "#D26F4C");
				$("#containerImposto").html("Contribuição Social para Financiamento da Seguridade Social, destinada a financiar as despesas das áreas de Saúde, Previdência, e Assistência social. COFINS leva 4.45% do valor de sua fatura");
				break;
			
			case 'cip':
				$("#containerImposto").css("background-color", "#7CB342");
				$("#containerImposto").html("Contribuição de Iluminação Pública, é uma taxa cobrada baseada no custo total do serviço/manutenção do sistema de iluminação pública");
				break;
				
			case 'pispasep':
				$("#containerImposto").css("background-color", "#09AFC3");
				$("#containerImposto").html("Programas de Integração Social e de Formação do Patrimônio do Servidor Público, tem como finalidade o financiamento do programa do Seguro-Desemprego e o abono aos empregados que recebem até dois salários mínimos mensais. De forma geral, o contribuinte acaba pagando no PIS a alíquota de 0.95% do valor de consumo da energia elétrica.");
				break;
			
			case 'tust':
				$("#containerImposto").css("background-color", "#880E4F");
				$("#containerImposto").html("Tarifa de Uso do Sistema de Transmissão, que remunera instalações, equipamentos e componentes da rede de transmissão. (Imposto estabelecido pela Agência Nacional de Energia Elétrica, dando poder para as concessionárias cobraram de seus clientes sobre a conta de energia)");
				break;				
				}
	  
	  
	  }
	  
	  


	  /* Scene 4 */

	  function loadQuestion () {

	  	switch (questionNumber) {
	  		case 1:
	  			$("#scene4QuestionNumber").html("1.");
	  			$("#scene4Question").html("Exemplo de questão número 1. De acordo com as informações apresentadas, é correto afirmar que a fruta preferida do fulano é: " )
	  			$("#opcaoA").html("<span class='containerLetra'>A</span>Banana");
	  			$("#opcaoB").html("<span class='containerLetra'>B</span>Maçã");
	  			$("#opcaoC").html("<span class='containerLetra'>C</span>Pêssego");
	  			$("#opcaoD").html("<span class='containerLetra'>D</span>Mamão");

	  			grafico1();
	  			break;

	  	}
	  }

	  //Verifica se a resposta selecionada está correta
	  function checkAnswer() {
	  		switch (questionNumber) {
	  			case 1:
	  				if($("#opcaoA").hasClass("btn-primary")) {
	  					console.log("Correto");
	  					$("#alertAnswer").addClass("alert-success");
	  					$("#alertAnswer").removeClass("alert-danger");
	  					$("#iconSetaDireita").show();
	  					corretas[0] = true;
  						$("#alertAnswer").html("Resposta correta! Prossiga para a próxima questão");

	  				}
	  				else {
	  					console.log("Errado");
	  					$("#alertAnswer").addClass("alert-danger");
	  					$("#alertAnswer").removeClass("alert-success");

  						$("#alertAnswer").html("Resposta errada! Tente novamente");
	  				}
	  		}
	  }


	  //Realiza a troca da seleção e salva a seleção atual em uma variável
	  function selectQuestion (elemento) {
	  	$(elemento).toggleClass('btn-primary').siblings().removeClass('btn-primary');
	  }

	  //Binda o evento de clicar no botão à troca de sleleção
		$(document).on('click', '.btn-questoes', function () {
			selectQuestion(this);
		});
	
		//Binda o evento de clicar no botão de enviar ao método checkAnswer
		$(document).on('click', '#enviarResposta', function () {
			checkAnswer();
		});


 		$(document).bind('keydown', function(event) {
				if(listeningToKeyPress) {
					var code = event.keyCode;
					switch (code) {
						case 13:
							checkAnswer(questaoSelecionada);
							break;
						case 65:
							selectQuestion($("#opcaoA"));
							break;
						case 66:
							selectQuestion($("#opcaoB"));
							break;
						case 67:
							selectQuestion($("#opcaoC"));
							break;
						case 68:
							selectQuestion($("#opcaoD"));
							break;
					}

				}
			});

		function grafico1() {
			$(document).ready(function () {


				// Gera o gráfico
				Highcharts.chart('scene4Graph', {
					chart: {
						type: 'pie',
					},
					title: {
						text: 'Quantidade de frutas que o fulano comeu'
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
						 dataLabels: {
              			 	enabled: true,
                			format: '<b>{point.name}</b>: {point.percentage:.1f} %',


							},
							showInLegend: true
						}
					},
					series: [{
						name: 'Fruta',
						colorByPoint: true,
						data: [{
							name: 'Maçã',
							y: 2
						}, {
							name: 'Melância',
							y: 1
		
						}, {
							name: 'Banana',
							y: 4
						}, {
							name: 'Mamão',
							y: 1
						}, {
							name: 'Pêssego',
							y: 3
						}]
					}]
				});
			});
			}
	  
	  
	  /* Funções Gerais */
	  	
	async function nextScene() {
		if (scene == 332189123) {
		
		}
		else {
			unloadScene();
			scene++;
			await sleep(fadeTime);
			loadScene();
		}
	}
	
	
	async function previousScene() {
		if (scene == 1) {
			
		}
		else {
			unloadScene();
			scene--;
			await sleep(fadeTime);
			loadScene();
		}
	}
	
	  
	  function loadScene() {
		  
			switch (scene) {
				case 1:
					$("#scene1").fadeIn(fadeTime);
					$("#scene1Text1").html("Olá " + nome + "! Eu sou o engenheiro Euler, estou aqui para auxiliá-lo neste percurso de aprendizado, a partir da matemática iremos conhecer os modos de geração de energia elétrica, o caminho e o custo até chegar à sua casa.");
					$("#tituloGeral").html("");
					break;
					
				case 2:
					$("#scene2").fadeIn(fadeTime);
					$('#detalhesUsinas').hide();
					$('#additionalScene2').show();
					$("#tituloGeral").html("Formas de produção de energia");

					break;
					
				case 3:
					$("#scene3").fadeIn(fadeTime);
					$("#tituloGeral").html("Impostos pagos sobre a energia elétrica");
					$("#containerImposto").hide();
					break;
			
				case 4:
					$("#scene4").fadeIn(fadeTime);

					if (corretas[0] == false) {
						$("#iconSetaDireita").hide();
					}

					loadQuestion();
					listeningToKeyPress = true;

					break;
			}
	  }
	  
	  
	  
	  
	  function unloadScene() {
		  	$("#tituloGeral").html("");
			switch (scene) {
				case 0:
					$("#scene0").fadeOut(fadeTime);
					break;
					
				case 1:
					$("#scene1").fadeOut(fadeTime);
					break;
				
				case 2:
					$("#scene2").fadeOut(fadeTime);
					break;
					
				case 3:
					$("#scene3").fadeOut(fadeTime);
					break;
				case 4:
					$("#scene4").fadeOut(fadeTime);
					listeningToKeyPress = false;
					break;
			}
	  }
	 
	  