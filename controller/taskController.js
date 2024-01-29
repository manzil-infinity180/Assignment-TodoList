const Task = require("../model/taskModel");

exports.createtask= async(req,res,next)=>{
    try{
        if(req.body.done){
            throw new Error("You can not mark task as COMPLETED now.First create your task");
        }
        if(req.body.categories==="completed"){
            throw new Error("During creation of task, you can not mark as completed")
        }
        const task = await Task.create(req.body);
        if(req.body.title==""){
            throw new Error("Title should not be empty!");
        }
        res.status(200).json({
            status:"Success",
            data:{
                task
            }
        });

    }catch(err){
        res.status(400).json({
            status:"Failed",
            err: err.message
        });
    }
}
exports.getAllTask = async(req,res,next)=>{
    try{
        // const {categories:value} = req.query;
        // console.log(value); 
        // if(req.query){
        //     const x = await Task.find({categories : value});
        //     console.log(x);
        // }
        const task = await Task.find();
        if(!task){
            throw new Error("Something went wrong or you do not have any task yet!");
        }
        
        res.status(200).json({
            total: task.length,
            status:"Success",
            data:{
                task
            }
        });

    }catch(err){
        res.status(400).json({
            status:"Failed",
            err: err.reason || err.message
        });
    }
}

exports.updateTask = async(req,res,next)=>{
    try{
        
        const prevtaskData = await Task.findById(req.params.id);
        console.log(req.body);
        console.log(prevtaskData);
        if(!prevtaskData){
            throw new Error("No task with these id found,please check again!");
        }
        
        const {done} = prevtaskData;
       
        if(done &&  req.body.done){
            throw new Error("Task already marked as COMPLETED, so you could not mark as Completed AGAIN!!");
        }
       
        if(req.body.title==""){
            throw new Error("Title can not be empty string");
        }

        const task = await Task.findByIdAndUpdate(req.params.id,req.body);
        
        res.status(200).json({
            status:"Success",
            message:"Data successfully Updated"
        });

    }catch(err){
        res.status(400).json({
            status:"Failed",
            err: err.reason || err.message,
        });
    }
}
exports.deleteTask = async(req,res,next)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            status:"Success",
            message: "Your data has been successfully deleted!"
            
        });

    }catch(err){
        res.status(400).json({
            status:"Failed",
            err: err.reason?.message,
            message: err.message
        });
    }
}
exports.searchByCategories = async(req,res,next)=>{
    try{
        
        // const tasks = await Task.find({categories :})
        console.log(req.query);

    }catch(err){

    }
}
