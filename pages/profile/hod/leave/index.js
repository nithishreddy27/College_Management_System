import React from 'react'
import { getLoginSession } from '../../../../lib/auth';
import { findUser } from '../../../../lib/user';
import axios from 'axios';
import { useRouter } from 'next/router';
import {FcCheckmark} from "react-icons/fc"
import {ImCross} from "react-icons/im"
import { IoMdCheckmarkCircle } from 'react-icons/io';
import Navbar from '../../../../components/Navbar';
export default function Index({leaveLetters}) {
  const leaveLetter  = JSON.parse(leaveLetters)
  console.log("leave",leaveLetter)
  const router = useRouter()
  return (
    <div>
    <Navbar/>
    <p className="bg-gradient-to-r  font-semibold  text-xl  text-center py-5 tracking-widest mb-10 mt-24">
    Leave Letters
            </p>
    <div className='mt-24'>

    {leaveLetter.map((student)=>(
      <div key={student._id}>
        {/* <h1>Student Id : {student.user}</h1> */}
        <p className="bg-gradient-to-r from-pink-300 to-violet-300 font-semibold  text-xl text-white text-center py-5 tracking-widest mb-10 mt-5">
    Pending
            </p>
        <div className='flex'>
        {student.leaveLetters.map((letter,index)=>(
          <div key={letter._id}>

              {!letter.hodApproved && (
                  <div className='min-h-[50px] min-w-[50px] m-10 '>
    
                        {!letter.hodApproved && (
                    <div className=' border mx-5 h-[100mm] w-[70mm] relative border-red-700 shadow-xl shadow-red-600' 
                    onClick={()=>{
                      router.push(`/profile/hod/leave/${student.user}?index=${index}`)
                    }}>
                    <img className='opacity-50' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg' />
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
                    <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase   top-12 px-14'> {letter.date.slice(0,10)} </span>
                    {letter.mentorApproved && (
                            <div className='absolute top-32 flex '>

                            <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase pl-14 pr-3 '>Mentor: </span>
                            <span className='mt-2'><FcCheckmark></FcCheckmark></span>
                            </div>
                        )}
                        {!letter.mentorApproved && (
                         <div className='absolute top-32 flex'>
              
                         <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase pl-14 pr-3'> Mentor :</span>
                         <span className='mt-2'> <ImCross></ImCross> </span>
                         </div>
                        )}
                   {letter.hodApproved && (
                
                <div className='absolute top-40 flex '>

                <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase px-14 '> HOD : </span>
                <span className='mt-2'><FcCheckmark></FcCheckmark></span>
                </div>
                
              )}
              {!letter.hodApproved && (
               <div className='absolute top-40 flex'>
              
               <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase   top-7 px-14 '> HOD : </span>
               <span className='mt-2'><ImCross></ImCross> </span>
               </div>
              )}
                    
                    {/* <span className=''>{letter.date.slice(0,10)} </span> */}
                    
                    {/* <div className='absolute top-2 right-1 px-2 cursor-pointer '><AiTwotoneDelete className='text-red-500 hover:text-red-600 text-lg'/></div> */}
                </div>
                      // <div className='min-h-[50px] min-w-[50px] m-10 border cursor-pointer border-green-500' onClick={()=>{
                      //   router.push(`/profile/student/leave/${user._id}?index=${index}`)
                      // }}>
                      //   {letter.date.slice(0,10)}
                      //   {letter.mentorApproved && (
                      //     <div>
                      //     mentor : 
                      //     <span> <FcCheckmark></FcCheckmark></span>
                      //     </div>
                      //   )}
                      //   {!letter.mentorApproved && (
                      //     <div>
                      //     mentor : 
                      //     <span> <ImCross></ImCross></span>
                      //     </div>
                      //   )}
                      //   {letter.hodApproved && (
                      //     <div>
                      //     HOD : 
                      //     <span> <FcCheckmark></FcCheckmark></span>
                      //     </div>
                      //   )}
                      //   {!letter.hodApproved && (
                      //     <div>
                      //     HOD : 
                      //     <span> <ImCross></ImCross></span>
                      //     </div>
                      //   )}
                      // </div>
                    )}
                      </div>
              )}
          
          </div>
        ))}
</div>
<p className="bg-gradient-to-r from-pink-300 to-violet-300 font-semibold  text-xl text-white text-center py-5 tracking-widest mb-10 mt-5">
    Approved
            </p>

<div className='flex mb-12'>
        {student.leaveLetters.map((letter,index)=>(
          <div key={letter._id}>
             
            {letter.hodApproved && (
              <>
              <div className=' border mx-5 h-[100mm] w-[70mm] relative border-green-700 shadow-xl shadow-green-600'
              
              onClick={()=>{router.push(`/profile/student/leave/${student.user}?index=${index}`)}}
              >
                
              <img className='opacity-50' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg' />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
              <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase   top-12 px-14'>{letter.date.slice(0,10)} </span>
              {letter.mentorApproved && (
                 <div className='absolute top-32 flex '>

                 <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase pl-14  pr-4'>Mentor: </span>
                 <span className='mt-2'><FcCheckmark></FcCheckmark></span>
                 </div>
              )}
              {!letter.mentorApproved && (
                <div className='absolute top-32 flex '>
              
                <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase    px-14 py-32'> mentor :</span>
                <span className='mt-2'> <ImCross></ImCross> </span>
                </div>
              )}
          {letter.hodApproved && (
                
                <div className='absolute top-40 flex '>

                <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase px-14 '> HOD : </span>
                <span className='mt-2'><FcCheckmark></FcCheckmark></span>
                </div>
                
              )}
              {!letter.hodApproved && (
                <div className='absolute top-40 flex'>
              
                <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase   top-7 px-14 '> HOD : </span>
                <span><ImCross></ImCross> </span>
                </div>
              )}
              {/* <span className=''>{letter.date.slice(0,10)} </span> */}
              
              {/* <div className='absolute top-2 right-1 px-2 cursor-pointer '><AiTwotoneDelete className='text-red-500 hover:text-red-600 text-lg'/></div> */}
          </div>     
                </>
              )}
          </div>
        ))}

</div>
      </div>
    ))}
    </div>

  </div>
  )
}


export const getServerSideProps = async ({ req, res }) => {
    const session = await getLoginSession(req);
    const user = (session?._doc && (await findUser(session._doc))) ?? null;
    const data = JSON.stringify(user)
    const leaveLetters = await axios.get(`http://localhost:3000/api/students/leave/hodDisplay?userId=${user?._id}`)
    // console.log("attendancce",leaveLetters)
    const leaveLetter = JSON.stringify(leaveLetters.data.data)

    if (!user) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
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
      
        userDetails:data,
        leaveLetters : leaveLetter
        
      },
    };
};