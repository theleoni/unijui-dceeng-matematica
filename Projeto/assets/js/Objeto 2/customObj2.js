var scene = 1;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;
var nomeDoUsuario;
var video2Assistido = false;
var videoMediaAritmeticaAssitido = false;
var scene1DialogControl = 0;
var sceneConversa2DialogControl = 0;
var jaLeuConversa2 = false;
var stuckOnScene1 = true;
var calculadoraAberta;
$(document).ready(function() {
	hideDivsOnObjectStart();
});


function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}


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
	$("#telaVideoHidreletrica").hide();
	$("#telaConversa2").hide();
	$("#telaMediaAritmetica").hide();

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
	scene--;
	loadScene();
}

function loadScene() {

	switch (scene) {
		case 1:
		$("#telaNome").show();
		break;

		case 2:
		$("#telaVideoHidreletrica").show();
		$("#iconCalculadora").hide();
		$("#iconMais").hide();
		$("#iconHelp").hide();
		if (!video2Assistido) {
			videoHidreletrica.currentTime = 0;
			disallowNextScene();
			waitVideoSceneVideo1ToEnd();
		} else {
			videoHidreletrica.play();
			videoHidreletrica.currentTime = 0;
			allowNextScene();
		}

		break;

		case 3:
		$("#telaConversa2").show();
		changeTitle("Teste de titulo 2. É nóis clan");
		if (!jaLeuConversa2) {
			disallowNextScene();
		} else {
			allowNextScene();
		}
		loadChatConversa2();
		break;


		case 4: {
			$("#telaMediaAritmetica").show();
			$('body').css("background-color", "#CEFDFD")
			break;
		}
	}
}

function unloadScene() {
	switch (scene) {
		case 1:
		$("#telaNome").hide();
		break;
		case 2:
		$("#telaVideoHidreletrica").hide();
		$("#iconCalculadora").show();
		$("#iconMais").show();
		$("#iconHelp").show();
		case 3:
		$("#telaConversa2").hide();
		break;
		case 4:
		$("#telaMediaAritmetica").hide();
		$('body').css("background-color", "#FFFFFF")

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
		$("#iconesFixos").show();

		nomeDoUsuario = $("#inputNome").val();
		$("#inputNomeContainer").fadeOut(defaultFadeTime);
		$("#containerPersonagemExtraTelaNome").fadeIn(extendedFadeTime);
		$("#balao1TelaNome").show();
		$("#balao1TelaNome").css("opacity", "0");
		$("#balao2TelaNome").fadeIn(extendedFadeTime*1.5);
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico1);
		$("#fala2TelaNome").fadeIn(extendedFadeTime*1.5);
		$("#setaDireitaNome").fadeIn(defaultFadeTime)
		$("#alertNome").hide();

		disallowNextScene();
		$("#iconSetaEsquerda").hide();
	} else {
		$("#alertNome").show();

	}
});


$(document).on('click', '#setaDireitaNome', function() {
	switch (scene1DialogControl) {
		case 0: 
		$("#setaEsquerdaNome").show();
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico2);
		scene1DialogControl++;
		break;

		case 1:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças1);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		break;

		case 2: 
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico3);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		break;

		case 3:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças2);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		break;

		case 4:
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico4);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		break;

		case 5:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças3);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		break;

		case 6:
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico5);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		break;

		case 7:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças4);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl++;
		allowNextScene();
		$("#setaDireitaNome").hide();

		setTimeout(function() {
			if(stuckOnScene1) {
				swal("Preso aqui?", "Clique na seta no canto inferior direito para prosseguir");
				$("#iconSetaDireita").css("color", "red");
				$("#iconSetaDireita").css("font-size", "60px");
				stuckOnScene1 = false;

				setTimeout(function() {
					$("#iconSetaDireita").css("color", "gray");
					$("#iconSetaDireita").css("font-size", "40px");
					
				}, 5000) 
			}
		}, 5000) 

		break;

	}
});

