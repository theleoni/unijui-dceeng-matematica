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
  var jaViuTransmissao = false;
  var dataJSON;
  var respostaCorreta7 = 61.6;
  var respostaCorreta18 = 3.50;
  var respostasCorretasQuestion10 = [45, 14, 78];
  var inputRespostasQuestao10;
  var inputRespostasConta;
  var respostasConta = [25.5, 37.5, 21.1, 13.5, 2.4];
  var respostasMatrizEnergetica = [8.86, 1251, 0.01, 2, 2412, 5.11];
  var inputRespostasMatrizEnergetica;
  var clicouRecentemente = false;
  var graficoMatrizGerado = false;
  var bandeiraSelecionada;
  var viuUsina;
  var viuImposto;
  var distribuicaoTarifa = false;
  var inputGrafico;
  var tipoGrafico;
  var calculadoraAberta;

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
  	/* $.getJSON('../assets/js/Objeto 1/dataObj1.json', function(data) {
  		dataJSON = data;
  	}); */

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
		$("#sceneIntroBandeirasEnergia").hide();
		$("#sceneBandeirasEnergia").hide();
		$("#sceneQuestaoImposto").hide();
		$("#sceneQuestoesBandeiras").hide();
		$("#imagensFixas").hide();
		$("#calculadora").hide();
		$("#sceneDistribuicaoTarifa").hide();
		$("#sceneGerarGrafico").hide();
		$("#telaFinal").hide();
		$("#telaAgradecimento").hide();
		preloadVideo([
			'../assets/img/Objeto 1/biomassa_animada.mp4',
			'../assets/img/Objeto 1/eolica_animada.mp4',
			'../assets/img/Objeto 1/fossil_animada.mp4',
			'../assets/img/Objeto 1/nuclear_animada.mp4',
			'../assets/img/Objeto 1/hidreletrica_animada.mp4',
			'../assets/img/Objeto 1/solar_animada.mp4'

			])
		preload([
			'../assets/img/Objeto 1/detalhe_biomassa.png',
			'../assets/img/Objeto 1/detalhe_hidreletrica.png',
			'../assets/img/Objeto 1/detalhe_eolica.png',
			'../assets/img/Objeto 1/detalhe_fossil.png',
			'../assets/img/Objeto 1/detalhe_nuclear.png',
			'../assets/img/Objeto 1/detalhe_solar.png',
			'../assets/img/Objeto 1/biomassa.png',
			'../assets/img/Objeto 1/eolica.png',
			'../assets/img/Objeto 1/fossil.png',
			'../assets/img/Objeto 1/hidreletrica.png',
			'../assets/img/Objeto 1/nuclear.png',
			'../assets/img/Objeto 1/solar.png',
			'../assets/img/Objeto 1/bubble1.png',
			'../assets/img/Objeto 1/bubble2.png',
			'../assets/img/Objeto 1/imagem1CenaIntroGraficos.png',
			'../assets/img/Objeto 1/imagem2CenaIntroGraficos.png',
			'../assets/img/Objeto 1/imagem3CenaIntroGraficos.png',
			'../assets/img/Objeto 1/imagem4CenaIntroGraficos.png',
			'../assets/img/Objeto 1/imagem5CenaIntroGraficos.png',
			'../assets/img/Objeto 1/imagem6CenaIntroGraficos.png',
			'../assets/img/Objeto 1/imagem7CenaIntroGraficos.png',
			'../assets/img/Objeto 1/CIP.png',
			'../assets/img/Objeto 1/COFINS.png',
			'../assets/img/Objeto 1/ICMS.png',
			'../assets/img/Objeto 1/PISPASEP.png',
			'../assets/img/Objeto 1/TUST.png',
			'../assets/img/Objeto 1/engenheiro_esquerda.png',
			'../assets/img/Objeto 1/circular1.gif',
			'../assets/img/Objeto 1/circular2.gif',
			'../assets/img/Objeto 1/circular3.gif',
			'../assets/img/Objeto 1/circular4.gif',
			'../assets/img/Objeto 1/circular5.gif',
			'../assets/img/Objeto 1/circular6.gif'
			]);

		dataJSON = JSON.stringify(dados);
		dataJSON = JSON.parse(dataJSON);
		showCalc();
		$("#calculadora" ).dialog( "close" );


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
				}, 1000);



				switch (scene) {
					case 1:
					case 5:
					case 6:
					case 9:
					case 10:
					case 11:
					case 13:
					case 14:
					case 15:
					case 16:
					nextScene();
					break;
					case 8:
					if (viuImposto) {
						nextScene();
						break;
					} else {
						swal("","Clique nos impostos para ver o conteúdo", "error").catch(swal.noop);
						break;
					}
					break;
					case 12:
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
						case 11:
						nextScene();
						break;
					}
					break;

					case 2:
					if (viuUsina) {
						nextScene();
						break;
					} else {
						swal("","Clique nas usinas para ver o conteúdo", "error").catch(swal.noop);
						break;
					}
					break;

				}

			} else {
				swal("","Espere para passar à próxima tela").catch(swal.noop);
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
		 		case 14:
		 		case 15:
		 		case 16:
		 		case 17:
		 		previousScene();
		 		break;
		 		case 8:
		 		case 5:
		 		case 13:
		 		questionNumber--;
		 		previousScene();
		 		break;
		 		case 12:
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
			$("#iconMais").hide();
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
		viuUsina = true;
		hideFixedImages();
		switch (usina) {
			case 'hidreletrica':
			$('#imgUsina').attr("src", "../assets/img/Objeto 1/hidreletrica_animada.mp4");
			$('#textoUsina').html(dataJSON.textosUsinas.usinaHidreletrica);
			$('#tituloUsina').html(dataJSON.textosUsinas.titleHidreletrica);
			$('#sceneTiposUsinasSub1').css("background-color", "#008CAF")
			$('#imgDetalhesSceneTiposUsinas').attr('src', '../assets/img/Objeto 1/detalhe_hidreletrica.png')

			break;
			case 'eolica':
			$('#imgUsina').attr("src", "../assets/img/Objeto 1/eolica_animada.mp4");
			$('#textoUsina').html(dataJSON.textosUsinas.usinaEolica);
			$('#tituloUsina').html(dataJSON.textosUsinas.titleEolica);
			$('#sceneTiposUsinasSub1').css("background-color", "#008CAF")
			$('#imgDetalhesSceneTiposUsinas').attr('src', '../assets/img/Objeto 1/detalhe_eolica.png')
			break;
			case 'fossil':
			$('#imgUsina').attr("src", "../assets/img/Objeto 1/fossil_animada.mp4");
			$('#textoUsina').html(dataJSON.textosUsinas.usinaFossil);
			$('#tituloUsina').html(dataJSON.textosUsinas.titleFossil);
			$('#sceneTiposUsinasSub1').css("background-color", "#0C99AB")
			$('#imgDetalhesSceneTiposUsinas').attr('src', '../assets/img/Objeto 1/detalhe_fossil.png')


			break;
			case 'nuclear':
			$('#imgUsina').attr("src", "../assets/img/Objeto 1/nuclear_animada.mp4");
			$('#textoUsina').html(dataJSON.textosUsinas.usinaNuclear);
			$('#tituloUsina').html(dataJSON.textosUsinas.titleNuclear);
			$('#sceneTiposUsinasSub1').css("background-color", "#0C99AB")
			$('#imgDetalhesSceneTiposUsinas').attr('src', '../assets/img/Objeto 1/detalhe_nuclear.png')


			break;
			case 'solar':
			$('#imgUsina').attr("src", "../assets/img/Objeto 1/solar_animada.mp4");
			$('#textoUsina').html(dataJSON.textosUsinas.usinaSolar);
			$('#tituloUsina').html(dataJSON.textosUsinas.titleSolar);
			$('#sceneTiposUsinasSub1').css("background-color", "#0C99AB")
			$('#imgDetalhesSceneTiposUsinas').attr('src', '../assets/img/Objeto 1/detalhe_solar.png')

			break;
			case 'biomassa':
			$('#imgUsina').attr("src", "../assets/img/Objeto 1/biomassa_animada.mp4");
			$('#textoUsina').html(dataJSON.textosUsinas.usinaBiomassa);
			$('#tituloUsina').html(dataJSON.textosUsinas.titleBiomassa);
			$('#sceneTiposUsinasSub1').css("background-color", "#008CAF")
			$('#imgDetalhesSceneTiposUsinas').attr('src', '../assets/img/Objeto 1/detalhe_biomassa.png')

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
	  	$("#iconMais").show();
	  }






	  /*Scene 3 */

	  //Atualiza os dados contidos no container do imposto, trocando o texto e a cor do background
	  function showImposto(imposto) {
	  	$("#containerImposto").show();
	  	viuImposto = true;
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
	  	$('#sceneIntroGraficosImg1').attr("src", "../assets/img/Objeto 1/imagem1CenaIntroGraficos.png").fadeIn(500);
	  	$('#sceneIntroGraficosImg1').attr('title', 'Jornais');
	  	$('#sceneIntroGraficosImg2').attr("src", "../assets/img/Objeto 1/imagem2CenaIntroGraficos.png").fadeIn(500);
	  	$('#sceneIntroGraficosImg2').attr('title', 'Livros');
	  	$('#sceneIntroGraficosImg3').attr("src", "../assets/img/Objeto 1/imagem3CenaIntroGraficos.png").fadeIn(500);
	  	$('#sceneIntroGraficosImg3').attr('title', 'Computador');
	  	$('#sceneIntroGraficosImg4').attr("src", "../assets/img/Objeto 1/imagem4CenaIntroGraficos.png").fadeIn(500);
	  	$('#sceneIntroGraficosImg4').attr('title', 'Televisão');
	  	$('#sceneIntroGraficosImg1').show().siblings().show();

	  }

	  function showConjuntoImagens2IntroQuestoesGraficos() {
	  	$('#sceneIntroGraficosImg2').attr("src", "../assets/img/Objeto 1/imagem5CenaIntroGraficos.png").fadeIn(500);
	  	$('#sceneIntroGraficosImg2').attr('title', 'Coleta');
	  	$('#sceneIntroGraficosImg3').attr("src", "../assets/img/Objeto 1/imagem6CenaIntroGraficos.png").fadeIn(500);
	  	$('#sceneIntroGraficosImg3').attr('title', 'Descrição, Análise, e Interpretação');
	  	$('#sceneIntroGraficosImg4').attr("src", "../assets/img/Objeto 1/imagem7CenaIntroGraficos.png").fadeIn(500);
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
	  		$("#fonteGraficos1").html("<center>Fonte: Procel - 2005</center>");

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
	  		$("#fonteGraficos1").html("<center>Fonte: Procel - 2005</center>");


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
	  		$("#fonteGraficos1").html("<center>Fonte: Professor Hugo Gomes</center>");

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
	  		$("#fonteGraficos1").html("<center>Fonte: Professor Hugo Gomes</center>");

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
	  		swal("Atenção!", "Nas respostas dos exercícios a seguir utilize valores arredondados para duas casas após a vírgula").catch(swal.noop);
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
	  		$("#fonteGraficos1").html("<center>Fonte: Professor Hugo Gomes</center>");

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
	  		$("#fonteGraficos1").html("<center>Fonte: Dados fictícios</center>");


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
	  		$("#fonteGraficos1").html("<center>Fonte: Empresa de Pesquisa Energética – EPE</center>");

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
	  		$("#fonteGraficos1").html("<center>Fonte: Empresa de Pesquisa Energética – EPE</center>");
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
	  		graphMatrizEnergetica();

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
	  		graphMatrizEnergetica2();


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
	  		if($("#inputNumbersceneQuestoesGraficos").val().replace(",", ".") == respostaCorreta7) {
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
	  		if ($("#inputValorBandeiras").val().replace(",", ".") == respostaCorreta18) {
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

	  function closeObject() {
	  	swal({
	  		title: "Você tem certeza?",
	  		text: "O objeto será fechado e o progresso perdido!",
	  		type: "warning",
	  		showCancelButton: true,
	  		confirmButtonColor: "#DD6B55",
	  		confirmButtonText: "Sim, sair!",
	  		closeOnConfirm: false,
	  		cancelButtonText: "Cancelar"

	  	}).then(function() {
	  		window.location.href = "../index.html";
	  	}).catch(swal.noop)
	  }
	  function getInputValuesQuestion10() {
	  	inputRespostasQuestao10 =
	  	[
	  	$("#inputPotenciaImpressora"),
	  	$("#inputPotenciaLampada"),
	  	$("#inputPotenciaTelevisor")
	  	];
	  }

	  function showExtraInfo() {
	  	switch (scene) {
	  		case 1:
	  		swal({
	  			title: "",
	  			html: "Campo elétrico é o que chamamos também de campo eletrostático, é o espaço em torno de um corpo eletrizado, no qual se pode observar as ações que o corpo carregado de elétrons é capaz de exercer sobre outros corpos carregados ou não.<br> Referente aos componentes básicos na eletrônica e mesmo no campo da eletricidade temos o capacitor: Que são dois condutores separados por um isolante, geralmente os condutores são placas chamadas de armaduras do capacitor, e o isolante pode ser chamado de dielétrico. O capacito é utilizado em circuitos para armazenar cargas elétricas.",
	  		}).catch(swal.noop);
	  		break;
	  		case 2:

	  		swal({
	  			title: "",
	  			html: "Quando nos referimos ao consumo de energia elétrica estamos nos referindo a passagem de corrente no condutor de energia em que relacionado com a tensão temos a potência do aparelho. Pensamos como se fosse uma mangueira de água em que a água é a corrente e a pressão da água é a tensão da rede elétrica, assim quanto maior a quantidade de água passando na torneira, maior é o consumo, podemos aplicar a mesma lógica ao condutor elétrico.<br> Porque o fio aquece então? Porque temos uma passagem de corrente maior que o suportado pelo condutor, o que acarretará com o desarmamento do disjuntor termoelétrico consequentemente.",
	  		}).catch(swal.noop);
	  		break;
	  		case 4:
	  		switch (questionNumber) {
	  			case 1:
	  			swal({
	  				title: "O que significa KWh?",
	  				html: " É uma unidade de medida elétrica, onde essa medida é determinada tempo de uso de um aparelho elétrico. O Watt-hora é o consumo de 1 Watts durante uma hora. Por exemplo em um chuveiro elétrico onde a potência marcada em sua embalagem é de 7500 Watts, significa que essa potência irá ser consumida em uma hora. Se esse chuveiro for ligado 7 horas temos então 7500 Watts X 7 horas = 52.500 Watt-hora, ou seja, 52,5 kWh.",
	  			}).catch(swal.noop);
	  			break;
	  			case 2:
	  			swal({
	  				title: "Energia Elétrica",
	  				html: "E a capacidade de gerar, de alguma forma, trabalho, ou seja, o movimento de um motor ou a produção de calor em uma resistência. A energia elétrica, por ser gerada através de fontes renováveis como visto neste projeto, como das águas, do sol, dos ventos e através da biomassa, também pode ser gerada através de fontes não renováveis como a nuclear.",
	  			}).catch(swal.noop);
	  			break;

	  			case 3:
	  			swal({
	  				title: "Usina de Itaipu",
	  				html: "Temos como a principal fonte de energia elétrica no Brasil a Usina de Itaipu, localizada no Rio Paraná na fronteira entre o Brasil e Paraguai, em que sua geração de energia elétrica se da através da diferença de potencial elétrico em dois condutores diferentes. Pois assim, quem descobriu a energia elétrica, foi Tales de Mileto (624 a.C.-558 a.C.) , grego, com a descoberta das cargas elétricas.",
	  			}).catch(swal.noop);
	  			break;
	  			case 4:
	  			swal({
	  				title: "Calculo de Energia Elétrica",
	  				html: "Para calcular a energia elétrica temos a seguinte fórmula <br> <b> E  = P . ∆t </b> <br> Onde: <br> <b>E </b>: energia elétrica <br> <b>P</b>: Potência <br> <b>∆t</b>: Variação do tempo",
	  			}).catch(swal.noop);
	  			break;
	  			case 5:
	  			swal({
	  				title: "Corrente elétrica",
	  				html: "A corrente elétrica é o movimento de partículas eletrizadas, o que é chamado de íons, em um condutor. Essa forma de movimentação de partículas é caracterizada pela diferença de potencial elétrico, ou seja, tensão elétrica.",
	  			}).catch(swal.noop);
	  			break;
	  			case 6:
	  			swal({
	  				title: "O que significa Joule?",
	  				html: " 1 Wh equivale a 3.600 joules,<br>É uma unidade de medida, onde ocorre a passagem de corrente em uma resistência, e que essa passagem de correte é transformada em calor. <br>Entendemos como Joule, a quantidade de elétrons que passa por segundo em um condutor com uma tensão de 1Volt.",
	  			}).catch(swal.noop);
	  			break;
	  			case 7:
	  			swal({
	  				title: "Resistência",
	  				html: "A resistência estabelecida pelo condutor, pode estabelecer uma resistência elétrica de forma que possa dificultar ap assagem de corrente elétrica, ou de modo que facilite a passagem de corrente. O cálculo para acharmos a reistência é definido pela primeira lei de Ohm <br><b>R = U/I</b> <br><i>U = Tensão <br><i> I = Corrente",
	  			}).catch(swal.noop);
	  			break;
	  			case 8:
	  			swal({
	  				title: "Multiplos da tensão",
	  				html: "Megavolt (MV) = 1.000.000 V <br> Quilovolt (kV) = 1.000 V <br> Volt (V) = 1 V <br> Milivolt (mV) = 0,001 V <br> Microvolt (µV) = 0,000.001 V",
	  			}).catch(swal.noop);
	  			break;
	  			case 9:
	  			case 10:
	  			swal ({
	  				title: "",
	  				html: "Energia elétrica é a capacidade de produzir trabalho. <br> Queda de tensão é a diferença de potencial, ou seja, a diferença de tensão entre dois pontos distintos do circuito elétrico. <br> Potência elétrica é a rapidez com que se gasta energia, ou a rapidez com que se produz trabalho. <br><br> WATT-HORA (Wh) = 3.600 WATTS-SEGUNDOS = 3.600 JOULES <br><br> QUILOWATT-HORA (kWh) =1.000 Wh = 3.600.000 JOULES <br><br> HORSEPOWER (HP) = 746 Watts <br><br> CAVALO-VAPOR (cv) = 736 Watts",
	  			}).catch(swal.noop);
	  			break;

	  		}
	  		break;
	  		case 6:
	  		swal ({
	  			title: "Transformadores de energia elétrica",
	  			html: "De acordo com a ABNT (Associação Brasileira de Normas Técnicas) este é definido como um equipamento elétrico estático. São os elementos da rede de energia que transformam a tensão em outras tensões sejam elas elevadas ou rebaixadas. <br>São peças muito caras na rede elétrica e muito importantes para fazer a interligação da rede de alta tensão para a baixa tensão que é geralmente encontrada nos postes de energia nas ruas de nossas cidades.",
	  		}).catch(swal.noop);
	  		break;

	  		case 9:
	  		swal ({
	  			title: "Corrente Elétrica",
	  			html: 'Para saber calcular a corrente elétrica em um condutor de eletrodoméstico, adotamos a lei de Ohm. George Simon Ohm estudou as relações entre a tensão (V), a corrente (A), e a resistência elétrica (R), e chegou a uma afirmação: "A intensidade da corrente elétrica de um condutor é diretamente proporcional à força eletromotriz e inversamente proporcional à sua resistência elétrica". Com a seguinte fórmula:<br> I = V/R',
	  		}).catch(swal.noop);
	  		break;
	  	}
	  }
	  //Realiza a troca da seleção e salva a seleção atual em uma variável
	  function selectAnswer (elemento) {
	  	$(elemento).toggleClass('btn-primary').siblings().removeClass('btn-primary');
	  }

	  //Binda o evento de clicar no botão à troca de seleção
	  $(document).on('click', '.btn-questoes', function () {
	  	selectAnswer(this);
	  });

	  $(document).on('click', '#iconMais', function () {
	  	showExtraInfo();
	  });
	  $(document).on('click', '#iconFechar', function () {
	  	closeObject();
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

		$(document).on('click', '#botaoGraficoCustom', function () {
			verificarGraficoCustom();
		});

		$(document).on('click', '#iconCalculadora', function () {
			showCalc();
		});


		function showCalc() {
			$("#calculadora").dialog({
				closeOnEscape: false,
				resizable: false,
				height: 600,
				width: 336
			});
		}

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
 					$("#bandeiraVerdeOpcao").attr("src", "../assets/img/Objeto 1/bandeiraVerde.png")
 					$("#bandeiraAmarelaOpcao").attr("src", "../assets/img/Objeto 1/bandeiraAmarela.png")
 					$("#bandeiraVermelhaOpcao").attr("src", "../assets/img/Objeto 1/bandeiraVermelha.png")
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
 					$("#bandeiraVerdeOpcao").attr("src", "../assets/img/Objeto 1/bandeiraVerde.png")
 					$("#bandeiraAmarelaOpcao").attr("src", "../assets/img/Objeto 1/bandeiraCinza.png")
 					$("#bandeiraVermelhaOpcao").attr("src", "../assets/img/Objeto 1/bandeiraCinza.png")
 					$('.bandeiraOpcao').css('cursor','not-allowed');
 					updateAlertOnQuestionChange();
 					break;
 					case 17:
 					$("#bandeiraVerdeOpcao").attr("src", "../assets/img/Objeto 1/bandeiraCinza.png")
 					$("#bandeiraAmarelaOpcao").attr("src", "../assets/img/Objeto 1/bandeiraCinza.png")
 					$("#bandeiraVermelhaOpcao").attr("src", "../assets/img/Objeto 1/bandeiraVermelha.png")
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
					credits: {
						enabled: false
					},
					title: {
						text: 'Percentagem de uso de energia elétrica por eletrodoméstico'
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
	  			credits: {
	  				enabled: false
	  			},
	  			title: {
	  				text: 'Consumo de energia elétrica de uma residência'
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
	  				name: 'Consumo',
	  				data: [375, 300, 275, 280, 267, 254, 380, 310, 301, 312, 327, 382]
	  			}]
	  		});



	  	}


	 	//Método utilizado parar criar o gráfico utilizado nas questões 5 e 6
	 	function grafico3() {
	 		Highcharts.chart('sceneQuestoesGraph', {
	 			credits: {
	 				enabled: false
	 			},
	 			title: {
	 				text: 'Consumo de energia elétrica em kWh na residência de alunos'
	 			},

	 			subtitle: {
	 				text: ''
	 			},

	 			yAxis: {
	 				title: {
	 					text: 'kWh'
	 				}
	 			},
	 			xAxis: {
	 				categories: [
	 				'set/15',
	 				'out/15',
	 				'nov/15',
	 				'dez/15',
	 				'jan/16',
	 				'fev/16',
	 				'mar/16',
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
					credits: {
						enabled: false
					},
					title: {
						text: 'Oferta interna de energia elétrica por fonte - Brasil, 2015'
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
	 			credits: {
	 				enabled: false
	 			},
	 			title: {
	 				text: 'Consumo de energia elétrica por região geográfica em Janeiro de 2017 em GWh'
	 			},
	 			subtitle: {
	 				text: ''
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
	  			credits: {
	  				enabled: false
	  			},
	  			title: {
	  				text: 'Potência média por aparelho (Watts)'
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
	  				valueSuffix: 'W',
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
					credits: {
						enabled: false
					},
					title: {
						text: 'Valor final da energia elétrica'
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
							name: 'Parcela A: Compra, Transmissao e Encargos',
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


	  	function loadTransmissionData() {
	  		switch (transmissionBeingShown) {
	  			case 1:
	  			$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title1);
	  			$('#imgCirculo').fadeOut(500);
	  			$('#textosceneCaminhosEnergia').fadeOut(500);
	  			sleep(500).then(() => {
	  				$('#imgCirculo').attr("src", "../assets/img/Objeto 1/circular1.gif").fadeIn(1000);
	  				$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg1).fadeIn(1000);
	  			});
	  			$("#setaTransmissaoEsquerda").hide();
	  			$("#setaTransmissaoDireita").show();

	  			break;

	  			case 2:
	  			$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title2);
	  			$('#imgCirculo').fadeOut(500);
	  			$('#textosceneCaminhosEnergia').fadeOut(500);
	  			sleep(500).then(() => {
	  				$('#imgCirculo').attr("src", "../assets/img/Objeto 1/circular2.gif").fadeIn(1000);
	  				$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg2).fadeIn(1000);
	  			});
	  			$("#setaTransmissaoEsquerda").show();

	  			break;
	  			case 3:
	  			$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title3);
	  			$('#imgCirculo').fadeOut(500);
	  			$('#textosceneCaminhosEnergia').fadeOut(500);
	  			sleep(500).then(() => {
	  				$('#imgCirculo').attr("src", "../assets/img/Objeto 1/circular3.gif").fadeIn(1000);
	  				$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg3).fadeIn(1000);
	  			});

	  			break;
	  			case 4:
	  			$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title4);
	  			$('#imgCirculo').fadeOut(500);
	  			$('#textosceneCaminhosEnergia').fadeOut(500);
	  			sleep(500).then(() => {
	  				$('#imgCirculo').attr("src", "../assets/img/Objeto 1/circular4.gif").fadeIn(1000);
	  				$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg4).fadeIn(1000);
	  			});
	  			break;
	  			case 5:
	  			$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title5);
	  			$('#imgCirculo').fadeOut(500);
	  			$('#textosceneCaminhosEnergia').fadeOut(500);
	  			sleep(500).then(() => {
	  				$('#imgCirculo').attr("src", "../assets/img/Objeto 1/circular5.gif").fadeIn(1000);
	  				$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg5).fadeIn(1000);
	  			});
	  			$("#setaTransmissaoDireita").show();

	  			break;
	  			case 6:
	  			$("#titleCaminho").html(dataJSON.mensagensCaminhoEnergia.title6);
	  			$('#imgCirculo').fadeOut(500);
	  			$('#textosceneCaminhosEnergia').fadeOut(500);
	  			sleep(500).then(() => {
	  				$('#imgCirculo').attr("src", "../assets/img/Objeto 1/circular6.gif").fadeIn(1000);
	  				$('#textosceneCaminhosEnergia').html(dataJSON.mensagensCaminhoEnergia.msg5).fadeIn(1000);
	  			});
	  			$("#iconSetaDireita").show();
	  			jaViuTransmissao = true;
	  			$("#setaTransmissaoDireita").hide();
	  			break;
	  		}

	  	}


	  	$(document).on('click', '#setaTransmissaoDireita', function () {
	  		if (transmissionBeingShown < 6) {
	  			transmissionBeingShown++;
	  			loadTransmissionData();
	  		}

	  	});

	  	$(document).on('click', '#setaTransmissaoEsquerda', function () {
	  		if (transmissionBeingShown > 1) {
	  			transmissionBeingShown--;
	  			loadTransmissionData();
	  		}
	  		

	  	});










	  	/* SCENE ? */

	  	function graphMatrizEnergetica() {
	  		var chart = Highcharts.chart('graphMatrizEnergetica', {
	  			chart: {
	  				backgroundColor: 'rgba(0,0,0,0)',
	  				type: 'pie',
	  				style: {
	  					color: "#FFFFFF"
	  				}
	  			},
	  			title: {
	  				text: 'Dados da Matriz Energética Brasileira',
	  				style: {
	  					color: "#FFFFFF"
	  				}
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
	  							color: "#FFFFFF"
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


	  	function graphMatrizEnergetica2() {
	  		var chart = Highcharts.chart('graphMatrizEnergetica', {
	  			chart: {
	  				backgroundColor: 'rgba(0,0,0,0)',
	  				type: 'pie',
	  				style: {
	  					color: "#FFFFFF"
	  				}
	  			},
	  			title: {
	  				text: 'Dados da Matriz Energética Brasileira',
	  				style: {
	  					color: "#FFFFFF"
	  				}
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
	  							color: "#FFFFFF"
	  						}
	  					}
	  				}
	  			},
	  			series: [{
	  				name: 'Usinas ',
	  				colorByPoint: true,
	  				data: [{
	  					name: 'Hidrelétrica',
	  					y: 282396846
	  				}, {
	  					name: 'Biomassa',
	  					y: 40789632	
	  				}, {
	  					name: 'Fóssil',
	  					y: 77620000
	  				}, {
	  					name: 'Eólica',
	  					y: 30282978
	  				}, {
	  					name: 'Nuclear',
	  					y: 5708707
	  				}, {
	  					name: 'Solar',
	  					y: 46038
	  				}]
	  			}]
	  		});

	  		chart.reflow();
	  	}

	  	function gerarGraficoCustom() {
	  		$("#fonteGraficoCustom").html(inputGrafico[1]);
	  		$(document).ready(function () {

				// Gera o gráfico
				Highcharts.chart('containerGraficoCustom', {
					chart: {
						type: tipoGrafico,
					},
					credits: {
						enabled: false
					},
					title: {
						text: inputGrafico[0]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					yAxis: {
						min: 0,
						title: {
							text: inputGrafico[15]
						}
					},
					xAxis: {
						categories: [inputGrafico[2], inputGrafico[4], inputGrafico[6], inputGrafico[8], inputGrafico[10], inputGrafico[12]],

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
						name: inputGrafico[14],
						colorByPoint: true,
						data: [{
							name: inputGrafico[2],
							y: inputGrafico[3]
						}, {
							name: inputGrafico[4],
							y: inputGrafico[5]

						}, {
							name: inputGrafico[6],
							y: inputGrafico[7]
						}, {
							name: inputGrafico[8],
							y: inputGrafico[9]
						}, {
							name: inputGrafico[10],
							y: inputGrafico[11]
						}, {
							name: inputGrafico[12],
							y: inputGrafico[13]
						}
						]
					}]
				});
			});
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

	  		if ($("#inputTempoTelevisao").val() != "" && $("#inputTempoCelular").val() != "" && $("#inputTempoComputador").val() != "") {
	  			$("#gastoMensalTelevisao").html(parseFloat(($("#quantidadeTelevisao").html() * ($("#potenciaTelevisao").html()/1000) * $("#inputTempoTelevisao").val() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalMaquinaDeLavar").html(parseFloat(($("#quantidadeMaquinaDeLavar").html() * ($("#potenciaMaquinaDeLavar").html()/1000) * $("#tempoMaquinaDeLavar").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalChuveiro").html(parseFloat(($("#quantidadeChuveiro").html() * ($("#potenciaChuveiro").html()/1000) * $("#tempoChuveiro").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalGeladeira").html(parseFloat(($("#quantidadeGeladeira").html() * ($("#potenciaGeladeira").html()/1000) * $("#tempoGeladeira").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalComputador").html(parseFloat(($("#quantidadeComputador").html() * ($("#potenciaComputador").html()/1000) * $("#inputTempoComputador").val() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalLampada").html(parseFloat(($("#quantidadeLampada").html() * ($("#potenciaLampada").html()/1000) * $("#tempoLampada").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalFerro").html(parseFloat(($("#quantidadeFerro").html() * ($("#potenciaFerro").html()/1000) * $("#tempoFerro").html() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));
	  			$("#gastoMensalCelular").html(parseFloat(($("#quantidadeCelular").html() * ($("#potenciaCelular").html()/1000) * $("#inputTempoCelular").val() * $("#inputValorEnergiaEletrica").val()).toFixed(2).replace(",", ".")));

	  			$("#valorTotalTabelaPotencia").html((
	  				parseFloat($("#gastoMensalTelevisao").html()) +
	  				parseFloat($("#gastoMensalMaquinaDeLavar").html()) +
	  				parseFloat($("#gastoMensalChuveiro").html()) +
	  				parseFloat($("#gastoMensalGeladeira").html()) +
	  				parseFloat($("#gastoMensalComputador").html()) +
	  				parseFloat($("#gastoMensalLampada").html()) +
	  				parseFloat($("#gastoMensalFerro").html()) +
	  				parseFloat($("#gastoMensalCelular").html())).toFixed(2));
	  		} else {
	  			swal("Preencha todos os valores da tabela, e o valor do consumo").catch(swal.noop);
	  		}
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
	  			if (!(inputRespostasConta[i].val().replace(',', '.') == respostasConta[i])) {
	  				inputRespostasConta[i].css('background-color', 'red');
	  				verificacaoLocal = false;
	  				$("#alertConta").show();
	  			}
	  			else {
	  				inputRespostasConta[i].css('background-color', '');
	  			}
	  		}
	  		if (verificacaoLocal == true) {
	  			$("#alertConta").show();
	  			$("#alertConta").removeClass("alert-danger");
	  			$("#alertConta").addClass("alert-success");
	  			distribuicaoTarifa = true;
	  			$("#iconSetaDireita").show();
	  			$("#alertConta").html("Resposta correta! Prossiga para a próxima questão   <span class='glyphicon glyphicon-ok' aria-hidden='true'></span>");

				//Disable nos inputs
				for (var i = 0; i < inputRespostasConta.length; i++) {
					inputRespostasConta[i].prop('disabled', true);
				}
			}
		}



		function checkTarifa() {
			if (distribuicaoTarifa) {
				$("#iconSetaDireita").show();
			} else {
				$("#iconSetaDireita").hide();

			}
		}

		function getInputValueGrafico() {
			inputGrafico = [
			$("#tituloGerarGrafico").val(),
			$("#fonteGerarGrafico").val(),
			$("#inputGerarGrafico1").val(),
			parseFloat($("#inputGerarGraficoValue1").val()),
			$("#inputGerarGrafico2").val(),
			parseFloat($("#inputGerarGraficoValue2").val()),
			$("#inputGerarGrafico3").val(),
			parseFloat($("#inputGerarGraficoValue3").val()),
			$("#inputGerarGrafico4").val(),
			parseFloat($("#inputGerarGraficoValue4").val()),
			$("#inputGerarGrafico5").val(),
			parseFloat($("#inputGerarGraficoValue5").val()),
			$("#inputGerarGrafico6").val(),
			parseFloat($("#inputGerarGraficoValue6").val()),
			$("#inputNomeDadosGraficoCustom").val(),
			$("#inputUnidadeDadosGraficoCustom").val()
			];
		}

		function verificarGraficoCustom() {
			var verificacaoLocal = true;

			getInputValueGrafico();
			for (var i = 0; i < inputGrafico.length; i++) {
				if (inputGrafico[i] != "") {

				}
				else {
					inputGrafico[i].css('background-color', 'red');
					verificacaoLocal = false;
				}
			}
			if (verificacaoLocal == true) {
				tipoGrafico = $("#selecaoGrafico input[type='radio']:checked").val();

				gerarGraficoCustom();
			}
		}

		/* Funções Gerais */
	  	//Função que realiza a troca de uma cena para a próxima, bem como adicionar um sleep igual ao tempo de fade
	  	function nextScene() {
	  		if (scene == 17) {
	  			swal("","Você finalizou o objeto!", "error").catch(swal.noop);
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
				swal("","Não é possível voltar!", "error").catch(swal.noop);
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
	  			$("#iconMais").fadeIn(fadeTime);

	  			break;

	  			case 2:
	  			$("#sceneTiposUsinas").fadeIn(fadeTime);
	  			$('#detalhesUsinas').hide();
	  			$('#additionalSceneTiposUsinas').show();
	  			$("#tituloGeral").html(dataJSON.stringsGerais.title1);
	  			$("#iconMais").fadeIn(fadeTime);
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
	  			$("#iconMais").fadeIn(fadeTime);

	  			break;
	  			case 5:
	  			$("#sceneIntroCaminhos").fadeIn(fadeTime);
	  			$("#iconSetaDireita").show();
	  			break;

	  			case 6:
	  			$("#sceneCaminhosEnergia").fadeIn(fadeTime);
	  			$("#iconMais").fadeIn(fadeTime);
	  			if (jaViuTransmissao) {
	  				$("#iconSetaDireita").show();
	  			} else {
	  				$("#iconSetaDireita").hide();
	  			}
	  			transmissionBeingShown = 1;
	  			loadTransmissionData();
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
	  			} else {
	  				swal("Atenção!", "Para completar a tabela utilize valores arredondados para duas casas após a vírgula").catch(swal.noop);
	  			}

	  			break;
	  			case 8:
	  			$("#sceneImpostos").fadeIn(fadeTime);
	  			$("#tituloGeral").html(dataJSON.stringsGerais.title2);
	  			$("#containerImposto").hide();
	  			break;
	  			case 9:
	  			$("#scenePotenciaEletrodomesticos").fadeIn(fadeTime);
	  			$("#iconMais").fadeIn(fadeTime);

	  			break;

	  			case 10:
	  			$("#sceneIntroBandeirasEnergia").fadeIn(fadeTime);
	  			$("#tituloGeral").html(dataJSON.stringsGerais.title3);
	  			$("#iconSetaDireita").show();

	  			break;
	  			case 11:
	  			$("#sceneBandeirasEnergia").fadeIn(fadeTime);
	  			$("#tituloGeral").html(dataJSON.stringsGerais.title4);
	  			$("#iconSetaDireita").show();
	  			break;
	  			case 12:
	  			$("#sceneQuestoesBandeiras").fadeIn(fadeTime);
	  			$("#tituloGeral").html(dataJSON.stringsGerais.title4);
	  			loadQuestion();
	  			break;
	  			case 13:
	  			$("#sceneQuestaoImposto").fadeIn(fadeTime);
	  			loadQuestion();
	  			break;
	  			case 14:
	  			$("#sceneDistribuicaoTarifa").fadeIn(fadeTime);
	  			$("#alertConta").hide();
	  			checkTarifa();
	  			break;
	  			case 15:
	  			$("#sceneGerarGrafico").fadeIn(fadeTime);
	  			$("#iconSetaDireita").show();
	  			break;

	  			case 16:
	  			$("#telaAgradecimento").fadeIn(fadeTime);
	  			$("#imagensFixasCima").hide();
	  			$("#iconSetaDireita").show();
	  			break;

	  			case 17:
	  			$("#telaFinal").fadeIn(fadeTime);
	  			$("#imagensFixasCima").hide();
	  			$("#iconSetaDireita").hide();
	  			$(".navbar").hide();
	  			$("body").css('padding-top', '0px');
	  			$("html").css('padding-top', '0px');
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
	  			$("#iconMais").fadeOut(fadeTime);

	  			break;
	  			case 2:
	  			$("#sceneTiposUsinas").fadeOut(fadeTime);
	  			$("#iconMais").fadeOut(fadeTime);
	  			break;
	  			case 3:
	  			$("#sceneIntroGraficos").fadeOut(fadeTime);
	  			break;
	  			case 4:
	  			$("#sceneQuestoesGraficos").fadeOut(fadeTime);
	  			listeningToKeyPress = false;
	  			$("#iconMais").fadeOut(fadeTime);

	  			break;
	  			case 5:
	  			$("#sceneIntroCaminhos").fadeOut(fadeTime);
	  			break;
	  			case 6:
	  			$("#sceneCaminhosEnergia").fadeOut(fadeTime);
	  			transmissionBeingShown = 1;
	  			$("#iconMais").fadeOut(fadeTime);

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
	  			$("#iconMais").fadeOut(fadeTime);
	  			break;
	  			case 10:
	  			$("#sceneIntroBandeirasEnergia").fadeOut(fadeTime);
	  			break;
	  			case 11:
	  			$("#sceneBandeirasEnergia").fadeOut(fadeTime);
	  			break;
	  			case 12:
	  			$("#sceneQuestoesBandeiras").fadeOut(fadeTime);
	  			break;
	  			case 13:
	  			$("#sceneQuestaoImposto").fadeOut(fadeTime);
	  			break;
	  			case 14:
	  			$("#sceneDistribuicaoTarifa").fadeOut(fadeTime);
	  			break;
	  			case 15:
	  			$("#sceneGerarGrafico").fadeOut(fadeTime);
	  			break;

	  			case 16:
	  			$("#telaAgradecimento").hide();
	  			$("#imagensFixasCima").show();

	  			break;

	  			case 17: 
	  			$("#telaFinal").fadeOut(fadeTime);
	  			$("#imagensFixasCima").show();
	  			$(".navbar").show();
	  			$("body").css('padding-top', '59px');
	  			$("html").css('padding-top', '59px');

	  			break;
	  		}
	  	}



	  	function showHelp() {
	  		switch (scene) {
	  			case 4:
	  			switch (questionNumber) {
	  				case 3:
	  				swal("Ajuda!", "Arraste o mouse sobre as barras do gráfico para ver o consumo").catch(swal.noop);
	  				break;
	  				case 4:
	  				swal("Ajuda!", "Arraste o mouse sobre as barras gráfico para ver o consumo").catch(swal.noop);
	  				break;
	  				case 5:
	  				swal("Ajuda!", "Para saber a média, basta dividir o total do consumo de energia pela quantidade de meses correspondentes").catch(swal.noop);
	  				break;
	  				case 6:
	  				swal("Ajuda!", "Arraste o mouse sobre o gráfico para ver os valores").catch(swal.noop);
	  				break;
	  				case 7:
	  				swal("Ajuda!", "Para saber a diferença basta subtrair a energia hidrelétrica pela energia nuclear").catch(swal.noop);
	  				break;
	  				case 10:
	  				swal("Ajuda!", "Arraste o mouse sobre as barras do gráfico para ver a potência").catch(swal.noop);
	  				break;
	  			}
	  			break;
	  			case 7:
	  			if (graficoMatrizGerado) {
	  				switch (questionNumber) {
	  					case 11:
	  					swal("Ajuda!", "Para facilitar sua resposta observe a tabela").catch(swal.noop);
	  					break;
	  					case 12:
	  					swal("Ajuda!", "Para facilitar sua resposta observe a tabela").catch(swal.noop);
	  					break;
	  					case 13:
	  					swal("Ajuda!", "Para facilitar sua resposta observe a tabela").catch(swal.noop);
	  					break;
	  					case 14:
	  					swal("Ajuda!", "Observe no texto para responder essa questão").catch(swal.noop);
	  					break;
	  					case 15:
	  					swal("Ajuda!", "Observe e analise atentamente a tabela e o gráfico").catch(swal.noop);
	  					break;
	  				}
	  			} else {
	  				swal (
	  				{
	  					title: 'Ajuda',
	  					width: '57%',
	  					html: '<div class="col-xs-6">Preencha a tabela com os dados do texto. <br><br><b>Critérios de arredondamento</b><br><br>1-Se o primeiro valor após os que irão permanecer for menor que 5, então apenas elimine as demais casa decimais  que estão a tua direita.<br>Por exemplo: 24,37<span style="color:#0AC813; font-size:14px">2</span>01 se for arredondado para  duas casas decimais fica 24,3<span style="color:#FF0000; font-size:14px">7</span>.<br><br>2-Se o primeiro valor após os que irão permanecer for maior que 5, então o último que permanece fica acrescido de uma unidade.<br>Por exemplo: 24,37<span style="color:#0AC813; font-size:14px">6</span>01 se for arredondado para  duas casas decimais fica 24,3<span style="color:#FF0000; font-size:14px">8</span>.<br><br>3-Se o primeiro valor após os que irão permanecer for igual a 5, e após este tiverem outros algarismos onde pelo menos um é diferente de zero, então o último que permanece fica acrescido de uma unidade.   Por exemplo: 24,37<span style="color:#0AC813; font-size:14px">501</span>  fica 24,3<span style="color:#FF0000; font-size:14px">8</span>.<br><br>4-Se o primeiro valor após os que irão permanecer for igual a 5, e após este não tiverem outros algarismos diferente de zero, então o último que permanece fica acrescido de uma unidade somente se o que permanecer é impar, caso contrário o último que fica permanece sem alteração.</div><div class="col-xs-6"><table class="table table-bordered"><thead><tr><th>Valor original</th><th>Valor arredondado com 2 casa decimais</th></tr></thead><tbody><tr><td>24,3<span style="color:#FF0000">7</span><span style="color:#3A0EF7">2</span>01</td><td>24,3<span style="color:#FF0000">7</span></td></tr><tr><td>24,3<span style="color:#FF0000">7</span><span style="color:#3A0EF7">6</span>01</td><td>24,3<span style="color:#FF0000">8</span></td></tr><tr><td>24,3<span style="color:#FF0000">7</span><span style="color:#00D053">501</span></td><td>24,3<span style="color:#FF0000">8</span></td></tr><tr><td>24,3<span style="color:#FF0000">7</span><span style="color:#00D053">500</span></td><td>24,3<span style="color:#FF0000">8</span></td></tr><tr><td>24,3<span style="color:#FF0000">2</span><span style="color:#00D053">500</span></td><td>24,3<span style="color:#FF0000">2</span></td></tr><tr><td>24,3<span style="color:#FF0000">5</span><span style="color:#00D053">500</span></td><td>24,3<span style="color:#FF0000">6</span></td></tr><tr><td>24,3<span style="color:#FF0000">6</span><span style="color:#00D053">500</span></td><td>24,3<span style="color:#FF0000">6</span></td></tr></tbody></table></div>'
	  				}
	  				).catch(swal.noop);

	  			}
	  			break;
	  			case 9:
	  			swal("Ajuda!", "Coloque o valor que sua companhia de energia cobra por 1 kw. Caso você não saiba use R$ 0,50").catch(swal.noop);
	  			break;
	  			case 12:
	  			switch (questionNumber) {
	  				case 16:
	  				swal("Ajuda!", "Em caso de dúvida, volte a tela anterior").catch(swal.noop);
	  				break;
	  				case 17:
	  				swal("Ajuda!", "Em caso de dúvida volte 2 telas").catch(swal.noop);
	  				break;
	  				case 18:
	  				swal("Ajuda!", "Em caso de dúvida volte 3 telas").catch(swal.noop);
	  				break;
	  			}
	  			break;
	  			case 13:
	  			swal("Ajuda!", "Observe atentamente o gráfico e a pergunta da questão. Passe o mouse sobre o gráfico para ver a porcentagem").catch(swal.noop);
	  			break;
	  			case 14:
	  			swal("Ajuda!", "Passe o mouse sobre os quadros na tela superior direita para observar a porcentagem.").catch(swal.noop);
	  			break;
	  			case 15:
	  			swal.queue(ajuda15).then(function () { });
	  			break;
	  		}
	  	}

	  	var ajuda15 = [
	  	{
	  		title: 'Ajuda!',
	  		html: '<div class="row"><div style="text-align:left;" class="col-xs-12"><ul><li>Adicione um título para o gráfico;</li><li>Insira a fonte (referencia, site);</li><li>Em seguida insira os identificadores e seus respectivos valores;</li><li>Abaixo deverá ser inserido o nome para os dados;</li><li>Coloque a unidade dos dados (reais, cm, metros, kg, entre outros).</li></ul><br><h3>Veja o exemplo a seguir</h3></div><div class="col-xs-8"> <img class="img-responsive" src="../assets/img/Objeto 1/ajuda15.PNG"></div></div>',
	  		width: '90%'
	  	}]



	  	$(document).on('click', '.iconFixoHelp', function () {
	  		showHelp();
	  	});

	  	function preload(arrayOfImages) {
	  		$(arrayOfImages).each(function () {
	  			$('<img />').attr('src',this).appendTo('body').css('display','none');
	  		});
	  	}

	  	$(document).on('keyup', 'body', function (e) {
	  		if($("#calculadora").dialog('isOpen')) {
	  			botaoPressionado = e.which;
	  			switch (botaoPressionado) {
	  				case 96:
	  				$("#0Calculadora").click();
	  				break;
	  				case 97:
	  				$("#1Calculadora").click();
	  				break;
	  				case 98:
	  				$("#2Calculadora").click();
	  				break;	
	  				case 99:
	  				$("#3Calculadora").click();
	  				break;	
	  				case 100:
	  				$("#4Calculadora").click();
	  				break;
	  				case 101:
	  				$("#5Calculadora").click();
	  				break;
	  				case 102:
	  				$("#6Calculadora").click();
	  				break;	
	  				case 103:
	  				$("#7Calculadora").click();
	  				break;	
	  				case 104:
	  				$("#8Calculadora").click();
	  				break;
	  				case 105:
	  				$("#9Calculadora").click();
	  				break;	
	  				case 106:
	  				$("#MultiplicacaoCalculadora").click();
	  				break;
	  				case 107:
	  				$("#MaisCalculadora").click();
	  				break;
	  				case 109:
	  				$("#MenosCalculadora").click();
	  				break;
	  				case 111:
	  				$("#DivisaoCalculadora").click();
	  				break;
	  				case 187:
	  				case 13:
	  				$("#IgualCalculadora").click();
	  				break;
	  				case 190:
	  				case 194:
	  				case 110:
	  				$("#PontoCalculadora").click();
	  				break;
	  			}

	  		}
	  	});