const express=require("express");
const router=express.Router();
const zod=require("zod");
const jwt=require("jsonwebtoken");


const signupSchema=zod.object({
    username :zod.string() ,
    password :zod.string() ,
    firstName :zod.string() ,
    password :zod.string() ,

})



route.post("/signup"  , async (req , res)=>{
    const body=req.body;

    const  { success }=signupSchema.safeParse(req.body);

    if(!success){
        return res.json({
            message :"Email already taken / Incorrect Inputs"
        })

    }

    const user =User.findone({
        username :body.username

    })

    if(user._id){
        return res.json({
            message :"Email Already taken /Inccorect Inputs"
        })
    }

    const dbUser=await User.create(body);
    const token=jwt.sign({
        userId :dbUser._id

    } , process.env.JWT_SECRET);

    res.json({
        message :"User Created Successfully" ,
        token : token

    })



})

module.exports=userRouter;