var parts;
function carregarJSON(callback) {

    var xobj = new XMLHttpRequest();
    // xobj.overrideMimeType("assets/json/");
    xobj.open('GET', 'assets/json/parts.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            callback(xobj.responseText);

        } else {
			// carregarJSON(callback);
			// console.log("Não foi possível carregar as partes adicionais...");
		}
    }
    xobj.send();

}

carregarJSON(function(response) {
    parts = JSON.parse(response);
	// console.log(parts);
});

function selecionarParte(parte) {
	console.log(parts.a[0].html);
}
