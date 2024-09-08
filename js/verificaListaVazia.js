const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificaListaVazia(lista){

    if (lista.childElementCount <= 3){ /* também pode ser utilizado o lista.length*/
        mensagemListaVazia.style.display = "block";
    }else{
        mensagemListaVazia.style.display = "none";
    }
}