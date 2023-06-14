const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/ProyectoEcommerce",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("Connected with DB"))
    .catch(err => console.log('Error of connection with DB '+err))