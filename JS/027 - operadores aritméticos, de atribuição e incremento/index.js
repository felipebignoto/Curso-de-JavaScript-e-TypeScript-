/* Operadores  

1- + -> adição e concatenação
2- - -> subtrtação
3- / -> divisão
4- * -> multiplicação
5- ** ->potenciação
6- % -> resto da divisão
7- ++ -> soma mais um ao valor;
8- -- > subtrai um ao valor
9- ++ -> 
10- NaN -> not a number
11- parseInt("5") -> tranforma a variavel/constante para um numero inteiro
12- parseFloat("6.5") ->
13- Number("teste") -> transforma em numero

ordem = (), **, * ou /, + ou -
*/

//Adição
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);//soma os valores

const num3 ="5";
const num4 = "10";
console.log(num3 + num4);//junta as strings

//subtração
console.log(num1 - num2);

//multilicação
console.log(num1 * num2);

//divisão
console.log(num1 / num2);

//potenciaçção
console.log(10 ** 2);

//resto da divisão
console.log(9 % 2);

//incremento
let contador =1;
let passo = 5;
contador++;//contador = contador +1
++contador;//contador = contador +1
contador += passo;//contador = contador + passo
console.log(contador);

//convertendo strings para int
const num5 = 10;
const num6 = "5";
console.log(num5 + num6);//constantes foram usadas como strings
console.log(num5 + parseInt(num6));//alterei o tipo da contantes num6 para inteiro para realizar a adição dos valores