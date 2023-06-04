const product = require("../model/product");

module.exports.get_allProducts = (req,res) =>{
  product.find()
  .then(products=>res.json(products))
  .catch(err => res.status(400).json(err));
}

module.exports.create_Products = (req,res)=>{
  product.create(req.body)
  .then(product => res.json(product))
  .catch(err =>res.status(400).json(err));
}

module.exports.get_Product = (req, res)=>{
  product.findOne({_id:req.params.id})
  .then(product => res.json(product))
  .catch(err => res.status(400).json(err))
}

module.exports.update_Product = (req,res)=>{
  product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
  .then(product => res.json(product))
  .catch(err=>res.status(400).json(err));
}

module.exports.delete_Product = (req,res)=>{
  product.deleteOne({_id:req.params.id})
  .then(result=>res.json(result))
  .catch(err=>res.status(400).json(err));
}