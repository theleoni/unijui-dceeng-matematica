  var nome;
  var i = -11.4;
  var scene = 0;
  var transmissionBeingShown = 2;
  var fadeTime = 500;
  var questionNumber = 1;
  var listeningToKeyPress = false;
  var questaoSelecionada;
  var corretas = [false, false, false, false, false, false, false, false];
  var updateText = [false, false];
  var firstTimeTransmission = true;
  var ftTransmission = true;
  var dataJSON;
  var respostaCorreta7 = 63.99;

  	//Recupera as informações do arquivo data.json
  	$.getJSON('assets/js/data.json', function(data) {
  		dataJSON = data;
  	  });

  	//Adiciona um sleep equivalente ao tempo passado como input
	function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
	}

	//Oculta as cenas ao carregar a página
  $( document ).ready(function() {
		$("#alertNome").hide();
		$("#scene1").hide();
		$("#scene2").hide();
		$("#scene3").hide();
		$("#scene4").hide();
		$("#scene5").hide();
		$("#scene6").hide();
		$("#scene7").hide();
		$("#sceneX").hide();
		$("#imagensFixas").hide();


});

  		//Realiza as ações necessárias ao se clicar na seta direita (Troca de cena ou troca de questão)
		$(document).on('click', '#iconSetaDireita', function () {
			switch (scene) {
				case 1:
				case 2:
				case 3:
				case 6:
				case 7:
					nextScene();
					break;
				case 4:
					if (updateText[0] == false) {
						$("#scene4Text1").html(dataJSON.mensagensQuestoes.mensagem2IntroQuestoesIniciais);
						updateText[0] = true;
						$("#imagensCena4").fadeIn(300);
						break;
					}
					else if (updateText[1] == false) {
						$("#scene4Text1").html(dataJSON.mensagensQuestoes.mensagem3IntroQuestoesIniciais);
						updateText[1] = true;
						break;		
					}
					else {
						nextScene();
						break;	
					}
				case 5:
					switch(questionNumber) {
						default: 
							questionNumber++;
							loadQuestion();
							break;
						case 8:
							nextScene();
							break;

					}
			}
		});


		 //Realiza as ações necessárias ao se clicar na seta esquerda (Troca de cena ou troca de questão)
		$(document).on('click', '#iconSetaEsquerda', function () {
			switch (scene) {
				case 1:
				case 2:
				case 3:
				case 6:
				case 7:
				case 8:
					previousScene();
					break;

				case 4:
					if(updateText[0] == true && updateText[1] == true) {
						$("#scene4Text1").html(dataJSON.mensagensQuestoes.mensagem2IntroQuestoesIniciais);
						updateText[1] = false;
						break;
					} else if (updateText[0] == true) {
						$("#scene4Text1").html(dataJSON.mensagensQuestoes.mensagemIntroQuestoesIniciais);
						updateText[0] = false;
						$("#imagensCena4").fadeOut(300);
						break;
					} else {
					previousScene();
					break;
				}
				case 5:
					switch(questionNumber) {
						case 1:
							previousScene();
							break;
						default:
							questionNumber--;
							loadQuestion();
							break;
					}


			}		});



		//Verifica se a tecla pressionada foi enter (Utilizado na cena inicial, para confirmação do nome)
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
		
		//Exibe as imagens fixas (Setas, ajuda e fechar)
		function showFixedImages() {
		$("#imagensFixas").show();
		}
	
		//Ocultas as imagens fixas (Setas, ajuda e fechar)
		function hideFixedImages() {
			$("#imagensFixas").hide();
		}
	
	
	
	
	
	
	
	
	
	/* SCENE 2 */
	//Exibe as informações especificas sobre cada usina, trocando a cor do background e ocultando o que for desnecessário
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
				$('#textoUsina').html(dataJSON.textosUsinas.usinaHidreletrica);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleHidreletrica);
				$('#scene2Sub1').css("background-color", "#008CAF")
				break;
			case 'eolica':
				$('#imgUsina').attr("src", "assets/img/eolica_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaEolica);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleEolica);
				$('#scene2Sub1').css("background-color", "#008CAF")
				break;
			case 'fossil':
				$('#imgUsina').attr("src", "assets/img/fossil_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaFossil);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleFossil);
				$('#scene2Sub1').css("background-color", "#0C99AB")

				break;
			case 'nuclear':
				$('#imgUsina').attr("src", "assets/img/nuclear_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaNuclear);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleNuclear);
				$('#scene2Sub1').css("background-color", "#0C99AB")

				break;
			case 'solar':
				$('#imgUsina').attr("src", "assets/img/solar_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaSolar);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleSolar);
				$('#scene2Sub1').css("background-color", "#0C99AB")

				break;	
			case 'biomassa':
				$('#imgUsina').attr("src", "assets/img/biomassa_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaBiomassa);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleBiomassa);
				$('#scene2Sub1').css("background-color", "#008CAF")

				break;	
		}
	}
	

	  //Restaura o estado da cena 2, após a visualização dos dados da usina
	function restoreScene2() {
		loadScene();
		showFixedImages();
		$('#imagemEngenheiro2').show();
		$('#mensagem').show(); 
		$("body").css("background-color", "white");

	}
	  
	  
	  
	  
	  
	  
	  /*Scene 3 */
	  
	  //Atualiza os dados contidos no container do imposto, trocando o texto e a cor do background
	  function showImposto(imposto) {
		  $("#containerImposto").show();
		  
		  switch (imposto) {
			case 'icms':
				$("#containerImposto").css("background-color", "#654E44");
				$("#containerImposto").html(dataJSON.textosImpostos.icms);
				break;
			
			case 'tusd':
				$("#containerImposto").css("background-color", "#5E35B1");
				$("#containerImposto").html(dataJSON.textosImpostos.tusd);
				break;	
				
			case 'cofins':
				$("#containerImposto").css("background-color", "#D26F4C");
				$("#containerImposto").html(dataJSON.textosImpostos.cofins);
				break;
			
			case 'cip':
				$("#containerImposto").css("background-color", "#7CB342");
				$("#containerImposto").html(dataJSON.textosImpostos.cip);
				break;
				
			case 'pispasep':
				$("#containerImposto").css("background-color", "#09AFC3");
				$("#containerImposto").html(dataJSON.textosImpostos.pispasep);
				break;
			
			case 'tust':
				$("#containerImposto").css("background-color", "#880E4F");
				$("#containerImposto").html(dataJSON.textosImpostos.tust);
				break;				
				}
	  
	  
	  }
	  
	  


	  /* Scene 4 */
	  //Carrega a questão, tendo como base a variável questionNumber
	  function loadQuestion () {

	  	switch (questionNumber) {
	  		case 1:

	  			$("#opcaoA").show().siblings().show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao1.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao1.textoQuestao)
	  			$("#opcaoA").html(dataJSON.questao1.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao1.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao1.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao1.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#inputRespostaScene4").hide();
	  			$("#pularQuestoes").show();
	  			grafico1();

	  				if (corretas[0] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();

					}

	  			break;

	  		case 2:
	  			$("#opcaoA").show().siblings().show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao2.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao2.textoQuestao)
	  			$("#opcaoA").html(dataJSON.questao2.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao2.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao2.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao2.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#inputRespostaScene4").hide();

	  			grafico1();


	  				if (corretas[1] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}

	  			break;

	  		case 3:
	  			$("#opcaoA").hide().siblings().hide();
	  			$("#enviarResposta").show();
	  			$("#enviarResposta").prop('disabled', false);
	  			$("#questionGroup").show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao3.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao3.textoQuestao);

	  			grafico2();

	  				if (corretas[2] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;

	  		case 4:
	  			$("#opcaoA").hide().siblings().hide();
	  			$("#enviarResposta").show();
	  			$("#enviarResposta").prop('disabled', false);
	  			$("#questionGroup").show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao4.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao4.textoQuestao);
	  			$("#inputRespostaScene4").hide();

	  			grafico2();

	  				if (corretas[3] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;

			case 5:
				$("#questionGroup").hide();
				$("#opcaoA").show().siblings().show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao5.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao5.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao5.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao5.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao5.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao5.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#inputRespostaScene4").hide();

	  			grafico2();

	  				if (corretas[4] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
	  			break;
	  		case 6:
				$("#opcaoA").show().siblings().show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao6.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao6.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao6.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao6.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao6.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao6.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#inputRespostaScene4").hide();
	  			grafico3();

	  				if (corretas[5] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;

	  		case 7:
	  			$("#opcaoA").hide().siblings().hide();
	  			$("#enviarResposta").show();
	  			$("#enviarResposta").prop('disabled', false);
	  			$("#scene4QuestionNumber").html(dataJSON.questao7.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao7.textoQuestao )
	  			$("#inputRespostaScene4").show();
	  			grafico4();

	  				if (corretas[6] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						console.log("");
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;

			case 8:
				$("#opcaoA").show().siblings().show();
	  			$("#scene4QuestionNumber").html(dataJSON.questao8.numeroQuestao);
	  			$("#scene4Question").html(dataJSON.questao8.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao8.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao8.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao8.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao8.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#inputRespostaScene4").hide();
	  			grafico4();

	  				if (corretas[7] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;
	  	}
	  }

	  //Verifica se a resposta selecionada está correta, e chama o método correto
	  function checkAnswer() {

	  		switch (questionNumber) {
	  			case 1:
	  				if($("#opcaoD").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();

	  				}
	  				break;


	  			case 2:
	  				if($("#opcaoB").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;

	  			case 3:
	  				if($("#botaoDezembro").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;

	  			case 4:
	  				if($("#botaoJunho").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;


	  			case 5:
	  				if($("#opcaoA").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;

	  			case 6:
	  				if($("#opcaoD").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;

	  			case 7:
	  				if($("#inputNumberScene4").val() == respostaCorreta7) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;

	  			case 8:
	  				if($("#opcaoA").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;
	  		}
	  }


	  //Realiza a troca da seleção e salva a seleção atual em uma variável
	  function selectAnswer (elemento) {
	  	$(elemento).toggleClass('btn-primary').siblings().removeClass('btn-primary');
	  }

	  //Binda o evento de clicar no botão à troca de sleleção
		$(document).on('click', '.btn-questoes', function () {
			selectAnswer(this);
		});
	
		//Binda o evento de clicar no botão de enviar ao método checkAnswer
		$(document).on('click', '#enviarResposta', function () {
			checkAnswer();
		});

		//Verifica se as teclas A, B, C, D ou ENTER foram pressionadas, e realiza a função respectiva (Selecionar alternativa / Enviar resposta)
 		$(document).bind('keydown', function(event) {
				if(listeningToKeyPress) {
					var code = event.keyCode;
					switch (code) {
						case 13:
							$('#enviarResposta').trigger('click');
							break;
						case 65:
							if (!($("#opcaoA").prop("disabled"))) {
								selectAnswer($("#opcaoA"));
							}
							break;
						case 66:
							if (!($("#opcaoB").prop("disabled"))) {
								selectAnswer($("#opcaoB"));
							}						
							break;
						case 67:
							if (!($("#opcaoC").prop("disabled"))) {
								selectAnswer($("#opcaoC"));
							}
							break;
						case 68:
							if (!($("#opcaoD").prop("disabled"))) {
								selectAnswer($("#opcaoD"));
							}
							break;
					}

				}
			});

 			//Coloca as alternativas no estado inicial, para que o aluno possa responder (Botões ativos, e nenhuma opção selecionada)
 			function resetQuestionButtons() {
 			 	switch (questionNumber) {
 			 		case 1:
 			 		case 2:
 			 		case 5:
 			 		case 6:
 			 		case 8:
		  			 	$("#opcaoA").prop('disabled', false).siblings().prop('disabled', false);
		 				$("#opcaoA").removeClass('btn-primary').siblings().removeClass('btn-primary');
		 			 	$("#alertAnswer").hide();
		 			 	break;
		 			case 3:
		 			case 4:
		  			 	$("#botaoDezembro").prop('disabled', false).siblings().prop('disabled', false);
		 				$("#botaoDezembro").removeClass('btn-primary').siblings().removeClass('btn-primary');
						$("#alertAnswer").hide();
		 				break;
		 			case 7:
		 				$("#enviarResposta").prop('disabled', false);
		 				$("#inputNumberScene4").prop('type', 'number');
		 			 	$("#alertAnswer").hide();
		 				break;
 			 	}



 			}
 			//Desabilitada os botões de resposta, chama método para exibir a mensagem de resposta correta,  e deixa a resposta marcada selecionada (Para após o aluno ter respondido corretamente a questão)
 			function disableQuestionButtons () 	{

 				switch(questionNumber) {
 					case 1:
 					 	$("#opcaoD").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoD").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
 						break;
 				
 					case 2:
 					 	$("#opcaoB").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoB").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
 						break;
 					case 3:
 						$("#botaoDezembro").prop('disabled', false).siblings().prop('disabled', true);
 						$("#botaoDezembro").toggleClass('btn-primary').siblings().removeClass('btn-primary');
 						$("#enviarResposta").prop('disabled', true);
						updateAlertOnQuestionChange();
 						break;
 					case 4:
 						$("#botaoJunho").prop('disabled', false).siblings().prop('disabled', true);
 						$("#botaoJunho").toggleClass('btn-primary').siblings().removeClass('btn-primary');
 						$("#enviarResposta").prop('disabled', true);
						updateAlertOnQuestionChange();
 						break;
 					case 5:
 					 	$("#opcaoA").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoA").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
 						break;
 					case 6:
 					 	$("#opcaoD").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoD").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
 						break;
 					case 7:
 						$("#enviarResposta").prop('disabled', true);
 						$("#inputNumberScene4").prop('disabled', true);
 						$("#inputNumberScene4").prop('placeholder', '63.99');
 						updateAlertOnQuestionChange();
 						break;
 					case 8:
 					 	$("#opcaoA").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoA").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
 						break;			
 			}
 		}

 		//Realiza as ações necessárias caso a resposta do aluno esteja correta (Adicionar "true" ao vetor de verificação, desabilitar os botõe e exibir o icone de seta para a direita)
 		function respostaCorreta() {
	  		$("#iconSetaDireita").show();

    		disableQuestionButtons();
    		corretas[questionNumber-1] = true;

 		}

 		//Realiza as ações necessárias caso a resposta do aluno esteja errada (Exibe alerta de resposta incorreta)
 		function respostaErrada() {
 			$("#alertAnswer").addClass("alert-danger");
	  		$("#alertAnswer").removeClass("alert-success");
  			$("#alertAnswer").html(dataJSON.mensagensQuestoes.respostaIncorreta);
  			$("#alertAnswer").show();
 		}

 		//Exibe o alerta de respsota correta (Método chamado quando o aluno acerta a questão, e quando muda de tela para uma questão já respondida)
 		function updateAlertOnQuestionChange() {
 		  	$("#alertAnswer").html(dataJSON.mensagensQuestoes.respostaCorreta);
    		$("#alertAnswer").show();
    		$("#alertAnswer").addClass("alert-success");
	  		$("#alertAnswer").removeClass("alert-danger");
 		}


	  	//Método utilizado para criar o gráfico utilizado nas questões 1 e 2
		function grafico1() {
			$(document).ready(function () {


				// Gera o gráfico
				Highcharts.chart('scene4Graph', {
				    chart: {
				        type: 'pie',
				    },
					title: {
						text: 'Utilização de energia elétrica por aparelhos eletrônicos'
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
						name: 'Aparelho',
						colorByPoint: true,
						data: [{
							name: 'Geladeira e Freezer',
							y: 30
						}, {
							name: 'Chuveiro elétrico',
							y: 25
		
						}, {
							name: 'Iluminação',
							y: 20
						}, {
							name: 'Televisão',
							y: 10
						}, {
							name: 'Ferro Elétrico',
							y: 6
						}, {
							name: 'Maquina de lavar',
							y: 5
						}, {
							name: 'Outros',
							y: 4
						}
						]
					}]
				});
			});
			}
	  	
	  	//Método utilizado para criar o gráfico utilizado nas questões 3 e 4
	 	function grafico2() {
	 		
			Highcharts.chart('scene4Graph', {
			    chart: {
			        type: 'column'
			    },
			    title: {
			        text: 'Consumo de energia elétrica de uma residência'
			    },
			    subtitle: {
			        text: 'Fonte: Professor Hugo Gomes'
			    },
			    xAxis: {
			        categories: [
			            'Jan',
			            'Fev',
			            'Mar',
			            'Abr',
			            'Mai',
			            'Jun',
			            'Jul',
			            'Ago',
			            'Set',
			            'Out',
			            'Nov',
			            'Dez'
			        ],
			        crosshair: true
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: 'KwH'
			        }
			    },
			    tooltip: {
					pointFormat: 'Consumo: <b>{point.y}</b> KwH',
			        shared: true
			    },
			    plotOptions: {
			        column: {
			            pointPadding: 0.2,
			            borderWidth: 0
			        }
			    },
			    series: [{
			        name: '',
			        data: [375, 300, 275, 280, 267, 254, 380, 310, 301, 312, 327, 382]
			    }]
			});



	 	}


	 	//Método utilizado parar criar o gráfico utilizado nas questões 5 e 6
	 	function grafico3() {
	 		Highcharts.chart('scene4Graph', {

			    title: {
			        text: 'Consumo de energia elétrica em KwH na residência de alunos'
			    },

			    subtitle: {
			        text: 'Fonte:'
			    },

			    yAxis: {
			        title: {
			            text: 'KwH'
			        }
			    },
			    xAxis: {
			    			        categories: [
						            'Set',
						            'Out',
						            'Nov',
						            'Dez',
						            'Jan',
						            'Fev',
						            'Mar',
						        ],
			        title: {
			            text: 'Meses'
			        }
			    },
			    legend: {
			        layout: 'vertical',
			        align: 'right',
			        verticalAlign: 'middle'
			    },

			    series: [{
			        name: 'Consumo',
			        data: [450, 550, 557, 723, 732, 752, 750]
			    }]

			});
	 	}
	 	//Método utilizado para criar o gráfico utilizado nas questões 7 e 8
	 	function grafico4() {
			$(document).ready(function () {


				// Gera o gráfico
				Highcharts.chart('scene4Graph', {
				    chart: {
				        type: 'pie',
				    },
					title: {
						text: 'Oferta interna de energia elétrica por fonte - Brasil, 2015'
					},
					subtitle: {
						text: "Fonte: Empresa de Pesquisa Energética – EPE"
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
                			format: '<b>{point.name}</b>: {point.percentage:.2f} %',


							},
							showInLegend: true
						}
					},
					series: [{
						name: 'Oferta',
						colorByPoint: true,
						data: [{
							name: 'Hidrelétrica',
							y: 64.0
						}, {
							name: 'Gás Natural',
							y: 12.79
		
						}, {
							name: 'Biomassa',
							y: 8
						}, {
							name: 'Derivados de Petróleo',
							y: 4.8
						}, {
							name: 'Carvão e Derivados',
							y: 4.5
						}, {
							name: 'Eólica',
							y: 3.5
						}, {
							name: 'Nuclear',
							y: 2.4
						}, {
							name: 'Solar',
							y: 0.01
						}
						]
					}]
				});
			});
			}



		function contentSwitcher() {
			if (ftTransmission) { //Gambiarra para funcionar o ocultamento/disable nos botões
				$("#iconSetaEsquerda").hide();
				$("#iconSetaDireita").hide();
				$('#setaTransmissaoDireita').toggleClass('glyphIconDisabled');
  				$('#setaTransmissaoEsquerda').toggleClass('glyphIconDisabled');
  				ftTransmission = false;
			}
			if (firstTimeTransmission) {
		  	  setTimeout(function () {
					switch (transmissionBeingShown) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								loadTransmissionData();
								contentSwitcher(++transmissionBeingShown);
								break;
							case 6:
								firstTimeTransmission = false;
								loadTransmissionData();
								$("#iconSetaEsquerda").show();
								$("#iconSetaDireita").show();
								$('#setaTransmissaoDireita').toggleClass('glyphIconDisabled');
								$('#setaTransmissaoEsquerda').toggleClass('glyphIconDisabled');
								break;

							}

				    }, 10000);
			}
			else {
				loadTransmissionData();
			}

		}

		function loadTransmissionData() {
				switch (transmissionBeingShown) {
							case 1:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title1);
								$('#imgCirculo').fadeOut(500);
								$('#textoScene7').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular1.gif").fadeIn(1000);
									$('#textoScene7').html(dataJSON.mensagensCaminhoEnergia.msg1).fadeIn(1000);
								});
								break;

							case 2:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title2);
								$('#imgCirculo').fadeOut(500);
								$('#textoScene7').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular2.gif").fadeIn(1000);
									$('#textoScene7').html(dataJSON.mensagensCaminhoEnergia.msg2).fadeIn(1000);
								});								
								break;
							case 3:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title3);
								$('#imgCirculo').fadeOut(500);
								$('#textoScene7').fadeOut(500);
								sleep(500).then(() => {
								$('#imgCirculo').attr("src", "assets/img/circular3.gif").fadeIn(1000);
								$('#textoScene7').html(dataJSON.mensagensCaminhoEnergia.msg3).fadeIn(1000);
								});	

								break;
							case 4:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title4);
								$('#imgCirculo').fadeOut(500);
								$('#textoScene7').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular4.gif").fadeIn(1000);
									$('#textoScene7').html(dataJSON.mensagensCaminhoEnergia.msg4).fadeIn(1000);
								});									
								break;
							case 5:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title5);
								$('#imgCirculo').fadeOut(500);
								$('#textoScene7').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular5.gif").fadeIn(1000);
									$('#textoScene7').html(dataJSON.mensagensCaminhoEnergia.msg5).fadeIn(1000);
								});									
								break;
							case 6:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title6);
								$('#imgCirculo').fadeOut(500);
								$('#textoScene7').fadeOut(500);
								sleep(500).then(() => {
								$('#imgCirculo').attr("src", "assets/img/circular6.gif").fadeIn(1000);
								$('#textoScene7').html(dataJSON.mensagensCaminhoEnergia.msg5).fadeIn(1000);
								});	

								setaTransmissaoClicavel = true;
								break;						
							}
			
		}


				$(document).on('click', '#setaTransmissaoDireita', function () {
						if (!($("#setaTransmissaoDireita").hasClass('glyphIconDisabled'))) {
							if (transmissionBeingShown < 6) {
								transmissionBeingShown++;
								loadTransmissionData();
							}
						}

					});

				$(document).on('click', '#setaTransmissaoEsquerda', function () {
					if (!($("#setaTransmissaoEsquerda").hasClass('glyphIconDisabled'))) {
						if (transmissionBeingShown > 1) {
							transmissionBeingShown--;
							loadTransmissionData();
						}
					}

					});








