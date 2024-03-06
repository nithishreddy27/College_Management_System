import React from "react";
import {
  AiFillClockCircle,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { TfiCommentsSmiley, TfiCrown } from "react-icons/tfi";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <div className="preloader"></div>
        <div className="scrollup fixed right-[2%] bottom-[3%] h-[45px] w-[40px] text-center rounded-[4px] "></div> */}
        <div className="z-0">
          <img
            src="http://codestar.xyz/demo/Education/education/assets/img/bg.png"
            alt=""
          />
        </div>
        <Navbar/>
        <div className="home absolute top-32 mt-10 w-[50%] px-36">
          <div className="">
            <h1 className="text-5xl font-serif mb-8">
              Present Education in beautiful way!
            </h1>
            <p className="text-md mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquaLorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt
            </p>
            <div className="flex justify-between font-serif">
              <a
                className="bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white px-8 py-4 rounded-lg hover:-translate-y-2 ease-in-out duration-300"
                href="#"
              >
                View More Courses
              </a>
              <a
                className="bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white px-8 py-4 rounded-lg hover:-translate-y-2 ease-in-out duration-300"
                href="#"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="about px-5 mt-10 w-full">
          <div className="text-center">
            <h1 className="text-6xl font-serif mb-7">About us</h1>
            <div className="flex justify-center mb-7">
              <hr className="bg-pink-600 pt-0.5 w-[7%] " />
            </div>
            <h1 className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              commodi, fugit suscipit ut
            </h1>
          </div>
          <div className="grid grid-cols-3 justify-center mx-56 gap-8 mt-12">
            <div className="p-10 text-center rounded-2xl shadow-xl">
              <div className="w-full flex items-center justify-center mb-5">
                <img
                  src="http://codestar.xyz/demo/Education/education/assets/img/icon/1.png"
                  alt="cleanDesignPhoto"
                />
              </div>
              <h1 className="text-xl font-serif font-semibold text-red-700 mb-3">
                clean design
              </h1>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                commodi, fugit suscipit ut
              </h1>
            </div>
            <div className="p-10 text-center rounded-2xl shadow-xl">
              <div className="w-full flex items-center justify-center mb-5">
                <img
                  src="	http://codestar.xyz/demo/Education/education/assets/img/icon/2.png"
                  alt="SecureDataPhoto"
                />
              </div>
              <h1 className="text-xl font-serif font-semibold text-blue-600 mb-3">
                Secure data
              </h1>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                commodi, fugit suscipit ut
              </h1>
            </div>
            <div className="p-10 text-center rounded-2xl shadow-xl">
              <div className="w-full flex items-center justify-center mb-5">
                <img
                  src="http://codestar.xyz/demo/Education/education/assets/img/icon/3.png"
                  alt="RetinaReadyPhoto"
                />
              </div>
              <h1 className="text-xl font-serif font-semibold text-yellow-600 mb-3">
                Retina Ready
              </h1>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                commodi, fugit suscipit ut
              </h1>
            </div>
          </div>
        </div>
        <div className="choose mt-32 w-full relative">
          <div>
            <img
              className="z-0 scale-110"
              src="http://codestar.xyz/demo/Education/education/assets/img/feature-bg.png"
              alt=""
            />
          </div>
          <div className="absolute top-0">
            <div className="grid grid-cols-3 gap-3 z-10 ">
              <div className="ml-24 col-span-2 mt-5">
                <div className="mx-10 mt-2">
                  <h1 className="text-5xl font-serif font-semibold text-white">
                    Why choose us
                  </h1>
                  <h1 className="text-white mt-5 w-[65%]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis,
                  </h1>
                </div>
                <div className="flex gap-5 px-5">
                  <div className="px-10 py-7 m-5 bg-white shadow-xl rounded-l-3xl rounded-br-3xl hover:text-white hover:bg-gradient-to-t from-pink-600  to-pink-800 transition duration-700 ease-in-out">
                    <h1 className="text-2xl font-serif mb-2 hover:text-white">
                      Trending courses
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="px-10 py-7 m-5 bg-white shadow-xl rounded-l-3xl rounded-br-3xl hover:text-white hover:bg-gradient-to-t from-pink-600  to-pink-800 transition duration-700 ease-in-out">
                    <h1 className="text-2xl font-serif mb-2">Books Library</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  className="w-[70%] ml-5 flex flex-grow justify-center"
                  src="http://codestar.xyz/demo/Education/education/assets/img/service-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mx-24">
              <div className="flex w-[80%] gap-5 ">
                <div className="px-10 py-7 m-5 bg-white shadow-xl rounded-l-3xl rounded-br-3xl hover:text-white hover:bg-gradient-to-t from-pink-600  to-pink-800 transition duration-700 ease-in-out">
                  <h1 className="text-2xl font-serif mb-2">
                    Trending courses.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
                <div className="px-10 py-7 m-5 bg-white shadow-xl rounded-l-3xl rounded-br-3xl hover:text-white hover:bg-gradient-to-t from-pink-600  to-pink-800 transition duration-700 ease-in-out">
                  <h1 className="text-2xl font-serif mb-2">Books Library.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] gap-5">
                <div className="px-10 py-7 m-5 bg-white shadow-xl rounded-l-3xl rounded-br-3xl hover:text-white hover:bg-gradient-to-t from-pink-600  to-pink-800 transition duration-700 ease-in-out">
                  <h1 className="text-2xl font-serif mb-2">
                    Trending courses...
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commod4.
                  </p>
                </div>
                <div className="px-10 py-7 m-5 bg-white shadow-xl rounded-l-3xl rounded-br-3xl hover:text-white hover:bg-gradient-to-t from-pink-600  to-pink-800 transition duration-700 ease-in-out">
                  <h1 className="text-2xl font-serif mb-2">Books Library...</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commod4.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="watch px-40 py-20 mt-32 bg-gradient-to-t from-pink-700 to-fuchsia-800 w-full grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-semibold text-white font-serif">
              Watch our
            </h1>
            <h1 className="text-5xl font-semibold text-white font-serif">
              courses videos
            </h1>
            <h1 className="text-5xl font-semibold text-white font-serif">
              in live action
            </h1>
            <p className="text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
            <p className="text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <BsFillPlayCircleFill
              size={50}
              className="absolute fill-pink-700 animate-pulse"
            />
            <img
              className=" w-[90%]"
              src="http://codestar.xyz/demo/Education/education/assets/img/image-16.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-8">
              <TfiCommentsSmiley size={50} className="fill-white" />
              <div>
                <h1 className="text-white text-2xl font-serif mt-2 mb-2">
                  Beautiful design
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <TfiCrown size={50} className="fill-white" />
              <div>
                <h1 className="text-white text-2xl font-serif mt-2 mb-2">
                  Wow Animations
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <TfiCommentsSmiley size={50} className="fill-white" />
              <div>
                <h1 className="text-white text-2xl font-serif mt-2 mb-2">
                  Pure and Simple
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <AiOutlineUnorderedList size={50} className="fill-white" />
              <div>
                <h1 className="text-white text-2xl font-serif mt-2 mb-2">
                  Beautiful design
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Popular px-5 mt-10 w-full">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-6">Our Popular courses</h1>
            <div className="flex justify-center mb-6">
              <hr className="bg-pink-600 pt-0.5 w-[7%] " />
            </div>
            <h1 className="mb-10">
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </h1>
          </div>
          <div className="flex justify-center items-center gap-8 mx-28">
            <div className="shadow-xl rounded-lg w-80">
              <img
                src="http://codestar.xyz/demo/Education/education/assets/img/courses1.png"
                alt="AnnualTravelCamp"
              />
              <div className="p-6">
                <h1 className="text-xl font-serif mb-1">Annual Travel camp</h1>
                <div className="flex gap-12">
                  <div className="flex">
                    <AiFillClockCircle className="scale-110 mt-1 mr-1 fill-pink-700" />
                    <h1 className="">30 Aug 2023</h1>
                  </div>
                  <div className="flex">
                    <FaUserCheck className="scale-110 mt-1 mr-1 fill-pink-700" />
                    <h1 className="">Admin</h1>
                  </div>
                </div>
                <h1 className="mt-2 mb-6">
                  It is a long established fact that a reader will be distracted
                  by the.
                </h1>
                <div className="mb-2 mt-3 inline-block hover:-translate-y-2 ease-in-out duration-300">
                  <a
                    className="bg-gradient-to-t from-pink-500 to-fuchsia-800 text-white px-8 py-3 rounded-md"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-xl rounded-lg w-80 ">
              <img
                src="http://codestar.xyz/demo/Education/education/assets/img/courses2.png"
                alt="AnnualTravelCamp"
              />
              <div className="p-6">
                <h1 className="text-xl font-serif mb-1">
                  Physics science fair
                </h1>
                <div className="flex gap-12">
                  <div className="flex">
                    <AiFillClockCircle className="scale-110 mt-1 mr-1 fill-pink-700" />
                    <h1 className="">30 Aug 2023</h1>
                  </div>
                  <div className="flex">
                    <FaUserCheck className="scale-110 mt-1 mr-1 fill-pink-700" />
                    <h1 className="">Admin</h1>
                  </div>
                </div>
                <h1 className="mt-2 mb-6">
                  It is a long established fact that a reader will be distracted
                  by the.
                </h1>
                <div className="mb-2 mt-3 inline-block hover:-translate-y-2 ease-in-out duration-300">
                  <a
                    className="bg-gradient-to-t from-pink-500 to-fuchsia-800 text-white px-8 py-3 rounded-md"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-xl rounded-lg w-80">
              <img
                src="	http://codestar.xyz/demo/Education/education/assets/img/courses3.png"
                alt="AnnualTravelCamp"
              />
              <div className="p-6">
                <h1 className="text-xl font-serif mb-1">
                  Inter college art show
                </h1>
                <div className="flex gap-12">
                  <div className="flex">
                    <AiFillClockCircle className="scale-110 mt-1 mr-1 fill-pink-700" />
                    <h1 className="">30 Aug 2023</h1>
                  </div>
                  <div className="flex">
                    <FaUserCheck className="scale-110 mt-1 mr-1 fill-pink-700" />
                    <h1 className="">Admin</h1>
                  </div>
                </div>
                <h1 className="mt-2 mb-6">
                  It is a long established fact that a reader will be distracted
                  by the.
                </h1>
                <div className="mb-2 mt-3 inline-block hover:-translate-y-2 ease-in-out duration-300">
                  <a
                    className="bg-gradient-to-t from-pink-500 to-fuchsia-800 text-white px-8 py-3 rounded-md"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="number bg-gradient-to-t  from-pink-700 to-fuchsia-800 px-5 py-20 mt-16 flex justify-evenly gap-2">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-4xl text-white font-serif font-semibold">50</h1>
            <h1 className="text-slate-200 font-semibold font-serif">TEACHER</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-4xl text-white font-serif font-semibold">65</h1>
            <h1 className="text-slate-200 font-semibold font-serif">COURSES</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-4xl text-white font-serif font-semibold">
              1100
            </h1>
            <h1 className="text-slate-200 font-semibold font-serif">MEMBERS</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-4xl text-white font-serif font-semibold">15</h1>
            <h1 className="text-slate-200 font-semibold font-serif">
              COUNTRIES
            </h1>
          </div>
        </div>
        <div className="contact mt-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-semibold mb-6">
              Say Hello!
            </h1>
            <div className="flex justify-center mb-6">
              <hr className="bg-pink-600 pt-0.5 w-[7%] " />
            </div>
            <h1 className="mb-10">
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </h1>
          </div>
          <div className="grid grid-cols-3 mx-40 gap-14">
            <div className="grid grid-rows-3 gap-8 ml-12">
              <div className="flex">
                <div className="">
                  <AiOutlineHome
                    size={40}
                    className="bg-gradient-to-t from-pink-500 to-fuchsia-800 fill-white p-2 rounded-md"
                  />
                </div>
                <h1 className="mt-2 ml-2">example example address</h1>
              </div>
              <div className="flex">
                <div className="">
                  <AiOutlineMail
                    size={40}
                    className="bg-gradient-to-t from-pink-500 to-fuchsia-800 fill-white p-2 rounded-md"
                  />
                </div>
                <h1 className="mt-2 ml-2">example@gmail.com</h1>
              </div>
              <div className="flex">
                <div className="">
                  <AiOutlinePhone
                    size={40}
                    className="bg-gradient-to-t from-pink-500 to-fuchsia-800 fill-white p-2 rounded-md"
                  />
                </div>
                <h1 className="mt-2 ml-2">9876543210</h1>
              </div>
            </div>
            <div className="grid grid-rows-3 gap-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Your Name"
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Email"
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Phone"
              />
            </div>
            <div className="">
              <input
                className="shadow appearance-none border rounded w-full mb-8 py-12 px-3 text-gray-700 leading-tight"
                placeholder="Your Name"
              />
              <div>
                <a
                  className="bg-gradient-to-t from-pink-500 to-fuchsia-800 text-white rounded-lg px-32 py-3"
                  href="#"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer absolute w-full h-40 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700">
          <div className="h-full w-full grid justify-center items-center text-white">
            © Copyrights 2020 All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
