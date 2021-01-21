const express = require('express');
const router = express.Router();
const faleMaisController = require('../controllers/faleMaisController');
const faleMais = require('../models/faleMais');

router.get('/', (req, res) => res.render('index', { faleMais, resultado: null, body: {} }));
router.post('/', express.urlencoded({ extended: true }), faleMaisController.renderizaValores);

module.exports = router;