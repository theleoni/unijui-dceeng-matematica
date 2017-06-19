var scene;


$(document).ready(function() {
	hideDivsOnObjectStart();
});


function hideDivsOnObjectStart() {
	$("#calculadora").hide();
	$("#iconesFixos").hide();
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

$( "#verificacaoNome" ).keypress(function( event ) {
	alert("oi");

	if ( event.which == 13 ) {
		alert("oi");
	}
});