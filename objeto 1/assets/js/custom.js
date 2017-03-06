  var nome;
  var i = -11.4;
  var scene = 0;
  
  $( document ).ready(function() {
		$("#alertNome").hide();
		$("#scene1").hide();
		$("#scene2").hide();
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
	
	function showMoreInfo() {
		$("body").css("background-color", "gray");
		$('#scene2Sub1').show();
		
	}
	

	  
	  
	  
	  
	  
	  
	  
	  
	  	
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
					$('#scene2Sub1').hide();

				break;
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
					$("#scene2").hide();
					break;
			}
	  }
	 
	  