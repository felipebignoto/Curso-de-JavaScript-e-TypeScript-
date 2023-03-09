//declaração de função -> function hoisting = a declaração vai para o inicio do codigo -> posso chamar a função antes de declarar
falaOi();
function falaOi(){
    console.log("Oi!");
}

//first-class objects(objetos de primeira classe) = função
//function expression
const souUmDado = function(){
    console.log("Sou um dado.");
};

souUmDado();

function executaFuncao(funcao){
    funcao();
}