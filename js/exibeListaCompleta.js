let todosItensComprar, todosItensComprados = [];

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
}
