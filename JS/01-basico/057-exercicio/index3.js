/*Escreva uma função que recebe um número e retorne o seguinte:
fiz se o numero for divisivel por 3 
buzz por 5
fizzbuzz por 3 e 5
retorna o numero se não for divisivel por nenhum dos dois
checar se o numero é realmente um numero(0-100)
*/

function divisivelPor3e5(numero){
    if((typeof numero) === "number"){

        if(numero % 5 == 0 && numero % 3 == 0) return "FizzBuzz";
        else if(numero % 5 != 0) return "Fizz";
        else if(numero % 3 != 0) return "Buzz";
    }
    else{
        return typeof numero;
    }
}

console.log(divisivelPor3e5("ddd"));
