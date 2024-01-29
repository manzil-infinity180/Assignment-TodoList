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
        default:false,
        enum:["true","false"]
    },
    categories:{
        type:String,
        default:"not-completed",
        enum:["not-completed","completed","inprogress"]
    },
    createdAt: {
        type: Date,
        default: new Date().toISOString()
      },

});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;