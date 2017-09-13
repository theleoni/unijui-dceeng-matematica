



$(document).ready(function() {
	hideDivsOnObjectStart();
});

// ############################################################################################################################################################################################################################################

function hideDivsOnObjectStart() {
	$("#calculadora").hide();
	$("#iconesFixos").hide();
	$("#alertNome").hide();

}

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function nextScene() {
	unloadScene();
	scene++;
	loadScene();

}

function previousScene() {
	unloadScene();
	scene--;
	loadScene();
}

$.getJSON('../assets/js/Objeto 2/dataObj2.json', function(data) {
	dataJSON = data;
});