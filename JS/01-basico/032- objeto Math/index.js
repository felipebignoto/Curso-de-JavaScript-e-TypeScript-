//objeto ja presente na linguagem (Math)

//Arredondamento
let num1 = 9.54578
let num2 = Math.floor(num1);//arredondei para um valor menor
let num3 = Math.ceil(num1);//arredondei para um valor maior
let num4 = Math.round(num1);
console.log("Arredondado para um valor menor:",num2);
console.log("Número arredondado para um valor maior:",num3);
console.log("Número arredondado para um valor mais próximo:",num4);

//Acho o maior ou menor valor da sequencia
console.log("Maior valor da sequência:",Math.max(1,2,6,9,-10,-900,1500));
console.log("Menor valor da sequência:",Math.min(1,2,6,9,-10,-900,1500));

//Gerando números aleatórios
console.log("Número aleatório:",Math.random());
console.log("Número aleatório dentro de um intervalo:",Math.random() * (10 - 5) + 5);

//Valor de Pi
console.log("Valor de PI:", Math.PI);

//Potencia
console.log("Valor de 2 elevado a 10:", Math.pow(2,10));
console.log("Valor de 2 elevado a 10:",2**10);

//Radiciação
console.log("raiz quadrada de 9:",9**0.5);

//Tipo de dados Infinito
console.log(100/0);