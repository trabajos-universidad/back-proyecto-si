const { Schema, model } = require('mongoose');

const comunaSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
});

module.exports = model('Comuna', comunaSchema);
