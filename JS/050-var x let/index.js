/*
let nãopode ser redeclarada
var pode ser redeclarada

let tem escopo de bloco
var so tem escopo de função
*/

const verdadeira  = true;
let nome = "Felipe";//criando a primeira variavel com o valor de nome
var nome2 = "Felipe2";

if(verdadeira){
    let nome ="Bignoto";//criando outra variavel tambem com o valor de nome
    var nome2 = "Bignoto2";//redeclarando
    console.log(nome,nome2);

    if(verdadeira){
        let nome ="Palacio";//criando outra variavel tambem com o valor de nome
        var nome2 = "Palacio2";//redeclarando
        console.log(nome,nome2);

    }
    console.log(nome,nome2);
    
}console.log(nome,nome2);