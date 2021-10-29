const { Schema, model } = require('mongoose');

const tipoViviendaSchema = Schema({
  tipoVivienda: {
    type: String,
    required: false,
    default: 'casa',
  },
});

module.exports = model('TipoVivienda', tipoViviendaSchema);
