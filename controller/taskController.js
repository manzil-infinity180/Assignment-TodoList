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
        const categories = req.query.categories;
        if(categories){
            const filter ={};
            filter.categories = categories
             const categoryData = await Task.find(filter);
             console.log(categoryData);
            console.log(categoryData);
            res.status(200).json({
                total: categoryData.length,
                status:"success",
                data:{
                    categoryData
                }
            })
        }else{
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
    }   
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
        
        const {done,categories} = prevtaskData;
       
        if(done &&  req.body.done){
            throw new Error("Task already marked as COMPLETED, so you could not mark as Completed AGAIN!!");
        }
       
        if(req.body.title==""){
            throw new Error("Title can not be empty string");
        }
        if(req.body.categories){
            throw new Error("You can not updated category as completed,it will automatically update if you update 'done' ")
        }
        
        // if done is true then categories for that title should be completed
        if(req.body.done){
            prevtaskData.categories="completed"
        }
        
        const body ={
            ...req.body,
            categories:prevtaskData.categories
        }
        console.log(body);

        const task = await Task.findByIdAndUpdate(req.params.id,body);
        
        res.status(200).json({
            status:"Success",
            message:"Data successfully Updated"
        });

    }catch(err){
        console.log(err);
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
