//criando objeto "manualmente"
const nome01 = "Felipe";
const sobrenome01 = "Bignoto";
const idade01 = 19;

const nome02 = "João";
const sobrenome02 = "Silva";
const idade02 = 80;

//criando objetos
const pessoa1 = {
    nome: "Eduardo",
    sobrenome: "Costa",
    idade: 30
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//Ainda continua sendo um pouco grande para criar de mais pessoas, então podemos usar funções
function criaPessoa(nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criaPessoa("Felipe", "Bignoto", 19);
const pessoa3 = criaPessoa("Thiago", "Costa", 20);
const pessoa4 = criaPessoa("Arthur", "Silva", 21);

console.log(pessoa2);
console.log(pessoa2.nome);

//outra forma
const pessoa5 = {
    nome : "luiz",
    sobrenome: "Silva",
    idade: 25,

    fala(){
        console.log("olá mundo");
    },

    falaa(){
        console.log(`${this.nome}`)
    }
}

pessoa5.fala();
pessoa5.falaa();