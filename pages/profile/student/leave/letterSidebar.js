import React from "react";
import { getLoginSession } from "../../../../lib/auth";
import { findUser } from "../../../../lib/user";

const LetterSidebar = ({userDetails}) => {

  console.log("user",userDetails)
  // const user = JSON.parse(userDetails);
  // console.log("user",user)

  return (
 
      <>
        {/* {user && ( */}
          <div className="  bg-white sticky overflow-hidden">
          <div className=" bg-gray-800 text-white overflow-auto  ">
            <div className="p-[5%] text-white ">
              <p className="text-white text-center font-bold text-[25px] tracking-wide">
                Enter Details
              </p>
              <div className="py-3 px-7">
                <div className="py-2">
                  <p className="text-zinc-400 text-[10px]">STUDENT NAME</p>
                  <input
                    type="text"
                    className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                    placeholder="Enter Student Name"
                  />
                </div>
                <div className="py-2">
                  <p className="text-zinc-400 text-[10px]">ROLL NUMBER </p>
                  <input
                    type="text"
                    className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                    placeholder="Enter Roll Number"
                  />
                </div>
                <div className="py-2">
                  <p className="text-zinc-400 text-[10px]">DEPARTMENT </p>
                  <input
                    type="text"
                    className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                    placeholder="Enter Department Name"
                  />
                </div>
                <div className="py-2 ">
                  <p className="relative">
                    <span className="text-zinc-400 text-[10px]">SUBJECT</span>
                    <span className="text-[10px] text-zinc-400 absolute right-0 bottom-1">
                      1/60 CHARACTERS
                    </span>
                  </p>
                  <textarea
                    type="textarea"
                    className="bg-white w-full h-[75px]  text-sm p-3 my-[2px] rounded-md "
                    placeholder="60 Characters only"
                    maxLength={60}
                  />
                </div>
                <div className="py-2">
                  <select className="bg-white w-full h-9 rounded-md px-3 text-gray-700">
                    <option value="option1">Respected Sir</option>
                    <option value="option2">Respected Mam</option>
                  </select>
                </div>
                <div className="py-2 ">
                  <p className="relative">
                    <span className="text-zinc-400 text-[10px]">BODY</span>
                    <span className="text-[10px] text-zinc-400 absolute right-0 bottom-1">
                      1/350 CHARACTERS
                    </span>
                  </p>
                  <textarea
                    type="textarea"
                    className="bg-white w-full h-[165px]  text-sm p-3 my-[2px] rounded-md "
                    placeholder="350 Characters only"
                    maxLength={350}
                  />
                </div>
                {/* <div className="py-2">
                  <p className="text-zinc-400 text-[10px]">LEAVE DURATION</p>
                  <input
                    type="number"
                    className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                    placeholder="Number of days requested for leave"
                  />
                </div>
                <div className="flex gap-x-3.5">
                <div className="py-2">
                  <p className="text-zinc-400 text-[10px]">START DATE</p>
                  <input
                    type="date"
                    className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                  />
                </div>
                <div className="py-2">
                  <p className="text-zinc-400 text-[10px]">END DATE</p>
                  <input
                    type="date"
                    className="bg-white w-full h-9 p-3 my-[2px] rounded-md "
                  />
                </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      
        {/* )} */}
      </>
  );
};

export default LetterSidebar;

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
