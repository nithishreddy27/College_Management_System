import React from 'react'
import { getLoginSession } from '../../../../lib/auth';
import { findUser } from '../../../../lib/user';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../../../../components/Navbar';

export default function Index({circular}) {
    const circulars = JSON.parse(circular)
    // console.log("circulars",circulars)
    const router = useRouter()
  return (
    <>
    <Navbar/>
    <div className='mt-24'>
    <p className="bg-violet-400 text-white text-center py-5 tracking-widest mb-10">
    Circulars
            </p>
        {/* <h1 className='text-center'></h1> */}
        <div className='flex'>
        <div className=' border mx-5 h-[100mm] w-[70mm] relative' onClick={()=>{
            router.push(`circular/createCircular`)
          }}>
            {console.log('cir',circular)}
           <img className='' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg' />
           <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
           <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase  font-serif top-5 px-14 py-32'>Create circular </span>
           
       </div>
        {circulars.map((circular)=>(
           <div className=' border mx-5 h-[100mm] w-[70mm] relative' key={circular.fileNumber} onClick={()=>{
            router.push(`/circular/${circular.fileNumber}`)
          }}>
            {console.log('cir',circular)}
           <img className='' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg' />
           <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
           <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase  font-serif top-5 px-14 py-32'>{circular.fileNumber} </span>
           
       </div>
            
        ))}
    </div>
    </div>
    </>

  )
}


export const getServerSideProps = async ({ req, res }) => {
    const session = await getLoginSession(req);
    const user = (session?._doc && (await findUser(session._doc))) ?? null;
    const data = JSON.stringify(user)
    console.log("user hod",user.hodId)
    const circular = await axios.get(`http://localhost:3000/api/circular?userId=${user?._id}`)
    // console.log("attendancce",leaveLetters)
    const circulars = JSON.stringify(circular.data.data)

    if (!user) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }

    // if (user.position !== "student" || user.position !=="faculty") {
    //   return {
    //     redirect: {
    //       destination: `/profile/${user.position}`,
    //       permanent: false,
    //     },
    //   };
    // }
  return {
      props: {
      
        userDetails:data,
        circular : circulars
        
      },
    };
};
