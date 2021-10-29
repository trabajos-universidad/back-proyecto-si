const { Schema, model } = require('mongoose');

const productoSchema = Schema({
  tipoProducto: {
    type: Schema.Types.ObjectId,
    ref: 'TipoProductos',
    required: true,
  },
  marcar: {
    type: Schema.Types.ObjectId,
    ref: 'Marca',
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
});

module.exports = model('producto', productoSchema);
