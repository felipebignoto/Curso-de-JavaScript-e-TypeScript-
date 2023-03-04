const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

//adicionar o evento de clique no botao
btnTarefa.addEventListener("click",function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

function criaTarefa(textoInput){//recebe o texto quando enviar uma tarefa no input
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

function criaLi(){//cria a lista(li)
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress",function(e){//função para enviar a tarefa pela tecla enter
    console.log(e);
   if(e.keyCode === 13){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
   }
});

function limpaInput(){//função para limpar o inputa após adicionar a tarefa
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li){//cria o botao para remover a terefa
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar";
    botaoApagar.setAttribute("class","apagar");
    botaoApagar.setAttribute("title","apagar esta tarefa");
    li.appendChild(botaoApagar);
}

document.addEventListener("click",function(e){
    const el = e.target;
    if(el.classList.contains("apagar")){
        
    }
})