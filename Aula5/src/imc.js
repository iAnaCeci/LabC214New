function calcularIMC(peso, altura) {
    if (altura === 0) {
        return 'NaN'; // Retorna caso altura seja 0, não preenchida
    }
    
    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obeso';
    }

    return `Seu IMC é ${imc} (${classificacao})`;
}

module.exports = { calcularIMC };///modulo responsavel pela exportação da funçao
