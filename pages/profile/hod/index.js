import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { getLoginSession } from '../../../lib/auth';
import { findUser } from '../../../lib/user';
import Link from "next/link"
import crypto from "crypto";
import { BsFillTelephoneFill  } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
export default function Index({userDetails}) {
    const user = JSON.parse(userDetails)

    console.log("user",user);
    const [position ,setPosition] = useState("Faculty")
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
         <div className="flex mt-[9.5vh]">
           <div className="w-[20%] bg-gray-800 h-screen">
             <p className="bg-violet-800 text-white text-center py-5 tracking-widest">
               FACULTY PROFILE
             </p>
             <div className="flex px-4 py-7">
               <div>
                 <img
                   className="h-22 w-22 rounded-full"
                   src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                 />
               </div>
               <div className="text-white py-8 px-6">
                 <p className="text-sm tracking-wide">{user.email}</p>
               </div>
             </div>
             <div className="px-8 py-3 text-white">
               <div className="flex gap-1 py-4">
                 <div className="text-2xl pt-1 cursor-pointer">
                   {/* <BiSolidUser /> */}
                 </div>
                 <div className="px-2 pl-6 py-1 ">
                 <p className=" text-white hover: cursor-pointer">
                   {user.profile.firstName}
                 </p>
                 </div>
               </div>
               <div className="flex gap-1 py-4 ">
                 <div className="text-xl pt-2 cursor-pointer">
                   <MdEmail/>
                 </div>
                 <div className="px-2 pl-6 py-1 ">
                 <p className=" text-white underline hover: cursor-pointer">
                   {user.email}
                 </p>
                 </div>
               </div>
               <div className="flex gap-1 py-4">
                 <div className="text-xl pt-2 cursor-pointer">
                   <BsFillTelephoneFill />
                 </div>
                 <div className="px-2 pl-6 py-1 ">
                 <p className=" text-white hover: cursor-pointer">
                   {user.phone?.value}
                 </p>
                 </div>
               </div>
               {console.log('user',user)}
               <div className="flex gap-1 py-4">
                 <div className="text-xl pt-2 cursor-pointer">
                   <BsFillHouseDoorFill />
                 </div>
                 <div className="px-2 pl-6 py-1 ">
                 <p className=" text-white hover: cursor-pointer">
                   {user.department}
                 </p>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="w-[80%] mt-[7vh] ">
             <p className="text-black text-3xl text-center underline decoration-slate-600 font-serif"> P R O F I L E</p>
           <div className=" px-10 py-5">
           <div className=" py-3 px-14 gap-10 my-10 ">
             <div className="flex gap-8">
             <div className="flex flex-col w-[50%] py-2">
               <label className="text-violet-900 font-bold text-[12px]">First Name</label>
               <input type="text" className=" text-gray-700 cursor-not-allowed  rounded-md py-1  px-2  " value={user.profile.firstName}  />
             </div>
          
           <div className="flex flex-col w-[50%] py-2">
               <label className="text-violet-900 font-bold text-[15px]">Last Name</label>
               <input type="text" className=" text-gray-700 cursor-not-allowed rounded-md py-1 px-2  " value={user.profile.lastName}  />
             </div>
             </div>
           <div className="flex flex-col py-2">
               <label className="text-violet-900 font-bold text-[15px]">Registerd Email</label>
               <input type="text" className=" text-gray-700 cursor-not-allowed rounded-md py-1 px-2  " value={user.email}  />
             </div>
             <div className="flex flex-col py-4">
               <label className="text-violet-900 font-bold text-[15px]">Roll Number</label>
               <input type="text" className=" text-gray-700 cursor-not-allowed rounded-md py-1 px-2  " value={user.email}  />
             </div>
             <div className="flex flex-col py-4">
               <label className="text-violet-900 font-bold text-[15px]">Department Name</label>
               <input type="text" className=" text-gray-700 cursor-not-allowed rounded-md py-1 px-2" value={user.department} />
             </div>
             <div className="flex flex-col py-4">
               <label className="text-violet-900 font-bold text-[15px]">Roll Number</label>
               <input type="text" className=" text-gray-700 cursor-not-allowed rounded-md py-1 px-2  " value={user.rollNumber.value}  />
             </div>
             </div>
           </div>
           </div>
         </div>
       </div>

    </>
  )
}
export const getServerSideProps = async ({ req, res }) => {
    const session = await getLoginSession(req);
    const user = (session?._doc && (await findUser(session._doc))) ?? null;
    

    const data = JSON.stringify(user)
    if (!user) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }


    if(user){
      const inputHash = crypto.pbkdf2Sync("test@123", user.salt, 1000, 64, "sha512").toString("hex");
    const passwordsMatch = user.hash === inputHash; 
    if (passwordsMatch) {
      // console.log(" first first first", user);
      return {
        redirect: {
          destination: "/auth/changePassword",
          permanent: false,
        },
      };
    }
    
  }
    if (user.position !== "hod") {
      return {
        redirect: {
          destination: `/profile/${user.position}`,
          permanent: false,
        },
      };
    }
  return {
      props: {
      
        userDetails:data
  
      },
    };
  };


