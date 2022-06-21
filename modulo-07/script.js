//selecionar elementos da página html
const listaTarefas = document.querySelector('#listaTarefas');
const nomeTarefa = document.querySelector('#nomeTarefa');
const botaoAdicionar = document.querySelector('#botaoAdicionar');

//manipulador do evento 'click' do botão de adicionar tarefa
botaoAdicionar.addEventListener('click', function() {
    const descricaoTarefa = nomeTarefa.value;
    nomeTarefa.value = '';
    listaTarefas.appendChild(adicionaTarefa(descricaoTarefa));
    nomeTarefa.focus();
});

//função para adicionar uma tarefa na lista
function adicionaTarefa(descricaoTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id','tarefa');
    elementoSPAN.textContent = descricaoTarefa;

    elementoLI.appendChild(elementoSPAN);
    return elementoLI;
}