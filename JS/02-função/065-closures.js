function retornaFuncao(){
    const nome = "Felipe";
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);