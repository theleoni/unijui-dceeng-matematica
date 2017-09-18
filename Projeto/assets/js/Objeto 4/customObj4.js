
var nomeDoUsuario;
var scene = 1;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;


//Variáveis especificas
var videoOnibus1Assistido = false;
var videoOnibus2Assistido = false;

var stuckOnFirstImage = true;



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
			nextScene();
			videoOnibus2Assistido = true;
		} else if (videoOnibus2Assistido == true) {
			videoOnibus2.currentTime = 0;
		}

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
	$("#iconSetaEsuerda").hide();
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
		nextScene();
		break
		case 3:
		stuckOnFirstImage = false;
		nextScene();
		break;
	}
});

//Função chamada ao clicar na seta esquerda
$(document).on('click', '#iconSetaEsquerda', function() {
	switch (scene) {

		case 3:
		case 4:
		case 5:
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
		showArrows();

		checkIfStuck();
		break;

		case 4:
		disallowPreviousScene();
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

	}
}