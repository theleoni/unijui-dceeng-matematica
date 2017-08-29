let loginVideo = document.querySelector('#login-video');
let loginConfirmacao = document.querySelector('#login-confirmacao');
let buttonConfirmacao = document.querySelector("#button-confirmacao");

let source = document.createElement('source');
source.setAttribute('src', 'assets/video/login-1.mp4');
loginVideo.appendChild(source);
loginVideo.play();

let buttonClickado = false;
let finalizadoZoom = false;
let finalizado = false;

buttonConfirmacao.addEventListener("click", function() {
	if (!(loginConfirmacao.value === '')) {
		buttonClickado = true;

		$("#login-confirmacao").fadeOut();
		$("#button-confirmacao").fadeOut();

		var nomePessoa = loginConfirmacao.value;
	}
});

loginVideo.addEventListener("ended", function() {
	if (finalizado) {
		$(".scr-login").hide();
		$(".scr-primeiro").show();
	} else {

		if (buttonClickado) {
			if (!finalizadoZoom) {
				finalizadoZoom = true;
				source.setAttribute('src', 'assets/video/login-2.mp4');
			} else {
				finalizado = true;
				source.setAttribute('src', 'assets/video/login-3.mp4');
			}
			loginVideo.load();
		}

		loginVideo.play();
	}
});
