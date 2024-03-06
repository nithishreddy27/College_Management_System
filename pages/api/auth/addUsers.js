import { addDetails, createUser } from "../../../lib/user"

export default async function handler(req,res){
    try{
        const body = {username:req.body.email , password:"test@123" , position : req.body.position}
        console.log("user created",body)
        await createUser(body)
        var data=await addDetails(req.body)
        res.redirect('/profile')
    } 
  catch (error) {
    res.status(500).end(error.message)
  }    
}