$(document).on('click', '#setaEsquerdaNome', function() {
	switch (scene1DialogControl) {

		case 1:
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico1);
		scene1DialogControl--;
		$("#setaEsquerdaNome").hide();
		break;

		case 2: 
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico2);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		break;

		case 3:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças1);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		break;

		case 4:
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico3);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		break;

		case 5:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças2);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		break;

		case 6:
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico4);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		break;

		case 7:
		$("#balao1TelaNome").css("opacity", "1");
		$("#fala1TelaNome").html(dataJSON.telaNome.falaCrianças3);
		$("#fala1TelaNome").fadeIn(shortFadeTime);
		$("#balao2TelaNome").css("opacity", "0");
		$("#fala2TelaNome").html("");
		$("#fala2TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		break;

		case 8:
		$("#balao2TelaNome").css("opacity", "1");
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico5);
		$("#fala2TelaNome").fadeIn(shortFadeTime);
		$("#balao1TelaNome").css("opacity", "0");
		$("#fala1TelaNome").html("");
		$("#fala1TelaNome").fadeOut(shortFadeTime);
		scene1DialogControl--;
		$("#setaDireitaNome").show();
		allowNextScene();
		break;

	}
});


function waitVideoSceneVideo1ToEnd() {
	requestVideoFullScreen(videoHidreletrica);
	video2Assistido = true;

	$(videoHidreletrica).on('ended',function(){
		exitFullScreen(videoHidreletrica);
		if (scene == 2) {
			nextScene();

		}

	});
}


function waitVideoMediaAritmeticaToEnd() {
	videoMediaAritmeticaAssitido = true;
	videoMediaAritmetica.currentTime = 0;
	requestVideoFullScreen(videoMediaAritmetica);

	$(videoMediaAritmetica).on('ended',function(){
		exitFullScreen(videoMediaAritmetica);
		allowNextScene();
		videoMediaAritmetica.pause();
	});

}
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
}

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

$(document).on('click', '#iconSetaDireita', function() {
	switch (scene) {
		case 1:
		stuckOnScene1 = false;
		$("#tituloGeral").html(" ");
		$("#iconSetaEsquerda").show();
		nextScene();
		break;
		case 4:
		if (!videoMediaAritmeticaAssitido) {
			disallowNextScene();
		} else {
			allowNextScene();
			videoMediaAritmetica.currentTime = 35;
		}
		break;
		case 2: 
		case 3:
		nextScene();
		break;

	}
});


$(document).on('click', '#iconSetaEsquerda', function() {
	switch(scene) {
		case 2:
		case 3:
		case 4:
		case 5:
		allowNextScene();
		previousScene();
		break;

	}
});

function allowNextScene() {
	$("#iconSetaDireita").show();
}

function disallowNextScene() {
	$("#iconSetaDireita").hide();
}

$(document).on('click', '#iconCalculadora', function () {
	if (calculadoraAberta){
		hideCalc();
	}
	else {
		showCalc();
	}
});

$(document).on('click', '#iconFechar', function () {
	closeObject();
});


function showCalc() {
	calculadoraAberta = true;
	$("#geral").hide();
	$("#iconMais").hide();
	$("#iconHelp").hide();
	$("#iconFechar").hide();
	$("#iconSetaEsquerda").hide();
	$("#iconSetaDireita").hide();
	$("#calculadora").show();	
	$("#iconCalculadora").css("color", "red");
}

function hideCalc() {
	$("#geral").show();
	$("#iconMais").show();
	$("#iconHelp").show();
	$("#iconFechar").show();
	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#calculadora").hide();	
	$("#iconCalculadora").css("color", "green");
	calculadoraAberta = false;
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

	},
	function(){
		window.location.href = "../index.html";

	});
}


$(document).on('click', '#setaEsquerdaConversa2', function() {
	sceneConversa2DialogControl--;
	loadChatConversa2();
});

$(document).on('click', '#setaDireitaConversa2', function() {
	sceneConversa2DialogControl++;
	loadChatConversa2();
});


$(document).on('click', '#iconePlayMediaAritmetica', function() {
	waitVideoMediaAritmeticaToEnd();
	videoMediaAritmetica.play();
});


