"use client"

import { initiate } from "@/actions/userActions"
import { razorpay } from "@/lib/razorpay"
import Script from "next/script"

import { useState } from "react"



function PaymentPage({params}) {

  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })

  const handleChange =(e)=>{
    setPaymentform({...paymentform, [e.target.name]:e.target.value})

    console.log(paymentform);
  }
  const pay = (amount) => {
    initiate(amount, params.username, paymentform)
      .then((a) => {
        const options = {
          key: process.env.TEST_KEY_ID,
          amount: amount,
          currency: "INR",
          name: "Buy Me A Chai",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: a.id,
          callback_url: `${process.env.URL}/api/razorpay`,
          prefill: {
            name: paymentform.name,
            email: "gaurav.kumar@example.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new razorpay(options); // Use Razorpay here
        rzp1.open();
      })
      .catch((error) => {
        console.error("Error initiating payment:", error);
      });
  };
  return (
    <>
    
<Script crossOrigin src="https://checkout.razorpay.com/v1/checkout.js"></Script>



<div className="Cover w-full relative">
      <img className=" object-cover w-full h-[350]" alt="" src={"/patreon_banner.gif"}/>
      <div className=" absolute right-[47%] -bottom-12 border-white border-2 rounded-full">
      <img className=" rounded-full h-24" alt="" width={100} height={100} src="https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=animal-cat-adorable-20787.jpg&fm=jpg"/>
      </div>
    </div>
    <div className=" flex my-14 items-center justify-center flex-col">
      <div className=" font-bold text-lg">@{params.username}</div>
     <div className=" text-slate-400">Creating Animated art for VTT`s</div>
     <div className=" text-slate-400">9,719 members . 82 posts . $15,450/release</div>


      <div className="payment flex gap-3 w-[80%] mt-6">
        <div className="supporter w-1/2 bg-slate-900 rounded-2xl text-white p-6">
          {/*Show list of all the supporters as a leaderboard*/}
          <h2 className=" text-3xl font-bold my-4">Supporters</h2>
          <ul className=" mx-8">
            <li className=" my-4 flex gap-2 items-center ">
              <img width={36} src="/user.png"/>
              <span>Shubham doneted <span className=" font-bold">₹30</span> with A message " I Support you bro. lots of 🧡"</span>
              </li>
              <li className=" my-2 flex gap-2 items-center ">
              <img width={36} src="/user.png"/>
              <span>Shubham doneted <span className=" font-bold">₹30</span> with A message " I Support you bro. lots of 🧡"</span>
              </li>
              <li className=" my-2 flex gap-2 items-center ">
              <img width={36} src="/user.png"/>
              <span>Shubham doneted <span className=" font-bold">₹30</span> with A message " I Support you bro. lots of 🧡"</span>
              </li>
          </ul>
        </div>
        <div className="maepayment w-1/2 bg-slate-900 rounded-2xl text-white p-6">
          <h2 className="text-2xl font-bold my-4">Make a payment </h2>
          <div className=" flex gap-2 flex-col">
          <input onChange={handleChange} value={paymentform.name} name="name" type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder="Enter Name"/>
          <input onChange={handleChange} value={paymentform.message} name="message" type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder="Enter Message"/>
            <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder="Enter Amount"/>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600
       to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Pay</button>
          </div>
          <div className=" flex gap-3 mt-5">
          <button className=" bg-slate-800 p-3 rounded-xl"  onClick={()=>pay(1000)}>Pay ₹10</button>
          <button className=" bg-slate-800 p-3 rounded-xl" onClick={()=>pay(2000)}>Pay ₹20</button>
          <button className=" bg-slate-800 p-3 rounded-xl" onClick={()=>pay(3000)}>Pay ₹30</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default PaymentPage