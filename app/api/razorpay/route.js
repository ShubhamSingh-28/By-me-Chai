import Payment from "@/models/payment";
import { NextResponse } from "next/server";
import { validatePaymentVerification, } from "razorpay/dist/utils/razorpay-utils";
import { connectDb } from "../auth/[...nextauth]/route";

export const POST = async(req)=>{
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)
    console.log(body.razorpay_order_id);
    let p = await Payment.findOne({oid:body.razorpay_order_id})
    if(!p){
        return NextResponse.json({
            status:400,
            message:"Order Id not found"
        })
    }
    let xx = validatePaymentVerification({"order_id":body.razorpay_order_id, "payment_id":body.razorpay_payment_id},
    body.razorpay_signature ,process.env.TEST_KEY_SECRET)
    
     if(xx){

        const updatePayment = await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:"true"},{new:true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`)
     }
     else{
        return NextResponse.json({
            status:400,
            message:"Payment failed"
        })
     }
}