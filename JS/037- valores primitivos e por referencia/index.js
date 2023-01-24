/*
Primitivos (imutaveis): string, number, boolean, undefind, null, bigint, symbol

Referencia (mutavel): arrays, object, function
*/

//Exemplo de primitivos imutaveis
let A = "A";
let B = A;
console.log(A,B);
A = "AA";//so alterou o valor de A
console.log(A,B);

//exemplo de valor por referencia mutaveis
let a = [1,2,3];
let b = a;
console.log(a,b);
a.push(4);//alterou os dois arrays
console.log(a,b);
b.pop();//alterou a e b
console.log(a,b);
