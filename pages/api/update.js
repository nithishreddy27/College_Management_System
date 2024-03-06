import { addDetails } from "../../lib/user";



export default async function handler(req,res){
    // console.log("in aou");
    // console.log("hander",req.body);
    // var res=await addDetails
    var response= await addDetails(req.body);
    // var data=await response.json()
    res.send({"done":response})
}