var loginVideo = document.querySelector('.scr-login video');

var source = document.createElement('source');
source.setAttribute('src', 'assets/video/login-1.mp4');
loginVideo.appendChild(source);
// loginVideo.play()

loginVideo.addEventListener('canplay', function() {
	loginVideo.play();
});

let loginButtonConfirmacao = document.querySelector("#login-button-confirmacao");
console.log(loginButtonConfirmacao);
loginButtonConfirmacao.addEventListener('click', function() {
	loginVideo.addEventListener('ended', function myHandler(e) {

		var source = document.createElement('source');
		source.setAttribute('src', 'assets/video/login-2.mp4');
		loginVideo.appendChild(source);
		loginVideo.play();

	}, false);
});
