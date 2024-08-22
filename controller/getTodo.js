const Todo = require("../models/Todo");

exports.getTodo = async(req,res)=>{
    try{
       const todos = await Todo.find({});

       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"data feched"
       })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"error"
        })
    }
}


exports.getTodoById = async(req,res)=>{
    try{
       const id = req.params.id;
       const todo = await Todo.findById(id);

       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data Found"
        })
       }
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`
       })
    }
    catch(err){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
         success:false,
         data:"Internal server error",
         message:error.message
        })
    }
}