/*
entre 0-11 - bom dia
entre 12-17 - boa tarde
entre 18-23 - boa noite
*/

const hora = 56;

if(hora < 12 && hora>=0){
    console.log("Bom dia!");
}

else{
    if(hora>=12 && hora<18){
        console.log("Boa tarde!");
    }

    else if(hora<=23){
        console.log("Boa noite!");
    }

    else{
        console.log("Olá!");
    }
}




