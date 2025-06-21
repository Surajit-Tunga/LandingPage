import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Nav= () => {
    const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false); //hook
    const toggleNavbar =()=> {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    
    return (
    <nav  className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex item-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2"src= {logo} alt="" />
                    <span className="text-xl traking-tight mt-1.5">
                        Landing
                    </span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12"> 
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact US</li>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 my-2  border rounded-md">
                        Sign In
                    </a>
                    <a href="#"className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-3">
                        Create an Account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/>: <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center lg:hidden">
                    <ul className="flex flex-col items-center"> 
                       <li className="py-3">Home</li>
                       <li className="py-3">About</li>
                       <li className="py-3">Services</li>
                       <li className="py-3">Contact US</li>
                    </ul> 
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3  border rounded-md">
                        Sign In
                    </a>
                    <a href="#"className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-3">
                        Create an Account
                    </a>
                    </div>
                </div>
            )}
        </div>

    </nav>
  );
}

export default Nav
