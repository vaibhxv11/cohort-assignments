import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";
import { create } from "domain";
const client =new PrismaClient();
export async function POST(req :NextRequest){

    const body=await req.json();
    await client.user.create({
        data :{
            username: body.username ,
            password : body.password
        }
    })

    //store the body in the database
    console.log(body);
    return Response.json({
        message :"YOur are logged in"
    })
}