import { resetWarningCache } from "prop-types";
import dbConnect from "../../../lib/dbConnect";
import Register from "../../../model/Register";
import facultyDetails from "../../../model/facultyDetails";

export default async function handler(req, res){
    try{

    await dbConnect()
    switch (req.method) {
        case "GET":
            // res.status(200).send(data)
            const userId = req.query.user
            // console.log("userid",userId);
            const facultySubjects = await facultyDetails.findOne({"user":userId})
            console.log("inside get in ",facultySubjects)
            res.status(200).send({"data":facultySubjects})
            // res.status(200).send({"data":true})
                
            break;
        case "POST":
            const b = req.body;
            console.log("body",b)
            const facultyRollNumber = b.rollNumber
            const facultyId = b.rollNumber
            const user = await Register.findOne({_id:Object(facultyId)})
            console.log("user inside post",user) 
            const subjectDetails = {
                user:user._id.toString(),
                facultySubjects:[{name:req.body.subjectName,class:req.body.branchName}]
            }
            console.log("user",subjectDetails)
            await facultyDetails.create(subjectDetails)
            await Register.find({ "college.paraphrase": b.collegeName ,"position":"student", "department.name":b.branchName});
            const students = await Register.find({"college.paraphrase":req.body.collegeName , "department.name":req.body.branchName , "position":"student"})
            // students?.forEach((student)=>{
                
            // })
            console.log("students",students.length)
            // b.faculty.map((item)=>{console.log("object",item)})
            res.status(200).send({"done":true})
        
      }
    }

    catch(error){
        console.log("error",error);
        res.status(500).send({"error":error})
    }

    
} 