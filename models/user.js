import mongoose, {  Schema } from "mongoose";


const Usermodel =new Schema({
    email:{type:String, required:true},
    name:{type:String, required:true},
    username:{type:String,required:true},
    profilePic:{type:String},
    coverPic:{type:String},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
});

const User =mongoose.models.User || mongoose.model("User", Usermodel);

export default User;