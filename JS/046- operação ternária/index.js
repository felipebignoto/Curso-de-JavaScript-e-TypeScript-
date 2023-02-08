const pontuacaoUsuario = 999;

if(pontuacaoUsuario >= 1000){
    console.log("Usuario vip");
}else{
    onslotchange.log("usuario normal");
}

//operação ternaria, igual ao codigo de cima
// (condição) ? "valor para verdadeiro" : "valor para falso";
const nivelUsuario = pontuacaoUsuario >= 1000 ?"usuario vip" : "usuario normal";

//outra forma de diminuir o codigo
const corUsuario = null;
const corPadrao = corUsuario || "preta";