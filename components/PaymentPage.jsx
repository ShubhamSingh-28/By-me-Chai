

import { initiate } from "@/actions/userActions"
import Script from "next/script"
import Razorpay from "razorpay"
import Payment from "./Payment";

//import { useState } from "react"



function PaymentPage({params}) {

 // const [paymentform, setPaymentform] = useState({ })
/*
  const handleChange =(e)=>{
    setPaymentform({...paymentform, [e.target.name]:e.target.value})
  }
  */
  const pay = (amount) => {
  let a=  initiate(amount, params.username, paymentform)
    var options = {
      "key": "rzp_test_PSqnEmvO43rz2D", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new Razorpay(options);

  };
  return (
    <>
    
<Script crossOrigin src="https://checkout.razorpay.com/v1/checkout.js"></Script>

<Payment pay={pay}/>



    </>
  )
}

export default PaymentPage