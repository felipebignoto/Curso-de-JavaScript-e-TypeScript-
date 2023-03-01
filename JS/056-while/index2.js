const numeros = [1,2,3,4,5,6,7,8,9];

//imprime toda a sequencia
for(let numero of numeros){
    console.log(numero);
}

console.log(" ");

//quadno encontra o 2 ele pula o restante e continua o for, ou seja, não imprime o 2
for(let numero of numeros){
    
    if(numero === 2){
        continue;
    }


    console.log(numero);
}
console.log(" ");
// quando encontra o 2 sai do for
for(let numero of numeros){
    
    if(numero === 2){
        break;
    }


    console.log(numero);
}