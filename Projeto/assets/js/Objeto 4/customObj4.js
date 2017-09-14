
var nomeDoUsuario;
var scene = 0;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;

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





//Função para alterar os títulos das cenas
function changeTitle(titulo) {
	$("#tituloGeral").html(titulo);
}

//Função para carregar a cena
function loadScene() {
	switch(scene) {
		case 1:
		changeTitle(" ");
		$("#proximaTela").show();
		break;
	}
}

//Função para remover a cena
function unloadScene() {
	switch(scene) {
		case 1:
		$("#proximaTela").hide();
		break;
	}
}