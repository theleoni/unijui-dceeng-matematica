var scene = 1;

var defaultFadeTime = 500;
var extendedFadeTime = 1250;
var shortFadeTime = 250;
var nomeDoUsuario;
var video2Assistido = false;
var videoMediaAritmeticaAssistido = false;
var videoQuestaoMediaAritmeticaAssistido = false;
var videoMedianaAssistido = false;
var videoMediana2Assistido = false;

var scene1DialogControl = 0;
var sceneConversa2DialogControl = 0;
var sceneConversa3DialogControl = 0;
var jaLeuConversa2 = false;
var jaLeuConversa3 = false;
var stuckOnScene1 = true;
var calculadoraAberta;
var questionNumber = 1;
var alternativasQuestao1;
var alternativasQuestao2;
var alreadyPopulated = [false];
var corretasQuestao1 = [];
var marcadasQuestao1 = [];
var firstTimeQuestion = [true, true];
var marcadaQ2;
var correctAnswers = [false, false];

var atividadeAtual = 0;
var atividadesCompletas = [false, false, false, false];
var verificacaoAtividade1 = [false, false];
var corretasAtividade1Moda = ["Amodal", "Amodal", "Amodal", "Unimodal", "Amodal", "Amodal", "Amodal", "Amodal", "Bimodal", "Amodal", "Unimodal", "Amodal"];
var selecionadasModa = [];
var numeroErradasModa = 0;
var corretasAtividade1Mediana = [37804, 34059, 36011, 35723, 32679, 30768.5, 32734, 32600, 32398.5, 34256, 31738, 34210.5]
var numeroErradasMediana = 0;
var inputAtividade1Mediana = [];
var mesesErradosAtividade1;

var tiposErradosAtividade2Media;
var tiposErradosAtividade2Mediana;

var numeroErradasMediaAtv2 = 0;
var numeroErradasMedianaAtv2 = 0;

var verificacaoAtividade2 = [false, false];
var valoresAtividade2Media = [];
var valoresAtividade2Mediana = [];
var corretasAtividade2Media = [60284.2, 393569.8, 21546.8, 13437.8, 15493.6, 39671, 9633.8, 11838.2];
var corretasAtividade2Mediana = [69003, 390992, 22090, 14801, 15659, 39679, 6578, 12241];

var numeroErradasMediaAtv3 = 0;
var numeroErradasMedianaAtv3 = 0;
var regioesErradasAtividade3Media;
var regioesErradasAtividade3Mediana;
var corretasAtividade3Media = [29.84, 76.87, 237.25, 79.28, 31.51];
var corretasAtividade3Mediana = [29.61, 77.42, 237.66, 78.94, 31.73];
var verificacaoAtividade3 = [false, false, false, false];
var corretasAtividade3Questao1 = ["buttonAlternativa2Atv3", "buttonAlternativa3Atv3", "buttonAlternativa5Atv3"];
var corretasAtividade3Questao2 = ["buttonAlternativa1Atv3", "buttonAlternativa4Atv3"];
var corretasAtividade3Questao3 = [0.23, -0.55, -0.41, 0.34, -0.22];
var marcadasAtividade3Questao1 = [];
var marcadasAtividade3Questao2 = [];
var erradoAtividade3Questao1 = false;
var erradoAtividade3Questao2 = false;
var erradoAtividade3Questao3 = false;

var errouAtividade4 = false;
var corretasAtividade4 = [12,12];
var verificacaoAtividade4 = false;


