import { insereDataHora } from "./insereDataHora.js";

const editaItem = (nomeItem, dataItem) => {
    let confirmaEdicao = prompt("Digite o novo nome do item?");

    if(confirmaEdicao !== "" && confirmaEdicao.trim() !== ""){
        nomeItem.textContent = confirmaEdicao;
        dataItem.innerText = insereDataHora("editaItem");
    }
}

export { editaItem };