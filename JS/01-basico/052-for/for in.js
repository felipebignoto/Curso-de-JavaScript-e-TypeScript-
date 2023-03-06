const frutas =['pera','maça','uva'];

//for clássico
for(let i=0; i< frutas.length; i++){
    console.log(frutas[i]);
}
console.log(" ");

//for in -> lê os indices do objeto
for(let indice in frutas){
    console.log(frutas[indice]);
}

console.log(" ");
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Bignoto',
    idade: 20
};

for(let j in pessoa){
    console.log(j);
}

console.log(" ");
for(let k in pessoa){
    console.log(pessoa[k]);
}