$(document).ready(function() {
	hideDivsOnObjectStart();
	setSwalDefaults();
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

function setSwalDefaults() {
	swal.setDefaults({
		confirmButtonText: 'Continuar',
		cancelButtonText: 'Fechar',
		showCancelButton: true,
		animation: false
	})
}
function hideDivsOnObjectStart() {
	$("#calculadora").hide();
	$("#containerGeralGraficos").hide();
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
	$("#telaVideoQuestaoMediaAritmetica").hide();
	$("#telaConsumoSeuChico").hide();
	$("#telaQuestao2").hide();
	$("#telaMediana").hide();
	$("#telaMediana2").hide();
	$("#introducaoModa").hide();
	$("#tabelasModa").hide();
	$("#telaConversa3").hide();
	$("#telaSelecaoQuestoes").hide();
	$("#atividade1").hide();
	$("#atividade2").hide();
	$("#atividade3").hide();
	$("#atividade4").hide();
	$("#telaAgradecimento").hide();

	$("#perguntasAtividade3").hide();
	$("#formAtividade3").hide();		
	$("#divQuestaoAtividade3").hide();


	hideIconsNome();
}

function hideIconsNome() {
	$("#alertNome").hide();
}



function loadScene() {
	switch (scene) {
		case 1:
		$("#telaNome").show();
		changeTitle(" ");
		break;

		case 2:
		$("#telaVideoHidreletrica").show();
		$("#iconCalculadora").hide();
		$("#iconMais").hide();
		$("#iconHelp").hide();
		changeTitle(" ");
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
		changeTitle(" ");
		if (!jaLeuConversa2) {
			disallowNextScene();
		} else {
			allowNextScene();
		}
		loadChatConversa2();
		break;


		case 4:
		$("#telaMediaAritmetica").show();
		$('body').css("background-color", "#CEFDFD")
		changeTitle(" ");
		break;


		case 5:
		$("#telaPrimeirasQuestoes").show();
		$("#alertQ1").hide();
		$("body").css("overflow", "auto");
		changeTitle(" ");
		loadQuestion();
		break;

		case 6:
		$("#telaVideoQuestaoMediaAritmetica").show();
		$('body').css("background-color", "#CEFDFD")
		changeTitle(" ");
		break;

		case 7:
		$("#telaConsumoSeuChico").show();
		changeTitle(" ");
		break;

		case 8:
		$("#telaQuestao2").show();
		loadQuestion();
		changeTitle(" ");
		break;

		case 9:
		$("#telaMediana").show();
		$('body').css("background-color", "#CEFDFD")
		changeTitle(" ");

		break;

		case 10:
		$("#telaMediana2").show();
		$('body').css("background-color", "#CEFDFD")
		changeTitle(" ");

		break;

		case 11:
		$("#introducaoModa").show();
		changeTitle(" ");
		break;

		case 12:
		$("#tabelasModa").show();
		changeTitle("Vamos observar os pagamentos da conta de luz de Joana, Arthur e Mateus");
		$("body").css("overflow", "auto");
		break;

		case 13:
		$("#telaConversa3").show();
		changeTitle(" ");
		if (!jaLeuConversa3) {
			disallowNextScene();
		} else {
			allowNextScene();
		}
		loadChatConversa3();
		break;

		case 14:
		$("#telaSelecaoQuestoes").show();
		disallowNextScene();
		unloadQuestionAtividade();
		changeTitle(" ");
		break;

		case 15:
		$("#telaAgradecimento").show();
		changeTitle(" ");
		break;

	}
	$("#iconMais").hide();

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
		break;

		case 3:
		$("#telaConversa2").hide();
		break;

		case 4:
		$("#telaMediaAritmetica").hide();
		$('body').css("background-color", "#FFFFFF")
		break;

		case 5:
		$("#telaPrimeirasQuestoes").hide();
		$("body").css("overflow", "hidden");
		window.scrollTo(0,0);

		break;

		case 6:
		$("#telaVideoQuestaoMediaAritmetica").hide();
		$('body').css("background-color", "#FFFFFF")
		break;

		case 7:
		$("#telaConsumoSeuChico").hide();
		break;

		case 8:
		$("#telaQuestao2").hide();
		break;

		case 9:
		$("#telaMediana").hide();
		$('body').css("background-color", "#FFFFFF")
		break;

		case 10:
		$("#telaMediana2").hide();
		$('body').css("background-color", "#FFFFFF")
		break;

		case 11:
		$("#introducaoModa").hide();
		break;

		case 12:
		$("#tabelasModa").hide();
		$("body").css("overflow", "hidden");
		window.scrollTo(0,0);

		break;

		case 13:
		$("#telaConversa3").hide();
		break;

		case 14:
		$("#telaSelecaoQuestoes").hide();
		break;

		case 15:
		$("#telaAgradecimento").hide();
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
		$("#iconMais").hide();

		nomeDoUsuario = $("#inputNome").val();
		$("#nomeUsuarioTabelaModa").html($("#nomeUsuarioTabelaModa").html().replace("%fulano%", nomeDoUsuario));
		$("#inputNomeContainer").fadeOut(defaultFadeTime);
		$("#containerPersonagemExtraTelaNome").fadeIn(extendedFadeTime);
		$("#balao1TelaNome").show();
		$("#balao1TelaNome").css("opacity", "0");
		$("#balao2TelaNome").fadeIn(extendedFadeTime*1.5);
		$("#fala2TelaNome").html(dataJSON.telaNome.falaChico1);
		$("#fala2TelaNome").fadeIn(extendedFadeTime*1.5);
		$("#setaDireitaNome").fadeIn(defaultFadeTime)
		$("#alertNome").hide();
		video1TelaNome.play();
		video2TelaNome.play();
		video1TelaConversa2.play();
		video2TelaConversa2.play();
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
	videoMediaAritmeticaAssistido = true;
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

function waitVideoMedianaToEnd() {
	videoMedianaAssistido = true;

	videoMediana.currentTime = 0;
	requestVideoFullScreen(videoMediana);

	$(videoMediana).on('ended',function(){
		exitFullScreen(videoMediana);
		if (scene == 9) {
			allowNextScene();
		}
		videoMediana.pause();
	});

}

function waitVideoMediana2ToEnd() {
	videoMediana2Assistido = true;
	videoMediana2.currentTime = 0;
	requestVideoFullScreen(videoMediana2);

	$(videoMediana2).on('ended',function(){
		exitFullScreen(videoMediana2);
		if (scene == 10) {
			allowNextScene();
		}
		videoMediana2.pause();
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
	video.play();
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

		case 2:
		case 4:
		case 7:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		nextScene();
		break;
		case 15:
		swal("","Você finalizou o objeto!", "error");
		break;
		case 3:
		if (!videoMediaAritmeticaAssistido) {
			disallowNextScene();;
		} else {
			allowNextScene();
			videoMediaAritmetica.currentTime = 35;
		}
		nextScene();
		break;

		case 5:
		if (!videoQuestaoMediaAritmeticaAssistido) {
			disallowNextScene();
		} else {
			allowNextScene();
			videoQuestaoMediaAritmetica.currentTime = 35;
		}
		nextScene();
		break;

		case 6:
		questionNumber++;
		nextScene();
		break;

		case 8:
		if (!videoMedianaAssistido) {
			disallowNextScene();

		} else {
			allowNextScene();
			videoMediana.currentTime = 35;

		}
		nextScene();
		break;

		case 9:
		if (!videoMediana2Assistido) {
			disallowNextScene();
		} else {
			allowNextScene();
			videoMediana2.currentTime = 35;
		}
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
		case 6:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		allowNextScene();
		previousScene();
		break;

		case 7:
		questionNumber--;
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
	$("#calculadora").dialog({
		closeOnEscape: false,
		open: function(event, ui) {
			$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
		},
		focus: function(event, ui) {
			$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
		},
		height: 600,
		width: 336
	});
	$("#iconCalculadora").css("color", "red");
	calculadoraAberta = true;

}

function hideCalc() {
	$("#calculadora").dialog('close');
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

	}).then(function() {
		window.location.href = "../index.html";
	})
}


$(document).on('click', '#setaEsquerdaConversa2', function() {
	sceneConversa2DialogControl--;
	loadChatConversa2();
});

$(document).on('click', '#setaDireitaConversa2', function() {
	sceneConversa2DialogControl++;
	loadChatConversa2();
});

$(document).on('click', '#setaEsquerdaConversa3', function() {
	sceneConversa3DialogControl--;
	loadChatConversa3();
});

$(document).on('click', '#setaDireitaConversa3', function() {
	sceneConversa3DialogControl++;
	loadChatConversa3();
});


$(document).on('click', '#iconePlayMediaAritmetica', function() {
	waitVideoMediaAritmeticaToEnd();
	videoMediaAritmetica.play();
});

$(document).on('click', '.whiteSpaceButton', function() {
	$(this).toggleClass("btn-primary");
})


$(document).on('click', '#botaoEnviarRespostaQ1', function() {
	checkQuestion1();
});

$(document).on('click', '#botaoEnviarRespostaQ2', function() {
	checkQuestionAnswer();
});
$(document).on('click', '#iconePlayQuestaoMediaAritmetica', function() {
	waitVideoQuestaoMediaAritmeticaToEnd();
	videoQuestaoMediaAritmetica.play();
});

$(document).on('click', '.alternativasQ2', function() {
	$(this).addClass("btn-primary");
	$(this).siblings().removeClass("btn-primary");
	marcadaQ2 = $(this);
})

$(document).on('click', '#iconePlayMediana', function() {
	waitVideoMedianaToEnd();
	videoMediana.play();
});

$(document).on('click', '#iconePlayMediana2', function() {
	waitVideoMediana2ToEnd();
	videoMediana2.play();
});


$(document).on('click', '#papelSelecaoQuestao1', function() {
	atividadeAtual = 1;
	loadQuestionAtividade();
})

$(document).on('click', '#papelSelecaoQuestao2', function() {
	atividadeAtual = 2;
	loadQuestionAtividade();
})

$(document).on('click', '#papelSelecaoQuestao3', function() {
	atividadeAtual = 3;
	loadQuestionAtividade();
})

$(document).on('click', '#papelSelecaoQuestao4', function() {
	atividadeAtual = 4;
	loadQuestionAtividade();
})

$(document).on('click', '#botaoEnviarRespostaAtv1', function() {
	verificarRespostaAtividade();
})


$(document).on('click', '#botaoEnviarRespostaAtv2', function() {
	verificarRespostaAtividade();
})

$(document).on('click', '#botaoEnviarRespostaAtv3', function() {
	verificarRespostaAtividade();
})

$(document).on('click', '#botaoEnviarRespostaAtv4', function() {
	verificarRespostaAtividade();
})

$(document).on('click', '#imgGasNatural', function() {
	graficoGasNatural();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.gasNatural);
	popOutGraph();
})

$(document).on('click', '#imgHidreletrica', function() {
	graficoHidreletrica();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.hidreletrica);
	popOutGraph();
})

$(document).on('click', '#imgPetroleo', function() {
	graficoPetroleo();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.petroleo);
	popOutGraph();
})

$(document).on('click', '#imgCarvao', function() {
	graficoCarvao();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.carvao);
	popOutGraph();
})

$(document).on('click', '#imgNuclear', function() {
	graficoNuclear();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.nuclear);
	popOutGraph();
})

$(document).on('click', '#imgBiomassa', function() {
	graficoBiomassa();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.biomassa);
	popOutGraph();
})

$(document).on('click', '#imgEolica', function() {
	graficoEolica();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.eolica);
	popOutGraph();
})

$(document).on('click', '#imgOutras', function() {
	graficoOutras();
	verificacaoAtividade2[1] = true;
	updateQuestionAtividadeText();
	$("#textoGraficos").html(dataJSON.graficos.outras);
	popOutGraph();
})

