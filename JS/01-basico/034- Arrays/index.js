//arrays pode ser visto como uma lista
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);

//arrays são indexados por elemento, nesse caso. Luiz = 0, Maria = 1 e assim por diante
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Editar um valor do aray
alunos[0] = "Eduardo";
console.log(alunos);

//criando mais um elemento no aray
alunos[3] = "Luiza";
console.log(alunos);

//descobrindo o tamanho do array
console.log("tamanho do array:",alunos.length);

//adicionando automaticamente um elemento no fim do array
alunos.push("Felipe");
console.log(alunos);

//adicionando automaticamente um elemento no inicio do array
alunos.unshift("Fabio");
console.log(alunos);

//removendo o ultimo elemento
const removido = alunos.pop();//posso salvar o elemento removido
console.log("O elemento removido foi:",removido);
console.log(alunos);

//removendo o primeiro elemento
const removido2 = alunos.shift();//posso salvar o elemento removido
console.log("O elemento removido foi:",removido2);
console.log(alunos);

//removendo um elemento sem alterar os indice
delete alunos[1];
console.log("Excluindo o segundo elemento:",alunos);

//Pegando parte do array
console.log(alunos.slice(0,3));

//verificando se é um array
console.log("Alunos é um tipo de array: ",alunos instanceof Array);