const express = require('express')
const router = express.Router();

const clientes = require('./controllers/clientes')
const telefone = require('./controllers/telefone')
const estacionamento = require('./controllers/estacionamento')
const quartos = require('./controllers/quartos')
const reservas = require('./controllers/reservas')




const teste =(req, res) => {
    res.json("Respondendo");
}

router.get('/',teste);
router.post('/clientes',clientes.create);
router.get('/clientes',clientes.read);
router.put('/clientes',clientes.update);
router.delete('/clientes/:id', clientes.deletar);

router.get('/',teste);
router.post('/telefone',telefone.create);
router.get('/telefone',telefone.read);
router.put('/telefone',telefone.update);
router.delete('/telefone/:id', telefone.deletar);

router.get('/',teste);
router.post('/estacionamento',estacionamento.create);
router.get('/estacionamento',estacionamento.read);
router.put('/estacionamento',estacionamento.update);
router.delete('/estacionamento/:id', estacionamento.deletar);

router.get('/',teste);
router.post('/quartos',quartos.create);
router.get('/quartos',quartos.read);
router.put('/quartos',quartos.update);
router.delete('/quartos/:id', quartos.deletar);

router.get('/',teste);
router.post('/reservas',reservas.create);
router.get('/reservas',reservas.read);
router.put('/reservas',reservas.update);
router.delete('/reservas/:id', reservas.deletar);

module.exports = router;