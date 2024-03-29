const mongoose = require('mongoose');

let clienteSchema = new mongoose.Schema({
  nombre: {
    required: true,
    type: String
  }
});

const clienteModel = mongoose.model('ClienteSchema', clienteSchema, 'cliente');

module.exports = clienteModel;