const express = require("express");
const cors = require("cors");

app.use(express.json(),express.urlencoded({exrended:true}));

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })  
)

//initialize DB
require("./backend/config/mongoose.config");

//routes


//ejecutar server
app.listen(8000,()=>console.log("Server On!!"))