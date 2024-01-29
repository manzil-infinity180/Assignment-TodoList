const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Without title task can not be defined"]
    },
    description:{
        type:String
    },
    done:{
        type:Boolean,
        default:false
    }

});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;