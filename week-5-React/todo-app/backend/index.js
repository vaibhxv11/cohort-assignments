const express=require("express");  //initialises emplty express app
const app=express();
const {todo} =require("./database")
const {createTodo , updateTodo} =require("./types");

app.use(express.json());

app.post("/todo" , async function(req , res ){

    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    
    if(!parsedPayload.success){

        res.status(411).json({
           msg:"You sent the wrong inputs" 
        })
        return;
    }

    await todo.create({
        title :createPayload.title ,
        description :createPayload.description ,
        completed :false 

    })

    res.status(200).json({
        msg :"Todo created"

    })





})

app.get("/todos" ,  async function(req , res){

    const todos=await todo.find({ }) ;  // todos return promises
     
    res.json({
        todos
    })

})

app.put("/completed" , async function(req ,res){
       
    const updatePayload=req.body;
    const parsedPayload=updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
           msg:"You sent the wrong inputs" 
        })
        return;
    }

    
    // await todo.update({
    //    _id :req.body.id
    // }  , {
    //     completed :true 

    // })

    



    res.json({
        msg :"Todo marked as completed "
    })


})

const PORT=3000;
app.listen(PORT , ()=>{
    console.log(`APP is listening at ${PORT}`);
})
