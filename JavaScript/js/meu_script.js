var nome = prompt("Infomer seu nome: ");
var altura = prompt("Informe sua alutra em cm: ");
var peso = prompt("Informe seu peso em KG: ")

altura = parseFloat(altura)
altura = altura/100;

var IMC = peso / (altura *altura);
IMC = parseFloat(IMC);

var categoria;

if  (IMC < 16){
    categoria = 'Baixo peso muito grave'
}else if(IMC >= 16 && IMC < 17){
    categoria = 'Baixo peso grave'
}else if (IMC >= 17 && IMC < 18,5){
    categoria = 'Baixo peso'
}else if(IMC >= 18,5 && IMC < 25){
    categoria = 'Peso Normal'
}else if(IMC >= 25 && IMC < 30){
    categoria = 'Sobrepeso'
}else if(IMC >= 30 && IMC < 35){
    categoria = 'Obesidade de grau I'
}else if (IMC >= 35 && IMC < 40){
    categoria ='Obesidade de grau II'
}else if (IMC > 40){
    categoria = 'Obesidade de grau III'
}else{
    categoria = 'Provavelmente seu IMC é maior que 40 então você tem Obesidade de grau III'
}

document.write(nome + ' possui indíce de massa corporal igual a ' + IMC + ', sendo classificado como ' + categoria + '.')