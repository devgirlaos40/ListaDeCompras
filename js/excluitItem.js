import { verificaListaCompradosVazia } from "./verificaListaCompradosVazia.js";
import { verificaListaVazia } from "./verificaListaVazia.js";

const listaComprar = document.getElementById("lista-comprar"); /*<ul>*/
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja exlcuir esse item? Essa operação não pode ser desfeita!");

    if(confirmacao){
        elemento.remove();

        verificaListaCompradosVazia(listaComprados);
        verificaListaVazia(listaComprar);


    }
}

export { excluirItem };