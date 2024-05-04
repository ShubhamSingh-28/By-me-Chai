"use server"

import { connectDb } from "@/app/api/auth/[...nextauth]/route"
import Payment from "@/models/payment"
import User from "@/models/user"
import Razorpay from "razorpay"


export const initiate =async(amount, to_user,paymentform)=>{
    await connectDb()
    const instance = new Razorpay({key_id:process.env.NEXT_PUBLIC_TEST_KEY_ID, key_secret:process.env.TEST_KEY_SECRET})
    
    let options = {
        amount:Number.parseInt(amount),
        currency:"INR",
    }
    let x =await instance.orders.create(options)
    
    // create a pending order
    await Payment.create({
        oid:x.id, amount:amount, to_user:to_user, name:paymentform.name, message:paymentform.message, })
       
        return x
}