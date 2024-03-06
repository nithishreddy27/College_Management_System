import { useRouter } from 'next/router'
import React from 'react'
import { useUser } from '../../lib/hooks'
import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'

export default function Index() {
   
  return (
    <div>
        {/* {user && } */}
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
