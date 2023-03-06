//strings

///////Formas de usar aspas
let string1 ="um texto";
let string2 = "um \"texto\"";//usando as duplas dentro de aspas duplas
let string3 ="um 'texto'";//usanso aspas simples dentro de aspas duplas

console.log(string1);
console.log(string2);
console.log(string3);

///////formas de usar a barra
let string4 = "texto \com barra";//dessa forma a barra invertida não aparece
let string5 = "texto com \\barra" //assim a barra aparece

console.log(string4);
console.log(string5);

///////imprimindo um indice da string
//             01234567
let string6 = "um texto";
console.log(string6);//imprimindo a string normalmente
console.log(string6[4]);//imprimindo o indice 4 da string, que nessa caso é a letra "e"
console.log(string6.charAt(5));//imprimindo o indice pela função


///////Concatenando as strings
console.log(string6.concat(" em um lindo dia."));
console.log(string6 + " em um lindo dia.");
console.log(`${string6} em um lindo dia.`)


///////descobrindo o indice que começa uma palavra
console.log(string6.indexOf("texto"));
console.log(string6.indexOf("Texto"));//não achou e retornou -1

console.log(string6.lastIndexOf("texto"));

///////Substituindo palavras ou letras
console.log(string6.replace("um", "outro"));//altero a palavra "um" pela palavra "outro"
let string7 = "o rato roeu a roupa do rei de roma."
console.log(string7.replace("r","#"));//substituiu apenas o primeiro "r" 
console.log(string7.replace(/r/g, "#"));//substituiu todos os "r" nas string

///////descobrindo o tamanho da string
console.log(string7.length);
let num1 = string7.length;
console.log(num1);

///////imprimindo um pedaço da string usando os indice
console.log(string7.slice(2,6));

///////Dividindo a string e transformando e arrays
console.log(string7.split(""));//dividindo a string cada vez que tem espaço
console.log(string7.split("r", 2));//dividindo a string cada vez que tem r e tem o limite maximo