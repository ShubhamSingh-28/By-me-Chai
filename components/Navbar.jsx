"use client"

import { useSession, signOut } from "next-auth/react"

import React, { useState } from 'react'

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function Navbar() {
  const { data: session } = useSession()
 const[showdropdown, setshowdropdown]= useState(false)
  
  return (
    <nav className="bg-blue-950 text-white flex items-center justify-between md:px-6 px-2 py-[19px]">
      <h1 className=" md:text-2xl text-lg font-bold"><Link href={"/"}>GetmeChai</Link></h1>
    {
      session ? <>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><div className=" w-32 lg:w-48 text-black">
          Welcome {session.user.name}
          </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-6 md:w-[230px] w-40  ">
              <Link href="/dashboard" title="Dashboard">
                Dashboard
              </Link>
              <Link href={""} title="Dashboard"> 
                Homepage
              </Link>
               <button onClick={()=>signOut()}>Logout</button>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </>
  :<Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600
  to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
   dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
     Login</button></Link>
}
</nav>
  )
}

export default Navbar





