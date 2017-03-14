  var nome;
  var i = -11.4;
  var scene = 0;
  var fadeTime = 500;
  

  function sleep(ms) {
  	return new Promise(resolve => setTimeout(resolve, ms));
	}

  $( document ).ready(function() {
		$("#alertNome").hide();
		$("#scene1").hide();
		$("#scene2").hide();
		$("#scene3").hide();

		$("#imagensFixas").hide();

});


	function pressedEnter(event) {
		if (event.keyCode == 13) {
			saveName();
		}
	}



	
	
	
  /* Pega o nome inserido pelo usuário */
	function saveName() {
		
		if (!$("#inputNome").val()) {
			$("#alertNome").show();
	    }
		else {
			nome = $("#inputNome").val(); 
			$("#rowInputName").remove();
			showFixedImages();
			nextScene();
		}
	}
	
	
	
	
	
	
	
	
	/* SCENE 1 */
		

		function showFixedImages() {
		$("#imagensFixas").show();
		}
	
		function hideFixedImages() {
			$("#imagensFixas").hide();
		}
	
	
	
	
	
	
	
	
	
	/* SCENE 2 */
	
	function showMoreInfo(usina) {
		$("body").css("background-color", "gray");
		$('#detalhesUsinas').show();
	 	$('#additionalScene2').hide();
		$('#mensagem').hide();
		$('#imagemEngenheiro2').hide();
		hideFixedImages();
		switch (usina) {
			case 'hidreletrica': 
				$('#imgUsina').attr("src", "assets/img/hidreletrica_animada.mp4");
				$('#textoUsina').html("Energia gerada pela água em usinas Hidrelétricas. A energia contida nas correntezas de rios é transformada em energia cinética que movimenta uma turbina, movendo um gerador que por sua vez irá gerar energia elétrica");
				$('#tituloUsina').html("Energia Hídrica");

				break;
			case 'eolica':
				$('#imgUsina').attr("src", "assets/img/eolica_animada.mp4");
				$('#textoUsina').html("É a energia gerada pelo vento, grandes turibinas são posicionadas em locais abertos e com grande quantidade de vento. O vento, ao mover as turbinas gera energia elétrica através de um gerador.");
				$('#tituloUsina').html("Energia Eólica");
				break;
			case 'fossil':
				$('#imgUsina').attr("src", "assets/img/fossil_animada.mp4");
				$('#textoUsina').html("Energia gerada através de reações químicas de combustão de materiais orgânicos decompostos, quando as ligações químicas dos hidrocarbonetos são quebradas, a energia é liberada");
				$('#tituloUsina').html("Energia Fóssil");
				break;
			case 'nuclear':
				$('#imgUsina').attr("src", "assets/img/nuclear_animada.mp4");
				$('#textoUsina').html("Utiliza a energia proveniente de reações de fissão nuclear para gerar energia. A fissão nuclear libera grande quantidade de calor que aquece a água e produz o vapor responsável por movimentar as turbinas do gerador em grandes velocidades, gerando a corrente elétrica.");
				$('#tituloUsina').html("Energia Nuclear");
				break;
			case 'solar':
				$('#imgUsina').attr("src", "assets/img/solar_animada.mp4");
				$('#textoUsina').html("É a energia irradiada pelo sol. Pode ser utilizada para geração de calor, ou pode ser convertida em energia elétrica através de células fotovoltaicas");
				$('#tituloUsina').html("Energia Solar");
				break;	
			case 'biomassa':
				$('#imgUsina').attr("src", "assets/img/biomassa_animada.mp4");
				$('#textoUsina').html("Gerada através da decomposição de materiais orgânicos (esterco, resto de alimentos). É transformada em energia por meio de combustão, gaseificação e fermentação");
				$('#tituloUsina').html("Energia de Biomassa");
				break;	
		}
	}
	

	  
	function restoreScene2() {
		loadScene();
		showFixedImages();
		$('#imagemEngenheiro2').show();
		$('#mensagem').show(); 
		$("body").css("background-color", "white");

	}
	  
	  
	  
	  
	  
	  
	  /*Scene 3 */
	  
	  function showImposto(imposto) {
		  $("#containerImposto").show();
		  
		  switch (imposto) {
			case 'icms':
				$("#containerImposto").css("background-color", "#654E44");
				$("#containerImposto").html("Poderá levar até 30% do valor consumido, este imposto é cobrado referente a circulação de mercadorias (eletrodomésticos, alimentos, cosméticos e outras mercadorias relacionadas ao segmentos) e prestação de serviços de transporte interestadual e intermunicipal e comunicação.");
				break;
			
			case 'tusd':
				$("#containerImposto").css("background-color", "#5E35B1");
				$("#containerImposto").html("Tarifa de Uso do Sistema de Distribuição, que remunera instalações, equipamentos e componentes da rede de distribuição para levar a energia até as casas (Imposto estabelecido pela ANEEL, dando poder para as concessionarias cobrarem de seus clientes sobre a conta de energia");
				break;	
				
			case 'cofins':
				$("#containerImposto").css("background-color", "#D26F4C");
				$("#containerImposto").html("Contribuição Social para Financiamento da Seguridade Social, destinada a financiar as despesas das áreas de Saúde, Previdência, e Assistência social. COFINS leva 4.45% do valor de sua fatura");
				break;
			
			case 'cip':
				$("#containerImposto").css("background-color", "#7CB342");
				$("#containerImposto").html("Contribuição de Iluminação Pública, é uma taxa cobrada baseada no custo total do serviço/manutenção do sistema de iluminação pública");
				break;
				
			case 'pispasep':
				$("#containerImposto").css("background-color", "#09AFC3");
				$("#containerImposto").html("Programas de Integração Social e de Formação do Patrimônio do Servidor Público, tem como finalidade o financiamento do programa do Seguro-Desemprego e o abono aos empregados que recebem até dois salários mínimos mensais. De forma geral, o contribuinte acaba pagando no PIS a alíquota de 0.95% do valor de consumo da energia elétrica.");
				break;
			
			case 'tust':
				$("#containerImposto").css("background-color", "#880E4F");
				$("#containerImposto").html("Tarifa de Uso do Sistema de Transmissão, que remunera instalações, equipamentos e componentes da rede de transmissão. (Imposto estabelecido pela Agência Nacional de Energia Elétrica, dando poder para as concessionárias cobraram de seus clientes sobre a conta de energia)");
				break;				
				}
	  
	  
	  }
	  
	  
	  
	  
	  /* Funções Gerais */
	  	
	async function nextScene() {
		if (scene == 332189123) {
		
		}
		else {
			unloadScene();
			scene++;
			await sleep(fadeTime);
			loadScene();
		}
	}
	
	
	async function previousScene() {
		if (scene == 1) {
			
		}
		else {
			unloadScene();
			scene--;
			await sleep(fadeTime);
			loadScene();
		}
	}
	
	  
	  function loadScene() {
		  
			switch (scene) {
				case 1:
					$("#scene1").fadeIn(fadeTime);
					$("#scene1Text1").html("Olá " + nome + "! Eu sou o engenheiro Euler, estou aqui para auxiliá-lo neste percurso de aprendizado, a partir da matemática iremos conhecer os modos de geração de energia elétrica, o caminho e o custo até chegar à sua casa.");
					break;
					
				case 2:
					$("#scene2").fadeIn(fadeTime);
					$('#detalhesUsinas').hide();
					$('#additionalScene2').show();

					break;
					
				case 3:
					$("#scene3").fadeIn(fadeTime);
					$("#containerImposto").hide();
			}
	  }
	  
	  
	  
	  
	  function unloadScene() {
		  
			switch (scene) {
				case 0:
					$("#scene0").fadeOut(fadeTime);
					break;
					
				case 1:
					$("#scene1").fadeOut(fadeTime);
					break;
				
				case 2:
					$("#scene2").fadeOut(fadeTime);
					break;
					
				case 3:
					$("#scene3").fadeOut(fadeTime);
					break;
			}
	  }
	 
	  