"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/Users";
import { redirect } from "next/navigation";
import {hash} from "bcryptjs"
import { signIn } from "@/auth";


const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string

  try{
    await signIn("credentials", {
      redirect: false,
      callbackUrl:"/",
      email,
      password

    })
  }catch(err){
    throw err
  }

  redirect("/")
}

const register = async (formData: FormData) =>{
   const firstName = formData.get("firstname")
   const lastName = formData.get("lastname")
   const email = formData.get("email")
   const password = formData.get("password") as string;
   if(!firstName || !lastName || !email || !password){
   throw new Error("Please fill all fields")
  }

 await connectDB();
 //existing user trying to register

 const existingUser = await User.findOne({email})
 if(existingUser){
   throw new Error("User already exists")
 }

 const hashedPassword = await hash(password, 12)

 await User.create({firstName, lastName,email, password: hashedPassword})
 console.log("User created successfully")
 redirect("/login")
}

export {register, login}