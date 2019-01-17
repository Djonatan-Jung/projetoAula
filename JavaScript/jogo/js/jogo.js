var altura = 0;
var largura = 0;
var vida = 1;
var tempo = 15;

//ajusta tamanhos do palco
function ajustaPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;

}

//Inicia o Jogo
function iniciaJogo() {
    var nivel = document.getElementById('nivel').value

    if(nivel === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel

}
ajustaPalco();

var posicaoX = Math.floor(Math.random() * altura);
var posicaoY = Math.floor(Math.random() * largura);

//ajusta cronometro e cria mosca
function app (){
    document.getElementById('cronometro').innerHTML = tempo;

        var criaMosca = setInterval(function() { 
            posicaoRandomica()
        }, criaMosquitoTempo);
};

//cria elemento HTML
var mosquito = document.createElement('img');
