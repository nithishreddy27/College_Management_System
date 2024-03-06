import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "../lib/hooks";
import { useRouter } from "next/router";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const router = useRouter();

  return (
    <div>
      <div className="border-b border-gray-300 py-2 fixed top-[-7px] w-[100%] z-40 bg-slate-50">
        <div className="flex items-center justify-between  flex-wrap ">
          {/* <h1>Provast</h1> */}
         
          {/* <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          /> */}
          {user && (
           <div className="navbar fixed top-0 z-50 py-2 px-6 font-serif bg-transparent backdrop-filter backdrop-blur-lg shadow-md w-full">
           <div className="relative grid grid-cols-2 items-center">
             <Link className="py-1 ml-5 mr-32 text-4xl " href="#">
               College Management System
             </Link>
             <div className="flex gap-2 mx-10 text-lg align-text-bottom">
               <Link
                 className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                 href={`/profile/${user.position}`}
               >
                 Home
               </Link>
               {/* <Link
                 className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                 href="#"
               >
                 Choose
               </Link> */}
              
               {user.position == "student" && (
                  <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/profile/student/circular"
                >
                  Circular
                </Link>
               )} 
               {user.position == "student" && (
                  <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/profile/student/attendance"
                >
                  Attendance
                </Link>
               )} 
               {user.position == "hod" && (
                  <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/profile/hod/students"
                >
                  Students
                </Link>
               )} 
               {user.position == "student" && (
                 <Link
                 className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                 href="/profile/student/leave"
               >
                 Leave
               </Link>
               )} 
               {user.position == "hod" && (
                 <Link
                 className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                 href="/profile/hod/leave"
               >
                 Leave
               </Link>
               )} 
               {user.position == "faculty" && (
                  <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/profile/student/circular"
                >
                  Circular
                </Link>
               )} 
               {user.position == "hod" && (
                  <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/profile/hod/circular"
                >
                  Circular
                </Link>
               )} 
               {user.position == "faculty" && (
                  <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/attendance"
                >
                  Attendance
                </Link>
               )} 
               {user.position == "faculty" && (
                 <Link
                 className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                 href="/profile/faculty/leave"
               >
                 Leave
               </Link>
               )} 
               
               
               <Link
                 className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                 href="/api/auth/logout"
               >
                 Logout
               </Link>
               
               
             </div>
           </div>
         </div>
          )}
          {!user && (
            <div className="navbar fixed top-0 z-50 py-4 px-10 font-serif bg-transparent backdrop-filter backdrop-blur-lg shadow-md w-full">
            <div className="relative grid grid-cols-2 items-center">
              <Link className="py-1 ml-5 mr-32 text-4xl " href="#">
                College Management System
              </Link>
              <div className="flex gap-2 mx-10 text-lg align-text-bottom">
                <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="#"
                >
                  Home
                </Link>
                <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="#"
                >
                  Choose
                </Link>
                
                <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="#"
                >
                  Pricing
                </Link>
                <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="#"
                >
                  Contact
                </Link>
                <Link
                  className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
                  href="/auth/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
