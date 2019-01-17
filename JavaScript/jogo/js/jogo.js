var altura = 0;
var largura = 0;
var vida = 1;
var tempo = 15;

var nivel = window.location.search;
nivel = nivel.replace('?', '')
var criaMosquitoTempo = 1500;

//bloco que define o tempo de criação do elemento apartir do nivel escolhido
if(nivel === 'facil'){

    criaMosquitoTempo = 1500;

}else if(nivel === 'normal'){

    criaMosquitoTempo = 900;

}else if(nivel === 'dificil'){

    criaMosquitoTempo = 350;
    
}

//ajusta tamanhos do palco
function ajustaPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
};

ajustaPalco();

//Inicia o Jogo
function iniciaJogo() {
    var nivel = document.getElementById('nivel').value;

    if(nivel === '') {
        alert('Selecione um nível para iniciar o jogo');
        return false;
    };

    window.location.href = "app.html?" + nivel;

};

var posicaoX = Math.floor(Math.random() * altura) - 90;
var posicaoY = Math.floor(Math.random() * largura) -90;
posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;



//ajusta cronometro e cria mosca
function app (){
    document.getElementById('cronometro').innerHTML = tempo;

        var criaMosca = setInterval(function() { 
            posicaoRandomica()
        }, criaMosquitoTempo);
};

//cria elemento HTML
var mosquito = document.createElement('img');
mosquito.src = '../imagens/mosca.png';

mosquito.style.left = posicaoX + 'px';
mosquito.style.top = posicaoY + 'px';
mosquito.style.position = 'absolute';
mosquito.id = 'mosquito';
mosquito.onclick = function(){
    this.remove();
};

document.body.appendChild(mosquito);

