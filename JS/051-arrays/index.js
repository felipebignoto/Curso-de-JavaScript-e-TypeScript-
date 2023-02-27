//atribuição via desestruturação - exercicio antigo

const numeros = [1,2,3];
[a,b,c] = numeros;
 console.log(a,b,c);

//novo
const numeros2 = [1,2,3,4,5,6,7,8,9];//indices de 0 a 8
console.log("primeiro numero: ",numeros2[0]);

const terceiroNumero = numeros2[2];
console.log("terceiro numero: ",terceiroNumero);

const [primeiroNumero, segundoNumero, ...resto] = numeros2;
console.log("atribuição por desestruturação: ",primeiroNumero,segundoNumero);
console.log("resto: ",resto);
//é posivel pular valores colocando espaço entre as virgulas(1,3,5,7)
//vetor dentro de vetor = matriz -> vetor[x][y]