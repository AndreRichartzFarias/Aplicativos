document.addEventListener('DOMContentLoaded', () => {
    console.log('O DOM foi carregado');



window.somaNumeros = () => {
    let resultado = document.getElementById('resultado');
    let i = 1;
    let soma = 0;
    let numeroAtual;
    let continuar = '';

    do {
        numeroAtual = prompt(`Informe o número ${i}`);
        while (isNaN(numeroAtual)) {
            numeroAtual = prompt('Por favor, informe um número válido!');
        }
        soma += parseFloat(numeroAtual);
        i++;
        continuar = prompt(`Informe "N" para encerrar ou qualquer tecla para continuar`).toUpperCase() ;
    } while (continuar !== 'N');
    alert(`A soma dos números é: ${soma}`);
    resultado.innerText = `A soma dos números é: ${soma}`;
    i = 1;
}

window.contagemRegressiva = () => {
    let i = 10;
    const timerDiv = document.getElementById('timer');

    const interval = setInterval(() => {
        timerDiv.textContent = i;
        if (i == 0) {
            clearInterval(interval);
        }
        i--;
    }, 500);
};

window.balancoFinanceiro = () => {
    let i = 0;
    let saldo = 0;
    let numeroAtual = 0;
    let continuar = '';
    let gastoGanho = 6;
    while (i<12) {
        while (continuar !== '0' ) {
            gastoGanho = prompt(`Informe "1" para ganho e "2" para gasto`);
            while (gastoGanho !== '1' && gastoGanho !== '2') {
                gastoGanho = prompt('Por favor, informe um número válido!');
            }
            if (gastoGanho == 1) {
            numeroAtual = prompt(`Informe a entrada do mês ${i+1}`);
            while (isNaN(numeroAtual)) {
                numeroAtual = prompt('Por favor, informe um número válido!');
            }
            saldo += parseFloat(numeroAtual);
            continuar = prompt(`Informe "0" para encerrar ou qualquer tecla para continuar`);

        } 
        
        else if (gastoGanho == 2) {
            numeroAtual = prompt(`Informe a saída do mês ${i+1}`);
            while (isNaN(numeroAtual)) {
                numeroAtual = prompt('Por favor, informe um número válido!');
            }
            saldo -= parseFloat(numeroAtual);
            continuar = prompt(`Informe "0" para encerrar ou qualquer tecla para continuar`);

        }
        
}
       
        continuar = '';
        i++;
    };
    alert(`O saldo do ano é: ${saldo}`);
    
};

});