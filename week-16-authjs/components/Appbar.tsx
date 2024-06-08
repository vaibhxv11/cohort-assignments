"use client"
import {signIn , signOut , useSession} from "next-auth/react"

export const Appbar =() =>{
    const session=useSession();
    return <div>
      <button onClick={()=>{
        signIn()
      }}>Sign IN
        
         </button>

         <button onClick={()=>{
        signOut()
      }}>Sign Out
        
         </button>  

         {JSON.stringify(session)}


    </div>
}