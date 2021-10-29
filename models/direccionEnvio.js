const { Schema, model } = require('mongoose');

const direccionEnvioSchema = Schema({
  comuna: {
    type: Schema.Types.ObjectId,
    ref: 'Comuna',
    require: true,
  },
  tipoVivienda: {
    type: Schema.Types.ObjectId,
    ref: 'TipoVivienda',
    required: false,
  },
  calle: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  numDepto: {
    type: String,
    require: false,
    default: '0',
  },
});

module.exports = model('DireccionEnvio', direccionEnvioSchema);
