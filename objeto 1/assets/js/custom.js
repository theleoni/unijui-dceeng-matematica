  var nome;
  var i = -11.4;
  var scene = 0;
  
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
			moveImageScene1();
		}
	}
	
	
	
	
	
	
	
	
	/* SCENE 1 */
	
	function moveImageScene1() {
		if (i < 1.1) {	  
			$('.imagemPlaneta').css('right',i + '%');;  
			i+= 0.125;
		}
		else {
			showFixedImages();
			nextScene();
			return false;
		}
		
		setTimeout(function(){moveImageScene1();},20);
	}
	
		function showFixedImages() {
		$("#imagensFixas").show();
	}
	
		function hideFixedImages() {
			$("#imagensFixas").hide();
		}
	
	
	
	
	
	
	
	
	
	/* SCENE 2 */
	
	function moveImageScene2() {
		if (i > -30) {	  
			$('.imagemPlaneta').css('right',i + '%');;  
			if (i > -18) {
				$('.imagemEngenheiro').css('right',(i + 23.7) + '%');;  
				i-= 0.175;
			} else {
				i-= 0.5;}
		}
		else {
			$('#additionalScene2').show();
			return false;
		}
		
		setTimeout(function(){moveImageScene2();},20);
	}
	
	function showMoreInfo(usina) {
		$("body").css("background-color", "gray");
		$('#detalhesUsinas').show();
	 	$('#additionalScene2').hide();
		$('#mensagem').hide(); 
		$('#imagemEngenheiro2').hide();
		hideFixedImages();
		switch (usina) {
			case 'hidreletrica': 
				$('#imgUsina').attr("src", "assets/img/hidreletrica.png");
				$('#textoUsina').html("Energia gerada pela água em usinas Hidrelétricas. A energia contida nas correntezas de rios é transformada em energia cinética que movimenta uma turbina, movendo um gerador que por sua vez irá gerar energia elétrica");
				$('#tituloUsina').html("Energia Hídrica");

				break;
			case 'eolica':
				$('#imgUsina').attr("src", "assets/img/eolica.png");
				$('#textoUsina').html("É a energia gerada pelo vento, grandes turibinas são posicionadas em locais abertos e com grande quantidade de vento. O vento, ao mover as turbinas gera energia elétrica através de um gerador.");
				$('#tituloUsina').html("Energia Eólica");
				break;
			case 'fossil':
				$('#imgUsina').attr("src", "assets/img/fossil.png");
				$('#textoUsina').html("Energia gerada através de reações químicas de combustão de materiais orgânicos decompostos, quando as ligações químicas dos hidrocarbonetos são quebradas, a energia é liberada");
				$('#tituloUsina').html("Energia Fóssil");
				break;
			case 'nuclear':
				$('#imgUsina').attr("src", "assets/img/nuclear.png");
				$('#textoUsina').html("Utiliza a energia proveniente de reações de fissão nuclear para gerar energia. A fissão nuclear libera grande quantidade de calor que aquece a água e produz o vapor responsável por movimentar as turbinas do gerador em grandes velocidades, gerando a corrente elétrica.");
				$('#tituloUsina').html("Energia Nuclear");
				break;
			case 'solar':
				$('#imgUsina').attr("src", "assets/img/solar.png");
				$('#textoUsina').html("É a energia irradiada pelo sol. Pode ser utilizada para geração de calor, ou pode ser convertida em energia elétrica através de células fotovoltaicas");
				$('#tituloUsina').html("Energia Solar");
				break;	
			case 'biomassa':
				$('#imgUsina').attr("src", "assets/img/biomassa.png");
				$('#textoUsina').html("Gerada através da decomposição de materiais orgânicos (esterco, resto de alimentos). É transformada em energia por meio de combustão, gaseificação e fermentação");
				$('#tituloUsina').html("Energia de Biomassa");
				break;	
		}
	}
	

	  
	function restoreScene2() {
		loadScene('2');
		showFixedImages();
		$('#mensagem').show(); 
		$('#imagemEngenheiro2').show();
		$("body").css("background-color", "white");

	}
	  
	  
	  
	  
	  
	  
	  /*Scene 3 */
	  
	  function showImposto(imposto) {
		  $("#containerImposto").show();
		  
		  switch (imposto) {
			case 'icms':
				$("#containerImposto").css("background-color", "#654E44");
				break;
			
			case 'tusd':
				$("#containerImposto").css("background-color", "#5E35B1");
				break;	
				
			case 'cofins':
				$("#containerImposto").css("background-color", "#D26F4C");
				break;
			
			case 'cip':
				$("#containerImposto").css("background-color", "#7CB342");
				break;
				
			case 'pispasep':
				$("#containerImposto").css("background-color", "#09AFC3");
				break;
			
			case 'tust':
				$("#containerImposto").css("background-color", "#880E4F");
				break;				
				}
	  
	  
	  }
	  
	  
	  
	  
	  /* Funções Gerais */
	  	
	function nextScene() {
		if (scene == 332189123) {
		
		}
		else {
			unloadScene();
			scene++;
			loadScene();
		}
	}
	
	
	function previousScene() {
		if (scene == 1) {
			
		}
		else {
			unloadScene();
			scene--;
			loadScene();
		}
	}
	
	  
	  function loadScene() {
		  
			switch (scene) {
				case 1:
					$("#scene1").show();
					$('.imagemPlaneta').css('right',1.1 + '%');; 
					$('.imagemEngenheiro').css('right',24.8 + '%');;  
					

					$("#scene1Text1").html("Olá " + nome + "! Eu sou o engenheiro Euler, estou aqui para auxiliá-lo neste percurso de aprendizado, a partir da matemática iremos conhecer os modos de geração de energia elétrica, o caminho e o custo até chegar à sua casa.");
					break;
					
				case 2:
					$("#scene2").show();
					$('#additionalScene2').hide();

					$('.imagemPlaneta').css('right',-30 + '%');; 
					$('.imagemEngenheiro').css('right',5.85 + '%');; 
					moveImageScene2();
					$('#detalhesUsinas').hide();
					break;
					
				case 3:
					$("#scene3").show();
					$("#containerImposto").hide();
			}
	  }
	  
	  
	  
	  
	  function unloadScene() {
		  
			switch (scene) {
				case 0:
					$("#scene0").hide();
					break;
					
				case 1:
					$("#scene1").hide();
					break;
				
				case 2:
					$("#scene2").hide();
					break;
					
				case 3:
					$("#scene3").hide();
					break;
			}
	  }
	 
	  