/* REMOVER ANTES DA VERSÃO FINAL */

				$(document).on('click', '#pularQuestoes', function () {
					$("#iconSetaDireita").show();
					nextScene();
					
					});










/* SCENE ? */

	function graphMatrizEnergetica() {
			var chart = Highcharts.chart('graphMatrizEnergetica', {
		    	chart: {
		        backgroundColor: 'rgba(0,0,0,0)',
		        type: 'pie',

			    },
			    title: {
			        text: 'Browser market shares January, 2015 to May, 2015'
			    },
			    tooltip: {
			        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			    },
			    plotOptions: {
			        pie: {
			            allowPointSelect: true,
			            cursor: 'pointer',
			            dataLabels: {
			                enabled: true,
			                format: '{point.name}: {point.y}',
			                style: {
                   				 textOutline: false, 
              				  }
			            }
			        }
			    },
			    series: [{
			        name: 'Brands',
			        colorByPoint: true,
			        data: [{
			            name: 'Hidrelétrica',
			            y: 33
			        }, {
			            name: 'Biomassa',
			            y: 45
			        }, {
			            name: 'Fóssil',
			            y: 22
			        }, {
			            name: 'G',
			            y: 31
			        }, {
			            name: 'ADASd',
			            y: 12
			        }, {
			            name: 'ASDD',
			            y: 1
			        }]
			    }]
			});

 	 chart.reflow();
	}






	  /* Funções Gerais */
	  	//Função que realiza a troca de uma cena para a próxima, bem como adicionar um sleep igual ao tempo de fade
	function nextScene() {
		if (scene == 332189123) {
		
		}
		else {
			unloadScene();
			scene++;
			sleep(fadeTime).then(() => {
				loadScene();
			});			

		}
	}
	
		//Função que realiza a troca de uma cena para a anterior, bem como adicionar um sleep igual ao tempo de fade
	function previousScene() {
		if (scene == 1) {
			
		}
		else {
			unloadScene();
			scene--;
			sleep(fadeTime).then(() => {
				loadScene();
			});				
		}
	}
	
	  	//Função que realiza o carregamento da cena de acordo com a variável "scene". Responsável por adicionar o fade à troca de cenas e realizar a alteração do título
	  function loadScene() {
			switch (scene) {
				case 1:
					$("#scene1").fadeIn(fadeTime);
					$("#scene1Text1").html("Olá " + nome + dataJSON.stringsGerais.scene01Balao01);
					$("#tituloGeral").html("");
					break;
					
				case 2:
					$("#scene2").fadeIn(fadeTime);
					$('#detalhesUsinas').hide();
					$('#additionalScene2').show();
					$("#tituloGeral").html(dataJSON.stringsGerais.title1);

					break;
					
				case 3:
					$("#scene3").fadeIn(fadeTime);
					$("#tituloGeral").html(dataJSON.stringsGerais.title2);
					$("#containerImposto").hide();
					break;
				case 4:
					$("#scene4").fadeIn(fadeTime);
					$("#imagensCena4").hide();
					$("#iconSetaDireita").show();

					break;
				case 5:
					$("#scene5").fadeIn(fadeTime);
					loadQuestion();
					listeningToKeyPress = true;
					break;
				case 6:
					$("#scene6").fadeIn(fadeTime);
					$("#iconSetaDireita").show();
					break;
				case 7:
					$("#scene7").fadeIn(fadeTime);
					$("#iconSetaDireita").show();
					contentSwitcher();
					break;
				case 8:
					$("#sceneX").fadeIn(fadeTime);
					graphMatrizEnergetica();
					break;
			}
	  }
	  
	  
	  
	  	//Função que realiza a remoção da cena atual, inserindo um fade para que ela seja removida
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
 					break;
				case 5:
					$("#scene5").fadeOut(fadeTime);
					listeningToKeyPress = false;
					break;
				case 6:
					$("#scene6").fadeOut(fadeTime);
 					break;
				case 7:
					$("#scene7").fadeOut(fadeTime);
					transmissionBeingShown = 1;
 					break;
 				case 8:
 					$("#sceneX").fadeOut(fadeTime);
 					break;
			}
	  }
	 
	  