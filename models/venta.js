const { Schema, model } = require('mongoose');

const ventaSchema = Schema({
  rutCliente: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  rutVendedor: {
    type: Schema.Types.ObjectId,
    ref: 'Vendedor',
    require: true,
  },
  fechaHora: {
    type: Date,
    required: true,
  },
});

module.exports = module('Venta', ventaSchema);
