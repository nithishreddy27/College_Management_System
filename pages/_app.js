import "../styles/globals.css";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loading from "../components/Loading";
import {motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
// import { ResumeContext } from "../src/context/ResumeContext"
// import { LetterContextProvider } from "../src/context/LetterContext";
import { ResumeContextProvider } from "../src/context/ResumeContext";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  // Listen for route changes to show/hide the loading component
  const router=useRouter()
  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading start");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log("Loading end");
    setLoading(false);
  });
  // Router.events.on("routeChangeError", handleComplete);

  return (
    <>
    {/* <ResumeContext> */}
    
{/* <LetterContextProvider> */}
    <AnimatePresence mode='wait'>
    <ResumeContextProvider>

    <motion.div 
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration:0.25,
        type:"ease-in-out"
      }}
      variants={{
        initialState:{
          opacity:0,
          // clipPath: "polygon(54% 0, 59% 0, 62% 100%, 57% 100%)",
          // clipPath: "polygon(54% 0, 54% 0, 57% 100%, 57% 100%)",


        },
        animateState:{
          opacity:1,
          // clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
          // clipPath: "polygon(54% 0, 54% 0, 57% 100%, 57% 100%)",

        },
        exitState:{
          opacity:0,
          // clipPath: "polygon(54% 0, 59% 0, 62% 100%, 57% 100%)",
          // clipPath: "polygon(54% 0, 54% 0, 57% 100%, 57% 100%)",



        }
      }}
      className="base-page-size"
      >

        {loading && <Loading />}
        <Component {...pageProps} />
      </motion.div>
    </ResumeContextProvider>
    </AnimatePresence>

    {/* </ResumeContext> */}
{/* </LetterContextProvider> */}

    </>

  );
}

export default MyApp;
