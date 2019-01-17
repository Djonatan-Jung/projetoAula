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

var cronometro = setInterval(function(){

    tempo -= 1;

    if (tempo < 0){

        clearInterval(cronometro);

        clearInterval(criaMosca);

        window.location.href= 'vitoria.html';
    
    }else{

        document.getElementById('cronometro').innerHTML = tempo;

    }

}, 1000);

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

function posicaoRandomica(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vida > 3){
            window.location.href = "fim_de_jogo";
        }else{
            document.getElementById('v' + vida).src = '../imagens.coracao_vazio.png';

            vida ++;
        }
    }


    var posicaoX = Math.floor(Math.random() * altura) - 90
    var posicaoY = Math.floor(Math.random() * largura) -90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY



    //cria elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = '../imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito);

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);
    switch(classe){
        case 0:
            return 'ladoA' ;
        case 1:
            return 'ladoB';
    }

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}


//ajusta cronometro e cria mosca
function app (){
    document.getElementById('cronometro').innerHTML = tempo;

        var criaMosca = setInterval(function() { 
            posicaoRandomica();
        }, criaMosquitoTempo);
};