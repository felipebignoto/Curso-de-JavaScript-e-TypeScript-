//em milesimos de segundo
//

const data = new Date();//hora atual
console.log(data.toString());

const data2 = new Date(2023,1,22,14,25,36);//hora especifica
console.log(data2.toString());

const data3 = new Date(0);//milesimos de segundo inicando do zero = 01/01/1970
console.log(data3.toString());

console.log("Dia", data.getDate());
console.log("mes", data.getMonth());//começa no zero
console.log("ano", data.getFullYear());
console.log("hora", data.getHours());
console.log("min", data.getMinutes());
console.log("seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("dia semana", data.getDay());//0 é domingo e 6 é sabado
console.log(data.toString());
