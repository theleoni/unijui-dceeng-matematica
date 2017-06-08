  /* Fecha o menu ao perder o foco */
  function fecharCustomDropLost(div) {
fecharCustomDrop();
  }

  function fecharCustomDrop() {
    /* Fecha os demais menus abertos */
    var customDrops = document.getElementsByClassName("custom-drop-content");
    var i;
    for (i = 0; i < customDrops.length; i++) {
    var openCustomDrop = customDrops[i];
      if (openCustomDrop.classList.contains('show-custom-drop')) {
        openCustomDrop.classList.remove('show-custom-drop');
      }
    }
	
	document.getElementById('thumb-par-1').style.backgroundColor = null;
	document.getElementById('thumb-par-2').style.backgroundColor = null;
	document.getElementById('thumb-impar-1').style.backgroundColor = null;
	document.getElementById('thumb-impar-2').style.backgroundColor = null;


	
	
  }
	/* Abre o menu, e fecha os demais que estão abertos através da função fecharCustomDrop() */
  function abrirCustomDrop(original, div) {
    fecharCustomDrop();
    div.classList.toggle("show-custom-drop");
	
	if (div.classList.contains("custom-drop-content-par")) {
		original.style.backgroundColor = '#008FB2';
	}
	else {
		original.style.backgroundColor = '#FF6B00';
	}
  }

/* Fecha o custom-drop se o usuario clicar fora dele */
  window.onclick = function(event) {
    if (!event.target.matches('.custom-drop-btn')) {
      fecharCustomDrop();
    }
}

function changeButtonColor(div) {
	if(div.classList.contains("thumb-impar")) {
	div.style.backgroundColor = '#FF6B00';
	}
	else {
	div.style.backgroundColor = '#008FB2';
	}
}

function removeButtonColor(div) {
		div.style.backgroundColor = null;

}
