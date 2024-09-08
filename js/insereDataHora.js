
export function insereDataHora(origem) {

    let dataHoraItem = "";
    
    if (origem === "criaItemLista") {
        dataHoraItem = `Criado em: ${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    }else if(origem === "editaItem"){
        dataHoraItem = `Alterado em: ${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    }else if(origem === "itemComprado"){
        dataHoraItem = `Comprado em: ${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    }else if(origem === "retornaItem"){
        dataHoraItem = `Retornado em: ${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    }
    return dataHoraItem;
}

