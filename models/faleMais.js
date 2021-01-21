const FaleMais = {
    valores: [
        ['011', '016', 1.90],
        ['016', '011', 2.90],
        ['011', '017', 1.70],
        ['017', '011', 2.70],
        ['011', '018', 0.90],
        ['018', '011', 1.90],
    ],

    planos: [30, 60, 120],

    calculaJuros: function(preco) {
        return preco + (preco * 10) / 100;
    },

    calculaSemPlano: function(juros, tempoLigacao) {
        if (tempoLigacao <= 0) {
            return 0;
        }
        return juros * tempoLigacao;
    },

    calculaComPlano: function(juros, tempoLigacao, plano) {
        if (tempoLigacao < plano) {
            return 0;
        }

        return juros * (tempoLigacao - plano);
    }
}

module.exports = FaleMais;