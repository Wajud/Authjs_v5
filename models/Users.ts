import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
   firstName: {type: String, required: true},
   lastName: {type: String, required: true},
   email: {type: String, required: true},
  password: {type: String, select: false},
  // for routes protection we will need the role
  role: { type: String, default: "user"},
  image: {type: String},
  //from Google and Github providers
  authProviderId: {type: String}
  
})

export const User = mongoose.models?.User || mongoose.model("User", userSchema)