//função fábrica ou factory functions -> retorna objetos

function criaPessoa(nome,sobrenome,p,a){
    return {nome,
        sobrenome,
        fala: function(assunto){//metodo -> exemplo calcula o imc assim qeu cria  uma pessoa
            return `${this.peso} está ${assunto}`;
        },
        peso: p,
        altura :a,

        imc(){//metodo
            return (this.peso/(this.altura**2)).toFixed(2);
        },

        get imc2(){//getter, faz a função se comportar como um atributo
            return (this.peso/(this.altura**2)).toFixed(2);
        }
    };
}

const p1 = criaPessoa("Felipe","Bignoto",60,1.7);
console.log(p1);
console.log(p1.fala("falando"));
console.log(p1.imc());
console.log(p1.imc2);