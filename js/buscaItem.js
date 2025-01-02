import { limpaInput } from "./limpaInput.js";
import { ocultaItens } from "./ocultaItens.js";
import { exibeListaCompleta } from "./exibeListaCompleta.js";

const listaComprar = document.getElementById("lista-comprar");//seleciona as uls de comprar
const listaComprados = document.getElementById("lista-comprados");//seleciona as uls de comprar
const inputItem = document.getElementById("input-item");//seleciona o campos input onde o usuário informou o filtro da busca

const tooltipBotaoIncluir = document.getElementById("tooltip");
const botaoIncluir = document.getElementById("botao-salvar-item");
const botaoVoltar = document.getElementById("botao-voltar");

export function buscaItem(evento) {
    //não atualiza a página após o click do botão
    evento.preventDefault();
    /*BUSCA */
    let valorDigitado = inputItem.value; //recupera o valor digitado pelo usuário
    
    if (valorDigitado === "" || valorDigitado.trim() === "") { //se o usuário não digitou nada
        alert("Favor informar o nome do item que deseja pesquisar:"); //exibe alerta pedindo para digitar
    }else{ 
        exibeListaCompleta(listaComprar, listaComprados);//se o usuário digitou algo
        ocultaItens(listaComprar, listaComprados, valorDigitado); //oculta os itens que não correspondem ao valor digitado
        limpaInput();//limpa o campo input
        botaoVoltar.style.display = "block";
        botaoIncluir.disabled = true;
        inputItem.setAttribute("placeholder", "Digite o que deseja pesquisar ou acione Voltar");
        tooltipBotaoIncluir.title = "Clique em Voltar para habilitar a inclusão."
        
    }
}

