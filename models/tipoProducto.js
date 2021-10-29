const { Schema, model } = require('mongoose');

const tipoProductoSchema = Schema({
  tipoProducto: {
    type: String,
    required: true,
  },
});

module.exports = model('TipoProducto', tipoProductoSchema);
