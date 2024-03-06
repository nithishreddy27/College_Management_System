import { addEducation } from "../../../lib/user";
import { removeTokenCookie } from '../../../lib/auth-cookies'



export default async function handler(req,res){
  // console.log("education : ",req.body)
    try{
        var data=await addEducation(req.body)
        // removeTokenCookie(res)
        res.writeHead(302, { Location: '/profile' })
        res.end()
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}