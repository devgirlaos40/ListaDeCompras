
const botaoSalvarItem = document.getElementById("botao-salvar-item");
const listaComprar = document.getElementById("lista-comprar"); /*<ul>*/
let contadorItem = 0;


botaoSalvarItem.addEventListener("click", salvarItem());

function salvarItem() {

    const itemNovo = document.getElementById("input-item");
    // itemNovo.setAttribute("value", "1234567")
    console.log(itemNovo.value);
    
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
                    checkboxItem.setAttribute("type","checkbox");
                    checkboxItem.classList.add("checkbox-item");
                    checkboxItem.setAttribute("id", "checkbox-item-" + contadorItem++);

                    const labelCheckbox = document.createElement("label");
                    labelCheckbox.setAttribute("for", checkboxItem.id);

                    const itemChecked = document.createElement("div");
                    itemChecked.classList.add("checkbox-customizado");

                /*cria o parágrafo com nome do item */
                const nomeDoItem = document.createElement("p");
                /*atribui o valor digitado no input para o nome do item na lista */
                nomeDoItem.innerText =  itemNovo.value;
                
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

                const botaoDeletar = document.createElement("button");
                botaoDeletar.classList.add("item-botao");

                    const imgBotaoDeletar = document.createElement("img");
                    imgBotaoDeletar.src = "img/delete.svg";
                    imgBotaoDeletar.alt = "lixeira simbolizando exclusão de item";



                botaoEditar.appendChild(imgBotaoEditar);
                botaoDeletar.appendChild(imgBotaoDeletar);
                itemContainerBotoes.appendChild(botaoEditar);
                itemContainerBotoes.appendChild(botaoDeletar);
                checkboxContainer.appendChild(checkboxItem);
                checkboxContainer.appendChild(labelCheckbox);
                checkboxContainer.appendChild(itemChecked);
                itemContainerNome.appendChild(checkboxContainer);
                itemContainerNome.appendChild(nomeDoItem);
                containerItemDaLista.appendChild(itemContainerNome);
                containerItemDaLista.appendChild(itemContainerBotoes);
                itemDaLista.appendChild(containerItemDaLista);
                listaComprar.appendChild(itemDaLista);
}
