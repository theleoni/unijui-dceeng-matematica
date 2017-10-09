var calculadoraAberta = false;

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
		resizable: false,
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


//Função para os botões da calculadora

$(document).on('keyup', 'body', function (e) {
	if(calculadoraAberta) {
		botaoPressionado = e.which;
		switch (botaoPressionado) {
			case 96:
			$("#0Calculadora").click();
			break;
			case 97:
			$("#1Calculadora").click();
			break;
			case 98:
			$("#2Calculadora").click();
			break;	
			case 99:
			$("#3Calculadora").click();
			break;	
			case 100:
			$("#4Calculadora").click();
			break;
			case 101:
			$("#5Calculadora").click();
			break;
			case 102:
			$("#6Calculadora").click();
			break;	
			case 103:
			$("#7Calculadora").click();
			break;	
			case 104:
			$("#8Calculadora").click();
			break;
			case 105:
			$("#9Calculadora").click();
			break;	
			case 106:
			$("#MultiplicacaoCalculadora").click();
			break;
			case 107:
			$("#MaisCalculadora").click();
			break;
			case 109:
			$("#MenosCalculadora").click();
			break;
			case 111:
			$("#DivisaoCalculadora").click();
			break;
			case 187:
			case 13:
			$("#IgualCalculadora").click();
			break;
			case 190:
			case 194:
			case 110:
			$("#PontoCalculadora").click();
			break;
		}

	}
});