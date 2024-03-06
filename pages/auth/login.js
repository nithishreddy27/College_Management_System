import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../../lib/hooks'
import Form from '../../components/loginForm'
import Image from 'next/image'
import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'
import Link from 'next/link'
// import Navbar from "../../components/Navbar"


const Login = () => {
  useUser({ redirectTo: '/profile', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')
  const [name, setname] = useState("Login")
  async function handleLogin(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }
    console.log(body)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        console.log("status true")
        Router.push('/profile')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }


  async function handleRegister(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      position:"collegeAdmin"
    }
    console.log("body",body)

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`)  
      return
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/auth/register/addCollegeDetails')
      } 
      else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }
  const [sign,setsign]=useState("signin")

  return (
    <div>

      {/* <Navbar/> */}
      <div
        // src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1683046360/my-uploads/zyhr7sirtmezl6qtfj6p.jpg"
        // src="https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?w=996&t=st=1691133394~exp=1691133994~hmac=12e2717004d44499e4109d09b0f68b613fcec5d1f9837ce0331f8f815f2ee226"
        className="absolute top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] object-cover bg-gradient-to-r from-blue-300 to-pink-300 "
      >
        <div className="animation-gradient"></div>
      </div>
   
      {/* <div className='relative z-30 mt-28 mx-10'>

      <h1 className='relative text-4xl tracking-widest text-pink-100 font-bold my-5 '>Welcome to College Management Website</h1>
      <p className='text-white w-[45%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente, fugit odio maiores consequatur nesciunt a nemo ipsam vitae? Temporibus aliquam dignissimos impedit quidem excepturi voluptas, error dolores nesciunt asperiores?</p>
      </div> */}
       
      <div className="relative z-30  w-[45%] left-[30%] top-28 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md w-[300px] mx-auto">
          <div className=" py-10 px-10 bg-gradient-to-r from-blue-100 to-pink-100 rounded-lg  shadow-2xl  border-[0.3px]     ">
            <p className='text-2xl text-center mb-5 tracking-widest font-semibold'>{name}</p>
            <div className="flex">
                <button className={`${sign=='signin' ? "shadow-xl bg-purple-200  ":"shadow-none"} grow py-2  text-black  rounded-xl`} onClick={()=>{setsign('signin')
                              setname("Login")
              }}>sign in</button>
                <button className={`${sign=='signup' ? "shadow-xl bg-purple-200 ":"shadow-none"} grow py-2  text-black rounded-xl`} onClick={()=>{setsign('signup')
                              setname("Sign Up")
              
              
              }}>sign up</button>
            </div>
            { sign=='signin' && (
                 <form className="signin" onSubmit={handleLogin}>
                 <h1 className="text-center font-bold text-2xl text-black mt-10">
                   Sign in to your account
                 </h1>
                 <div className="mb-4 mt-[30px] px-5">
                   <label
                     className="block text-gray-700 text-sm mb-2 font-semibold"
                     htmlFor="username"
                   >
                     Email address
                   </label>
                   <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-600 "
                     id="username"
                     name="email"
                     type="email"
                   />
                 </div>
                 <div className="mb-4 mt-[10px] px-5">
                   <label
                     className="block text-gray-700 text-sm mb-2 font-semibold"
                     htmlFor="username"
                   >
                     Password
                   </label>
                   <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-600 "
                     id="password"
                     name="password"
                     type="password"
                   />
                 </div>
                 <p className="text-red-600 ml-5"> {errorMsg}</p>

                 <div className="flex gap-12 mt-3 px-5  ">
                   <div className="text-sm mt-1 hover:underline underline-offset-1">
                     <button onClick={()=>{setsign('signup')}} className="hover:underline">Are you a new user? </button>
                   </div>
                   <div className="text-sm mt-1 text-pink-600 hover:text-pink-500">
                     <Link href="/forgot">Forgot your password?</Link>
                   </div>
                 </div>
                 <p id="mess"></p>
                 <div className="text-center mt-5 px-5">
                   <input
                     type="submit"
                     value="Login"
                     className="bg-gradient-to-r from-blue-300 to-pink-300 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-pink-700"
                   />
                 </div>
               </form>
            )}
            {sign=='signup' && (
                 <form onSubmit={handleRegister}>
                 <h1 className="text-center font-bold text-2xl text-black mt-10">
                   Sign up to your account
                 </h1>
                 <div className="mb-4 mt-[30px] px-5">
                   <label
                     className="block text-gray-700 text-sm mb-2 font-semibold"
                     htmlFor="username"
                   >
                     Email address
                   </label>
                   <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-600 "
                     id="username"
                     name="email"
                     type="email"
                   />
                 </div>
                 <div className="mb-4 mt-[10px] px-5">
                   <label
                     className="block text-gray-700 text-sm mb-2 font-semibold"
                     htmlFor="username"
                   >
                     Password
                   </label>
                   <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-600 "
                     id="password"
                     name="password"
                     type="password"
                   />
                 </div>
                 <div className="mb-4 mt-[10px] px-5">
                   <label
                     className="block text-gray-700 text-sm mb-2 font-semibold"
                     htmlFor="username"
                   >
                     Confirm Password
                   </label>
                   <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-600 "
                     id="rpassword"
                     name="rpassword"
                     type="password"
                   />
                 </div>
                  {/* {errorMsg && ( */}
                    {/* <p className="text-red-600">Erorr  {errorMsg}</p> */}
                  {/* )} */}
                 <div className="flex  mt-3 px-5  ">
                   <div className="text-sm mt-1 hover:underline underline-offset-1">
                     <button onClick={()=>setsign('signin')} className="hover:underline">Already has an account? login </button>
                   </div>
                   
                 </div>
                 <p id="mess"></p>
                 <div className="text-center mt-5 px-5">
                   <button
                     type="submit"
                     
                     className="bg-gradient-to-r from-blue-300 to-pink-300 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-indigo-700"
                    //  onClick={(e)=>handleRegister(e)}
                  >Sign In</button>
                 </div>
                 </form>
            )}
           
          </div>
        </div>
      </div>
      <style>{`
       .animation-gradient {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, pink, rgba(135, 206, 235, 1));
        background-size: 200% 100%; /* Adjust to control the speed of the animation */
        animation: gradient-animation 5s linear infinite alternate; /* Adjust duration and timing function as needed */
      }
      
      @keyframes gradient-animation {
        0% {
          background-position: 0% 50%;
        }
        100% {
          background-position: 100% 50%;
        }
      }
      
      
      `}</style>
    </div>
  )
}




export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  
  console.log("req",user)
  // if (user) {
  //   // console.log("first...", user.email, user.hash, user.salt);
  //   return {
  //     redirect: {
  //       destination: `/dashboard/${user?.category}`,
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {},
  };
};

export default Login
