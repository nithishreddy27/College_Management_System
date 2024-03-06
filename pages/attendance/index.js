import React, { useEffect, useState } from 'react'
import crypto from "crypto";
import { getLoginSession } from '../../lib/auth';
import { findUser } from '../../lib/user';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Index({userDetails , facultySubjects}) {

  const user = JSON.parse(userDetails)
  const subjects = facultySubjects?.facultySubjects;
  const [college, setcollege] = useState();
  const [students, setstudents] = useState();
  const [dropdown,setdropdown]= useState(false)
  const [attendaceArray, setattendaceArray] = useState([])
  const [presentCount, setPresentCount] = useState(0)
  const [absentCount, setAbsentCount] = useState(0)

  // const attendaceArray=[]
  const router = useRouter();

  async function changeClass(cls){
    // await fetch("")
    console.log("class",user.college);
    setcollege(cls)
    const res = await axios.post("../api/students",{college:user.college.paraphrase,studentClass:cls})

    // console.log(res.data.students)
    setstudents(res.data.students)
  }


  async function present(userId){
    console.log("present",subjects[0].name)
    axios.post("../api/students/attendance",{
      userId:userId,
      subject:subjects[0].name,
      status : "present"
    })
    setPresentCount(presentCount+1)
  }


  async function absent(userId){
    // console.log("absent",rollnumber)
    axios.post("../api/students/attendance",{userId:userId,
      subject:subjects[0].name,
      status : "absent"
    })
    setAbsentCount(absentCount+1)
  }

  async function getAttendance(userId){
    console.log('userid',userId)
    await axios.get("../api/students/attendance",{
      userId:userId
    })
  }


  // async function runMe(){
  //   axios.delete("../api/students/attendance")
  // }

  // useEffect(()=>{
  //   console.log(attendaceArray)
  // },[attendaceArray])
  return (
    <div>
      
      <Navbar/>
     <div className='mt-28'>
      {/* <button onClick={runMe}>delete</button> */}
      {subjects && (
        <div>
          {subjects.map((subject)=>(
            <div className='bg-violet-400 text-white text-center py-5 tracking-widest mb-10 ' key={subject}>
              <h1 onClick={()=>{
                  changeClass(subject.class)
              }} className='cursor-pointer border border-white p-2 w-20 rounded-lg bg-white text-violet-400 font-semibold mx-10 '>
                      {subject.class}
                      
              </h1>
            </div>
          ))}

          {students && (
            <div className=''>
            <div className="container mx-auto px-4 py-8">
             <h1 className="text-2xl font-bold mb-4">Student attendance</h1>
             
         
     
         <div className="grid grid-cols-2 gap-6">
         <div>
             <div className=''>
                 <span className="font-medium mr-2">Faculty Name:</span>
                 <span>{user?.profile.firstName}</span>
             </div>
             <div>
                 <span className="font-medium mr-2">Branch:</span>
                 <span>{college}</span>
             </div>
         </div>
         <div>
             <div>
                 <span className="font-medium">Total Present:</span>
                 <span>{presentCount}</span>
             </div>
             <div>
                 <span className="font-medium">Total Absent:</span>
                 <span>{absentCount}</span>
             </div>
         </div>
     </div>
     
              </div> 
              <table className="min-w-full divide-y divide-gray-200">
         <thead>
             <tr>
                 <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Name
                 </th>
                 <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Roll No.
                 </th>
                 <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Present
                 </th>
                 <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Absent
                 </th>
                 {/* <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Status
                 </th> */}
             </tr>
         </thead>
         <tbody className="bg-white divide-y divide-gray-200">
          {console.log("array",attendaceArray)}
          {students.map((student,index)=>(
            <tr key={student._id}>
              {/* {console.log("student",student)} */}
            <td className="px-6 py-4 whitespace-nowrap">
                {student.profile.firstName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {student._id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={(e)=>{
                  present(student._id)
                  var button = e.target;
                  button.style.backgroundColor = "green";
                  }}>
                    Present
                </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={(e)=>{absent(student._id)
                 var button = e.target;
                 button.style.backgroundColor = "rgb(214, 4, 4)";
                
                }}>
                  Absent
                </button>
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-green-500">&#10004;</span>
            </td> */}
        </tr>
       
       ))}
             
             
         </tbody>
         {/* <tfoot>
             <tr>
             <th colspan="4" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Status
             </th>
             <th className="px-6 py-3 bg-gray-50 whitespace-nowrap">
             
             </th>
             </tr>
            </tfoot> */}
     </table>
     
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
  const data = JSON.stringify(user)
  var classes
  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }


  if(user){
    const inputHash = crypto.pbkdf2Sync("test@123", user.salt, 1000, 64, "sha512").toString("hex");
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

    const data = await axios.get(`http://localhost:3000/api/students/subjects?user=${user._id}`)
    classes = data.data.data
    console.log("classes",classes)
    
}
  if (user.position !== "faculty") {
    return {
      redirect: {
        destination: `/profile/${user.position}`,
        permanent: false,
      },
    };
  }
return {
    props: {
    
      userDetails:data,
      facultySubjects:classes

    },
  };
};