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
    elementoLI.setAttribute('class','naoRealizada');
    elementoLI.appendChild(adicionaBotaoRemover());

    //manipulador do evento 'click' do elemento span contendo um item da lista de tarefas
    elementoSPAN.addEventListener('click', function() {
        if(this.id === 'tarefa') {
            if(this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada';
            }
            else {
                this.parentNode.className = 'naoRealizada';
            }
        }
    });

    return elementoLI;
}

//função para adicionar o botão remover em cada item da lista
function adicionaBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✖';
    botaoRemover.className = 'remove-button';

    //manipulador do evento 'click' do botão de remover tarefa
    botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(this.parentNode);
    });

    return botaoRemover;
}