$(document).on('click', '.botaoAlternativasAtv3', function() {
	$(this).toggleClass("btn-primary");
	if (verificacaoAtividade3[1] == false) {
		if (marcadasAtividade3Questao1.includes($(this).attr("id"))) {
			marcadasAtividade3Questao1 = marcadasAtividade3Questao1.filter(item => item !== $(this).attr("id"));
		} else {
			marcadasAtividade3Questao1.push($(this).attr("id"));
		}
	} else if (verificacaoAtividade3[2] == false) {
		if (marcadasAtividade3Questao2.includes($(this).attr("id"))) {
			marcadasAtividade3Questao2 = marcadasAtividade3Questao2.filter(item => item !== $(this).attr("id"));
		} else {
			marcadasAtividade3Questao2.push($(this).attr("id"));
		}
	}
})


$(document).on('click', '.iconSetaVoltarAtividades', function() {
	unloadQuestionAtividade();
})

$(document).on('click', '#iconHelp', function() {
	if (scene != 14) {
		showHelp(scene);
	} else {
		showHelp(scene + atividadeAtual.toString());
	}
})


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

function loadChatConversa3() {
	switch (sceneConversa3DialogControl) {
		case 0:
		$("#setaEsquerdaConversa3").hide();
		$("#balao1TelaConversa3").css("opacity", "1");
		$("#fala1TelaConversa3").html(dataJSON.telaConversa3.falaJoana1);
		$("#fala1TelaConversa3").fadeIn(shortFadeTime);
		$("#balao2TelaConversa3").css("opacity", "0");
		$("#fala2TelaConversa3").html("");
		$("#fala2TelaConversa3").fadeOut(shortFadeTime);
		$("#balao3TelaConversa3").css("opacity", "0");
		$("#fala3TelaConversa3").html("");
		$("#fala3TelaConversa3").fadeOut(shortFadeTime);
		break;

		case 1:
		$("#setaEsquerdaConversa3").show();
		$("#setaDireitaConversa3").show();

		$("#balao1TelaConversa3").css("opacity", "0");
		$("#fala1TelaConversa3").html("");
		$("#fala1TelaConversa3").fadeOut(shortFadeTime);
		$("#balao2TelaConversa3").css("opacity", "1");
		$("#fala2TelaConversa3").html(dataJSON.telaConversa3.falaMateus1);
		$("#fala2TelaConversa3").fadeIn(shortFadeTime);
		$("#balao3TelaConversa3").css("opacity", "0");
		$("#fala3TelaConversa3").html("");
		$("#fala3TelaConversa3").fadeOut(shortFadeTime);
		break;

		case 2:
		$("#setaDireitaConversa3").hide();
		$("#balao1TelaConversa3").css("opacity", "0");
		$("#fala1TelaConversa3").html("");
		$("#fala1TelaConversa3").fadeOut(shortFadeTime);
		$("#balao2TelaConversa3").css("opacity", "0");
		$("#fala2TelaConversa3").html("");
		$("#fala2TelaConversa3").fadeOut(shortFadeTime);
		$("#balao3TelaConversa3").css("opacity", "1");
		$("#fala3TelaConversa3").html(dataJSON.telaConversa3.falaArthur1.replace("%fulano%", nomeDoUsuario));
		$("#fala3TelaConversa3").fadeIn(shortFadeTime);

		jaLeuConversa3 = true;
		allowNextScene();
		break;
	}
}
function populateQuestionArray(vetor) {
	switch (questionNumber) {
		case 1:
		vetor = [dataJSON.telaPrimeirasQuestoes.afirmacao1Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao2Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao3Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao4Questao1, dataJSON.telaPrimeirasQuestoes.afirmacao5Questao1];
		break;

		case 2:
		vetor = [dataJSON.questao2.alternativa1, dataJSON.questao2.alternativa2, dataJSON.questao2.alternativa3, dataJSON.questao2.alternativa4, dataJSON.questao2.alternativa5]
		break;
	}
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
		correctAnswers[questionNumber-1] = true;
		allowNextScene();
		blockQuestionButtons();

	} else {
		$("#alertQ1").show();
		$("#alertQ1").html(dataJSON.telaPrimeirasQuestoes.alertaErrado);
		$("#alertQ1").addClass("alert-danger");
		$("#alertQ1").removeClass("alert-success");

	}
	marcadasQuestao1 = [];

}

function checkQuestionAnswer() {
	switch (questionNumber) {
		case 2:
		if (marcadaQ2.html().search("3,821") != -1) {
			$("#alertQ2").show();
			$("#alertQ2").html(dataJSON.telaPrimeirasQuestoes.alertaCerto);
			$("#alertQ2").addClass("alert-success");
			$("#alertQ2").removeClass("alert-danger");
			correctAnswers[questionNumber-1] = true;
			allowNextScene();
			blockQuestionButtons();
		} else {
			$("#alertQ2").show();
			$("#alertQ2").html(dataJSON.telaPrimeirasQuestoes.alertaErrado);
			$("#alertQ2").addClass("alert-danger");
			$("#alertQ2").removeClass("alert-success");
		}
		break;
	}

}

function waitVideoQuestaoMediaAritmeticaToEnd() {
	videoQuestaoMediaAritmeticaAssistido = true;
	videoQuestaoMediaAritmetica.currentTime = 0;
	requestVideoFullScreen(videoQuestaoMediaAritmetica);

	$(videoQuestaoMediaAritmetica).on('ended',function(){
		exitFullScreen(videoQuestaoMediaAritmetica);
		if (scene == 6) {
			allowNextScene();
		}
		videoQuestaoMediaAritmetica.pause();
	});

}


function answerIsCorrect() {
	return correctAnswers[questionNumber-1];
}

function blockQuestionButtons() {
	switch (questionNumber) {
		case 1:
		$("#buttonAf1").prop("disabled", "disabled");
		$("#buttonAf2").prop("disabled", "disabled");
		$("#buttonAf3").prop("disabled", "disabled");
		$("#buttonAf4").prop("disabled", "disabled");
		$("#buttonAf5").prop("disabled", "disabled");
		$("#botaoEnviarRespostaQ1").prop("disabled", "disabled");

		if (corretasQuestao1.includes(1)) {
			$("#buttonAf1").addClass("btn-primary");
		}
		if (corretasQuestao1.includes(2)) {
			$("#buttonAf2").addClass("btn-primary");
		}
		if (corretasQuestao1.includes(3)) {
			$("#buttonAf3").addClass("btn-primary");
		}
		if (corretasQuestao1.includes(4)) {
			$("#buttonAf4").addClass("btn-primary");
		}
		if (corretasQuestao1.includes(5)) {
			$("#buttonAf5").addClass("btn-primary");
		}
		$("#alertQ1").show();
		$("#alertQ1").html(dataJSON.telaPrimeirasQuestoes.alertaCerto);
		$("#alertQ1").addClass("alert-success");
		$("#alertQ1").removeClass("alert-danger");
		break

		case 2:
		$("#opcao1Q2").prop("disabled", "disabled");
		$("#opcao2Q2").prop("disabled", "disabled");
		$("#opcao3Q2").prop("disabled", "disabled");
		$("#opcao4Q2").prop("disabled", "disabled");
		$("#opcao5Q2").prop("disabled", "disabled");
		$("#botaoEnviarRespostaQ2").prop("disabled", "disabled");

		if ($("#opcao1Q2").html().search("3,821")!= -1) {
			$("#opcao1Q2").addClass("btn-primary");
		}
		if ($("#opcao2Q2").html().search("3,821")!= -1) {
			$("#opcao2Q2").addClass("btn-primary");
		}
		if ($("#opcao3Q2").html().search("3,821")!= -1) {
			$("#opcao3Q2").addClass("btn-primary");
		}
		if ($("#opcao4Q2").html().search("3,821")!= -1) {
			$("#opcao4Q2").addClass("btn-primary");
		}
		if ($("#opcao5Q2").html().search("3,821")!= -1) {
			$("#opcao5Q2").addClass("btn-primary");
		}
		$("#alertQ2").show();
		$("#alertQ2").html(dataJSON.telaPrimeirasQuestoes.alertaCerto);
		$("#alertQ2").addClass("alert-success");
		$("#alertQ2").removeClass("alert-danger");
		break
	}
}


