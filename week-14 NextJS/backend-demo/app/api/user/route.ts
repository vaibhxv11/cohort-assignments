// export function GET(){
//     return Response.json({
//         email :"vaibhav@gmail.com" ,
//         name :"vaibhav Dudhal"
//     })
// }

import { NextRequest } from "next/server"


export async function POST(req :NextRequest){

    const body=await req.json();

    //store the body in the database
    console.log(body);
    return Response.json({
        message :"YOur are logged in"
    })
}