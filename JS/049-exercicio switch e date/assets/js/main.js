const h1 = document.querySelector('.container h1')

const data = new Date();

let diaSemana = data.getDay();
let diaSemanaString;
switch(diaSemana){
    case 0: diaSemanaString = "domingo";
        break;
    case 1: diaSemanaString = "segunda";
        break;
    case 2: diaSemanaString = "terça";
        break;
    case 3: diaSemanaString = "quarta";
     break;
    case 4: diaSemanaString = "quinta";
        break;
    case 5: diaSemanaString = "sexta";
        break;
    case 6: diaSemanaString = "sabado";
        break;
    default: diaSemanaString = "null";
        break;
}

const dia = data.getDate() ;

const mes = data.getMonth();
let mesString;
switch(mes){
    case 0: mesString = "janeiro";
        break;
    case 1: mesString = "fevereiro";
        break;
    case 2: mesString = "março";
        break;
    case 3: mesString = "abril";
        break;
    case 4: mesString = "maio";
        break;
    case 5: mesString = "junho";
        break;    
    case 6: mesString = "julho";
        break;
    case 7: mesString = "agosto";
        break;
     case 8: mesString = "setembro";
        break;
    case 9: mesString = "outubro";
        break;
    case 10: mesString = "novembro";
        break;
    case 11: mesString = "dezembro";
        break;
        
}

const ano = data.getFullYear();
const hora = data.getHours();

let min = data.getMinutes();
if(min<10){
    min = "0" + min;
}

h1.innerHTML = `${diaSemanaString}-feira, ${dia} de ${mesString} de ${ano} ${hora}:${min}` ;


