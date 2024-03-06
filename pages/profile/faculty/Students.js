import React from 'react'
import { useUsers } from '../../../src/hooks/useUsers';
import { getLoginSession } from '../../../lib/auth';
import { findUser } from '../../../lib/user';
import crypto from "crypto";

export default function Students({userDetails}) {
    const user = JSON.parse(userDetails)
    const students = useUsers(user)
  return (
    <div>
        
        Students




    </div>
  )
}
export const getServerSideProps = async ({ req, res }) => {
    const session = await getLoginSession(req);
    const user = (session?._doc && (await findUser(session._doc))) ?? null;
    

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
      return {
        redirect: {
          destination: "/auth/changePassword",
          permanent: false,
        },
      };
    }
    
  }
    if (user.position !== "Faculty") {
      return {
        redirect: {
          destination: `/profile/${user.position}`,
          permanent: false,
        },
      };
    }
  return {
      props: {
      
        userDetails:data
  
      },
    };
  };
