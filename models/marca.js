const { Schema, model } = require('mongoose');

const marcaSchema = Schema({
  marca: {
    type: String,
    required: true,
  },
});

module.exports = model('Marca', marcaSchema);
