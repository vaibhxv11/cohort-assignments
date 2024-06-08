import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' }
      },
      async authorize(credentials) {
        console.log(credentials);

        // Implement your own logic here to verify the user
        // This example simply returns a hardcoded user
        
          return {
            id: "user1",
            name: "vaibhav dudhal",
            email: "vaibhavdudhal@gmail.com"
          };
         
      }
    })
  ],

});

export const GET = handler;
export const POST = handler;
