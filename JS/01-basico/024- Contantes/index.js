/* Regras para criar constantes
- não pode ser com palavras reservadas
- nomes significativos
- o  nome da contante não pode começar com número
- o  nome da constante não pode conter espaços e traços( utilizaAssim)
- Case-sensitive = letras maiusculas e minusculas são diferentes
- Não podemos modificar o valor
- utilize const
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

let resultado2 = resultado;
resultado2 = resultado2 *2;//como é variavel posso alterar o valor
console.log(resultado2);

//Para saber o tipo da variavel
console.log(typeof resultado);

//concatenar string por meio do sinal de +
const  teste1 = "5";
const teste2 = "20";
console.log(teste1 + teste2);
