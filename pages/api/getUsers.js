import dbConnect from "../../lib/dbConnect"
import Register from "../../model/Register" 

export default async function handler(req, res){
    await dbConnect()
    console.log("inside")
    const data = await Register.find({"notificationMethod":"student"})
    res.status(200).send(data)
} 