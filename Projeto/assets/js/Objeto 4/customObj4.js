
var nomeDoUsuario;
var scene = 1;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;


//Variáveis especificas
var videoOnibus1Assistido = false;
var videoOnibus2Assistido = false;
var videoOnibusVoltandoAssistido = false;

var stuckOnFirstImage = true;
var viuTratamento = false;

var conversaLaboratorio = 1;
var conversaLaboratorioCompleta = false;

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

}


//Implementação do recurso sleep
function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
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

//Função para assistir o segundo vídeo do ônibus
function watchVideoOnibus2() {
	$(videoOnibus2).on('ended',function(){
		if (scene == 4 && videoOnibus2Assistido == false) {
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
		if (scene == 12 && videoOnibusVoltandoAssistido == false) {
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
	}, 17500)
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


	//Função chamada ao clicar na seta direita
	$(document).on('click', '#iconSetaDireita', function() {
		switch (scene) {

			case 2:
			case 4:
			case 5:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			nextScene();
			break
			case 3:
			stuckOnFirstImage = false;
			nextScene();
			break;

			case 6:
			if (viuTratamento == false ) {
				swal("","Veja ao menos uma das etapas de tratamento da água!", "error");
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
			previousScene();
			break;


		}
	});






	//Função para carregar a cena
	function loadScene() {
		switch(scene) {

			case 1:
			$("#telaNome").show();
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
				allowNextScene();
			}
			break;

			case 3:
			$("#telaInfografico1").show();
			changeTitle(" ");
			showArrows();
			checkIfStuck();
			break;

			case 4:
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
				allowNextScene();
			}
			break;

			case 5:
			$("#telaChegadaCorsan").show();
			showArrows();
			changeTitle(" ");
			break;

			case 6:
			$("#telaTratamentoAgua").show();
			$("#textoTratamento").html(dataJSON.telaTratamento.fala1Guia);
			break;

			case 7:
			$("#telaLaboratorio").show();
			changeTitle(" ");
			updateConversaLaboratorio();
			if (conversaLaboratorioCompleta == true) {
				allowNextScene();
			} else {
				disallowNextScene();
			}
			break;

			case 8:
			$("#telaTabela1").show();
			changeTitle(" ");
			break;

			case 9:
			$("#telaTabela2").show();
			changeTitle(" ");
			break;

			case 10:
			$("#telaTabela3").show();
			changeTitle(" ");
			break;

			case 11:
			$("#telaLaboratorio2").show();
			changeTitle(" ");

			break;

			case 12:
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
			}
			break;

			case 13:
			$("#telaEscola").show();
			changeTitle(" ");
			break;

			case 14:
			$("#telaSalaDeAula").show();
			changeTitle(" ");
			break;

			case 15:
			$("#telaSalaDeAula2").show();
			changeTitle(" ");
			break;

			case 16:
			$("#telaExemplos").show();
			changeTitle(" ");
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
			$("#telaInfografico1").hide();
			break;

			case 4:
			$("#telaVideoOnibus2").hide();
			break;

			case 5:
			$("#telaChegadaCorsan").hide();
			break;

			case 6:
			$("#telaTratamentoAgua").hide();
			break;

			case 7:
			$("#telaLaboratorio").hide();
			break;

			case 8:
			$("#telaTabela1").hide();
			break;

			case 9:
			$("#telaTabela2").hide();
			break;

			case 10:
			$("#telaTabela3").hide();
			break;

			case 11:
			$("#telaLaboratorio2").hide();
			break;

			case 12:
			$("#telaVideoOnibusVolta").hide();
			break;

			case 13:
			$("#telaEscola").hide();
			break;

			case 14:
			$("#telaSalaDeAula").hide();
			break;

			case 15:
			$("#telaSalaDeAula2").hide();
			break;

			case 16:
			$("#telaExemplos").hide();
			break;
		}
	}