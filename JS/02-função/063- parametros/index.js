//arguments
function funcao(){

    console.log("oi");
    console.log(arguments);
    console.log(arguments[0]);
}
funcao("valor",1,2,3);

console.log(" ");

//aplicação do arguments
function funcao2(){
    let total =0;
    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}
funcao2(1,2,3,4,5,6,7,8,9);

console.log(" ");

//so passando uma parametro
function funcao3(a,b){
    console.log(a+b);
    b = b || 0;
    console.log(a+b);
}
funcao3(2);

console.log(" ");

//outra forma de inicializar um valor padrao
function funcao4(a,b=3){
    console.log(a+b);
}
funcao4(2);