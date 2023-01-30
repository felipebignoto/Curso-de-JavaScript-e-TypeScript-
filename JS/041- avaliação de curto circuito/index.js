/*

&& -> false && true -> false "o valor mesmo"
|| -> false || true -> true "o valor mesmo"

valores Falsy:false, 0," ",null, undefined, NaN
*/

//And - retorna o primeiro valor falsy
console.log("Felipe" && 0 && NaN);
console.log("Felipe" && true && NaN);

//Or - retorna o primeiro valor verdadeiro
console.log(0 || false || null || "Felipe" || true);
console.log(0 || false || null || "" || true);

