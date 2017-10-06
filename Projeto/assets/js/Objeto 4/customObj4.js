//			swal("Atenção!", "Nas respostas dos exercícios a seguir utilize valores arredondados para duas casas após a virgula");


var nomeDoUsuario;
var scene = 1;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;


//Variáveis especificas
var videoOnibus1Assistido = false;
var videoOnibus2Assistido = false;
var videoOnibus1ponto1Assistido = false;
var videoOnibusVoltandoAssistido = false;

var stuckOnFirstImage = true;
var viuTratamento = false;

var conversaLaboratorio = 1;
var conversaLaboratorioCompleta = false;

var questionNumber = 1;
var questoesCorretas = [false,false,false,false,false,false,false,false,false,false,false,false,false, false, false, false, false, false]
var respostasCorretas = ['#buttonAf4', '#buttonAf1', 0.5, '#buttonAf3', 0.33, '#buttonAf2', 0.2, '#buttonAf1', '#buttonAf4', 0.16, '#buttonAf3', 0.10, 0.80, 1, 0, 1, '#buttonAf4', '#buttonAf2'];
var respostasCorretasOutra = ["Sem resposta", "Sem resposta", 50, "Sem resposta", 33, "Sem resposta", 20, "Sem resposta", "Sem resposta", 16, "Sem resposta", 10, 80, 100, 0, 100, "Sem resposta", "Sem resposta"];
var respostasCorretasTerceira = ["Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", 0.17, "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta"];
var respostasCorretasQuarta = ["Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", 17, "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta", "Sem resposta"];


$(document).ready(function() {
	hideDivsOnObjectStart();
	videoIntroducao.pause();

});

// ############################################################################################################################################################################################################################################

//Função que oculta as divs ao iniciar o objeto
function hideDivsOnObjectStart() {
	$("#calculadora").hide();
	$("#iconesFixos").hide();
	$("#alertNome").hide();
	$("#telaVideoOnibus1").hide();
	$("#telaInfografico1").hide();
	$("#telaVideoOnibus2").hide();
	$("#telaChegadaCorsan").hide();
	$("#telaTratamentoAgua").hide();
	$("#telaLaboratorio").hide();
	$("#telaTabela1").hide();
	$("#telaTabela2").hide();
	$("#telaTabela3").hide();
	$("#telaLaboratorio2").hide();
	$("#telaVideoOnibusVolta").hide();
	$("#telaEscola").hide();
	$("#telaSalaDeAula").hide();
	$("#telaSalaDeAula2").hide();
	$("#telaExemplos").hide();
	$("#telaSalaDeAula3").hide();
	$("#telaQuestoes").hide();
	$("#telaPrevisaoDoTempo").hide();
	$("#telaVideoOnibus1ponto1").hide();
	$("#telaRioSujo").hide();
	$("#telaAgradecimento").hide();


}


//Função para avançar para a próxima cena
function nextScene() {
	unloadScene();
	scene++;
	loadScene();

}

//Função para retornar à cena anterior
function previousScene() {
	unloadScene();
	scene--;
	loadScene();
}


//Função chamada ao clicar no botão de inserir o nome
$(document).on('click', '#botaoNome', function() {
	nomeDoUsuario = $("#inputNome").val();
	if (nomeDoUsuario != "") {
		nomeDoUsuario = $("#inputNome").val();
		$("#inputNomeContainer").fadeOut(defaultFadeTime);
		$("#alertNome").hide();
		videoIntroducao.play();
		waitVideoIntroToEnd();
		$("#textoSalaDeAula2").html($("#textoSalaDeAula2").html().replace("%fulano%", nomeDoUsuario));
	} else {
		$("#alertNome").show();
	}
});

$(document).on('keyup', '#inputNome', function (e) {
	if(e.which == 13) {
		$('#botaoNome').click();	}
	});


