//IIFE -> imediately invoked function expression

function qualquerCoisa(){
    console.log("olá ");
}

qualquerCoisa();

//funcao anonima, escopo separado, não interfero no global
(function(){
    const nome ="Felipe";
})();

const nome = "Bignoto";
