"use client"
import {ClerkLoaded, SignInButton,SignedIn, UserButton, useUser} from "@clerk/nextjs"
import Link from "next/link";
import Form from "next/form"
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/app/(store)/store";
import {Search} from "lucide-react";
const Header = () => {
    const {user} = useUser();
    const itemCount = useBasketStore((state)=>
      state.items.reduce((total, item)=> total + item.quantity , 0)
    );

    const createClerkPasskey =async ()=>{
      try {
        const response = await user?.createPasskey();
        console.log(response);
      } catch (err) {
        console.error("Error:",JSON.stringify(err, null, 2))
      }
    }
  
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/*Top row */}
      <div className="flex w-full flex-wrap justify-between items-center" >
        <Link href="/" className="hover:opacity-50 cursor-pointer mx-auto sm:mx-0 "><img src={"logo.png"} alt={"logo"}  className="w-10 h-10 md:w-19 md:h-19 lg:w-16 lg:h-16 object-contain mx-auto sm:my-auto mt-3 rounded-full"/></Link>
        <Form action="/search" className=" flex sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0 gap-2">
        <input type="text" name="query" placeholder="Search for products" className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:riong-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"/>
        <button type="submit" className="search-btn  mx-2">
                    <Search className="size-5" />
                </button>
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none" >
          <Link href="/basket" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          <TrolleyIcon className="w-6 h-6"/>
          {/*Span item count once global state is implemented */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{itemCount}</span>
          <span  className="text-sm" >My Basket</span></Link>
          {/*User area  */}
          <ClerkLoaded>
            <SignedIn>

            <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          < PackageIcon className="w-6 h-6"/>
          {/*Span item count once global state is implemented */}
          <span className="text-sm">My Orders</span></Link>
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton/>
                <div className="hidden sm:Lblock text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ):(<SignInButton mode="modal" />)}

            {user?.passkeys.length === 0 && (

              <button onClick={createClerkPasskey} className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 border-blue-300 font-bold py-2 px-4 rounded border ">Create passkey</button>
            )}
          </ClerkLoaded>
        </div>
     
      </div>
    </header>
  );
}

export default Header;
