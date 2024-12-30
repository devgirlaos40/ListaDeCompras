const blocoListaComprados = document.getElementById("container-lista");

export function verificaListaCompradosVazia(listaComprados){
    if(listaComprados.childElementCount === 0){
        blocoListaComprados.style.display = "none";
    }else{
        blocoListaComprados.style.display = "block";
    }
}
