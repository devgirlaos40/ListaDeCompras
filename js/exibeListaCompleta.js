let todosItensComprar, todosItensComprados = [];
const botaoIncluir = document.getElementById("botao-salvar-item");
const inputItem = document.getElementById("input-item");//seleciona o campos input onde o usuário informou o filtro da busca
const tooltipBotaoIncluir = document.getElementById("tooltip");


export function exibeListaCompleta(listaComprar, listaComprados) {
    //recupera todos os itens da lista Comprar
    todosItensComprar = listaComprar.querySelectorAll("li");
    //torna todos os itens visíveis novamente na lista
    todosItensComprar.forEach(itemComprar => {
        itemComprar.style.display = "block";
    })

    /*LIMPA FILTRO NA LISTA COMPRADOS */
    //recupera todos os itens da lista Comprar
    todosItensComprados = listaComprados.querySelectorAll("li");
    //torna todos os itens visíveis ovamente na lista
    todosItensComprados.forEach(itemComprado => {
        itemComprado.style.display = "block";
    })

    botaoIncluir.disabled = false; //habilita o botão Incluir
    inputItem.setAttribute("placeholder", "Digite o item que deseja adicionar ou pesquisar");
    inputItem.value = ""; //atualiza o placeholder para inclusão
    tooltipBotaoIncluir.removeAttribute("title"); //desabilita tooltip do botão

}
