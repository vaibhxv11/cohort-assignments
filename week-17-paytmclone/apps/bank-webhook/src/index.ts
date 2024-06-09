import express from "express";
import db from "@repo/db/client"

const app=express();

app.post("/hdfcwebhook" , async (req , res)=>{


    //add zod validation
    //check if this request actually came from hdfc bank 

    const paymentInforation ={
        token :req.body.token ,
        userId :req.body.user_identifier ,
        amount : req.body.amount 
    };

   await  db.balance.update({
        where :{
            userId :paymentInforation.userId
        } ,
        data :{
            amount :{
                increment : paymentInforation.amount
            }
        }
    });

    await db.onRampTransaction.update({
        where :{
            token :paymentInforation.token ,
        } ,
        data :{
            status :"Success"
        }
    }) 


    res.status(200).json({
        message :"Captured"
    })

    


})