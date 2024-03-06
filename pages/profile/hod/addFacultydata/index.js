import React, { useEffect, useState } from "react";
import Papa from 'papaparse'
import axios from "axios"
import { getLoginSession } from "../../../../lib/auth";
import { findUser } from "../../../../lib/user";
// import Navbar from "../../components/Navbar"
import crypto from "crypto";
import swal from 'sweetalert';

export default function Dashboard({userDetails}) {

  const [faculty, setfaculty] = useState()
  const [sort, setsort] = useState(1)
  const [hodId, setHodId] = useState();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [subjects,setSubjects] = useState(null);
  const [collegeDetails, setcollegeDetails] = useState()
  const user = JSON.parse(userDetails)
  console.log("user",user);

  useEffect(()=>{
    if(user){
      setcollegeDetails({
        name:user.college.name,
        code:user.college.code,
        paraphrase:user.college.paraphrase
      })
      setHodId(user._id);
    }
  },[user])
  // var data = props.data.done
  // console.log("data nanfa",data)
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setfaculty(results.data)
          setSubjects(["IOT","MAI","ML","BDA","BI"])
        },
      });
  };

//   useEffect(()=>{
//     console.log("students",students,subjects)
//   },[faculty])


  // useEffect(()=>{
  //   if(data){
  //     data.sort((a, b) => parseInt(a.Id) - parseInt(b.Id));
  //     setstudents(data)
  //   }
  // },[data])


  function uploadStudents(){  
  
      fetch("../../api/college/faculty", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify({details:faculty , subjects:subjects ,collegeDetails:collegeDetails ,hodId:hodId,branch:user.department  })
        }
        )

      swal("Faculty Details Added !")
    }

    function deleteStudent(id){
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
  <div className=" bg-gray-300 h-screen overflow-auto ">
    {/* <Navbar/> */}
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
    
      <div className="px-8">
      <input
      type="file"
      name="file"
      accept=".csv"
      onChange={changeHandler}
      style={{ display: "block", margin: "10px auto" }}
    />
        <button onClick={uploadStudents} className="border border-blue-700 bg-blue-400 px-2 py-2 rounded-full my-2 ">Upload</button>
        
        <table className="bg-white rounded-lg border w-full">
          <thead className="">
            <tr className="border">
              <th className="py-2">S.No.</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
           

           {faculty && (
            <>
           
             {faculty.map((item)=>(
              <div key={item["S.No"]}> 
                  <h1>{console.log(item)}</h1>
                  <tr className="border font-light w-[100%] mx-2">
                    <th className="font-normal ">{item["S.No"]}</th>
                    <th className="font-normal">{item["First Name"]}</th>
                    <th className="font-normal">
                      {item["RollNo."]}
                    </th>
                    <th className="font-normal">
                     {item["Student Mobile"]}
                    </th>
                    <th className="font-normal">
                     {item["College Mail ID"]}
                    </th>
                  </tr>

              </div>
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
    const inputHash = crypto.pbkdf2Sync("test@123", user.salt, 1000, 64, "sha512").toString("hex");
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
