export function testarModulo() {
    console.log("Módulo carregado com sucesso!");
    alert("Módulo carregado com sucesso!")
}

function criarBotoes(element, acao){

    if(acao.novo){

        const botaoNovo = document.createElement('button');
        botaoNovo.textContent = acao.novo.texto || 'Novo';
        botaoNovo.classList.add('btn-novo');
        botaoNovo.addEventListener('click', () => acao.novo.callback());
        element.appendChild(botaoNovo); 
    }

    if(acao.editar){

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = acao.editar.texto || 'Editar';
        botaoEditar.classList.add('btn-editar');
        botaoEditar.addEventListener('click', () => acao.editar.callback(acao.editar.id));
        element.appendChild(botaoEditar);

    }
    if(acao.deletar){

        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = acao.deletar.texto || 'Deletar';
        botaoDeletar.classList.add('btn-deletar');
        botaoDeletar.addEventListener('click', ()=> acao.deletar.callback(acao.deletar.id));
        element.appendChild(botaoDeletar);

    }

};

export {criarBotoes};