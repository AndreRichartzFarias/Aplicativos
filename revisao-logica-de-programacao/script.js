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

window.organizarNumeros = () => {
    let i = 0;
    let numeroAtual = 0;
    let continuar = '';
    let numeros = [];
    while (continuar !== '0') {
        numeroAtual = prompt(`Informe o número ${i+1}`);
        while (isNaN(numeroAtual)) {
            numeroAtual = prompt('Por favor, informe um número válido!');
        }
        numeros.push(parseFloat(numeroAtual));
        continuar = prompt(`Informe "0" para encerrar ou qualquer tecla para continuar`);
        i++;
    }
    numeros.sort((a, b) => b - a);
    alert(`Os números ordenados são: ${numeros}`);
};

window.parParaImpar = () => {
let i = 0;
let numeroAtual = 0;
let continuar = '';
let pares = [];
let impares = [];

while (continuar !== '0') {
    numeroAtual = prompt(`Informe o número ${i+1}`);
    while (isNaN(numeroAtual)) {
        numeroAtual = prompt('Por favor, informe um número válido!');
    }
    if (numeroAtual % 2 == 0) {
        impares.push(parseFloat(numeroAtual)+1);
    } else {
        pares.push(parseFloat(numeroAtual)+1);
    }
    continuar = prompt(`Informe "0" para encerrar ou qualquer tecla para continuar`);
    i++;

}
alert(`Os números pares são: ${pares}`);
alert(`Os números ímpares são: ${impares}`);
}

window.vogalOuConsoante = () => {
    let i = 0;
    let letraAtual = '';
    let continuar = '';
    let vogais = [];
    let consoantes = [];
    let vogal = ['a', 'e', 'i', 'o', 'u'];
    while (continuar !== '0') {
        letraAtual = prompt(`Informe a letra ${i+1}`);
        while (letraAtual.length > 1) {
            letraAtual = prompt('Por favor, informe apenas uma letra!');
        }
        if (vogal.includes(letraAtual)) {
            vogais.push(letraAtual);
        } else {
            consoantes.push(letraAtual);
        }
        continuar = prompt(`Informe "0" para encerrar ou qualquer tecla para continuar`);
        i++;
    }
    alert(`As vogais são: ${vogais}`);
    alert(`As consoantes são: ${consoantes}`);
}

window.precoPicole = () => {
    let picoles = ["Chocolate", "Morango", "Creme", "Manga", "Melancia", "Vanilla Ice", "Céu Azul", "Brownie", "Hawaiano"];
    let precos = [1.50, 2.50, 2.50, 3.20, 3.40, 3.00, 3.60, 4.00, 5.00];
    let posicao = -1;
    alert(`Os sabores disponíveis são:\n${picoles.map((picole, index) => `${index + 1}: ${picole}`).join('\n')}`);
    posicao = prompt('Informe a posição do picolé');

    while (isNaN(posicao) || posicao < 1 || posicao > picoles.length) {
        alert(`Os sabores disponíveis são:\n${picoles.map((picole, index) => `${index + 1}: ${picole}`).join('\n')}`);
        posicao = prompt('Por favor, informe uma posição válida');
    }

    posicao = parseInt(posicao) - 1;

    if (posicao !== -1) {
        alert(`R$${precos[posicao]}`);
    }
}

});