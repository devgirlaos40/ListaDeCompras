
import { buscaItem } from "./buscaItem.js";
import { incluiItem } from "./incluiItem.js";
import { limpaPesquisa } from "./limpaPesquisa.js";

const botaoSalvarItem = document.getElementById("botao-salvar-item");
botaoSalvarItem.addEventListener("click", incluiItem);

const botaoBuscarItem = document.getElementById("botao-buscar-item");
botaoBuscarItem.addEventListener("click", buscaItem);

const botaoVoltar = document.getElementById("botao-voltar");
botaoVoltar.addEventListener("click", limpaPesquisa);
