import { editaItem } from "./editaItem.js";
import { excluirItem } from "./excluitItem.js";
import { insereDataHora } from "./insereDataHora.js";
import { verificaListaCompradosVazia } from "./verificaListaCompradosVazia.js";
import { verificaListaVazia } from "./verificaListaVazia.js";


const listaComprar = document.getElementById("lista-comprar"); /*<ul>*/
const listaComprados = document.getElementById("lista-comprados");
let contadorItem = 0;
let origemDataHora = "";

export function criarItemDaLista(item) {

    /*cria o li */
    const itemDaLista = document.createElement("li");
    /*cria a primeira div */
    const containerItemDaLista = document.createElement("div");
    /*atribui uma classe a primeira div */
    containerItemDaLista.classList.add("container-item-da-lista");

    /*cria segunda div */
    const itemContainerNome = document.createElement("div");
    /*atribui uma classe a segunda div */
    itemContainerNome.classList.add("item_container")

    /*cria a terceira div: checkbox*/
    const checkboxContainer = document.createElement("div");
    /*cria a estrutura do checkbox */

    /*primeiro criamos o checkbox, pois precisaremos do id dele para criar o label*/
    const checkboxItem = document.createElement("input");
    checkboxItem.setAttribute("type", "checkbox");
    checkboxItem.classList.add("checkbox-item");
    checkboxItem.setAttribute("id", "checkbox-item-" + contadorItem++);

    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for", checkboxItem.id);


    labelCheckbox.addEventListener("click", function (evento) {

        const inputCheckbox = evento.currentTarget.querySelector(".checkbox-item");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");

        if (inputCheckbox.checked) {
            checkboxCustomizado.classList.add("checked");
            listaComprados.appendChild(itemDaLista);
            verificaListaCompradosVazia(listaComprados);
            verificaListaVazia(listaComprar);
            nomeDoItem.style.textDecoration = "line-through";
            botaoEditar.style.display = "none";
            botaoDeletar.style.display = "none";
            origemDataHora = "itemComprado";
            itemData.innerText = insereDataHora(origemDataHora);
        } else {
            checkboxCustomizado.classList.remove("checked");
            listaComprar.appendChild(itemDaLista);
            nomeDoItem.style.textDecoration = "none";
            botaoEditar.style.display = "block";
            botaoDeletar.style.display = "block";
            verificaListaVazia(listaComprar);
            verificaListaCompradosVazia(listaComprados);
            origemDataHora = "retornaItem";
            itemData.innerText = insereDataHora(origemDataHora);
        }
    })

    const itemCheckboxCustomizado = document.createElement("div");
    itemCheckboxCustomizado.classList.add("checkbox-customizado");

    /*cria o parágrafo com nome do item */
    const nomeDoItem = document.createElement("p");
    /*atribui o valor digitado no input para o nome do item na lista */
    nomeDoItem.innerText = item;

    /*cria segunda div */
    const itemContainerBotoes = document.createElement("div");
    /*atribui uma classe a segunda div */
    itemContainerBotoes.classList.add("item_container");

    /*cria o botão de edição de item */
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-botao");

    /*cria a imagem do botão */
    const imgBotaoEditar = document.createElement("img");
    /*define o caminho do diretório do projeto onde está imagem */
    imgBotaoEditar.src = "img/edit.svg";
    /*define o texto alternativo da imagem */
    imgBotaoEditar.alt = "caneta simbolizando edição de item";

    botaoEditar.addEventListener("click", function(){
        editaItem(nomeDoItem, itemData);
    })

    const botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("item-botao");

    const imgBotaoDeletar = document.createElement("img");
    imgBotaoDeletar.src = "img/delete.svg";
    imgBotaoDeletar.alt = "lixeira simbolizando exclusão de item";

    botaoDeletar.addEventListener("click", function () {
        excluirItem(itemDaLista)
    });

    const itemData = document.createElement("p");
    itemData.classList.add("item__data-hora");
    origemDataHora = "criaItemLista";
    itemData.innerText = insereDataHora(origemDataHora);


    // Aninhando os elementos
    botaoEditar.appendChild(imgBotaoEditar);
    botaoDeletar.appendChild(imgBotaoDeletar);
    itemContainerBotoes.appendChild(botaoEditar);
    itemContainerBotoes.appendChild(botaoDeletar);
    labelCheckbox.appendChild(checkboxItem);
    checkboxContainer.appendChild(labelCheckbox);
    labelCheckbox.appendChild(itemCheckboxCustomizado);
    itemContainerNome.appendChild(checkboxContainer);
    itemContainerNome.appendChild(nomeDoItem);
    containerItemDaLista.appendChild(itemContainerNome);
    containerItemDaLista.appendChild(itemContainerBotoes);
    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}