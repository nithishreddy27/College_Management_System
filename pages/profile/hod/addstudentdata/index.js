import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { getLoginSession } from "../../../../lib/auth";
import { findUser } from "../../../../lib/user";
import Navbar from "../../../../components/Navbar";
import crypto from "crypto";

export default function Dashboard({ userDetails }) {
  const [students, setstudents] = useState();
  const [sort, setsort] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [subjects,setSubjects] = useState(null);
  const [collegeDetails, setcollegeDetails] = useState()

  const user = JSON.parse(userDetails)



  useEffect(()=>{
    if(user){
      setcollegeDetails({
        name:user.college.name,
        code:user.college.code,
        paraphrase:user.college.paraphrase
      })
    }
  },[user])
  // console.log("user",user);
  // var data = props.data.done
  // console.log("data nanfa",data)
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setstudents(results.data);
        setSubjects(["IOT", "MAI", "ML", "BDA", "BI"]);
      },
    });
  };

  useEffect(() => {
    console.log("students", students, subjects);
  }, [students]);

  // useEffect(()=>{
  //   if(data){
  //     data.sort((a, b) => parseInt(a.Id) - parseInt(b.Id));
  //     setstudents(data)
  //   }
  // },[data])

  function uploadStudents() {
    fetch("../../api/college/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ details: students, subjects: subjects , hod:user._id ,collegeDetails:collegeDetails ,branch:user.department  }),
    });
  }

  function deleteStudent(id) {
    // console.log("id",id)
    // fetch("../api/collegeStudents", {
    //   method: "Delete",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({id:id}),
    // }
    // )
  }

  return (
    // {https://aufaitux.com/wp-content/uploads/2022/11/pasted-image-2.png}
    <div className="min-h-screen mt-36 overflow-auto ">
      <Navbar />
      {/* <div className="p-8">
        <div className="bg-white rounded-md">
          <h1 className="text-2xl font-semibold py-4 text-center">Overview</h1>
          <div className="grid grid-cols-1 gap-10 justify-items-center">
            <div className="grid grid-cols-1 gap-3 justify-items-center sm:grid-cols-3">
              {students && (<div className="align-middle">
                <div className="h-14 w-14 rounded-full bg-sky-300 text-center p-4"> {students.length} </div>
                <h1>Total Students</h1>
              </div>)}
              <div>
                <div className="h-14 w-14 rounded-full bg-green-300"></div>
                <h1>Total Students</h1>
              </div>
              <div>
                <div className="h-14 w-14 rounded-full bg-red-300"></div>
                <h1>Total Students</h1>
              </div>
            </div>
            <div className="h-32 w-32 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div> */}

      <div className="px-8 py-5 ">
        <div className="flex w-[70%] relative pb-7 ">
          <div>
            <input
              type="file"
              name="file"
              accept=".csv"
              className="bg-blue-300 mx-5 text-white rounded-md"
              onChange={changeHandler}
              style={{ display: "block", margin: "10px auto" }}
            />
          </div>
          <div className=" absolute right-0">
            <button
              onClick={uploadStudents}
              className="border text-center  bg-green-600 px-2 py-2 tracking-wide rounded-md text-white my-2 "
            >
              Upload File
            </button>
          </div>
        </div>
        <table className="bg-white rounded-lg border w-full">
          <thead className="">
            <tr className="border bg-blue-300">
              <th className="py-3">S.No.</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {students && (
              <>
                {students.map((item) => (
                 <>
                    <h1>{console.log(item)}</h1>
                    <tr className="border font-light w-[100%] mx-2 hover:bg-gray-100">
                      <td className="font-normal py-2 text-center">{item["S.No"]}</td>
                      <td className="font-normal py-2 text-center">{item["First Name"]}</td>
                      <td className="font-normal py-2 text-center">{item["RollNo."]}</td>
                      <td className="font-normal py-2 text-center">{item["Student Mobile"]}</td>
                      <td className="font-normal py-2 text-center">{item["College Mail ID"]}</td>
                      <td className="font-normal py-2 text-center">{item["Branch"]}</td>
                      {/* <td>one</td> */}
                    </tr>
                  </>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// export const getServerSideProps = async ()=>{

//   const res = await fetch(`https://complete-psi.vercel.app/api/collegeStudents`);
//     const data = await res.json();
//     // var o = data[0];
//     console.log("banda",data)
//     return {
//       props: {
//         data: data,
//       },
//     };
//
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
