import React, { useState } from "react";
import { useUser } from "../../../lib/hooks";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import moment from "moment";
import DatePicker from "react-datepicker";

export default function AddStdDetails() {
  const user = useUser();
  const u = JSON.stringify(user, null, 2);
  var username = "";
  if (user) {
    username = user.username;
  }

  const [position, setPosition] = useState("student");
  const [mess, setmess] = useState("");
  const [collegeId, setcollegeId] = useState("false");
  const [college, setCollege] = useState();


  return (
    <div>
      <img
        className="absolute bottom-0 w-[100%] object-cover"
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
      {user && (
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-2xl relative grid h-screen place-items-center">
          <div className="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10 ">

            
          <form method="POST" action="../api/addDetails" className=' mx-auto my-10'>

            <div className='flex flex-col justify-between'>
              <div className=''>
                <label htmlFor="username" className="text-sm font-semibold">Signed in as:</label>
                <input type="text"  value={username} className="mx-2 border-none " id="username" name="username" onChange={()=>{
                  console.log("dont change me");
                }}/>
              </div>
              <fieldset className="mt-4">
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      name="notificationMethod"
                      value="student"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      defaultChecked="true"
                      onChange={(event) => {
                        setPosition("student");
                      }}
                    />
                    <label
                      htmlFor="student"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      student
                    </label>
                  </div>
                </div>
              </fieldset>

              {position == "student" && (
                <div>
                  
                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium  text-gray-700"
                        >
                          First Name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        required
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="yw7fvi"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="middleName"
                          className="block text-sm font-medium  text-gray-700"
                        >
                          Middle Name
                        </label>
                        {/* <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span> */}
                      </div>
                      <input
                        type="text"
                        name="middleName"
                        id="middleName"
                        autoComplete="given-name"
                        required
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="yw7fvi"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        required
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="14yoqp"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
                      <label
                        className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                        id="headlessui-listbox-label-1"
                      >
                        Gender
                        <span className="ml-1 mt-1 text-red-600 font-semibold">
                          *
                        </span>
                      </label>
                      <div className="relative -top-[23px] left-0">
                        <select
                          name="gender"
                          className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        >
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="text-md  text-black  ">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        max={moment().format("YYYY-MM-DD")}
                        required
                        className="mt-1 focus:outline-none focus:shadow-outline focus:border-gray-300	 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                      />
                      {/* <DatePicker maxDate={moment().toDate()} /> */}
                    </div>
                    
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <div className="flex">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        required
                        disabled=""
                        pattern="[6789][0-9]{9}"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        // value=""
                        fdprocessedid="zyy11"
                      />
                    </div>

                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    
                    
                  </div>
                  

                  <div className="mt-4">
                    
                      <div className="mt-4">
                        <button
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 "
                          type="submit"
                        >
                          {" "}
                          Submit{" "}
                        </button>
                      </div>
                    
                    
                  </div>
                </div>
              )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* {!user && (
      <div className="relative z-40 text-4xl  font-bold text-center my-auto h-[100%]">
       <p className="my-auto"> Please sign in first</p>
      </div>
     )} */}
    </div>
  );
}
