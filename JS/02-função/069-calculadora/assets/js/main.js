function criaCalculadora(){
    return{
        //atributos
        display: document.querySelector(".display"),


        //metodos
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            document.addEventListener("click",e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDsiplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                   this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){//Adiciona os valores dos botões no visor
            this.display.value += valor;
        },

        clearDsiplay(){//limpa o visor
            this.display.value = "";
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert("conta invalida");
                    return;
                }

                this.display.value = String(conta);

            }catch(e){
                alert("conta invalida");
                return;
            }
        },

        pressionaEnter(){
            this.display.addEventListener("keyup",e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();