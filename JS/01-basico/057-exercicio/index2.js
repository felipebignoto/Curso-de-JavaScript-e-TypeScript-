//Escreva uma função chamada ePaisagem que recebe 2 argumentos(largura e altura) de uma imagem e retorne True se a imagem estiver no modo paisagem

function ePaisagem(largura,altura){
    return largura>altura ? true: false;
}

console.log(ePaisagem(10,15));