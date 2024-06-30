import NextAuth, { CredentialsSignin } from "next-auth"
import credentials from "next-auth/providers/credentials"
import {User} from "@/models/Users"
import connectDB from "./lib/db"
import { compare } from "bcryptjs"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "credentials",

      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },

      authorize: async(credentials)=> {
        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined

        if(!email || !password){
          throw new CredentialsSignin("Please provide both email and password")
        }

          await connectDB()

          const user = await User.findOne({email}).select("+password +role")

          if(!user){
            throw new Error("Invalid email or password")
          }

          if(!user.password){
            throw new Error("Invalid Password")
          }

          const isMatched = await compare(password, user.password)

          if(!isMatched){
            throw new Error("Password mismatch")
          }
    
          const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            id: user._id
          }

          return userData
      }

    })
  ],
  pages: {
    signIn: "/login"
  }
})