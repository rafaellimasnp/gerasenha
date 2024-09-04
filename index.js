
function calcularCodigoDia(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // getMonth() retorna o mês de 0 a 11
    const ano = data.getFullYear() % 100; // Ano dos últimos dois dígitos

    const iDia = {
        1: 153, 2: 170, 3: 101, 4: 122, 5: 213, 6: 148,
        7: 53, 8: 85, 9: 214, 10: 113, 11: 133, 12: 168,
        13: 183, 14: 80, 15: 79, 16: 30, 17: 11, 18: 66,
        19: 166, 20: 90, 21: 213, 22: 119, 23: 134, 24: 169,
        25: 158, 26: 173, 27: 100, 28: 124, 29: 215, 30: 147,
        31: 54
    }[dia] || 0;

    const iMes = {
        1: 12, 2: 10, 3: 9, 4: 11, 5: 13, 6: 2,
        7: 5, 8: 6, 9: 8, 10: 3, 11: 7, 12: 4
    }[mes] || 0;

    const iAno = ano;

    return iDia + iMes + iAno;
}

// Função para calcular o número de Fibonacci
function calcularFibonacci(data) {
    const iQtd = 11;
    let iTotal = calcularCodigoDia(data);

    for (let i = 0; i <= iQtd; i++) {
        const iAnterior = iTotal;
        iTotal += iAnterior;
    }

    return iTotal;
}

// Função principal
function main() {
    const data = new Date(); // Data atual
    const lbSenhaCaption = "1" + calcularFibonacci(data).toString();
    console.log(lbSenhaCaption);
}

// Executar a função principal
main();