function changeTitle(titulo) {

	$("#tituloGeral").html(titulo);

}
function loadChatConversa2() {
	switch (sceneConversa2DialogControl) {
		case 0: 
		$("#setaEsquerdaConversa2").hide();
		$("#balao1TelaConversa2").css("opacity", "1");
		$("#fala1TelaConversa2").html(dataJSON.telaConversa2.falaCrianças1);
		$("#fala1TelaConversa2").fadeIn(shortFadeTime);
		$("#balao2TelaConversa2").css("opacity", "0");
		$("#fala2TelaConversa2").html("");
		$("#fala2TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 1:
		$("#setaEsquerdaConversa2").show();
		$("#balao2TelaConversa2").css("opacity", "1");
		$("#fala2TelaConversa2").html(dataJSON.telaConversa2.falaChico1);
		$("#fala2TelaConversa2").fadeIn(shortFadeTime);
		$("#balao1TelaConversa2").css("opacity", "0");
		$("#fala1TelaConversa2").html("");
		$("#fala1TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 2: 
		$("#balao1TelaConversa2").css("opacity", "1");
		$("#fala1TelaConversa2").html(dataJSON.telaConversa2.falaCrianças2);
		$("#fala1TelaConversa2").fadeIn(shortFadeTime);
		$("#balao2TelaConversa2").css("opacity", "0");
		$("#fala2TelaConversa2").html("");
		$("#fala2TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 3:
		$("#balao2TelaConversa2").css("opacity", "1");
		$("#fala2TelaConversa2").html(dataJSON.telaConversa2.falaChico2);
		$("#fala2TelaConversa2").fadeIn(shortFadeTime);
		$("#balao1TelaConversa2").css("opacity", "0");
		$("#fala1TelaConversa2").html("");
		$("#fala1TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 4: 
		$("#balao1TelaConversa2").css("opacity", "1");
		$("#fala1TelaConversa2").html(dataJSON.telaConversa2.falaCrianças3);
		$("#fala1TelaConversa2").fadeIn(shortFadeTime);
		$("#balao2TelaConversa2").css("opacity", "0");
		$("#fala2TelaConversa2").html("");
		$("#fala2TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 5:
		$("#balao2TelaConversa2").css("opacity", "1");
		$("#fala2TelaConversa2").html(dataJSON.telaConversa2.falaChico3);
		$("#fala2TelaConversa2").fadeIn(shortFadeTime);
		$("#balao1TelaConversa2").css("opacity", "0");
		$("#fala1TelaConversa2").html("");
		$("#fala1TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 6:
		$("#balao2TelaConversa2").css("opacity", "1");
		$("#fala2TelaConversa2").html(dataJSON.telaConversa2.falaChico4);
		$("#fala2TelaConversa2").fadeIn(shortFadeTime);
		$("#balao1TelaConversa2").css("opacity", "0");
		$("#fala1TelaConversa2").html("");
		$("#fala1TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 7:
		$("#balao2TelaConversa2").css("opacity", "1");
		$("#fala2TelaConversa2").html(dataJSON.telaConversa2.falaChico5);
		$("#fala2TelaConversa2").fadeIn(shortFadeTime);
		$("#balao1TelaConversa2").css("opacity", "0");
		$("#fala1TelaConversa2").html("");
		$("#fala1TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 8: 
		$("#balao1TelaConversa2").css("opacity", "1");
		$("#fala1TelaConversa2").html(dataJSON.telaConversa2.falaCrianças4);
		$("#fala1TelaConversa2").fadeIn(shortFadeTime);
		$("#balao2TelaConversa2").css("opacity", "0");
		$("#fala2TelaConversa2").html("");
		$("#fala2TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 9:
		$("#balao2TelaConversa2").css("opacity", "1");
		$("#fala2TelaConversa2").html(dataJSON.telaConversa2.falaChico6);
		$("#fala2TelaConversa2").fadeIn(shortFadeTime);
		$("#balao1TelaConversa2").css("opacity", "0");
		$("#fala1TelaConversa2").html("");
		$("#fala1TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 10: 
		$("#setaDireitaConversa2").show();

		$("#balao1TelaConversa2").css("opacity", "1");
		$("#fala1TelaConversa2").html(dataJSON.telaConversa2.falaCrianças5);
		$("#fala1TelaConversa2").fadeIn(shortFadeTime);
		$("#balao2TelaConversa2").css("opacity", "0");
		$("#fala2TelaConversa2").html("");
		$("#fala2TelaConversa2").fadeOut(shortFadeTime);
		break;

		case 11: 
		$("#setaDireitaConversa2").hide();
		$("#balao1TelaConversa2").css("opacity", "1");
		$("#fala1TelaConversa2").html(dataJSON.telaConversa2.falaCrianças6);
		$("#fala1TelaConversa2").fadeIn(shortFadeTime);
		$("#balao2TelaConversa2").css("opacity", "0");
		$("#fala2TelaConversa2").html("");
		$("#fala2TelaConversa2").fadeOut(shortFadeTime);
		jaLeuConversa2 = true;
		allowNextScene();
		break;
	}
}


