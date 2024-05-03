import mongoose, {  Schema } from "mongoose";


const paymentSchema =new Schema({
    name:{type:String, },
    to_user:{type:String, required:true},
    oid:{type:String, required:true},
    message:{type:String},
   amount:{type:Number,required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now},
    done:{type:Boolean,default:false}
});

const Payment =mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;