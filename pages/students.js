import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Students() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full my-20">
        <div className=" w-[25%] p-10 overflow-y-scroll">
          <h1>Students List</h1>
          <h1>Total Students : 200</h1>
          <button className="bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white w-full py-2 rounded-3xl mt-2">
            Add Student
          </button>
          <div className="flex justify-between w-full my-5">
            <input
              type="text"
              placeholder="Search Student"
              className="p-2 border border-slate-500 rounded-lg"
            />
            <button className="p-2 border border-slate-500 rounded-lg">
              Filter
            </button>
          </div>
          <div>
            <h1>All Students</h1>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
            <div className="flex gap-3 border-b-2 hover:bg-slate-200 p-3 rounded-lg">
              <img
                className="h-10 w-10 rounded-full"
                src="http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png"
                alt=""
              />
              <div>
                <h1>User name</h1>
                <h1>roll no.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[75%] p-10">
          <div className="my-7 max-w-7xl mx-auto px-4">
            <h1 className="text-2xl mb-7">Student profile</h1>
            <div className="grid gap-x-4 gap-y-8 grid-cols-3">
              <div className="">
                <dt className="capitalize text-md font-medium text-gray-500">
                  First Name
                </dt>
                <dd className=" text-md font-semibold text-gray-900">Fname</dd>
              </div>
              <div className="">
                <dt className="capitalize text-md font-medium text-gray-500">
                  Last Name
                </dt>
                <dd className=" font-semibold text-md text-gray-900">Lname</dd>
              </div>
              <div className="">
                <dt className="text-md font-medium text-gray-500">
                  Registered Email
                </dt>
                <dd className=" font-semibold text-md text-gray-900">
                  something@gmail.com
                </dd>
              </div>
              <div className="">
                <dt className="text-md font-medium text-gray-500 ">
                  Mobile Number
                </dt>
                <dd className=" font-semibold text-md text-gray-900">
                  9876543211
                </dd>
              </div>

              <div className="">
                <dt className="text-md font-medium text-gray-500">College</dt>
                <dd className=" font-semibold text-md text-gray-900">
                  CVR College of engg
                </dd>
              </div>

              <div className="">
                <dt className="text-md font-medium text-gray-500">
                  Roll Number
                </dt>
                <dd className=" font-semibold text-md text-gray-900">9876</dd>
              </div>

              <div className="">
                <dt className="text-md font-medium text-gray-500">Gender</dt>
                <dd className=" font-semibold text-md text-gray-900">female</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
