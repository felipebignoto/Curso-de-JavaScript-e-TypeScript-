const pessoa ={
    nome: "Felipe",
    sobrenome: "Bignoto",
    idade: 20,
    endereco:{
        rua: "Av Brasil",
        numero: 50
    }
};
//atribuição normal
console.log(pessoa.nome);

//atribuição via desestruturação
const {nome,sobrenome,idade,endereco} = pessoa;
console.log(nome,sobrenome,idade);
console.log(endereco);

const {endereco: {rua,numero}} = pessoa;
console.log(rua);
console.log(numero);