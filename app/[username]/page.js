import Image from "next/image"
import PaymentPage from "@/components/PaymentPage"

const Username=({params}) =>{
 
  return (
    <>    
   <PaymentPage params={params}/>
    </>
  )
}

export default Username