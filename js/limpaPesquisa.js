import { exibeListaCompleta } from "./exibeListaCompleta.js";

const listaComprar = document.getElementById("lista-comprar");//seleciona as uls de comprar
const listaComprados = document.getElementById("lista-comprados");//seleciona as uls de comprar
const botaoVoltar = document.getElementById("botao-voltar");
const botaoIncluir = document.getElementById("botao-salvar-item");

export function limpaPesquisa(evento){
    /*LIMPA FILTRO NA LISTA COMPRAR*/
    evento.preventDefault();

    exibeListaCompleta(listaComprar, listaComprados);
    botaoVoltar.style.display = "none";
    botaoIncluir.style.display = "block";
}
