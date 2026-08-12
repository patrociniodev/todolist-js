let tituloDaPagina = document.createElement("h1");
tituloDaPagina.setAttribute("class", "titulo-pagina");
tituloDaPagina.style.fontSize = "30px";
tituloDaPagina.style.fontFamily = "Arial";
tituloDaPagina.innerText = "Lista de Tarefas";
let bodyPagina = document.querySelector("body");
bodyPagina.prepend(tituloDaPagina);

let campoTarefa = document.querySelector("#campo-tarefa");
let listaTarefas = document.querySelector("#lista-tarefas");
let mensagem = document.querySelector("#mensagem");
let botaoLimparTarefas = document.querySelector("#botao-limpar");

listaTarefas.style.fontFamily = "Arial";

campoTarefa.addEventListener("keyup", (ev) => {
    let teclaPressionada = ev.key;
    if (teclaPressionada === 'Enter') {
        if (campoTarefa.value === "") {
            mensagem.style.color = "#F00";
            mensagem.innerText = "Adicione uma tarefa antes de enviar.";
        } else {
            let novoItemLista = document.createElement("li");
            novoItemLista.innerText = campoTarefa.value.substring(0, 1).toUpperCase() + campoTarefa.value.substring(1).toLowerCase();
            listaTarefas.appendChild(novoItemLista);
            for (let i = 0; i < listaTarefas.children.length; i++) {
                listaTarefas.children[i].style.padding = "5px";
                listaTarefas.children[i].style.marginBottom = "3px";
            }
            campoTarefa.value = "";
            mensagem.innerText = "";
        }
    }
});

botaoLimparTarefas.addEventListener("click", () => {
    if (listaTarefas.children.length === 0) {
        mensagem.style.color = "#F00";
        mensagem.innerText = "A lista já está vazia!";
    } else {
        listaTarefas.innerHTML = "";
        mensagem.style.color = "#05ce05";
        mensagem.innerText = "A lista foi limpa com sucesso!"
    }
});