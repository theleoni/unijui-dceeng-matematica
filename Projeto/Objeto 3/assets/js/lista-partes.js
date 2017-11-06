// SUBSTITUIA OS TEXTOS
// $%& >> `
// #@* >> ${
var parts = {
	"coeficiente-variacao.html":
	`
	<div class="geral-interno">
		<img id='img-fundo' class="fundo" src="assets/img/coeficiente-variacao.png"/>

		<div class='explicacoes-1 container muito-mais-top oculto'>

			<h4><span class="tab"></span>É a razão entre o desvio padrão e a média referentes a dados de uma mesma série, dado pela fórmula:</h4>

			<div class="text-center mais-top">
				<img src="assets/img/coeficiente-variacao-formula-1.png">
			</div>

			<h4>Onde,</h4>
			<h4>CV > é o coeficiente de variação</h4>
			<h4>S > é o desvio padrão</h4>
			<h4>x&#772; > é a média dos dados</h4>

			<h4 class="muito-mais-top">O coeficiente de variação é dado em %, por isso a fórmula é multiplicada por 100.</h4>
			<div class="text-center mais-top">
				<img src="assets/img/coeficiente-variacao-formula-2.png">
			</div>

		</div>

		<div class='explicacoes-2 container muito-mais-top oculto'>

			<h4>Tabelas utilizadas para estudar variância e desvio padrão</h4>

			<div class="tabela col-xs-12 col-md-6">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de papel e/ou papelão</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>980</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>73</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>403</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>453</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>31</td>
					</tr>
					<tr class="total">
						<td>Variância (S²)</td>
						<td>36.445,6</td>
					</tr>
					<tr class="total">
						<td>Desvio Padrão (S)</td>
						<td>√36.445,6 = 190,91</td>
					</tr>
				</table>
			</div>

			<div class="tabela col-xs-12 col-md-6">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de metal</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>915</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>66</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>383</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>419</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>29</td>
					</tr>
					<tr class="total">
						<td>Variância (S²)</td>
						<td>32.065,2</td>
					</tr>
					<tr class="total">
						<td>Desvio Padrão (S)</td>
						<td>√32.065,2 = 179,07</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12">
				<h4>Ex:  Tomemos os resultados dos municípios com serviço de coleta seletiva de papel e de metal, apresentados nas tabelas acima:</h4>
				<div class="tabela col-xs-12 col-md-6 col-md-offset-3">
					<table class="table text-center">
						<tr>
							<th>Discriminação</th>
							<th>Média</th>
							<th>Desvio Padrão</th>
						</tr>
						<tr>
							<td>Papel</td>
							<td>196</td>
							<td>190,91</td>
						</tr>
						<tr>
							<td>Metal</td>
							<td>183</td>
							<td>179,07</td>
						</tr>
					</table>
				</div>

			</div>

			<div class="col-xs-12 muitissimo-mais-bottom">
				<h4>Qual dos materiais (Papel ou Metal) possui maior homogeneidade ?</h4>

				<h4>Teremos que calcular o <b>CVP</b> (Coeficiente de Variação de Pearson) do <b>Papel</b> e do <b>Metal</b>. O <b>resultado menor</b> será o de <b>maior homogenidade</b> (menor dispersão ou variabilidade).</h4>

				<div class="text-center mais-top">
					<img src="assets/img/coeficiente-variacao-formula-3.png">
				</div>

				<h4>Logo o papel apresenta menor grau de dispersão que o metal.</h4>
			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total,
	.tabela .bg-colorido {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('coeficiente-variacao.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexVariancia = 0;
	function anterior() {

		switch (posIndexVariancia) {

			default:
			case 0:
				carregarParte('questao-9.html');
				break;

			case 1:
				document.querySelector('#img-fundo').classList.remove('oculto');
				document.querySelector(".explicacoes-1").classList.add('oculto');

				posIndexVariancia--;
				break;

			case 2:
				document.querySelector(".explicacoes-1").classList.remove('oculto');
				document.querySelector(".explicacoes-2").classList.add('oculto');

				posIndexVariancia--;
				break;

		}
	}

	function proxima() {
		switch (posIndexVariancia) {

			case 0:
				document.querySelector('#img-fundo').classList.add('oculto');
				document.querySelector(".explicacoes-1").classList.remove('oculto');

				posIndexVariancia++;
				break;

			case 1:
				document.querySelector(".explicacoes-1").classList.add('oculto');
				document.querySelector(".explicacoes-2").classList.remove('oculto');

				posIndexVariancia++;
				break;

			default:
			case 2:
				carregarParte('questao-10.html');
				break;

		}
	}

	function ajuda() {

	}

	</script>
	`,

	"creditos.html":
	`
	<div class="geral-interno">

		<img id='img-fundo' class="fundo" src="../assets/img/telaFinal.jpg"/>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	</style>

	<script type="text/javascript">

	console.log('creditos.html');

	$(".navbar-topo").hide();

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		$(".navbar-topo").show();
		carregarParte('final.html');
	}

	function proxima() {
	}

	function ajuda() {
	}

	</script>

	`,

	"destino-lixo.html":
	`
	<div class="geral-interno">
		<img class="fundo" src="assets/img/destino-lixo-fundo.png"/>

		<div class="container destino-lixo">
			<div class="saiba-mais">
				<img id="destino-lixo-img-saiba-mais" src="assets/img/destino-lixo-saiba-mais.png"/>
			</div>
			<div class="text-center">
				<img id="destino-lixo-img-vazadouro-aberto" class="destino" src="assets/img/destino-lixo-vazadouro-aberto.png"/>
				<img id="destino-lixo-img-vazadouro-alagado" class="destino" src="assets/img/destino-lixo-vazadouro-alagado.png"/>
				<img id="destino-lixo-img-aterro-controlado" class="destino" src="assets/img/destino-lixo-aterro-controlado.png"/>
			</div>
			<div class="text-center">
				<img id="destino-lixo-img-aterro-sanitario" class="destino" src="assets/img/destino-lixo-aterro-sanitario.png"/>
				<img id="destino-lixo-img-compostagem" class="destino" src="assets/img/destino-lixo-compostagem.png"/>
				<img id="destino-lixo-img-triagem" class="destino" src="assets/img/destino-lixo-triagem.png"/>
			</div>
		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.destino-lixo {
		top: 7%;
		position: absolute;
	}

	.destino {
		width: 20%;
		margin: 0.4%;
		vertical-align: top;
		transition: .3s ease;
	}

	.destino:hover {
		width: 22%;
		transition: .3s ease;
		cursor: pointer;
	}

	.saiba-mais {
		margin-left: 18.6%;
		margin-bottom: 2.4%;
	}

	.saiba-mais img {
		width: 15%;
		cursor: pointer;
	}

	</style>

	<script type="text/javascript">

	console.log('destino-lixo.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").show();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('questao-1.html');
	}

	function proxima() {

		carregarParte('media-quadratica.html');
	}

	function ajuda() {
		swal('Clique/encoste sobre cada imagem para ler a explicação sobre as principais unidades de destino final do lixo.');
	}

	document.querySelector("#destino-lixo-img-saiba-mais").addEventListener('click', function() {
		saibaMais();
	});
	document.querySelector("#destino-lixo-img-vazadouro-aberto").addEventListener('click', function() {
		popUp('vazadouro-aberto');
	});
	document.querySelector("#destino-lixo-img-vazadouro-alagado").addEventListener('click', function() {
		popUp('vazadouro-alagado');
	});
	document.querySelector("#destino-lixo-img-aterro-controlado").addEventListener('click', function() {
		popUp('aterro-controlado');
	});
	document.querySelector("#destino-lixo-img-aterro-sanitario").addEventListener('click', function() {
		popUp('aterro-sanitario');
	});
	document.querySelector("#destino-lixo-img-compostagem").addEventListener('click', function() {
		popUp('compostagem');
	});
	document.querySelector("#destino-lixo-img-triagem").addEventListener('click', function() {
		popUp('triagem');
	});

	function popUp(tipo) {

		if (document.querySelector('#dialog-destino-lixo-pop-up') == null) {
			let inner = document.querySelector(".mensagens").innerHTML;
			inner += $%&
			<div id="dialog-destino-lixo-pop-up">
				<h2 id='destino-explicacao-titulo' class='text-center'>Titulo</h2>
				<h4 id='destino-explicacao-texto' lass='muito-mais-top'>Texto</h4>
			</div>$%&
			document.querySelector(".mensagens").innerHTML = inner;

		}

		let titulo;
		let texto;
		switch (tipo) {

			default:
			case 'vazadouro-aberto':
				titulo = 'Vazadouro a céu aberto';
				texto = 'Conhecidos como lixões, onde o lixo fica jogado a céu aberto sem nenhum tipo de tratamento, contaminando o meio ambiente e atraindo vetores de doenças.';
				break;

			case 'vazadouro-alagado':
				titulo = 'Vazadouro em áreas alagadas';
				texto = 'Lixo jogado em áreas alagadas, contaminando o meio ambiente, principalmente a água.';
				break;

			case 'aterro-controlado':
				titulo = 'Aterro controlado';
				texto = 'Local onde o lixo é jogado sobre um terreno, e diariamente é coberto por uma camada de terra, afim de minimizar os impactos.';
				break;

			case 'aterro-sanitario':
				titulo = 'Aterro sanitário';
				texto = 'Uma forma mais adequada e controlada, para que não sejam causados danos a saúde e ao meio ambiente. É orientado conforme a legislação ambiental vigente.';
				break;

			case 'compostagem':
				titulo = 'Estação de compostagem';
				texto = 'Instalações para o processamento de resíduos orgânicos.';
				break;

			case 'triagem':
				titulo = 'Estação de triagem';
				texto = 'Instalações onde os materiais coletados são separados por classe e tipo de recicláveis, em seguida preparados para a comercialização.';
				break;
		}

		document.querySelector('#destino-explicacao-titulo').innerHTML = titulo;
		document.querySelector('#destino-explicacao-texto').innerHTML = texto;

		let dialogMediaQuadratica = $("#dialog-destino-lixo-pop-up").dialog({
			autoOpen: false,
			height:300,
			width: 600,
			modal: true,
			buttons: {},
			close: function() {
			}
		});
		dialogMediaQuadratica.dialog("open");
	}

	function saibaMais() {
		if (document.querySelector('#dialog-destino-lixo-saiba-mais') == null) {
			let inner = document.querySelector(".mensagens").innerHTML;
			inner += $%&
			<div id="dialog-destino-lixo-saiba-mais">
				<img src="assets/img/destino-lixo-saiba-mais-tabela.png"/>
			</div>$%&
			document.querySelector(".mensagens").innerHTML = inner;

		}

		let dialogDestinoLixoSaibaMais = $("#dialog-destino-lixo-saiba-mais").dialog({
			autoOpen: false,
			height:540,
			width: 750,
			modal: true,
			buttons: {},
			close: function() {
			}
		});
		dialogDestinoLixoSaibaMais.dialog("open");
	}

	</script>

	`,

	"desvio-padrao.html":
	`
	<div class="geral-interno">
		<img id='img-fundo' class="fundo" src="assets/img/desvio_padrao.png"/>

		<div class='explicacoes-tabela-1 container oculto muito-mais-top'>

			<h4>Exemplo de Desvio Padrão:</h4>

			<div class="tabela col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de plástico</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>980</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>73</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>403</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>453</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>31</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>36.445,6</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12">
				<h4>Para calcularmos o desvio padrão, basta encontrarmos a raiz quadrada da variância:</h4>
				<div class="text-center mais-top">
					<img src="assets/img/desvio_padrao-formula-2.png">
				</div>
			</div>


		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('desvio-padrao.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexVariancia = 0;
	function anterior() {

		switch (posIndexVariancia) {

			default:
			case 0:
				carregarParte('questao-5.html');
				break;

			case 1:
				document.querySelector('#img-fundo').classList.remove('oculto');
				document.querySelector('#img-fundo').src = 'assets/img/desvio_padrao.png';

				posIndexVariancia--;
				break;

			case 3:
				document.querySelector('#img-fundo').classList.remove('oculto');
				document.querySelector(".explicacoes-tabela-1").classList.add('oculto');

				posIndexVariancia--;
				break;
		}
	}

	function proxima() {
		switch (posIndexVariancia) {

			case 0:
				document.querySelector('#img-fundo').src = 'assets/img/desvio_padrao-2.png';

				posIndexVariancia++;
				break;

			case 1:
				document.querySelector('#img-fundo').classList.add('oculto');
				document.querySelector(".explicacoes-tabela-1").classList.remove('oculto');

				posIndexVariancia++;
				break;

			default:
			case 2:
				swal({
					title: $%&Agora é com você #@*nomePessoa}! Complete com o Desvio Padrão...$%&,
					closeOnClickOutside: false,
					closeOnEsc: false,
					button: {
						text: 'Vamos lá!',
						closeModal: true,
						className: 'btn',
					},
				})
				.then((value) => {
					carregarParte('questao-6.html');
				});
				break;
		}
	}

	function ajuda() {
		if (document.querySelector('#dialog-form-desvio-padrao-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-form-desvio-padrao-ajuda">
				<h4>O desvio padrão tem de algumas propriedades, dentre as quais destacamos:</h4>
				<h5>1ª Somando-se (ou subtraindo-se) uma constante a todos os valores de uma variável, o desvio padrão não se altera.</h5>
				<h5>2ª Multiplicando-se (ou dividindo-se) todos os valores de uma variável por uma constante (diferente de zero), o desvio padrão fica multiplicado ( ou dividido) por essa constante.</h5>

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogDesvioPadraoAjuda = $("#dialog-form-desvio-padrao-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 850,
			modal: true,
			buttons: {}
		});
		dialogDesvioPadraoAjuda.dialog("open");
	}
	</script>

	`,

	"desvio-tabela.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-tabela-1 container muito-mais-top muitissimo-mais-bottom'>

			<h4>Observe o exemplo utilizando a primeira coluna de dados da tabela:</h4>

			<div class="tabela col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<table class="table text-center">
					<tr>
						<th rowspan="2">Grandes Regiões</th>
						<th colspan="3">Número de catadores na área urbana</th>
					</tr>
					<tr>
						<th>Total (mil pessoas)</th>
						<th>Com até 14 anos de idade (mil pessoas)</th>
						<th>Com mais de 14 anos de idade (mil pessoas)</th>
					</tr>
					<tr>
						<td class="bg-colorido">Norte</td>
						<td class="bg-colorido"><span class="preenchimento-a">3</span></td>
						<td>1</td>
						<td>2</td>
					</tr>
					<tr>
						<td class="bg-colorido">Nordeste</td>
						<td class="bg-colorido"><span class="preenchimento-a">13</span></td>
						<td>1</td>
						<td>12</td>
					</tr>
					<tr>
						<td class="bg-colorido">Sudeste</td>
						<td class="bg-colorido"><span class="preenchimento-a">28</span></td>
						<td>2</td>
						<td>26</td>
					</tr>
					<tr>
						<td class="bg-colorido">Sul</td>
						<td class="bg-colorido"><span class="preenchimento-a">18</span></td>
						<td>2</td>
						<td>16</td>
					</tr>
					<tr>
						<td class="bg-colorido">Centro-Oeste</td>
						<td class="bg-colorido"><span class="preenchimento-a">8</span></td>
						<td>1</td>
						<td>7</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12">

				<div class="text-center mais-top muitissimo-mais-bottom">
					<button id="desvio-tabela-saiba-mais" type="button" class="btn">Saiba mais!</button>
				</div>

				<h4>Encontre o desvio padrão:</h4>
				<ol><li><h4>Calcular a variância e o desvio padrão referentes aos catadores na área urbana no Brasil, usando os valores totais, por região:</h4></li></ol>

				<div class="text-center">
					<div class="formula">
						<h5>Média aritmética = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>
									<span class="preenchimento-a">3</span> +
									<span class="preenchimento-a">13</span> +
									<span class="preenchimento-a">28</span> +
									<span class="preenchimento-a">18</span> +
									<span class="preenchimento-a">8</span>
								</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5>5</h5>
							</div>
						</div>
						<div class="calculo">
							<h5>=</h5>
						</div>
						<div class="calculo">
							<div class="cima">
								<h5>70</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5>5</h5>
							</div>
						</div>
						<div class="calculo">
							<h5> = <span class="preenchimento-b">14</span></h5>
						</div>
					</div>
				</div>

				<div class="tabela">
					<table class="table text-center">
						<tr>
							<th>Total (mil pessoas)</th>
							<th>Média</th>
							<th>Desvios: diferença do valor pela média</th>
							<th>Quadrado dos desvios</th>
						</tr>
						<tr>
							<th>Xi (valores)</th>
							<th>X&#772; (média)</th>
							<th>(Xi - X&#772;) (valor - média)</th>
							<th>(Xi - X&#772;)²</th>
						</tr>
						<tr>
							<td><span class="preenchimento-a">3</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">3</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-a">-11</span></td>
							<td><span class="preenchimento-d total-a">121</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">13</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">13</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-b">-1</span></td>
							<td><span class="preenchimento-d total-b">1</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">28</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">28</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-c">14</span></td>
							<td><span class="preenchimento-d total-c">196</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">18</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">18</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-d">4</span></td>
							<td><span class="preenchimento-d total-d">16</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">8</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">8</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-e">-6</span></td>
							<td><span class="preenchimento-d total-e">36</span></td>
						</tr>
						<tr class="total">
							<td colspan="2"></td>
							<td>Soma = </td>
							<td><span class="totalizado-final">370</span></td>
						</tr>
					</table>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Variância: S² = </h4>

						<div class="calculo">
							<div class="cima">
								<h4><span class="totalizado-final">370</span></h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>

						<div class="calculo">
							<h4> = <span class="valor-diferenciado">74</span></h4>
						</div>

						<h4><spanc class='tab'></span> > <spanc class='tab'></span></h4>

						<h4>Desvio padrão: S = &#8730;<span class="valor-diferenciado">74</span> = 8,6</h4>

					</div>
				</div>

			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total,
	.tabela .bg-colorido {
		background-color: #F1ECF6;
	}

	.tabela .total,
	.totalizado-final {
		color: #ae6df5;
		font-weight: bold;
	}

	.valor-diferenciado {
		font-weight: bold;
		color: #F48BB8;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('desvio-tabela.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('questao-8.html');
	}

	function proxima() {

		carregarParte('questao-9.html');
	}

	function ajuda() {
	}

	document.querySelector("#desvio-tabela-saiba-mais").addEventListener('click', function() {
		saibaMais();
	});

	function saibaMais() {
		if (document.querySelector('#dialog-desvio-tabela-saiba-mais') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-desvio-tabela-saiba-mais">
				<h3 class="text-center">CATADORES DE MATERIA RECICLÁVEL</h3>

				<h4><span class="tab"></span>Os catadores de materiais recicláveis desempenham papel fundamental na implementação da Política Nacional de Resíduos Sólidos (PNRS). De modo geral, atuam nas atividades da coleta seletiva, triagem, classificação, processamento e comercialização dos resíduos reutilizáveis e recicláveis, contribuindo de forma significativa para a cadeia produtiva da reciclagem.</h4>

				<h4><span class="tab"></span>Os catadores podem ser:</h4>
				<ul>
					<li><h4><b>Trecheiros:</b> que vivem no trecho entre uma cidade e outra, catam lata pra comprar comida.</h4></li>
					<li><h4><b>Catadores do lixão:</b> catam diuturnamente, fazem seu horário, catam há muito tempo ou só quando estão sem serviço de obra, pintura etc.</h4></li>
					<li><h4><b>Catadores individuais:</b> catam por si, preferem trabalhar independentes, puxam carrinhos muitas vezes emprestados pelo comprador que é o sucateiro.</h4></li>
					<li><h4><b>Catadores organizados:</b> em grupos auto gestionários onde todos são donos do empreendimento, legalizados ou em fase de legalização como cooperativas, associações ou ONGs. </h4></li>
				</ul>

				<h4><span class="tab"></span>Dentre as organizações de catadores existem:</h4>
				<ul>
					<li><h4><b>Grupos em organização:</b> com pouca ou nenhuma infraestrutura, muita necessidade de apoio, e vontade de trabalhar em grupo e se fortalecerem.</h4></li>
					<li><h4><b>Catadores organizados auto gestionários:</b> grupos que funcionam como cooperativas onde decisões são tomadas de modo democrático e as vendas e os resultados são de domínio de todos. Não há uma liderança única e todos os associados representam o empreendimento como dono.</h4></li>
					<li><h4><b>Redes de cooperativas auto gestionários:</b> A ideia de rede é uma forma de fortalecer os grupos na busca de quantidade, qualidade e frequência que são algumas das imposições do mercado da reciclagem. Em rede os grupos podem vender por melhores preços por terem juntos maiores quantidades.</h4></li>
					<li><h4><b>Coopergatos:</b> Grupos não auto gestionários, que tem um dono, onde um manda e todos obedecem e funciona como uma empresa privada só que sem os benefícios sociais que uma empresa privada teria que dar.</h4></li>
					<li><h4><b>Cooperativas de apoiadores:</b> Grupos de catadores organizados por pessoas que não tem histórico na catação e se autodeclaram catadores (mas tem perfil de apoiador) para exercer uma liderança sem nenhum compromisso com o processo emancipatório dos catadores.</h4></li>
				</ul>

				<ul>
					<li><h4><b>O catador tenta construir uma identidade própria perante a sociedade e, ao mesmo tempo, desenvolver na categoria o sentimento de autoestima e de orgulho da atividade.</b></h4></li>
					<li><h4>O Movimento Nacional dos Catadores de Materiais Recicláveis (MNCR) surgiu em 1999 e hoje está presente em praticamente todo país.</h4></li>
					<li><h4>Legislação referente aos catadores e resíduos sólidos:</h4></li>
				</ul>

				<div class="muito-mais-top">
					<h4 class="text-center mais-bottom">Legislação</h4>

					<h4><span class="tab"></span>§ <b>Decreto nº 5.940, de 25 de outubro de 2006</b> - institui a separação dos resíduos recicláveis descartados pelos órgãos e entidades da administração pública federal direta e indireta, na fonte geradora, e a sua destinação às associações e cooperativas dos catadores de materiais recicláveis, e dá outras providências.</h4>
					<h4><span class="tab"></span>§ <b>Lei nº 11.445, de 5 de janeiro de 2007</b> - estabelece diretrizes nacionais para o saneamento básico; altera as Leis nºs 6.766, de 19 de dezembro de 1979, 8.036, de 11 de maio de 1990, 8.666, de 21 de junho de 1993, 8.987, de 13 de fevereiro de 1995; revoga a Lei nº 6.528, de 11 de maio de 1978; e dá outras providências.</h4>
					<h4>Essa Lei alterou o inciso XXVII do caput do art. 24 da Lei nº 8.666, de 21 de junho de 1993, tornando dispensável a licitação “na contratação da coleta, processamento e comercialização de resíduos sólidos urbanos recicláveis ou reutilizáveis, em áreas com sistema de coleta seletiva de lixo, <b>efetuados por associações ou cooperativas formadas exclusivamente por pessoas físicas de baixa renda reconhecidas pelo poder público como catadores de materiais recicláveis</b>, com o uso de equipamentos compatíveis com as normas técnicas, ambientais e de saúde pública”.</h4>
					<h4><span class="tab"></span>§ <b>Lei nº 12.305, de 2 de agosto de 2010</b> - institui a Política Nacional de Resíduos Sólidos; altera a Lei nº 9.605, de 12 de fevereiro de 1998; e dá outras providências.</h4>
					<h4><span class="tab"></span>§ <b>Decreto nº 7.404, de 23 de dezembro de 2010</b> - regulamenta a Lei nº 12.305, de 2 de agosto de 2010, que institui a Política Nacional de Resíduos Sólidos, cria o Comitê Interministerial da Política Nacional de Resíduos Sólidos e o Comitê Orientador para a Implantação dos Sistemas de Logística Reversa, e dá outras providências.</h4>
					<h4><span class="tab"></span>§ <b>Decreto nº 7.405, de 23 de dezembro de 2010</b> - institui o Programa Pró-Catador, denomina Comitê Interministerial para Inclusão Social e Econômica dos Catadores de Materiais Reutilizáveis e Recicláveis o Comitê Interministerial da Inclusão Social de Catadores de Lixo criado pelo Decreto de 11 de setembro de 2003, dispõe sobre sua organização e funcionamento, e dá outras providências.</h4>
				</div>

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogDesvioTabelaSaibaMais = $("#dialog-desvio-tabela-saiba-mais").dialog({
			autoOpen: false,
			height: 500,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogDesvioTabelaSaibaMais.dialog("open");
	}
	</script>

	`,

	"explicacao-professora.html":
	`
	<div class="row">
		<div class="col-xs-12">
			<video autoplay muted></video>
		</div>
	</div>

	<style media="screen">
	video {
		position: fixed;
		width: 100%;
		height: auto;
	}
	</style>

	<script type="text/javascript">

	console.log('explicacao-professora.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {

	});

	function anterior() {
		carregarParte('lixeiras.html');
	}

	function proxima() {
		carregarParte('sala-aula.html');
	}

	let videoExplicacaoProfessora = document.querySelector("video");

	let sourceVideoExplicacaoProfessora = document.createElement('source');
	sourceVideoExplicacaoProfessora.setAttribute('src', 'assets/video/explicacao-professora.mp4');
	videoExplicacaoProfessora.appendChild(sourceVideoExplicacaoProfessora);
	videoExplicacaoProfessora.play();

	videoExplicacaoProfessora.addEventListener("ended", function() {
		proxima();
	});
	</script>

	`,

	"final.html":
	`
	<div class="geral-interno">

		<div class='container'>

			<h3>Você pode realizar os testes que quiser. Preencha os valores conforme quiser para que a Média, Mediana, Desvio Padrão e Variância sejam preenchidas automaticamente.</h3>

			<div class="row text-center mais-top mais-bottom">

				<div class="input-x fundo-normal">
					<h5>Nº Linha(s):</h5>
					<input id="input-linha" type="text">
				</div>
				<div class="input-x fundo-normal">
					<h5>Nº Coluna(s):</h5>
					<input id="input-coluna" type="text">
				</div>
				<button id="input-calcular" type="button" class="btn">Criar tabela!</button>

			</div>

			<div class="row">
				<table class="tabela table col-xs-12">
				</table>
			</div>
		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: .5rem;
		margin: 0rem;
		padding: 0rem;
	}

	.input-x .x {
		text-align: left;
	}

	.input-x h5 {
		color: #F5F5F5;
		border-radius: .54rem;
		font-weight: bold;
		font-size: 1.6rem;
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 .28rem;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 .28rem;
		transition: all .3s;
	}

	input {
		width: 55px;
		border: solid #FFFFFF 0px;
		border-radius: .54rem;
		text-align: center;
		font-size: 1.6rem;
	}

	.fundo-editavel {
		border-width: 0px;
		border-radius: 4px;
		width: 100px;
		height: 24px;
		text-align: center;
	}

	.fundo-editavel-normal {
		color: #FFFFFF;
		background-color: #ae6df5;
		transition: .3s ease;
	}

	.fundo-editavel-ok {
		color: #FFFFFF;
		background-color: #46D079;
		transition: .3s ease;
	}

	#input-calcular {
		border: solid #FFFFFF 0px;
		margin: 0px;
		vertical-align: top;
		width: 12rem;
		height: 4.3rem;
		font-size: 1.6rem;
	}

	</style>

	<script type="text/javascript">

	console.log('final.html');

	apenasNumeros(document.querySelector('#input-linha'));
	apenasNumeros(document.querySelector('#input-coluna'));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('reduzir-reutilizar-reciclar.html');
	}

	function proxima() {

		carregarParte('creditos.html');
	}

	function ajuda() {
	}

	document.querySelector("#input-coluna").addEventListener('keyup', function(event) {
		enterCarregarTabela(event);
	});
	document.querySelector("#input-coluna").addEventListener('input', function(event) {
		validarLinhasTabela();
	});
	document.querySelector("#input-linha").addEventListener('keyup', function(event) {
		enterCarregarTabela(event);
	});
	document.querySelector("#input-linha").addEventListener('input', function(event) {
		validarLinhasTabela();
	});
	document.querySelector("#input-linha").addEventListener('click', function(event) {
		carregarTabela();
	});

	let buttonCalcular = document.querySelector("#input-calcular");
	let inputColuna = document.querySelector("#input-coluna");
	let inputLinha = document.querySelector("#input-linha");

	let maximoLinhaColuna = 12;
	let minimoLinha = 2;
	let minimoColuna = 1;

	function validarLinhasTabela() {

		if (inputColuna.value && inputLinha.value) {

			let coluna = Math.floor(inputColuna.value);
			let linha = Math.floor(inputLinha.value);

			if (inputColuna.value >= minimoColuna && inputLinha.value >= minimoLinha
				&& inputColuna.value <= maximoLinhaColuna && inputLinha.value <= maximoLinhaColuna
			) {

				buttonCalcular.disabled = false;
				buttonCalcular.classList.remove("disabled");
			} else {

				buttonCalcular.disabled = true;
				buttonCalcular.classList.add("disabled");
			}
		} else {

			buttonCalcular.disabled = true;
			buttonCalcular.classList.add("disabled");
		}
	}
	validarLinhasTabela();

	function validarTabela() {

		let numeroLinhas = Math.floor(inputLinha.value);
		let numeroColunas = Math.floor(inputColuna.value);

		let colunas = [];
		for (var j = 0; j < numeroColunas; j++) {

			let linhas = [];
			for (var i = 0; i < numeroLinhas; i++) {

				linhas.push(document.querySelector($%&#input-texto-#@*i+1}-#@*j+1}$%&));
			}
			colunas.push(linhas);
		}

		let algumErrado = false;
		for (var posColunas in colunas) {

			let valoresColuns = [];

			let algumErradoColuna = false;
			let linhas = colunas[posColunas];
			for (var posLinhas in linhas) {

				let inputTmp = linhas[posLinhas];
				valoresColuns.push(inputTmp.value);
				if (inputTmp.value) {

					inputTmp.classList.add('fundo-editavel-ok');
					inputTmp.classList.remove('fundo-editavel-normal');
				} else {

					inputTmp.classList.remove('fundo-editavel-ok');
					inputTmp.classList.add('fundo-editavel-normal');

					algumErradoColuna = true;
					algumErrado = true;
				}
			}

			if (!algumErradoColuna) {

				let somaVals = 0.0;
				valoresColuns.map((val) => somaVals += Number(val));

				// MEDIA
				let media = somaVals / valoresColuns.length;

				// MEDIANA
				let mediana = 0;
				valoresColuns.sort(function (a, b) {return a-b});
				if (valoresColuns.length % 2 == 0) { // PAR

					let posMeio = valoresColuns.length / 2;
					mediana = (Number(valoresColuns[posMeio - 1]) + Number(valoresColuns[posMeio])) / 2;
				} else { // IMPAR

					mediana = valoresColuns[Math.trunc(valoresColuns.length / 2)];
				}

				// VARIANCIA
				let variancia;
				let varianciaTmp = 0;
				for (var posItem in valoresColuns) {

					varianciaTmp += Math.pow((valoresColuns[posItem]) - media, 2);
				}
				variancia = varianciaTmp / valoresColuns.length;

				// DESVIO PADRAO
				let desvioPadrao = Math.sqrt(variancia);

				document.querySelector($%&#span-media-#@*Number(posColunas) + 1}$%&).innerHTML = Number(media).toFixed(2);
				document.querySelector($%&#span-mediana-#@*Number(posColunas) + 1}$%&).innerHTML = Number(mediana).toFixed(2);
				document.querySelector($%&#span-desvio-#@*Number(posColunas) + 1}$%&).innerHTML = Number(desvioPadrao).toFixed(2);
				document.querySelector($%&#span-amostra-#@*Number(posColunas) + 1}$%&).innerHTML = Number(variancia).toFixed(2);
			} else {

				document.querySelector($%&#span-media-#@*Number(posColunas) + 1}$%&).innerHTML = textoTmp;
				document.querySelector($%&#span-mediana-#@*Number(posColunas) + 1}$%&).innerHTML = textoTmp;
				document.querySelector($%&#span-desvio-#@*Number(posColunas) + 1}$%&).innerHTML = textoTmp;
				document.querySelector($%&#span-amostra-#@*Number(posColunas) + 1}$%&).innerHTML = textoTmp;
			}

		}

		if (algumErrado) {
			// calcular
		} else {

		}
	}

	let textoTmp = '-';

	function enterCarregarTabela(evt) {

		if (evt.keyCode === 13) {

			validarLinhasTabela();
			if (!buttonCalcular.disabled) {

				carregarTabela();
			}
		}
	}

	function carregarTabela() {

		let numeroLinhas = inputLinha.value;
		let numeroColunas = inputColuna.value;

		let divTabela = document.querySelector(".tabela");
		divTabela.innerHTML = '';

		let linhaTitulo = divTabela.insertRow(0);
		let colunaTitulo = linhaTitulo.insertCell(0);
		colunaTitulo.colSpan = numeroColunas + 1;
		colunaTitulo.innerHTML = '<div class="input-x fundo-ok preenchimento-c col-xs-12"> <input class="col-xs-12" placeholder="Título" type="text"> </div>';

		for (var i = 0; i < numeroLinhas; i++) {

			let linha = divTabela.insertRow(i + 1);
			let colunaTexto = linha.insertCell(0);
			colunaTexto.innerHTML = '<div class="input-x fundo-ok preenchimento-c col-xs-12"> <input class="col-xs-12 x" placeholder="Linha ' + (i + 1) + '" type="text"> </div>';

			for (var j = 0; j < numeroColunas; j++) {

				let colunaTexto = linha.insertCell(j + 1);
				colunaTexto.classList.add("text-center");
				colunaTexto.innerHTML = '<input id="input-texto-' + (i + 1) + '-' + (j + 1) + '" class="fundo-editavel fundo-editavel-normal" placeholder="?" oninput="validarTabela()" type="text">';

				apenasNumeros(document.querySelector('#input-texto-' + (i + 1) + '-' + (j + 1) + ''));
			}
		}

		let classTmp = '';

		let linhaMedia = divTabela.insertRow(Number(numeroLinhas) + 1);
		let colunaMediaTitulo = linhaMedia.insertCell(0);
		colunaMediaTitulo.innerHTML = '<h4>Média: </h4>';
		for (var j = 0; j < numeroColunas; j++) {

			let colunaMedia = linhaMedia.insertCell(j + 1);
			colunaMedia.classList.add("text-center");
			colunaMedia.innerHTML = '<span id="span-media-' + (j + 1) + '" class="' + classTmp + '">' + textoTmp + '</span>';
		}

		let linhaMediana = divTabela.insertRow(Number(numeroLinhas) + 2);
		let colunaMedianaTitulo = linhaMediana.insertCell(0);
		colunaMedianaTitulo.innerHTML = '<h4>Mediana: </h4>';
		for (var j = 0; j < numeroColunas; j++) {

			let colunaMediana = linhaMediana.insertCell(j + 1);
			colunaMediana.classList.add("text-center");
			colunaMediana.innerHTML = '<span id="span-mediana-' + (j + 1) + '" class="' + classTmp + '">' + textoTmp + '</span>';
		}

		let linhaDesvioPadrao = divTabela.insertRow(Number(numeroLinhas) + 3);
		let colunaDesvioPadraoTitulo = linhaDesvioPadrao.insertCell(0);
		colunaDesvioPadraoTitulo.innerHTML = '<h4>Desvio Padrão: </h4>';
		for (var j = 0; j < numeroColunas; j++) {

			let colunaDesvioPadrao = linhaDesvioPadrao.insertCell(j + 1);
			colunaDesvioPadrao.classList.add("text-center");
			colunaDesvioPadrao.innerHTML = '<span id="span-desvio-' + (j + 1) + '" class="' + classTmp + '">' + textoTmp + '</span>';
		}

		let linhaAmostra = divTabela.insertRow(Number(numeroLinhas) + 4);
		let colunaAmostraTitulo = linhaAmostra.insertCell(0);
		colunaAmostraTitulo.innerHTML = '<h4>Variância: </h4>';
		for (var j = 0; j < numeroColunas; j++) {

			let colunaAmostra = linhaAmostra.insertCell(j + 1);
			colunaAmostra.classList.add("text-center");
			colunaAmostra.innerHTML = '<span id="span-amostra-' + (j + 1) + '" class="' + classTmp + '">' + textoTmp + '</span>';
		}
	}

	</script>


	`,

	"inicio-questoes.html":
	`
	<div class="geral-interno">
		<img id='img-fundo' class="fundo" src="assets/img/inicio-questoes-1.jpg"/>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	</style>

	<script type="text/javascript">

	console.log('inicio-questoes.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexInicioQuestoes = 0;
	function anterior() {

		switch (posIndexInicioQuestoes) {

			default:
			case 0:

				carregarParte('media-mediana-moda.html');
				break;

			case 1:
				let imgFundo = document.querySelector('#img-fundo');
				imgFundo.src = 'assets/img/inicio-questoes-1.jpg';

				posIndexInicioQuestoes--;
				break;

		}
	}

	function proxima() {
		switch (posIndexInicioQuestoes) {

			case 0:
				let imgFundo = document.querySelector('#img-fundo');
				imgFundo.src = 'assets/img/inicio-questoes-2.jpg';

				posIndexInicioQuestoes++;
				break;

			default:
			case 1:
				swal({
					title: $%&Olá #@*nomePessoa}, por favor ajude-nos a encontrar as respostas desta atividade!$%&,
					closeOnClickOutside: false,
					closeOnEsc: false,
					button: {
						text: 'Vamos lá!',
						closeModal: true,
						className: 'btn',
					},
				})
				.then((value) => {
					carregarParte('questao-1.html');
				});
				break;
		}
	}

	function ajuda() {
	}

	</script>

	`,

	"lixeiras.html":
	`
	<div class="geral-interno">
		<img class="fundo" src="assets/img/lixeira_fundo.jpg"/>

		<div class="lixeiras text-center">
			<img id="lixeiras-papel" class="lixeira" src="assets/img/lixeira_1_papel.png"/>
			<img id="lixeiras-plastico" class="lixeira" src="assets/img/lixeira_2_plastico.png"/>
			<img id="lixeiras-vidro" class="lixeira" src="assets/img/lixeira_3_vidro.png"/>
			<img id="lixeiras-metal" class="lixeira" src="assets/img/lixeira_4_metal.png"/>
			<img id="lixeiras-organico" class="lixeira" src="assets/img/lixeira_5_organico.png"/>
		</div>

		<div class="lixeiras-texto text-center">
			<h4>Clique nas lixeiras para saber mais sobre separação do lixo</h4>
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.lixeiras {
		top: 28%;
		position: absolute;
	}

	.lixeiras-texto {
		top: 10%;
		position: absolute;
		text-align: center;
		width: 100%;
		font-size: 12%;
	}

	.lixeira {
		width: 15%;
		margin: 0.4%;
		vertical-align: top;
		transition: .3s ease;
	}

	.lixeira:hover {
		width: 17%;
		cursor: pointer;
		transition: .3s ease;

	}

	.lixeira-explicacao .imagem img {
		width: 400px;
		height: 400px;
	}

	.lixeira-explicacao .texto h1 {
	}

	.lixeira-explicacao .texto h2 {
		font-weight: bold;
		font-size: 20px;

		margin-top: 0px;
		margin-bottom: 12px;
	}

	.lixeira-explicacao .texto h3 {
		font-weight: bold;
		font-size: 16px;

		margin-top: 0px;
		margin-bottom: 8px;
	}

	.lixeira-explicacao .texto h4 {
		text-align: justify;
		font-size: 14px;

		margin-top: 0px;
		margin-bottom: 26px;
	}

	.lixeira-explicacao .texto .lixeira-explicacao-papel li h4 {
		margin-top: 0px !important;
		margin-bottom: 0px !important;
	}

	.lixeira-explicacao .texto .lixeira-explicacao-plastico li h4 {
		margin-top: 0px !important;
		margin-bottom: 0px !important;
	}

	.lixeira-explicacao .texto .lixeira-explicacao-vidro li h4 {
		margin-top: 0px !important;
		margin-bottom: 8px !important;
	}

	</style>

	<script type="text/javascript">

	console.log('lixeiras.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
	});

	function anterior() {
		carregarParte('login.html');
	}

	function proxima() {
		carregarParte('explicacao-professora.html');
	}

	document.querySelector("#lixeiras-papel").addEventListener('click', function() {
		popUp('papel');
	});
	document.querySelector("#lixeiras-plastico").addEventListener('click', function() {
		popUp('plastico');
	});
	document.querySelector("#lixeiras-vidro").addEventListener('click', function() {
		popUp('vidro');
	});
	document.querySelector("#lixeiras-metal").addEventListener('click', function() {
		popUp('metal');
	});
	document.querySelector("#lixeiras-organico").addEventListener('click', function() {
		popUp('organico');
	});

	function popUp(tipo) {

		if (document.querySelector('#dialog-lixeiras-pop-up') == null) {
			let inner = document.querySelector(".geral-interno").innerHTML;
			inner += $%&
			<div id="dialog-lixeiras-pop-up">
				<div class="lixeira-explicacao row">
					<div class="imagem text-center col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<img id="lixeira-explicacao-img" src="" />
					</div>

					<div class="texto col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<h1 id="lixeira-explicacao-titulo" class="text-center">texto</h1>
						<p id="lixeira-explicacao-secundario">texto</p>
					</div>
				</div>
			</div>$%&
			document.querySelector(".geral-interno").innerHTML = inner;

		}

		let caminhoImg = 'assets/img/';
		let titulo = '';
		let secundario = '';

		switch (tipo) {

			default:
			case 'papel':
				caminhoImg += 'lixeira_explicacao_1_papel.png';
				titulo = 'Papel';
				secundario = $%&
				<div class="lixeira-explicacao-papel">
					<h2>Principais aplicações do papel reciclado:</h2>

					<ul>
						<li><h4>Embalagens (papel craft e papelão);</h4></li>
						<li><h4>Fins sanitários (papel toalha, guardanapo);</h4></li>
						<li><h4>Imprimir-escrever;</h4></li>
						<li><h4>Artesanato;</h4></li>
						<li><h4>Blocos de anotações e cadernos;</h4></li>
						<li><h4>Sacolas de papel.</h4></li>
					</ul>

					<h4>
					<span class="tab"></span>O mesmo papel pode ser reciclado entre 7 a 10 vezes. O papel é formado essencialmente por fibras celulósicas e estas vão se degradando a cada processo de reciclagem.
					</h4>
				</div>
				$%&
				break;

			case 'plastico':
				caminhoImg += 'lixeira_explicacao_2_plastico.png';
				titulo = 'Plástico';
				secundario = $%&
				<div class="lixeira-explicacao-plastico">
					<h4><span class="tab"></span>A partir do processo de polimerização são inúmeras as variedades de resinas plásticas e de soluções que esse material oferece para os diversos setores. São elas: 1. PET 2. PEAD 3. PVC 4. PEBD 5. PP 6. PS 7. OUTROS.</h4>

					<h2>1 PET Poli (tereftalato de etileno)</h2>
					<h3>Principais Aplicações:</h3>
					<h4>
					Garrafas de bebidas, tecidos, embalagem de alimentos, de cosméticos e de remédios; chapas; folhas e películas.
					Eletrônicos: peças de computador e engrenagens.
					Medicina: tubos para hemodiálise e seringas.
					Peças Técnicas: telas para pneumáticos.
					</h4>

					<h2>2 PEAD Polietileno de alta densidade</h2>
					<h3>Principais Aplicações:</h3>
					<h4>
					Embalagens: bolsas, garrafas, caixas, embalagens de alimentos, embalagens para compostos químicos, frascos, rolhas, tampas, cápsulas. Eletrônicos: isolante de fios.
					Automobilístico: tubos, mangueiras e conexões de recipientes de combustível.
					</h4>

					<h2>3 PVC Poli (cloreto de vinila)</h2>
					<h3>Principais Aplicações:</h3>
					<h4>
					Filmes, laminados, solados de calçados, brinquedos, embalagens para remédios (blister), mangueiras, tubulação para água e esgoto, revestimento de fios e cabos, cateteres e bolsas de soro.
					</h4>

					<h2>4 PEBD Polietileno de baixa densidade</h2>
					<h3>Principais Aplicações:</h3>
					<h4>
					Eletrônicos: isolantes de fios e pequenas peças.
					Embalagens: sacos, garrafas, tampas, bolsas, revestimentos internos e externos de embalagens cartonadas assépticas, como as caixas de leite. Agricultura: película de revestimento, tubos de irrigação.
					Construção Civil: tubulação, mangueiras, telas de sombreamento.
					</h4>

					<h2>5 PP Polipropileno</h2>
					<h3>Principais Aplicações:</h3>
					<h4>
					Homopolímero: embalagens, películas de embalagens de alimentos, embalagens de ráfia e industriais e sacolas.
					Medicina: próteses, material hospitalar esterilizável e seringas descartáveis.
					Copolímero: brinquedos, potes conservadores, caixas de uso industrial, garrafas, tampas e películas.
					Automobilístico: botões diversos, reservatórios para água e fluído de freio, e para-choques.
					</h4>

					<h2>6 PS Poliestireno</h2>
					<h3>Principais Aplicações:</h3>
					<h4>
					Cristal: embalagens para alimentos, remédios e cosméticos, brinquedos, material de escritório.
					Expandido: isopor, peças técnicas: isolantes, reforços, chapas, componentes de garrafas térmicas, embalagens de produtos agrícolas e industrializados, embalagens para produtos eletroeletrônicos e eletrodomésticos
					</h4>

					<h2>7 OUTROS </h2>
					<h3>Os tipos de resinas plásticas não param por aí. Na categoria 7 entram as resinas como:</h3>

					<ul>
						<li><h4>Copolímero de etileno vinil acetato (EVA)</h4></li>
						<li><h4>Copolímero de acrilonitrila butadieno estireno (ABS)</h4></li>
						<li><h4>Policarbonato (PC)</h4></li>
						<li><h4>Poliuretano (PU)</h4></li>
						<li><h4>Resina epóxi</h4></li>
						<li><h4>Resina fenólica</h4></li>
					</ul>

					<h4>
					<span class="tab"></span>São tantas as possibilidades, soluções e inovações que não dá para imaginar nossa vida sem o plástico.
					<h4>
				</div>
				$%&;
			break;

			case 'vidro':
				caminhoImg += 'lixeira_explicacao_3_vidro.png';
				titulo = 'Vidro';
				secundario = $%&
				<div class="lixeira-explicacao-vidro">
					<h4><span class="tab"></span>O vidro das embalagens é um material totalmente reciclável, podendo ser reciclado várias vezes, pois é feito de minerais como areia, barrilha, calcário e feldspato. Ao se agregar o caco na etapa de fusão de vidro, diminui-se a retirada de matéria-prima da natureza.</h4>

					<h3>As aplicações de vidros mais conhecidas e utilizadas são:</h3>
					<ul>
						<li><h4><b>Vidros para embalagens:</b> utilizados em potes de alimentos, frascos e garrafas para bebidas, produtos farmacêuticos, higiene pessoal e múltiplas outras aplicações – a utilização do vidro para embalagens é uma das mais antigas e frequentes aplicações para o vidro. </h4></li>
						<li><h4><b>Vidros domésticos:</b> utilizados em utensílios como louças de mesa, copos, xícaras e objetos de decoração, como vasos.</h4></li>
						<li><h4><b>Vidros planos:</b> são vidros fabricados em chapas, consumidos principalmente pela construção civil, seguida pela indústria automobilística, depois na produção de espelhos e um pequeno percentual para múltiplas outras aplicações. </h4></li>
						<li><h4><b>Vidros especiais:</b> são vidros com composições e características especiais, adequados a necessidades muito específicas de utilização, como na produção de cinescópios para monitores de televisão e computadores, bulbos de lâmpadas, garrafas térmicas, fibras óticas, blocos oftálmicos, blocos isoladores e até tijolos de vidro.</h4></li>
					</ul>

					<h4 class="mais-top">
					<span class="tab"></span>Com aparência plástica e de alta resistência, a fibra de vidro tem sido um dos materiais mais utilizados pela indústria automotiva. Composta por 60% de resina de poliéster e 40% de fibra de vidro, os resíduos gerados por este componente são considerados prejudiciais ao Meio Ambiente, já que são necessários mais de quatro mil anos para sua decomposição. Como consequência, em 27 de dezembro do ano 2000, foi sancionada a Lei Federal de número 10.165, que determina a fiscalização das atividades potencialmente poluidoras e estipula que os resíduos gerados pelas indústrias sejam destinados a aterros apropriados.
					</h4>
				</div>
				$%&;
			break;

			case 'metal':
				caminhoImg += 'lixeira_explicacao_4_metal.png';
				titulo = 'Metal';
				secundario = $%&
				<div class="lixeira-explicacao-metal">
					<h4><b>Recicláveis:</b> folha de flandres (é o aço revestido de estanho das latas de óleo, sardinha, creme de leite etc.), latas de aerossol, latas de bebidas, papel-alumínio limpo, tampas de garrafa. </h4>
					<h4><b>Lixo comum:</b> clipes, esponjas de aço, grampos, tachinhas. </h4>

					<h2>Alumínio</h2>
					<h4><span class="tab"></span>O ciclo de vida de uma lata de bebida de alumínio é de apenas 30 dias, de uma lata para outra. Nesse período, a lata vai da prateleira para o consumidor e, descartada corretamente, para uma instalação de reciclagem em que poderá ser refundida e reformatada em outra lata de alumínio com exatamente as mesmas características físicas da lata original. Como o alumínio pode ser reciclado sem nenhuma perda de qualidade, as latas de alumínio são o produto ideal para uma reciclagem de ciclo fechado.</h4>

					<h2>Ferro</h2>
					<h4><span class="tab"></span>O ferro é o metal mais utilizado na produção mundial devido a sua dureza e seu baixo custo. Ele é indispensável para a construção de diversos bens como os automóveis, barcos, eletrodomésticos e componentes estruturais de construções. Portanto, a reciclagem do ferro é fundamental, já que ele mantém suas propriedades como resistência, versatilidade e durabilidade.</h2>
					<h4><span class="tab"></span>A sucata é responsável por mais de um quarto do material novo no país. Atualmente, no Brasil, em torno de 2.500 empresas compõem o setor de reciclagem de ferro, processando mensalmente até 420 mil toneladas de sucata. Cada tonelada de aço reciclado representa uma economia de 1.140 kg de minério de ferro, 154 kg de carvão e 18 kg de cal, segundo o site Reviverde.</h2>
					<h4><span class="tab"></span>No Brasil existem dois processos diferentes de reciclagem de ferro: um voltado apenas para o reaproveitamento das latas de aço e outro para uso das siderúrgicas em geral. O processo tanto de captação quanto de beneficiamento das latas de aço é muito semelhante ao da lata de alumínio, começando pelos catadores e terminando na própria chapa de aço.</h2>
					<h4><span class="tab"></span>Já os outros materiais têm um rumo diferente. Assim que os caminhões chegam às fábricas com o material, eles são examinados para verificar se não há radioatividade. Muitos canos e vigas acabam não sendo processados por conter resíduos radioativos. Os eletrodomésticos e outros produtos com ferro passam por uma triagem. </h2>
					<h4><span class="tab"></span>A forma como esse material será reciclado depende das leis do mercado. O reprocessamento começa com a separação de tipos de sucata. Existem aquelas com muita tinta, cola, plástico ou outros materiais e aquelas mais limpas como os retalhos que vêm das próprias siderúrgicas. A separação dos dois tipos varia de acordo a pureza do ferro. Feito isso, o material passa por uma esteira para ser cortado. Em alguns casos, ele passa por outra esteira para ser prensado. Uma das formas de enviar esse material é em pequenos cilindros para serem refundidos. Prontas, as peças são levadas para as siderúrgicas que irão refundi-las em fornos a 1.550°C.</h2>
				</div>
				$%&;
			break;

			case 'organico':
				caminhoImg += 'lixeira_explicacao_5_organico.png';
				titulo = 'Orgânico';
				secundario = $%&
				<div class="lixeira-explicacao-organico">
					<h4>O lixo orgânico é oriundo de seres vivos (animais e vegetais), resíduos produzidos nas residências, escolas, empresas, entre outras, são alguns exemplos restos de alimentos, cascas de ovos, sementes, folhas, madeiras (cinzas), dejetos humanos, etc. A coleta desse tipo de lixo é realizada nos aterros sanitários, locais apropriados para o tratamento desses resíduos.</h4>
				</div>
				$%&;
			break;

		}

		document.querySelector('#lixeira-explicacao-img').src = caminhoImg;
		document.querySelector('#lixeira-explicacao-titulo').innerHTML = titulo;
		document.querySelector('#lixeira-explicacao-secundario').innerHTML = secundario;

		let dialogLixeirasPopUp = $("#dialog-lixeiras-pop-up").dialog({
			autoOpen: false,
			height: 500,
			width: 850,
			modal: true,
			buttons: {}
		});

		dialogLixeirasPopUp.dialog("open");
	}

	</script>

	`,

	"login.html":
	`
	<div class="geral-interno">
		<video id='login-video' class="fundo"></video>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	</style>

	<script type="text/javascript">

	console.log('login.html');

	$("#iconSetaEsquerda").hide();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {

		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {

		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndex = 0;
	function anterior() {
	}

	function proxima() {

		carregarParte('lixeiras.html');
	}

	function ajuda() {
	}

	let loginVideo = document.querySelector('#login-video');
	loginVideo.src = 'assets/video/login-3.mp4'
	loginVideo.play();
	loginVideo.addEventListener("ended", function() {

		proxima();
	});

	</script>

	`,

	"media-mediana-moda.html":
	`
	<div class="geral-interno">
		<img class="fundo" src="assets/img/media-mediana-moda.png"/>

		<div class="botoes text-center">
			<img id="media-mediana-moda-media" class="botao" src="assets/img/sala-aula-btn-media.png"/>
			<img id="media-mediana-moda-mediana" class="botao" src="assets/img/sala-aula-btn-mediana.png"/>
			<img id="media-mediana-moda-moda" class="botao" src="assets/img/sala-aula-btn-moda.png"/>
		</div>

	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.botoes {
		top: 22%;
		position: absolute;
	}

	.botao {
		width: 15%;
		margin: 0.4%;
		vertical-align: top;
		transition: .3s ease;
	}

	.botao:hover {
		width: 17%;
		cursor: pointer;
		transition: .3s ease;
	}

	.formula {
		text-align: center;
		margin: 25px;
	}

	.dia-semana {
		display: inline-flex;
	}

	.dia-semana h4 {
		margin-left: 12px;
		margin-right: 12px;
	}

	.formula .segunda {
		font-weight: bold;
		color: #135bac;
	}

	.formula .terca {
		font-weight: bold;
		color: #ce3330;
	}

	.formula .quarta {
		font-weight: bold;
		color: #29702d;
	}

	.formula .quinta {
		font-weight: bold;
		color: #e1ac28;
	}

	.formula .sexta {
		font-weight: bold;
		color: #6A534C;
	}

	.formula .dias-semana-qtd {
		font-weight: bold;
	}

	.formula .total {
		font-weight: bold;
	}

	.formula-descrita {
		font-style: italic;
		display: inline-flex;
	}

	.formula-descrita h4 {
		margin: 10px;
	}

	.cima-baixo {
	    display: grid;
		text-align: center;
	}

	.cima-baixo hr {
		margin: 0px;
	    border-top: 1px solid #000;
	}

	.cima {
		display: inline-flex;
	}

	.baixo {
	}

	.botao-explicacao-media .grafico-media {
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.botao-explicacao-mediana .grafico-mediana {
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.texto-vermelho {
		color: #FC5555;
		font-weight: normal;
	}

	.texto-verde {
		color: #45C876;
		font-weight: normal;
	}

	.texto-amarelo {
		color: #D0AC2C;
		font-weight: normal;
	}

	.texto-vermelho:hover, .texto-verde:hover, .texto-amarelo:hover {
		font-weight: bold;
	}

	.valor-central {
		color: #fbc02d;
		font-weight: bold;
	}

	</style>

	<script type="text/javascript">

	console.log('media-mediana-moda.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {
		carregarParte('sala-aula.html');
	}

	function proxima() {
		carregarParte('inicio-questoes.html');
	}

	let msgAjudaMediaMedianaModa = '';
	function ajuda() {
		if (msgAjudaMediaMedianaModa) {
			swal(msgAjudaMediaMedianaModa);
		}
	}

	document.querySelector("#media-mediana-moda-media").addEventListener('click', function() {
		popUp('media');
	});
	document.querySelector("#media-mediana-moda-mediana").addEventListener('click', function() {
		popUp('mediana');
	});
	document.querySelector("#media-mediana-moda-moda").addEventListener('click', function() {
		popUp('moda');
	});

	function popUp(tipo) {

		$("#iconAjuda").show();

		if (document.querySelector('#dialog-form-mmm') == null) {
			let inner = document.querySelector(".geral-interno").innerHTML;
			inner += $%&
			<div id="dialog-form-mmm">
				<div class="botao-explicacao row">
					<div class="texto col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1 id="botao-explicacao-titulo" class="text-center">texto</h1>
						<p id="botao-explicacao-secundario">texto</p>
					</div>
				</div>
			</div>$%&
			document.querySelector(".geral-interno").innerHTML = inner;
		}

		let titulo = '';
		let secundario = '';

		switch (tipo) {

			default:
			case 'media':
				titulo = 'MÉDIA ARITMÉTICA';
				msgAjudaMediaMedianaModa = 'Faça uma análise detalhada sobre como os valores se comportam em relação a média, para facilitar seu entendimento';
				secundario = $%&
				<div class="botao-explicacao-media">
					<ul>
						<li><h4>Na <b>média aritmética simples</b>, somamos todos os elementos do conjunto e, em seguida, dividimos o resultado obtido pela quantidade de elementos que compõe o conjunto.</h4></li>
					</ul>

					<h4>Exemplo: Um determinado catador recolheu 52 latinhas de refrigerante na segunda-feira, 44 na terça-feira, 69 na quarta-feira, 57 na quinta-feira e 73 na sexta-feira. Calcule a média de latinhas recolhidas por dia, pelo catador, nesse período:</h4>

					<div class="formula">
						<div class="dia-semana">
							<h4 class="segunda">Segunda</h4>
							<h4 class="terca">Terça</h4>
							<h4 class="quarta">Quarta</h4>
							<h4 class="quinta">Quinta</h4>
							<h4 class="sexta">Sexta</h4>
							<h4 class="sexta"><span class='super-tab'/><span class='super-tab'/></h4>
						</div>
						<br/>
						<div class="formula-descrita">
							<h4>Média</h4>
							<h4 class="operador">=</h4>

							<div class="cima-baixo">
								<div class="cima">
									<h4 class="segunda">52</h4>
									<h4 class="operador">+</h4>
									<h4 class="terca">44</h4>
									<h4 class="operador">+</h4>
									<h4 class="quarta">69</h4>
									<h4 class="operador">+</h4>
									<h4 class="quinta">57</h4>
									<h4 class="operador">+</h4>
									<h4 class="sexta">73</h4>
								</div>
								<div>
									<hr>
								</div>
								<div class="baixo">
									<h4 class="dias-semana-qtd">5</h4>
								</div>
							</div>

							<h4 class="operador">=</h4>

							<div class="cima-baixo">
								<div class="cima">
									<h4 class="total">295</h4>
								</div>
								<div>
									<hr>
								</div>
								<div class="baixo">
									<h4 class="dias-semana-qtd">5</h4>
								</div>
							</div>

							<h4 class="operador">=</h4>
							<h4 class="total">59 latinhas</h4>

						</div>
						<div class="dia-semana">
							<h4 class="dias-semana-qtd">Número de dias</h4>
							<h4><span class='tab'></span><span class='tab'></span><span class='tab'></span></h4>
						</div>
					</div>

					<h4>Na semana analisada, o catador recolheu, <b>em média</b>, 59 latinhas por dia.</h4>

					<div id="media-grafico-1" class="grafico-media"></div>

					<div id="media-grafico-2" class="grafico-media"></div>

					<h4> A média aritmética está representada pela linha. Os valores abaixo desta, são menores que a média e os valores acima da linha são maiores que a média.</h4>
				</div>
				$%&;
				break;

			case 'mediana':
				titulo = 'MEDIANA';
				msgAjudaMediaMedianaModa = '';
				secundario = $%&
				<div class="botao-explicacao-mediana">

					<h4>Representa o valor que fica exatamente no meio do conjunto.</h4>
					<h4>Primeiro devemos organizar todos os valores do conjunto em ordem crescente ou decrescente. Em seguida, identificamos o(s) valor(es) central(ais) deste intervalo de dados.</h4>

					<ul class='muito-mais-top'><li><h4><b>Quando o número de dados for ímpar, teremos apenas uma mediana.</b></h4></li></ul>
					<h4 class='muito-mais-top'>Exemplo: Vamos calcular a mediana dos valores dados na seguinte tabela:</h4>
					<div class='tabela mais-bottom'>
						<table class='table'>
							<tr>
								<th>Regiões Brasileiras</th>
								<th>Lixo gerado em ton/dia</th>
							</tr>
							<tr>
		    					<td>Região Norte</td>
								<td>13.750</td>
							</tr>
							<tr>
		    					<td>Região Nordeste</td>
								<td>51.689</td>
							</tr>
							<tr>
		    					<td>Região Centro-oeste</td>
								<td>16.055</td>
							</tr>
							<tr>
		    					<td>Região Sudeste</td>
								<td>98.215</td>
							</tr>
							<tr>
		    					<td>Região Sul</td>
								<td>21.345</td>
							</tr>
						</table>
					</div>
					<h4>Primeiro colocamos em ordem crescente, conforme o gráfico.</h4>
					<div id="mediana-grafico-1" class="grafico-mediana"></div>

					<h4>Observe que o valor 21.345, referente a região Sul, divide o conjunto exatamente ao meio, portanto ele é a própria mediana.</h4>

					<ul class='muito-mais-top'><li><h4><b>Quando o número de dados for par, existem dois valores centrais e a mediana será a média aritmética destes dois valores.</b></h4></li></ul>
					<h4 class='muito-mais-top'>Exemplo: Um determinado catador recolheu 52 latinhas de refrigerante na segunda-feira, 44 na terça-feira, 69 na quarta-feira, 57 na quinta-feira, 73 na sexta-feira e 60 no sábado. Identifique a mediana das latinhas recolhidas pelo catador, nesse período:</h4>
					<div id="mediana-grafico-2" class="grafico-mediana"></div>
					<h4 class='mais-top'>Como podemos observar, existem dois valores centrais, e nesse caso, a mediana será o valor da média aritmética dos dois valores centrais:</h4>

					<div class="formula">
						<div class="formula-descrita">
							<h4>Média</h4>
							<h4 class="operador">=</h4>

							<div class="cima-baixo">
								<div class="cima">
									<h4><span class='valor-central'>57</span></h4>
									<h4>+</h4>
									<h4><span class='valor-central'>60</span></h4>
								</div>
								<div>
									<hr>
								</div>
								<div class="baixo">
									<h4>2</h4>
								</div>
							</div>

							<h4 class="operador">=</h4>

							<div class="cima-baixo">
								<div class="cima">
									<h4>117</h4>
								</div>
								<div>
									<hr>
								</div>
								<div class="baixo">
									<h4>2</h4>
								</div>
							</div>

							<h4>=</h4>
							<h4>58,5</h4>
						</div>
					</div>
				</div>
				$%&;

				break;

			case 'moda':
				titulo = 'MODA';
				msgAjudaMediaMedianaModa = '';
				secundario = $%&
				<div class="botao-explicacao-mediana">
					<h4>A moda corresponde ao valor que aparece com mais frequência, ou seja, que detém o maior número de observações no conjunto em estudo. O nome é influenciado pela maneira de falar das pessoas, ao afirmarem que tal objeto está na moda porque a maioria das pessoas estava utilizando</h4>
					<h4 class='mais-top'><span class="tab"></span>Pode existir mais de uma moda para um mesmo grupo de dados. </h4>

					<h2 class='muitissimo-mais-top'>Exemplos:</h2>
					<h3>1. Na região sudeste temos os seguintes dados de coleta de lixo per capita (kg/hab/dia):</h3>
					<div class='tabela mais-top mais-bottom'>
						<table class='table'>
							<tr>
								<th>Estados</th>
								<th>Coleta per capita (Kg/hab/dia)</th>
							</tr>
							<tr>
		    					<td>Espírito Santo (ES)</td>
								<td class='texto-vermelho'>0,9</td>
							</tr>
							<tr>
		    					<td>Minas Gerais (MG)</td>
								<td class='texto-vermelho'>0,9</td>
							</tr>
							<tr>
		    					<td>Rio de Janeiro (RJ)</td>
								<td>1,3</td>
							</tr>
							<tr>
		    					<td>São Paulo (SP)</td>
								<td>1,4</td>
							</tr>
						</table>
					</div>
					<h4>Apenas dois valores são iguais, ou seja, apresenta uma moda definida como <span class='texto-vermelho'>0,9</span>. A classificação para uma moda é <b>unimodal</b>. </h4>

					<h3 class='muitissimo-mais-top'>2. Na região norte temos os seguintes dados de coleta de lixo per capita (kg/hab/dia):</h3>
					<div class='tabela mais-bottom'>
						<table class='table'>
							<tr>
								<th>Estados</th>
								<th>Coleta per capita (Kg/hab/dia)</th>
							</tr>
							<tr>
		    					<td>Amazonas (AM)</td>
								<td>1,6</td>
							</tr>
							<tr>
		    					<td>Amapá (AP)</td>
								<td class='texto-vermelho'>0,86</td>
							</tr>
							<tr>
		    					<td>Acre (AC)</td>
								<td class='texto-verde'>0,85</td>
							</tr>
							<tr>
		    					<td>Pará (PR)</td>
								<td>0,94</td>
							</tr>
							<tr>
		    					<td>Rondônia (RO)</td>
								<td class='texto-verde'>0,85</td>
							</tr>
							<tr>
		    					<td>Roraima (RR)</td>
								<td class='texto-vermelho'>0,86</td>
							</tr>
							<tr>
		    					<td>Tocantins (TO)</td>
								<td>0,82</td>
							</tr>
						</table>
					</div>
					<h4>Existem dois valores diferentes que se repetiram, <span class='texto-verde'>0,85</span> e <span class='texto-vermelho'>0,86</span>. Sendo assim, apresenta duas modas, sua classificação é <b>bimodal</b>.</h4>

					<h3 class='muitissimo-mais-top'>3. Na região nordeste temos os seguintes dados de coleta de lixo per capita (kg/hab/dia):</h3>
					<div class='tabela mais-bottom'>
						<table class='table'>
							<tr>
								<th>Estados</th>
								<th>Coleta per capita (Kg/hab/dia)</th>
							</tr>
							<tr>
		    					<td>Alagoas (AL)</td>
								<td>0,98</td>
							</tr>
							<tr>
		    					<td>Bahia (BA)</td>
								<td class='texto-verde'>1,0</td>
							</tr>
							<tr>
		    					<td>Ceará (CE)</td>
								<td class='texto-verde'>1,0</td>
							</tr>
							<tr>
		    					<td>Maranhão (MA)</td>
								<td class='texto-vermelho'>0,96</td>
							</tr>
							<tr>
		    					<td>Paraíba (PB)</td>
								<td class='texto-amarelo'>0,95</td>
							</tr>
							<tr>
		    					<td>Pernambuco (PE)</td>
								<td>0,99</td>
							</tr>
							<tr>
		    					<td>Piauí (PI)</td>
								<td class='texto-vermelho'>0,96</td>
							</tr>
							<tr>
		    					<td>Rio Grande do Norte (RN)</td>
								<td class='texto-amarelo'>0,95</td>
							</tr>
							<tr>
		    					<td>Sergipe (SE)</td>
								<td>0,94</td>
							</tr>
						</table>
					</div>
					<h4>Existem três valores diferentes que se repetiram, <span class='texto-verde'>1,0</span>; <span class='texto-amarelo'>0,95</span> e <span class='texto-vermelho'>0,96</span>. Sendo assim, apresenta mais que duas modas, sua classificação é <b>plurimodal</b>.</h4>

					<h3 class='muitissimo-mais-top'>4. Na região sul temos os seguintes dados de coleta de lixo per capita (kg/hab/dia):</h3>
					<div class='tabela mais-bottom'>
						<table class='table'>
							<tr>
								<th>Estados</th>
								<th>Coleta per capita (Kg/hab/dia)</th>
							</tr>
							<tr>
		    					<td>Paraná (PR)</td>
								<td>0,9</td>
							</tr>
							<tr>
		    					<td>Rio Grande do Sul (RS)</td>
								<td>0,8</td>
							</tr>
							<tr>
		    					<td>Santa Catarina (SC)</td>
								<td>0,7</td>
							</tr>
						</table>
					</div>
					<h4>Não existem valores iguais, sendo assim não apresenta moda. Sua classificação é <b>amodal</b>.</h4>
				</div>
				$%&;
				break;

		}

		document.querySelector('#botao-explicacao-titulo').innerHTML = titulo;
		document.querySelector('#botao-explicacao-secundario').innerHTML = secundario;

		switch (tipo) {
			default:
			break;

			case 'media':
				graficoMedia1();
				graficoMedia2();
				break;

			case 'mediana':
				graficoMediana1();
				graficoMediana2();
				break;

			case 'moda':
				break;

		}

		let dialogMMMPopUp = $("#dialog-form-mmm").dialog({
			autoOpen: false,
			height: 500,
			width: 850,
			modal: true,
			buttons: {},
			close: function() {
				$("#iconAjuda").hide();
			}
		});
		dialogMMMPopUp.dialog("open");

		function graficoMedia1() {
			Highcharts.chart('media-grafico-1', {
				chart: {
					zoomType: 'xy',
					width: 800
				},
				title: {
					text: 'Gráfico 1 - Ordem das latinhas recolhidas'
				},
				xAxis: {
					categories: [
						'Segunda',
						'Terça',
						'Quarta',
						'Quinta',
						'Sexta'
					],
				},
				yAxis: {
					title: '',
					subtitle: ''
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					type: 'column',
					name: 'Valores',
					data: [52, 44, 69, 57, 73]

				},{
					type: 'spline',
					name: 'Média',
					data: [59, 59, 59, 59, 59],
					marker: {
						lineWidth: 2,
						lineColor: '#000',
						fillColor: '#000',
					}
				},],
				colors: ['#135bac', '#ce3330', '#135bac']
			});
		}

		function graficoMedia2() {
			Highcharts.chart('media-grafico-2', {
				chart: {
					zoomType: 'xy',
					width: 800
				},
				title: {
					text: 'Gráfico 2 - Ordem crescente dos dados'
				},
				xAxis: {
					categories: [
						'Terça',
						'Segunda',
						'Quinta',
						'Quarta',
						'Sexta'
					],
				},
				yAxis: {
					title: '',
					subtitle: ''
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					type: 'column',
					name: 'Valores',
					data: [44, 52, 57, 69, 73]

				},{
					type: 'spline',
					name: 'Média',
					data: [59, 59, 59, 59, 59],
					marker: {
						lineWidth: 2,
						lineColor: '#000',
						fillColor: '#000',
					}
				},],
				colors: ['#29702d', '#e1ac28', '#135bac']
			});
		}

		function graficoMediana1() {
			Highcharts.chart('mediana-grafico-1', {
				chart: {
					type: 'column',
					width: 800
				},
				title: {
					text: 'Lixo gerado em ton/dia nas regiões Brasileiras'
				},
				xAxis: {
					categories: [
						'Região Norte',
						'Região Centro-oeste',
						'Região Sul',
						'Região Nordeste',
						'Região Sudeste'
					]
				},
				yAxis: {
					min: 0,
					title: {
						text: ''
					}
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: 'Regiões',
					data: [13.750, 16.055, {y:21.345, color:"#fbc02d"}, 51.689, 98.215]

				}]
			});
		}

		function graficoMediana2() {
			Highcharts.chart('mediana-grafico-2', {
				chart: {
					type: 'column',
					width: 800
				},
				title: {
					text: ''
				},
				xAxis: {
					categories: [
						'Terça',
						'Segunda',
						'Quinta',
						'Sábado',
						'Quarta',
						'Sexta'
					]
				},
				yAxis: {
					min: 0,
					title: {
						text: ''
					}
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: 'Valores',
					data: [44, 52, {y:57, color:"#fbc02d"}, {y:60, color:"#fbc02d"}, 69, 73]

				}]
			});
		}

	}


	</script>

	`,

	"media-quadratica-dados-agrupados.html":
	`
	<div class="geral-interno">
		<div class="container">

			<h2 class="mais-top muito-mais-bottom text-center"><b>Média Quadrática de dados agrupados</b></h2>

			<h4>Quando os valores da variável estiverem dispostos em uma tabela de frequências, a média quadrática será determinada pela seguinte expressão:</h4>

			<div class="text-center muito-mais-bottom">
				<img src="assets/img/media-quadratica-dados-agrupados-formula.jpg">
			</div>

			<div class='tabela muitissimo-mais-bottom'>
				<table class='table text-center'>
					<tr>
						<th>Classes</th>
						<th>fi (Frequência)</th>
						<th>Xi (Média Aritmética de cada class)</th>
						<th>xi² (Média ao quadrado)</th>
						<th>xi² * fi</th>
					</tr>
					<tr>
						<td>2|------ 4</td>
						<td>5</td>
						<td>3</td>
						<td>3² = 9</td>
						<td>9*5 = 45</td>
					</tr>
					<tr>
						<td>4|------ 6</td>
						<td>1</td>
						<td>5</td>
						<td>5² = 25</td>
						<td>25*10 = 250</td>
					</tr>
					<tr>
						<td>6|------ 8</td>
						<td>12</td>
						<td>7</td>
						<td>7² = 49</td>
						<td>49*12 = 588</td>
					</tr>
					<tr>
						<td>8|------ 10</td>
						<td>10</td>
						<td>9</td>
						<td>9² = 81</td>
						<td>81*10 = 810</td>
					</tr>
					<tr>
						<td>10|------ 12</td>
						<td>5</td>
						<td>11</td>
						<td>11² = 121</td>
						<td>121*5 = 605</td>
					</tr>
				</table>
			</div>

			<h3>Resolução</h3>
			<h4><span class="tab"></span><b>1ºPasso:</b> Obter os dados da tabela, caso a mesma não esteja completa;</h4>
			<h4><span class="tab"></span><b>2ºPasso:</b> Obter <b>xi²</b>, ou seja, o quadrado de cada média. Em seguida multiplicar pelo seu peso (<b>fi</b>);</h4>
			<h4><span class="tab"></span><b>3ºPasso:</b> A soma dos resultados de <b>xi²*fi</b>, dividida pela soma dos pesos (<b>fi</b>);</h4>
			<h4><span class="tab"></span><b>4ºPasso:</b> Raiz quadrada da divisão das somas anteriores;</h4>
			<div class="text-center mais-bottom">
				<img src="assets/img/media-quadratica-dados-agrupados-formula-2.jpg">
			</div>

			<h4 class="muito-mais-bottom">Observe que os valores estão divididos em classes e possuem pesos (<b>Xi</b>) diferentes, em que <b>Xi</b> é a média aritmética de cada classe e <b>xi²</b> é o quadrado da média aritmética.</h4>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.table th {
		text-align: center;
	}

	h2 {
		font-weight: bold;
		font-size: 20px;
	}

	h3 {
		font-weight: bold;
		font-size: 16px;
	}

	h4 {
		font-size: 14px;
	}
	</style>

	<script type="text/javascript">

	console.log('media-quadratica-dados-agrupados.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('media-quadratica.html');
	}

	function proxima() {

		swal({
			title: $%&#@*nomePessoa}, precisamos de sua ajuda para resolver a questão a seguir.$%&,
			closeOnClickOutside: false,
			closeOnEsc: false,
			button: {
				text: 'Vamos lá!',
				closeModal: true,
				className: 'btn',
			},
		})
		.then((value) => {
			carregarParte('questao-2.html');
		});
	}

	function ajuda() {
	}

	</script>

	`,

	"media-quadratica.html":
	`
	<div class="geral-interno">
		<img id='img-fundo' class="fundo" src="assets/img/media-quadratica-1.png"/>

		<video id='video-fundo' class='fundo ocultar' src="assets/video/matematica-quadratica-explicacao.mp4"/>

		<div class="muito-mais-top muitissimo-mais-bottom text-center ocultar" id="div-saiba-mais">
			<button type="button" class="btn" onclick="saibaMais()">Saiba mais</button>
		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	</style>

	<script type="text/javascript">

	console.log('media-quadratica.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexMediaQuadratica = 0;
	function anterior() {

		let divSaibaMais = document.querySelector('#div-saiba-mais');
		let imgFundo = document.querySelector('#img-fundo');
		switch (posIndexMediaQuadratica) {

			default:
			case 0:
				carregarParte('destino-lixo.html');
				break;

			case 1:
				imgFundo.src = 'assets/img/media-quadratica-1.png';

				posIndexMediaQuadratica--;
				break;

			case 2:
				divSaibaMais.classList.add('ocultar');

				imgFundo.src = 'assets/img/media-quadratica-2.png';

				posIndexMediaQuadratica--;
				break;

			case 3:
				divSaibaMais.classList.remove('ocultar');

				imgFundo.src = 'assets/img/media-quadratica-exemplo.png';

				document.querySelector('#img-fundo').classList.remove('ocultar');
				document.querySelector('#video-fundo').classList.add('ocultar');

				posIndexMediaQuadratica--;
				break;

		}
	}

	function proxima() {

		let divSaibaMais = document.querySelector('#div-saiba-mais');
		let imgFundo = document.querySelector('#img-fundo');
		switch (posIndexMediaQuadratica) {

			case 0:
				imgFundo.src = 'assets/img/media-quadratica-2.png';

				posIndexMediaQuadratica++;
				break;

			case 1:
				divSaibaMais.classList.remove('ocultar');

				imgFundo.src = 'assets/img/media-quadratica-exemplo.png';

				posIndexMediaQuadratica++;
				break;

			case 2:
				divSaibaMais.classList.add('ocultar');

				document.querySelector('#img-fundo').classList.add('ocultar');
				let videoFundo  = document.querySelector('#video-fundo');
				videoFundo.classList.remove('ocultar');
				videoFundo.play();

				posIndexMediaQuadratica++;
				break;

			default:
			case 3:
				carregarParte('media-quadratica-dados-agrupados.html');
				break;
		}
	}

	function ajuda() {
	}

	document.querySelector('#video-fundo').addEventListener('ended', function() {
		proxima();
	});

	function saibaMais() {

		if (document.querySelector('#dialog-media-quadratica-saiba-mais') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-media-quadratica-saiba-mais">


			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogMediaQuadratiaSaibaMais = $("#dialog-media-quadratica-saiba-mais").dialog({
			autoOpen: false,
			height: 500,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogMediaQuadratiaSaibaMais.dialog("open");
	}
	</script>

	`,

	"pre-login.html":
	`
	<div class="row geral-interno">
		<img class="fundo" src="assets/img/pre-login.png"/>

		<div class="login col-xs-3 col-xs-offset-2">
			<input type="text" class="form-control" id="login-confirmacao" maxlength="55" placeholder="Insira o seu nome"> </input>
			<button type="button" class="btn btn-primary btn-block" id="button-confirmacao">Confirmar</button>
		</div>
	</div>


	<style media="screen">
	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.login {
		top: 22%;
		position: absolute;
	}

	</style>

	<script type="text/javascript">

	console.log('pre-login.html');

	$("#iconSetaEsquerda").hide();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {
	}

	function proxima() {
		carregarParte('login.html');
	}

	function ajuda() {
	}

	let loginConfirmacao = document.querySelector('#login-confirmacao');
	let buttonConfirmacao = document.querySelector("#button-confirmacao");

	function realizarLogin() {
		if (!(loginConfirmacao.value === '')) {

			$("#login-confirmacao").fadeOut();
			$("#button-confirmacao").fadeOut();

			nomePessoa = loginConfirmacao.value;

			setTimeout(function() {
				proxima();
			}, 500);

		}
	}

	buttonConfirmacao.addEventListener("click", function() {
		realizarLogin();
	});

	loginConfirmacao.addEventListener("keypress", function(event) {
		if (event.keyCode == 13) {
			realizarLogin();
		}
	});

	</script>

	`,

	"questao-1.html":
	`
	<div class="geral-interno">
		<div class="container muitissimo-mais-bottom">
			<h3 class="top">Atividade 1 - Complete a tabela preenchendo as células roxas com a média e a mediana da quantidade diária de lixo coletado, em toneladas, por região brasileira:</h3>

			<h5 class="texto-auxiliar muito-mais-top mais-bottom">Clique/encoste nos campos em <span class="texto-formula"><b>AZUL</b></span> para visualizar o desenvolvimento.</h5>
			<h5 class="texto-auxiliar muito-mais-bottom">Clique/encoste nos campos em <span class="texto-editavel"><b>ROXO</b></span> para editar o valor.</h5>

			<div class="tabela">
				<table class='table'>
					<tr class="cabecalho">
						<th rowspan="4">Grandes Regiões</th>
					</tr>
					<tr class="cabecalho">
						<th colspan="5">Quantidade diária de lixo coletado (toneladas/dia)</th>
					</tr>
					<tr class="cabecalho">
						<th colspan="5">Unidade de destino final do lixo coletado</th>
					</tr>
					<tr class="cabecalho">
						<th colspan="1">Vazadouro a céu aberto (lixão)</th>
						<th colspan="1">Aterro controlado</th>
						<th colspan="1">Aterro sanitário</th>
						<th colspan="1">Estação de compostagem</th>
						<th colspan="1">Estação de triagem</th>
					</tr>

					<tr class="total">
						<td>Brasil</td>
						<td>48.321,7</td>
						<td>84.575,5</td>
						<td>82.640,3</td>
						<td>6.549,7</td>
						<td>2.265</td>
					</tr>
					<tr>
						<td>Norte</td>
						<td>6.279</td>
						<td>3.133,9</td>
						<td>1.468,8</td>
						<td>5</td>
						<td>0</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>20.043,5</td>
						<td>6.071,9</td>
						<td>15.030,1</td>
						<td>74</td>
						<td>92,5</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>13.755,9</td>
						<td>65.851,4</td>
						<td>52.542,3</td>
						<td>5.437,9</td>
						<td>1.262,9</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>5.112,3</td>
						<td>4.833,9</td>
						<td>8.046</td>
						<td>347,2</td>
						<td>832,6</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>3.131</td>
						<td>4.684,4</td>
						<td>5.553,1</td>
						<td>685,6</td>
						<td>77</td>
					</tr>
					<tr class="media">
						<td>MÉDIA</td>
						<td><span id="questao-1-formula-a" class="fundo-formula">9.664,34</span></td>
						<td><span id="questao-1-formula-b" class="fundo-formula">16.915,1</span></td>
						<td><input class="fundo-editavel fundo-editavel-normal" placeholder='?' id='formula-media-a' type="text"></td>
						<td><span id="questao-1-formula-c" class="fundo-formula">1.309,94</span></td>
						<td><input class="fundo-editavel fundo-editavel-normal" placeholder='?' id='formula-media-b' type="text"></td>
					</tr>
					<tr class="mediana">
						<td>MEDIANA</td>
						<td><span id="questao-1-formula-d" class="fundo-formula">6.279</span></td>
						<td><span id="questao-1-formula-e" class="fundo-formula">4.833,9</span></td>
						<td><input class="fundo-editavel fundo-editavel-normal" placeholder='?' id='formula-mediana-a' type="text"></td>
						<td><span id="questao-1-formula-f" class="fundo-formula">347,2</span></td>
						<td><input class="fundo-editavel fundo-editavel-normal" placeholder='?' id='formula-mediana-b' type="text"></td>
					</tr>
				</table>
				<div class="fonte">
					<h6>Fonte: IBGE, Diretoria de Pesquisas, Departamento de População e Indicadores Sociais, Pesquisa Nacional de Saneamento <span id='auto-completar'>Básico</span>.</h6>
				</div>
			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.tabela th,td {
		text-align: center;
		vertical-align: middle !important;
	}

	.tabela .cabecalho {
		background-color: #80C9F2;
	}

	.tabela .total {
		background-color: #BAE4FC;
		font-weight: bold;
	}

	.tabela .media {
		font-weight: bold;
	}

	.tabela .mediana {
		font-weight: bold;
	}

	.tabela .fonte {
		text-align: center;
	}

	.texto-auxiliar {
		text-align: center;
		font-style: italic;
	}

	.texto-formula {
		font-style: normal;
		color: #80C9F2;
		transition: .3s ease;
	}

	.texto-formula:hover {
		color: #FFFFFF;
		background-color: #80C9F2;
		padding-left: 3px;
		padding-right: 3px;
		border-radius: 4px;
		transition: .3s ease;
	}

	.fundo-formula {
		color: #FFFFFF;
		background-color: #80C9F2;
		padding-top: 4px;
		padding-bottom: 4px;
		padding-left: 6px;
		padding-right: 6px;
		border-radius: 4px;
		transition: .3s ease;
	}

	.fundo-formula:hover {
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 8px;
		padding-right: 8px;
		cursor: pointer;
		transition: .3s ease;
	}

	.texto-editavel {
		font-style: normal;
		color: #ae6df5;
		transition: .3s ease;
	}

	.texto-editavel:hover {
		color: #FFFFFF;
		background-color: #ae6df5;
		padding-left: 3px;
		padding-right: 3px;
		border-radius: 4px;
		transition: .3s ease;
	}

	.fundo-editavel {
		border-width: 0px;
		border-radius: 4px;
		width: 100px;
		height: 24px;
		text-align: center;
	}

	.fundo-editavel-normal {
		color: #FFFFFF;
		background-color: #ae6df5;
		transition: .3s ease;
	}

	.fundo-editavel-ok {
		color: #FFFFFF;
		background-color: #46D079;
		transition: .3s ease;
	}

	.formula-texto {
		text-align: center;
		margin: 36px;
	}

	.formula-texto h3 {
		font-size: 48px;
	}

	.formula-img {
		text-align: center;
	}

	.formula-img img {
		width: 800px;
	}

	.formula {
		text-align: center;
		margin: 25px;
	}

	.dia-semana {
		display: inline-flex;
	}

	.dia-semana h4 {
		margin-left: 12px;
		margin-right: 12px;
	}

	.cima-baixo {
	    display: grid;
		text-align: center;
	}

	.cima-baixo hr {
		margin: 0px;
	    border-top: 1px solid #000;
	}

	.cima {
		display: inline-flex;
	}

	.baixo {
	}

	</style>

	<script type="text/javascript">

	console.log('questao-1.html');

	apenasNumeros(document.querySelector("#formula-media-a"));
	apenasNumeros(document.querySelector("#formula-media-b"));
	apenasNumeros(document.querySelector("#formula-mediana-a"));
	apenasNumeros(document.querySelector("#formula-mediana-b"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('inicio-questoes.html');
	}

	function proxima() {

		carregarParte('destino-lixo.html');
	}

	document.querySelector("#questao-1-formula-a").addEventListener('click', function() {
		popUp('9.664,34');
	});
	document.querySelector("#questao-1-formula-b").addEventListener('click', function() {
		popUp('16.915,1');
	});
	document.querySelector("#questao-1-formula-c").addEventListener('click', function() {
		popUp('1.309,94')
	});
	document.querySelector("#questao-1-formula-d").addEventListener('click', function() {
		popUp('6.279');
	});
	document.querySelector("#questao-1-formula-e").addEventListener('click', function() {
		popUp('4.833,9');
	});
	document.querySelector("#questao-1-formula-f").addEventListener('click', function() {
		popUp('347,2');
	});

	document.querySelector("#formula-media-a").addEventListener('input', function() {
		validarResultados();
	});
	document.querySelector("#formula-media-b").addEventListener('input', function() {
		validarResultados();
	});
	document.querySelector("#formula-mediana-a").addEventListener('input', function() {
		validarResultados();
	});
	document.querySelector("#formula-mediana-b").addEventListener('input', function() {
		validarResultados();
	});

	function ajuda() {
		if (document.querySelector('#dialog-questao-1-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-1-ajuda">
				<div class='row'>

					<div class="principal">
						<h4>Ao clicar/encostar sobre os resultados já calculados, aparecerão os desenvolvimentos dos cálculos.</h4>
						<h4>Realize os cálculos de média aritmética e mediana conforme as colunas, lembrando que, os dados relacionados ao Brasil são totais das regiões, então, ao realizar o cálculo use apenas esses dados ou apenas os dados das regiões.</h4>

						<h4>Se desejas rever algum destes conteúdos clique sobre ele:</h4>
						<div class='text-center'>
							<button class='btn' onclick="ajudaPage('media')">Média Aritmética</button>
							<button class='btn' onclick="ajudaPage('mediana')">Mediana</button>
						</div>
					</div>

					<div class='media'>
						<h4><span class='tab'></span>Na média aritmética simples, somamos todos os elementos do conjunto e, em seguida, dividimos o resultado obtido pela quantidade de elementos que compõe o conjunto.</h4>
						<h4>Exemplo: Um determinado catador recolheu 52 latinhas de refrigerante na segunda-feira, 44 na terça-feira, 69 na quarta-feira, 57 na quinta-feira e 73 na sexta-feira. Calcule a média de latinhas recolhidas por dia, pelo catador, nesse período:</h4>

						<div class='text-center'>
							<img src='assets/img/questao-ajuda-media-formula.png'/>
						</div>

						<h4>Na semana analisada, o catador recolheu, <b>em média</b>, 59 latinhas por dia.</h4>

						<div class='text-center'>
							<button class='btn' onclick="ajudaPage('principal')">Voltar</button>
						</div>
					</div>

					<div class='mediana'>

						<ul><li><h4>Quando o número de dados for ímpar, teremos apenas uma mediana.</h4></li></ul>
						<h4 class='muito-mais-top'><span class='tab'></span>Dadas as regiões brasileiras da tabela e seus dados quanto ao lixo gerado em toneladas/dia em cada estado, determine a mediana dos valores:</h4>
						<h4>{6.330; 3.079; 2.520; 4.126; 2.956; 17.592; 21.041; 56.626; 8.507; 8.225; 4.613}</h4>

						<h4 class='mais-top'><span class='tab'></span>1) Primeiro devemos organizar os dados em ordem crescente:</h4>
						<h4>{2.520; 2.956; 3.079; 4.126; 4.613; 6.330; 8.225; 8.507; 17.592; 21.041; 56.626}</h4>

						<h4 class='mais-top'><span class='tab'></span>2) Em seguida, encontramos o valor central:</h4>
						<h4>{2.520; 2.956; 3.079; 4.126; 4.613; <span style='color:#45C876;'>6.330</span>; 8.225; 8.507; 17.592; 21.041; 56.626}</h4>

						<h4 class='mais-top'><span class='tab'></span></sp>Observe que o valor <span style='color:#45C876;'>6.330</span> divide o conjunto exatamente ao meio, pois há somente cinco elementos antes e cinco elementos após este número. Portanto, ele é a própria mediana.</h4>

						<div class='text-center'>
							<img src='assets/img/questao-ajuda-mediana-grafico.png'/>
						</div>

						<div class='text-center'>
							<button class='btn' onclick="ajudaPage('principal')">Voltar</button>
						</div>
					</div>

				</div>
			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
			ajudaPage('principal');
		}

		let dialogQuestao1Ajuda = $("#dialog-questao-1-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 850,
			modal: true,
			buttons: {}
		});
		dialogQuestao1Ajuda.dialog("open");
	}

	function ajudaPage(tipo) {

		let divAjuda = document.querySelector('#dialog-questao-1-ajuda');
		let divAjudaPrincipal = divAjuda.querySelector('.principal');
		let divAjudaMedia = divAjuda.querySelector('.media');
		let divAjudaMediana = divAjuda.querySelector('.mediana');

		let classAddRemove = 'oculto';
		switch (tipo) {

			default:
			case 'principal':
				divAjudaPrincipal.classList.remove(classAddRemove);
				divAjudaMedia.classList.add(classAddRemove);
				divAjudaMediana.classList.add(classAddRemove);
				break;

			case 'media':
				divAjudaPrincipal.classList.add(classAddRemove);
				divAjudaMedia.classList.remove(classAddRemove);
				divAjudaMediana.classList.add(classAddRemove);
				break;

			case 'mediana':
				divAjudaPrincipal.classList.add(classAddRemove);
				divAjudaMedia.classList.add(classAddRemove);
				divAjudaMediana.classList.remove(classAddRemove);
				break;

		}
	}

	let formulaMediaA = document.querySelector('#formula-media-a');
	let formulaMediaB = document.querySelector('#formula-media-b');
	let formulaMedianaA = document.querySelector('#formula-mediana-a');
	let formulaMedianaB = document.querySelector('#formula-mediana-b');

	let respostaMediaA = 16528.06;
	let respostaMediaB = 453;
	let respostaMedianaA = 8046;
	let respostaMedianaB = 92.5;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {
			formulaMediaA.value = respostaMediaA.toString().replace('.', ',');
			formulaMediaB.value = respostaMediaB.toString().replace('.', ',');
			formulaMedianaA.value = respostaMedianaA.toString().replace('.', ',');
			formulaMedianaB.value = respostaMedianaB.toString().replace('.', ',');
			validarResultados();
		}
	});

	function validarResultados() {
		let valMediaA = formulaMediaA.value.replace('.', '').replace(',', '.');
		let valMediaB = formulaMediaB.value.replace('.', '').replace(',', '.');
		let valMedianaA = formulaMedianaA.value.replace('.', '').replace(',', '.');
		let valMedianaB = formulaMedianaB.value.replace('.', '').replace(',', '.');

		let validacaoMediaA = (valMediaA == respostaMediaA);
		let validacaoMediaB = (valMediaB == respostaMediaB);
		let validacaoMedianaA = (valMedianaA == respostaMedianaA);
		let validacaoMedianaB = (valMedianaB == respostaMedianaB);

		if (validacaoMediaA) {
			formulaMediaA.classList.remove('fundo-editavel-normal');
			formulaMediaA.classList.add('fundo-editavel-ok');
		} else {
			formulaMediaA.classList.add('fundo-editavel-normal');
			formulaMediaA.classList.remove('fundo-editavel-ok');
		}

		if (validacaoMediaB) {
			formulaMediaB.classList.remove('fundo-editavel-normal');
			formulaMediaB.classList.add('fundo-editavel-ok');
		} else {
			formulaMediaB.classList.add('fundo-editavel-normal');
			formulaMediaB.classList.remove('fundo-editavel-ok');
		}

		if (validacaoMedianaA) {
			formulaMedianaA.classList.remove('fundo-editavel-normal');
			formulaMedianaA.classList.add('fundo-editavel-ok');
		} else {
			formulaMedianaA.classList.add('fundo-editavel-normal');
			formulaMedianaA.classList.remove('fundo-editavel-ok');
		}

		if (validacaoMedianaB) {
			formulaMedianaB.classList.remove('fundo-editavel-normal');
			formulaMedianaB.classList.add('fundo-editavel-ok');
		} else {
			formulaMedianaB.classList.add('fundo-editavel-normal');
			formulaMedianaB.classList.remove('fundo-editavel-ok');
		}

		if (validacaoMediaA
			&& validacaoMediaB
			&& validacaoMedianaA
			&& validacaoMedianaB) {

			$("#iconSetaDireita").show();
		} else {

			$("#iconSetaDireita").hide();
		}
	}

	function popUp(valor) {

		if (document.querySelector('#dialog-questao-1-pop-up') == null) {
			let inner = document.querySelector(".mensagens").innerHTML;
			inner += $%&
			<div id="dialog-questao-1-pop-up">
				<div class="row">
					<div class='formula-texto'>
						<h3 id='formula-texto'></h3>
					</div>
					<div class='formula-img'>
						<img id='formula-img' src=''>
					</div>
				</div>
			</div>$%&
			document.querySelector(".mensagens").innerHTML = inner;

		}

		let caminhoImg = 'assets/img/';
		switch (valor) {

			default:
			case '9.664,34':
				caminhoImg += 'questao-1-formula-media-1.png';
				break;

			case '16.915,1':
				caminhoImg += 'questao-1-formula-media-2.png';
				break;

			case '1.309,94':
				caminhoImg += 'questao-1-formula-media-3.png';
				break;

			case '6.279':
				caminhoImg += 'questao-1-formula-mediana-1.png';
				break;

			case '4.833,9':
				caminhoImg += 'questao-1-formula-mediana-2.png';
				break;

			case '347,2':
				caminhoImg += 'questao-1-formula-mediana-3.png';
				break;

		}

		document.querySelector('#formula-texto').innerHTML = valor;
		document.querySelector('#formula-img').src = caminhoImg;

		let dialogQuestao1PopUp = $("#dialog-questao-1-pop-up").dialog({
			autoOpen: false,
			height: 300,
			width: 850,
			modal: true,
			buttons: {},
			close: function() {
			}
		});
		dialogQuestao1PopUp.dialog("open");
	}

	</script>

	`,

	"questao-2.html":
	`
	<div class="geral-interno">
		<div class="container">

			<h3 class="top">Atividade 2 - Considerando os seguintes valores, responda as <span id='auto-completar'>questões</span> a seguir: A = {1, 2, 4, 10}</h3>

			<div class="questao-a">
				<h5><span class='tab'></span><b>a)</b> Quais são os quadrados dos valores considerados?</h5>

				<div class="col-xs-3 text-center">
					<div class="questao-a-1 input-x fundo-normal">
						<h5>1²=</h5>
						<input id='input-questao-a-1' type="text">
					</div>
				</div>

				<div class="col-xs-3 text-center">
					<div class="questao-a-2 input-x fundo-normal">
						<h5>2²=</h5>
						<input id='input-questao-a-2' type="text">
					</div>
				</div>

				<div class="col-xs-3 text-center">
					<div class="questao-a-3 input-x fundo-normal">
						<h5>4²=</h5>
						<input id='input-questao-a-3' type="text">
					</div>
				</div>

				<div class="col-xs-3 text-center">
					<div class="questao-a-4 input-x fundo-normal">
						<h5>10²=</h5>
						<input id='input-questao-a-4' type="text">
					</div>
				</div>
			</div>

			<div class="questao-b">
				<h5><span class='tab'></span><b>b)</b> Qual o valor que corresponde à soma dos quadrados dos valores considerados?</h5>

				<div class="text-center">
					<div class="input-x fundo-normal">
						<input id='input-questao-b' type="text">
					</div>
				</div>
			</div>

			<div class="questao-c">
				<h5><span class='tab'></span><b>c)</b> Qual o valor encontrado ao dividir a resposta anterior pela quantidade de valores considerados?</h5>

				<div class="text-center">
					<div class="input-x fundo-normal">
						<input id='input-questao-c' type="text">
					</div>
				</div>
			</div>

			<div class="questao-d">
				<h5><span class='tab'></span><b>d)</b> Qual será a Média Quadrática, ou seja, a raiz quadrada da resposta da questão anterior?</h5>

				<div class="text-center">
					<div class="input-x fundo-normal">
						<input id='input-questao-d' type="text">
					</div>
				</div>
			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.questao-a, .questao-b, .questao-c, .questao-d {
		height: 80px;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.input-x h5 {
		color: #F5F5F5;
		margin: 6px;
		font-weight: bold;
		font-size: 16px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		width: 55px;
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-2.html');

	apenasNumeros(document.querySelector("#input-questao-a-1"));
	apenasNumeros(document.querySelector("#input-questao-a-2"));
	apenasNumeros(document.querySelector("#input-questao-a-3"));
	apenasNumeros(document.querySelector("#input-questao-a-4"));
	apenasNumeros(document.querySelector("#input-questao-b"));
	apenasNumeros(document.querySelector("#input-questao-c"));
	apenasNumeros(document.querySelector("#input-questao-d"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('media-quadratica-dados-agrupados.html');
	}

	function proxima() {

		carregarParte('variancia.html');
	}


	function ajuda() {
		if (document.querySelector('#dialog-questao-2-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-2-ajuda">
				<h3 class='text-center muito-mais-bottom'><b>Média Quadrática</b></h3>

				<h4><b>Média Quadrática Simples: (para dados não agrupados)</b></h4>
				<div class='text-center'>
					<img src="assets/img/media-quadratica-dados-agrupados-formula-ajuda.jpg" />
				</div>

				<h4>Exemplo: Calcular a média quadrática simples do seguinte conjunto de números:  A= {2, 3, 4, 5}</h4>
				<div class='text-center'>
					<img src="assets/img/media-quadratica-dados-agrupados-formula-ajuda-2.jpg" />
				</div>

				<h4 class='muito-mais-top muito-mais-bottom'>Observação: A raiz será sempre quadrada.</h4>

				<h4><b>Resolução:</b></h4>
				<h5><b>1° passo:</b> Elevar cada um dos números ao quadrado;</h5>
				<h5><b>2° passo:</b> Resolver os quadrados e somar os resultados;</h5>
				<h5><b>3° passo:</b> Dividir por n, ou seja, a quantidade de números elevados ao quadrado;</h5>
				<h5><b>4° passo:</b> Obter a raiz quadrada;</h5>

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao2Ajuda = $("#dialog-questao-2-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 850,
			modal: true,
			buttons: {}
		});
		dialogQuestao2Ajuda.dialog("open");
	}

	document.querySelector("#input-questao-a-1").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-questao-a-2").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-questao-a-3").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-questao-a-4").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-questao-b").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-questao-c").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-questao-d").addEventListener('input', function() {
		validarValores();
	});

	let valorCorretoQuestaoA1 = 1;
	let valorCorretoQuestaoA2 = 4;
	let valorCorretoQuestaoA3 = 16;
	let valorCorretoQuestaoA4 = 100;
	let valorCorretoQuestaoB = 121;
	let valorCorretoQuestaoC = 30.25;
	let valorCorretoQuestaoD = 5.5;

	let isQuestaoA1Ok = false;
	let isQuestaoA2Ok = false;
	let isQuestaoA3Ok = false;
	let isQuestaoA4Ok = false;
	let isQuestaoBOk = false;
	let isQuestaoCOk = false;
	let isQuestaoDOk = false;

	let inputQuestaoA1 = document.querySelector('#input-questao-a-1');
	let inputQuestaoA2 = document.querySelector('#input-questao-a-2');
	let inputQuestaoA3 = document.querySelector('#input-questao-a-3');
	let inputQuestaoA4 = document.querySelector('#input-questao-a-4');
	let inputQuestaoB = document.querySelector('#input-questao-b');
	let inputQuestaoC = document.querySelector('#input-questao-c');
	let inputQuestaoD = document.querySelector('#input-questao-d');

	let campoQuestaoA1 = document.querySelector('.questao-a-1');
	let campoQuestaoA2 = document.querySelector('.questao-a-2');
	let campoQuestaoA3 = document.querySelector('.questao-a-3');
	let campoQuestaoA4 = document.querySelector('.questao-a-4');
	let campoQuestaoB = document.querySelector('.questao-b .input-x');
	let campoQuestaoC = document.querySelector('.questao-c .input-x');
	let campoQuestaoD = document.querySelector('.questao-d .input-x');

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {
			inputQuestaoA1.value = valorCorretoQuestaoA1.toString().replace('.', ',');
			inputQuestaoA2.value = valorCorretoQuestaoA2.toString().replace('.', ',');
			inputQuestaoA3.value = valorCorretoQuestaoA3.toString().replace('.', ',');
			inputQuestaoA4.value = valorCorretoQuestaoA4.toString().replace('.', ',');

			inputQuestaoB.value = valorCorretoQuestaoB.toString().replace('.', ',');
			inputQuestaoC.value = valorCorretoQuestaoC.toString().replace('.', ',');
			inputQuestaoD.value = valorCorretoQuestaoD.toString().replace('.', ',');
			validarValores();
		}
	});

	function validarValores() {
		let valQuestaoA1 = inputQuestaoA1.value.replace('.', '').replace(',', '.');
		let valQuestaoA2 = inputQuestaoA2.value.replace('.', '').replace(',', '.');
		let valQuestaoA3 = inputQuestaoA3.value.replace('.', '').replace(',', '.');
		let valQuestaoA4 = inputQuestaoA4.value.replace('.', '').replace(',', '.');
		let valQuestaoB = inputQuestaoB.value.replace('.', '').replace(',', '.');
		let valQuestaoC = inputQuestaoC.value.replace('.', '').replace(',', '.');
		let valQuestaoD = inputQuestaoD.value.replace('.', '').replace(',', '.');

		isQuestaoA1Ok = (valQuestaoA1 == valorCorretoQuestaoA1);
		isQuestaoA2Ok = (valQuestaoA2 == valorCorretoQuestaoA2);
		isQuestaoA3Ok = (valQuestaoA3 == valorCorretoQuestaoA3);
		isQuestaoA4Ok = (valQuestaoA4 == valorCorretoQuestaoA4);
		isQuestaoBOk = (valQuestaoB == valorCorretoQuestaoB);
		isQuestaoCOk = (valQuestaoC == valorCorretoQuestaoC);
		isQuestaoDOk = (valQuestaoD == valorCorretoQuestaoD);

		if (isQuestaoA1Ok) {
			campoQuestaoA1.classList.add('fundo-ok');
			campoQuestaoA1.classList.remove('fundo-normal');
		} else {
			campoQuestaoA1.classList.remove('fundo-ok');
			campoQuestaoA1.classList.add('fundo-normal');
		}

		if (isQuestaoA2Ok) {
			campoQuestaoA2.classList.add('fundo-ok');
			campoQuestaoA2.classList.remove('fundo-normal');
		} else {
			campoQuestaoA2.classList.remove('fundo-ok');
			campoQuestaoA2.classList.add('fundo-normal');
		}

		if (isQuestaoA3Ok) {
			campoQuestaoA3.classList.add('fundo-ok');
			campoQuestaoA3.classList.remove('fundo-normal');
		} else {
			campoQuestaoA3.classList.remove('fundo-ok');
			campoQuestaoA3.classList.add('fundo-normal');
		}

		if (isQuestaoA4Ok) {
			campoQuestaoA4.classList.add('fundo-ok');
			campoQuestaoA4.classList.remove('fundo-normal');
		} else {
			campoQuestaoA4.classList.remove('fundo-ok');
			campoQuestaoA4.classList.add('fundo-normal');
		}

		if (isQuestaoBOk) {
			campoQuestaoB.classList.add('fundo-ok');
			campoQuestaoB.classList.remove('fundo-normal');
		} else {
			campoQuestaoB.classList.remove('fundo-ok');
			campoQuestaoB.classList.add('fundo-normal');
		}

		if (isQuestaoCOk) {
			campoQuestaoC.classList.add('fundo-ok');
			campoQuestaoC.classList.remove('fundo-normal');
		} else {
			campoQuestaoC.classList.remove('fundo-ok');
			campoQuestaoC.classList.add('fundo-normal');
		}

		if (isQuestaoDOk) {
			campoQuestaoD.classList.add('fundo-ok');
			campoQuestaoD.classList.remove('fundo-normal');
		} else {
			campoQuestaoD.classList.remove('fundo-ok');
			campoQuestaoD.classList.add('fundo-normal');
		}

		if (isQuestaoA1Ok && isQuestaoA2Ok && isQuestaoA3Ok && isQuestaoA4Ok && isQuestaoBOk && isQuestaoCOk && isQuestaoDOk) {
			$("#iconSetaDireita").show();
		} else {
			$("#iconSetaDireita").hide();
		}
	}

	</script>

	`,

	"questao-3.html":
	`
	<div class="geral-interno">
		<div class="container">

			<h3 class="top">Atividade 3 - Calcular a variância dos valores da seguinte tabela, complete onde for <span id='auto-completar'>indicado</span> por '<b>?</b>'.</h3>
			<div class="tabela col-xs-12 col-md-6">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de plástico</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>977</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>19</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>74</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>403</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>450</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>31</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>36.160,24</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12 col-md-6" style="display:flex">
				<h4>1º Média Aritmética de municípios por região que possuem coleta seletiva de plástico: </h4>
				<div class="campo-media">
					<div class="text-center">
						<div class="input-x fundo-normal preenchimento-b">
							<input id='media' type="text" placeholder="?">
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-md-6 mais-top">
				<h4>2º Variância: média dos quadrados dos desvios (desvio é cada um dos valores menos a média)</h4>

				<div class="row">

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Variância = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>(valor1 - média)² + (valor2 + média)² + (valor3 + média)²</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>(número de valores)</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-a">19</span> - <span class="media-pre preenchimento-b">?</span>)² +
										(<span class="preenchimento-a">74</span> - <span class="media-pre preenchimento-b">?</span>)² +
										(<span class="preenchimento-a">403</span> - <span class="media-pre preenchimento-b">?</span>)² +
										(<span class="preenchimento-a">450</span> - <span class="media-pre preenchimento-b">?</span>)² +
										(<span class="preenchimento-a">31</span> - <span class="media-pre preenchimento-b">?</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>5</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-c soma-a">?</span>)² +
										(<span class="preenchimento-c soma-b">?</span>)² +
										(<span class="preenchimento-c soma-c">?</span>)² +
										(<span class="preenchimento-c soma-d">?</span>)² +
										(<span class="preenchimento-c soma-e">?</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<span class="preenchimento-d total-a">?</span> +
										<span class="preenchimento-d total-b">?</span> +
										<span class="preenchimento-d total-c">?</span> +
										<span class="preenchimento-d total-d">?</span> +
										<span class="preenchimento-d total-e">?</span>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<b><span class="totalizado-final">?</span></b>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<h5>
									<b><span class="final-geral">?</span></b>
								</h5>
							</div>
						</div>
					</div>

				</div>

			</div>

			<div class="tabela col-xs-12 mais-top muitissimo-mais-bottom">
				<h4>Podemos organizar os dados em uma tabela, da seguinte forma:</h4>

				<table class="table text-center">
					<tr>
						<th>Xi (valores)</th>
						<th>X&#772; (média)</th>
						<th>(Xi - X&#772;) (valor - média)</th>
						<th>(Xi - X&#772;)²</th>
					</tr>
					<tr>
						<td><span class="preenchimento-a">19</span></td>
						<td><span class="preenchimento-b media-pre">?</span></td>
						<td><span class="preenchimento-a">19</span> - <span class="preenchimento-b media-pre">?</span> = <span class="preenchimento-c soma-a">?</span></td>
						<td><span class="preenchimento-d total-a">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">74</span></td>
						<td><span class="preenchimento-b media-pre">?</span></td>
						<td><span class="preenchimento-a">74</span> - <span class="preenchimento-b media-pre">?</span> = <span class="preenchimento-c soma-b">?</span></td>
						<td><span class="preenchimento-d total-b">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">403</span></td>
						<td><span class="preenchimento-b media-pre">?</span></td>
						<td><span class="preenchimento-a">403</span> - <span class="preenchimento-b media-pre">?</span> = <span class="preenchimento-c soma-c">?</span></td>
						<td><span class="preenchimento-d total-c">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">450</span></td>
						<td><span class="preenchimento-b media-pre">?</span></td>
						<td><span class="preenchimento-a">450</span> - <span class="preenchimento-b media-pre">?</span> = <span class="preenchimento-c soma-d">?</span></td>
						<td><span class="preenchimento-d total-d">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">31</span></td>
						<td><span class="preenchimento-b media-pre">?</span></td>
						<td><span class="preenchimento-a">31</span> - <span class="preenchimento-b media-pre">?</span> = <span class="preenchimento-c soma-e">?</span></td>
						<td><span class="preenchimento-d total-e">?</span></td>
					</tr>
					<tr class="total">
						<td colspan="2"></td>
						<td>Soma = </td>
						<td><span class="totalizado-final">?</span></td>
					</tr>
				</table>

				<div class="col-xs-12 mais-top pre-formula">
					<div class="formula">
						<h5>Var = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>
									<b><span class="totalizado-final">?</span></b>
								</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5><b>5</b></h5>
							</div>
						</div>

						<h5> = </h5>

						<div class="calculo">
							<h5>
								<b><span class="final-geral">?</span></b>
							</h5>
						</div>
					</div>
				</div>


			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-3.html');

	apenasNumeros(document.querySelector("#media"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('variancia.html');
	}

	function proxima() {

		carregarParte('questao-4.html');
	}

	function ajuda() {
		if (document.querySelector('#dialog-questao-3-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-3-ajuda">
				<img src="assets/img/questao-3-4-5-ajuda.png" />

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao3Ajuda = $("#dialog-questao-3-ajuda").dialog({
			autoOpen: false,
			height: 600,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao3Ajuda.dialog("open");
	}

	document.querySelector("#media").addEventListener('input', function() {
		validarValores();
	});

	let inputMedia = document.querySelector("#media");

	let campoMedia = document.querySelector(".campo-media .input-x");

	let mediaOk = false;

	let valorCorretoMedia = 195.4;
	let valorSomaA = -176.4;
	let valorSomaB = -121.4;
	let valorSomaC = 207.6;
	let valorSomaD = 254.6;
	let valorSomaE = -164.4;
	let valorTotalA = Math.pow(valorSomaA, 2).toFixed(2);
	let valorTotalB = Math.pow(valorSomaB, 2).toFixed(2);
	let valorTotalC = Math.pow(valorSomaC, 2).toFixed(2);
	let valorTotalD = Math.pow(valorSomaD, 2).toFixed(2);
	let valorTotalE = Math.pow(valorSomaE, 2).toFixed(2);
	let valorTotalizado = parseFloat(valorTotalA) + parseFloat(valorTotalB) + parseFloat(valorTotalC) + parseFloat(valorTotalD) + parseFloat(valorTotalE);
	let valorTotalizadoFinal = (valorTotalizado / 5).toFixed(2);

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {
			inputMedia.value = valorCorretoMedia.toString().replace('.', ',');

			validarValores();
		}
	});

	function validarValores() {
		let valorMedia = inputMedia.value.replace('.', '').replace(',', '.');

		mediaOk = (valorMedia == valorCorretoMedia);

		if (mediaOk) {
			campoMedia.classList.add('fundo-ok');
			campoMedia.classList.remove('fundo-normal');
		} else {
			campoMedia.classList.remove('fundo-ok');
			campoMedia.classList.add('fundo-normal');
		}
		preencherCamposMedia(mediaOk);

		if (mediaOk) {
			$("#iconSetaDireita").show();
		} else {
			$("#iconSetaDireita").hide();
		}

	}

	function preencherCamposMedia(mediaOk) {
		let medias = document.querySelectorAll('.media-pre');
		for (var posMedia in medias) {
			if (mediaOk) {
				medias[posMedia].innerHTML = valorCorretoMedia.toString().replace('.', ',');
			} else {
				medias[posMedia].innerHTML = '?';
			}
		}

		let somasA = document.querySelectorAll('.soma-a');
		let somasB = document.querySelectorAll('.soma-b');
		let somasC = document.querySelectorAll('.soma-c');
		let somasD = document.querySelectorAll('.soma-d');
		let somasE = document.querySelectorAll('.soma-e');
		let totaisA = document.querySelectorAll('.total-a');
		let totaisB = document.querySelectorAll('.total-b');
		let totaisC = document.querySelectorAll('.total-c');
		let totaisD = document.querySelectorAll('.total-d');
		let totaisE = document.querySelectorAll('.total-e');
		let totalizadoFinal = document.querySelectorAll('.totalizado-final');
		let totalFinal = document.querySelectorAll('.final-geral');

		for (var posSomaA in somasA) {
			if (mediaOk) {
				somasA[posSomaA].innerHTML = valorSomaA.toString().replace('.', ',');
			} else {
				somasA[posSomaA].innerHTML = '?';
			}
		}
		for (var posSomaB in somasB) {
			if (mediaOk) {
				somasB[posSomaB].innerHTML = valorSomaB.toString().replace('.', ',');
			} else {
				somasB[posSomaB].innerHTML = '?';
			}
		}
		for (var posSomaC in somasC) {
			if (mediaOk) {
				somasC[posSomaC].innerHTML = valorSomaC.toString().replace('.', ',');
			} else {
				somasC[posSomaC].innerHTML = '?';
			}
		}
		for (var posSomaD in somasD) {
			if (mediaOk) {
				somasD[posSomaD].innerHTML = valorSomaD.toString().replace('.', ',');
			} else {
				somasD[posSomaD].innerHTML = '?';
			}
		}
		for (var posSomaE in somasE) {
			if (mediaOk) {
				somasE[posSomaE].innerHTML = valorSomaE.toString().replace('.', ',');
			} else {
				somasE[posSomaE].innerHTML = '?';
			}
		}

		for (var posTotalA in totaisA) {
			if (mediaOk) {
				totaisA[posTotalA].innerHTML = valorTotalA.toString().replace('.', ',');
			} else {
				totaisA[posTotalA].innerHTML = '?';
			}
		}
		for (var posTotalB in totaisB) {
			if (mediaOk) {
				totaisB[posTotalB].innerHTML = valorTotalB.toString().replace('.', ',');
			} else {
				totaisB[posTotalB].innerHTML = '?';
			}
		}
		for (var posTotalC in totaisC) {
			if (mediaOk) {
				totaisC[posTotalC].innerHTML = valorTotalC.toString().replace('.', ',');
			} else {
				totaisC[posTotalC].innerHTML = '?';
			}
		}
		for (var posTotalD in totaisD) {
			if (mediaOk) {
				totaisD[posTotalD].innerHTML = valorTotalD.toString().replace('.', ',');
			} else {
				totaisD[posTotalD].innerHTML = '?';
			}
		}
		for (var posTotalE in totaisE) {
			if (mediaOk) {
				totaisE[posTotalE].innerHTML = valorTotalE.toString().replace('.', ',');
			} else {
				totaisE[posTotalE].innerHTML = '?';
			}
		}

		for (var posTotalFinal in totalizadoFinal) {
			if (mediaOk) {
				totalizadoFinal[posTotalFinal].innerHTML = valorTotalizado.toString().replace('.', ',');
			} else {
				totalizadoFinal[posTotalFinal].innerHTML = '?';
			}
		}

		for (var posTotal in totalFinal) {
			if (mediaOk) {
				totalFinal[posTotal].innerHTML = valorTotalizadoFinal.toString().replace('.', ',');
			} else {
				totalFinal[posTotal].innerHTML = '?';
			}
		}
	}

	</script>

	`,

	"questao-4.html":
	`
	<div class="geral-interno">
		<div class="container">

			<h3 class="top">Atividade 4 - Calcular a variância dos valores da seguinte tabela, complete onde for <span id='auto-completar'>indicado</span> por '<b>?</b>'.</h3>
			<div class="tabela col-xs-12 col-md-6">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de vidro</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>923</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>16</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>67</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>380</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>432</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>28</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>33.233,44</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12 col-md-6" style="display:flex">

				<div class="formula">
					<h4>1º Média Aritmética = </h4>

					<div class="calculo">
						<div class="cima">
							<h5>16 + 67 + 380 + 432 + 28</h5>
						</div>
						<div class="linha">
							<hr>
						</div>
						<div class="baixo">
							<h5>5</h5>
						</div>
					</div>

					<h5> = </h5>

					<div class="calculo">
						<div class="cima">
							<h5>923</h5>
						</div>
						<div class="linha">
							<hr>
						</div>
						<div class="baixo">
							<h5>5</h5>
						</div>
					</div>

					<h5> = <span class='preenchimento-b'>184,6</span></h5>
				</div>
			</div>

			<div class="col-xs-12 col-md-6 mais-top muitissimo-mais-bottom">
				<h4>2º Variância: média dos quadrados dos desvios (desvio é cada um dos valores menos a média)</h4>

				<div class="row">

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Variância = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>(valor1 - média)² + (valor2 + média)² + (valor3 + média)²</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>(número de valores)</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-a">16</span> - <span class="media-pre preenchimento-b">184,6</span>)² +
										(<span class="preenchimento-a">67</span> - <span class="media-pre preenchimento-b">184,6</span>)² +
										(<span class="preenchimento-a">380</span> - <span class="media-pre preenchimento-b">184,6</span>)² +
										(<span class="preenchimento-a">432</span> - <span class="media-pre preenchimento-b">184,6</span>)² +
										(<span class="preenchimento-a">28</span> - <span class="media-pre preenchimento-b">184,6</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>5</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-a">
										<input id='input-soma-a' type="text" placeholder="?">
									</div>
									² +
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-b">
										<input id='input-soma-b' type="text" placeholder="?">
									</div>
									² +
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-c">
										<input id='input-soma-c' type="text" placeholder="?">
									</div>
									² +
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-d">
										<input id='input-soma-d' type="text" placeholder="?">
									</div>
									² +
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-e">
										<input id='input-soma-e' type="text" placeholder="?">
									</div>
									²
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<span class="preenchimento-d">28.425,96</span> +
										<span class="preenchimento-d">13.829,76</span> +
										<span class="preenchimento-d">38.181,16</span> +
										<span class="preenchimento-d">61.206,76</span> +
										<span class="preenchimento-d">24.523,56</span>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<b><span class="totalizado-final">166.167,2</span></b>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<h5>
									<b><span class="final-geral">33.233,44</span></b>
								</h5>
							</div>
						</div>
					</div>

				</div>

			</div>

			<div class="tabela col-xs-12 mais-top">
				<h4>Podemos organizar os dados em uma tabela, da seguinte forma:</h4>

				<table class="table text-center">
					<tr>
						<th>Xi (valores)</th>
						<th>X&#772; (média)</th>
						<th>(Xi - X&#772;) (valor - média)</th>
						<th>(Xi - X&#772;)²</th>
					</tr>
					<tr>
						<td><span class="preenchimento-a">16</span></td>
						<td><span class="preenchimento-b">184,6</span></td>
						<td><span class="preenchimento-a">16</span> - <span class="preenchimento-b">184,6</span> = <span class="preenchimento-c soma-a">?</span></td>
						<td><span class="preenchimento-d total-a">29.425,96</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">67</span></td>
						<td><span class="preenchimento-b">184,6</span></td>
						<td><span class="preenchimento-a">67</span> - <span class="preenchimento-b">184,6</span> = <span class="preenchimento-c soma-b">?</span></td>
						<td><span class="preenchimento-d total-b">13.829,76</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">380</span></td>
						<td><span class="preenchimento-b">184,6</span></td>
						<td><span class="preenchimento-a">380</span> - <span class="preenchimento-b">184,6</span> = <span class="preenchimento-c soma-c">?</span></td>
						<td><span class="preenchimento-d total-c">38.181,16</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">432</span></td>
						<td><span class="preenchimento-b">184,6</span></td>
						<td><span class="preenchimento-a">432</span> - <span class="preenchimento-b">184,6</span> = <span class="preenchimento-c soma-d">?</span></td>
						<td><span class="preenchimento-d total-d">61.206,76</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">28</span></td>
						<td><span class="preenchimento-b">184,6</span></td>
						<td><span class="preenchimento-a">28</span> - <span class="preenchimento-b">184,6</span> = <span class="preenchimento-c soma-e">?</span></td>
						<td><span class="preenchimento-d total-e">21.523,56</span></td>
					</tr>
					<tr class="total">
						<td colspan="2"></td>
						<td>Soma = </td>
						<td><span class="totalizado-final">166.167,2</span></td>
					</tr>
				</table>

				<div class="col-xs-12 mais-top pre-formula">
					<div class="formula">
						<h5>Var = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>
									<b><span class="totalizado-final">166.167,2</span></b>
								</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5><b>5</b></h5>
							</div>
						</div>

						<h5> = </h5>

						<div class="calculo">
							<h5>
								<b><span class="final-geral">33.233,44</span></b>
							</h5>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 60px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-4.html');

	apenasNumeros(document.querySelector("#input-soma-a"));
	apenasNumeros(document.querySelector("#input-soma-b"));
	apenasNumeros(document.querySelector("#input-soma-c"));
	apenasNumeros(document.querySelector("#input-soma-d"));
	apenasNumeros(document.querySelector("#input-soma-e"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('questao-3.html');
	}

	function proxima() {

		carregarParte('questao-5.html');
	}

	function ajuda() {
		if (document.querySelector('#dialog-questao-4-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-4-ajuda">
				<img src="assets/img/questao-3-4-5-ajuda.png" />

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao4Ajuda = $("#dialog-questao-4-ajuda").dialog({
			autoOpen: false,
			height: 600,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao4Ajuda.dialog("open");
	}

	document.querySelector("#input-soma-a").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-b").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-c").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-d").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-e").addEventListener('input', function() {
		validarValores();
	});

	let valorSomaA = -168.6;
	let valorSomaB = -117.6;
	let valorSomaC = 195.4;
	let valorSomaD = 247.4;
	let valorSomaE = -156.6;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputQuestao4SomaA.value = valorSomaA.toString().replace('.', ',');
			inputQuestao4SomaB.value = valorSomaB.toString().replace('.', ',');
			inputQuestao4SomaC.value = valorSomaC.toString().replace('.', ',');
			inputQuestao4SomaD.value = valorSomaD.toString().replace('.', ',');
			inputQuestao4SomaE.value = valorSomaE.toString().replace('.', ',');

			validarValores();
		}
	});

	let inputQuestao4SomaA = document.querySelector("#input-soma-a");
	let inputQuestao4SomaB = document.querySelector("#input-soma-b");
	let inputQuestao4SomaC = document.querySelector("#input-soma-c");
	let inputQuestao4SomaD = document.querySelector("#input-soma-d");
	let inputQuestao4SomaE = document.querySelector("#input-soma-e");

	let campoQuestao4SomaA = document.querySelector("#campo-da-soma-a");
	let campoQuestao4SomaB = document.querySelector("#campo-da-soma-b");
	let campoQuestao4SomaC = document.querySelector("#campo-da-soma-c");
	let campoQuestao4SomaD = document.querySelector("#campo-da-soma-d");
	let campoQuestao4SomaE = document.querySelector("#campo-da-soma-e");

	function validarValores() {
		let valorQuestao4SomaA = inputQuestao4SomaA.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaB = inputQuestao4SomaB.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaC = inputQuestao4SomaC.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaD = inputQuestao4SomaD.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaE = inputQuestao4SomaE.value.replace('.', '').replace(',', '.');

		let valorQuestao4SomaAOk = (valorQuestao4SomaA == valorSomaA);
		let valorQuestao4SomaBOk = (valorQuestao4SomaB == valorSomaB);
		let valorQuestao4SomaCOk = (valorQuestao4SomaC == valorSomaC);
		let valorQuestao4SomaDOk = (valorQuestao4SomaD == valorSomaD);
		let valorQuestao4SomaEOk = (valorQuestao4SomaE == valorSomaE);

		let somasA = document.querySelector('.soma-a');
		let somasB = document.querySelector('.soma-b');
		let somasC = document.querySelector('.soma-c');
		let somasD = document.querySelector('.soma-d');
		let somasE = document.querySelector('.soma-e');

		if (valorQuestao4SomaAOk) {
			campoQuestao4SomaA.classList.add('fundo-ok');
			campoQuestao4SomaA.classList.remove('fundo-normal');

			somasA.innerHTML = valorSomaA.toString().replace('.', ',');
		} else {
			campoQuestao4SomaA.classList.remove('fundo-ok');
			campoQuestao4SomaA.classList.add('fundo-normal');

			somasA.innerHTML = '?';
		}

		if (valorQuestao4SomaBOk) {
			campoQuestao4SomaB.classList.add('fundo-ok');
			campoQuestao4SomaB.classList.remove('fundo-normal');

			somasB.innerHTML = valorSomaB.toString().replace('.', ',');
		} else {
			campoQuestao4SomaB.classList.remove('fundo-ok');
			campoQuestao4SomaB.classList.add('fundo-normal');

			somasB.innerHTML = '?';
		}

		if (valorQuestao4SomaCOk) {
			campoQuestao4SomaC.classList.add('fundo-ok');
			campoQuestao4SomaC.classList.remove('fundo-normal');

			somasC.innerHTML = valorSomaC.toString().replace('.', ',');
		} else {
			campoQuestao4SomaC.classList.remove('fundo-ok');
			campoQuestao4SomaC.classList.add('fundo-normal');

			somasC.innerHTML = '?';
		}

		if (valorQuestao4SomaDOk) {
			campoQuestao4SomaD.classList.add('fundo-ok');
			campoQuestao4SomaD.classList.remove('fundo-normal');

			somasD.innerHTML = valorSomaD.toString().replace('.', ',');
		} else {
			campoQuestao4SomaD.classList.remove('fundo-ok');
			campoQuestao4SomaD.classList.add('fundo-normal');

			somasD.innerHTML = '?';
		}

		if (valorQuestao4SomaEOk) {
			campoQuestao4SomaE.classList.add('fundo-ok');
			campoQuestao4SomaE.classList.remove('fundo-normal');

			somasE.innerHTML = valorSomaE.toString().replace('.', ',');
		} else {
			campoQuestao4SomaE.classList.remove('fundo-ok');
			campoQuestao4SomaE.classList.add('fundo-normal');

			somasE.innerHTML = '?';
		}

		if (valorQuestao4SomaAOk && valorQuestao4SomaBOk && valorQuestao4SomaCOk && valorQuestao4SomaDOk && valorQuestao4SomaEOk) {

			$("#iconSetaDireita").show();
		} else {

			$("#iconSetaDireita").hide();
		}

	}

	function preencherCamposMedia(mediaOk) {
		let medias = document.querySelectorAll('.media-pre');
		for (var posMedia in medias) {
			if (mediaOk) {
				medias[posMedia].innerHTML = valorCorretoMedia.toString().replace('.', ',');
			} else {
				medias[posMedia].innerHTML = '?';
			}
		}




		for (var posSomaB in somasB) {
			if (mediaOk) {
				somasB[posSomaB].innerHTML = valorSomaB.toString().replace('.', ',');
			} else {
				somasB[posSomaB].innerHTML = '?';
			}
		}
		for (var posSomaC in somasC) {
			if (mediaOk) {
				somasC[posSomaC].innerHTML = valorSomaC.toString().replace('.', ',');
			} else {
				somasC[posSomaC].innerHTML = '?';
			}
		}
		for (var posSomaD in somasD) {
			if (mediaOk) {
				somasD[posSomaD].innerHTML = valorSomaD.toString().replace('.', ',');
			} else {
				somasD[posSomaD].innerHTML = '?';
			}
		}
		for (var posSomaE in somasE) {
			if (mediaOk) {
				somasE[posSomaE].innerHTML = valorSomaE.toString().replace('.', ',');
			} else {
				somasE[posSomaE].innerHTML = '?';
			}
		}

	}

	</script>

	`,

	"questao-5.html":
	`
	<div class="geral-interno">
		<div class="container">

			<h3 class="top">Atividade 5 - Calcular a variância dos valores da seguinte tabela, complete onde for <span id='auto-completar'>indicado</span> por '<b>?</b>'.</h3>
			<div class="tabela col-xs-12 col-md-6">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de metal</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>915</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>66</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>383</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>419</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>29</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>32.065,2</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12 col-md-6" style="display:flex">

				<div class="formula">
					<h4>1º Média Aritmética = </h4>

					<div class="calculo">
						<div class="cima">
							<h5>18 + 66 + 383 + 419 + 29</h5>
						</div>
						<div class="linha">
							<hr>
						</div>
						<div class="baixo">
							<h5>5</h5>
						</div>
					</div>

					<h5> = </h5>

					<div class="calculo">
						<div class="cima">
							<h5>915</h5>
						</div>
						<div class="linha">
							<hr>
						</div>
						<div class="baixo">
							<h5>5</h5>
						</div>
					</div>

					<h5> = <span class='preenchimento-b'>183</span></h5>
				</div>
			</div>

			<div class="col-xs-12 col-md-6 mais-top">
				<h4>2º Variância: média dos quadrados dos desvios (desvio é cada um dos valores menos a média)</h4>

				<div class="row">

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Variância = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>(valor1 - média)² + (valor2 + média)² + (valor3 + média)²</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>(número de valores)</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-a">18</span> - <span class="media-pre preenchimento-b">183</span>)² +
										(<span class="preenchimento-a">66</span> - <span class="media-pre preenchimento-b">183</span>)² +
										(<span class="preenchimento-a">383</span> - <span class="media-pre preenchimento-b">183</span>)² +
										(<span class="preenchimento-a">419</span> - <span class="media-pre preenchimento-b">183</span>)² +
										(<span class="preenchimento-a">29</span> - <span class="media-pre preenchimento-b">183</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>5</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-a">-165</span>)² +
										(<span class="preenchimento-a">-117</span>)² +
										(<span class="preenchimento-a">200</span>)² +
										(<span class="preenchimento-a">236</span>)² +
										(<span class="preenchimento-a">-154</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-a">
										<input id='input-soma-a' type="text" placeholder="?">
									</div>
									+
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-b">
										<input id='input-soma-b' type="text" placeholder="?">
									</div>
									+
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-c">
										<input id='input-soma-c' type="text" placeholder="?">
									</div>
									+
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-d">
										<input id='input-soma-d' type="text" placeholder="?">
									</div>
									+
									<div class="input-x fundo-normal preenchimento-c" id="campo-da-soma-e">
										<input id='input-soma-e' type="text" placeholder="?">
									</div>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<b><span class="totalizado-final">160.326</span></b>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<h5>
									<b><span class="final-geral">32.065,2</span></b>
								</h5>
							</div>
						</div>
					</div>

				</div>

			</div>

			<div class="tabela col-xs-12 mais-top muitissimo-mais-bottom">
				<h4>Podemos organizar os dados em uma tabela, da seguinte forma:</h4>

				<table class="table text-center">
					<tr>
						<th>Xi (valores)</th>
						<th>X&#772; (média)</th>
						<th>(Xi - X&#772;) (valor - média)</th>
						<th>(Xi - X&#772;)²</th>
					</tr>
					<tr>
						<td><span class="preenchimento-a">18</span></td>
						<td><span class="preenchimento-b">183</span></td>
						<td><span class="preenchimento-a">18</span> - <span class="preenchimento-b">183</span> = <span class="preenchimento-c">-165</span></td>
						<td><span class="preenchimento-d total-a">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">66</span></td>
						<td><span class="preenchimento-b">183</span></td>
						<td><span class="preenchimento-a">66</span> - <span class="preenchimento-b">183</span> = <span class="preenchimento-c soma-b">-117</span></td>
						<td><span class="preenchimento-d total-b">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">383</span></td>
						<td><span class="preenchimento-b">183</span></td>
						<td><span class="preenchimento-a">383</span> - <span class="preenchimento-b">183</span> = <span class="preenchimento-c soma-c">200</span></td>
						<td><span class="preenchimento-d total-c">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">419</span></td>
						<td><span class="preenchimento-b">183</span></td>
						<td><span class="preenchimento-a">419</span> - <span class="preenchimento-b">183</span> = <span class="preenchimento-c soma-d">236</span></td>
						<td><span class="preenchimento-d total-d">?</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">29</span></td>
						<td><span class="preenchimento-b">183</span></td>
						<td><span class="preenchimento-a">29</span> - <span class="preenchimento-b">183</span> = <span class="preenchimento-c soma-e">-154</span></td>
						<td><span class="preenchimento-d total-e">?</span></td>
					</tr>
					<tr class="total">
						<td colspan="2"></td>
						<td>Soma = </td>
						<td><span class="totalizado-final">160.326</span></td>
					</tr>
				</table>

				<div class="col-xs-12 mais-top pre-formula">
					<div class="formula">
						<h5>Var = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>
									<b><span class="totalizado-final">160.326</span></b>
								</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5><b>5</b></h5>
							</div>
						</div>

						<h5> = </h5>

						<div class="calculo">
							<h5>
								<b><span class="final-geral">32.065,2</span></b>
							</h5>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 60px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-5.html');

	apenasNumeros(document.querySelector("#input-soma-a"));
	apenasNumeros(document.querySelector("#input-soma-b"));
	apenasNumeros(document.querySelector("#input-soma-c"));
	apenasNumeros(document.querySelector("#input-soma-d"));
	apenasNumeros(document.querySelector("#input-soma-e"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('questao-4.html');
	}

	function proxima() {

		carregarParte('desvio-padrao.html');
	}

	function ajuda() {
		if (document.querySelector('#dialog-questao-5-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-5-ajuda">
				<img src="assets/img/questao-3-4-5-ajuda.png" />

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao5Ajuda = $("#dialog-questao-5-ajuda").dialog({
			autoOpen: false,
			height: 600,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao5Ajuda.dialog("open");
	}

	document.querySelector("#input-soma-a").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-b").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-c").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-d").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-soma-e").addEventListener('input', function() {
		validarValores();
	});

	let valorSomaA = 27225;
	let valorSomaB = 13689;
	let valorSomaC = 40000;
	let valorSomaD = 55696;
	let valorSomaE = 23716;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputQuestao5SomaA.value = valorSomaA.toString().replace('.', ',');
			inputQuestao5SomaB.value = valorSomaB.toString().replace('.', ',');
			inputQuestao5SomaC.value = valorSomaC.toString().replace('.', ',');
			inputQuestao5SomaD.value = valorSomaD.toString().replace('.', ',');
			inputQuestao5SomaE.value = valorSomaE.toString().replace('.', ',');

			validarValores();
		}
	});

	let inputQuestao5SomaA = document.querySelector("#input-soma-a");
	let inputQuestao5SomaB = document.querySelector("#input-soma-b");
	let inputQuestao5SomaC = document.querySelector("#input-soma-c");
	let inputQuestao5SomaD = document.querySelector("#input-soma-d");
	let inputQuestao5SomaE = document.querySelector("#input-soma-e");

	let campoQuestao5SomaA = document.querySelector("#campo-da-soma-a");
	let campoQuestao5SomaB = document.querySelector("#campo-da-soma-b");
	let campoQuestao5SomaC = document.querySelector("#campo-da-soma-c");
	let campoQuestao5SomaD = document.querySelector("#campo-da-soma-d");
	let campoQuestao5SomaE = document.querySelector("#campo-da-soma-e");

	function validarValores() {
		let valorQuestao4SomaA = inputQuestao5SomaA.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaB = inputQuestao5SomaB.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaC = inputQuestao5SomaC.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaD = inputQuestao5SomaD.value.replace('.', '').replace(',', '.');
		let valorQuestao4SomaE = inputQuestao5SomaE.value.replace('.', '').replace(',', '.');

		let valorQuestao4SomaAOk = (valorQuestao4SomaA == valorSomaA);
		let valorQuestao4SomaBOk = (valorQuestao4SomaB == valorSomaB);
		let valorQuestao4SomaCOk = (valorQuestao4SomaC == valorSomaC);
		let valorQuestao4SomaDOk = (valorQuestao4SomaD == valorSomaD);
		let valorQuestao4SomaEOk = (valorQuestao4SomaE == valorSomaE);

		let somasA = document.querySelector('.total-a');
		let somasB = document.querySelector('.total-b');
		let somasC = document.querySelector('.total-c');
		let somasD = document.querySelector('.total-d');
		let somasE = document.querySelector('.total-e');

		if (valorQuestao4SomaAOk) {
			campoQuestao5SomaA.classList.add('fundo-ok');
			campoQuestao5SomaA.classList.remove('fundo-normal');

			somasA.innerHTML = valorSomaA.toString().replace('.', ',');
		} else {
			campoQuestao5SomaA.classList.remove('fundo-ok');
			campoQuestao5SomaA.classList.add('fundo-normal');

			somasA.innerHTML = '?';
		}

		if (valorQuestao4SomaBOk) {
			campoQuestao5SomaB.classList.add('fundo-ok');
			campoQuestao5SomaB.classList.remove('fundo-normal');

			somasB.innerHTML = valorSomaB.toString().replace('.', ',');
		} else {
			campoQuestao5SomaB.classList.remove('fundo-ok');
			campoQuestao5SomaB.classList.add('fundo-normal');

			somasB.innerHTML = '?';
		}

		if (valorQuestao4SomaCOk) {
			campoQuestao5SomaC.classList.add('fundo-ok');
			campoQuestao5SomaC.classList.remove('fundo-normal');

			somasC.innerHTML = valorSomaC.toString().replace('.', ',');
		} else {
			campoQuestao5SomaC.classList.remove('fundo-ok');
			campoQuestao5SomaC.classList.add('fundo-normal');

			somasC.innerHTML = '?';
		}

		if (valorQuestao4SomaDOk) {
			campoQuestao5SomaD.classList.add('fundo-ok');
			campoQuestao5SomaD.classList.remove('fundo-normal');

			somasD.innerHTML = valorSomaD.toString().replace('.', ',');
		} else {
			campoQuestao5SomaD.classList.remove('fundo-ok');
			campoQuestao5SomaD.classList.add('fundo-normal');

			somasD.innerHTML = '?';
		}

		if (valorQuestao4SomaEOk) {
			campoQuestao5SomaE.classList.add('fundo-ok');
			campoQuestao5SomaE.classList.remove('fundo-normal');

			somasE.innerHTML = valorSomaE.toString().replace('.', ',');
		} else {
			campoQuestao5SomaE.classList.remove('fundo-ok');
			campoQuestao5SomaE.classList.add('fundo-normal');

			somasE.innerHTML = '?';
		}

		if (valorQuestao4SomaAOk && valorQuestao4SomaBOk && valorQuestao4SomaCOk && valorQuestao4SomaDOk && valorQuestao4SomaEOk) {

			$("#iconSetaDireita").show();
		} else {

			$("#iconSetaDireita").hide();
		}

	}

	function preencherCamposMedia(mediaOk) {
		let medias = document.querySelectorAll('.media-pre');
		for (var posMedia in medias) {
			if (mediaOk) {
				medias[posMedia].innerHTML = valorCorretoMedia.toString().replace('.', ',');
			} else {
				medias[posMedia].innerHTML = '?';
			}
		}




		for (var posSomaB in somasB) {
			if (mediaOk) {
				somasB[posSomaB].innerHTML = valorSomaB.toString().replace('.', ',');
			} else {
				somasB[posSomaB].innerHTML = '?';
			}
		}
		for (var posSomaC in somasC) {
			if (mediaOk) {
				somasC[posSomaC].innerHTML = valorSomaC.toString().replace('.', ',');
			} else {
				somasC[posSomaC].innerHTML = '?';
			}
		}
		for (var posSomaD in somasD) {
			if (mediaOk) {
				somasD[posSomaD].innerHTML = valorSomaD.toString().replace('.', ',');
			} else {
				somasD[posSomaD].innerHTML = '?';
			}
		}
		for (var posSomaE in somasE) {
			if (mediaOk) {
				somasE[posSomaE].innerHTML = valorSomaE.toString().replace('.', ',');
			} else {
				somasE[posSomaE].innerHTML = '?';
			}
		}

	}

	</script>

	`,

	"questao-6.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-tabela-1 container muito-mais-top muitissimo-mais-bottom'>

			<div class="col-xs-12">
				<h3 class="top">Atividade 6 - Calcular o Desvio Padrão, complete onde for <span id='auto-completar'>indicado</span> por '<b>?</b>'.</h3>
			</div>

			<div class="tabela col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de plástico</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>977</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>19</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>74</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>403</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>450</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>31</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>36.160,24</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12">
				<h4>Encontre o desvio padrão:</h4>

				<div class="text-center mais-top">
					<img src="assets/img/desvio_padrao-formula-3.png">
					<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-padrao">
						<input id='input-desvio-padrao' type="text" placeholder="?">
					</div>
				</div>

			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-6.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('desvio-padrao.html');
	}

	function proxima() {

		carregarParte('questao-7.html');
	}

	function ajuda() {

		if (document.querySelector('#dialog-questao-6-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-6-ajuda">
				<img src="assets/img/questao-6-7-ajuda.png" />

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao6Ajuda = $("#dialog-questao-6-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 800,
			modal: true,
			buttons: {}
		});
		dialogQuestao6Ajuda.dialog("open");
	}

	document.querySelector("#input-desvio-padrao").addEventListener('input', function() {
		validarValores();
	});

	let inputQuestao6DesvioPadrao = document.querySelector("#input-desvio-padrao");
	let campoQuestao6DesvioPadrao = document.querySelector("#campo-desvio-padrao");

	let valorQuestao6DesvioPadrao = 190.16;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputQuestao6DesvioPadrao.value = valorQuestao6DesvioPadrao.toString().replace('.', ',');
			validarValores();
		}
	});

	function validarValores() {
		let valorQuestao6 = inputQuestao6DesvioPadrao.value.replace('.', '').replace(',', '.');

		let valorQuestao6Ok = (valorQuestao6 == valorQuestao6DesvioPadrao);

		if (valorQuestao6Ok) {

			campoQuestao6DesvioPadrao.classList.add('fundo-ok');
			campoQuestao6DesvioPadrao.classList.remove('fundo-normal');

			$("#iconSetaDireita").show();
		} else {

			campoQuestao6DesvioPadrao.classList.remove('fundo-ok');
			campoQuestao6DesvioPadrao.classList.add('fundo-normal');

			$("#iconSetaDireita").hide();
		}

	}
	</script>

	`,

	"questao-7.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-tabela-1 container muito-mais-top muitissimo-mais-bottom'>

			<div class="col-xs-12">
				<h3 class="top">Atividade 7 - Calcular o Desvio Padrão, complete onde for <span id='auto-completar'>indicado</span> por '<b>?</b>'.</h3>
			</div>

			<div class="tabela col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de plástico</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>923</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>16</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>67</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>380</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>432</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>28</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>33.233,44</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12">
				<h4>Encontre o desvio padrão:</h4>

				<div class="text-center mais-top">
					<span>S = &#8730;</span>
					<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-padrao-a">
						<input id='input-desvio-padrao-a' type="text" placeholder="?">
					</div>
					<span> = </span>
					<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-padrao-b">
						<input id='input-desvio-padrao-b' type="text" placeholder="?">
					</div>
				</div>

			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-7.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('questao-6.html');
	}

	function proxima() {

		carregarParte('questao-8.html');
	}

	function ajuda() {

		if (document.querySelector('#dialog-questao-7-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-7-ajuda">
				<img src="assets/img/questao-6-7-ajuda.png" />

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao7Ajuda = $("#dialog-questao-7-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 800,
			modal: true,
			buttons: {}
		});
		dialogQuestao7Ajuda.dialog("open");
	}

	document.querySelector("#input-desvio-padrao-a").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-desvio-padrao-b").addEventListener('input', function() {
		validarValores()
	});

	let inputQuestao6ADesvioPadrao = document.querySelector("#input-desvio-padrao-a");
	let inputQuestao6BDesvioPadrao = document.querySelector("#input-desvio-padrao-b");
	let campoQuestao6ADesvioPadrao = document.querySelector("#campo-desvio-padrao-a");
	let campoQuestao6BDesvioPadrao = document.querySelector("#campo-desvio-padrao-b");

	let valorQuestao6ADesvioPadrao = 33233.44;
	let valorQuestao6BDesvioPadrao = 182.30;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputQuestao6ADesvioPadrao.value = valorQuestao6ADesvioPadrao.toString().replace('.', ',');
			inputQuestao6BDesvioPadrao.value = valorQuestao6BDesvioPadrao.toString().replace('.', ',');
			validarValores();
		}
	});

	function validarValores() {
		let valorQuestao6A = inputQuestao6ADesvioPadrao.value.replace('.', '').replace(',', '.');
		let valorQuestao6B = inputQuestao6BDesvioPadrao.value.replace('.', '').replace(',', '.');

		let valorQuestao6AOk = (valorQuestao6A == valorQuestao6ADesvioPadrao);
		let valorQuestao6BOk = (valorQuestao6B == valorQuestao6BDesvioPadrao);

		if (valorQuestao6AOk) {

			campoQuestao6ADesvioPadrao.classList.add('fundo-ok');
			campoQuestao6ADesvioPadrao.classList.remove('fundo-normal');
		} else {

			campoQuestao6ADesvioPadrao.classList.remove('fundo-ok');
			campoQuestao6ADesvioPadrao.classList.add('fundo-normal');
		}

		if (valorQuestao6BOk) {

			campoQuestao6BDesvioPadrao.classList.add('fundo-ok');
			campoQuestao6BDesvioPadrao.classList.remove('fundo-normal');
		} else {

			campoQuestao6BDesvioPadrao.classList.remove('fundo-ok');
			campoQuestao6BDesvioPadrao.classList.add('fundo-normal');
		}

		if (valorQuestao6AOk && valorQuestao6BOk) {

			$("#iconSetaDireita").show();
		} else {

			$("#iconSetaDireita").hide();
		}

	}
	</script>

	`,

	"questao-8.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-tabela-1 container muito-mais-top muitissimo-mais-bottom'>

			<div class="col-xs-12">
				<h3 class="top">Atividade 8 - Calcular o Desvio Padrão, complete onde for <span id='auto-completar'>indicado</span> por '<b>?</b>'.</h3>
			</div>

			<div class="tabela col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de plástico</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>915</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>66</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>383</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>419</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>29</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td class="valor-total">?</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12">
				<h4>Encontre o desvio padrão:</h4>

				<div class="text-center mais-top">
					<span>S = &#8730;</span>
					<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-padrao-a">
						<input id='input-desvio-padrao-a' type="text" placeholder="?">
					</div>
					<span> = </span>
					<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-padrao-b">
						<input id='input-desvio-padrao-b' type="text" placeholder="?">
					</div>
				</div>

			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-8.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('questao-7.html');
	}

	function proxima() {

		carregarParte('desvio-tabela.html');
	}

	function ajuda() {

		if (document.querySelector('#dialog-questao-8-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-8-ajuda">
				<img src="assets/img/questao-8-ajuda.png" />

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao8Ajuda = $("#dialog-questao-8-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao8Ajuda.dialog("open");
	}

	document.querySelector("#input-desvio-padrao-a").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-desvio-padrao-b").addEventListener('input', function() {
		validarValores()
	});

	let inputQuestao6ADesvioPadrao = document.querySelector("#input-desvio-padrao-a");
	let inputQuestao6BDesvioPadrao = document.querySelector("#input-desvio-padrao-b");
	let campoQuestao6ADesvioPadrao = document.querySelector("#campo-desvio-padrao-a");
	let campoQuestao6BDesvioPadrao = document.querySelector("#campo-desvio-padrao-b");

	let campoTotal = document.querySelector(".valor-total");

	let valorQuestao6ADesvioPadrao = 32065.2;
	let valorQuestao6BDesvioPadrao = 179.07;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputQuestao6ADesvioPadrao.value = valorQuestao6ADesvioPadrao.toString().replace('.', ',');
			inputQuestao6BDesvioPadrao.value = valorQuestao6BDesvioPadrao.toString().replace('.', ',');
			validarValores();
		}
	});

	function validarValores() {
		let valorQuestao6A = inputQuestao6ADesvioPadrao.value.replace('.', '').replace(',', '.');
		let valorQuestao6B = inputQuestao6BDesvioPadrao.value.replace('.', '').replace(',', '.');

		let valorQuestao6AOk = (valorQuestao6A == valorQuestao6ADesvioPadrao);
		let valorQuestao6BOk = (valorQuestao6B == valorQuestao6BDesvioPadrao);

		if (valorQuestao6AOk) {

			campoQuestao6ADesvioPadrao.classList.add('fundo-ok');
			campoQuestao6ADesvioPadrao.classList.remove('fundo-normal');

			campoTotal.innerHTML = valorQuestao6ADesvioPadrao.toString().replace('.', ',');
		} else {

			campoQuestao6ADesvioPadrao.classList.remove('fundo-ok');
			campoQuestao6ADesvioPadrao.classList.add('fundo-normal');

			campoTotal.innerHTML = '?';
		}

		if (valorQuestao6BOk) {

			campoQuestao6BDesvioPadrao.classList.add('fundo-ok');
			campoQuestao6BDesvioPadrao.classList.remove('fundo-normal');
		} else {

			campoQuestao6BDesvioPadrao.classList.remove('fundo-ok');
			campoQuestao6BDesvioPadrao.classList.add('fundo-normal');
		}

		if (valorQuestao6AOk && valorQuestao6BOk) {

			$("#iconSetaDireita").show();
		} else {

			$("#iconSetaDireita").hide();
		}

	}
	</script>

	`,

	"questao-9.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-tabela-1 container muito-mais-top muitissimo-mais-bottom'>

			<div class="col-xs-12">
				<h3 class="top">Atividade 9 - Calcule a Variância e o Desvio Padrão do número de catadores na área urbana com até 14 anos, <span id='auto-completar'>completando</span> as tabelas a seguir.</h3>
			</div>

			<div class="tabela col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
				<table class="table text-center">
					<tr>
						<th rowspan="2">Grandes Regiões</th>
						<th colspan=3>Número de catadores da área urbana</th>
					</tr>
					<tr>
						<th>Total (mil pessoas)</th>
						<th>Com até 14 anos de idade (mil pessoas)</th>
						<th>Com mais de 14 anos de idade (mil pessoas)</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>3</td>
						<td>1</td>
						<td>2</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>13</td>
						<td>1</td>
						<td>12</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>28</td>
						<td>2</td>
						<td>26</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>18</td>
						<td>2</td>
						<td>16</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>8</td>
						<td>1</td>
						<td>7</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td class="valor-total">74</td>
						<td class="valor-total">
							<h4 class="valor-menor-variancia">?</h4>
						</td>
						<td class="valor-total">
							<h4 class="valor-maior-variancia">?</h4>
						</td>
					</tr>
					<tr class="total">
						<td>Desvio Parão</td>
						<td class="valor-total">8,6</td>
						<td class="valor-total">
							<h4 class="valor-menor-desvio">?</h4>
						</td>
						<td class="valor-total">
							<h4 class="valor-maior-desvio">?</h4>
						</td>
					</tr>
				</table>

				<div class="text-center mais-top muitissimo-mais-bottom">
					<button type="button" class="btn" id="questao-9-saiba-mais">Saiba mais!</button>
				</div>
			</div>

			<div class="col-xs-12 col-md-6">
				<h4>Com até 14 anos de idade (mil pessoas)</h4>

				<div class="text-center">
					<div class="formula">
						<h5>Média aritmética = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>1 + 1 + 2 + 2 + 1</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5>5</h5>
							</div>
						</div>
						<div class="calculo">
							<h5>=</h5>
						</div>
						<div class="calculo">
							<div class="cima">
								<h5>7</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5>5</h5>
							</div>
						</div>
						<div class="calculo">
							<h5> = <span class="preenchimento-b">1,4</span></h5>
						</div>
					</div>
				</div>

				<div class="tabela">
					<table class="table text-center">
						<tr>
							<th>Total (mil pessoas)</th>
							<th>Média</th>
							<th>Desvios: diferença do valor pela média</th>
							<th>Quadrado dos desvios</th>
						</tr>
						<tr>
							<th>Xi (valores)</th>
							<th>X&#772; (média)</th>
							<th>(Xi - X&#772;) (valor - média)</th>
							<th>(Xi - X&#772;)²</th>
						</tr>
						<tr>
							<td><span class="preenchimento-a">1</span></td>
							<td><span class="preenchimento-b">1,4</span></td>
							<td><span class="preenchimento-a">1</span> - <span class="preenchimento-b">1,4</span> =
								<span class="preenchimento-c">
									<input id='input-menor-a' class="fundo-editavel fundo-editavel-normal" placeholder='?' type="text">
								</span>
							</td>
							<td><span class="preenchimento-d total-a">0,16</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">1</span></td>
							<td><span class="preenchimento-b">1,4</span></td>
							<td><span class="preenchimento-a">1</span> - <span class="preenchimento-b">1,4</span> = <span class="preenchimento-c soma-b">-0,4</span></td>
							<td><span class="preenchimento-d total-b">0,16</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">2</span></td>
							<td><span class="preenchimento-b">1,4</span></td>
							<td><span class="preenchimento-a">2</span> - <span class="preenchimento-b">1,4</span> = <span class="preenchimento-c soma-c">0,6</span></td>
							<td><span class="preenchimento-d total-c">
								<input id="input-menor-b" class="fundo-editavel fundo-editavel-normal" placeholder='?' type="text">
							</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">2</span></td>
							<td><span class="preenchimento-b">1,4</span></td>
							<td><span class="preenchimento-a">2</span> - <span class="preenchimento-b">1,4</span> = <span class="preenchimento-c soma-c">0,6</span></td>
							<td><span class="preenchimento-d total-c">0,36</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">1</span></td>
							<td><span class="preenchimento-b">1,4</span></td>
							<td><span class="preenchimento-a">1</span> - <span class="preenchimento-b">1,4</span> = <span class="preenchimento-c soma-e">-0,4</span></td>
							<td><span class="preenchimento-d total-e">0,16</span></td>
						</tr>
						<tr class="total">
							<td colspan="2"></td>
							<td>Soma = </td>
							<td><span class="totalizado-final">
								<input id="input-menor-c" class="fundo-editavel fundo-editavel-normal" placeholder='?' type="text">
							</span></td>
						</tr>
					</table>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Variância: S² = </h4>

						<div class="calculo">
							<div class="cima">
								<h4 class="valor-menor-total">?</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>
						<div class="calculo">
							<h4>=</h4>
						</div>
						<div class="calculo">
							<div class="cima">
								<div class="input-x fundo-normal preenchimento-c" id="campo-variancia-a">
									<input id='input-variancia-a' type="text" placeholder="?">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Desvio padrão: S = √</h4>

						<div class="calculo">
							<h4 class="valor-menor-variancia">?</h4>
						</div>
						<div class="calculo">
							<h4>=</h4>
						</div>
						<div class="calculo">
							<div class="cima">
								<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-a">
									<input id='input-desvio-a' type="text" placeholder="?">
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="col-xs-12 col-md-6">
				<h4>Com mais de 14 anos de idade (mil pessoas)</h4>

				<div class="text-center">
					<div class="formula">
						<h5>Média aritmética = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>2 + 12 + 26 + 16 + 7</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5>5</h5>
							</div>
						</div>
						<div class="calculo">
							<h5>=</h5>
						</div>
						<div class="calculo">
							<div class="cima">
								<h5>63</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5>5</h5>
							</div>
						</div>
						<div class="calculo">
							<h5> = <span class="preenchimento-b">12,6</span></h5>
						</div>
					</div>
				</div>

				<div class="tabela">
					<table class="table text-center">
						<tr>
							<th>Total (mil pessoas)</th>
							<th>Média</th>
							<th>Desvios: diferença do valor pela média</th>
							<th>Quadrado dos desvios</th>
						</tr>
						<tr>
							<th>Xi (valores)</th>
							<th>X&#772; (média)</th>
							<th>(Xi - X&#772;) (valor - média)</th>
							<th>(Xi - X&#772;)²</th>
						</tr>
						<tr>
							<td><span class="preenchimento-a">2</span></td>
							<td><span class="preenchimento-b">12,6</span></td>
							<td><span class="preenchimento-a">2</span> - <span class="preenchimento-b">12,6</span> = <span class="preenchimento-c soma-a">-10,6</span></td>
							<td>
								<span class="preenchimento-c">
									<input id="input-maior-b" class="fundo-editavel fundo-editavel-normal" placeholder='?' type="text">
								</span>
							</td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">12</span></td>
							<td><span class="preenchimento-b">12,6</span></td>
							<td><span class="preenchimento-a">12</span> - <span class="preenchimento-b">12,6</span> = <span class="preenchimento-c soma-b">-0,6</span></td>
							<td><span class="preenchimento-d total-b">0,36</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">26</span></td>
							<td><span class="preenchimento-b">12,6</span></td>
							<td><span class="preenchimento-a">26</span> - <span class="preenchimento-b">12,6</span> =
								<span class="preenchimento-c">
									<input id="input-maior-a" class="fundo-editavel fundo-editavel-normal" placeholder='?' type="text">
								</span>
							</td>
							<td><span class="preenchimento-d total-c">179,56</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">16</span></td>
							<td><span class="preenchimento-b">12,6</span></td>
							<td><span class="preenchimento-a">16</span> - <span class="preenchimento-b">12,6</span> = <span class="preenchimento-c soma-d">3,4</span></td>
							<td><span class="preenchimento-d total-d">11,56</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">7</span></td>
							<td><span class="preenchimento-b">12,6</span></td>
							<td><span class="preenchimento-a">7</span> - <span class="preenchimento-b">12,6</span> = <span class="preenchimento-c soma-e">-5,6</span></td>
							<td>
								<span class="preenchimento-c">
									<input id="input-maior-c" class="fundo-editavel fundo-editavel-normal" placeholder='?' type="text">
								</span>
							</td>
						</tr>
						<tr class="total">
							<td colspan="2"></td>
							<td>Soma = </td>
							<td><span class="totalizado-final">335,2</span></td>
						</tr>
					</table>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Variância: S² = </h4>

						<div class="calculo">
							<div class="cima">
								<h4 class="total-fake">335,2</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>
						<div class="calculo">
							<h4>=</h4>
						</div>
						<div class="calculo">
							<div class="cima">
								<div class="input-x fundo-normal preenchimento-c" id="campo-variancia-b">
									<input id='input-variancia-b' type="text" placeholder="?">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Desvio padrão: S = √</h4>

						<div class="calculo">
							<h4 class="valor-maior-variancia">?</h4>
						</div>
						<div class="calculo">
							<h4>=</h4>
						</div>
						<div class="calculo">
							<div class="cima">
								<div class="input-x fundo-normal preenchimento-c" id="campo-desvio-b">
									<input id='input-desvio-b' type="text" placeholder="?">
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.yolo-total-vermelho {
		color: #FF5C5C;
	}

	.yolo-total-azul {
		color: #4271FF;
	}

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total,
	.tabela .total .h4,
	.total-fake {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	.input-x input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
		width: 80px;
	}

	.input-xx input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 12px;
		width: 60px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	.fundo-editavel {
		border-width: 0px;
		border-radius: 4px;
		width: 60px;
		height: 24px;
		text-align: center;
	}

	.fundo-editavel-normal {
		color: #FFFFFF;
		background-color: #ae6df5;
		transition: .3s ease;
	}

	.fundo-editavel-ok {
		color: #FFFFFF;
		background-color: #46D079;
		transition: .3s ease;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-9.html');

	apenasNumeros(document.querySelector("#input-variancia-a"));
	apenasNumeros(document.querySelector("#input-variancia-b"));
	apenasNumeros(document.querySelector("#input-desvio-a"));
	apenasNumeros(document.querySelector("#input-desvio-b"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	function anterior() {

		carregarParte('desvio-tabela.html');
	}

	function proxima() {

		carregarParte('coeficiente-variacao.html');
	}

	function ajuda() {

		if (document.querySelector('#dialog-questao-9-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-9-ajuda">
				<div class='row'>

					<div class="principal text-center">

						<div class='muitissimo-mais-top'>
							<button class='btn' onclick="ajudaPage('variancia')">Variância</button>
						</div>
						<div class='muitissimo-mais-top'>
							<button class='btn' onclick="ajudaPage('desvio')">Desvio Padrão</button>
						</div>

					</div>

					<div class='variancia'>
						<h3 class='text-center'>Variância - S²</h3>

						<h4>Exemplo: Calcular a variância dos valores: 3, 5 e 7.</h4>

						<h4 class='mais-top'>1º Média Aritmética: </h4>
						<div class='text-center'>
							<img src='assets/img/questao-9-ajuda-variancia-formula-1.png'/>
						</div>

						<h4 class='mais-top'>2º Variância: </h4>
						<div class='text-center'>
							<img src='assets/img/questao-9-ajuda-variancia-formula-2.png'/>
						</div>

						<div class='text-center muito-mais-bottom'>
							<button class='btn' onclick="ajudaPage('principal')">Voltar</button>
						</div>
					</div>

					<div class='desvio'>

						<h3 class='text-center'>Desvio Padrão</h3>
						<h4 class='text-center'>Raiz quadrada da variância.</h4>

						<div class='text-center'>
							<img src='assets/img/questao-9-ajuda-desvio-formula-1.png'/>
						</div>

						<div class='text-center muito-mais-bottom'>
							<button class='btn' onclick="ajudaPage('principal')">Voltar</button>
						</div>
					</div>

				</div>
			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
			ajudaPage('principal');
		}

		let dialogQuestao9Ajuda = $("#dialog-questao-9-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 850,
			modal: true,
			buttons: {}
		});
		dialogQuestao9Ajuda.dialog("open");
	}

	function ajudaPage(tipo) {

		let divAjuda = document.querySelector('#dialog-questao-9-ajuda');
		let divAjudaPrincipal = divAjuda.querySelector('.principal');
		let divAjudaVariancia = divAjuda.querySelector('.variancia');
		let divAjudaDesvio = divAjuda.querySelector('.desvio');

		let classAddRemove = 'oculto';
		switch (tipo) {

			default:
			case 'principal':
				divAjudaPrincipal.classList.remove(classAddRemove);
				divAjudaVariancia.classList.add(classAddRemove);
				divAjudaDesvio.classList.add(classAddRemove);
				break;

			case 'variancia':
				divAjudaPrincipal.classList.add(classAddRemove);
				divAjudaVariancia.classList.remove(classAddRemove);
				divAjudaDesvio.classList.add(classAddRemove);
				break;

			case 'desvio':
				divAjudaPrincipal.classList.add(classAddRemove);
				divAjudaVariancia.classList.add(classAddRemove);
				divAjudaDesvio.classList.remove(classAddRemove);
				break;

		}
	}

	swal({
		title: 'Agora é sua vez de cacular e completar as tabelas!',
		closeOnClickOutside: false,
		closeOnEsc: false,
		button: {
			text: 'Vamos lá!',
			closeModal: true,
			className: 'btn',
		},
	});

	//!
	document.querySelector("#questao-9").addEventListener('click', function() {
		saibaMais();
	});
	document.querySelector("#input-maior-a").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-maior-b").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-maior-c").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-menor-a").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-menor-b").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-menor-c").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-variancia-a").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-variancia-b").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-desvio-a").addEventListener('click', function() {
		validarValores();
	});
	document.querySelector("#input-desvio-b").addEventListener('click', function() {
		validarValores();
	});

	let inputQuestao9VarianciaA = document.querySelector("#input-variancia-a");
	let inputQuestao9VarianciaB = document.querySelector("#input-variancia-b");
	let inputQuestao9DesvioA = document.querySelector("#input-desvio-a");
	let inputQuestao9DesvioB = document.querySelector("#input-desvio-b");
	let campoQuestao9VarianciaA = document.querySelector("#campo-variancia-a");
	let campoQuestao9VarianciaB = document.querySelector("#campo-variancia-b");
	let campoQuestao9DesvioA = document.querySelector("#campo-desvio-a");
	let campoQuestao9DesvioB = document.querySelector("#campo-desvio-b");

	let inputQuestao9MenorA = document.querySelector("#input-menor-a");
	let inputQuestao9MenorB = document.querySelector("#input-menor-b");
	let inputQuestao9MenorC = document.querySelector("#input-menor-c");
	let inputQuestao9MaiorA = document.querySelector("#input-maior-a");
	let inputQuestao9MaiorB = document.querySelector("#input-maior-b");
	let inputQuestao9MaiorC = document.querySelector("#input-maior-c");

	let valorCorretoQuestao9VarianciaA = 0.24;
	let valorCorretoQuestao9VarianciaB = 67.04;
	let valorCorretoQuestao9DesvioA = 0.49;
	let valorCorretoQuestao9DesvioB = 8.19;

	let valorQuestao9MenorA = -0.4;
	let valorQuestao9MenorB = 0.36;
	let valorQuestao9MenorC = 1.2;
	let valorQuestao9MaiorA = 13.4;
	let valorQuestao9MaiorB = 112.36;
	let valorQuestao9MaiorC = 31.36;

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputQuestao9VarianciaA.value = valorCorretoQuestao9VarianciaA.toString().replace('.', ',');
			inputQuestao9VarianciaB.value = valorCorretoQuestao9VarianciaB.toString().replace('.', ',');
			inputQuestao9DesvioA.value = valorCorretoQuestao9DesvioA.toString().replace('.', ',');
			inputQuestao9DesvioB.value = valorCorretoQuestao9DesvioB.toString().replace('.', ',');

			inputQuestao9MenorA.value = valorQuestao9MenorA.toString().replace('.', ',');
			inputQuestao9MenorB.value = valorQuestao9MenorB.toString().replace('.', ',');
			inputQuestao9MenorC.value = valorQuestao9MenorC.toString().replace('.', ',');
			inputQuestao9MaiorA.value = valorQuestao9MaiorA.toString().replace('.', ',');
			inputQuestao9MaiorB.value = valorQuestao9MaiorB.toString().replace('.', ',');
			inputQuestao9MaiorC.value = valorQuestao9MaiorC.toString().replace('.', ',');
			validarValores();
		}
	});

	function validarValores() {
		let valorQuestao9VarianciaA = inputQuestao9VarianciaA.value.replace('.', '').replace(',', '.');
		let valorQuestao9VarianciaB = inputQuestao9VarianciaB.value.replace('.', '').replace(',', '.');
		let valorQuestao9DesvioA = inputQuestao9DesvioA.value.replace('.', '').replace(',', '.');
		let valorQuestao9DesvioB = inputQuestao9DesvioB.value.replace('.', '').replace(',', '.');

		let valorQuestao9MenA = inputQuestao9MenorA.value.replace('.', '').replace(',', '.');
		let valorQuestao9MenB = inputQuestao9MenorB.value.replace('.', '').replace(',', '.');
		let valorQuestao9MenC = inputQuestao9MenorC.value.replace('.', '').replace(',', '.');
		let valorQuestao9MaiA = inputQuestao9MaiorA.value.replace('.', '').replace(',', '.');
		let valorQuestao9MaiB = inputQuestao9MaiorB.value.replace('.', '').replace(',', '.');
		let valorQuestao9MaiC = inputQuestao9MaiorC.value.replace('.', '').replace(',', '.');

		let valorQuestao9VarianciaAOk = (valorQuestao9VarianciaA == valorCorretoQuestao9VarianciaA);
		let valorQuestao9VarianciaBOk = (valorQuestao9VarianciaB == valorCorretoQuestao9VarianciaB);
		let valorQuestao9DesvioAOk = (valorQuestao9DesvioA == valorCorretoQuestao9DesvioA);
		let valorQuestao9DesvioBOk = (valorQuestao9DesvioB == valorCorretoQuestao9DesvioB);

		let valorQuestao9MenAOk = (valorQuestao9MenA == valorQuestao9MenorA);
		let valorQuestao9MenBOk = (valorQuestao9MenB == valorQuestao9MenorB);
		let valorQuestao9MenCOk = (valorQuestao9MenC == valorQuestao9MenorC);
		let valorQuestao9MaiAOk = (valorQuestao9MaiA == valorQuestao9MaiorA);
		let valorQuestao9MaiBOk = (valorQuestao9MaiB == valorQuestao9MaiorB);
		let valorQuestao9MaiCOk = (valorQuestao9MaiC == valorQuestao9MaiorC);

		if (valorQuestao9VarianciaAOk) {

			campoQuestao9VarianciaA.classList.add('fundo-ok');
			campoQuestao9VarianciaA.classList.remove('fundo-normal');

			let valorMenorVariancia = document.querySelectorAll(".valor-menor-variancia");
			for (var i = 0; i < valorMenorVariancia.length; i++) {
				valorMenorVariancia[i].innerHTML = valorCorretoQuestao9VarianciaA.toString().replace('.', ',');
			}
		} else {

			campoQuestao9VarianciaA.classList.remove('fundo-ok');
			campoQuestao9VarianciaA.classList.add('fundo-normal');

			let valorMenorVariancia = document.querySelectorAll(".valor-menor-variancia");
			for (var i = 0; i < valorMenorVariancia.length; i++) {
				valorMenorVariancia[i].innerHTML = '?';
			}
		}
		if (valorQuestao9VarianciaBOk) {

			campoQuestao9VarianciaB.classList.add('fundo-ok');
			campoQuestao9VarianciaB.classList.remove('fundo-normal');

			let valorMaiorVariancia = document.querySelectorAll(".valor-maior-variancia");
			for (var i = 0; i < valorMaiorVariancia.length; i++) {
				valorMaiorVariancia[i].innerHTML = valorCorretoQuestao9VarianciaB.toString().replace('.', ',');
			}
		} else {

			campoQuestao9VarianciaB.classList.remove('fundo-ok');
			campoQuestao9VarianciaB.classList.add('fundo-normal');

			let valorMaiorVariancia = document.querySelectorAll(".valor-maior-variancia");
			for (var i = 0; i < valorMaiorVariancia.length; i++) {
				valorMaiorVariancia[i].innerHTML = '?';
			}
		}
		if (valorQuestao9DesvioAOk) {

			campoQuestao9DesvioA.classList.add('fundo-ok');
			campoQuestao9DesvioA.classList.remove('fundo-normal');

			let valorMenorDesvio = document.querySelectorAll(".valor-menor-desvio");
			for (var i = 0; i < valorMenorDesvio.length; i++) {
				valorMenorDesvio[i].innerHTML = valorCorretoQuestao9DesvioA.toString().replace('.', ',');
			}
		} else {

			campoQuestao9DesvioA.classList.remove('fundo-ok');
			campoQuestao9DesvioA.classList.add('fundo-normal');

			let valorMenorDesvio = document.querySelectorAll(".valor-menor-desvio");
			for (var i = 0; i < valorMenorDesvio.length; i++) {
				valorMenorDesvio[i].innerHTML = '?';
			}
		}
		if (valorQuestao9DesvioBOk) {

			campoQuestao9DesvioB.classList.add('fundo-ok');
			campoQuestao9DesvioB.classList.remove('fundo-normal');

			let valorMaiorDesvio = document.querySelectorAll(".valor-maior-desvio");
			for (var i = 0; i < valorMaiorDesvio.length; i++) {
				valorMaiorDesvio[i].innerHTML = valorCorretoQuestao9DesvioB.toString().replace('.', ',');
			}
		} else {

			campoQuestao9DesvioB.classList.remove('fundo-ok');
			campoQuestao9DesvioB.classList.add('fundo-normal');

			let valorMaiorDesvio = document.querySelectorAll(".valor-maior-desvio");
			for (var i = 0; i < valorMaiorDesvio.length; i++) {
				valorMaiorDesvio[i].innerHTML = '?';
			}
		}

		if (valorQuestao9MenAOk) {

			inputQuestao9MenorA.classList.add('fundo-editavel-ok');
			inputQuestao9MenorA.classList.remove('fundo-editavel-normal');
		} else {

			inputQuestao9MenorA.classList.remove('fundo-editavel-ok');
			inputQuestao9MenorA.classList.add('fundo-editavel-normal');
		}

		if (valorQuestao9MenBOk) {

			inputQuestao9MenorB.classList.add('fundo-editavel-ok');
			inputQuestao9MenorB.classList.remove('fundo-editavel-normal');
		} else {

			inputQuestao9MenorB.classList.remove('fundo-editavel-ok');
			inputQuestao9MenorB.classList.add('fundo-editavel-normal');
		}

		if (valorQuestao9MenCOk) {

			inputQuestao9MenorC.classList.add('fundo-editavel-ok');
			inputQuestao9MenorC.classList.remove('fundo-editavel-normal');

			let valorMenorDesvio = document.querySelectorAll(".valor-menor-total");
			for (var i = 0; i < valorMenorDesvio.length; i++) {
				valorMenorDesvio[i].innerHTML = valorQuestao9MenorC.toString().replace('.', ',');
			}
		} else {

			inputQuestao9MenorC.classList.remove('fundo-editavel-ok');
			inputQuestao9MenorC.classList.add('fundo-editavel-normal');

			let valorMenorDesvio = document.querySelectorAll(".valor-menor-total");
			for (var i = 0; i < valorMenorDesvio.length; i++) {
				valorMenorDesvio[i].innerHTML = '?';
			}
		}

		if (valorQuestao9MaiAOk) {

			inputQuestao9MaiorA.classList.add('fundo-editavel-ok');
			inputQuestao9MaiorA.classList.remove('fundo-editavel-normal');
		} else {

			inputQuestao9MaiorA.classList.remove('fundo-editavel-ok');
			inputQuestao9MaiorA.classList.add('fundo-editavel-normal');
		}

		if (valorQuestao9MaiBOk) {

			inputQuestao9MaiorB.classList.add('fundo-editavel-ok');
			inputQuestao9MaiorB.classList.remove('fundo-editavel-normal');
		} else {

			inputQuestao9MaiorB.classList.remove('fundo-editavel-ok');
			inputQuestao9MaiorB.classList.add('fundo-editavel-normal');
		}

		if (valorQuestao9MaiCOk) {

			inputQuestao9MaiorC.classList.add('fundo-editavel-ok');
			inputQuestao9MaiorC.classList.remove('fundo-editavel-normal');
		} else {

			inputQuestao9MaiorC.classList.remove('fundo-editavel-ok');
			inputQuestao9MaiorC.classList.add('fundo-editavel-normal');
		}

		if (valorQuestao9VarianciaAOk && valorQuestao9VarianciaBOk && valorQuestao9DesvioAOk && valorQuestao9DesvioBOk
			&& valorQuestao9MenAOk && valorQuestao9MenBOk && valorQuestao9MenCOk && valorQuestao9MaiAOk && valorQuestao9MaiBOk && valorQuestao9MaiCOk
		) {

			$("#iconSetaDireita").show();
		} else {

			$("#iconSetaDireita").hide();
		}

	}

	function saibaMais() {

		if (document.querySelector('#dialog-questao-9-saiba-mais') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-9-saiba-mais">
				<h3 class="text-center">Desvio Padrão Amostral</h3>

				<h4><span class="tab"></span>Quando nosso interesse não se restringe à descrição dos dados, mas, partindo da <b>amostra</b>, visamos tirar inferências válidas para a respectiva população, convém efetuar uma modificação, que consiste em usar o divisor <b>n – 1</b> em lugar de <b>n</b>. A fórmula ficará então:</h4>
				<div class="text-center mais-top">
					<img src="assets/img/desvio-amostral-formula-1.png">
				</div>

				<ol><li><h4>Se os dados 18, 66, 383, 419 e 29 representassem uma amostra o desvio padrão amostral seria:</h4></li></ol>
				<div class="text-center mais-top">
					<img src="assets/img/desvio-amostral-formula-2.png">
				</div>

				<h4>Quando os dados estão agrupados, temos a presença de frequências (fi), e a fórmula do desvio padrão ficará:</h4>
				<div class="text-center mais-top">
					<img src="assets/img/desvio-amostral-formula-3.png">
				</div>

				<h4 class='muitissimo-mais-top'>Ex: Calcule o desvio padrão populacional da tabela abaixo:</h4>
				<div class="tabela mais-top">
					<table class="table text-center">
						<tr>
							<th>Xi<br/>(Dados população)</th>
							<th>fi<br/>(Frequência)</th>
							<th>(Xi - fi)</th>
							<th>X&#772;<br/>(média)</th>
							<th>(Xi - X&#772;)</th>
							<th>(Xi - X&#772;)²</th>
							<th>(Xi - X&#772;)² * fi</th>
						</tr>
						<tr>
							<td>0</td>
							<td>2</td>
							<td>0</td>
							<td>2,1</td>
							<td>-2,1</td>
							<td>4,41</td>
							<td>8,82</td>
						</tr>
						<tr>
							<td>1</td>
							<td>6</td>
							<td>6</td>
							<td>2,1</td>
							<td>-1,1</td>
							<td>1,21</td>
							<td>7,26</td>
						</tr>
						<tr>
							<td>2</td>
							<td>12</td>
							<td>24</td>
							<td>2,1</td>
							<td>-0,1</td>
							<td>0,01</td>
							<td>0,12</td>
						</tr>
						<tr>
							<td>3</td>
							<td>72</td>
							<td>21</td>
							<td>2,1</td>
							<td>0,9</td>
							<td>0,81</td>
							<td>5,67</td>
						</tr>
						<tr>
							<td>4</td>
							<td>3</td>
							<td>12</td>
							<td>2,1</td>
							<td>1,9</td>
							<td>3,61</td>
							<td>10,83</td>
						</tr>
						<tr>
							<td>Total</td>
							<td><span class='yolo-total-vermelho'>30</span></td>
							<td><b>63</b></td>
							<td></td>
							<td></td>
							<td>E = </td>
							<td><span class='yolo-total-azul'>32,70</span></td>
						</tr>
					</table>
				</div>
				<div class="text-center mais-top">
					<img src="assets/img/desvio-amostral-formula-4.png">
				</div>

				<h4 class='mais-top'>Se considerarmos os dados como sendo de uma <b>amostra</b> o desvio padrão seria:</h4>
				<div class="text-center mais-top">
					<img src="assets/img/desvio-amostral-formula-5.png">
				</div>

				<h4 class='mais-top'>Obs: Nas tabelas de frequências com intervalos de classe a fórmula a ser utilizada é a mesma do exemplo anterior.</h4>


			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao9Ajuda = $("#dialog-questao-9-saiba-mais").dialog({
			autoOpen: false,
			height: 500,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao9Ajuda.dialog("open");
	}
	</script>

	`,

	"questao-10.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-1 container muito-mais-top muitissimo-mais-bottom'>

			<div class="col-xs-12">

				<h3 class="top">Atividade 10 - Calcule o coeficiente de variação dos seguintes valores: 3, 13, 28, 18 e 8; utilizando os dados já calculados da tabela e <span id='auto-completar'>resolvendo</span> o que se pede.</h3>

				<div class="text-center">
					<div class="formula">
						<h4>Média aritmética = </h4>

						<div class="calculo">
							<div class="cima">
								<h4>3 + 13 + 28 + 18 + 8</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>
						<div class="calculo">
							<h4>=</h4>
						</div>
						<div class="calculo">
							<div class="cima">
								<h4>70</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>
						<div class="calculo">
							<h4> = 14</h4>
						</div>
					</div>
				</div>

				<div class="tabela">
					<table class="table text-center">
						<tr>
							<th>Total (mil pessoas)</th>
							<th>Média</th>
							<th>Desvios: diferença do valor pela média</th>
							<th>Quadrado dos desvios</th>
						</tr>
						<tr>
							<th>Xi (valores)</th>
							<th>X&#772; (média)</th>
							<th>(Xi - X&#772;) (valor - média)</th>
							<th>(Xi - X&#772;)²</th>
						</tr>
						<tr>
							<td><span class="preenchimento-a">3</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">3</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-a">-11</span></td>
							<td><span class="preenchimento-d total-a">121</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">13</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">13</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-b">-1</span></td>
							<td><span class="preenchimento-d total-b">1</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">28</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">28</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-c">14</span></td>
							<td><span class="preenchimento-d total-c">196</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">18</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">18</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-d">4</span></td>
							<td><span class="preenchimento-d total-d">16</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">8</span></td>
							<td><span class="preenchimento-b">14</span></td>
							<td><span class="preenchimento-a">8</span> - <span class="preenchimento-b">14</span> = <span class="preenchimento-c soma-e">-6</span></td>
							<td><span class="preenchimento-d total-e">36</span></td>
						</tr>
						<tr class="total">
							<td colspan="2"></td>
							<td>Soma = </td>
							<td><span class="totalizado-final">370</span></td>
						</tr>
					</table>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Variância: S² = </h4>

						<div class="calculo">
							<div class="cima">
								<h4>370</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>

						<div class="calculo">
							<h4> = 74</h4>
						</div>

						<h4><spanc class='tab'></span> > <spanc class='tab'></span></h4>

						<h4>Desvio padrão: S = &#8730;74 = 8,6</h4>

					</div>
				</div>

				<h4>Em seguida, encontramos o coeficiente de variação:</h4>

				<div class="text-center">
					<div class="formula">
						<h4>CV = </h4>

						<div class="calculo">
							<div class="cima">
								<h4>S</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>X&#772;</h4>
							</div>
						</div>

						<div class="calculo">
							<h4> * 100 = </h4>
						</div>

						<div class="calculo">
							<div class="cima">
								<div class="input-x fundo-normal preenchimento-c" id="campo-valor-a">
									<input id='input-valor-a' type="text" placeholder="?">
								</div>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<div class="input-x fundo-normal preenchimento-c" id="campo-valor-b">
									<input id='input-valor-b' type="text" placeholder="?">
								</div>
							</div>
						</div>

						<div class="calculo">
							<h4> * 100 = </h4>
						</div>

						<div class="calculo">
							<div class="input-x fundo-normal preenchimento-c" id="campo-valor-c">
								<input id='input-valor-c' type="text" placeholder="?">
							</div>
						</div>

						<div class="calculo">
							<h4> * 100 = </h4>
						</div>

						<div class="calculo">
							<div class="input-x fundo-normal preenchimento-c" id="campo-valor-d">
								<input id='input-valor-d' type="text" placeholder="?">
							</div>
						</div>

						<div class="calculo">
							<h4> % </h4>
						</div>

					</div>
				</div>

			</div>


		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total,
	.tabela .bg-colorido {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	.sem-borda {
		margin: 0px;
		padding: 0px;
	}

	.linha {
		margin-top: 4px;
		margin-bottom: 4px;
	}

	.texto-ok {
		color: #46D079;
		font-weight: bold;
		transition: all .3s;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-10.html');

	apenasNumeros(document.querySelector("#input-valor-a"));
	apenasNumeros(document.querySelector("#input-valor-b"));
	apenasNumeros(document.querySelector("#input-valor-c"));
	apenasNumeros(document.querySelector("#input-valor-d"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexVariancia = 0;
	function anterior() {

		carregarParte('coeficiente-variacao.html');
	}

	function proxima() {

		carregarParte('questao-11.html');
	}

	function ajuda() {

		if (document.querySelector('#dialog-questao-10-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-10-ajuda">
				<h3>Coeficiente de Variação de Pearson - CVP</h3>

				<h4><span class='tab'></span>É a razão entre o desvio padrão e a média referentes a dados de uma mesma série, dado pela fórmula:</h4>
				<div class='text-center'>
					<img src='assets/img/questao-10-ajuda-formula-1.png'/>
				</div>

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao10Ajuda = $("#dialog-questao-10-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao10Ajuda.dialog("open");
	}

	//!
	document.querySelector("#input-valor-a").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-valor-b").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-valor-c").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-valor-d").addEventListener('input', function() {
		validarValores();
	});

	let valorCorretoA = 8.6;
	let valorCorretoB = 14;
	let valorCorretoC = 0.61;
	let valorCorretoD = 61;

	let inputValorA = document.querySelector('#input-valor-a');
	let inputValorB = document.querySelector('#input-valor-b');
	let inputValorC = document.querySelector('#input-valor-c');
	let inputValorD = document.querySelector('#input-valor-d');

	let campoValorA = document.querySelector('#campo-valor-a');
	let campoValorB = document.querySelector('#campo-valor-b');
	let campoValorC = document.querySelector('#campo-valor-c');
	let campoValorD = document.querySelector('#campo-valor-d');

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputValorA.value = valorCorretoA.toString().replace('.', ',');
			inputValorB.value = valorCorretoB.toString().replace('.', ',');
			inputValorC.value = valorCorretoC.toString().replace('.', ',');
			inputValorD.value = valorCorretoD.toString().replace('.', ',');

			validarValores();
		}
	});

	function validarValores() {

		let valorTotalA = inputValorA.value.replace('.', '').replace(',', '.');
		let valorTotalB = inputValorB.value.replace('.', '').replace(',', '.');
		let valorTotalC = inputValorC.value.replace('.', '').replace(',', '.');
		let valorTotalD = inputValorD.value.replace('.', '').replace(',', '.');

		let valorTotalAOk = (valorTotalA == valorCorretoA);
		let valorTotalBOk = (valorTotalB == valorCorretoB);
		let valorTotalCOk = (valorTotalC == valorCorretoC);
		let valorTotalDOk = (valorTotalD == valorCorretoD);

		if (valorTotalAOk) {

			campoValorA.classList.add('fundo-ok');
			campoValorA.classList.remove('fundo-normal');
		} else {

			campoValorA.classList.remove('fundo-ok');
			campoValorA.classList.add('fundo-normal');
		}
		if (valorTotalBOk) {

			campoValorB.classList.add('fundo-ok');
			campoValorB.classList.remove('fundo-normal');
		} else {

			campoValorB.classList.remove('fundo-ok');
			campoValorB.classList.add('fundo-normal');
		}
		if (valorTotalCOk) {

			campoValorC.classList.add('fundo-ok');
			campoValorC.classList.remove('fundo-normal');
		} else {

			campoValorC.classList.remove('fundo-ok');
			campoValorC.classList.add('fundo-normal');
		}
		if (valorTotalDOk) {

			campoValorD.classList.add('fundo-ok');
			campoValorD.classList.remove('fundo-normal');
		} else {

			campoValorD.classList.remove('fundo-ok');
			campoValorD.classList.add('fundo-normal');
		}

		if (valorTotalAOk && valorTotalBOk && valorTotalCOk && valorTotalDOk) {
			$("#iconSetaDireita").show();
		} else {
			$("#iconSetaDireita").hide();
		}

	}

	</script>

	`,

	"questao-11.html":
	`
	<div class="geral-interno">

		<div class='explicacoes-1 container muito-mais-top muitissimo-mais-bottom'>

			<div class="col-xs-12">
				<h3 class="top">Atividade 11 - Calcule o coeficiente de variação dos seguintes valores: 19, 74, 403, 450 e 31; utilizando os dados já calculados da tabela e <span id='auto-completar'>resolvendo</span> o que se pede.</h3>

				<div class="text-center">
					<div class="formula">
						<h4>Média aritmética = </h4>

						<div class="calculo">
							<div class="cima">
								<h4>19 + 74 + 403 + 450 + 31</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>
						<div class="calculo">
							<h4>=</h4>
						</div>
						<div class="calculo">
							<div class="cima">
								<h4>977</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>
						<div class="calculo">
							<h4> = 195,4</h4>
						</div>
					</div>
				</div>

				<div class="tabela">
					<table class="table text-center">
						<tr>
							<th>Total (mil pessoas)</th>
							<th>Média</th>
							<th>Desvios: diferença do valor pela média</th>
							<th>Quadrado dos desvios</th>
						</tr>
						<tr>
							<th>Xi (valores)</th>
							<th>X&#772; (média)</th>
							<th>(Xi - X&#772;) (valor - média)</th>
							<th>(Xi - X&#772;)²</th>
						</tr>
						<tr>
							<td><span class="preenchimento-a">19</span></td>
							<td><span class="preenchimento-b">195,4</span></td>
							<td><span class="preenchimento-a">19</span> - <span class="preenchimento-b">195,4</span> = <span class="preenchimento-c soma-a">-176,4</span></td>
							<td><span class="preenchimento-d total-a">31.116,96</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">74</span></td>
							<td><span class="preenchimento-b">195,4</span></td>
							<td><span class="preenchimento-a">74</span> - <span class="preenchimento-b">195,4</span> = <span class="preenchimento-c soma-b">-121,4</span></td>
							<td><span class="preenchimento-d total-b">14.737,96</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">403</span></td>
							<td><span class="preenchimento-b">195,4</span></td>
							<td><span class="preenchimento-a">403</span> - <span class="preenchimento-b">195,4</span> = <span class="preenchimento-c soma-c">207,6</span></td>
							<td><span class="preenchimento-d total-c">43.097,76</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">450</span></td>
							<td><span class="preenchimento-b">195,4</span></td>
							<td><span class="preenchimento-a">450</span> - <span class="preenchimento-b">195,4</span> = <span class="preenchimento-c soma-d">256,6</span></td>
							<td><span class="preenchimento-d total-d">64.821,16</span></td>
						</tr>
						<tr>
							<td><span class="preenchimento-a">31</span></td>
							<td><span class="preenchimento-b">195,4</span></td>
							<td><span class="preenchimento-a">31</span> - <span class="preenchimento-b">195,4</span> = <span class="preenchimento-c soma-e">-164,4</span></td>
							<td><span class="preenchimento-d total-e">27.027,36</span></td>
						</tr>
						<tr class="total">
							<td colspan="2"></td>
							<td>Soma = </td>
							<td><span class="totalizado-final">180.801,2</span></td>
						</tr>
					</table>
				</div>

				<div class="text-center">
					<div class="formula">
						<h4>Variância: S² = </h4>

						<div class="calculo">
							<div class="cima">
								<h4>180.801,2</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>5</h4>
							</div>
						</div>

						<div class="calculo">
							<h4> = 36.160,24</h4>
						</div>

						<h4><spanc class='tab'></span> > <spanc class='tab'></span></h4>

						<h4>Desvio padrão: S = &#8730;36.160,24 = 190,16</h4>

					</div>
				</div>

				<h4>Em seguida, encontramos o coeficiente de variação:</h4>

				<div class="text-center">
					<div class="formula">
						<h4>CV = </h4>

						<div class="calculo">
							<div class="cima">
								<h4>S</h4>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h4>X&#772;</h4>
							</div>
						</div>

						<div class="calculo">
							<h4> * 100 = </h4>
						</div>

						<div class="calculo">
							<div class="cima">
								<div class="input-x fundo-normal preenchimento-c" id="campo-valor-a">
									<input id='input-valor-a' type="text" placeholder="?">
								</div>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<div class="input-x fundo-normal preenchimento-c" id="campo-valor-b">
									<input id='input-valor-b' type="text" placeholder="?">
								</div>
							</div>
						</div>

						<div class="calculo">
							<h4> * 100 = </h4>
						</div>

						<div class="calculo">
							<div class="input-x fundo-normal preenchimento-c" id="campo-valor-c">
								<input id='input-valor-c' type="text" placeholder="?">
							</div>
						</div>

						<div class="calculo">
							<h4> * 100 = </h4>
						</div>

						<div class="calculo">
							<div class="input-x fundo-normal preenchimento-c" id="campo-valor-d">
								<input id='input-valor-d' type="text" placeholder="?">
							</div>
						</div>

						<div class="calculo">
							<h4> % </h4>
						</div>

					</div>
				</div>

			</div>


		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total,
	.tabela .bg-colorido {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	.sem-borda {
		margin: 0px;
		padding: 0px;
	}

	.linha {
		margin-top: 4px;
		margin-bottom: 4px;
	}

	.texto-ok {
		color: #46D079;
		font-weight: bold;
		transition: all .3s;
	}

	</style>

	<script type="text/javascript">

	console.log('questao-11.html');

	apenasNumeros(document.querySelector("#input-valor-a"));
	apenasNumeros(document.querySelector("#input-valor-b"));
	apenasNumeros(document.querySelector("#input-valor-c"));
	apenasNumeros(document.querySelector("#input-valor-d"));

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").hide();
	$("#iconAjuda").show();
	$("#iconCalculadora").show();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexVariancia = 0;
	function anterior() {

		carregarParte('questao-10.html');
	}

	function proxima() {

		carregarParte('reduzir-reutilizar-reciclar.html');
	}

	function ajuda() {

		if (document.querySelector('#dialog-questao-11-ajuda') == null) {
			let innerAjuda = document.querySelector(".mensagens").innerHTML;
			innerAjuda += $%&
			<div id="dialog-questao-11-ajuda">
				<h3>Coeficiente de Variação de Pearson - CVP</h3>

				<h4><span class='tab'></span>É a razão entre o desvio padrão e a média referentes a dados de uma mesma série, dado pela fórmula:</h4>
				<div class='text-center'>
					<img src='assets/img/questao-10-ajuda-formula-1.png'/>
				</div>

			</div>$%&;
			document.querySelector(".mensagens").innerHTML = innerAjuda;
		}

		let dialogQuestao11Ajuda = $("#dialog-questao-11-ajuda").dialog({
			autoOpen: false,
			height: 500,
			width: 1000,
			modal: true,
			buttons: {}
		});
		dialogQuestao11Ajuda.dialog("open");
	}

	//!
	document.querySelector("#input-valor-a").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-valor-b").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-valor-c").addEventListener('input', function() {
		validarValores();
	});
	document.querySelector("#input-valor-d").addEventListener('input', function() {
		validarValores();
	});

	let valorCorretoA = 190.16;
	let valorCorretoB = 195.4;
	let valorCorretoC = 0.97;
	let valorCorretoD = 97;

	let inputValorA = document.querySelector('#input-valor-a');
	let inputValorB = document.querySelector('#input-valor-b');
	let inputValorC = document.querySelector('#input-valor-c');
	let inputValorD = document.querySelector('#input-valor-d');

	let campoValorA = document.querySelector('#campo-valor-a');
	let campoValorB = document.querySelector('#campo-valor-b');
	let campoValorC = document.querySelector('#campo-valor-c');
	let campoValorD = document.querySelector('#campo-valor-d');

	document.querySelector('#auto-completar').addEventListener('click', function (evt) {
		if (evt.detail === 3) {

			inputValorA.value = valorCorretoA.toString().replace('.', ',');
			inputValorB.value = valorCorretoB.toString().replace('.', ',');
			inputValorC.value = valorCorretoC.toString().replace('.', ',');
			inputValorD.value = valorCorretoD.toString().replace('.', ',');

			validarValores();
		}
	});

	function validarValores() {

		let valorTotalA = inputValorA.value.replace('.', '').replace(',', '.');
		let valorTotalB = inputValorB.value.replace('.', '').replace(',', '.');
		let valorTotalC = inputValorC.value.replace('.', '').replace(',', '.');
		let valorTotalD = inputValorD.value.replace('.', '').replace(',', '.');

		let valorTotalAOk = (valorTotalA == valorCorretoA);
		let valorTotalBOk = (valorTotalB == valorCorretoB);
		let valorTotalCOk = (valorTotalC == valorCorretoC);
		let valorTotalDOk = (valorTotalD == valorCorretoD);

		if (valorTotalAOk) {

			campoValorA.classList.add('fundo-ok');
			campoValorA.classList.remove('fundo-normal');
		} else {

			campoValorA.classList.remove('fundo-ok');
			campoValorA.classList.add('fundo-normal');
		}
		if (valorTotalBOk) {

			campoValorB.classList.add('fundo-ok');
			campoValorB.classList.remove('fundo-normal');
		} else {

			campoValorB.classList.remove('fundo-ok');
			campoValorB.classList.add('fundo-normal');
		}
		if (valorTotalCOk) {

			campoValorC.classList.add('fundo-ok');
			campoValorC.classList.remove('fundo-normal');
		} else {

			campoValorC.classList.remove('fundo-ok');
			campoValorC.classList.add('fundo-normal');
		}
		if (valorTotalDOk) {

			campoValorD.classList.add('fundo-ok');
			campoValorD.classList.remove('fundo-normal');
		} else {

			campoValorD.classList.remove('fundo-ok');
			campoValorD.classList.add('fundo-normal');
		}

		if (valorTotalAOk && valorTotalBOk && valorTotalCOk && valorTotalDOk) {
			$("#iconSetaDireita").show();
		} else {
			$("#iconSetaDireita").hide();
		}

	}

	</script>

	`,

	"reduzir-reutilizar-reciclar.html":
	`
	<div class="geral-interno">
		<img id='img-fundo' class="fundo" src="assets/img/3r.png"/>

		<div class='explicacoes container oculto muito-mais-top'>
			<h3 class="text-center">O Princípio dos 3Rs (Reduzir, Reutilizar e Reciclar)</h3>
			<h4 class="muito-mais-top"><span class="tab"></span>É um conjunto de atitudes relacionadas aos nossos hábitos de consumo que ajudam a poupar os recursos naturais, gerar menos resíduos e minimizar seu impacto sobre o meio ambiente, além da geração de trabalho e renda. Os 3Rs também são objetivos da Política Nacional de Resíduos Sólidos, Lei12.305/2010.</h4>
			<ul>
				<li><h4><b>REDUZIR:</b> Sempre que possível devemos diminuir a nossa produção de resíduos.</h4></li>
				<li><h4><b>REUTILIZAR:</b> processo de aproveitamento dos resíduos sólidos sem sua transformação biológica, física ou físico-química.</h4></li>
				<li><h4><b>RECICLAR:</b> processo de transformação dos resíduos sólidos que envolve a alteração de suas propriedades físicas, físico-químicas ou biológicas, com vistas à transformação em insumos ou novos produtos.</h4></li>
			</ul>
		</div>

		<img id='img-fundo-final' class="fundo oculto" src="assets/img/3r-final.png"/>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('reduzir-reutilizar-reciclar.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndex3r = 0;
	function anterior() {

		switch (posIndex3r) {

			default:
			case 0:
				carregarParte('questao-11.html');
				break;

			case 1:
				document.querySelector('#img-fundo').classList.remove('oculto');
				document.querySelector('.explicacoes').classList.add('oculto');

				posIndex3r--;
				break;
		}
	}

	function proxima() {
		switch (posIndex3r) {

			case 0:
				document.querySelector('#img-fundo').classList.add('oculto');
				document.querySelector(".explicacoes").classList.remove('oculto');

				posIndex3r++;
				break;

			case 1:
				document.querySelector('.explicacoes').classList.add('oculto');
				document.querySelector('#img-fundo-final').classList.remove('oculto');

				swal({
					title: $%&#@*nomePessoa}, obrigado por ter participado da nossa aula!$%&,
					closeOnClickOutside: false,
					closeOnEsc: false,
					button: {
						text: 'Próximo',
						closeModal: true,
						className: 'btn',
					},
				})
				.then((value) => {
					posIndex3r++;
					proxima();
				});
				break;

			case 2:
				swal({
					title: 'Obrigado por ter nos ajudado a realizar as questões!',
					closeOnClickOutside: false,
					closeOnEsc: false,
					button: {
						text: 'Próximo',
						closeModal: true,
						className: 'btn',
					},
				})
				.then((value) => {
					posIndex3r++;
					proxima();
				});
				break;

			default:
			case 3:
				swal({
					title: 'Agora você já sabe um pouco mais sobre Estatística!',
					closeOnClickOutside: false,
					closeOnEsc: false,
					button: {
						text: 'Próximo',
						closeModal: true,
						className: 'btn',
					},
				})
				.then((value) => {
					carregarParte('final.html');
				});
				break;
		}
	}

	function ajuda() {
	}
	</script>

	`,

	"sala-aula.html":
	`
	<div class="geral-interno">
		<video class="fundo"/>
	</div>

	<style media="screen">
	.geral-interno {
		position: relative;
	}

	.fundo {
		width: 100%;
	}
	</style>

	<script type="text/javascript">

	console.log('sala-aula.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
	});

	function anterior() {
		carregarParte('explicacao-professora.html');
	}

	function proxima() {
		carregarParte('media-mediana-moda.html');
	}

	let videoSalaAula = document.querySelector("video");

	let sourceSalaAula = document.createElement('source');
	videoSalaAula.setAttribute('src', 'assets/video/sala-aula.mp4');
	videoSalaAula.appendChild(sourceSalaAula);
	videoSalaAula.play();

	videoSalaAula.addEventListener("ended", function() {
		proxima();
	});
	</script>

	`,

	"variancia.html":
	`
	<div class="geral-interno">
		<img id='img-fundo' class="fundo" src="assets/img/variancia-1.png"/>

		<div class='explicacoes container oculto muito-mais-top'>
			<h3>Exemplo: Calcular a variância dos seguintes valores da tabela:</h3>
			<div class="tabela col-xs-12 col-md-6">
				<table class="table text-center">
					<tr>
						<th>Grandes Regiões</th>
						<th>Municípios com serviço de coleta seletiva de papel e/ou papelão</th>
					</tr>
					<tr>
						<th>Brasil</th>
						<th>980</th>
					</tr>
					<tr>
						<td>Norte</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Nordeste</td>
						<td>73</td>
					</tr>
					<tr>
						<td>Sudeste</td>
						<td>403</td>
					</tr>
					<tr>
						<td>Sul</td>
						<td>453</td>
					</tr>
					<tr>
						<td>Centro-Oeste</td>
						<td>31</td>
					</tr>
					<tr class="total">
						<td>Variância</td>
						<td>36.445,6</td>
					</tr>
				</table>
			</div>

			<div class="col-xs-12 col-md-6" style="display:flex">

				<div class="formula">
					<h4>1º Média Aritmética = </h4>

					<div class="calculo">
						<div class="cima">
							<h5>20 + 73 + 403 + 453 + 31</h5>
						</div>
						<div class="linha">
							<hr>
						</div>
						<div class="baixo">
							<h5>5</h5>
						</div>
					</div>

					<h5> = </h5>

					<div class="calculo">
						<div class="cima">
							<h5>980</h5>
						</div>
						<div class="linha">
							<hr>
						</div>
						<div class="baixo">
							<h5>5</h5>
						</div>
					</div>

					<h5> = <span class='preenchimento-b'>196</span></h5>
				</div>
			</div>

			<div class="col-xs-12 col-md-6 mais-top">
				<h4>2º Variância: média dos quadrados dos desvios (desvio é cada um dos valores menos a média)</h4>

				<div class="row">

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Variância = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>(valor1 - média)² + (valor2 + média)² + (valor3 + média)²</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>(número de valores)</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-a">20</span> - <span class="media-pre preenchimento-b">196</span>)² +
										(<span class="preenchimento-a">73</span> - <span class="media-pre preenchimento-b">196</span>)² +
										(<span class="preenchimento-a">403</span> - <span class="media-pre preenchimento-b">196</span>)² +
										(<span class="preenchimento-a">453</span> - <span class="media-pre preenchimento-b">196</span>)² +
										(<span class="preenchimento-a">31</span> - <span class="media-pre preenchimento-b">196</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5>5</h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										(<span class="preenchimento-c">-176</span>)² +
										(<span class="preenchimento-c">-123</span>)² +
										(<span class="preenchimento-c">207</span>)² +
										(<span class="preenchimento-c">257</span>)² +
										(<span class="preenchimento-c">-165</span>)²
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<span class="preenchimento-d">30.976</span> +
										<span class="preenchimento-d">15.129</span> +
										<span class="preenchimento-d">42.849</span> +
										<span class="preenchimento-d">66.049</span> +
										<span class="preenchimento-d">27.225</span>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<div class="cima">
									<h5>
										<b><span class="totalizado-final">182.228</span></b>
									</h5>
								</div>
								<div class="linha">
									<hr>
								</div>
								<div class="baixo">
									<h5><b>5</b></h5>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 mais-top pre-formula">
						<div class="formula">
							<h5>Var = </h5>

							<div class="calculo">
								<h5>
									<b><span class="final-geral">36.445,6</span></b>
								</h5>
							</div>
						</div>
					</div>

				</div>

			</div>

			<div class="tabela col-xs-12 mais-top">
				<h4>Podemos organizar os dados em uma tabela, da seguinte forma:</h4>

				<table class="table text-center">
					<tr>
						<th>Xi (valores)</th>
						<th>X&#772; (média)</th>
						<th>(Xi - X&#772;) (valor - média)</th>
						<th>(Xi - X&#772;)²</th>
					</tr>
					<tr>
						<td><span class="preenchimento-a">20</span></td>
						<td><span class="preenchimento-b">196</span></td>
						<td><span class="preenchimento-a">20</span> - <span class="preenchimento-b">196</span> = <span class="preenchimento-c">-176</span></td>
						<td><span class="preenchimento-d">30.976</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">73</span></td>
						<td><span class="preenchimento-b">196</span></td>
						<td><span class="preenchimento-a">74</span> - <span class="preenchimento-b">196</span> = <span class="preenchimento-c">-123</span></td>
						<td><span class="preenchimento-d">15.129</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">403</span></td>
						<td><span class="preenchimento-b">196</span></td>
						<td><span class="preenchimento-a">403</span> - <span class="preenchimento-b">196</span> = <span class="preenchimento-c">207</span></td>
						<td><span class="preenchimento-d">42.849</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">453</span></td>
						<td><span class="preenchimento-b">196</span></td>
						<td><span class="preenchimento-a">453</span> - <span class="preenchimento-b">196</span> = <span class="preenchimento-c">257</span></td>
						<td><span class="preenchimento-d">66.049</span></td>
					</tr>
					<tr>
						<td><span class="preenchimento-a">31</span></td>
						<td><span class="preenchimento-b">196</span></td>
						<td><span class="preenchimento-a">31</span> - <span class="preenchimento-b">196</span> = <span class="preenchimento-c">-165</span></td>
						<td><span class="preenchimento-d">27.225</span></td>
					</tr>
					<tr class="total">
						<td colspan="2"></td>
						<td>Soma = </td>
						<td><span class="totalizado-final">182.228</span></td>
					</tr>

				</table>

				<div class="col-xs-12 mais-top pre-formula">
					<div class="formula">
						<h5>Var = </h5>

						<div class="calculo">
							<div class="cima">
								<h5>
									<b><span class="totalizado-final">182.228</span></b>
								</h5>
							</div>
							<div class="linha">
								<hr>
							</div>
							<div class="baixo">
								<h5><b>5</b></h5>
							</div>
						</div>

						<div class="calculo">
							<h5>
								<b><span class="final-geral"> = 36.445,6</span></b>
							</h5>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class='explicacoes-quadrado container oculto muito-mais-top'>
			<h2 class="text-center muito-mais-bottom"><b>Variância - S²</b></h2>
			<h4><span class='tab'></span><span class='tab'></span>A variância é uma medida que tem pouca utilidade como estatística descritiva, porém é extremamente importante na inferência estatística e em combinações de amostras.</h4>
			<h4 class="muito-mais-top"><span class='tab'></span><span class='tab'></span>A <b>variância</b> é calculada da seguinte forma:</h4>
			<h4>O cálculo é igual ao somatório dos quadrados das diferenças entre cada valor e a média aritmética, dividido pelo número de valores:</h4>
			<div class="text-center mais-top">
				<img src="assets/img/variancia-formula-4.jpg">
			</div>
			<h4>Se indicarmos a Variância por S² e a média por x&#772; temos:</h4>
			<div class="text-center mais-top">
				<img src="assets/img/variancia-formula-5.jpg">
			</div>
			<h4>O símbolo &#x2211; significa o somatório da expressão indicada após esse símbolo, para cada um dos valores de Xi. Os valores do índice i são: 1, 2, 3, ..., n.</h4>
		</div>

		<div class="mensagens">
		</div>
	</div>

	<style media="screen">

	.geral-interno {
		position: relative;
	}

	.fundo {
		width: auto;
		max-width: 100%;
	}

	.tabela th {
		text-align: center;
	}

	.tabela th, .tabela .total {
		background-color: #F1ECF6;
	}

	.tabela .total {
		color: #ae6df5;
		font-weight: bold;
	}

	.input-x {
		display: inline-flex;
		border-radius: 6px;
	}

	.fundo-ok {
		background-color: #46D079;
		border: solid #46D079 3px;
		transition: all .3s;
	}

	.fundo-normal {
		background-color: #ae6df5;
		border: solid #ae6df5 3px;
		transition: all .3s;
	}

	input {
		border: solid #FFFFFF 0px;
		border-radius: 6px;
		text-align: center;
		font-size: 16px;
	}

	.input-x input {
		width: 80px;
	}

	.campo-media {
		margin-top: 5px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.preenchimento-a, .preenchimento-b, .preenchimento-c, .preenchimento-d {
		font-weight: bold;
	}

	.preenchimento-a {
		color: #43D07B;
	}

	.preenchimento-b {
		color: #3196C2;
	}

	.preenchimento-c {
		color: #7849C6;
	}

	.preenchimento-d {
		color: #CD8B32;
	}

	.pre-formula {
		text-align: center;
		vertical-align: middle;
	}

	.formula {
		display: inline-flex;
		text-align: center;
	}

	.calculo {
		margin-left: 1rem;
		margin-right: : 1rem;
	}

	.calculo hr {
		margin: 0px;
		border-top: 1px solid #000;
	}

	.calculo .cima {
		text-align: center;
	}

	.calculo .baixo {
		text-align: center;
	}

	</style>

	<script type="text/javascript">

	console.log('variancia.html');

	$("#iconSetaEsquerda").show();
	$("#iconSetaDireita").show();
	$("#iconAjuda").hide();
	$("#iconCalculadora").hide();

	iconSetaEsquerda.addEventListener("click", function() {
		anterior();
	});

	iconSetaDireita.addEventListener("click", function() {
		proxima();
	});

	iconAjuda.addEventListener("click", function() {
		ajuda();
	});

	let posIndexVariancia = 0;
	function anterior() {

		switch (posIndexVariancia) {

			default:
			case 0:
				carregarParte('questao-2.html');
				break;

			case 1:
				let imgFundo = document.querySelector('#img-fundo');
				imgFundo.src = 'assets/img/variancia-1.png';

				posIndexVariancia--;
				break;

			case 2:
				document.querySelector('#img-fundo').classList.remove('oculto');
				document.querySelector(".explicacoes").classList.add('oculto');

				posIndexVariancia--;
				break;

			case 3:
				document.querySelector('.explicacoes').classList.remove('oculto');
				document.querySelector(".explicacoes-quadrado").classList.add('oculto');

				posIndexVariancia--;
				break;
		}
	}

	function proxima() {
		switch (posIndexVariancia) {

			case 0:
				let imgFundo = document.querySelector('#img-fundo');
				imgFundo.src = 'assets/img/variancia-2.png';

				posIndexVariancia++;
				break;

			case 1:
				document.querySelector('#img-fundo').classList.add('oculto');
				document.querySelector(".explicacoes").classList.remove('oculto');

				posIndexVariancia++;
				break;

			case 2:
				document.querySelector('.explicacoes').classList.add('oculto');
				document.querySelector(".explicacoes-quadrado").classList.remove('oculto');

				posIndexVariancia++;
				break;

			default:
			case 3:
				carregarParte('questao-3.html');
				break;
		}
	}

	function ajuda() {
	}

	</script>


	`
};
