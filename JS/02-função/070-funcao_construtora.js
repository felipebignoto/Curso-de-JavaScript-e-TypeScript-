//função construtora -> cria novo objeto, faz muita coisa automatica, retorna objeto
//iniciar com letra maiuscula

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log("Sou um metodo " + this.nome);
    }

    //atributos privados
    const ID = 123;
    const metodoInterno = function(){

    };
}

const p1 = new Pessoa("Felipe", "Bignoto");
const p2 = new Pessoa("Jorge","Silva");
console.log(p1);
console.log(p2.sobrenome);
p1.metodo();