import React from 'react'

import { getLoginSession } from '../../../../lib/auth'
import { findUser } from '../../../../lib/user'
import { useResumeContext } from '../../../../src/context/ResumeContext'
const Letter = ({userDetails}) => {
  const user = JSON.parse(userDetails)
  console.log("user",user)

  const {letterBody, setLetterBody,letterSubject,setletterSubject,salutation,setSalutation} = useResumeContext();

  return (
    <>
    
   {user && (
    <div className='min-h-screen bg-white flex  '>
    <div className='w-[30%] bg-gray-800 h-screen fixed flex-none pr-4'>
    <>
    {/* {user && ( */}
      <div className="  bg-white sticky overflow-hidden">
      <div className=" bg-gray-800 text-white overflow-auto  ">
        <div className="p-[5%] text-white ">
          <p className="text-white text-center font-bold text-[25px] tracking-wide">
            Enter Details
          </p>
          <form action="../../../api/students/leave" method='POST'> 
          <input type="text" value={user._id} className='hidden' name="userId" />
          <input type="text" value={user.mentorId} className='hidden' name="mentorId" />
          <input type="text" name="hodId" id="hodId" value={user.hodId} className='hidden'/>
          <div className="py-3 px-7">
            <div className="py-2">
              <p className="text-zinc-400 text-[10px]">STUDENT NAME</p>
              <input
                type="text"
                className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                placeholder="Enter Student Name"
                name="name"
                value={user.profile.firstName}
              />
            </div>
            <div className="">
              <p className="text-zinc-400 text-[10px]">ROLL NUMBER </p>
              <input
                type="text"
                className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                placeholder="Enter Roll Number"
                value={user.rollNumber.value}
                name='rollnumber'
              />
            </div>
            <div className="">
              <p className="text-zinc-400 text-[10px]">DEPARTMENT </p>
              <input
                type="text"
                className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                placeholder="Enter Department Name"
                value={user.department.name}
                name="department"
              />
            </div>
            <div className="py-2 ">
              <p className="relative">
                <span className="text-zinc-400 text-[10px]">SUBJECT</span>
                <span className="text-[10px] text-zinc-400 absolute right-0  bottom-1">
                  1/60 CHARACTERS
                </span>
              </p>
              <textarea
                type="textarea"
                className="bg-white w-full h-[75px] text-black text-sm p-3 my-[2px] rounded-md "
                placeholder="60 Characters only"
                value={letterSubject}
                onChange={(e)=>{setletterSubject(e.target.value)}}
                maxLength={60}
                name="subject"
              />
            </div>
            <div className="">
            
            <span className="text-zinc-400 text-[10px]">Salutation</span>

            <input
                type="text"
                className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                placeholder="Enter Department Name"
                value={salutation}
                onChange={(e)=>{setSalutation(e.target.value)}}
                name='salutation'
              />
            </div>
            <div className="">
              <p className="relative">
                <span className="text-zinc-400 text-[10px]">BODY</span>
                <span className="text-[10px] text-zinc-400 absolute right-0 bottom-1">
                  1/350 CHARACTERS
                </span>
              </p>
              <textarea
                type="textarea"
                className="bg-white w-full h-[165px] text-black text-sm p-3 my-[2px] rounded-md "
                placeholder="350 Characters only"
                // maxLength={350}
                value={letterBody}
                onChange={(e)=>{setLetterBody(e.target.value)}}
                name='letterbody'
              />
            </div>
            
            <input type="submit" value="submit" className='text-white  cursor-pointer text-xl border py-1 px-2 rounded-lg hover:bg-green-800 hover:text-white  ' />
            
          </div>


                    </form>

        </div>
      </div>
    </div>
  
    {/* )} */}
  </>
    </div>
    <div className='w-[80%] flex-auto  scale-[80%] ml-[500px]'><div className="sticky min-h-[296mm] bg-slate-50  p-7 py-8  drop-shadow-2xl h-a4H w-a4H">
    <div className="border-black border-[0.3mm] min-h-[296mm]  h-full p-11 ">
      {/* my details */}
      <div className="pt-4">
        <p>{user.profile.firstName}</p>
        <p>{user.rollNumber.value}</p>
        <p className="pt-3">To</p>
        <p>The Head Of The Department</p>
        <p>{user.department.name}</p>
        <p>{user.college.name}</p>
        {/* <p>Ibrahimpatnam</p> */}
      </div>
      <div className="py-4">
        <p>
          <span className="font-medium">Subject: </span>{letterSubject}
        </p>
      </div>
      <div>
        <p>{salutation}</p>
        <p className="pt-1">
          {letterBody}
        </p>
        <p className="pt-1 mt-4">Thanking you</p>
        <p className="pt-2 mt-4">Yours sincerely </p>
        <p>{user.profile.firstName}</p>

        {/* <p className="pt-[10mm]">cc: [Mentor's Name]</p>
        <img className="h-[15mm]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7pwCweyGH3K6QO1S-uEQwLHQdW8Lsceb-aev4LlbqA&ec=48665701"/> */}

        {/* <p className="">cc: [DOP]</p> */}
       
        {/* <p className="">cc: [Head of the department]</p>
        <img className="h-[20mm]" src="https://t4.ftcdn.net/jpg/00/00/42/95/240_F_429547_YJTlwk2Ld5kYDAbtCUwFgzmatgUHEg.jpg" /> */}
      </div>
    </div>
  </div></div>
</div>
   )}
  </>
  )
}

export default Letter

export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  console.log("u",user)

  const data = JSON.stringify(user)
  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }


  
  if (user.position !== "student") {
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
      
    },
  };
};