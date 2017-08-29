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
		setInterval(animBox, 800);
		var nomePessoa = loginConfirmacao.value;
	}
});

loginVideo.addEventListener("ended", function() {

	if (!finalizado && buttonClickado) {
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
});

let animAux = 1.0;
function animBox() {
	if(animAux == 0){
		clearInterval();
	} else {
		animAux -= 0.1;
		loginConfirmacao.style.opacity = animAux;
		buttonConfirmacao.style.opacity = animAux;
	}
}
