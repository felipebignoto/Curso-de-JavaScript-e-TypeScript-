//Escereva uma função que recebe 2 números e retorne i maior deles

var a = 1;
var b = 2;

function maior(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
    /*Outra forma
    return x>y ? x : y;
    */
}

console.log(maior(a,b));