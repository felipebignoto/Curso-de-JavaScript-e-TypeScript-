const data = new Date();
const diaSemana = data.getDay();

console.log(diaSemana);//para o usuario pode ficar meio confuso ler o dia da semana com um numero de 0-6

//poderia fazer alguns if e else if para relacionar os numeros com o dia da semana

switch(diaSemana){
    case 0: console.log("domingo");
        break;
    case 1: console.log("segunda");
        break;
    case 2: console.log("terça");
        break;
    case 3: console.log("quarta");
     break;
    case 4: console.log("quinta");
        break;
    default: console.log("erro");
        break;
}