function resetQuestionButtons() {
	switch(questionNumber) {
		case 1:
		$("#buttonAf1").prop("disabled", "");
		$("#buttonAf2").prop("disabled", "");
		$("#buttonAf3").prop("disabled", "");
		$("#buttonAf4").prop("disabled", "");
		$("#buttonAf5").prop("disabled", "");
		$("#botaoEnviarRespostaQ1").prop("disabled", "");
		$("#buttonAf1").removeClass("btn-primary");
		$("#buttonAf2").removeClass("btn-primary");
		$("#buttonAf3").removeClass("btn-primary");
		$("#buttonAf4").removeClass("btn-primary");
		$("#buttonAf5").removeClass("btn-primary");
		$("#alertQ1").hide();
		break;

		case 2:
		$("#opcao1Q2").prop("disabled", "");
		$("#opcao2Q2").prop("disabled", "");
		$("#opcao3Q2").prop("disabled", "");
		$("#opcao4Q2").prop("disabled", "");
		$("#opcao5Q2").prop("disabled", "");
		$("#botaoEnviarRespostaQ2").prop("disabled", "");
		$("#opcao1Q2").removeClass("btn-primary");
		$("#opcao2Q2").removeClass("btn-primary");
		$("#opcao3Q2").removeClass("btn-primary");
		$("#opcao4Q2").removeClass("btn-primary");
		$("#opcao5Q2").removeClass("btn-primary");
		$("#alertQ2").hide();
		break;
	}

}
function loadQuestion() {
	switch (questionNumber) {
		case 1:
		if (firstTimeQuestion[questionNumber-1]) {
			alternativasQuestao1 = populateQuestionArray(alternativasQuestao1);
			firstTimeQuestion[questionNumber-1] = false;
			checkIfTrue();

		}
		$("#buttonAf1").html(alternativasQuestao1[0].replace("%numeroAlternativa%", "I"));
		$("#buttonAf2").html(alternativasQuestao1[1].replace("%numeroAlternativa%", "II"));
		$("#buttonAf3").html(alternativasQuestao1[2].replace("%numeroAlternativa%", "III"));
		$("#buttonAf4").html(alternativasQuestao1[3].replace("%numeroAlternativa%", "IV"));
		$("#buttonAf5").html(alternativasQuestao1[4].replace("%numeroAlternativa%", "V"));

		if (answerIsCorrect()) {
			blockQuestionButtons();
			allowNextScene();
		} else {
			disallowNextScene();
			resetQuestionButtons();
		}

		break;

		case 2:
		if (firstTimeQuestion)
			if (firstTimeQuestion[questionNumber-1]) {
				alternativasQuestao2 = populateQuestionArray(alternativasQuestao2);
				firstTimeQuestion[questionNumber-1] = false;
			}

			$("#opcao1Q2").html(alternativasQuestao2[0]);
			$("#opcao2Q2").html(alternativasQuestao2[1]);
			$("#opcao3Q2").html(alternativasQuestao2[2]);
			$("#opcao4Q2").html(alternativasQuestao2[3]);
			$("#opcao5Q2").html(alternativasQuestao2[4]);


			if (answerIsCorrect()) {
				blockQuestionButtons();
				allowNextScene();
			} else {
				disallowNextScene();
				resetQuestionButtons();
			}
			break;
		}
	}

	function updateQuestionAtividadeText() {
		switch (atividadeAtual) {
			case 1:
			if (verificacaoAtividade1[0] == false) {
				$("#instrucoesAtividade1").html(dataJSON.telaAtividade1.atv1);
			} else if (verificacaoAtividade1[1] == false) {
				$("#instrucoesAtividade1").html(dataJSON.telaAtividade1.atv2);
			} else {
				$("#instrucoesAtividade1").html(dataJSON.telaAtividade1.finalizada);
			}
			break;

			case 2:
			if (verificacaoAtividade2[0] == false && verificacaoAtividade2[1] == false) {
				$("#instrucoesAtividade2").html(dataJSON.telaAtividade2.ambas);
			} else if (verificacaoAtividade2[0] == false) {
				$("#instrucoesAtividade2").html(dataJSON.telaAtividade2.tabela);
			} else if (verificacaoAtividade2[1] == false) {
				$("#instrucoesAtividade2").html(dataJSON.telaAtividade2.grafico);
			} else {
				$("#instrucoesAtividade2").html(dataJSON.telaAtividade2.finalizada);
			}
			break;

			case 3:
			if (verificacaoAtividade3[0] == false) {
				$("#instrucoesAtividade3").html(dataJSON.telaAtividade3.atv1);
			} else if (verificacaoAtividade3[1] == false) {
				$("#instrucoesAtividade3").html("");
				$("#divQuestaoAtividade3").show();
				$("#questaoAtividade3").html(dataJSON.telaAtividade3.atv2);
			} else if(verificacaoAtividade3[2] == false) {
				$("#questaoAtividade3").html(dataJSON.telaAtividade3.atv3);
			} else if(verificacaoAtividade3[3] == false) {
				$("#questaoAtividade3").html(dataJSON.telaAtividade3.atv4);
			} else {
				$("#instrucoesAtividade3").html(dataJSON.telaAtividade3.finalizada);
				$("#questaoAtividade3").html();
			}
			break;
			case 4: 
			if (verificacaoAtividade4 == false) {
				$("#instrucoesAtividade4").html(dataJSON.telaAtividade4.atv1);
			} else {
				$("#instrucoesAtividade4").html(dataJSON.telaAtividade4.finalizada);

			}
			break;
		}
	}


	function loadQuestionAtividade() {
		$("#telaSelecaoQuestoes").hide();
		switch (atividadeAtual) {
			case 1:
			$("#atividade1").show()
			$("#alertAtividade1").hide();
			$("body").css("overflow", "auto");
			hideArrows();
			updateQuestionAtividadeText();
			break;

			case 2:
			$("#atividade2").show()
			$("#alertAtividade2").hide();
			$("body").css("overflow", "auto");
			hideArrows();
			updateQuestionAtividadeText();
			break;

			case 3:
			$("#atividade3").show()
			$("#alertAtividade3").hide();
			$("body").css("overflow", "auto");
			hideArrows();
			updateQuestionAtividadeText();
			break;

			case 4:
			$("#atividade4").show()
			$("#alertAtividade4").hide();
			$("body").css("overflow", "auto");
			hideArrows();
			updateQuestionAtividadeText();
			break;
		}
	}


	function unloadQuestionAtividade() {
		//Verifica se todas as atividades já foram realizadas
		if (atividadesCompletas.every(function(item, index, array){
			return item;
		})) {
			showArrows();
		} else {
			allowPreviousScene();
		}

		//Altera as imagens quando a atividade está completa
		if (atividadesCompletas[0] == true) {
			$("#papelSelecaoQuestao1").prop("src", "../assets/img/Objeto 2/imgAtividade1Completa.png")
		}
		if (atividadesCompletas[1] == true) {
			$("#papelSelecaoQuestao2").prop("src", "../assets/img/Objeto 2/imgAtividade2Completa.png")
		}

		if (atividadesCompletas[2] == true) {
			$("#papelSelecaoQuestao3").prop("src", "../assets/img/Objeto 2/imgAtividade3Completa.png")
		}

		if (atividadesCompletas[3] == true) {
			$("#papelSelecaoQuestao4").prop("src", "../assets/img/Objeto 2/imgAtividade4Completa.png")
		}


		switch (atividadeAtual) {
			case 1:
			$("#atividade1").hide()
			$("body").css("overflow", "hidden");
			window.scrollTo(0,0);
			$("#telaSelecaoQuestoes").show();
			atividadeAtual = 0;
			break;

			case 2:
			$("#atividade2").hide()
			$("body").css("overflow", "hidden");
			window.scrollTo(0,0);
			$("#telaSelecaoQuestoes").show();
			atividadeAtual = 0;
			break;

			case 3:
			$("#atividade3").hide()
			$("body").css("overflow", "hidden");
			window.scrollTo(0,0);
			$("#telaSelecaoQuestoes").show();
			atividadeAtual = 0;
			break;

			case 4:
			$("#atividade4").hide()
			$("body").css("overflow", "hidden");
			window.scrollTo(0,0);
			$("#telaSelecaoQuestoes").show();
			atividadeAtual = 0;
			break;
		}


	}
	function verificarRespostaAtividade() {
		switch(atividadeAtual) {
			case 1:
			if (verificacaoAtividade1[0] == false) {
				numeroErradasModa = 0;
				mesesErradosAtividade1 = null;
				getSelectionModa();
				for (var i = 0; i <= selecionadasModa.length - 1; i++){
					if (selecionadasModa[i] == corretasAtividade1Moda[i]) {
					} else {
						numeroErradasModa++;
						replaceMesValorErradoAtv1(i+1);
					}
				}
				if (numeroErradasModa == 0) {
					$("#alertAtividade1").html(dataJSON.atividadeLivro1.msgCorreta);
					$("#alertAtividade1").show();
					$("#alertAtividade1").addClass("alert-success");
					$("#alertAtividade1").removeClass("alert-danger");
					$(".hideColumn1Ativ1").css("display", "table-cell");
					fixarValoresModa();
					verificacaoAtividade1[0] = true;
					updateQuestionAtividadeText();
				} else {
					$("#alertAtividade1").show();
					$("#alertAtividade1").html(dataJSON.atividadeLivro1.msgErrada.replace("%mesesErrados%", mesesErradosAtividade1));
					$("#alertAtividade1").addClass("alert-danger");
					$("#alertAtividade1").removeClass("alert-success");
				}



			} else if (verificacaoAtividade1[1] == false) {
				numeroErradasMediana = 0;
				mesesErradosAtividade1 = null;
				getValuesMediana();
				for (var i = 0; i <= corretasAtividade1Mediana.length -1; i++) {
					if (inputAtividade1Mediana[i] == corretasAtividade1Mediana[i]) {
					} else {

						numeroErradasMediana++;
						replaceMesValorErradoAtv1(i+1);
					}
				}
				if (numeroErradasMediana == 0) {
					$("#alertAtividade1").html(dataJSON.atividadeLivro1.msgCorreta);
					$("#alertAtividade1").show();
					$("#alertAtividade1").addClass("alert-success");
					$("#alertAtividade1").removeClass("alert-danger");
					verificacaoAtividade1[1] = true;
					atividadesCompletas[0] = true;
					$("#botaoEnviarRespostaAtv1").hide();
					swal("Parabéns!", "Você finalizou esta atividade!", "success")
					fixarValoresMediana();
					updateQuestionAtividadeText();
				} else {
					$("#alertAtividade1").show();
					$("#alertAtividade1").html(dataJSON.atividadeLivro1.msgErrada.replace("%mesesErrados%", mesesErradosAtividade1));
					$("#alertAtividade1").addClass("alert-danger");
					$("#alertAtividade1").removeClass("alert-success");
				}



			} else {
				$("#instrucoesAtividade1").html("");
			}
			break;

			case 2:

			if (verificacaoAtividade2[0] == false) {
				numeroErradasMediaAtv2 = 0;
				numeroErradasMedianaAtv2 = 0;
				tiposErradosAtividade2Media = null;
				tiposErradosAtividade2Mediana = null;
				getValoresAtv2();

				for (var i = 0; i <= corretasAtividade2Media.length - 1; i++) {
					if (valoresAtividade2Media[i] == corretasAtividade2Media[i]) {
					} else {
						numeroErradasMediaAtv2++;
						replaceTipoValorErradoMediaAtv2(i+1);
					}
				}
				for (var i = 0; i <= corretasAtividade2Mediana.length - 1; i++) {
					if (valoresAtividade2Mediana[i] == corretasAtividade2Mediana[i]) {
					} else {
						numeroErradasMedianaAtv2++;
						replaceTipoValorErradoMedianaAtv2(i+1);
					}
				}

				if (numeroErradasMediaAtv2 == 0 && numeroErradasMedianaAtv2 == 0) {
					$("#alertAtividade2").html(dataJSON.atividadeLivro2.msgCorreta);
					$("#alertAtividade2").show();
					$("#alertAtividade2").addClass("alert-success");
					$("#alertAtividade2").removeClass("alert-danger");
					verificacaoAtividade2[0] = true;
					atividadesCompletas[1] = true;
					$("#botaoEnviarRespostaAtv2").hide();
					updateQuestionAtividadeText();
					fixarValoresAtv2();
					if (verificacaoAtividade2[1] == true) {
						swal("Parabéns!", "Você finalizou esta atividade!", "success");
					}
				} else if (numeroErradasMedianaAtv2 == 0) {
					$("#alertAtividade2").show();
					$("#alertAtividade2").html(dataJSON.atividadeLivro2.msgErradaMedia.replace("%tiposErrados%", tiposErradosAtividade2Media));
					$("#alertAtividade2").addClass("alert-danger");
					$("#alertAtividade2").removeClass("alert-success");
				} else if (numeroErradasMediaAtv2 == 0) {
					$("#alertAtividade2").show();
					$("#alertAtividade2").html(dataJSON.atividadeLivro2.msgErradaMediana.replace("%tiposErrados%", tiposErradosAtividade2Mediana));
					$("#alertAtividade2").addClass("alert-danger");
					$("#alertAtividade2").removeClass("alert-success");
				} else {
					$("#alertAtividade2").show();
					$("#alertAtividade2").html(dataJSON.atividadeLivro2.msgErradaAmbas.replace("%tiposErradosMedia%", tiposErradosAtividade2Media).replace("%tiposErradosMediana%", tiposErradosAtividade2Mediana));
					$("#alertAtividade2").addClass("alert-danger");
					$("#alertAtividade2").removeClass("alert-success");
				}
			}
			break;


			case 3:
			if (verificacaoAtividade3[0] == false) {
				numeroErradasMediaAtv3 = 0;
				numeroErradasMedianaAtv3 = 0;
				regioesErradasAtividade3Media = null;
				regioesErradasAtividade3Mediana = null;
				getValoresAtv3();

				for (var i = 0; i <= corretasAtividade3Media.length - 1; i++) {
					if (valoresAtividade3Media[i] == corretasAtividade3Media[i]) {
					} else {
						numeroErradasMediaAtv3++;
						replaceRegiaoValorErradoMediaAtv3(i+1);
					}
				}

				for (var i = 0; i <= corretasAtividade3Mediana.length - 1; i++){
					if (valoresAtividade3Mediana[i] == corretasAtividade3Mediana[i]) {
					} else {
						numeroErradasMedianaAtv3++;
						replaceRegiaoValorErradoMedianaAtv3(i+1);
					}
				}

				if (numeroErradasMediaAtv3 == 0 && numeroErradasMedianaAtv3 == 0) {
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgCorreta);
					$("#alertAtividade3").show();
					$("#alertAtividade3").addClass("alert-success");
					$("#alertAtividade3").removeClass("alert-danger");
					$("#alertAtividade3").fadeOut(5000);
					verificacaoAtividade3[0] = true;
					updateQuestionAtividadeText();
					fixarValoresAtv3();
					$("#perguntasAtividade3").show();
				} else if (numeroErradasMedianaAtv3 == 0) {
					$("#alertAtividade3").show();
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgErradaMedia.replace("%tiposErrados%", regioesErradasAtividade3Media));
					$("#alertAtividade3").addClass("alert-danger");
					$("#alertAtividade3").removeClass("alert-success");
				} else if (numeroErradasMediaAtv3 == 0) {
					$("#alertAtividade3").show();
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgErradaMediana.replace("%tiposErrados%", regioesErradasAtividade3Mediana));
					$("#alertAtividade3").addClass("alert-danger");
					$("#alertAtividade3").removeClass("alert-success");
				} else {
					$("#alertAtividade3").show();
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgErradaAmbas.replace("%tiposErradosMedia%", regioesErradasAtividade3Media).replace("%tiposErradosMediana%", regioesErradasAtividade3Mediana));
					$("#alertAtividade3").addClass("alert-danger");
					
				}
			} else if (verificacaoAtividade3[1] == false) {
				erradoAtividade3Questao1 = false;

				for(var i = 0; i < corretasAtividade3Questao1.length; i++) {
					if (marcadasAtividade3Questao1.includes(corretasAtividade3Questao1[i])) {
					} else {
						erradoAtividade3Questao1 = true;
					}
				}
				for(var i = 0; i < marcadasAtividade3Questao1.length; i++) {
					if (corretasAtividade3Questao1.includes(marcadasAtividade3Questao1[i])) {
					} else {
						erradoAtividade3Questao1 = true;
					}
				}
				if (erradoAtividade3Questao1 == false) {
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgCorreta);
					$("#alertAtividade3").show();
					$("#alertAtividade3").addClass("alert-success");
					$("#alertAtividade3").removeClass("alert-danger");
					$("#alertAtividade3").fadeOut(5000);
					verificacaoAtividade3[1] = true;
					updateQuestionAtividadeText();
					resetButtonsAtividade3();
				} else {
					$("#alertAtividade3").show();
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgErradaGeral);
					$("#alertAtividade3").addClass("alert-danger");
					$("#alertAtividade3").removeClass("alert-success");
				}
			} else if (verificacaoAtividade3[2] == false) {
				erradoAtividade3Questao2 = false;

				for(var i = 0; i < corretasAtividade3Questao2.length; i++) {
					if (marcadasAtividade3Questao2.includes(corretasAtividade3Questao2[i])) {
					} else {
						erradoAtividade3Questao2 = true;
					}
				}
				for(var i = 0; i < marcadasAtividade3Questao2.length; i++) {
					if (corretasAtividade3Questao2.includes(marcadasAtividade3Questao2[i])) {
					} else {
						erradoAtividade3Questao2 = true;
					}
				}
				if (erradoAtividade3Questao2 == false) {
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgCorreta);
					$("#alertAtividade3").show();
					$("#alertAtividade3").addClass("alert-success");
					$("#alertAtividade3").removeClass("alert-danger");
					$("#alertAtividade3").fadeOut(5000);
					verificacaoAtividade3[2] = true;
					updateQuestionAtividadeText();
					resetButtonsAtividade3();
					$("#formAtividade3").show();
					$("#perguntasAtividade3").hide();
				} else {
					$("#alertAtividade3").show();
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgErradaGeral);
					$("#alertAtividade3").addClass("alert-danger");
					$("#alertAtividade3").removeClass("alert-success");
				}
			} else if (verificacaoAtividade3[3] == false) {
				erradoAtividade3Questao3 = false;

				if (parseFloat($("#atv3DiferencaNorte").val().replace(",",".")) == corretasAtividade3Questao3[0]) {
					$("#atv3DiferencaNorte").css('background-color', '');
				} else {
					erradoAtividade3Questao3 = true;
					$("#atv3DiferencaNorte").css('background-color', 'red');
				}


				if (parseFloat($("#atv3DiferencaNordeste").val().replace(",", ".")) == corretasAtividade3Questao3[1]) {
					$("#atv3DiferencaNordeste").css('background-color', '');
				} else {
					erradoAtividade3Questao3 = true;
					$("#atv3DiferencaNordeste").css('background-color', 'red');
				}


				if (parseFloat($("#atv3DiferencaSudeste").val().replace(",", ".")) == corretasAtividade3Questao3[2]) {
					$("#atv3DiferencaSudeste").css('background-color', '');
				} else {
					erradoAtividade3Questao3 = true;
					$("#atv3DiferencaSudeste").css('background-color', 'red');
				}



				if (parseFloat($("#atv3DiferencaSul").val().replace(",", ".")) == corretasAtividade3Questao3[3]) {
					$("#atv3DiferencaSul").css('background-color', '');
				} else {
					erradoAtividade3Questao3 = true;
					$("#atv3DiferencaSul").css('background-color', 'red');
				}



				if (parseFloat($("#atv3DiferencaCentroOeste").val().replace(",", ".")) == corretasAtividade3Questao3[4]) {
					$("#atv3DiferencaCentroOeste").css('background-color', '');
				} else {
					erradoAtividade3Questao3 = true;
					$("#atv3DiferencaCentroOeste").css('background-color', 'red');
				}

				if (erradoAtividade3Questao3 == false) {
					$("#alertAtividade3").html(dataJSON.atividadeLivro3.msgCorreta);
					$("#alertAtividade3").show();
					$("#alertAtividade3").addClass("alert-success");
					$("#alertAtividade3").removeClass("alert-danger");
					$("#alertAtividade3").fadeOut(5000);
					verificacaoAtividade3[3] = true;
					updateQuestionAtividadeText();
					$("#formAtividade3").children().children().children().each(function() {
						$(this).prop('disabled', 'true'); 
					});
					$("#botaoEnviarRespostaAtv3").hide();
					atividadesCompletas[2] = true;
					swal("Parabéns!", "Você finalizou esta atividade!", "success");
				}
				
			}
			break;

			case 4:
			errouAtividade4 = false;
			if ($("#atv4InputModa").val() == corretasAtividade4[0]) {
				$("#atv4InputModa").css('background-color', '');
			} else {
				errouAtividade4 = true;
				$("#atv4InputModa").css('background-color', 'red');
			}

			if ($("#atv4InputMediana").val() == corretasAtividade4[0]) {
				$("#atv4InputMediana").css('background-color', '');
			} else {
				errouAtividade4 = true;
				$("#atv4InputMediana").css('background-color', 'red');
			}

			if (errouAtividade4 == false) {
				$("#alertAtividade4").html(dataJSON.atividadeLivro4.msgCorreta);
				$("#alertAtividade4").show();
				$("#alertAtividade4").addClass("alert-success");
				$("#alertAtividade4").removeClass("alert-danger");
				$("#alertAtividade4").fadeOut(5000);
				updateQuestionAtividadeText();
				$("#botaoEnviarRespostaAtv4").hide();
				atividadesCompletas[3] = true;
				swal("Parabéns!", "Você finalizou esta atividade!", "success");
				$("#atv4InputModa").prop('disabled','true');
				$("#atv4InputMediana").prop('disabled','true');

			} else {
				$("#alertAtividade4").show();
				$("#alertAtividade4").html(dataJSON.atividadeLivro4.msgErradaGeral);
				$("#alertAtividade4").addClass("alert-danger");
				$("#alertAtividade4").removeClass("alert-success");
			}
			break;
		}
	}


	function resetButtonsAtividade3() {
		$("#buttonAlternativa1Atv3").removeClass("btn-primary");
		$("#buttonAlternativa2Atv3").removeClass("btn-primary");
		$("#buttonAlternativa3Atv3").removeClass("btn-primary");
		$("#buttonAlternativa4Atv3").removeClass("btn-primary");
		$("#buttonAlternativa5Atv3").removeClass("btn-primary");

	}

	function replaceMesValorErradoAtv1(mesErrado) {

		switch (mesErrado) {

			case 1:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Janeiro";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Janeiro");
			}
			break;

			case 2:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Fevereiro";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Fevereiro");
			}
			break;

			case 3:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Março";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Março");
			}
			break;

			case 4:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Abril";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Abril");
			}
			break;		

			case 5:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Maio";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Maio");
			}
			break;

			case 6:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Junho";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Junho");
			}
			break;		

			case 7:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Julho";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Julho");
			}
			break;

			case 8:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Agosto";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Agosto");
			}
			break;		

			case 9:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Setembro";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Setembro");
			}
			break;

			case 10:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Outubro";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Outubro");
			}
			break;		

			case 11:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Novembro";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Novembro");
			}
			break;

			case 12:
			if(mesesErradosAtividade1 == null) {
				mesesErradosAtividade1 = "Dezembro";
			} else {
				mesesErradosAtividade1 = mesesErradosAtividade1.concat(", Dezembro");
			}
			break;
		}
	}

	function getSelectionModa() {
		selecionadasModa = [$("#modaJaneiro").find(":selected").text(),
		$("#modaFevereiro").find(":selected").text(),
		$("#modaMarco").find(":selected").text(),
		$("#modaAbril").find(":selected").text(),
		$("#modaMaio").find(":selected").text(),
		$("#modaJunho").find(":selected").text(),
		$("#modaJulho").find(":selected").text(),
		$("#modaAgosto").find(":selected").text(),
		$("#modaSetembro").find(":selected").text(),
		$("#modaOutubro").find(":selected").text(),
		$("#modaNovembro").find(":selected").text(),
		$("#modaDezembro").find(":selected").text() ]
	}

	function fixarValoresModa() {
		$("#tableModaJaneiro").html(corretasAtividade1Moda[0]);
		$("#tableModaFevereiro").html(corretasAtividade1Moda[1]);
		$("#tableModaMarco").html(corretasAtividade1Moda[2]);
		$("#tableModaAbril").html(corretasAtividade1Moda[3]);
		$("#tableModaMaio").html(corretasAtividade1Moda[4]);
		$("#tableModaJunho").html(corretasAtividade1Moda[5]);
		$("#tableModaJulho").html(corretasAtividade1Moda[6]);
		$("#tableModaAgosto").html(corretasAtividade1Moda[7]);
		$("#tableModaSetembro").html(corretasAtividade1Moda[8]);
		$("#tableModaOutubro").html(corretasAtividade1Moda[9]);
		$("#tableModaNovembro").html(corretasAtividade1Moda[10]);
		$("#tableModaDezembro").html(corretasAtividade1Moda[11]);
	}

	function getValuesMediana() {
		inputAtividade1Mediana = [parseFloat($("#atv1MedianaJaneiro").val().replace(',', '.')),
		parseFloat($("#atv1MedianaFevereiro").val().replace(',', '.')),
		parseFloat($("#atv1MedianaMarco").val().replace(',', '.')),
		parseFloat($("#atv1MedianaAbril").val().replace(',', '.')),
		parseFloat($("#atv1MedianaMaio").val().replace(',', '.')),
		parseFloat($("#atv1MedianaJunho").val().replace(',', '.')),
		parseFloat($("#atv1MedianaJulho").val().replace(',', '.')),
		parseFloat($("#atv1MedianaAgosto").val().replace(',', '.')),
		parseFloat($("#atv1MedianaSetembro").val().replace(',', '.')),
		parseFloat($("#atv1MedianaOutubro").val().replace(',', '.')),
		parseFloat($("#atv1MedianaNovembro").val().replace(',', '.')),
		parseFloat($("#atv1MedianaDezembro").val().replace(',', '.')),
		]
	}

	function fixarValoresMediana() {
		$("#tableMedianaJaneiro").html(corretasAtividade1Mediana[0]);
		$("#tableMedianaFevereiro").html(corretasAtividade1Mediana[1]);
		$("#tableMedianaMarco").html(corretasAtividade1Mediana[2]);
		$("#tableMedianaAbril").html(corretasAtividade1Mediana[3]);
		$("#tableMedianaMaio").html(corretasAtividade1Mediana[4]);
		$("#tableMedianaJunho").html(corretasAtividade1Mediana[5]);
		$("#tableMedianaJulho").html(corretasAtividade1Mediana[6]);
		$("#tableMedianaAgosto").html(corretasAtividade1Mediana[7]);
		$("#tableMedianaSetembro").html(corretasAtividade1Mediana[8]);
		$("#tableMedianaOutubro").html(corretasAtividade1Mediana[9]);
		$("#tableMedianaNovembro").html(corretasAtividade1Mediana[10]);
		$("#tableMedianaDezembro").html(corretasAtividade1Mediana[11]);
	}


	function getValoresAtv2() {
		valoresAtividade2Media = [parseFloat($("#inputMediaGeracaoGasNatural").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoHidreletrica").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoDerivadosPetroleo").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoCarvao").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoNuclear").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoBiomassa").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoEolica").val().replace(',', '.')), 
		parseFloat($("#inputMediaGeracaoOutras").val().replace(',', '.'))]


		valoresAtividade2Mediana = [parseFloat($("#inputMedianaGeracaoGasNatural").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoHidreletrica").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoDerivadosPetroleo").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoCarvao").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoNuclear").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoBiomassa").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoEolica").val().replace(',', '.')), 
		parseFloat($("#inputMedianaGeracaoOutras").val().replace(',', '.'))]
	}


	function getValoresAtv3() {
		valoresAtividade3Media = [parseFloat($("#inputMediaNorte").val().replace(",",".")), 
		parseFloat($("#inputMediaNordeste").val().replace(',', '.')), 
		parseFloat($("#inputMediaSudeste").val().replace(',', '.')), 
		parseFloat($("#inputMediaSul").val().replace(',', '.')), 
		parseFloat($("#inputMediaCentroOeste").val().replace(',', '.'))
		]


		valoresAtividade3Mediana = [parseFloat($("#inputMedianaNorte").val().replace(',', '.')), 
		parseFloat($("#inputMedianaNordeste").val().replace(',', '.')), 
		parseFloat($("#inputMedianaSudeste").val().replace(',', '.')), 
		parseFloat($("#inputMedianaSul").val().replace(',', '.')), 
		parseFloat($("#inputMedianaCentroOeste").val().replace(',', '.'))
		]
	}




	function replaceTipoValorErradoMediaAtv2(tipoErrado) {

		switch (tipoErrado) {

			case 1:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Gás Natural";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Gás Natural");
			}
			break;

			case 2:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Hidrelétrica";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Hidrelétrica");
			}
			break;

			case 3:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Derivados de Petróleo";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Derivados de Petróleo");
			}
			break;

			case 4:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Carvão";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Carvão");
			}
			break;		

			case 5:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Nuclear";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Nuclear");
			}
			break;

			case 6:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Biomassa";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Biomassa");
			}
			break;		

			case 7:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Eólica";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Eólica");
			}
			break;	

			case 8:
			if(tiposErradosAtividade2Media == null) {
				tiposErradosAtividade2Media = "Outras";
			} else {
				tiposErradosAtividade2Media = tiposErradosAtividade2Media.concat(", Outras");
			}
			break;	
		}
	}


	function replaceTipoValorErradoMedianaAtv2(tipoErrado) {

		switch (tipoErrado) {

			case 1:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Gás Natural";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Gás Natural");
			}
			break;

			case 2:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Hidrelétrica";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Hidrelétrica");
			}
			break;

			case 3:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Derivados de Petróleo";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Derivados de Petróleo");
			}
			break;

			case 4:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Carvão";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Carvão");
			}
			break;		

			case 5:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Nuclear";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Nuclear");
			}
			break;

			case 6:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Biomassa";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Biomassa");
			}
			break;		

			case 7:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Eólica";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Eólica");
			}
			break;	

			case 8:
			if(tiposErradosAtividade2Mediana == null) {
				tiposErradosAtividade2Mediana = "Outras";
			} else {
				tiposErradosAtividade2Mediana = tiposErradosAtividade2Mediana.concat(", Outras");
			}
			break;	
		}
	}


	function replaceRegiaoValorErradoMediaAtv3(tipoErrado) {

		switch (tipoErrado) {

			case 1:
			if(regioesErradasAtividade3Media == null) {
				regioesErradasAtividade3Media = "Norte";
			} else {
				regioesErradasAtividade3Media = regioesErradasAtividade3Media.concat(", Norte");
			}
			break;

			case 2:
			if(regioesErradasAtividade3Media == null) {
				regioesErradasAtividade3Media = "Nordeste";
			} else {
				regioesErradasAtividade3Media = regioesErradasAtividade3Media.concat(", Nordeste");
			}
			break;

			case 3:
			if(regioesErradasAtividade3Media == null) {
				regioesErradasAtividade3Media = "Sudeste";
			} else {
				regioesErradasAtividade3Media = regioesErradasAtividade3Media.concat(", Sudeste");
			}
			break;

			case 4:
			if(regioesErradasAtividade3Media == null) {
				regioesErradasAtividade3Media = "Sul";
			} else {
				regioesErradasAtividade3Media = regioesErradasAtividade3Media.concat(", Sul");
			}
			break;		

			case 5:
			if(regioesErradasAtividade3Media == null) {
				regioesErradasAtividade3Media = "Centro-Oeste";
			} else {
				regioesErradasAtividade3Media = regioesErradasAtividade3Media.concat(", Centro-Oeste");
			}
			break;
		}
	}


	function replaceRegiaoValorErradoMedianaAtv3(tipoErrado) {

		switch (tipoErrado) {

			case 1:
			if(regioesErradasAtividade3Mediana == null) {
				regioesErradasAtividade3Mediana = "Norte";
			} else {
				regioesErradasAtividade3Mediana = regioesErradasAtividade3Mediana.concat(", Norte");
			}
			break;

			case 2:
			if(regioesErradasAtividade3Mediana == null) {
				regioesErradasAtividade3Mediana = "Nordeste";
			} else {
				regioesErradasAtividade3Mediana = regioesErradasAtividade3Mediana.concat(", Nordeste");
			}
			break;

			case 3:
			if(regioesErradasAtividade3Mediana == null) {
				regioesErradasAtividade3Mediana = "Sudeste";
			} else {
				regioesErradasAtividade3Mediana = regioesErradasAtividade3Mediana.concat(", Sudeste");
			}
			break;

			case 4:
			if(regioesErradasAtividade3Mediana == null) {
				regioesErradasAtividade3Mediana = "Sul";
			} else {
				regioesErradasAtividade3Mediana = regioesErradasAtividade3Mediana.concat(", Sul");
			}
			break;		

			case 5:
			if(regioesErradasAtividade3Mediana == null) {
				regioesErradasAtividade3Mediana = "Centro-Oeste";
			} else {
				regioesErradasAtividade3Mediana = regioesErradasAtividade3Mediana.concat(", Centro-Oeste");
			}
			break;
		}
	}



	function fixarValoresAtv2() {
		$("#tdInputMediaGeracaoGasNatural").html(String(corretasAtividade2Media[0]).replace(".", ","));
		$("#tdInputMediaGeracaoHidreletrica").html(String(corretasAtividade2Media[1]).replace(".", ","));
		$("#tdInputMediaGeracaoDerivadosPetroleo").html(String(corretasAtividade2Media[2]).replace(".", ","));
		$("#tdInputMediaGeracaoCarvao").html(String(corretasAtividade2Media[3]).replace(".", ","));
		$("#tdInputMediaGeracaoNuclear").html(String(corretasAtividade2Media[4]).replace(".", ","));
		$("#tdInputMediaGeracaoBiomassa").html(String(corretasAtividade2Media[5]).replace(".", ","));
		$("#tdInputMediaGeracaoEolica").html(String(corretasAtividade2Media[6]).replace(".", ","));
		$("#tdInputMediaGeracaoOutras").html(String(corretasAtividade2Media[7]).replace(".", ","));
		$("#tdInputMedianaGeracaoGasNatural").html(String(corretasAtividade2Mediana[0]).replace(".", ","));
		$("#tdInputMedianaGeracaoHidreletrica").html(String(corretasAtividade2Mediana[1]).replace(".", ","));
		$("#tdInputMedianaGeracaoDerivadosPetroleo").html(String(corretasAtividade2Mediana[2]).replace(".", ","));
		$("#tdInputMedianaGeracaoCarvao").html(String(corretasAtividade2Mediana[3]).replace(".", ","));
		$("#tdInputMedianaGeracaoNuclear").html(String(corretasAtividade2Mediana[4]).replace(".", ","));
		$("#tdInputMedianaGeracaoBiomassa").html(String(corretasAtividade2Mediana[5]).replace(".", ","));
		$("#tdInputMedianaGeracaoEolica").html(String(corretasAtividade2Mediana[6]).replace(".", ","));
		$("#tdInputMedianaGeracaoOutras").html(String(corretasAtividade2Mediana[7]).replace(".", ","));

	}

	function fixarValoresAtv3() {
		$("#tdInputMediaNorte").html(String(corretasAtividade3Media[0]).replace(".", ","));
		$("#tdInputMediaNordeste").html(String(corretasAtividade3Media[1]).replace(".", ","));
		$("#tdInputMediaSudeste").html(String(corretasAtividade3Media[2]).replace(".", ","));
		$("#tdInputMediaSul").html(String(corretasAtividade3Media[3]).replace(".", ","));
		$("#tdInputMediaCentroOeste").html(String(corretasAtividade3Media[4]).replace(".", ","));
		$("#tdInputMedianaNorte").html(String(corretasAtividade3Mediana[0]).replace(".", ","));
		$("#tdInputMedianaNordeste").html(String(corretasAtividade3Mediana[1]).replace(".", ","));
		$("#tdInputMedianaSudeste").html(String(corretasAtividade3Mediana[2]).replace(".", ","));
		$("#tdInputMedianaSul").html(String(corretasAtividade3Mediana[3]).replace(".", ","));
		$("#tdInputMedianaCentroOeste").html(String(corretasAtividade3Mediana[4]).replace(".", ","));
	}


	function popOutGraph() {

		$("#containerGeralGraficos").dialog({
			closeOnEscape: false,
			height: 600,
			width: 800,
			open: function(event, ui) {
				$(".ui-dialog-titlebar-close", ui.dialog | ui).show();
			},
			focus: function(event, ui) {
				$(".ui-dialog-titlebar-close", ui.dialog | ui).show();
			}

		});;
	}

