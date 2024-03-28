import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient();

// async function insertUser(username:string ,password :string , firstname : string ,lastname :string ) {
//    const res= await  prisma.user.create({
//         data :{
//            email : username ,
//             firstname ,
//             lastname ,
//             password 
//         } , 
//         select :{
//             id :true ,
//             password :true,
//             firstname :true

//         }
//     })

//     console.log(res);
// }

// insertUser("vaibhxv11@gmail.com" , "pass123" , "vaibhxv" , "dudhal")


interface UpdateParams{
    firstname :string ,
    lastname :string ,
}

async function updateUser(username:string, {
    firstname ,
    lastname 
    
} : UpdateParams) {
   const res=await prisma.user.update({
        where :{email : username } ,
        data :{
            firstname ,
            lastname
        }
    })
    console.log(res);

}

updateUser("vaibhxv@gmail.com" , {
    firstname :"vaibhavf" ,
    lastname :"Dudhal"
}).then(()=>{
    console.log("User Updated ")
})