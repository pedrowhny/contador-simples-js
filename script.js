let contador = 0;  // Valor inicial do contador

// Obtém os elementos do DOM
const contadorDisplay = document.getElementById('contador');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// Função para atualizar o contador na tela
function atualizarContador() {
    contadorDisplay.textContent = contador;
}

// Função para aumentar o contador
btnAumentar.addEventListener('click', () => {
    contador++;
    atualizarContador();
});

// Função para diminuir o contador
btnDiminuir.addEventListener('click', () => {
    contador--;
    atualizarContador();
});
