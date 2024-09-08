import { criarItemDaLista } from "./criarItemDaLista.js";
import { limpaInput } from "./limpaInput.js";
import { verificaListaVazia } from "./verificaListaVazia.js";

const itemNovo = document.getElementById("input-item");
const listaComprar = document.getElementById("lista-comprar"); /*<ul>*/

 
export function incluirItem(evento) {
 
     evento.preventDefault();
 
      if(itemNovo.value === "" || itemNovo.value.trim() === ""){
         alert("O nome do item não pode ser nulo. Favor informar um nome para o item.");
         limpaInput();
      }else{
         const itemDaLista = criarItemDaLista(itemNovo.value);
         listaComprar.appendChild(itemDaLista);
         verificaListaVazia(listaComprar);
         limpaInput();
      }


  }

