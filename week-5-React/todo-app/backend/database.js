const mongoose=require("mongoose");


try{

      mongoose.connect("mongodb+srv://vaibhavdudhal:fLbcAZQjyYpGEWLy@cluster0.lj09mvc.mongodb.net/todo-app")
      console.log("DB connected ")
} catch(err){
    console.error("DB connection error:", err);
}


const todoSchema=mongoose.Schema({

    title :String ,
    description :String ,
    completed :{
        type :Boolean ,
        default :false 
    }
})
 
const todo=mongoose.model('todos'  , todoSchema);

module.exports={todo } 