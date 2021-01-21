const faleMais = require('./faleMais');

describe('Testes da função calculaJuros()', () => {
    it('Verifica se é numérico', () => {
        expect(typeof(faleMais.calculaJuros(faleMais.valores[0][2]))).toBe('number');
    })
    it('Deve retornar 2.09', () => {
        expect(faleMais.calculaJuros(faleMais.valores[0][2])).toBe(2.09);
    })
})

describe('Testes da função calculaComPlano()', () => {
    it('Verifica se é numérico', () => {
        expect(typeof(faleMais.calculaComPlano(faleMais.calculaJuros(faleMais.valores[0][2]), 20, faleMais.planos[0]))).toBe('number');
    })
    it('Deve retornar 0', () => {
        expect(faleMais.calculaComPlano(faleMais.calculaJuros(faleMais.valores[0][2]), 20, faleMais.planos[0])).toBe(0);
    })
    it('Deve retornar 0 (com número negativo)', () => {
        expect(faleMais.calculaComPlano(faleMais.calculaJuros(faleMais.valores[0][2]), -20, faleMais.planos[0])).toBe(0);
    })
    it('Deve retornar 10.45', () => {
        expect(faleMais.calculaComPlano(faleMais.calculaJuros(faleMais.valores[0][2]), 65, faleMais.planos[1])).toBe(10.45);
    })
})

describe('Testes da função calculaSemPlano()', () => {
    it('Verifica se é numérico', () => {
        expect(typeof(faleMais.calculaSemPlano(faleMais.calculaJuros(faleMais.valores[0][2]), 20, faleMais.planos[0]))).toBe('number');
    })
    it('Deve retornar 0 (com número negativo)', () => {
        expect(faleMais.calculaSemPlano(faleMais.calculaJuros(faleMais.valores[0][2]), -20, faleMais.planos[0])).toBe(0);
    })
    it('Deve retornar 41.80', () => {
        expect(faleMais.calculaSemPlano(faleMais.calculaJuros(faleMais.valores[0][2]), 20, faleMais.planos[0])).toBe(41.80);
    })
})