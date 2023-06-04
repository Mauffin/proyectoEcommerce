const productController = require('../controller/productController');

module.exports = (app)=>{

  app.post('/product/create',productController.create_Products);
  app.get('/product/:id',productController.get_Product);
  app.get('/product',productController.get_allProducts);
  app.put('/product/:id',productController.update_Product);
  app.delete('/product/:id',productController.delete_Product);

}