import React from 'react'
import {useResumeContext} from "../../../../src/context/ResumeContext"
import { getLoginSession } from '../../../../lib/auth';
import { findUser } from '../../../../lib/user';
import axios from 'axios';
import { useRouter } from 'next/router';
import {FcCheckmark} from "react-icons/fc"
import {ImCross} from "react-icons/im"
import { AiTwotoneDelete } from 'react-icons/ai';
import Navbar from '../../../../components/Navbar';

export default function Index({userDetails,leaveLetters}) {
  // const {letterBody, setLetterBody} = useResumeContext();
  // console.log(modules)
  const user = JSON.parse(userDetails);
  const letters = JSON.parse(leaveLetters);
  console.log("letters",letters);
  const router = useRouter()
  return (
    <div>
         <Navbar/>
         <p className="bg-gradient-to-r from-violet-300 to-pink-300  font-semibold  text-xl text-white text-center py-5 tracking-widest mb-10 mt-24">
    Leave Letters
            </p>
      <div className=' border mx-5 h-[100mm] w-[70mm] relative '
      onClick={()=>{router.push(`/profile/student/leave/letter`)}}>
                <img className='opacity-50' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg'  />
                <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
                <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase  font-serif top-5 px-14 py-32'>Create Leave letter </span>
                
            </div>
      
<p className="bg-gradient-to-r from-pink-300 to-violet-300 font-semibold  text-xl text-white text-center py-5 tracking-widest mb-10 mt-5">
    Pending
            </p>
<div className='flex mb-10'>

      {letters?.leaveLetters?.map((letter,index)=>(
        <div > {!letter.hodApproved && (
          <div onClick={()=>{router.push(`/profile/student/leave/${user._id}?index=${index}`)}}>
          <div className=' border mx-5 h-[112mm] w-[80mm] relative border-red-700 shadow-lg shadow-red-600'
          
          >
            
          <img className='opacity-50' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg'  />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
          <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase top-14 px-20'>{letter.date.slice(0,10)} </span>
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
          {/* {letter.hodApproved && (
                
                <div className='absolute top-40 flex '>

                <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase px-14 '> HOD : </span>
                <span className='mt-2'><FcCheckmark></FcCheckmark></span>
                </div>
                
              )} */}
              {!letter.hodApproved && (
                <div className='absolute top-40 flex'>
              
                <span className=' text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase   top-7 px-14 '> HOD : </span>
                <span className='mt-2'><ImCross></ImCross> </span>
                </div>
              )}
      </div>
          </div>
          
          )}
          </div>
      ))}
</div>


<p className="bg-gradient-to-r from-pink-300 to-violet-300 font-semibold  text-xl text-white text-center py-5 tracking-widest mb-10 mt-5">
    Approved
            </p>
<div className='flex mb-10'>

      {letters?.leaveLetters?.map((letter,index)=>(
        <div onClick={()=>{router.push(`/profile/student/leave/${user._id}?index=${index}`)}}> {letter.hodApproved && (
         
          <div className=' border mx-5 h-[112mm] w-[80mm] relative border-green-700 shadow-lg shadow-green-600'>
            
          <img className='opacity-50' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg'  />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
          <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase   top-14 px-20'>{letter.date.slice(0,10)} </span>
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
      </div>
         
          
          )}</div>
      ))}
</div>
      
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  const data = JSON.stringify(user)
  const leaveLetters = await axios.get(`http://localhost:3000/api/students/leave/studentDisplay?userId=${user?._id}`)
  console.log("attendancce",leaveLetters.data.data[0])
  var leaveLetter
  if(leaveLetters.data.data[0]){
      leaveLetter = JSON.stringify(leaveLetters.data.data[0])
  }
  else{
      leaveLetter = JSON.stringify({"letters":false})
  }
    
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
      leaveLetters : leaveLetter
      
    },
  };
};
