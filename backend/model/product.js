const mongoose = require ("mongoose");

const SchemaProduct = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'ingresa un nombre'],
    min:[2,'requiere minimo 2 caracteres']
  },
  price:{
    type:Number,
    required:[true,"el producto requiere un valor"]
  },
  description:{
    type:String,
  },
  size:{
    type:String,
  },
  gender:{
    type:String,
  },
  color:{
    type:String,
  },
  image:{
    data:Buffer,
    contentType:String
  },
  discount:{
    type:Number
  },
  amount:{
    type:Number,
    min:[0]
  },

},{timestamps:true,versionKey:false});

const product = mongoose.model("Product",SchemaProduct);
module.exports = product