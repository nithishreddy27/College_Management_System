import React, { useEffect, useState } from "react";
import { getLoginSession } from "../../../../lib/auth";
import { findUser } from "../../../../lib/user";
import crypto from "crypto";
import { useStudents } from "../../../../src/hooks/useStudents";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../../../components/Navbar";

export default function Index({ userDetails }) {
  const user = JSON.parse(userDetails);
  // console.log(user)
  // const students = useStudents(user)
  const [students, setStudents] = useState();
  const [faculty, setFaculty] = useState();
  const router = useRouter()
  async function getStudents() {
    const data = await axios.get(
      `../../../api/auth/user/details?collegeCode=${user.college.paraphrase}&branch=${user.department}`
    );
    // console.log("data",data.data.details);
    setStudents(data.data.details);
  }

  async function getFaculty() {
    if (user) {
      const data = await axios.get(
        `../../../api/auth/user/college?collegeCode=${user.college.paraphrase}&branch=${user.department}`
      );
      console.log("data", data.data.details);
      setFaculty(data.data.details);
    }
  }

  // useEffect(()=>{
  //     getFaculty()
  // },[user])

  return (
    <>
    <Navbar/>
      <div className="mx-20 my-10 px-10 py-10 shadow-lg rounded-lg">
        <div className="grid grid-cols-2 mt-6 mx-10">
          <div>
            <button
              onClick={getStudents}
              className="mx-2 mb-2 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white rounded-lg px-4 py-2 hover:scale-110 transition-transform duration-300"
            >
              Display students
            </button>
            <button
              onClick={()=>{router.push("addstudentdata")}}
              className="mx-2 mb-2 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white rounded-lg px-4 py-2 hover:scale-110 transition-transform duration-300"
            >
              Add Students
            </button>
            {students && (
              <>
              <table className="w-full table-fixed overflow-scroll border border-collapse border-slate-400">
                <thead className="h-10 border-slate-300 hover:bg-neutral-200">
                  <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty Email
                  </td>
                  <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty Roll No.
                  </td>
                  <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty Name
                  </td>
                </thead>
              </table>
                {students.map((student) => (
                  // <h1 key={student._id}>{student.email}</h1>
                  <table
                      key={student._id}
                      className="w-full table-fixed overflow-scroll border border-collapse border-slate-400"
                    >
                      <tr className="h-10 border-slate-300 hover:bg-neutral-200">
                        <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {student.email}
                        </td>
                        <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {student.rollNumber.value}
                        </td>
                        <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {student.profile.firstName}
                        </td>
                      </tr>
                    </table>
                ))}
              </>
            )}
          </div>
          <div>
            <button
              onClick={getFaculty}
              className="mx-2 mb-2 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white rounded-lg px-4 py-2 hover:scale-110 transition-transform duration-300"
            >
              Display teachers
            </button>
            {faculty && (
              <table className="w-full table-fixed overflow-scroll border border-collapse border-slate-400">
                <thead className="h-10 border-slate-300 hover:bg-neutral-200">
                  {/* <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty Email
                  </td> */}
                  <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty ID
                  </td>
                  <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty Roll No.
                  </td>
                  <td className="text-bold px-6 py-1 text-[14px] border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                    Faculty Name
                  </td>
                </thead>
              </table>
            )}
            {faculty && (
              <>
                {faculty.map((fu) => (
                  <div key={fu._id}>
                    <table
                      key={fu._id}
                      className="w-full table-fixed overflow-scroll border border-collapse border-slate-400"
                    >
                      <tr className="h-10 border-slate-300 hover:bg-neutral-200">
                        {/* <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {fu.email}
                        </td> */}
                        <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {fu._id}
                        </td>
                        <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {fu.rollNumber.value}
                        </td>
                        <td className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap">
                          {fu.profile.firstName}
                        </td>
                      </tr>
                    </table>
                    {/* <h1 key={fu._id}>
                    {fu.email} {fu.rollNumber.value} {fu.profile.firstName}
                  </h1> */}
                  </div>
                ))}
              </>
            )}

<button
              // onClick={()=>{}}
              onClick={()=>{router.push("addFacultydata")}}

              className="mx-2 mb-2 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white rounded-lg px-4 py-2 hover:scale-110 transition-transform duration-300"
            >
              Add Teachers
            </button>
           
          </div>
       
        </div>

        <div className="mt-5">
          {console.log("user", user)}
          <h1 className="flex justify-center my-7 text-xl">Add Subject</h1>
          <form action="../../../api/students/subjects" method="POST">
            <div className="grid grid-cols-2 my-4 gap-4">
              <div>
                <label htmlFor="collegeName" className="">
                  College Name{" "}
                </label>
                <input
                  type="text"
                  value={user?.college.paraphrase}
                  onChange={() => {}}
                  name="collegeName"
                />
              </div>
              <div>
                <label htmlFor="branchName" className="">
                  Branch Name{" "}
                </label>
                <input
                  type="text"
                  value={user?.department}
                  onChange={() => {}}
                  name="branchName"
                />
              </div>
              <div>
                <label htmlFor="name" className="mr-3">
                  Subject Name
                </label>
                <input type="text" name="subjectName" className="border" />
              </div>
              <div>
                <label htmlFor="name" className="mr-3">
                  Faculty _id
                </label>
                <input type="text" className="border" name="rollNumber" />
              </div>
            </div>
            <div className="">
              <select
                name="faculty"
                className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
              >
                {faculty?.map((fac) => (
                  <option key={fac._id}>{fac.profile.firstName}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="my-4 bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 text-white rounded-lg px-6 py-1 hover:scale-110 transition-transform duration-300"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
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
      userDetails: data,
    },
  };
};
