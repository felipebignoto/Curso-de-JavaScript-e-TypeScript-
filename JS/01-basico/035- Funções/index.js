//Criando uma função
//function + nome + () + {corpo}
//para chamar a função é so utulizar o nome da função + ()
//função pode ou não retornar algum valor

function saudacao(nome){
    return `Boa noite ${nome}!`;
}

saudacao("Felipe");
saudacao("Maria");

const variavel = saudacao("Joao");
console.log(variavel);


function soma(x,y){
    const resultado = x+y;
    return resultado;
}

console.log(soma(1,2));
console.log(soma(10,2));

const resultado = soma(2,2);//essa constante é diferente da constante resultado na função
console.log(resultado);

//posso estabelecer os parâmetros da função caso não sejam passados
function soma2(x=1,y=2){
    const resultado = x+y;
    return resultado;
}
console.log(soma2(1,2));
console.log(soma2(10));

//outras formas de criar funções
const raiz = function(n){
    return n**0.5;
};
console.log(raiz(9)); 

//mais uma forma de criar function
const raiz2 =(n) =>{
    return n**0.5;
};
/*Para deixar o codigo menor podemos esrever essa mesma função da forma
    const raiz2 =n => n**0.5;
*/
console.log(raiz2(16)); 