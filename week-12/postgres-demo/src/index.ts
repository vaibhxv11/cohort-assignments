import { Client } from 'pg';

const client =new Client({
    connectionString:"postgresql://postgres:Shruti@123@localhost/postgres"
})

// async function createUsersTable(){
//     await client.connect()
//     const result =await client.query(`
//     CREATE TABLE USERS (
//         id SERIAL PRIMARY KEY ,
//         USERNAME VARCHAR(50) UNIQUE NOT NULL ,
//         email VARCHAR(255) UNIQUE NOT NULL ,
//         password VARCHAR(255) NOT NULL ,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
//     );
//     `)

//     console.log(result);
// }

// createUsersTable();

// INSERT QUERY
async function insertuserTable( username :string , password : string , email :string){
    await client.connect()
    // const result =await client.query(`
    //    INSERT INTO USERS (username , password , email)
    //    values('${username}' , '${password}' , '${email}')
    // `)

    const result =await client.query(`
    INSERT INTO USERS (username , password , email)
    values($1, $2 , $3)
 ` , [username , password , email])

    console.log(result);
}

insertuserTable(
    "vaibh" , "123456" , "vai@gmail.com"
)
