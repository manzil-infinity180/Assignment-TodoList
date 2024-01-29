const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const taskRouter = require("./router/taskRouter");

app.use(express.json());
app.use('/api/v1',taskRouter);

app.get('/',(req,res)=>{
    res.send("Hello from server");
})

module.exports = app;