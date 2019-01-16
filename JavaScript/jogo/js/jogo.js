var altura = 0;
var largura = 0;
var vida = 1;
var tempo = 15;

function ajustaPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;

}

function iniciaJogo() {
    var nivel = document.getElementById('nivel').value

    if(nivel === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel

}
ajustaPalco();
console.log(altura, largura)