//Importando informações do json
$.getJSON('../assets/js/Objeto 4/dataObj4.json', function(data) {
	dataJSON = data;
});


//Função chamada para identificar o fim do vídeo da introdução
function waitVideoIntroToEnd() {
	$(videoIntroducao).on('ended',function(){
		nextScene();
	});
}


//Função para colocar um vídeo em fullscreen
function requestVideoFullScreen(video) {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	}
	else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
	}
	else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	}
	else if (video.webkitRequestFullScreen) {
		video.webkitRequestFullScreen();
	}
	video.play();
}

//Função para tirar o vídeo de fullscreen
function exitFullScreen(video) {
	if (video.exitFullScreen) {
		video.ExitFullScreen();
	}
	else if (video.msExitFullscreen) {
		video.msExitFullscreen();
	}
	else if (video.mozExitFullScreen) {
		video.mozExitFullScreen();
	}
	else if (video.webkitExitFullScreen) {
		video.webkitExitFullScreen();
	}
}


//Função para assistir o primeiro vídeo do ônibus
function watchVideoOnibus1() {
	$(videoOnibus1).on('ended',function(){
		if (scene == 2 && videoOnibus1Assistido == false) {
			nextScene();
			videoOnibus1Assistido = true;
		} else if (videoOnibus1Assistido == true) {
			videoOnibus1.currentTime = 0;
		}

	});
}

//Função para assistir o primeiro (segundo) vídeo do ônibus
function watchVideoOnibus1ponto1() {
	$(videoOnibus1ponto1).on('ended',function(){
		if (scene == 4 && videoOnibus1ponto1Assistido == false) {
			allowPreviousScene();
			nextScene();
			videoOnibus1ponto1Assistido = true;
		} else if (videoOnibus1ponto1Assistido == true) {
			allowPreviousScene();
			videoOnibus1ponto1.currentTime = 0;
		}

	});
}

//Função para assistir o segundo vídeo do ônibus
function watchVideoOnibus2() {
	$(videoOnibus2).on('ended',function(){
		if (scene == 6 && videoOnibus2Assistido == false) {
			allowPreviousScene();
			videoOnibus2Assistido = true;
			nextScene();
		} else if (videoOnibus2Assistido == true) {
			allowPreviousScene();
			videoOnibus2.currentTime = 0;
		}

	});
}

