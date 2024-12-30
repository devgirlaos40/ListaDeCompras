//cria variável para armazenar o texto de todos os itens da lista Comprar
const itens = [];
//cria variável para armazenar todos os itens que não correspondem a busca realizada
let itensOcultar = [];

export function ocultaItens(listaComprar, listaComprados, valorDigitado) {
    //para cada item (do tipo li) da lista comprar inclui na variável itens o elemento parágrafo do item (onde o nome do item está)
    listaComprar.querySelectorAll('li').forEach(item => { itens.push(item.querySelector('p')); });
    //para cada item (do tipo li) da lista comprados inclui na variável itens o elemento parágrafo do item (onde o nome do item está)
    listaComprados.querySelectorAll('li').forEach(item => { itens.push(item.querySelector('p')); });    
    //armazena na variável intesOcultar todos os itens que não correspondem a busca realizada
    itensOcultar = itens.filter(item => !item.textContent.toLowerCase().includes(valorDigitado.toLowerCase()));
    //para cada de itensOcultar
    itensOcultar.forEach(item => {
        //definir o display do item como None (para que seja ocultado da lista e somente os itens que correspondem a busca permaneçam na tela)
        item.closest("li").style.display = "none";
    })
}
