"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
function page() {
  const { data: session } = useSession()
 const router= useRouter()
  if (!session) {
    router.replace( "/login")
  }
  return (
    <div className=" flex items-center justify-center flex-col">
      <h1 className=" text-2xl font-bold my-4">Welcome to your Dashboard</h1>
      <div className=" flex gap-1 w-[550px] flex-col">
        <label className=" text-lg font-semibold" >Name</label>
          <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" />
          <label className=" text-lg font-semibold" >Email</label>
          <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder=""/>
          <label className=" text-lg font-semibold" >Username</label>
            <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder=""/>
            <label className=" text-lg font-semibold" >Profile Picture</label>
            <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder=""/>
            <label className=" text-lg font-semibold" >Cover Picture</label>
          <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder=""/>
          <label className=" text-lg font-semibold" >Razorpay id</label>
            <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder="Enter Amount"/>
            <label className=" text-lg font-semibold" >Razorpay Secret</label>
            <input type="text" className=" w-full p-3 rounded-xl bg-slate-800" placeholder="Enter Amount"/>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600
       to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800 font-medium rounded-lg my-3 text-sm px-5 py-2.5 text-center me-2 mb-2">
          Save</button>
          </div>
    </div>
  )
}

export default page