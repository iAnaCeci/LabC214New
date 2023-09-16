const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
});



it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
});
});

// it('IMC abaixo do peso', () => {
//     const peso = 50; // 50 kg
//     const altura = 160; // 160 cm

//     const IMCCalculado = calcularIMC(peso, altura);

//     expect(IMCCalculado).to.equal('Seu IMC é 19.53 (Abaixo do peso)');
// });

// it('IMC obeso', () => {
//     const peso = 100; // 100 kg
//     const altura = 170; // 170 cm

//     const IMCCalculado = calcularIMC(peso, altura);

//     expect(IMCCalculado).to.equal('Seu IMC é 34.60 (Obeso)');
// });
