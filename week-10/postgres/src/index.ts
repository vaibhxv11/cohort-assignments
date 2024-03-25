import {Client} from 'pg'

const client =new Client({

    // write all this for local postgres setup
    // host :'' ,
    // port :'' ,
    // database :'neodb',
    // user :' ',
    // password :'',

    //neotdb string
    connectionString:"postgresql://neondb_owner:tmX3fCwbE2xr@ep-fragrant-rain-a5066qwq.us-east-2.aws.neon.tech/neondb?sslmode=require"
})



async function createUserTable(){
    
        await client.connect();
    const result =await client.query(`
    create table users(
        id SERIAL PRIMARY KEY ,
        username VARCHAR(20) UNIQUE NOT NULL ,
        email VARCHAR(20) UNIQUE NOT NULL ,
        password VARCHAR(20)  NOT NULL ,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        
    );
    `)

    console.log(result);

}

createUserTable();