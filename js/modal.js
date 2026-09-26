// ENTRADA DE DADOS
const modal = document.getElementById('modal');

// PROCESSAMENTO
function abrirModal(){
    // Adiciona classe "visível" ao elemento modal
    modal.classList.add('visivel');
}

function fecharModal(){
    // Remove classe "visivel" ao elemento modal
    modal.classList.remove('visivel');
}

// SAÍDA
// Executa fecharModal ao clicar no elemento "modal"
window.addEventListener(' click ', (event) => {
    // Verifica Se o ALVO do clique for o elemento modal
    if(event.target === modal){
        fecharModal();
    }
});