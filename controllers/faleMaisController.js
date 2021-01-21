const faleMais = require('../models/faleMais');

const faleMaisController = {

    renderizaValores: (req, res) => {
        let id_valor = req.body.idValor;
        let id_plano = req.body.idPlano;
        let tempoLigacao = req.body.tempoLigacao;

        if (isNaN(tempoLigacao)) {
            tempoLigacao = 0;
        }

        console.log(tempoLigacao);

        let preco = faleMais.valores[id_valor][2];
        let plano = faleMais.planos[id_plano];
        let juros = faleMais.calculaJuros(preco);


        const resultado = {
            'semPlano': faleMais.calculaSemPlano(juros, tempoLigacao),
            'comPlano': faleMais.calculaComPlano(juros, tempoLigacao, plano)
        }
        res.render('index', { faleMais, resultado, body: req.body });
    }

}

module.exports = faleMaisController;