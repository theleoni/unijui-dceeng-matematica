var scene;

var defaultFadeTime = 500;
var extendedFadeTime = 3000;

var nomeDoUsuario;


$(document).ready(function() {
	hideDivsOnObjectStart();
});


$.getJSON('../assets/js/Objeto 2/dataObj2.json', function(data) {
	dataJSON = data;
});

function hideDivsOnObjectStart() {
	$("#calculadora").hide();
	$("#iconesFixos").hide();
	$("#containerPersonagemExtraTelaNome").hide();
	$("#balao1TelaNome").hide();
	$("#balao2TelaNome").hide();
	$("#fala2TelaNome").hide();
	$("#setaEsquerdaNome").hide();
	$("#setaDireitaNome").hide();

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
		$("#balao2TelaNome").fadeIn(extendedFadeTime*1.5);
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico1);
		$("#fala2TelaNome").fadeIn(extendedFadeTime*1.5);
		$("#setaEsquerdaNome").fadeIn(defaultFadeTime);
		$("#setaDireitaNome").fadeIn(defaultFadeTime)
		$("#alertNome").show();
	}
});

