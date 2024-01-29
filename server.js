const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 3003;

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD);
mongoose.connect(DB).then(()=>{
    console.log("Successfully connected to database");
})
   
app.listen(PORT,()=>{
    console.log("Server running on port "+PORT);
})