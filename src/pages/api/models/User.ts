import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
export interface User extends Document{
    userName:string,
    email:string,
    password:string,
}

const userSchema:Schema<User>=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\@.+\..+/,"please provide valid email address"]
    },
    password:{
        type:String,
        min:[8,"password must be greater than 8 characters"],
        max:[20,"password must be not exceed 20 characters"],
    },
})

userSchema.pre('save', async function (next) {
  const user = this as User;
  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});


const User=mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User",userSchema )
export default User;