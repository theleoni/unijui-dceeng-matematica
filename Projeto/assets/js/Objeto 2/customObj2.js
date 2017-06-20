var scene;

var defaultFadeTime = 500;
var extendedFadeTime = 3000;

var nomeDoUsuario;


$(document).ready(function() {
	hideDivsOnObjectStart();
});


function hideDivsOnObjectStart() {
	$("#calculadora").hide();
	$("#iconesFixos").hide();
	$("#containerPersonagemExtraTelaNome").hide();
	hideIconsNome();
}

function hideIconsNome() {
	$("#alertNome").hide();
}

function nextScene() {
	unloadScene();
	scene++;
	loadScene();

}

function previousScene() {
	unloadScene();
	scene();
	loadScene();
}

function loadScene() {

	switch (scene) {
		case 1:
		break;
	}
}

function unloadScene() {
	switch (scene) {
		case 1:
		break;
	}
}

$(document).on('keyup', '#inputNome', function (e) {
	if(e.which == 13) {
		$('#botaoNome').click();	}
	});

$(document).on('click', '#botaoNome', function() {
	nomeDoUsuario = $("#inputNome").val();
	if (nomeDoUsuario != "") {
		nomeDoUsuario = $("#inputNome").val();
		$("#inputNomeContainer").fadeOut(defaultFadeTime);
		$("#containerPersonagemExtraTelaNome").fadeIn(extendedFadeTime);
	} else {
		$("#alertNome").show();
	}
});

