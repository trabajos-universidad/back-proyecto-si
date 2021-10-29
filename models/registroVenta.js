const { Schema, model } = require('mongoose');

const registroVentasSchema = Schema({
  producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
    require: true,
  },
  venta: {
    type: Schema.Types.ObjectId,
    ref: 'Venta',
    required: true,
  },
  cantProducto: {
    type: Number,
    require: false,
    default: 0,
  },
});

module.exports = model('RegistroVenta', registroVentasSchema);
