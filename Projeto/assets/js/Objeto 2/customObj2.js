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
var questionNumber = 1;
var alternativasQuestao1;
var alreadyPopulated = [false];
var corretasQuestao1 = [];
var marcadasQuestao1 = [];
var firstTimeQuestion1 = true;
$(document).ready(function() {
	hideDivsOnObjectStart();
});


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
	$("#telaPrimeirasQuestoes").hide();

	hideIconsNome();
}

function hideIconsNome() {
	$("#alertNome").hide();
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

		case 5: {
			$("#telaPrimeirasQuestoes").show();
			$("#alertQ1").hide();
			loadQuestion();
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
		case 5:
		$("#telaPrimeirasQuestoes").hide();
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
		if (scene == 4) {
			allowNextScene();
		}
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
		case 3:
		if (!videoMediaAritmeticaAssitido) {
			disallowNextScene();
		} else {
			allowNextScene();
			videoMediaAritmetica.currentTime = 35;
		}
		nextScene();
		break;
		case 2: 
		case 4:
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

$(document).on('click', '.whiteSpaceButton', function() {
	$(this).toggleClass("btn-primary");
	$(this).toggleClass("btn-default");
})


$(document).on('click', '#botaoEnviarRespostaQ1', function() {
	checkQuestion1();
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

function populateQuestionArray(vetor) {
	vetor = [dataJSON.telaPrimeirasQuestoes.afirmacao1Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao2Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao3Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao4Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao5Questao1];
	vetor.sort(function(a,b){return 0.5 - Math.random()});
	return vetor;
}

function checkIfTrue() {
	if (alternativasQuestao1[0].includes("%verdadeiro%")) {
		alternativasQuestao1[0] = alternativasQuestao1[0].replace("%verdadeiro%", "");
		corretasQuestao1.push(1);
	}
	if (alternativasQuestao1[1].includes("%verdadeiro%")) {
		alternativasQuestao1[1] = alternativasQuestao1[1].replace("%verdadeiro%", "");
		corretasQuestao1.push(2);

	}
	if (alternativasQuestao1[2].includes("%verdadeiro%")) {
		alternativasQuestao1[2] = alternativasQuestao1[2].replace("%verdadeiro%", "");
		corretasQuestao1.push(3);

	}
	if (alternativasQuestao1[3].includes("%verdadeiro%")) {
		alternativasQuestao1[3] = alternativasQuestao1[3].replace("%verdadeiro%", "");
		corretasQuestao1.push(4);
	}
	if (alternativasQuestao1[4].includes("%verdadeiro%")) {
		alternativasQuestao1[4] = alternativasQuestao1[4].replace("%verdadeiro%", "");
		corretasQuestao1.push(5);
	}
}


function checkQuestion1() {
	if ($("#buttonAf1").hasClass("btn-primary")) {
		marcadasQuestao1.push(1);
	}
	if ($("#buttonAf2").hasClass("btn-primary")) {
		marcadasQuestao1.push(2);
	}
	if ($("#buttonAf3").hasClass("btn-primary")) {
		marcadasQuestao1.push(3);
	}
	if ($("#buttonAf4").hasClass("btn-primary")) {
		marcadasQuestao1.push(4);
	}
	if ($("#buttonAf5").hasClass("btn-primary")) {
		marcadasQuestao1.push(5);
	}

	var stringArrayCorretas = corretasQuestao1.toString();
	var stringArraymarcadas = marcadasQuestao1.toString();
	if (stringArraymarcadas == stringArrayCorretas) {
		$("#alertQ1").show();
		$("#alertQ1").html(dataJSON.telaPrimeirasQuestoes.alertaCerto);
		$("#alertQ1").addClass("alert-success");
		$("#alertQ1").removeClass("alert-danger");

	} else {
		$("#alertQ1").show();
		$("#alertQ1").html(dataJSON.telaPrimeirasQuestoes.alertaErrado);
		$("#alertQ1").addClass("alert-danger");
		$("#alertQ1").removeClass("alert-success");

	}
	marcadasQuestao1 = [];

}
function loadQuestion() {
	switch (questionNumber) {
		case 1: 
		if (firstTimeQuestion1) {
		alternativasQuestao1 = populateQuestionArray(alternativasQuestao1);
		firstTimeQuestion1 = false;
	}


		checkIfTrue();
		$("#buttonAf1").html(alternativasQuestao1[0].replace("%numeroAlternativa%", "I"));
		$("#buttonAf2").html(alternativasQuestao1[1].replace("%numeroAlternativa%", "II"));
		$("#buttonAf3").html(alternativasQuestao1[2].replace("%numeroAlternativa%", "III"));
		$("#buttonAf4").html(alternativasQuestao1[3].replace("%numeroAlternativa%", "IV"));
		$("#buttonAf5").html(alternativasQuestao1[4].replace("%numeroAlternativa%", "V"));

		break;
	}
}
