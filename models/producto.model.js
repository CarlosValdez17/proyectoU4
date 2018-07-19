const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
  descripcion: {
    required: true,
    type: String
  },
  precio:{
      required: true,
      type: Boolean
  }
});

const productoModel = mongoose.model('ProductoSchema', productoSchema, 'producto');

module.exports = productoModel;