// import Register from "../../../model/Register"

import dbConnect from "../../../../lib/dbConnect";
import Register from "../../../../model/Register";
import StudentDetails from "../../../../model/StudentDetails";
import facultyDetails from "../../../../model/facultyDetails";

export default async function handler(req, res){
    console.log('inside api')
    await dbConnect()
    const today = new Date()
    switch (req.method) {
        case "GET":
            const user = req.query.userId;
            const attendance = await StudentDetails.findOne({user:user})
            console.log("in get attendancec",attendance)
            // attendance.StudentDetails.studentSubjects 
            res.status(200).json({attendance:attendance})
            break;
        case "POST":
            const userId = req.body.userId
            const subjectName = req.body.subject
            const status = req.body.status
            console.log("inside api",subjectName)
            const student = await StudentDetails.findOne({user:userId})
            // console.log('student',student);
            var subject 
            var newObject
            const allAttendance = []
            student.studentSubjects.map((sub)=>{
                if(sub.name === subjectName){
                    subject = sub
                }
            })
            // console.log("subject",subject)

            if( subject.subjectAttendance.length == 0){
                console.log("sub inside",subject)
                if(status == "present"){
                    newObject = {
                        date:today,
                        status:true,
                        attendance:1
                    }
                } 
                else{
                    newObject = {
                        date:today,
                        status:false,
                        attendance:0
                    }
                }
            }
            else{
                subject.subjectAttendance.map((subject)=>{
                    allAttendance.push(subject)
                })  
                if(status== "present"){
                    
                    newObject = {
                        date: today,
                        status : true,
                        attendance:allAttendance[subject.subjectAttendance.length - 1].attendance+1
                    }
                }
                else{
                    newObject = {
                        date: today,
                        status : false,
                        attendance:allAttendance[subject.subjectAttendance.length - 1].attendance                 
                    }
                }
            }
            
            console.log("attendance",newObject)
            allAttendance.push(newObject)


            await StudentDetails.updateOne({user:userId},{$push:{"studentSubjects.$[subject].subjectAttendance":newObject}},
            { arrayFilters: [{ "subject.name": subjectName }] }
            )

            await StudentDetails.updateOne({user:userId},{ $inc: { "studentSubjects.$[subject].totalSubjectClasses": 1 }},
            { arrayFilters: [{ "subject.name": subjectName }] }
            )


            // var newObject
            // if(subject.subjectAttendance){
                
            // }
            // else{
            //     const today = new Date();

            //     newObject = {
                
            //     };
                
            // }
            // console.log("object",newObject)
            
            // const r = await StudentDetails.findByIdAndUpdate({user:userId},{$set:{studentSubjects:newObject}})
                // console.log("response",r);



            // const college = req.body.college; 
            // const studentClass = req.body.studentClass;
            // console.log("in api",studentClass,college)
            // const students = await Register.find({"college.code":college,"department.name":studentClass})
            // console.log("students",students.length)
            res.status(200).send("done")
            break;
      }


    
} 