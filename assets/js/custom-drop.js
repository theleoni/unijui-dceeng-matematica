  /* Fecha o menu ao tirar ao remover o mouse do mesmo */
  function fecharCustomDropLost(div) {
    div.classList.remove('show-custom-drop');
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
  }

  function abrirCustomDrop(div) {
    document.title = 'Abacate';
    fecharCustomDrop();
    div.classList.toggle("show-custom-drop");
  }

/* Fecha o custom-drop se o usuario clicar fora dele */
  window.onclick = function(event) {
    if (!event.target.matches('.custom-drop-btn')) {
      fecharCustomDrop();
    }
}
