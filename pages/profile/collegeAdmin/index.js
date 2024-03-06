import React from "react";
import Navbar from "../../../components/Navbar";
import { getLoginSession } from "../../../lib/auth";
import { findUser } from "../../../lib/user";
import crypto from "crypto";

export default function index({ userDetails }) {
  const user = JSON.parse(userDetails);
  return (  
    <div > 
      <Navbar />
      {/* <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/410/75/610/pearls-blueprints-calculator-civil-engineering-wallpaper-preview.jpg)",
        }}
      > */}
        <div className="w-[50%] mt-28 overflow-scroll gap-4  mx-auto my-3">
            <div className="bg-white shadow-xl rounded-xl px-8 mx-auto border mb-10">
              <form
                method="POST"
                action="../../api/auth/addUsers"
                className=" mx-auto  my-10"
              >
                <fieldset className="mt-4">
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center">
                      {/* <input
                        type="radio"
                        id="college"
                        name="position"
                        value="viceprincipal"
                        defaultChecked
                        className="focus:ring-orange-500 h-4 w-4   text-orange-600 border-gray-300"
                        onChange={(event) => {
                          setPosition("viceprincipal");
                        }}
                      /> */}
                      <label
                        htmlFor="college"
                        className="tracking-wide block text-xl font-semibold capitalize text-pink-900"
                      >
                        Vice Principal
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div>
                  <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        htmlFor="paraphrase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Paraphase
                      </label>
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="paraphrase"
                        id="paraphrase"
                        required
                        value={user.college.paraphrase}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500"
                        onChange={() => {}}
                      />
                    </div>
                    <p
                      className="mt-1 text-xs text-gray-500"
                      id="pharaphase-description"
                    >
                      Enter a passphrase that associates with your college
                      placement cell.
                    </p>
                    {/* <p className="text-red-500">{mess}</p> */}
                  </div>

                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
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
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        required
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
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="rollnumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Roll Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <div className="flex">
                        <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                          College
                        </label>
                        <span className="relative top-4 ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          name="college"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                          value={user.college.name}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="email"
                        name="email"
                        required
                        type="email"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
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
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      className="bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 w-full text-white px-8 py-3 rounded-lg  "
                      type="submit"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* HOD  */}

            <div className="bg-white shadow-xl rounded-xl px-8 mx-auto border ">
              <form
                method="POST"
                action="../../api/auth/addUsers"
                className=" mx-auto my-10"
              >
                <fieldset className="mt-4">
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 ">
                    <div className="flex items-center">
                      {/* <input
                        type="radio"
                        id="college"
                        name="position"
                        value="hod"
                        defaultChecked
                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                        onChange={(event) => {
                          setPosition("HOD");
                        }}
                      /> */}
                      <label
                        htmlFor="college"
                        className=" block text-xl font-semibold   text-pink-900"
                      >
                        Head Of The Department 
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div>
                  <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        htmlFor="paraphrase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Paraphase
                      </label>
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="paraphrase"
                        id="paraphrase"
                        required
                        value={user.college.paraphrase}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        onChange={() => {}}
                      />
                    </div>
                    <p
                      className="mt-1 text-xs text-gray-500"
                      id="pharaphase-description"
                    >
                      Enter a passphrase that associates with your college
                      placement cell.
                    </p>
                    {/* <p className="text-red-500">{mess}</p> */}
                  </div>

                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
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
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        required
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
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="rollnumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Roll Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <div className="flex">
                        <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                          College
                        </label>
                        <span className="relative top-4 ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          name="college"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                          value={user.college.name}
                          onChange={() => {}}
                        />
                      </div>
                    </div>

                    <div className="col-span-6  relative -top-[25px]">
                      <div className="flex"> 
                      <div className="w-[50%]">

                      <label
                        className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                        id="headlessui-listbox-label-1"
                      >
                        Branch
                        <span className="ml-1 mt-1 text-red-600 font-semibold">
                          *
                        </span>
                      </label>
                      <div className="relative -top-[23px] left-0">
                        <select
                          name="branch"
                          className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        >
                          <option value="cse">CSE</option>
                          <option value="female">IT</option>
                          <option value="et">ET</option>
                          <option value="ece">ECE</option>
                          <option value="eee">EEE</option>
                          <option value="mech">MECH</option>
                          <option value="civil">CIVIL</option>
                        </select>
                      </div>
                      </div>
                      <div className="ml-4">
                      <label
                        className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                        id="headlessui-listbox-label-1"
                      >
                        Position
                        <span className="ml-1 mt-1 text-red-600 font-semibold">
                          *
                        </span>
                      </label>
                      <div className="relative -top-[23px] left-0 ">
                      <input
                          type="text"
                          required
                          name="position"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                          value="hod"
                          onChange={() => {}}
                        />
                      </div>
                      </div>
                      </div>

                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        id="email"
                        name="email"
                        required
                        type="email"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
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
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      className="bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 w-full text-white px-8 py-3 rounded-lg  "
                      type="submit"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    // </div>
  );
}
export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;

  const data = JSON.stringify(user);
  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  if (user) {
    const inputHash = crypto
      .pbkdf2Sync("test@123", user.salt, 1000, 64, "sha512")
      .toString("hex");
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
  if (user.position !== "collegeAdmin") {
    return {
      redirect: {
        destination: `/profile/${user.position}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      userDetails: data,
    },
  };
};
    