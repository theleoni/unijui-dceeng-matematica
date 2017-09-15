
var nomeDoUsuario;
var scene = 1;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;



//Variáveis especificas
var videoOnibus1Assistido = false;
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
}


//Implementação do recursos sleep
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
	videoOnibus1Assistido = true;
	$(videoOnibus1).on('ended',function(){
		if (scene == 2) {
			nextScene();
		}

	});
}

//Funções de controle das setas nas telas
function allowNextScene() {
	$("#iconSetaDireita").show();
}

function disallowNextScene() {
	$("#iconSetaDireita").hide();
}

function allowPreviousScene() {
	$("#iconSetaEsquerda").show();
}

function disallowPreviousScene() {
	$("#iconSetaEsuerda").hide();
}

function hideArrows() {
	$("#iconSetaDireita").hide();
	$("#iconSetaEsquerda").hide();
}
function showArrows() {
	$("#iconSetaDireita").show();
	$("#iconSetaEsquerda").show();
}

//Função para alterar os títulos das cenas
function changeTitle(titulo) {
	$("#tituloGeral").html(titulo);
}

//Função para carregar a cena
function loadScene() {
	switch(scene) {

		case 1:
		$("#telaNome").show();
		changeTitle(" ");
		break;

		case 2:
		$("#telaVideoOnibus1").show();
		$("#iconCalculadora").hide();
		$("#iconMais").hide();
		$("#iconHelp").hide();
		changeTitle(" ");
		if (!videoOnibus1Assistido) {
			videoOnibus1.currentTime = 0;
			disallowNextScene();
			watchVideoOnibus1();

		} else {
			videoOnibus1.play();
			videoOnibus1.currentTime = 0;
			allowNextScene();
		}
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

	}
}