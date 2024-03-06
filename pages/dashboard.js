import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="relative mt-20 h-32 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 w-full"></div>
      <div className="grid grid-cols-4 gap-12 absolute top-24 right-0 left-0 p-10">
        <div className="col-span-3">
          <div className="flex flex-col gap-10">
            <div className="flex w-full justify-between p-10  shadow shadow-slate-400 bg-white rounded-md h-auto">
              <img
                className="h-20 w-20 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>Welcome back</h1>
                <h1>User</h1>
              </div>
              <div className="flex p-6">
                <h1>Students : 200</h1>
                <h1>Sections : 3</h1>
                <h1>something : 7</h1>
              </div>
              <button className="border-solid rounded-md">View Profile</button>
            </div>
            <div className="bg-white rounded-md shadow shadow-slate-400 p-10 flex justify-between">
              <div>
                <h1>Student name : user</h1>
                <h1>Reason : Fever</h1>
              </div>
              <button className="border-2 rounded-lg w-32 py-2 border-slate-500">
                Open letter
              </button>
              <button className="bg-green-700 text-white py-2 w-32 rounded-lg">
                Approve
              </button>
              <button className="bg-red-600 text-white py-2 w-32 rounded-lg">
                Reject
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow shadow-slate-400 h-auto">
          <div className="flex flex-col justify-between p-6">
            <h1>Attendance</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
