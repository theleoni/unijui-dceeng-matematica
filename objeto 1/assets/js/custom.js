  var nome;
  var i = -11.4;
  var scene = 0;
  var transmissionBeingShown = 2;
  var fadeTime = 500;
  var questionNumber = 1;
  var listeningToKeyPress = false;
  var questaoSelecionada;
  var corretas = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  var updateText = [false, false];
  var firstTimeTransmission = true;
  var ftTransmission = true;
  var dataJSON;
  var respostaCorreta7 = 63.99;
  var respostaCorreta18 = 4.50;
  var respostasCorretasQuestion10 = [45, 14, 78];
  var inputRespostasQuestao10;
  var inputRespostasConta;
  var respostasConta = [25.5, 37.5, 21.1, 13.5, 2.4];
  var respostasMatrizEnergetica = [8.86, 1251, 0.01, 2, 2412, 5.11];
  var inputRespostasMatrizEnergetica;
  var clicouRecentemente = false;
  var graficoMatrizGerado = false;
  var bandeiraSelecionada;

function preloadVideo(arrayOfmp4){

	    $(arrayOfmp4).each(function () {
			var req = new XMLHttpRequest();
			req.open('GET', this, true);
			req.responseType = 'blob';

			req.onload = function() {
			   if (this.status === 200) {
			      var videoBlob = this.response;
			      var vid = URL.createObjectURL(videoBlob); 
			      this.src = vid;
			   }
			}
			req.onerror = function() {
			   // Error
			}

			req.send();
    });
	
}

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
		$("#sceneIntroGeral").hide();
		$("#sceneTiposUsinas").hide();
		$("#sceneImpostos").hide();
		$("#sceneIntroGraficos").hide();
		$("#sceneQuestoesGraficos").hide();
		$("#sceneIntroCaminhos").hide();
		$("#sceneCaminhosEnergia").hide();
		$("#sceneMatrizEnergetica").hide();
		$("#scenePotenciaEletrodomesticos").hide();
		$("#sceneVideo").hide();
		$("#sceneIntroBandeirasEnergia").hide();
		$("#sceneBandeirasEnergia").hide();
		$("#sceneQuestaoImposto").hide();
		$("#sceneQuestoesBandeiras").hide();
		$("#imagensFixas").hide();
		$("#sceneDistribuicaoTarifa").hide();
		preloadVideo([
			'assets/img/biomassa_animada.mp4',
			'assets/img/eolica_animada.mp4',
			'assets/img/fossil_animada.mp4',
			'assets/img/nuclear_animada.mp4',
			'assets/img/hidreletrica_animada.mp4',
			'assets/img/solar_animada.mp4'

			])
		preload([
    'assets/img/detalhe_biomassa.png',
    'assets/img/detalhe_hidreletrica.png',
    'assets/img/detalhe_eolica.png',
    'assets/img/detalhe_fossil.png',
    'assets/img/detalhe_nuclear.png',
    'assets/img/detalhe_solar.png',
    'assets/img/biomassa.png',
    'assets/img/eolica.png',
    'assets/img/fossil.png',
    'assets/img/hidreletrica.png',
    'assets/img/nuclear.png',
    'assets/img/solar.png',
    'assets/img/bubble1.png',
    'assets/img/bubble2.png',
    'assets/img/imagem1CenaIntroGraficos.png',
    'assets/img/imagem2CenaIntroGraficos.png',
    'assets/img/imagem3CenaIntroGraficos.png',
    'assets/img/imagem4CenaIntroGraficos.png',
    'assets/img/imagem5CenaIntroGraficos.png',
    'assets/img/imagem6CenaIntroGraficos.png',
    'assets/img/imagem7CenaIntroGraficos.png',
    'assets/img/CIP.png',
    'assets/img/COFINS.png',
    'assets/img/ICMS.png',
    'assets/img/PISPASEP.png',
    'assets/img/TUST.png',
    'assets/img/engenheiro_esquerda.png',
    'assets/img/circular1.gif',
    'assets/img/circular2.gif',
    'assets/img/circular3.gif',
    'assets/img/circular4.gif',
    'assets/img/circular5.gif',
    'assets/img/circular6.gif'
]);

		


});


  		$(document).on('click', '#botaoNome', function () {
  			saveName();
});

  		//Realiza as ações necessárias ao se clicar na seta direita (Troca de cena ou troca de questão)
		$(document).on('click', '#iconSetaDireita', function () {
			if (!clicouRecentemente) {


				//Delay entre as trocas de tela
				clicouRecentemente = true;
	     			  setTimeout(function(){ 
	     			  	clicouRecentemente = false; 
	     			  }, 1); 



				switch (scene) {
					case 1:
					case 2:
					case 5:
					case 6:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 15:
						nextScene();
						break;
					case 14:
						nextScene();
						break;

					case 13:
						switch(questionNumber) {
							default: 
								questionNumber++;
								loadQuestion();
								break;
							case 18:
								questionNumber++;
								nextScene();
								break;
						}
						break;

					case 7:
						switch(questionNumber) {
							default: 
								questionNumber++;
								loadQuestion();
								break;
							case 15:
								questionNumber++;
								nextScene();
								break;
						}
						break;

					case 3:
						if (updateText[0] == false) {
							$("#sceneIntroGraficosText1").html(dataJSON.mensagensQuestoes.mensagem2IntroQuestoesIniciais);
							updateText[0] = true;
							$("#imagensIntroGraficos").show();
							showConjuntoImagens1IntroQuestoesGraficos();
							break;
						}
						else if (updateText[1] == false) {
							$("#sceneIntroGraficosText1").html(dataJSON.mensagensQuestoes.mensagem3IntroQuestoesIniciais);
							showConjuntoImagens2IntroQuestoesGraficos();

							updateText[1] = true;
							break;		
						}
						else {
							nextScene();
							break;	
						}
					case 4:
						switch(questionNumber) {
							default: 
								questionNumber++;
								loadQuestion();
								break;
							case 10:
								questionNumber++;
								nextScene();
								break;

						}
			}
				} else {
					alert("Espere para passar à próxima tela")
				}

		});


		 //Realiza as ações necessárias ao se clicar na seta esquerda (Troca de cena ou troca de questão)
		$(document).on('click', '#iconSetaEsquerda', function () {
			switch (scene) {
				case 1:
				case 2:
				case 6:
				case 9:
				case 10:
				case 11:
				case 12:
				case 15:
					previousScene();
					break;
				case 8:
				case 5:
				case 14:
					questionNumber--;
					previousScene();
					break;
				case 13:
				switch(questionNumber) {
						case 16:
							previousScene();
							break;
						default:
							questionNumber--;
							loadQuestion();
							break;
					}
					break;
				case 3:
					if(updateText[0] == true && updateText[1] == true) {
						$("#sceneIntroGraficosText1").html(dataJSON.mensagensQuestoes.mensagem2IntroQuestoesIniciais);
						updateText[1] = false;
						showConjuntoImagens1IntroQuestoesGraficos();

						break;
					} else if (updateText[0] == true) {
						$("#sceneIntroGraficosText1").html(dataJSON.mensagensQuestoes.mensagemIntroQuestoesIniciais);
						updateText[0] = false;
						$("#imagensIntroGraficos").fadeOut(300);
						break;
					} else {
					previousScene();
					break;
				}
				case 4:
					switch(questionNumber) {
						case 1:
							previousScene();


							//Tempo de espera até a cena carregar, ou as imagens não irão aparecer
							sleep(500).then(() => {
								$("#imagensIntroGraficos").show();
							});

							break;
						default:
							questionNumber--;
							loadQuestion();
							break;
					}
					break;
				case 7:
					switch(questionNumber) {
						case 11:
							questionNumber--;
							previousScene();
							break;
						default:
							questionNumber--;
							loadQuestion();
							break;
					}	
					break;



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
	 	$('#additionalSceneTiposUsinas').hide();
		$('#mensagem').hide();
		$('#imagemEngenheiroTiposUsinas').hide();
		hideFixedImages();
		switch (usina) {
			case 'hidreletrica': 
				$('#imgUsina').attr("src", "assets/img/hidreletrica_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaHidreletrica);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleHidreletrica);
				$('#sceneTiposUsinasSub1').css("background-color", "#008CAF")
				$('#imgDetalhesSceneTiposUsinas').attr('src', 'assets/img/detalhe_hidreletrica.png')

				break;
			case 'eolica':
				$('#imgUsina').attr("src", "assets/img/eolica_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaEolica);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleEolica);
				$('#sceneTiposUsinasSub1').css("background-color", "#008CAF")
				$('#imgDetalhesSceneTiposUsinas').attr('src', 'assets/img/detalhe_eolica.png')
				break;
			case 'fossil':
				$('#imgUsina').attr("src", "assets/img/fossil_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaFossil);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleFossil);
				$('#sceneTiposUsinasSub1').css("background-color", "#0C99AB")
				$('#imgDetalhesSceneTiposUsinas').attr('src', 'assets/img/detalhe_fossil.png')


				break;
			case 'nuclear':
				$('#imgUsina').attr("src", "assets/img/nuclear_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaNuclear);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleNuclear);
				$('#sceneTiposUsinasSub1').css("background-color", "#0C99AB")
				$('#imgDetalhesSceneTiposUsinas').attr('src', 'assets/img/detalhe_nuclear.png')


				break;
			case 'solar':
				$('#imgUsina').attr("src", "assets/img/solar_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaSolar);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleSolar);
				$('#sceneTiposUsinasSub1').css("background-color", "#0C99AB")
				$('#imgDetalhesSceneTiposUsinas').attr('src', 'assets/img/detalhe_solar.png')

				break;	
			case 'biomassa':
				$('#imgUsina').attr("src", "assets/img/biomassa_animada.mp4");
				$('#textoUsina').html(dataJSON.textosUsinas.usinaBiomassa);
				$('#tituloUsina').html(dataJSON.textosUsinas.titleBiomassa);
				$('#sceneTiposUsinasSub1').css("background-color", "#008CAF")
				$('#imgDetalhesSceneTiposUsinas').attr('src', 'assets/img/detalhe_biomassa.png')

				break;	
		}
	}
	

	  //Restaura o estado da cena 2, após a visualização dos dados da usina
	function restoresceneTiposUsinas() {
		loadScene();
		showFixedImages();
		$('#imagemEngenheiroTiposUsinas').show();
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
	  
	  

	  	/* Intro questões */
	
	function showConjuntoImagens1IntroQuestoesGraficos () {
		$('#sceneIntroGraficosImg1').attr("src", "assets/img/imagem1CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg1').attr('title', 'Jornais');
		$('#sceneIntroGraficosImg2').attr("src", "assets/img/imagem2CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg2').attr('title', 'Livros');
		$('#sceneIntroGraficosImg3').attr("src", "assets/img/imagem3CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg3').attr('title', 'Computador');
		$('#sceneIntroGraficosImg4').attr("src", "assets/img/imagem4CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg4').attr('title', 'Televisão');
		$('#sceneIntroGraficosImg1').show().siblings().show();

	}
	
	function showConjuntoImagens2IntroQuestoesGraficos() {
		$('#sceneIntroGraficosImg2').attr("src", "assets/img/imagem5CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg2').attr('title', 'Coleta');
		$('#sceneIntroGraficosImg3').attr("src", "assets/img/imagem6CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg3').attr('title', 'Descrição, Análise, e Interpretação');
		$('#sceneIntroGraficosImg4').attr("src", "assets/img/imagem7CenaIntroGraficos.png").fadeIn(500);
		$('#sceneIntroGraficosImg4').attr('title', 'Organização');
		$('#sceneIntroGraficosImg1').show().siblings().show();
		$('#sceneIntroGraficosImg1').hide();



	}

	  /* Scene 4 */
	  //Carrega a questão, tendo como base a variável questionNumber
	  function loadQuestion() {

	  	switch (questionNumber) {
	  		case 1:

	  			$("#opcaoA").show().siblings().show();
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao1.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao1.textoQuestao)
	  			$("#opcaoA").html(dataJSON.questao1.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao1.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao1.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao1.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();
	  			$("#tabelaQuestoesGraficos").hide();
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
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao2.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao2.textoQuestao)
	  			$("#opcaoA").html(dataJSON.questao2.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao2.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao2.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao2.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();

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
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao3.numeroQuestao);
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao3.textoQuestao);

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
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao4.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao4.textoQuestao);
	  			$("#inputRespostasceneQuestoesGraficos").hide();

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
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao5.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao5.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao5.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao5.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao5.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao5.alternativa4Questao);
	  			$("#questionGroup").hide();
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();

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
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao6.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao6.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao6.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao6.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao6.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao6.alternativa4Questao);
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#questionGroup").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();
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
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao7.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao7.textoQuestao);
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#inputRespostasceneQuestoesGraficos").show();
	  			grafico4();

	  				if (corretas[6] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;

			case 8:
				$("#opcaoA").show().siblings().show();
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao8.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao8.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao8.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao8.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao8.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao8.alternativa4Questao);
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#questionGroup").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();
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

			case 9:
				$("#opcaoA").show().siblings().show();
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao9.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao9.textoQuestao )
	  			$("#opcaoA").html(dataJSON.questao9.alternativa1Questao);
	  			$("#opcaoB").html(dataJSON.questao9.alternativa2Questao);
	  			$("#opcaoC").html(dataJSON.questao9.alternativa3Questao);
	  			$("#opcaoD").html(dataJSON.questao9.alternativa4Questao);
	  			$("#tabelaQuestoesGraficos").hide();
	  			$("#questionGroup").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();
	  			grafico5();

	  				if (corretas[8] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;
	  	

	  		case 10:
				$("#opcaoA").hide().siblings().hide();
	  			$("#sceneIntroGraficosQuestionNumber").html(dataJSON.questao10.numeroQuestao);
	  			$("#sceneIntroGraficosQuestion").html(dataJSON.questao10.textoQuestao )
	  			$("#questionGroup").hide();
	  			$("#inputRespostasceneQuestoesGraficos").hide();
	  			$("#enviarResposta").show();
	  			$("#enviarResposta").prop('disabled', false);
				$("#tabelaQuestoesGraficos").show();

	  			grafico6();

	  				if (corretas[9] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();
					}
				break;

			case 11:

				$("#questionNumberMatrizEnergetica").html(dataJSON.questao11.numeroQuestao);
				$("#questionMatrizEnergetica").html(dataJSON.questao11.textoQuestao);
				$("#botaoMatrizQuestoesSim").hide();
				$("#botaoMatrizQuestoesNao").hide();			
				$("#inputRespostasMatrizEnergetica").show();
				$("#enviarRespostaMatriz").show();

					if (corretas[10] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();

					}
				break;
			case 12:
				$("#questionNumberMatrizEnergetica").html(dataJSON.questao12.numeroQuestao);
				$("#questionMatrizEnergetica").html(dataJSON.questao12.textoQuestao);
				$("#botaoMatrizQuestoesSim").hide();
				$("#botaoMatrizQuestoesNao").hide();
				$("#inputRespostasMatrizEnergetica").show();
				$("#enviarRespostaMatriz").show();

					if (corretas[11] == false) {
						$("#iconSetaDireita").hide();
						resetQuestionButtons();
					}
					else {
						disableQuestionButtons();
						$("#iconSetaDireita").show();

					}
				break;

				case 13:
					$("#questionNumberMatrizEnergetica").html(dataJSON.questao13.numeroQuestao);
					$("#questionMatrizEnergetica").html(dataJSON.questao13.textoQuestao);
					$("#botaoMatrizQuestoesSim").hide();
					$("#botaoMatrizQuestoesNao").hide();

					$("#inputRespostasMatrizEnergetica").show();
					$("#enviarRespostaMatriz").show();


						if (corretas[12] == false) {
							$("#iconSetaDireita").hide();
							resetQuestionButtons();
						}
						else {
							disableQuestionButtons();
							$("#iconSetaDireita").show();

						}
				break;

				case 14:
					$("#questionNumberMatrizEnergetica").html(dataJSON.questao14.numeroQuestao);
					$("#questionMatrizEnergetica").html(dataJSON.questao14.textoQuestao);
					$("#botaoMatrizQuestoesSim").hide();
					$("#botaoMatrizQuestoesNao").hide();

					$("#inputRespostasMatrizEnergetica").show();
					$("#enviarRespostaMatriz").show();


						if (corretas[13] == false) {
							$("#iconSetaDireita").hide();
							resetQuestionButtons();
						}
						else {
							disableQuestionButtons();
							$("#iconSetaDireita").show();

						}
				break;

				case 15:
					$("#questionNumberMatrizEnergetica").html(dataJSON.questao15.numeroQuestao);
					$("#questionMatrizEnergetica").html(dataJSON.questao15.textoQuestao);
					$("#botaoMatrizQuestoesSim").show();
					$("#botaoMatrizQuestoesNao").show();

					$("#inputRespostasMatrizEnergetica").hide();
					$("#enviarRespostaMatriz").hide();

						if (corretas[14] == false) {
							$("#iconSetaDireita").hide();
							resetQuestionButtons();
						}
						else {
							disableQuestionButtons();
							$("#iconSetaDireita").show();

						}
				break;

				case 16:
					$("#questionNumberBandeiras").html(dataJSON.questao16.numeroQuestao)
					$("#questaoBandeira").html(dataJSON.questao16.textoQuestao);
					$("#bandeirasOpcoes").show();
					$("#inputBandeiras").hide();

						if (corretas[15] == false) {
							$("#iconSetaDireita").hide();
							resetQuestionButtons();
						}
						else {
							disableQuestionButtons();
							$("#iconSetaDireita").show();

						}
				break;


				case 17:
					$("#questionNumberBandeiras").html(dataJSON.questao17.numeroQuestao)
					$("#questaoBandeira").html(dataJSON.questao17.textoQuestao);
					$("#bandeirasOpcoes").show();
					$("#inputBandeiras").hide();

						if (corretas[16] == false) {
							$("#iconSetaDireita").hide();
							resetQuestionButtons();
						}
						else {
							disableQuestionButtons();
							$("#iconSetaDireita").show();

						}
				break;


				case 18:
					$("#questionNumberBandeiras").html(dataJSON.questao18.numeroQuestao)
					$("#questaoBandeira").html(dataJSON.questao18.textoQuestao);
					$("#bandeirasOpcoes").hide();
					$("#inputBandeiras").show();

						if (corretas[17] == false) {
							$("#iconSetaDireita").hide();
							resetQuestionButtons();
						}
						else {
							disableQuestionButtons();
							$("#iconSetaDireita").show();

						}
				break;

				case 19:
					$("#questionNumberImposto").html(dataJSON.questao19.numeroQuestao);
					$("#questionImposto").html(dataJSON.questao19.textoQuestao);
					grafico7();
						if (corretas[18] == false) {
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
	  				if($("#inputNumbersceneQuestoesGraficos").val() == respostaCorreta7) {
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
	  			case 9:
	  				if($("#opcaoD").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;
	  			case 10:
	  				var testeLocal = false;
		  			getInputValuesQuestion10();
		  			for (var i = 0; i < respostasCorretasQuestion10.length; i++) {
		  				if (inputRespostasQuestao10[i].val() == respostasCorretasQuestion10[i]) {
		  				} else {
		  					respostaErrada();
		  					testeLocal = true;
		  				}
		  			}
		  			if (testeLocal == false) {
		  				respostaCorreta();
		  			}
		  			break;

		  		case 11:
		  			if ($("#inputRespostasMatrizEnergetica").val().toLowerCase() == "fóssil" || $("#inputRespostasMatrizEnergetica").val().toLowerCase() == "fossil" ) {
						respostaCorreta();	
						} else {
						respostaErrada();
						}
					break;
		  		case 12:
		  			if ($("#inputRespostasMatrizEnergetica").val().toLowerCase() == "nuclear") {
						respostaCorreta();	
						} else {
						respostaErrada();
						}
					break;
				case 13:
		  			if ($("#inputRespostasMatrizEnergetica").val().toLowerCase() == "hidrelétrica" || $("#inputRespostasMatrizEnergetica").val().toLowerCase() == "hidreletrica")  {
						respostaCorreta();	
						} else {
						respostaErrada();
						}
					break;
				case 14:
		  			if ($("#inputRespostasMatrizEnergetica").val().toLowerCase() == "aneel")  {
						respostaCorreta();	
						} else {
						respostaErrada();
						}
					break;
				case 15:
	  				if($("#botaoMatrizQuestoesNao").hasClass("btn-primary")) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();

	  				}
	  				break;
	  			case 16:
	  				if ($("#bandeiraVerdeOpcao").is(bandeiraSelecionada)) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;
	  			case 17:
	  			if ($("#bandeiraVermelhaOpcao").is(bandeiraSelecionada)) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;
	  			case 18:
	  				if ($("#inputValorBandeiras").val() == respostaCorreta18) {
	  					respostaCorreta();
	  				}
	  				else {
	  					respostaErrada();
	  				}
	  				break;
	  		
	  			case 19:
		  			if ($("#radioImpostos input[type='radio']:checked").val() == "a") {
		  				respostaCorreta();
		  			}
		  			else {
		  				respostaErrada()
		  			}
		  			break;

	  }
}


		function getInputValuesQuestion10() {
			inputRespostasQuestao10 = 
			[
			$("#inputPotenciaImpressora"),
			$("#inputPotenciaLampada"),
			$("#inputPotenciaTelevisor")
			      ];
		}
	  //Realiza a troca da seleção e salva a seleção atual em uma variável
	  function selectAnswer (elemento) {
	  	$(elemento).toggleClass('btn-primary').siblings().removeClass('btn-primary');
	  }

	  //Binda o evento de clicar no botão à troca de seleção
		$(document).on('click', '.btn-questoes', function () {
			selectAnswer(this);
		});
	
		  //Binda o evento de clicar no botão à troca de seleção nas questões das matrizes
		$(document).on('click', '.btnQuestoesMatriz', function () {
			selectAnswer(this);
		});
	

		//Binda o evento de clicar no botão de enviar ao método checkAnswer
		$(document).on('click', '#enviarResposta', function () {
			checkAnswer();				
		});

		$(document).on('click', '#enviarRespostaMatriz', function () {
			checkAnswer();
		});

		$(document).on('click', '#enviarRespostaBandeiras', function () {
			checkAnswer();
		});

		$(document).on('click', '#botaoMatrizQuestoesNao', function () {
			checkAnswer();
		});

		$(document).on('click', '#botaoMatrizQuestoesSim', function () {
			checkAnswer();
		});

		$(document).on('click', '#enviarRespostaTabelaImpostos', function() {
			checkTableConta();
		});

		$(document).on('click', '#enviarRespostaImposto', function () {
			checkAnswer();
		});


		$(document).on('click', '.bandeiraOpcao', function () {
			if (corretas[questionNumber-1] == false) {
			bandeiraSelecionada = $(this);
			checkAnswer();
		}
		});


		//Verifica se as teclas A, B, C, D ou ENTER foram pressionadas, e realiza a função respectiva (Selecionar alternativa / Enviar resposta)
 		$(document).bind('keydown', function(event) {
				if(listeningToKeyPress) {
					var code = event.keyCode;
					if (scene == 4) {
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
				else if (scene == 7) {
					if (code == 13) {
						$('#enviarRespostaMatriz').trigger('click');
					}
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
 			 		case 9:
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
		 				$("#inputNumbersceneQuestoesGraficos").prop('type', 'number');
		 			 	$("#alertAnswer").hide();
		 				break;
		 			case 10:
		 				$("#enviarResposta").prop('disabled', false);
		 			 	$("#alertAnswer").hide();
		 			 	break;
		 			case 11: 
		 			case 12:
		 			case 13:
		 			case 14:
		 			 	$("#inputRespostasMatrizEnergetica").prop('disabled', false);
		 			 	$("#inputRespostasMatrizEnergetica").val("");
		 			 	$("#alertAnswerMatriz").hide();
		 			 	break;
		 			 case 15:
		 			 	$("#botaoMatrizQuestoesNao").prop('disabled',false).siblings().prop('disabled',false);
		 				$("#botaoMatrizQuestoesNao").removeClass('btn-primary').siblings().removeClass('btn-primary');
						$("#alertAnswerMatriz").hide();
		 				break;

		 			case 16:
		 			case 17:
						$("#bandeiraVerdeOpcao").attr("src", "assets/img/bandeiraVerde.png")
						$("#bandeiraAmarelaOpcao").attr("src", "assets/img/bandeiraAmarela.png")
						$("#bandeiraVermelhaOpcao").attr("src", "assets/img/bandeiraVermelha.png")
						$('.bandeiraOpcao').css('cursor','pointer');
						$("#alertAnswerBandeiras").hide();

		 				break;


		 			case 18:
		 				$("#enviarRespostaBandeiras").prop('disabled', false);
		 			 	$("#inputValorBandeiras").val("");
		 				$("#alertAnswerBandeiras").hide();

		 				break;

		 			case 19:
		 				$("#enviarRespostaImposto").prop('disabled', false);
		 			 	$("#alertAnswerImposto").hide();
		 			 	break;
 			 	}



 			}
 			//Desabilitada os botões de resposta, chama método para exibir a mensagem de resposta correta,  e deixa a resposta marcada selecionada (Para após o aluno ter respondido corretamente a questão)
 			function disableQuestionButtons() 	{

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
 						$("#inputNumbersceneQuestoesGraficos").prop('disabled', true);
 						$("#inputNumbersceneQuestoesGraficos").prop('placeholder', '63.99');
 						updateAlertOnQuestionChange();
 						break;
 					case 8:
 					 	$("#opcaoA").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoA").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
 						break;
 					case 9:			
 					 	$("#opcaoD").prop('disabled', false).siblings().prop('disabled', true);
 						$("#opcaoD").toggleClass('btn-primary').siblings().removeClass('btn-primary');
						updateAlertOnQuestionChange();
						break;
					case 10: 
						for (var i = 0; i < respostasCorretasQuestion10.length; i++) {
							inputRespostasQuestao10[i].prop('disabled', true);
						}

						updateAlertOnQuestionChange();
						break;
					case 11: 
						$("#inputRespostasMatrizEnergetica").prop('disabled', true);
						updateAlertOnQuestionChange();
						$("#inputNumbersceneQuestoesGraficos").prop('placeholder', 'Fóssil');

						break;
					case 12:
						$("#inputRespostasMatrizEnergetica").prop('disabled', true);
						$("#inputNumbersceneQuestoesGraficos").prop('placeholder', 'Nuclear');

						updateAlertOnQuestionChange();
						break;
					case 13:
						$("#inputRespostasMatrizEnergetica").prop('disabled', true);
						$("#inputNumbersceneQuestoesGraficos").prop('placeholder', 'Hidrelétrica');
						updateAlertOnQuestionChange();
						break;
					case 14:
						$("#inputRespostasMatrizEnergetica").prop('disabled', true);
						$("#inputNumbersceneQuestoesGraficos").prop('placeholder', 'ANEEL');
						updateAlertOnQuestionChange();
						break;
 					case 15:			
 					 	$("#botaoMatrizQuestoesNao").prop('disabled', false);
 					 	$("#botaoMatrizQuestoesSim").prop('disabled', true);
 						$("#botaoMatrizQuestoesNao").toggleClass('btn-primary');
						$("#botaoMatrizQuestoesSim").removeClass('btn-primary');
						updateAlertOnQuestionChange();
						break;

					case 16:
						$("#bandeiraVerdeOpcao").attr("src", "assets/img/bandeiraVerde.png")
						$("#bandeiraAmarelaOpcao").attr("src", "assets/img/bandeiraCinza.png")
						$("#bandeiraVermelhaOpcao").attr("src", "assets/img/bandeiraCinza.png")
						$('.bandeiraOpcao').css('cursor','not-allowed');
						updateAlertOnQuestionChange();
						break;
					case 17:
						$("#bandeiraVerdeOpcao").attr("src", "assets/img/bandeiraCinza.png")
						$("#bandeiraAmarelaOpcao").attr("src", "assets/img/bandeiraCinza.png")
						$("#bandeiraVermelhaOpcao").attr("src", "assets/img/bandeiraVermelha.png")
						$('.bandeiraOpcao').css('cursor','not-allowed');
						updateAlertOnQuestionChange();

						break;

					case 18:
		 				$("#enviarRespostaBandeiras").prop('disabled', true);
		 				$("#inputValorBandeiras").prop('disabled', "true");
		 			 	$("#inputValorBandeiras").prop('placeholder', "4,50");
		 				$("#alertAnswerBandeiras").hide();
						updateAlertOnQuestionChange();

		 				break;

		 			case 19:
		 				$("#radioButtonA").prop('checked', true);
		 				$("#radioButtonA").prop('disabled', false).siblings().prop('disabled', true);
		 				$("#alertAnswerImposto").hide();
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
 			if (questionNumber <= 10) {
	 			$("#alertAnswer").addClass("alert-danger");
		  		$("#alertAnswer").removeClass("alert-success");
	  			$("#alertAnswer").html(dataJSON.mensagensQuestoes.respostaIncorreta);
	  			$("#alertAnswer").show(); 
  			} else if (questionNumber > 10 && questionNumber < 16) {
	  			$("#alertAnswerMatriz").addClass("alert-danger");
		  		$("#alertAnswerMatriz").removeClass("alert-success");
	  			$("#alertAnswerMatriz").html(dataJSON.mensagensQuestoes.respostaIncorreta);
	  			$("#alertAnswerMatriz").show(); 
  			} else if (questionNumber >= 16 && questionNumber < 19) {
	  			$("#alertAnswerBandeiras").addClass("alert-danger");
		  		$("#alertAnswerBandeiras").removeClass("alert-success");
	  			$("#alertAnswerBandeiras").html(dataJSON.mensagensQuestoes.respostaIncorreta);
	  			$("#alertAnswerBandeiras").show();   			
	  		} else if (questionNumber >= 19) {
	  			$("#alertAnswerImposto").addClass("alert-danger");
		  		$("#alertAnswerImposto").removeClass("alert-success");
	  			$("#alertAnswerImposto").html(dataJSON.mensagensQuestoes.respostaIncorreta);
	  			$("#alertAnswerImposto").show();  
	  		}
 		}

 		//Exibe o alerta de respsota correta (Método chamado quando o aluno acerta a questão, e quando muda de tela para uma questão já respondida)
 		function updateAlertOnQuestionChange() {
 			if (questionNumber <= 10) {
 		  	$("#alertAnswer").html(dataJSON.mensagensQuestoes.respostaCorreta);
    		$("#alertAnswer").show();
    		$("#alertAnswer").addClass("alert-success");
	  		$("#alertAnswer").removeClass("alert-danger"); 
	  	} else if (questionNumber > 10 && questionNumber < 16) {
	  		$("#alertAnswerMatriz").html(dataJSON.mensagensQuestoes.respostaCorreta);
    		$("#alertAnswerMatriz").show();
    		$("#alertAnswerMatriz").addClass("alert-success");
	  		$("#alertAnswerMatriz").removeClass("alert-danger"); 
	  	} else if (questionNumber >= 16 && questionNumber < 19) {
	  		$("#alertAnswerBandeiras").html(dataJSON.mensagensQuestoes.respostaCorreta);
    		$("#alertAnswerBandeiras").show();
    		$("#alertAnswerBandeiras").addClass("alert-success");
	  		$("#alertAnswerBandeiras").removeClass("alert-danger"); 
	  	} else if (questionNumber >= 19) {
	  		$("#alertAnswerImposto").html(dataJSON.mensagensQuestoes.respostaCorreta);
    		$("#alertAnswerImposto").show();
    		$("#alertAnswerImposto").addClass("alert-success");
	  		$("#alertAnswerImposto").removeClass("alert-danger"); 
	  	}
 		}


    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('img[data-alt-src]').each(function() { 
            new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });

	  	//Método utilizado para criar o gráfico utilizado nas questões 1 e 2
		function grafico1() {
			$(document).ready(function () {


				// Gera o gráfico
				Highcharts.chart('sceneQuestoesGraph', {
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
	 		
			Highcharts.chart('sceneQuestoesGraph', {
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
			            text: 'kWh'
			        }
			    },
			    tooltip: {
					pointFormat: 'Consumo: <b>{point.y}</b> kWh',
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
	 		Highcharts.chart('sceneQuestoesGraph', {

			    title: {
			        text: 'Consumo de energia elétrica em kWh na residência de alunos'
			    },

			    subtitle: {
			        text: 'Fonte:'
			    },

			    yAxis: {
			        title: {
			            text: 'kWh'
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
				Highcharts.chart('sceneQuestoesGraph', {
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


	 	//Método utilizado parar criar o gráfico utilizado na questão 9
			function grafico5() {
				Highcharts.chart('sceneQuestoesGraph', {
				    chart: {
				        type: 'bar'
				    },
				    title: {
				        text: 'Consumo de energia elétrica por região geográfica em Janeiro de 2017 em GWh'
				    },
				    subtitle: {
				        text: 'Fonte: '
				    },
				    xAxis: {
				        categories: ['Centro-Oeste', 'Sul', 'Sudeste', 'Nordeste', 'Norte'],
				        title: {
				            text: 'Região'
				        }
				    },
				    yAxis: {
				        min: 0,
				        title: {
				            text: 'Consumo (GWh)',
				            align: 'high'
				        },
				        labels: {
				            overflow: 'justify'
				        }
				    },
				    tooltip: {
				        valueSuffix: ' GWh'
				    },
				    plotOptions: {
				        bar: {
				            dataLabels: {
				                enabled: true
				            }
				        }
				    },
				    legend: {
				        layout: 'vertical',
				        align: 'right',
				        verticalAlign: 'top',
				        x: -40,
				        y: 80,
				        floating: true,
				        borderWidth: 1,
				        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				        shadow: true
				    },
				    credits: {
				        enabled: false
				    },
				    series: [{
				        name: 'Consumo de energia',
				        data: [2865, 7281, 19679, 6731, 2752]
				    }]
				});
			}





	  	//Método utilizado para criar o gráfico utilizado na questão 10
	 	function grafico6() {
	 		
			Highcharts.chart('sceneQuestoesGraph', {
			    chart: {
			        type: 'column'
			    },
			    title: {
			        text: 'Potência média por aparelho (Watts)'
			    },
			    subtitle: {
			        text: 'Fonte: '
			    },
			    xAxis: {
			        categories: [
			            'Celular',
			            'Lâmpada',
			            'Impressora',
			            'Televisor 21\'',
			            'Ventilador'
			        ],
			        crosshair: true
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: 'Watts'
			        }
			    },
			    tooltip: {
					pointFormat: 'Potência: {point.y}',
			        shared: true
			    },
			    plotOptions: {
			        column: {
			            pointPadding: 0.2,
			            borderWidth: 0
			        }
			    },
			    series: [{
			        name: 'Potência em Watts',
			        data: [7, 14, 45, 78, 100]
			    }]
			});



	 	}


 		function grafico7() {
			$(document).ready(function () {


				// Gera o gráfico
				Highcharts.chart('graphImposto', {
				    chart: {
				        type: 'pie',
				    },
					title: {
						text: 'Valor final da energia elétrica'
					},
					subtitle: {
						text: "Fonte: ?"
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
						name: 'Oferta',
						colorByPoint: true,
						data: [{
							name: 'Tributos: ICMS e PIS/COFINS',
							y: 29.5
						}, {
							name: 'Parcela A: Compra de energia, Transmissão de energia, e Encargos Setoriais',
							y: 53.5
		
						}, {
							name: 'Parcela B: Distribuição de Energia',
							y: 17
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
				$('#setaTransmissaoDireita').toggleClass('disabledCursor');
  				$('#setaTransmissaoEsquerda').toggleClass('disabledCursor');
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
								$('#setaTransmissaoDireita').toggleClass('disabledCursor');
								$('#setaTransmissaoEsquerda').toggleClass('disabledCursor');
								break;

							}

				    }, 1);
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
								$('#textosceneCaminhosEnergia').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular1.gif").fadeIn(1000);
									$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg1).fadeIn(1000);
								});
								break;

							case 2:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title2);
								$('#imgCirculo').fadeOut(500);
								$('#textosceneCaminhosEnergia').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular2.gif").fadeIn(1000);
									$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg2).fadeIn(1000);
								});								
								break;
							case 3:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title3);
								$('#imgCirculo').fadeOut(500);
								$('#textosceneCaminhosEnergia').fadeOut(500);
								sleep(500).then(() => {
								$('#imgCirculo').attr("src", "assets/img/circular3.gif").fadeIn(1000);
								$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg3).fadeIn(1000);
								});	

								break;
							case 4:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title4);
								$('#imgCirculo').fadeOut(500);
								$('#textosceneCaminhosEnergia').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular4.gif").fadeIn(1000);
									$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg4).fadeIn(1000);
								});									
								break;
							case 5:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title5);
								$('#imgCirculo').fadeOut(500);
								$('#textosceneCaminhosEnergia').fadeOut(500);
								sleep(500).then(() => {
									$('#imgCirculo').attr("src", "assets/img/circular5.gif").fadeIn(1000);
									$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg5).fadeIn(1000);
								});									
								break;
							case 6:
								$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title6);
								$('#imgCirculo').fadeOut(500);
								$('#textosceneCaminhosEnergia').fadeOut(500);
								sleep(500).then(() => {
								$('#imgCirculo').attr("src", "assets/img/circular6.gif").fadeIn(1000);
								$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg5).fadeIn(1000);
								});	

								setaTransmissaoClicavel = true;
								break;						
							}
			
		}


				$(document).on('click', '#setaTransmissaoDireita', function () {
						if (!($("#setaTransmissaoDireita").hasClass('disabledCursor'))) {
							if (transmissionBeingShown < 6) {
								transmissionBeingShown++;
								loadTransmissionData();
							}
						}

					});

				$(document).on('click', '#setaTransmissaoEsquerda', function () {
					if (!($("#setaTransmissaoEsquerda").hasClass('disabledCursor'))) {
						if (transmissionBeingShown > 1) {
							transmissionBeingShown--;
							loadTransmissionData();
						}
					}

					});










/* SCENE ? */

	function graphMatrizEnergetica() {
			var chart = Highcharts.chart('graphMatrizEnergetica', {
		    	chart: {
		        backgroundColor: 'rgba(0,0,0,0)',
		        type: 'pie',

			    },
			    title: {
			        text: 'Dados da Matriz Energética Brasileira'
			    },
			    tooltip: {
			        pointFormat: '{series.name}: <b>{point.y}</b>'
			    },
			    plotOptions: {
			        pie: {
			            allowPointSelect: false,
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
			        name: 'Usinas ',
			        colorByPoint: true,
			        data: [{
			            name: 'Hidrelétrica',
			            y: 1251
			        }, {
			            name: 'Biomassa',
			            y: 534
			        }, {
			            name: 'Fóssil',
			            y: 2412
			        }, {
			            name: 'Eólica',
			            y: 418
			        }, {
			            name: 'Nuclear',
			            y: 2
			        }, {
			            name: 'Solar',
			            y: 42
			        }]
			    }]
			});

 	 chart.reflow();
	}


		$(document).on('click', '#botaoMatrizVerificar', function () {
			var verificacaoLocal = true;
			getInputValues();
			for (var i = 0; i < respostasMatrizEnergetica.length; i++) {
				if (!(inputRespostasMatrizEnergetica[i].val().replace(/,/g, '.') == respostasMatrizEnergetica[i])) {
					inputRespostasMatrizEnergetica[i].css('background-color', 'red');
					verificacaoLocal = false;
					$("#alertMatriz").show();
				}
				else {
					inputRespostasMatrizEnergetica[i].css('background-color', '');
				}
			}
			if (verificacaoLocal == true) {
				$("#alertMatriz").hide();
				graphMatrizEnergetica();
				$("#containerQuestoesMatrizEnergetica").show();
				loadQuestion();
				listeningToKeyPress = true;
				$(this).hide();
				graficoMatrizGerado = true;
				//Disable nos inputs
				for (var i = 0; i < inputRespostasMatrizEnergetica.length; i++) {
					inputRespostasMatrizEnergetica[i].prop('disabled', true);
				}
			}

		});



		function getInputValues() {
			inputRespostasMatrizEnergetica = 
			[
			$("#inputConsumoUsinasBiomassa"),
			$("#inputNumeroUsinasHidrica"),
			$("#inputConsumoUsinasSolar"),
			$("#inputNumeroUsinasNuclear"),
			$("#inputNumeroUsinasFossil"), 
			$("#inputConsumoImportacao") 
			      ];
		}

		$(document).on('click', '#botaoAtualizarTabelaPotencia', function () {
			$("#gastoMensalTelevisao").html(parseFloat(($("#quantidadeTelevisao").html() * ($("#potenciaTelevisao").html()/1000) * $("#tempoTelevisao").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalMaquinaDeLavar").html(parseFloat(($("#quantidadeMaquinaDeLavar").html() * ($("#potenciaMaquinaDeLavar").html()/1000) * $("#tempoMaquinaDeLavar").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalChuveiro").html(parseFloat(($("#quantidadeChuveiro").html() * ($("#potenciaChuveiro").html()/1000) * $("#tempoChuveiro").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalGeladeira").html(parseFloat(($("#quantidadeGeladeira").html() * ($("#potenciaGeladeira").html()/1000) * $("#tempoGeladeira").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalComputador").html(parseFloat(($("#quantidadeComputador").html() * ($("#potenciaComputador").html()/1000) * $("#tempoComputador").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalLampada").html(parseFloat(($("#quantidadeLampada").html() * ($("#potenciaLampada").html()/1000) * $("#tempoLampada").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalFerro").html(parseFloat(($("#quantidadeFerro").html() * ($("#potenciaFerro").html()/1000) * $("#tempoFerro").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			$("#gastoMensalCelular").html(parseFloat(($("#quantidadeCelular").html() * ($("#potenciaCelular").html()/1000) * $("#tempoCelular").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2)));
			
			$("#valorTotalTabelaPotencia").html((
				parseFloat($("#gastoMensalTelevisao").html()) + 
				parseFloat($("#gastoMensalMaquinaDeLavar").html()) + 
				parseFloat($("#gastoMensalChuveiro").html()) + 
				parseFloat($("#gastoMensalGeladeira").html()) + 
				parseFloat($("#gastoMensalComputador").html()) + 
				parseFloat($("#gastoMensalLampada").html()) + 
				parseFloat($("#gastoMensalFerro").html()) + 
				parseFloat($("#gastoMensalCelular").html())).toFixed(2));
		});

		

		function getInputValueConta() {
			inputRespostasConta = 
			[
			$("#inputImpostos"),
			$("#inputGeracao"),
			$("#inputEncargos"),
			$("#inputDistribuicao"),
			$("#inputTransmissao"), 
			$("#inputGeracao") 
			      ];
		}

		
		function checkTableConta() {
			var verificacaoLocal = true;
			getInputValueConta();
			for (var i = 0; i < respostasConta.length; i++) {
				if (!(inputRespostasConta[i].val().replace(/,/g, '.') == respostasConta[i])) {
					inputRespostasConta[i].css('background-color', 'red');
					verificacaoLocal = false;
					$("#alertConta").show();
				}
				else {
					inputRespostasConta[i].css('background-color', '');
				}
			}
			if (verificacaoLocal == true) {
				$("#alertConta").hide();

				//Disable nos inputs
				for (var i = 0; i < inputRespostasConta.length; i++) {
					inputRespostasConta[i].prop('disabled', true);
				}
			}
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
					$("#sceneIntroGeral").fadeIn(fadeTime);
					$("#sceneIntroGeralText1").html("Olá " + nome + dataJSON.stringsGerais.sceneIntroGeralBalao01);
					$("#tituloGeral").html("");
					break;
					
				case 2:
					$("#sceneTiposUsinas").fadeIn(fadeTime);
					$('#detalhesUsinas').hide();
					$('#additionalSceneTiposUsinas').show();
					$("#tituloGeral").html(dataJSON.stringsGerais.title1);
					break;
				
				case 3:
					$("#sceneIntroGraficos").fadeIn(fadeTime);
					$("#imagensIntroGraficos").hide();
					$("#iconSetaDireita").show();
					break;
				case 4:
					$("#sceneQuestoesGraficos").fadeIn(fadeTime);
					loadQuestion();
					listeningToKeyPress = true;
					break;
				case 5:
					$("#sceneIntroCaminhos").fadeIn(fadeTime);
					$("#iconSetaDireita").show();
					break;
				case 6:
					$("#sceneCaminhosEnergia").fadeIn(fadeTime);
					$("#iconSetaDireita").show();
					contentSwitcher();
					break;
				case 7:
					$("#sceneMatrizEnergetica").fadeIn(fadeTime);
					$("#alertMatriz").hide();
					$("#containerQuestoesMatrizEnergetica").hide();
					$("#iconSetaDireita").hide();
					if (graficoMatrizGerado == true) {
						$("#containerQuestoesMatrizEnergetica").show();
						loadQuestion();
						listeningToKeyPress = true;
					}
					break;
				case 8:
					$("#sceneImpostos").fadeIn(fadeTime);
					$("#tituloGeral").html(dataJSON.stringsGerais.title2);
					$("#containerImposto").hide();
					break;
				case 9:
					$("#scenePotenciaEletrodomesticos").fadeIn(fadeTime);
					break;
				case 10:
					$("#sceneVideo").fadeIn(fadeTime);
					break;
				case 11:
					$("#sceneIntroBandeirasEnergia").fadeIn(fadeTime);
					$("#tituloGeral").html(dataJSON.stringsGerais.title3);
					$("#iconSetaDireita").show();

					break;
				case 12:
					$("#sceneBandeirasEnergia").fadeIn(fadeTime);
					$("#tituloGeral").html(dataJSON.stringsGerais.title4);
					$("#iconSetaDireita").show();
					break;		
				case 13:
					$("#sceneQuestoesBandeiras").fadeIn(fadeTime);
					$("#tituloGeral").html(dataJSON.stringsGerais.title4);
					loadQuestion();
					break;
				case 14:
					$("#sceneQuestaoImposto").fadeIn(fadeTime);
					loadQuestion();
					break;
				case 15:
					$("#sceneDistribuicaoTarifa").fadeIn(fadeTime);
					$("#alertConta").hide();

					break;
						}
	  }
	  
	  
	  
	  	//Função que realiza a remoção da cena atual, inserindo um fade para que ela seja removida
	  function unloadScene() {
		  	$("#tituloGeral").html("");
			switch (scene) {
				case 0:
					$("#sceneIntroNome").fadeOut(fadeTime);
					break;
				case 1:
					$("#sceneIntroGeral").fadeOut(fadeTime);
					break;
				case 2:
					$("#sceneTiposUsinas").fadeOut(fadeTime);
					break;
				case 3:
					$("#sceneIntroGraficos").fadeOut(fadeTime);
 					break;
				case 4:
					$("#sceneQuestoesGraficos").fadeOut(fadeTime);
					listeningToKeyPress = false;
					break;
				case 5:
					$("#sceneIntroCaminhos").fadeOut(fadeTime);
 					break;
				case 6:
					$("#sceneCaminhosEnergia").fadeOut(fadeTime);
					transmissionBeingShown = 1;
 					break;
 				case 7:
 					$("#sceneMatrizEnergetica").fadeOut(fadeTime);
 					listeningToKeyPress = false;
 					break;
				case 8:
					$("#sceneImpostos").fadeOut(fadeTime);
					break;
				case 9:
					$("#scenePotenciaEletrodomesticos").fadeOut(fadeTime);
					break;
				case 10:
					$("#sceneVideo").fadeOut(fadeTime);
					break;
				case 11:
					$("#sceneIntroBandeirasEnergia").fadeOut(fadeTime);
					break;
				case 12:
					$("#sceneBandeirasEnergia").fadeOut(fadeTime);
					break;
				case 13:
					$("#sceneQuestoesBandeiras").fadeOut(fadeTime);
					break;
				case 14:
					$("#sceneQuestaoImposto").fadeOut(fadeTime);
					break;
				case 15:
					$("#sceneDistribuicaoTarifa").fadeOut(fadeTime);
					break;
			}
	  }



function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}