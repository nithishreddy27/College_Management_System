import React from "react";
import Link from "next/link";
import { useUser } from "../../../lib/hooks";
// import {useUser} from
// import { useUser } from "../../lib/hooks";

const Education = () => {
  const user = useUser();
  return (
    <div className="min-h-screen">
      <img
        className="absolute top-0 bottom-0 w-[100%] h-[100%] object-cover"
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
      {user && (
        <div className="min-h-screen flex flex-col justify-center items-center pb-4 sm:px-6 lg:px-8">
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-3xl relative grid h-screen place-items-center px-2">
            <div className="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10 ">
              <form method="POST" action="../api/addEducation">
                <div className="flex justify-between my-6 items-center">
                  <div>
                    <label htmlFor="userame" className="text-sm font-semibold">
                      Signed in as:
                    </label>
                    <input
                      type="text"
                      className="mx-2"
                      id="username"
                      name="username"
                      value={user.username}
                    />
                  </div>
                  <div>
                    <Link
                      href="/api/logout"
                      className="text-orange-600 text-sm mx-2 font-semibold hover:text-orange-900 hover:underline"
                    >
                      Logout
                    </Link>
                  </div>
                </div>

                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 class="mt-2 text-center text-2xl font-bold text-gray-900">
                    Current education details
                  </h2>
                </div>

                <div class="col-span-6 sm:col-span-6 mt-2">
                  <div class="flex">
                    <label
                      for="school"
                      class="block text-sm font-medium text-gray-700"
                    >
                      School / Institution
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    required=""
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="degree"
                      className="flex items-center mb-1 h-full text-sm font-medium text-gray-700"
                    >
                      Program / degree
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </label>
                    <div className="relative -top-5 left-0">
                      <select
                        name="degree"
                        className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      >
                        <option value="MBA">MBA</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="Degree">Degree</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="flex items-center mb-1 h-full text-sm font-medium text-gray-700">
                      Branch / Specialization
                      <span className="ml-1 mt-1 text-red-600 font-semibold">
                        *
                      </span>
                    </label>
                    <div className="relative -top-5 left-0">
                      <select
                        name="branch"
                        className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      >
                        <option value="Aeronautical Engineering">
                          Aeronautical Engineering
                        </option>
                        <option value="Agriculture Engineering">
                          Agriculture Engineering
                        </option>
                        <option value="Artificial Intelligence">
                          Artificial Intelligence
                        </option>
                        <option value=" Artificial Intelligence and Machine Learning">
                          Artificial Intelligence and Machine Learning
                        </option>
                        <option value="Big Data Analytics Biomedical Engineering">
                          Big Data Analytics Biomedical Engineering
                        </option>
                        <option value="Chemical Engineering">
                          Chemical Engineering
                        </option>
                        <option value="Civil Engineering">
                          Civil Engineering
                        </option>
                        <option value="Computer Science and Engineering">
                          Computer Science and Engineering
                        </option>
                        <option value="Computer Science and Information Technology">
                          Computer Science and Information Technology
                        </option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Electrical and Electronics Engineering">
                          Electrical and Electronics Engineering
                        </option>
                        <option value="Electrical Engineering">
                          Electrical Engineering
                        </option>
                        <option value="Electronics and Communication Engineering">
                          Electronics and Communication Engineering
                        </option>
                        <option value="Electronics and Intrumentation Engineering">
                          Electronics and Intrumentation Engineering
                        </option>
                        <option value="Mechanical Engineering">
                          Mechanical Engineering
                        </option>
                        <option value="Mining Engineering">
                          Mining Engineering
                        </option>
                        <option value="Information Technology">
                          Information Technology
                        </option>
                        <option value="Intrumentation and Control">
                          {" "}
                          Intrumentation and Control
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-4 mt-10">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex">
                      <label
                        htmlFor="board"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Board / University
                      </label>
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <input
                      type="text"
                      name="board"
                      id="board"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative -top-[23px]">
                    <label
                      htmlFor="edtype"
                      className="flex items-center mb-1 h-full text-sm font-medium text-gray-700"
                    >
                      Education Type
                      <span className="ml-1 mt-1 text-red-600 font-semibold">
                        *
                      </span>
                    </label>
                    <div className="relative -top-5 left-0">
                      <select
                        name="edtype"
                        className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      >
                        <option value="Part time">Part time</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Correspondence">Correspondence</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  <label
                    for="score"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Score
                  </label>
                  <span class="ml-1 text-red-600 font-semibold">*</span>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      name="score"
                      id="score"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative sm:-top-[50px] top-[-30px]">
                    <label class="flex items-center mb-1 h-full text-sm font-medium text-gray-700 ">
                      Grade
                      <span class="ml-1 mt-1 text-red-600 font-semibold">
                        *
                      </span>
                    </label>
                    <div className="relative -top-5 left-0">
                      <select
                        name="grade"
                        className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      >
                        <option value="cgpa">CGPA</option>
                        <option value="percentage">Percentage</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <label
                    for="duration"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Duration
                  </label>
                  <span class="ml-1 text-red-600 font-semibold">*</span>
                </div>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <input
                      type="number"
                      name="duration"
                      placeholder="YYYY"
                      min="2001"
                      max="2100"
                      id="duration"
                      required=""
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <input
                      type="number"
                      placeholder="YYYY"
                      min="2001"
                      max="2100"
                      name="duration"
                      id="duration"
                      required=""
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {!user && (
        <div className="relative z-40 text-4xl  font-bold text-center my-auto h-[100%]">
          <p className="my-auto"> Please sign in first</p>
        </div>
      )}
    </div>
  );
};

export default Education;
