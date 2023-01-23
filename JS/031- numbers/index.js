//Adição e concatenação
let num1 = 1;
let num2  = 2.5;
let num3 = 300;
console.log(num1 + num2)//adição numérica
console.log(num1.toString() + num2.toString());//concatenação de string
num3 = num3.toString(); //alterei o tipo de num3, agora é uma string

//transformo em binário
let num4 = 1500;
console.log(num4.toString(2));

//arredondamento indicando o numero de casas decimais
let num5 = 2.6547892;
console.log(num5);
console.log(num5.toFixed(2));

//verificando se o número é inteiro
let num6 = 10;
let num7 = 5.5;
console.log(Number.isInteger(num6));
console.log(Number.isInteger(num7));

//verificando se uma variavel é um número(false) ou não(true), na verdade verifica se é NaN
let num8 = 2;
let temp = num8 * "Ola";
console.log(temp);
console.log(Number.isNaN(temp));

//Precisão
let num9 = 0.7;
let num10 = 0.1;
console.log(num9 + num10);//o valor é aproximado
num9 += num10;//0.8
num9 += num10;//0.9
num9 += num10;//1.0
console.log(num9); //valor aproximado de 1.0
num9 = num9.toFixed(2);
console.log(num9);//arredondei o valor
console.log("Depois de arredondar: ",Number.isInteger(num9));//mesmo assim ainda não é visto como um valor inteiro

num9 = parseFloat(num9);
console.log("Depois de transformar em float: ",Number.isInteger(num9));