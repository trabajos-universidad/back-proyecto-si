const { request, response } = require('express');
const Cliente = require('../models/cliente');

const clientePost = async (req, res = response) => {
  const cliente = new Cliente(req.body);

  await cliente.save();

  res.status(201).json({
    msg: 'postCliente',
    cliente,
  });
};

const clienteGet = (req, res = response) => {
  res.status(200).json({
    msg: 'getCliente',
  });
};

module.exports = {
  clientePost,
  clienteGet,
};
