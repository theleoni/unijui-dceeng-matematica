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
