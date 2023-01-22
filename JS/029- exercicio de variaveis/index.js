let varA = 'A'; 
let varB = 'B'; 
let varC = 'C'; 

//exercicio quer que varA = B, varB = C e varC = A

const aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);