//Função para assistir o vídeo do ônibus voltando
function watchVideoOnibusVoltando() {
	$(videoOnibusVoltando).on('ended',function(){
		if (scene == 15 && videoOnibusVoltandoAssistido == false) {
			nextScene();
			videoOnibusVoltandoAssistido = true;
		} else if (videoOnibusVoltandoAssistido == true) {
			videoOnibusVoltando.currentTime = 0;
		}
		allowNextScene();
	});
}
//Função para verificar se a pessoa localizou a seta para passar de tela
function checkIfStuck() {
	setTimeout(function() {
		if(stuckOnFirstImage) {
			swal("Preso aqui?", "Clique na seta no canto inferior direito para prosseguir");
			$("#iconSetaDireita").css("color", "red");
			$("#iconSetaDireita").css("font-size", "60px");
			stuckOnFirstImage = false;

			setTimeout(function() {
				$("#iconSetaDireita").css("color", "gray");
				$("#iconSetaDireita").css("font-size", "40px");

			}, 5000)
		}
	}, 7000)
}



	//Função para exibir informações do tratamento

	function showInfoTratamento(tipo) {
		viuTratamento = true;
		switch (tipo) {
			case 'coagulacao':
			swal("Coagulação", "<img class='img-responsive'src='../assets/img/Objeto 4/coagulacao.png' <br>A água que está armazenada no tanque recebe a adição de um sal chamado de sulfato de alumínio ou sulfato férrico. Esses compostos formam uma substância gelatinosa que favorece a formação de flocos (junção das impurezas na substância gelatinosa).");
			break;

			case 'floculacao':
			swal("Floculação", "<img class='img-responsive'src='../assets/img/Objeto 4/floculacao.png' <br>Nessa etapa, a água é direcionada para outro tanque, onde será adicionado um polímero que favorecerá que os flocos formados na etapa de coagulação juntem-se e formem flocos ainda maiores e mais pesados.");
			break;

			case 'decantacao':
			swal("Decantação", "<img class='img-responsive'src='../assets/img/Objeto 4/decantacao.png' <br>Após a floculação, a água é direcionada para um novo tanque, onde ela permanecerá em repouso para que os flocos formados sejam decantados para o fundo do tanque, haja vista que eles são mais densos que a água.");
			break;

			case 'filtracao':
			swal("Filtração", "<img class='img-responsive'src='../assets/img/Objeto 4/filtracao.png' <br>Após a decantação, a água atravessa um grande filtro formado por areia, carvão ativado e cascalho. Nessa etapa, as impurezas que não aderiram aos flocos ficam retidas no filtro, além de a água sofrer uma desodorização pela presença do carvão ativado.");
			break;


			case 'fluoretacao':
			swal("Fluoretação", "<img class='img-responsive'src='../assets/img/Objeto 4/fluoretacao.png' <br>Nessa etapa, é adicionada à água uma quantidade de ácido com flúor, o Ácido Fluossilícico (H2SiF6), para auxiliar na redução de cáries na população.");
			break;


			case 'cloracao':
			swal("Cloração", "<img class='img-responsive'src='../assets/img/Objeto 4/cloracao.png' <br>Além da adicção de Flúor, o Cloro também é adicionado à água, na forma de sal, com o objetivo de eliminar os micro-organismos presentes.");
			break;


			case 'correcaoPH':
			swal("Correção do PH (Ácidez da água)", "<img class='img-responsive'src='../assets/img/Objeto 4/correcaoPH.png' <br>Nessa etapa, é adicionada à água hidróxido de cálcio para diminuir a acidez do meio.");
			break;

			case 'reservatorio':
			swal("Água própria para consumo", "<img class='img-responsive'src='../assets/img/Objeto 4/reservatorio.png' <br>E por fim, a água é conduzida dos reservatórios e distribuída na cidade por tubulações subterrâneas. ");
			break;
		}
	}

	//Função para atualizar os textos do diálogo da tela do laboratório
	function updateConversaLaboratorio() {
		switch (conversaLaboratorio) {

			case 1:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala1);
			$("#setaEsquerdaLaboratorio").hide();
			break;
			case 2:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala2);
			$("#setaEsquerdaLaboratorio").show();
			break;
			case 3:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala3);
			break;

			case 4:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala4);
			break;
			case 5:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala5);
			break;

			case 6:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala6);
			$("#setaDireitaLaboratorio").show();
			break;
			case 7:
			$("#textoLaboratorio").html(dataJSON.telaLaboratorio.fala7);
			conversaLaboratorioCompleta = true;
			allowNextScene();
			$("#setaDireitaLaboratorio").hide();
			break;
		}
	}

	//Funções para chamar a atualização do diálogo na tela do laboratório
	$(document).on('click', '#setaDireitaLaboratorio', function () {
		conversaLaboratorio++;
		updateConversaLaboratorio();
	});

	$(document).on('click', '#setaEsquerdaLaboratorio', function () {
		conversaLaboratorio--;
		updateConversaLaboratorio();
	});

	$(document).on('click', '.whiteSpaceButton', function() {
		$(this).toggleClass("btn-primary");
		$(this).siblings().removeClass("btn-primary");
	})


	//Função utilizada para carregar a questão correta
	function loadQuestion() {

		switch (questionNumber) {
			case 1:
			swal("Atenção!", "Nas respostas dos exercícios a seguir utilize valores arredondados para duas casas após a virgula");
			case 2:
			case 4:
			case 6:
			case 8:
			case 9:
			case 11:
			case 17:
			case 18:
			$("#inputResposta").hide();
			$("#buttonAf1").show();
			$("#buttonAf2").show();
			$("#buttonAf3").show();
			$("#buttonAf4").show();
			$("#buttonAf5").show();
			var i = 1;
			for (var conteudo in dataJSON[questionNumber]) {
				switch (i) {
					case 1:
					$("#tituloQuestao").html("<span style='color:#d88d1c;'>" + questionNumber + ".</span> " + dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 2:
					$("#buttonAf1").html(dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 3:
					$("#buttonAf2").html(dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 4:
					$("#buttonAf3").html(dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 5:
					$("#buttonAf4").html(dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 6:
					$("#buttonAf5").html(dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 7:
					$("#containerTabelaQuestao").html(dataJSON[dataJSON[questionNumber][conteudo]]);
					i++;
					break;
				}
			}
			break;


			//Questões 2 em diante
			default:
			$("#inputResposta").show();
			$("#buttonAf1").hide();
			$("#buttonAf2").hide();
			$("#buttonAf3").hide();
			$("#buttonAf4").hide();
			$("#buttonAf5").hide();

			var i = 1;
			for (var conteudo in dataJSON[questionNumber]) {
				switch (i) {
					case 1:
					$("#tituloQuestao").html("<span style='color:#d88d1c;'>" + questionNumber + ".</span> " + dataJSON[questionNumber][conteudo]);
					i++;
					break;

					case 2:
					$("#containerTabelaQuestao").html(dataJSON[dataJSON[questionNumber][conteudo]]);
					i++;
					break;
				}
			}
			break;

		}

		if (questoesCorretas[questionNumber-1] == true) {
			blockQuestionButtons();
			allowNextScene();
		} else {
			disallowNextScene();
			resetQuestionButtons();
		}
	}


	//Função que chama o método de verificação da resposta
	$(document).on('click', '#botaoEnviarResposta', function() {
		checkAnswer();
	});

	//Função que verifica a resposta
	function checkAnswer() {
		switch (questionNumber) {
			case 1:
			case 2:
			case 4:
			case 6:
			case 8:
			case 9:
			case 11:
			case 17:
			case 18:
			if ($(respostasCorretas[questionNumber-1]).hasClass('btn-primary')) {
				$("#alertQuestao").show();
				$("#alertQuestao").html(dataJSON.questoes.alertaCerto);
				$("#alertQuestao").addClass("alert-success");
				$("#alertQuestao").removeClass("alert-danger");
				questoesCorretas[questionNumber-1] = true;
				allowNextScene();
				blockQuestionButtons();
			} else {
				$("#alertQuestao").show();
				$("#alertQuestao").html(dataJSON.questoes.alertaErrado);
				$("#alertQuestao").addClass("alert-danger");
				$("#alertQuestao").removeClass("alert-success");
			}
			break;

			default:
			if (respostasCorretas[questionNumber-1] == $("#inputResposta").val() || respostasCorretasOutra[questionNumber-1] == $("#inputResposta").val() || respostasCorretasTerceira[questionNumber-1] == $("#inputResposta").val() || respostasCorretasQuarta[questionNumber-1] == $("#inputResposta").val()) {
				questoesCorretas[questionNumber-1] = true;
				allowNextScene();
				blockQuestionButtons();
			} else {
				$("#alertQuestao").show();
				$("#alertQuestao").html(dataJSON.questoes.alertaErrado);
				$("#alertQuestao").addClass("alert-danger");
				$("#alertQuestao").removeClass("alert-success");
			}

		}
	}

	//Função para desabilitar os botões das questões
	function blockQuestionButtons() {
		$("#alertQuestao").show();
		$("#alertQuestao").html(dataJSON.questoes.alertaCerto);
		$("#alertQuestao").addClass("alert-success");
		$("#alertQuestao").removeClass("alert-danger");

		switch (questionNumber) {

			case 1:
			case 2:
			case 4:
			case 6:
			case 8:
			case 9:
			case 11:
			case 17:
			case 18:
			$("#buttonAf1").prop("disabled", "disabled");
			$("#buttonAf2").prop("disabled", "disabled");
			$("#buttonAf3").prop("disabled", "disabled");
			$("#buttonAf4").prop("disabled", "disabled");
			$("#buttonAf5").prop("disabled", "disabled");
			$("#botaoEnviarResposta").prop("disabled", "disabled");
			$(respostasCorretas[questionNumber-1]).addClass("btn-primary");
			$(respostasCorretas[questionNumber-1]).siblings().removeClass("btn-primary");
			break;


			default:

			$("#inputResposta").prop("disabled", "disabled");
			$("#inputResposta").val(respostasCorretas[questionNumber-1]);
			$("#botaoEnviarResposta").prop("disabled", "disabled");
			break;

		}

	}

	function resetQuestionButtons() {
		$("#buttonAf1").prop("disabled", "");
		$("#buttonAf2").prop("disabled", "");
		$("#buttonAf3").prop("disabled", "");
		$("#buttonAf4").prop("disabled", "");
		$("#buttonAf5").prop("disabled", "");
		$("#inputResposta").prop("disabled", "");
		$("#inputResposta").val("");
		$("#botaoEnviarResposta").prop("disabled", "");
		$("#buttonAf1").removeClass("btn-primary");
		$("#buttonAf2").removeClass("btn-primary");
		$("#buttonAf3").removeClass("btn-primary");
		$("#buttonAf4").removeClass("btn-primary");
		$("#buttonAf5").removeClass("btn-primary");
		$("#alertQuestao").hide();
	}

	//Funções de controle dos icones fixos nas telas
	function allowNextScene() {
		$("#iconesFixos").show();
		$("#iconSetaDireita").show();
	}

	function disallowNextScene() {
		$("#iconesFixos").show();
		$("#iconSetaDireita").hide();
	}

	function allowPreviousScene() {
		$("#iconesFixos").show();
		$("#iconSetaEsquerda").show();
	}

	function disallowPreviousScene() {
		$("#iconesFixos").show();
		$("#iconSetaEsquerda").hide();
	}

	function hideArrows() {
		$("#iconesFixos").show();
		$("#iconSetaDireita").hide();
		$("#iconSetaEsquerda").hide();
	}
	function showArrows() {
		$("#iconesFixos").show();
		$("#iconSetaDireita").show();
		$("#iconSetaEsquerda").show();
	}

	function showUpperIcons() {
		$("#iconesFixos").show();
		$("#iconCalculadora").show();
		$("#iconMais").show();
		$("#iconHelp").show();
		$("#iconFechar").show();
	}

	function hideUpperIcons() {
		$("#iconesFixos").show();
		$("#iconCalculadora").hide();
		$("#iconMais").hide();
		$("#iconHelp").hide();
		$("#iconFechar").hide();
	}
	//Função para alterar os títulos das cenas
	function changeTitle(titulo) {
		$("#tituloGeral").html(titulo);
	}


	//Função para exibir ajudas
	$(document).on('click', '#iconHelp', function() {
		if (scene != 21) {
			showHelp(scene);
		} else {
			showHelp(scene + questionNumber.toString());
		}
	})


	//Função para exibir os saiba mais
	$(document).on('click', '#iconMais', function() {
		if (scene != 21) {
			showSaibaMais(scene);
		} else {
			showSaibaMais(scene + questionNumber.toString());
		}
	})
	//Função chamada ao clicar na seta direita
	$(document).on('click', '#iconSetaDireita', function() {
		switch (scene) {

			case 2:
			case 4:
			case 5:
			case 7:
			case 8:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			nextScene();
			break
			case 3:
			stuckOnFirstImage = false;
			nextScene();
			break;

			case 9:
			if (viuTratamento == false ) {
				swal("","Veja ao menos uma das etapas de tratamento da água!", "error");
			} else {
				nextScene();
			}
			break;

			case 21:
			if (questionNumber < 18 ) {
				questionNumber++;
				loadQuestion();
			} else {
				nextScene();
			}
			break;
		}
	});

	//Função chamada ao clicar na seta esquerda
	$(document).on('click', '#iconSetaEsquerda', function() {
		switch (scene) {

			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 22:
			previousScene();
			break;
			case 21:
			if (questionNumber > 1) {
				questionNumber--;
				loadQuestion();
			} else {
				previousScene();
			}
			break;

		}
	});






	//Função para carregar a cena
	function loadScene() {
		switch(scene) {

			case 1:
			$("#telaNome").show();
			$("#iconMais").hide();
			$("#iconHelp").hide();
			changeTitle(" ");
			break;

			case 2:
			disallowPreviousScene();
			$("#telaVideoOnibus1").show();
			$("#iconCalculadora").hide();
			$("#iconMais").hide();
			$("#iconHelp").hide();
			changeTitle(" ");
			if (!videoOnibus1Assistido) {
				videoOnibus1.currentTime = 0;
				videoOnibus1.play()
				disallowNextScene();
				watchVideoOnibus1();

			} else {
				videoOnibus1.play();
				videoOnibus1.currentTime = 0;
				showArrows();
				showUpperIcons();
			}
			break;

			case 3:
			$("#telaPrevisaoDoTempo").show();
			changeTitle(" ");
			showArrows();
			showUpperIcons();
			checkIfStuck();
			break;


			case 4:
			disallowPreviousScene();
			$("#telaVideoOnibus1ponto1").show();
			$("#iconCalculadora").hide();
			$("#iconMais").hide();
			$("#iconHelp").hide();
			changeTitle(" ");
			if (!videoOnibus1ponto1Assistido) {
				videoOnibus1ponto1.currentTime = 0;
				videoOnibus1ponto1.play()
				disallowNextScene();
				watchVideoOnibus1ponto1();

			} else {
				videoOnibus1ponto1.play();
				videoOnibus1ponto1.currentTime = 0;
				showArrows();
				showUpperIcons();

			}
			break;


			case 5:
			$("#telaInfografico1").show();
			changeTitle(" ");
			showArrows();
			showUpperIcons();
			$("#iconMais").hide();


			break;

			case 6:
			$("#telaVideoOnibus2").show();
			$("#iconCalculadora").hide();
			$("#iconMais").hide();
			$("#iconHelp").hide();
			changeTitle(" ");
			if (!videoOnibus2Assistido) {
				videoOnibus2.currentTime = 0;
				videoOnibus2.play()
				disallowNextScene();
				watchVideoOnibus2();

			} else {
				videoOnibus2.play();
				videoOnibus2.currentTime = 0;
				showArrows();
				showUpperIcons();

			}
			break;


			case 7:
			$("#telaRioSujo").show();
			showArrows();
			showUpperIcons();
			$("#iconMais").hide();
			changeTitle(" ");
			break;

			case 8:
			$("#telaChegadaCorsan").show();
			showArrows();
			showUpperIcons();
			$("#iconMais").hide();
			changeTitle(" ");
			break;

			case 9:
			$("#telaTratamentoAgua").show();
			$("#textoTratamento").html(dataJSON.telaTratamento.fala1Guia);
			showArrows();
			showUpperIcons();
			break;

			case 10:
			$("#telaLaboratorio").show();
			changeTitle(" ");
			showUpperIcons();
			updateConversaLaboratorio();
			if (conversaLaboratorioCompleta == true) {
				allowNextScene();
			} else {
				disallowNextScene();
			}
			break;

			case 11:
			$("#telaTabela1").show();
			changeTitle(" ");
			showUpperIcons();
			$("#iconMais").hide();
			break;

			case 12:
			$("#telaTabela2").show();
			changeTitle(" ");
			showUpperIcons();
			$("#iconMais").hide();
			break;

			case 13:
			$("#telaTabela3").show();
			changeTitle(" ");
			showUpperIcons();
			break;

			case 14:
			$("#telaLaboratorio2").show();
			changeTitle(" ");
			showUpperIcons();
			$("#iconMais").hide();
			break;

			case 15:
			$("#telaVideoOnibusVolta").show();
			changeTitle(" ");
			$("#iconCalculadora").hide();
			$("#iconMais").hide();
			$("#iconHelp").hide();
			if (!videoOnibusVoltandoAssistido) {
				videoOnibusVoltando.currentTime = 0;
				videoOnibusVoltando.play()
				disallowNextScene();
				watchVideoOnibusVoltando();

			} else {
				videoOnibusVoltando.play();
				videoOnibusVoltando.currentTime = 0;
				allowNextScene();
				showUpperIcons();
			}
			break;

			case 16:
			$("#telaEscola").show();
			changeTitle(" ");
			showUpperIcons();
			$("#iconMais").hide();
			break;

			case 17:
			$("#telaSalaDeAula").show();
			changeTitle(" ");
			showUpperIcons();
			$("#iconMais").hide();
			break;

			case 18:
			$("#telaSalaDeAula2").show();
			changeTitle(" ");
			showUpperIcons();
			break;

			case 19:
			$("#telaExemplos").show();
			$("body").css("overflow", "auto");
			changeTitle(" ");
			showUpperIcons();
			$("#iconMais").hide();

			break;

			case 20:
			$("#telaSalaDeAula3").show();
			changeTitle(" ");
			showArrows();
			showUpperIcons();
			$("#iconMais").hide();

			break;

			case 21:
			$("#telaQuestoes").show();
			$("body").css("overflow", "auto");
			loadQuestion();
			changeTitle(" ");
			showUpperIcons();
			break;

			case 22:
			$("#telaAgradecimento").show();
			break;
		}
	}

	//Função para remover a cena
	function unloadScene() {
		switch(scene) {
			case 1:
			$("#telaNome").hide();
			break;

			case 2:
			$("#telaVideoOnibus1").hide();
			break;

			case 3:
			$("#telaPrevisaoDoTempo").hide();
			break;

			case 4:
			$("#telaVideoOnibus1ponto1").hide();
			break;

			case 5:
			$("#telaInfografico1").hide();
			break;

			case 6:
			$("#telaVideoOnibus2").hide();
			break;

			case 7:
			$("#telaRioSujo").hide();
			break;

			case 8:
			$("#telaChegadaCorsan").hide();
			break;

			case 9:
			$("#telaTratamentoAgua").hide();
			break;

			case 10:
			$("#telaLaboratorio").hide();
			break;

			case 11:
			$("#telaTabela1").hide();
			break;

			case 12:
			$("#telaTabela2").hide();
			break;

			case 13:
			$("#telaTabela3").hide();
			break;

			case 14:
			$("#telaLaboratorio2").hide();
			break;

			case 15:
			$("#telaVideoOnibusVolta").hide();
			break;

			case 16:
			$("#telaEscola").hide();
			break;

			case 17:
			$("#telaSalaDeAula").hide();
			break;

			case 18:
			$("#telaSalaDeAula2").hide();
			break;

			case 19:
			$("#telaExemplos").hide();
			$("body").css("overflow", "hidden");
			window.scrollTo(0,0);
			break;

			case 20:
			$("#telaSalaDeAula3").hide();
			break;

			case 21:
			$("#telaQuestoes").hide();
			$("body").css("overflow", "hidden");
			window.scrollTo(0,0);
			break;

			case 22:
			$("#telaAgradecimento").hide();
			break;
		}
	}