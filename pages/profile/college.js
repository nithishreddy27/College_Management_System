import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import {useUser} from "../../lib/hooks"
import Link from "next/link"
import { useRouter } from 'next/router';
import { getLoginSession } from '../../lib/auth';
import { findUser } from '../../lib/user';

export default function College({userDetails}) {
  const user = JSON.parse(userDetails)
  console.log(userDetails)
  const [position, setPosition] = useState("profile");
  const router = useRouter();
  return (
    // <div>student  {JSON.stringify(user)}</div>
    <div className="h-screen w-screen">
    <Navbar />
    <div>
      <img
        className="object-cover h-40 w-full"
        src="https://www.provast.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1444628838545-ac4016a5418a%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1950%26q%3D80&w=1920&q=75"
      ></img>
    </div>
    <div>
      <img
        className="absolute top-[20%] border-4 border-white rounded-full h-40 w-[10%] mx-36  "
        src="https://www.provast.io/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1647117869%2Fuploads%2Fbphhxvmlcyyu2pntbikm.png&w=1920&q=75"
        alt=""
      />
    </div>
    <div className=" h-[64%] p-10">
      {/* {console.log("user", user)} */}
      {user&& (
        <div>
          <div className="flex justify-around">
            <h1 className="align-middle text-2xl font-bold ">
              {user.profile.firstName} {user.profile.lastName}
            </h1>
            <button className="py-2 px-4 bg-gray-200 rounded-lg border">
              <Link href="./editProfile">Edit profile</Link>
            </button>
          </div>
          <div className="flex space-x-10 mt-8 pl-14 border-b border-gray-300">
            <h1
              className="focus:border-b-orange-400 text-gray-500 hover:text-gray-700 hover:border-gray-300 py-2 px-1 border-b-2 font-medium text-md cursor-pointer"
              onClick={(event) => {
                setPosition("profile");
              }}
            >
              Profile
            </h1>
            <h1
              className=" focus:border-b-orange-400 text-gray-500 hover:text-gray-700 hover:border-gray-300 py-2 px-1 border-b-2 font-medium text-md cursor-pointer"
              onClick={(event) => {
                setPosition("education");
              }}
            >
              Education
            </h1>
          </div>

          {position == "profile" && (
            <div className="grid grid-cols-3 gap-4 p-5">
              <div>
                <h1 className="">First Name</h1>
                <h1 className="font-bold">{user.profile.firstName}</h1>
              </div>
              <div>
                <h1 className="">Last Name</h1>
                <h1 className="font-bold">{user.profile.lastName}</h1>
              </div>
              <div>
                <h1 className="">Registered Email</h1>
                <h1 className="font-bold">{user.username}</h1>
              </div>
              <div>
                <h1 className="">Mobile Number</h1>
                <h1 className="font-bold">{user.phone.value}</h1>
              </div>
              <div>
                <h1 className="">College</h1>
                <h1 className="font-bold">{user.college.name}</h1>
              </div>
              <div>
                <h1 className="">Roll Number</h1>
                <h1 className="font-bold">{user.rollNumber.value}</h1>
              </div>
              <div>
                <h1 className="">Gender</h1>
                <h1 className="font-bold">{user.profile.gender}</h1>
              </div>
            </div>
          )}
          {position == "education" && (
            <div>
              <h1>Current / Ongoing Course</h1>
              <hr />
              <div className="flex my-5">
                <hr className="h-40 w-1 mx-4 bg-black" />
                <div className="w-[100%]">
                  <div className="flex justify-between w-[100%] bg-blue-100 py-2 px-4">
                    <div>Course:{}</div>
                    <div>gpa</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}


     
    </div>
  </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
    
  console.log("req",user)
  const userDetails = JSON.stringify(user)
  return {
    props: {userDetails:userDetails},
  };
};