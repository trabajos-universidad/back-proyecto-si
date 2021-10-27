const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
  rut: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
});

module.exports = model('Cliente', ClienteSchema);
