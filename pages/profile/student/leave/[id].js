import React from 'react'
import { getLoginSession } from '../../../../lib/auth';
import { findUser } from '../../../../lib/user';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function LeaveLetterDisplay({leaveLetters,userDetails,index,id}) {
    // console.log("leave")
    const leaveLetter = JSON.parse(leaveLetters);
    const user = JSON.parse(userDetails);
    const router = useRouter()
    console.log('leave letter',leaveLetter);
    async function approve(){
      await axios.put("../../../api/students/leave",{status:"approve",userId:id,index:index})
      toast.success("Letter Approved ", {
        toastId: "Letter Approved",
      });
      router.push("/profile/faculty/leave")
    }
    async function cancel(){

    }

  return (
    <div>

         <div className='w-[80%] flex-auto  scale-[80%] mx-auto'><div className="sticky min-h-[296mm] bg-slate-50  p-7  drop-shadow-2xl h-a4H w-a4H">
    <div className="border-black border-[0.3mm] min-h-[296mm]  h-full p-11 ">
      {/* my details */}
      <div className="pt-4">
        <p>{leaveLetter.name}</p>
        <p>{leaveLetter.rollNumber}</p>
        <p className="pt-3">To</p>
        <p>The Head Of The Department</p>
        <p>{leaveLetter.department}</p>
        <p>{user.college?.name}</p>
        {/* <p>Ibrahimpatnam</p> */}
      </div>
      <div className="py-4">
        <p>
          <span className="font-medium">Subject: </span>{leaveLetter.letterSubject}
        </p>
      </div>
      <div>
        <p>{leaveLetter.salutation}</p>
        <p className="pt-1">
          {leaveLetter.letterBody}
        </p>
        <p className="pt-1">Thanking you</p>
        <p className="pt-2">Yours sincerely </p>
        <p>Richitha Reddy</p>

        <p className="pt-[10mm]">cc: [Mentor's Name]</p>
        <img className="h-[15mm]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7pwCweyGH3K6QO1S-uEQwLHQdW8Lsceb-aev4LlbqA&ec=48665701"/>

        <p className="">cc: [DOP]</p>
       
        <p className="">cc: [Head of the department]</p>
        <img className="h-[20mm]" src="https://t4.ftcdn.net/jpg/00/00/42/95/240_F_429547_YJTlwk2Ld5kYDAbtCUwFgzmatgUHEg.jpg" />
      </div>
    </div>
  </div></div>
  {user.position != "student" && (
    <div className='flex justify-center mb-10'>

    <button className='mx-5 border p-1 bg-green-600 hover:bg-green-700 text-white rounded-xl' onClick={approve}>Approve</button>
    <button className='mx-5 border p-1 bg-red-600 hover:bg-red-700 text-white rounded-xl' onClick={cancel}>Cancel</button>
</div>

  )}
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const session = await getLoginSession(context.req);
    const user = (session?._doc && (await findUser(session._doc))) ?? null;
    const data = JSON.stringify(user)

    console.log("id",context.query)
    const leaveLetters = await axios.get(`http://localhost:3000/api/students/leave/display?userId=${context.query.id}&index=${context.query.index}`)
    console.log("attendancce",leaveLetters.data)
    const leaveLetter = JSON.stringify(leaveLetters.data.data)

    if (!user) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }

    // if (user.position !== "faculty") {
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
        leaveLetters : leaveLetter,
        index : context.query.index,
        id:context.query.id
      },
    };
};
