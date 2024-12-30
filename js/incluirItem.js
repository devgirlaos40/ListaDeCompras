import { criaItemDaLista } from "./criaItemDaLista.js";
import { limpaInput } from "./limpaInput.js";
import { verificaListaVazia } from "./verificaListaVazia.js";

const itemNovo = document.getElementById("input-item");
const listaComprar = document.getElementById("lista-comprar"); /*<ul>*/

export function incluiItem(evento) {
 
     evento.preventDefault();
 
      if(itemNovo.value === "" || itemNovo.value.trim() === ""){
         alert("O nome do item não pode ser nulo. Favor informar um nome para o item.");
         limpaInput();
      }else{
         const itemDaLista = criaItemDaLista(itemNovo.value);
         listaComprar.appendChild(itemDaLista);
         verificaListaVazia(listaComprar);
         limpaInput();
      }
  }
